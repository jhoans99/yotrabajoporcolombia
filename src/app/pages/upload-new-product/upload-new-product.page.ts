import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { UploadProductsService } from 'src/app/services/upload-products.service';

@Component({
  selector: 'app-upload-new-product',
  templateUrl: './upload-new-product.page.html',
  styleUrls: ['./upload-new-product.page.scss'],
})
export class UploadNewProductPage implements OnInit {

  showListSelectedImage: boolean = false
  public form: FormGroup;
  croppedImagepath = "";
  listOptionCategories = [];
  listOptionWayToSend = [];
  listOptionPaymentMethod = [];
  listCities = [];
  listSelectedImage = [];

  listDiscount = [
    {
      id : "1",
      name : "0%"
    },
    {
      id : "2",
      name : "5%"
    },
    {
      id : "3",
      name : "10%"
    },
    {
      id : "4",
      name : "15%"
    },
    {
      id : "5",
      name : "20%"
    },
    {
      id : "6",
      name : "25%"
    },
    {
      id : "7",
      name : "30%"
    },
    {
      id : "8",
      name : "35%"
    },
    {
      id : "9",
      name : "40%"
    },
    {
      id : "10",
      name : "45%"
    },
    {
      id : "11",
      name : "50%"
    },
    {
      id : "12",
      name : "55%"
    },
    {
      id : "13",
      name : "60%"
    },{
      id : "14",
      name : "65%"
    },
    {
      id : "15",
      name : "70%"
    },
    {
      id : "16",
      name : "75%"
    },
    {
      id : "17",
      name : "80%"
    },
    {
      id : "18",
      name : "85%"
    },{
      id : "19",
      name : "90%"
    },
    {
      id : "20",
      name : "95%"
    },
    {
      id : "21",
      name : "100%"
    }
  ]
  

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  constructor(
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File,
    public fb: FormBuilder,
    public uploadProductService: UploadProductsService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      type_shipping: ['',Validators.required],
      price: ['',Validators.required],
      category: ['',Validators.required],
      city: ['',Validators.required],
      description: ['',Validators.required],
      type_payment: ['',Validators.required],
      price_to_send: ['',Validators.required],
      discount: ['',Validators.required]
    })
    this.loadCategories()
    this.loadPaymentMethod()
    this.loadCities()
    this.loadWayToSend()
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      this.croppedImagepath = 'data:image/jpeg;base64,' + imageData;
      this.listSelectedImage.push({
        nombre: "",
        nombreArchivo : `${Math.floor(Date.now() / 1000)}.jpeg`,
        base64textString : imageData,
        pathImage: 'data:image/jpeg;base64,' + imageData
      })

      this.showListSelectedImage = this.validateSelectedImage()
    }, (err) => {
      
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Selecciona una opción",
      buttons: [{
        text: 'Abrir la galería',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Usar la camara',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  uploadProduct():void{
    let typeShipping = this.form.value.type_shipping.toString();
    let listTypeShipping = typeShipping.split(",")
    let typePayment = this.form.value.type_payment.toString();
    let listTypePayment = typePayment.split(",")
    let categories = this.form.value.category.toString()
    let listCategories = categories.split(",")
    
    let dataToSend = {
      name : this.form.value.name,
      price : this.form.value.price,
      typeShipping : listTypeShipping ,
      city: this.form.value.city,
      description: this.form.value.description,
      typePayment: listTypePayment,
      categories: listCategories,
      priceToSend: this.form.value.price_to_send,
      discount: this.form.value.discount,
      files : this.listSelectedImage
    }

    console.log(JSON.stringify(dataToSend))
  }

  loadCategories(){
    this.uploadProductService.postCategories().subscribe((data:any)=>{
      if(data.mensaje == "CONSULTA EXITOSA"){
        this.listOptionCategories = data.info 
      }
    })
  }

  loadWayToSend(){
    this.uploadProductService.postWayToSend().subscribe( (data:any)=>{
      if(data.mensaje == "CONSULTA EXITOSA"){
        this.listOptionWayToSend = data.info 
      }
    })
  }

  loadPaymentMethod(){
    this.uploadProductService.postPaymentMethod().subscribe( (data:any)=>{
      if(data.mensaje == "CONSULTA EXITOSA"){
        this.listOptionPaymentMethod = data.info 
      }
    })
  }

  loadCities(){
    this.uploadProductService.getCities().subscribe( (data:any) =>{

      if(!Array.isArray(data)) return;
      this.listCities = data
    })
  }

  validateSelectedImage(): boolean{
    return this.listSelectedImage.length > 0
  }

}
