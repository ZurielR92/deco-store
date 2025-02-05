'use client'
import { FC, useState } from 'react';
import styles from './ProductForm.module.scss';
import Image from 'next/image';
import {useForm} from 'react-hook-form';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/utils/firebase';
import { ProductInterface } from '@/types';

interface Props {
    mode: 'Add' | 'Edit'
}

function generarCodigoNumerico() {
    const longitudCodigo = 6;
    let codigo = '';
  
    for (let i = 0; i < longitudCodigo; i++) {
      // Genera un número aleatorio del 0 al 9 y lo agrega al código
      codigo += Math.floor(Math.random() * 10);
    }
  
    return codigo;
  }



const ProductForm:FC<Props> = ({ mode }) => {

    const [image, setImage] = useState<any[]>([]);
    const [file, setFIle] = useState<any>(null);
    const [imageUrl, setImageUrl] = useState('/images/set-image.jpg');
    const [isLoading, setIsLoading] = useState(false);

    const handleImageChange = (event:any) => {
        const file = event.target.files[0];
        if(file) {
            setImage(prev => [...prev, file]);
            setImageUrl(URL.createObjectURL(file));
            setValue('ref', file.name.slice(0,-5))
        }
    }

    const handleFileChange = (event:any) => {
        const file = event.target.files[0];
        if(file) {
            setFIle(file);
        }
    }

    interface DATA_FORM {
        title: string
        ref: string
        category: string
        type: string
        tags: string
    }

    const { register, handleSubmit, setValue, reset } = useForm<DATA_FORM>();

    const customHandleSubimt = async (data:DATA_FORM) => {
        let urlFile = '';
        if(image.length < 1) {
            alert('Debes seleccionar una imagen');
            return;
        }
        if(!file) {
            alert('Debe seleccionar el archivo');
            return;
        }
        if (confirm('Desea Registrar el Producto')) {
            setIsLoading(true);

            const newRef = generarCodigoNumerico();

            const res = await fetch(`/api/v1/product/${newRef}`)
            const product = await res.json();
            if(product){
                (alert('Codigo generado existente, intentalo de nuevo'));
                setIsLoading(false);
                return;
            }



            const urlList = image.map( async (file,i) => {
                const fileRef = ref(storage, `products/${newRef}-${i}-${file.name}`);
                 await uploadBytes(fileRef, file)
                 const url  = await getDownloadURL(fileRef);
                 console.log(url)
                 return url
            })
            const images = await Promise.all(urlList)


            //guardamos el archivo en firestore
            const fileRef = ref(storage, `products/${newRef}`);
            try {
                await uploadBytes(fileRef, file);
                urlFile = await getDownloadURL(fileRef);
                console.log(urlFile);
            } catch (error) {
                alert('Error al subir el archivo');
                setIsLoading(false);
                return;
            }
            const arrayTags = data.tags.split(',');
            const tags = arrayTags.map(tag => tag.trim());

            const newProduct : ProductInterface = {
                title: data.title,
                ref: newRef,
                type: data.type,
                file: urlFile,
                images:images.map(url=>{return{url,alt:data.title}}),
                category: data.category,
                tags:tags
            }

            const configFetch:RequestInit = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            }

            try {
                const res = await fetch('/api/v1/product',configFetch);
                const resJson = await res.json();
                setImage([]);
                setFIle(null);
                setImageUrl('/images/set-image.jpg');
                setIsLoading(false);
                reset();
                console.log(resJson);
                alert('Producto Guardado con exito');
                setIsLoading(false)
            } catch (error) {
                alert('Error al guardar en la base de datos');
                setIsLoading(false);
            }
        } else {
            return;
        }
    }


    return (
        <div className={styles.form}>



            <h1>{mode === 'Add' ? 'Agregar Producto' : 'Editar Producto'}</h1>

            <div className={styles.imageContainer}>
                {
                    image.map( (img, i)=>(
                        <Image key={img.name+i} width={100} height={100} alt='' src={URL.createObjectURL(img)}/>
                    ))
                }
            </div>

            <input disabled={isLoading} className={styles.hidden} type="file" id='input-image' onChange={handleImageChange}/>
            <label htmlFor="input-image">
                Agregar Imagen
            </label>





            <input disabled={isLoading} type="file" id='input-image' onChange={handleFileChange}/>
            <form onSubmit={handleSubmit(customHandleSubimt)}>
                <div>
                    <label htmlFor="">Titulo</label>
                    <input disabled={isLoading} type="text" {...register('title', {required:true})} />
                </div>
                <div>
                    <label htmlFor="">Referencia</label>
                    <input disabled={isLoading} type="text" {...register('ref', {required:true})} />
                </div>
                <div>
                    <label htmlFor="">Categoria</label>
                    <select disabled={isLoading} {...register('category')}>
                        <option value="Animales">Animales</option>
                        <option value="Anime">Anime</option>
                        <option value="Ciudades">Ciudades</option>
                        <option value="Cocina">Cocina</option>
                        <option value="Deportes">Deportes</option>
                        <option value="Dibujos Animados">Dibujos Animados</option>
                        <option value="Esculturas">Esculturas</option>
                        <option value="Abstractos">Abstractos</option>
                        <option value="Surrealistas">Surrealistas</option>
                        <option value="Frases">Frases</option>
                        <option value="Bodegones">Bodegones</option>
                        <option value="Infantiles">Infantiles</option>
                        <option value="Espacio">Espacio</option>
                        <option value="Musica">Musica</option>
                        <option value="Gatos">Gatos</option>
                        <option value="Naturaleza">Naturaleza</option>
                        <option value="Paisajes">Paisajes</option>
                        <option value="Flores">Flores</option>
                        <option value="Pinturas">Pinturas</option>
                        <option value="Religiosos">Religiosos</option>
                        <option value="Romanticos">Romanticos</option>
                        <option value="Series y Peliculas">Series y Peliculas</option>
                        <option value="Tecnologia">Tecnologia</option>
                        <option value="Video Juegos">Video Juegos</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Productos</label>
                    <select disabled={isLoading} {...register('type')}>
                        <option value="1 Pieza">1 Pieza</option>
                        <option value="3 Piezas">3 Piezas</option>
                        <option value="4 Piezas">4 Piezas</option>
                        <option value="5 Piezas">5 Piezas</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Etiquetas</label>
                    <textarea disabled={isLoading} {...register('tags', {required:true})}/>
                </div>
                <button disabled={isLoading}>AGREGAR</button>
            </form>
        </div>
    )
}


export default ProductForm;