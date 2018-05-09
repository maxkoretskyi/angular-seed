import { ɵdefineComponent, ɵrenderComponent, ɵRenderFlags } from '@angular/core';
import { ɵb, ɵT, ɵt, ɵdetectChanges } from '@angular/core';

class CounterComponent {
    static ngComponentDef = ɵdefineComponent({
        type: CounterComponent,
        selectors: [['my-app']],
        template: function (rf: ɵRenderFlags, ctx: CounterComponent) {
            if (rf & ɵRenderFlags.Create) {
                ɵT(0);
            }
            if (rf & ɵRenderFlags.Update) {
                ɵt(0, ɵb(ctx.count));
            }
        },
        factory: () => new CounterComponent,
        inputs: {count: 'count'},
    });

    count = 0;

    increment() {
        this.count++;
    }
}

const c = ɵrenderComponent(CounterComponent);

setTimeout(() => {
    c.increment();
    ɵdetectChanges(c);
}, 2000);
