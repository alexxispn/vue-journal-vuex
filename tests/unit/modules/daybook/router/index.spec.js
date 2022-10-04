import daybookRouter from '@/modules/daybook/router';

describe('Daybook router', () => {
    it('should have this configuration', () => {
        expect(daybookRouter).toMatchObject({
            name: 'daybook',
            component: expect.any(Function),
            children: [
                {
                    path: '',
                    name: 'no-entry',
                    component: expect.any(Function)
                },
                {
                    path: ':id',
                    name: 'entry',
                    component: expect.any(Function),
                    props: expect.any(Function)
                }
            ]
        });
    })
    describe('children routes', () => {
        const childrenRoutes = daybookRouter.children.map(child => child.name)
        it('should contain "no-entry" children route', () => {
            expect(childrenRoutes).toContain('no-entry')
        })
        it('should contain "entry" children route', () => {
            expect(childrenRoutes).toContain('entry')
        })
        it('should contain "entry" children route with props', () => {
            const entryRoute = daybookRouter.children.find(child => child.name === 'entry')
            expect(entryRoute.props({ params: { id: 'qwerty' } })).toEqual({ id: 'qwerty' })
        })
    })
})
