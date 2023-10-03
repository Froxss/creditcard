import { FormControl } from '@angular/forms';

export class CardNumberFormControl extends FormControl {
  override setValue(value: string | null, options: any) {
    if (value && !value.match(/^[0-9]{0,16}$/)) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
