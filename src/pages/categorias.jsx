import React from 'react';

export function ShowCategorias({jData}) {
    return (

        <div className="container py-4">                                  
            <div className="row">
                <div className="bg-light-green text-center mb-5">                        
                    <h1 className="section-title ps-3 pt-4"> Estos son los rubros más buscados por los vecinos del Barrio.</h1>
                    <h2 className="section-subtitle ps-3 pb-4"> Podés elegir el que se ajuste a tus necesidades.</h2>
                </div>

                {  
                    (jData.length === 0) ? <h2 className="section-subtitle ps-3 pb-4"> No se encontró ningun rubro</h2>:
                                    
                    jData.map((cat, index) => { 
                    
                    return(                    
                        <div className="col-xl-3 col-md-6 col-sm-12 col-mant" key={cat._id}>
                            {/* <!-- <a href="/<%= page %>/<%= cat.name.toLowerCase() %>" className="card-link"> --> */}
                            <a href={"/proveedores/" + cat.name.toLowerCase()} className="card-link">                                 <div className="card my-3">                                
                                    <div className="card-body card-style">                                
                                        <img className="card-image" src={cat.img} alt={cat.name} />
                                        <h5 className="card-title card-title-style pt-3">{cat.name}</h5>                                    
                                    </div>
                                </div>    
                            </a>
                        </div> 
                    )
                    })                  
                }
            </div>
        </div>
    )
}