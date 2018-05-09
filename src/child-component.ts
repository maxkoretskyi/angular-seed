import { ChangeDetectionStrategy, DoCheck, ɵdefineComponent, ɵrenderComponent, ɵRenderFlags } from '@angular/core';
import { ɵb, ɵE, ɵe, ɵi2, ɵL, ɵp, ɵT, ɵt, ɵdetectChanges } from '@angular/core';

let comp;

class MyComponent implements DoCheck {
    /* @Input() */
    name = 'Nancy';
    doCheckCount = 0;

    ngDoCheck(): void {
        this.doCheckCount++;
    }

    onClick() {
    }

    static ngComponentDef = ɵdefineComponent({
        type: MyComponent,
        selectors: [['my-comp']],
        factory: () => comp = new MyComponent(),
        /**
         * {{ doCheckCount }} - {{ name }}
         * <button (click)="onClick()"></button>
         */
        template: (rf: ɵRenderFlags, ctx: MyComponent) => {
            if (rf & ɵRenderFlags.Create) {
                ɵT(0);
                ɵE(1, 'button');
                ɵL('click', () => {
                    ctx.onClick();
                });
                ɵe();
            }
            ɵt(0, ɵi2('', ctx.doCheckCount, ' - ', ctx.name, ''));
        },
        // changeDetection: ChangeDetectionStrategy.OnPush,
        inputs: {name: 'name'}
    });
}

class MyApp {
    name: string = 'Nancy';

    static ngComponentDef = ɵdefineComponent({
        type: MyApp,
        selectors: [['my-app']],
        factory: () => new MyApp(),
        /** <my-comp [name]="name"></my-comp> */
        template: (rf: ɵRenderFlags, ctx: MyApp) => {
            if (rf & ɵRenderFlags.Create) {
                ɵE(0, 'my-comp');
                ɵe();
            }
            if (rf & ɵRenderFlags.Update) {
                ɵp(0, 'name', ɵb(ctx.name));
            }
        },
        directives: () => [MyComponent]
    });
}

const c = ɵrenderComponent(MyApp);

setTimeout(() => {
    debugger
    ɵdetectChanges(c);
}, 2000);