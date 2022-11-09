class Base {
	constructor(nombre, minutos) {
		this.nombre = nombre;
		this.minutos = minutos;
		this.sig = null;
		this.ant = null;
	}

	descripcion() {
		return `Nombre: ${this.nombre} - Minutos: ${this.minutos}\n`;
	}

	getNombre() {
		return this.nombre;
	}
	getMinutos() {
		return this.minutos;
	}
}

class Ruta {
	constructor() {
		this.primero = null;
	}

	agregar(nuevo) {
		if(this.primero === null) {
			this.primero = nuevo;
			nuevo.sig = nuevo;
			nuevo.ant = nuevo;
		} else if(this.primero.sig === this.primero){
			this.primero.sig = nuevo;
			this.primero.ant = nuevo;
			nuevo.sig = this.primero;
			nuevo.ant = this.primero;
		} else {
			nuevo.sig = this.primero;
			nuevo.ant = this.primero.ant;
			this.primero.ant.sig = nuevo;
			this.primero.ant = nuevo;
		}
	}

	buscar(nombre) {
		if(this.primero === null) {
			return null;
		}
		if(this.primero.ant.getNombre() === nombre) {
			return this.primero.ant;
		}

		let aux = this.primero;
		while(aux.sig !== this.primero) {
			if(aux.getNombre() === nombre) {
				return aux;
			}
			aux = aux.sig;
		}
		return null;
	}
	eliminar(nombre) {
		if(this.primero === null) {
			return false;
		} else if(this.primero.sig === this.primero && this.primero.getNombre() === nombre) {
			this.primero = null;
			return true;
		} else if(this.primero.getNombre() === nombre) {
			this.primero.ant.sig = this.primero.sig;
			this.primero.sig.ant = this.primero.ant;
			this.primero = this.primero.sig;
			return true;
		} else {
			let aux = this.primero;
			while(aux.sig !== this.primero) {
				if(aux.getNombre() === nombre) {
					aux.ant.sig = aux.sig;
					aux.sig.ant = aux.ant;
					return true;
				}
				aux = aux.sig;
			}
		}
		return false;
	}
	imprimir() {
		let lista = ""
		let aux = this.primero;
		while(aux.sig !== this.primero) {
			lista += aux.descripcion()
			aux = aux.sig;
		}
		return lista;
	}

	recorrido(baseInicio, horaInicio, minutoInicio, horaFin, minutoFin) {
		if(this.primero === null) {
			return "No existen bases registradas."
		}

		let aux = this.primero;
		let inicioRecorrido = null;
		let minutosInicioTransformados = horaInicio*60 + minutoInicio;
		let minutosFinTransformados = horaFin*60 + minutoFin;
		let recorridoResumen = "";

		while(aux.sig !== this.primero) {
			if(aux.getNombre() === baseInicio) {
				inicioRecorrido = aux;
			}
			aux = aux.sig;
		}
		
		while(minutosInicioTransformados + inicioRecorrido.getMinutos() < minutosFinTransformados) {
			minutosInicioTransformados += inicioRecorrido.getMinutos()
			recorridoResumen += inicioRecorrido.descripcion()
			inicioRecorrido = inicioRecorrido.sig;
		}

		console.log(minutosInicioTransformados)
		console.log(minutosFinTransformados)
		return recorridoResumen;

	}
}

let ruta = new Ruta();
let base = new Base('Rojos', 30);
ruta.agregar(base);
base = new Base('Comala', 50);
ruta.agregar(base);
base = new Base('Hospital', 60);
ruta.agregar(base);
base = new Base('Coliman', 20);
ruta.agregar(base);
base = new Base('Sorina', 15);
ruta.agregar(base);
//console.log(ruta.eliminar('Hospital'))
console.log(ruta.recorrido('Rojos', 7, 20, 18, 45));
