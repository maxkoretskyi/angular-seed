import {
    TemplateRef,
    ViewContainerRef,
    ɵC as container,
    ɵdefineComponent as defineComponent,
    ɵdefineDirective as defineDirective,
    ɵE as elementStart,
    ɵe as elementEnd,
    ɵinjectViewContainerRef as injectViewContainerRef,
    ɵld as load,
    ɵRenderFlags as RenderFlags,
    ɵT as text
} from '@angular/core';
import { getOrCreateNodeInjectorForNode, getOrCreateTemplateRef } from '@angular/core/src/render3/di';
import { bind, elementProperty, textBinding } from '@angular/core/src/render3/instructions';

let directiveInstance: DirectiveWithVCRef;

class DirectiveWithVCRef {
    static ngDirectiveDef = defineDirective({
        type: DirectiveWithVCRef,
        selectors: [['', 'vcref', '']],
        factory: () => directiveInstance = new DirectiveWithVCRef(injectViewContainerRef()),
        inputs: {tplRef: 'tplRef'}
    });

    tplRef: TemplateRef<{}>;

    // injecting a ViewContainerRef to create a dynamic container in which embedded views will be
    // created
    constructor(public vcref: ViewContainerRef) {
    }
}

function embeddedTemplate(rf: RenderFlags, ctx: any) {
    if (rf & RenderFlags.Create) {
        text(0);
    }
    if (rf & RenderFlags.Update) {
        textBinding(0, bind(ctx.name));
    }
}

function createView(s: string, index?: number) {
    directiveInstance !.vcref.createEmbeddedView(directiveInstance !.tplRef, {name: s}, index);
}

class Parent {
    static ngComponentDef = defineComponent({
        type: Parent,
        selectors: [['my-app']],
        factory: () => new Parent(),
        template: function (rf: RenderFlags, ctx: any) {
            if (rf & RenderFlags.Create) {
                container(0, embeddedTemplate);
                elementStart(1, 'header', ['vcref', '']);
                elementEnd();
                elementStart(2, 'footer');
                elementEnd();
            }
            if (rf & RenderFlags.Update) {
                const tplRef = getOrCreateTemplateRef(getOrCreateNodeInjectorForNode(load(0)));
                elementProperty(1, 'tplRef', bind(tplRef));
            }
        },
        directives: () => [DirectiveWithVCRef]
    });
}
