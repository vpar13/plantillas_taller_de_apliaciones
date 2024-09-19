const btn = document.getElementById("buscador")

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const result= document.getElementById("content-result")

    console.log("hola")
    result.innerHTML = `
    <div> 
    <div class="editar"> <button id="editBtn"> Editar </button> </div> 
        <ul class="resultado">
            <li class="result-data">nombre <button class="deleteBtn">Eliminar</button></li>
            <li class="result-data">Rut <button class="deleteBtn">Eliminar</button></li>
            <li class="result-data">Patente <button class="deleteBtn">Eliminar</button></li>
            <li class="result-data">Marca <button class="deleteBtn">Eliminar</button></li>
             <li class="result-data">Modelo <button class="deleteBtn">Eliminar</button></li>
              <li class="result-data">año<button class="deleteBtn">Eliminar</button></li>
        </ul>
        <button id="saveBtn">Guardar</button>
    </div>
`;
})