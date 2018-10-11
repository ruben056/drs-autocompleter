import { EventEmitter, Output, SimpleChanges, Input, Component, OnInit , ChangeDetectionStrategy, OnChanges} from '@angular/core';

// dumb reusable autocomplete component
// INPUT
// receives a list of possible values as string[]
// and optionally a selectedValue as string
// must pass id to prevent id collissions...
// OUTPUT
// will output value if the value in text field is in the allowed list
@Component({
  selector: 'app-drs-autocomplete',
  templateUrl: './drs-autocomplete.component.html',
  styleUrls: ['./drs-autocomplete.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrsAutocompleteComponent implements OnInit, OnChanges {

  @Input() values: string[];
  @Input() selectedValue = '';
  @Input() id: string;

  @Output() selected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('changes:',JSON.stringify(changes));
  }

  getListId(): string{
    return this.id;
  }

  inputChanged(input: string): void{
    console.log('input changed : ', input);
    if(this.values.some((val)=>input===val)){
      this.selected.emit(input);
    }else{
      this.selected.emit('');
    }
  }
}
