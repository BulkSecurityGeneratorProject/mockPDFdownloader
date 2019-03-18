import { NgModule } from '@angular/core';

import { PdfgenSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [PdfgenSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [PdfgenSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PdfgenSharedCommonModule {}
