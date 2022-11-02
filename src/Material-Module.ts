import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
    exports: [
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatTableModule,
        MatButtonModule,
        MatPaginatorModule
    ]
})


export class MaterialModule {

}