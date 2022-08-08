import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ApiService } from '../../services/api.service'
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  freshnessList: String[] = ['Brand New', 'Second Hand', 'Refurbished'];
  productForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private api: ApiService, private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required],
      date: ['', Validators.required]
      

    })
  }

  addProduct(): void{
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next: (res) =>{
          alert('Product added succesfully!');
          this.productForm.reset();
          this.dialogRef.close('save');
        },
        error: (error) =>{
          alert("Error: " + error.message)
        }
      })
    }
  }

  

}
