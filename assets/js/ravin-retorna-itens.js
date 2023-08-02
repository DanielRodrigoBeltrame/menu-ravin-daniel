
function pegarItens(categoria) {
    const url = "https://64b70d3ddf0839c97e16603c.mockapi.io/ravinDaniel/api/produtos";

    fetch(url)
      .then((dados) => { return dados.json(); })
      .then((data) => { montarHtml(data, categoria) });
  }

  function montarHtml(itensMenu, categoria) {

    let itensFiltrados;

    if(categoria != null){
        itensFiltrados = itensMenu.filter((item) => item.categoria === categoria);
      } else {
        itensFiltrados = itensMenu;
      }   

      
    let produtoDiv = document.getElementById("produto");
    let textHtml = "";

    for (itemMenu of itensFiltrados) {
      
      textHtml += `

          <div class="col-lg-6 mb-lg-0 mb-4">
            <div class="card m-2">
              <div class="card-body p-3">
                <div class="row" >
                  <div class="col-lg-6">
                    <div class="d-flex flex-column h-100" >
                      <h3 class="font-weight-bolder text-primary">${itemMenu.nome}</h3>
                      <p class="mb-5">${itemMenu.descricao}</p>
                      <div class="d-flex flex-row align-items-center d-grid gap-2">
                        <h5 class="font-weight-bolder display-6 text-center text-secondary">R$${itemMenu.valor}</h5>
                        <input type="number" name="qtd-${itemMenu.id}" class="form-control input-sm text-primary text-center">
                      </div>
                      <a href="#" class="btn btn-primary">Fazer Pedido</a>
                    </div>
                  </div>
                  <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                    <div class="bg-gradient-primary border-radius-lg h-100">
                      <img src="../assets/img/shapes/waves-white.svg" class="position-absolute h-100 w-50 top-0 d-lg-block d-none" alt="waves">
                      <div class="position-relative d-flex align-items-center justify-content-center h-100">
                        <img class="w-100 position-relative z-index-2 pt-4" src="${itemMenu.imagem}" alt="${itemMenu.produto}">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      `
    }
    produtoDiv.innerHTML = textHtml;
  }

  function cadastrarMesa(){
    let labelMesa = document.getElementById("id-mesa");
    let dadoMesa = document.getElementById("mesa");
    let dadoInput = document.getElementById("id-mesa-input").value;
    let botaoMesa = document.getElementById("btn-mesa");

    labelMesa.classList.toggle('active');
    botaoMesa.classList.toggle('active');
    dadoMesa.innerText = dadoInput;
  }