import {
    ɵdefineComponent as defineComponent,
    ɵRenderFlags as RenderFlags,
    ɵQ as query,
    ɵE as elementStart,
    ɵe as elementEnd,
    ɵqR as queryRefresh,
    ɵld as load,
    QueryList,
    ɵrenderComponent as renderComponent,
    ɵT as text,
    ɵdetectChanges as detectChanges
} from '@angular/core';

class Child {
    static ngComponentDef = defineComponent({
        type: Child,
        selectors: [['child']],
        factory: () => new Child(),
        template: function (rf: RenderFlags, ctx: any) {
            text(0, 'I am child component');
        }
    });
}

class Parent {
    static ngComponentDef = defineComponent({
        type: Child,
        selectors: [['my-app']],
        factory: () => new Child(),
        template: function (rf: RenderFlags, ctx: any) {
            /**
             * <child>
             *   <child>
             *   </child>
             * </child>
             * class Cmp {
             *   @ViewChildren(Child) query0;
             *   @ViewChildren(Child, {descend: true}) query1;
             * }
             */
            let tmp: any;
            if (rf & RenderFlags.Create) {
                query(0, Child, false);
                query(1, Child, true);
                elementStart(2, 'child');
                elementStart(3, 'child');
                elementEnd();
                elementEnd();
            }
            if (rf & RenderFlags.Update) {
                queryRefresh(tmp = load<QueryList<any>>(0)) && (ctx.query0 = tmp as QueryList<any>);
                queryRefresh(tmp = load<QueryList<any>>(1)) && (ctx.query1 = tmp as QueryList<any>);
            }
        },
        directives: () => [Child]
    });
}

const parent = renderComponent(Parent);

setTimeout(() => {
    debugger;
    detectChanges(parent)
}, 1000);