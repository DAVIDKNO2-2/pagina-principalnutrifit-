"use client"

export default function NutriFitHome() {
  // Funciones de las calculadoras
  const calcularIMC = () => {
    const peso = Number.parseFloat(document.getElementById("peso-imc").value)
    const altura = Number.parseFloat(document.getElementById("altura-imc").value) / 100 // convertir cm a m

    if (!peso || !altura) {
      alert("Por favor, ingresa peso y altura válidos")
      return
    }

    const imc = peso / (altura * altura)
    let categoria = ""
    let color = ""

    if (imc < 18.5) {
      categoria = "Bajo peso"
      color = "text-red-400"
    } else if (imc < 25) {
      categoria = "Peso normal"
      color = "text-red-600"
    } else if (imc < 30) {
      categoria = "Sobrepeso"
      color = "text-red-500"
    } else {
      categoria = "Obesidad"
      color = "text-red-700"
    }

    const resultado = document.getElementById("resultado-imc")
    resultado.innerHTML = `
      <p class="font-semibold text-gray-800">IMC: ${imc.toFixed(1)}</p>
      <p class="text-sm ${color}">${categoria}</p>
    `
    resultado.classList.remove("hidden")
  }

  const calcularCalorias = () => {
    const peso = Number.parseFloat(document.getElementById("peso-cal").value)
    const altura = Number.parseFloat(document.getElementById("altura-cal").value)
    const edad = Number.parseFloat(document.getElementById("edad-cal").value)
    const sexo = document.getElementById("sexo-cal").value
    const actividad = Number.parseFloat(document.getElementById("actividad-cal").value)

    if (!peso || !altura || !edad) {
      alert("Por favor, completa todos los campos")
      return
    }

    let tmb
    if (sexo === "hombre") {
      tmb = 88.362 + 13.397 * peso + 4.799 * altura - 5.677 * edad
    } else {
      tmb = 447.593 + 9.247 * peso + 3.098 * altura - 4.33 * edad
    }

    const calorias = Math.round(tmb * actividad)

    const resultado = document.getElementById("resultado-cal")
    resultado.innerHTML = `
      <p class="font-semibold text-gray-800">${calorias} calorías/día</p>
      <p class="text-sm text-gray-600">Para mantener tu peso actual</p>
    `
    resultado.classList.remove("hidden")
  }

  const calcularAgua = () => {
    const peso = Number.parseFloat(document.getElementById("peso-agua").value)
    const actividad = Number.parseFloat(document.getElementById("actividad-agua").value)
    const clima = Number.parseFloat(document.getElementById("clima-agua").value)

    if (!peso) {
      alert("Por favor, ingresa tu peso")
      return
    }

    // Fórmula: 35ml por kg de peso corporal como base
    const aguaML = peso * 35 * actividad * clima
    const vasos = Math.round(aguaML / 250) // 250ml por vaso
    const litros = (aguaML / 1000).toFixed(1)

    const resultado = document.getElementById("resultado-agua")
    resultado.innerHTML = `
      <p class="font-semibold text-gray-800">${vasos} vasos de agua</p>
      <p class="text-sm text-gray-600">${litros} litros por día</p>
    `
    resultado.classList.remove("hidden")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-2 border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            {/* Logo y eslogan */}
            <div className="text-center flex-1">
              <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-2">NutriFit</h1>
              <p className="text-lg md:text-xl text-gray-600 font-medium">
                Tu camino hacia una vida más saludable y activa
              </p>
            </div>

            {/* Botones de autenticación */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => (window.location.href = "/login")}
                className="px-6 py-2 text-red-600 font-semibold border-2 border-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
              >
                Ingresar
              </button>
              <button
                onClick={() => (window.location.href = "/registro")}
                className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Crear Cuenta
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Transforma tu cuerpo, transforma tu vida
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Descubre el equilibrio perfecto entre entrenamiento físico y nutrición. Con NutriFit, alcanza tus objetivos
            de fitness de manera inteligente y sostenible.
          </p>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Explora Nuestros Módulos</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Rutinas Module */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center border-2 border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Rutinas de Entrenamiento</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Planes de entrenamiento personalizados para todos los niveles. Desde principiantes hasta atletas
                avanzados, encuentra la rutina perfecta para ti.
              </p>
              <ul className="text-sm text-gray-500 mb-6 space-y-2">
                <li>• Rutinas para casa y gimnasio</li>
                <li>• Planes semanales estructurados</li>
                <li>• Progresión gradual</li>
                <li>• Videos explicativos</li>
              </ul>
              <button
                onClick={() => (window.location.href = "/rutinas")}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Explorar Rutinas
              </button>
            </div>

            {/* Alimentación Module */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center border-2 border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Planes de Alimentación</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Guías nutricionales balanceadas y deliciosas recetas saludables. Aprende a nutrir tu cuerpo de la manera
                correcta.
              </p>
              <ul className="text-sm text-gray-500 mb-6 space-y-2">
                <li>• Planes nutricionales personalizados</li>
                <li>• Recetas saludables y fáciles</li>
                <li>• Calculadora de calorías</li>
                <li>• Tips de nutrición deportiva</li>
              </ul>
              <button
                onClick={() => (window.location.href = "/alimentacion")}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Ver Planes Nutricionales
              </button>
            </div>

            {/* Buscador de Ejercicios Module */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center border-2 border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Buscador de Ejercicios</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Amplia base de datos con cientos de ejercicios. Encuentra el ejercicio perfecto para cada grupo
                muscular.
              </p>
              <ul className="text-sm text-gray-500 mb-6 space-y-2">
                <li>• Más de 500 ejercicios</li>
                <li>• Filtros por grupo muscular</li>
                <li>• Instrucciones detalladas</li>
                <li>• Niveles de dificultad</li>
              </ul>
              <button
                onClick={() => (window.location.href = "/ejercicios")}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Buscar Ejercicios
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Calculadoras Section */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Calculadoras de Salud</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Calculadora IMC */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Calculadora de IMC</h4>
                <p className="text-sm text-gray-600">Calcula tu Índice de Masa Corporal</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Peso (kg)</label>
                  <input
                    type="number"
                    id="peso-imc"
                    placeholder="70"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Altura (cm)</label>
                  <input
                    type="number"
                    id="altura-imc"
                    placeholder="175"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <button
                  onClick={() => calcularIMC()}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Calcular IMC
                </button>
                <div id="resultado-imc" className="text-center p-3 bg-red-50 rounded-lg hidden">
                  <p className="font-semibold text-gray-800"></p>
                  <p className="text-sm text-gray-600"></p>
                </div>
              </div>
            </div>

            {/* Calculadora de Calorías */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Calculadora de Calorías</h4>
                <p className="text-sm text-gray-600">Calcula tus calorías diarias</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Peso (kg)</label>
                    <input
                      type="number"
                      id="peso-cal"
                      placeholder="70"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Altura (cm)</label>
                    <input
                      type="number"
                      id="altura-cal"
                      placeholder="175"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Edad</label>
                  <input
                    type="number"
                    id="edad-cal"
                    placeholder="25"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sexo</label>
                  <select
                    id="sexo-cal"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Actividad</label>
                  <select
                    id="actividad-cal"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="1.2">Sedentario</option>
                    <option value="1.375">Ligero</option>
                    <option value="1.55">Moderado</option>
                    <option value="1.725">Activo</option>
                    <option value="1.9">Muy Activo</option>
                  </select>
                </div>
                <button
                  onClick={() => calcularCalorias()}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Calcular Calorías
                </button>
                <div id="resultado-cal" className="text-center p-3 bg-red-50 rounded-lg hidden">
                  <p className="font-semibold text-gray-800"></p>
                  <p className="text-sm text-gray-600"></p>
                </div>
              </div>
            </div>

            {/* Calculadora de Agua */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Calculadora de Agua</h4>
                <p className="text-sm text-gray-600">Vasos de agua recomendados</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Peso (kg)</label>
                  <input
                    type="number"
                    id="peso-agua"
                    placeholder="70"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nivel de Actividad</label>
                  <select
                    id="actividad-agua"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="1">Sedentario</option>
                    <option value="1.2">Ligero</option>
                    <option value="1.4">Moderado</option>
                    <option value="1.6">Intenso</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Clima</label>
                  <select
                    id="clima-agua"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="1">Normal</option>
                    <option value="1.2">Caluroso</option>
                    <option value="1.1">Frío</option>
                  </select>
                </div>
                <button
                  onClick={() => calcularAgua()}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Calcular Agua
                </button>
                <div id="resultado-agua" className="text-center p-3 bg-red-50 rounded-lg hidden">
                  <p className="font-semibold text-gray-800"></p>
                  <p className="text-sm text-gray-600"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">¿Listo para comenzar tu transformación?</h3>
          <p className="text-lg text-red-100 mb-8">
            Únete a miles de personas que ya han cambiado su vida con NutriFit
          </p>
          <button className="bg-white hover:bg-red-50 text-red-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
            Comenzar Ahora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-red-200 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-2xl font-bold text-red-600 mb-4">NutriFit</h4>
          <p className="text-gray-600 mb-4">Tu compañero ideal para una vida fitness completa</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-red-600 transition-colors">
              Términos de Uso
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              Contacto
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">© 2024 NutriFit. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
