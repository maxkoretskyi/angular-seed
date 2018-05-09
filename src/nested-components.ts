import {
    ChangeDetectionStrategy,
    DoCheck,
    ɵdefineComponent as defineComponent,
    ɵE as elementStart,
    ɵe as elementEnd,
    ɵRenderFlags as RenderFlags,
    ɵT as text,
    ɵb as bind,
    ɵp as elementProperty,
    ɵi2 as interpolation2,
    ɵL as listener,
    ɵt as textBinding,
    ɵrenderComponent as renderComponent,
    ɵNgOnChangesFeature as NgOnChangesFeature,
    SimpleChanges
} from '@angular/core';

let comp: MyComponent;

class MyComponent implements DoCheck {
    /* @Input() */
    name = 'Nancy';
    doCheckCount = 0;

    ngDoCheck(): void {
        this.doCheckCount++;
    }

    ngOnChanges(simpleChanges: SimpleChanges) {
    }

    ngAfterViewChecked() {
    }

    onClick() {
    }

    static ngComponentDef = defineComponent({
        type: MyComponent,
        selectors: [['my-comp']],
        factory: () => comp = new MyComponent(),
        features: [NgOnChangesFeature()],
        /**
         * {{ doCheckCount }} - {{ name }}
         * <button (click)="onClick()"></button>
         */
        template: (rf: RenderFlags, ctx: MyComponent) => {
            if (rf & RenderFlags.Create) {
                text(0);
                elementStart(1, 'button');
                {
                    listener('click', () => {
                        ctx.onClick();
                    });
                }
                elementEnd();
            }
            textBinding(0, interpolation2('', ctx.doCheckCount, ' - ', ctx.name, ''));
        },
        changeDetection: ChangeDetectionStrategy.OnPush,
        inputs: {name: 'name'}
    });
}

class MyApp {
    name: string = 'Nancy';

    static ngComponentDef = defineComponent({
        type: MyApp,
        selectors: [['my-app']],
        factory: () => new MyApp(),
        /** <my-comp [name]="name"></my-comp> */
        template: (rf: RenderFlags, ctx: MyApp) => {
            if (rf & RenderFlags.Create) {
                elementStart(0, 'my-comp');
                elementEnd();
            }
            if (rf & RenderFlags.Update) {
                elementProperty(0, 'name', bind(ctx.name));
            }
        },
        directives: () => [MyComponent]
    });
}

const parent = renderComponent(MyApp);

setTimeout(() => parent.name = 'updated');