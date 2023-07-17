class Numeros{
    limpiar(){
        document.getElementById(`num`).value= " "
        document.getElementById(`multi`).value= " "
        document.getElementById(`resp`).textContent= " "
        

    }
    limpiar2(){
        
        document.getElementById('mun1').value= ""
        document.getElementById('mun2').value= ""
        document.getElementById('resp').textContent= ""
          


    }

    vuelto(){ 
      const cantidad = parseFloat(document.getElementById('cantidad').value);
      const precio = parseFloat(document.getElementById('precio').value);
      const costo = parseFloat(document.getElementById('costo').value);
      const pago = parseFloat(document.getElementById('pago').value);
      const resultado = document.getElementById('resp');

        if (isNaN(cantidad) || isNaN(precio) || isNaN(costo) || isNaN(pago)) {
          resultado.textContent = 'Por favor, ingrese valores numéricos válidos.';
        } else {
          const total = cantidad * precio;
          const vuelto = pago - total - costo;

          if (vuelto < 0) {
            resultado.textContent = 'El pago no es suficiente.';
          } else {
            resultado.textContent = 'El vuelto es: ' + vuelto.toFixed(2);
            }
          }
        }
     
    multiplo(){
        let num = document.getElementById("num").value
        num = parseInt(num)
        let multi = document.getElementById("multi").value
        multi = parseInt(multi)
        let resp = document.getElementById("resp")
        //console.log(resp.textContent)
        console.log(num,multi)
        if (num % multi == 0){
            resp.textContent=`${multi} Es multiplo de ${num}`
            //console.log(multi, " Es multiplo de ",num)
        }else{
            resp.textContent=`${multi} No es multiplo de ${num}`
        }
        
    }
    //·3
    
      divisores() {
        let c = 1
        let num = document.getElementById("num").value
        let resp = document.getElementById("resp")
        let divisores = ""
        num = parseInt(num)

        while (c < num){
          if (num % c == 0){
            console.log(c)
            divisores = divisores + " " + c.toString()
          }
          c= c+1
        }
        resp.textContent= divisores
      
      


      }

    
      //·4
      
      sumaDivisores(){
        let c = 1
        let num = document.getElementById("num").value
        let resp = document.getElementById("resp")
        let divisores = ""
        num = parseInt(num)
        let acu = 0

        while (c < num){
          if (num % c == 0){
            console.log(c)
            acu = acu + c
            divisores = divisores + " " + c.toString()
          }
          c= c+1
        }
        resp.textContent= acu


      }


      cantidadDivisores(){
        let c = 1
        let num = document.getElementById("num").value
        let resp = document.getElementById("resp")
        let divisores = ""
        num = parseInt(num)
        let cd = 0

        while (c < num){
          if (num % c == 0){
            console.log(c)
            cd = cd + 1
            divisores = divisores + " " + c.toString()
          }
          c= c+1
        }
        resp.textContent= cd


      }

       
        perfectos() {
          let c = 1
          let num = document.getElementById("num").value
          let resp = document.getElementById("resp")
          let divisores = ""
          num = parseInt(num)
          let acu = 0
  
          while (c < num){
            if (num % c == 0){
              console.log(c)
              acu = acu + c
              divisores = divisores + " " + c.toString()
            }
            c= c+1
          }
          if (acu == num)
          resp.textContent = "El numero es perfecto"
          else 
          resp.textContent = "El numero no es perfecto"  
        }




        amigos() {
          let num1 = parseInt(document.getElementById("num1").value);
            let num2 = parseInt(document.getElementById("num2").value);
            let res = document.getElementById("resp");

            let sumaDivisoresNum1 = 0;
            let sumaDivisoresNum2 = 0;

            for (let i = 1; i <= num1; i++) {
                if (num1 % i === 0) {
                    sumaDivisoresNum1 += i;
                }
            }
            for (let i = 1; i <= num2; i++) {
                if (num2 % i === 0) {
                    sumaDivisoresNum2 += i;
                }
            }
            res.textContent = (sumaDivisoresNum1 === sumaDivisoresNum2) ? `Los números ${num1} y ${num2} son amigos.` : `Los números ${num1} y ${num2} no son amigos.`;


            
        }
        
        primo() {
          let ingreso = document.getElementById('num').value;
          let res = document.getElementById('resp');
          let acum = 0;
          
          if (ingreso !== "") {
              if (isNaN(ingreso) === false) {
                  ingreso = parseFloat(ingreso);
                  
                  for (let i = 1; i <= ingreso; i++) {
                      if (ingreso % i === 0) {
                          acum = acum + 1;
                      }
                  }
                  
                  if (acum === 2) {
                      res.textContent = `El número ${ingreso.toString()} es un número primo.`;
                  } else {
                      res.textContent = `El número ${ingreso.toString()} no es un número primo.`;
                  }
              } else {
                  alert("ERROR. Ingrese un valor numérico.");
              }
          } else {
              alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parámetros por establecer.");
          }
      }    



      primosGemelos(){
        const num1 = parseInt(document.getElementById('num1').value);
        const num2 = parseInt(document.getElementById('num2').value);
        const res = document.getElementById('resp');

        let esPrimo = function(num) {
            if (num < 2) return 0;
            if (num === 2) return 1;
            if (num % 2 === 0) return 0;

            let c = 3;
            let primo = 1;
            const limite = Math.sqrt(num);
            while (c <= limite && primo === 1) {
                const r = num % c;
                if (r === 0) {
                    primo = 0;
                }
                c += 2; // Solo comprobar números impares para mejorar eficiencia
            }
            return primo;
        }

        if (esPrimo(num1) === 1 && esPrimo(num2) === 1 && Math.abs(num1 - num2) === 2) {
            res.textContent = `Los números ${num1} y ${num2} son primos gemelos.`;
        } else {
            res.textContent = `Los números ingresados no son primos gemelos.`;
        }
    }
             
      invertirNumero() {
        let num = parseInt(document.getElementById("num").value);
        let resp = "";

        while (num > 0) {
        resp += (num % 10).toString();
        num = parseInt(num / 10);
        }
  
        document.getElementById("resp").textContent = resp;
      }


      cantidadDigitos(){
        let num = parseInt(document.getElementById("num").value);
            let cont = 0;

            while (num > 0) {
                cont++;
                num = parseInt(num / 10);
            }

            document.getElementById("resp").textContent = `El número tiene ${cont} dígitos.`;
        }
      
      
    
      
      factorial(){
        let num = document.getElementById('num').value;
        let resultado = document.getElementById('resp');
        let factorial = 1;
        if (num === '') {
          resultado.textContent = 'Por favor, ingresa un número.';
        } else {
        num = parseInt(num);

        if (num === 0 || num === 1) {
        resultado.textContent = 'El factorial es 1.';
        } else {
          for (let i = 2; i <= num; i++) {
            factorial *= i;
          }
         resultado.textContent = 'El factorial es ' + factorial + '.';
         }
        }

      }




      exponente(){
        let base = parseFloat(document.getElementById("base").value);
        let exp = parseInt(document.getElementById("exp").value);
        let result = document.getElementById("resp");
      
        let acu = 1;
        let c = 1;
      
        while (c <= exp) {
          acu = acu * base;
          c = c + 1;
        }
      
        result.textContent = "El resultado es: " + acu;
      }



      tablaMultiplicar() {
        let numeroIngresado = parseFloat(document.getElementById("num").value)
        let tabla = ""
        for (let i = 1; i <= 12; i++) {
            let producto = i * numeroIngresado
            tabla = tabla + numeroIngresado + " * " + i + " = " + producto + "\n"

        }
        let textarea = document.getElementById("resp")
        textarea.textContent = tabla
    }



    fibonacci(){
      let a = 0, b = 1, c = 0, cont = 2;
      let n = parseInt(document.getElementById("n").value);
      let res = document.getElementById("resp");
      let serie = a.toString() + " " + b.toString();

      if (n === 1) {
          res.textContent = "La secuencia de Fibonacci es: " + a;
      } else if (n === 2) {
          res.textContent = "La secuencia de Fibonacci es: " + serie;
      } else {
          while (cont < n) {
              c = a + b;
              serie = serie + " " + c.toString();
              a = b;
              b = c;
              cont++;
          }
          res.textContent = "La secuencia de Fibonacci es: " + serie;
      }
  }


 
}
const numero = new Numeros();
numero.multiplo()
//numero.divisores()