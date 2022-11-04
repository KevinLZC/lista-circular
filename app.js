class Base {
	constructor(nombre, minutos) {
		this.nombre = nombre;
		this.minutos = minutos;
		this.sig = null;
		this.ant = null;
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

	agregar(nuevo) {}
	buscar(nombre) {}
	eliminar(nombre) {}
	imprimir() {}
	recorrido(baseInicio, horaInicio, minutoInicio, horaFin, minutoFin) {}
}
