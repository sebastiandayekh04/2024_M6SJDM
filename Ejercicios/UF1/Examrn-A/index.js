
  const tipos_cervezas = [
    {
      nombre: "Estrella Damm",
      precio: 3.0,
      graduacion: "5.4%",
      foto: "https://birrapedia.com/img/modulos/cerveza/234/estrella-damm_15179410382787_t.jpg",
    },
    {
      nombre: "Mahou Cinco Estrellas",
      precio: 3.2,
      graduacion: "5.5%",
      foto: "https://www.mahou-sanmiguel.com/dw/image/v2/BBTJ_PRD/on/demandware.static/-/Sites-lasolana-master-catalog/default/dwd269cc68/images/hi-res/IS1626-1.jpg?sw=210&sh=210&sm=fit&q=70",
    },
    {
      nombre: "Alhambra Reserva 1925",
      precio: 3.5,
      graduacion: "6.4%",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuJrS8bTQnMWxuIXgJ-6X3ZHMm_6ZPWvvig&s",
    },
    {
      nombre: "Heineken",
      precio: 3.0,
      graduacion: "5.0%",
      foto: "https://gruporevoltosa.es/wp-content/uploads/2020/11/heineken.jpg",
    },
    {
      nombre: "Ambar Especial",
      precio: 2.8,
      graduacion: "5.2%",
      foto: "https://ambar.com/tienda/wp-content/uploads/2023/03/Botella-33-Ambar-Especial.png",
    },
  ];
  let mesas = [[], [], [], [], []];

  cargarCervezasEnSelector();
  //mostrarMesas();

  // Eventos
  document.getElementById("hacer-pedido-btn").onclick = hacerPedido;
  document.getElementById("toggle-lista-btn").onclick = toggleListaCervezas;

  function cargarCervezasEnSelector() {
    const selector = document.getElementById("cerveza-select");
    const tableBody = document.getElementById("cerveza-table-body");

    for (let i = 0; i < tipos_cervezas.length; i++) {
      const cerveza = tipos_cervezas[i];

      selector.innerHTML += `<option value="${i}">${cerveza.nombre}</option>`;

      tableBody.innerHTML += `
        <tr>
          <td>${cerveza.nombre}</td>
          <td>${cerveza.precio}€</td>
          <td>${cerveza.graduacion}</td>
          <td><img src="${cerveza.foto}" width="100" height="100" /></td>
        </tr>`;
    }
  }

  function hacerPedido() {
    const tipoCerveza = parseInt(
      document.getElementById("cerveza-select").value
    );
    const cantidad = parseInt(document.getElementById("cantidad-select").value);
    const mesa = parseInt(document.getElementById("mesa-select").value);
    const pedido = { tipo_cerveza: tipoCerveza, cantidad: cantidad };

    mesas[mesa].push(pedido);
    mostrarMesa(mesa);
  }

  function toggleListaCervezas() {
    const listaCervezas = document.getElementById("cerveza-lista");
    const botonToggle = document.getElementById("toggle-lista-btn");

    if (listaCervezas.style.display === "none") {
      listaCervezas.style.display = "block";
      botonToggle.textContent = "Ocultar Lista de Cervezas";
    } else {
      listaCervezas.style.display = "none";
      botonToggle.textContent = "Mostrar Lista de Cervezas";
    }
  }
  function mostrarMesa(numero_mesa) {
    let pedidosMesa = "";
    for (let j = 0; j < mesas[numero_mesa].length; j++) {
      const pedido = mesas[numero_mesa][j];
      const cerveza = tipos_cervezas[pedido.tipo_cerveza];
      pedidosMesa += `${cerveza.nombre} x${pedido.cantidad}<br/>\n`;
    }
    document.querySelector("#pedidos_mesa_" + (numero_mesa + 1)).innerHTML =
      pedidosMesa;
  }

  const modalPedido = document.getElementById("pedidoModal");
  if (modalPedido) {
    modalPedido.addEventListener("show.bs.modal", (event) => {
      const div_mesa = event.relatedTarget;
      let numero_mesa = parseInt(div_mesa.getAttribute("data-bs-nMesa"));
      //
      numero_mesa--;
      calcularCuenta(numero_mesa);
    });
  }

  function calcularCuenta(numero_mesa) {
    let total_precio = 0;
    let detalles_html = "";
    for (let i = 0; i < mesas[numero_mesa].length; i++) {
      total_precio_por_pedido = 0;
      let pedido = mesas[numero_mesa][i];
      let cerveza = tipos_cervezas[pedido.tipo_cerveza];
      total_precio_por_pedido = cerveza.precio * pedido.cantidad;
      detalles_html += `<tr>
          <td>${cerveza.nombre}</td>
          <td>${pedido.cantidad}</td>
          <td>${cerveza.precio}€</td>
          <td>${total_precio_por_pedido}€</td>
        </tr>`;
      total_precio += total_precio_por_pedido;
    }

    //modal-pedido-body
    //modal-total
    document.getElementById("modal-pedido-body").innerHTML = detalles_html;
    document.getElementById("modal-total").innerHTML = total_precio;
  }

