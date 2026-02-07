# Taller de Evaluación: Lógica de Programación y Flujo de Trabajo con Git

Este documento contiene las instrucciones y los ejercicios para la evaluación de lógica de programación utilizando JavaScript. Se evaluará tanto la resolución de los problemas como el cumplimiento estricto del flujo de trabajo en Git.

## Instrucciones de Preparación

Debes seguir estos pasos inicialmente para preparar tu entorno de evaluación:

1. Realiza un **Fork** de este repositorio a tu cuenta personal de GitHub.

2. Clona tu repositorio forkeado en tu computadora local.

3. En la raíz del proyecto, crea una carpeta con tu nombre completo separado por guiones (ejemplo: `jaime-andres-zapata-perez`).

4. Dentro de esa carpeta, crea los siguientes archivos:
   - Un archivo JavaScript individual por cada ejercicio (ejemplo: `ejercicio1.js`, `ejercicio2.js`, etc.)
   - Un archivo `menu.js` que contendrá el menú principal de navegación

5. Realiza un primer commit para registrar la preparación del proyecto.
   - Mensaje del commit: `setup: preparación de entorno de trabajo para [Tu Nombre Completo]`

## Estructura de Archivos Requerida

```
nombre-completo-separado-por-guiones/
├── ejercicio1.js
├── ejercicio2.js
├── ejercicio3.js
├── ...
├── ejercicio20.js
└── menu.js
```

## Sistema de Menú Principal

Debes implementar un archivo `menu.js` que contenga un menú de opciones interactivo con las siguientes características:

- Debe mostrar una lista numerada de los 20 ejercicios disponibles
- Debe incluir una opción para finalizar o salir del programa
- El menú debe ejecutarse de forma continua hasta que el usuario seleccione la opción de salir
- Al seleccionar un ejercicio, debe ejecutar la función correspondiente y mostrar el resultado
- Después de ejecutar un ejercicio, debe volver a mostrar el menú principal
- Debe manejar opciones inválidas de forma adecuada

## Reglas de Trabajo y Compromisos

El incumplimiento de estas reglas afectará la calificación final del taller:

- **Lectura obligatoria:** Lee cada ejercicio completamente antes de iniciar su codificación. La interpretación de requerimientos es parte de la evaluación.

- **Un commit por ejercicio:** Es obligatorio realizar un commit inmediatamente al finalizar cada ejercicio. No se permite realizar múltiples ejercicios en un solo commit.

- **Mensajes de commit:** Deben ser claros, directos y técnicos. No utilices mensajes generales como "cambios", "ejercicio listo" o "fix".
  - Ejemplo correcto: `feat: implementación de lógica para desglose de billetes en cajero`

- **Estructura de código:** Todos los retos deben ser resueltos mediante funciones. Debes recibir los datos por parámetros y devolver los resultados mediante `return`.

- **Un archivo por ejercicio:** Cada ejercicio debe estar en su propio archivo JavaScript individual.

- **Sin comentarios:** El código no debe contener comentarios de ningún tipo.

- **Nomenclatura camelCase:** Todas las variables y funciones deben utilizar exclusivamente la convención camelCase.

- **Entrega:** El comando `git push` y la creación del Pull Request hacia este repositorio original se deben realizar únicamente cuando hayas terminado los 20 ejercicios y el menú principal.

## Listado de Ejercicios

1. **Cajero de Denominaciones:** Escribe una función que reciba un monto a retirar. El cajero solo cuenta con billetes de $50.000, $20.000 y $10.000. Retorna un objeto con la cantidad mínima de billetes de cada denominación necesarios. Si el monto no es múltiplo de 10.000, retorna un mensaje de error.

2. **Inventario con Precios Dinámicos:** Recibes un arreglo de objetos de productos con `nombre`, `stock` y `precio`. Si el stock es menor a 5 unidades, aumenta el precio un 15%. Si el stock es mayor a 20, disminuye el precio un 10%. Retorna el arreglo con los cambios aplicados.

3. **Sistema de Becas:** Crea una función que reciba un objeto `estudiante` con `promedio`, `edad` y `estrato`. Se otorga la beca si el promedio es >= 4.5, o si el estudiante es mayor de 18 años con estrato 1 o 2 y promedio >= 4.0. Retorna un booleano.

4. **Carrito con Descuento por Categoría:** Recibes un arreglo de productos con `categoria` y `precio`. Calcula el total. Si hay más de 3 productos de la categoría "Electronica", aplica un 15% de descuento solo a esos productos antes de sumar el total general.

5. **Control de Asistencia y Sanción:** Recibes un arreglo de horas de llegada (formato 24h). La hora límite es 08:00. Cada minuto de retraso cuesta $2. Si el empleado llega más de 15 minutos tarde en más de 2 ocasiones, la función debe retornar "Suspendido".

6. **Impuestos de Ventas:** Recibes un arreglo de montos de ventas brutas. Calcula el IVA (19%) de cada una. Si una venta supera los $500.000, aplica una retención del 4% adicional sobre el valor neto. Retorna el acumulado total de impuestos.

7. **Validador de Contraseñas:** Diseña una función que valide un string. Debe tener al menos 8 caracteres, incluir un número y un carácter especial. Utiliza ciclos para analizar la cadena y retorna "Segura" o "Insegura".

8. **Estadísticas de Puntaje:** Recibes un arreglo de números. Identifica el valor más alto y el más bajo. Calcula el promedio de los valores restantes (excluyendo el máximo y el mínimo) y retorna el resultado.

9. **Nómina con Recargos:** Recibes horas trabajadas y valor hora. Las primeras 40 horas son normales. De la 41 a la 50 tienen un recargo del 50%. De la 51 en adelante un recargo del 100%. Retorna el salario total neto.

10. **Conversor con Registro:** Crea una función para convertir montos entre COP, USD y EUR. Recibe monto, moneda origen y destino. La función debe mantener un contador interno de cuántas conversiones se han hecho en la ejecución y retornar el valor convertido.

11. **Capacidad de Aula:** Un aula tiene un límite de personas. Recibes un arreglo con la cantidad de estudiantes de diferentes grupos que desean entrar. Llena el aula en orden hasta que el siguiente grupo supere la capacidad restante. Retorna el número de estudiantes que quedaron fuera.

12. **Análisis de Palabras Prohibidas:** Recibes un texto y un arreglo de palabras prohibidas. Identifica cuántas veces aparece cada palabra prohibida en el texto. Retorna un objeto con el conteo detallado por palabra.

13. **Alerta de Sensores:** Un arreglo contiene temperaturas por hora. Si la temperatura supera los 35 grados durante 3 mediciones consecutivas, retorna "Alarma: Sobrecalentamiento". De lo contrario, retorna "Estado Normal".

14. **Descuento por Lealtad:** Recibes un arreglo con las últimas 5 compras y los años de antigüedad del cliente. Si el promedio de las compras supera $100.000 y el cliente tiene más de 2 años de antigüedad, retorna un descuento del 25% para la próxima compra.

15. **Filtro de Tareas Urgentes:** Recibes un arreglo de tareas con `descripcion`, `prioridad` (alta, media, baja) y `dias` para el vencimiento. Retorna únicamente las de prioridad alta que venzan en menos de 2 días.

16. **Liquidación de Servicios:** El costo de agua se calcula por rangos: los primeros 15m³ a $1.000; de 16m³ a 30m³ a $1.500; el exceso a $2.500. Si es estrato 1, aplica un subsidio del 20% al total final. Retorna el valor a pagar.

17. **Monitoreo de Transacciones:** Recibes un historial de transacciones. Si una transacción supera el promedio de todas las anteriores por más del 300%, debe ser retornada con el estado "Sospechosa".

18. **Restricción de Biblioteca:** Un usuario pide un libro. Recibes sus préstamos actuales (arreglo con fechas de devolución y multas). Deniega el préstamo si tiene un libro con más de 10 días de retraso o si la multa acumulada es mayor a $10.000.

19. **Plan de Ruta de Entrega:** Recibes destinos con sus distancias en km. El vehículo tiene combustible para 200km. Retorna los destinos que puede visitar en orden antes de que el combustible sea insuficiente para el siguiente tramo.

20. **Generador de CSV:** Recibes un arreglo de objetos (usuarios con `id`, `nombre`, `email`). Debes retornar un string que represente estos datos en formato CSV, separando campos por comas y registros por saltos de línea, sin usar librerías.

## Verificación de Entrega

Antes de realizar el Pull Request, asegúrese de cumplir con lo siguiente:

- La carpeta tiene el nombre exacto solicitado (nombre completo separado por guiones).
- Existen 20 archivos JavaScript individuales (ejercicio1.js hasta ejercicio20.js).
- Existe el archivo menu.js con el sistema de navegación funcional.
- El historial de Git muestra exactamente un commit por cada ejercicio resuelto.
- Los mensajes de commit son profesionales y específicos.
- No hay errores de sintaxis y todas las funciones retornan valores válidos.
- No existen comentarios en ningún archivo de código.
- Todas las variables y funciones utilizan nomenclatura camelCase.
