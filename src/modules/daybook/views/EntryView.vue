<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-5 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-5">{{ month }}</span>
        <span class="mx-2 fw-light">{{ year }}, {{ weekday }}</span>
      </div>
      <div>
        <input v-show="false" type="file" @change="onSelectedImage" ref="fileInput" accept="image/*"/>
        <button class="btn btn-primary" @click="onUploadImage">
          Upload Image
          <i class="fas fa-cloud-upload-alt"></i>
        </button>
        <button v-if="entry.id" class="btn btn-outline-danger mx-2" @click="onDeleteEntry">
          Delete
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
    <div class="d-flex flex-column px-3 h-75">
      <textarea v-model="entry.text" placeholder="What happened today?"></textarea>
    </div>
    <img v-if="entry.picture && !localImage" :src="entry.picture" class="img-thumbnail" alt="entry picture"/>
    <img v-if="localImage" :src="localImage" alt="entry picture" class="img-thumbnail">
  </template>
  <FabButton icon="fa-save" @on:click="saveEntry"/>
</template>

<script>
import {defineAsyncComponent} from "vue";
import {mapActions, mapGetters} from "vuex";
import Swal from "sweetalert2";
import getFullDate from "@/modules/daybook/helpers/getFullDate";
import uploadImage from "@/modules/daybook/helpers/uploadImage";


export default {
  name: "EntryView",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    FabButton: defineAsyncComponent(() => import(/* webpackChunkName: "SaveButton" */ "../components/FabButton.vue"))
  },
  data() {
    return {
      entry: null,
      localImage: null,
      file: null
    }
  },
  computed: {
    ...mapGetters('journal', ['getEntryById']),
    day() {
      const {day} = getFullDate(this.entry.date);
      return day;
    },
    month() {
      const {month} = getFullDate(this.entry.date);
      return month;
    },
    year() {
      const {year} = getFullDate(this.entry.date);
      return year;
    },
    weekday() {
      const {weekday} = getFullDate(this.entry.date);
      return weekday;
    },
  },
  methods: {
    ...mapActions('journal', ['updateEntry', 'addEntry', "deleteEntry"]),
    loadEntry() {
      let entry;
      if (this.id === 'new') {
        entry = {
          text: '',
          date: new Date().getTime()
        }
      } else {
        entry = this.getEntryById(this.id);
        if (!entry) {
          this.$router.push({name: 'no-entry'});
        }
      }
      this.entry = entry;
    },
    async saveEntry() {
      Swal.showLoading();
      this.entry.picture = await uploadImage(this.file);
      if (this.entry.id) {
        await this.updateEntry(this.entry);
      } else {
        const id = await this.addEntry(this.entry)
        this.$router.push({name: 'entry', params: {id}});
      }
      this.file = null;
      await Swal.fire('Saved', 'Entry saved successfully', 'success');
    },
    async onDeleteEntry() {
      const {isConfirmed} = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });
      if (isConfirmed) {
        await this.deleteEntry(this.entry.id);
        await Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        );
        this.$router.push({name: 'no-entry'});
      }
    },
    onSelectedImage(event) {
      const image = (event.target.files[0]);
      if (!image) {
        this.localImage = null;
        this.file = null;
        return;
      }
      this.file = image;
      const fr = new FileReader();
      fr.onload = () => this.localImage = fr.result;
      fr.readAsDataURL(image);
    },
    onUploadImage() {
      this.$refs.fileInput.click();
    }
  },
  created() {
    this.loadEntry();
  },
  watch: {
    id() {
      this.loadEntry();
    }
  }
}
</script>

<style lang="scss" scoped>
textarea {
  font-size: 1.2rem;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

</style>
