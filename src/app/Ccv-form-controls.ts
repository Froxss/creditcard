import { FormControl } from '@angular/forms';

export class CcvFormControl extends FormControl {
  override setValue(value: string | null, options: any) {
    if (value && !value.match(/^[0-9]{0,3}$/)) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
