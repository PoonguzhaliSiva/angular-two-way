import { Component,Input } from "@angular/core";



@Component({
    selector:'hello',
    template:'<h1>Hello {{name}}!</h1>',
    styles:['h1{font-family:Arial;}']
})

export class HelloComponent {
    @Input() name: string | undefined;
}

@Component({
    selector:'hi',
    template:'<h1>Hi {{name}}!</h1>',
    styles:['h1{font-family:Arial;}']
})

export class HiComponent {
    @Input() name: string | undefined;
}

@Component({
    selector:'test',
    template:'<h1>Welcome {{name}}!</h1>',
    styles:['h1{font-family:Arial;}']
})

export class TestComponent {
    @Input() name: string |undefined;
}


