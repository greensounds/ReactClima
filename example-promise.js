/*Ejemplo de callback
function getTempCallback (location, callback) {
	callback(undefined, 78);
	callback('City not found');
}

getTempCallback('Mexico', function (err, temp) {
	if (err) {
		console.log('error', err);
	} else {
		console.log('success', temp)
	}
});

//Ejemplo de promesa

function getTemplatePromise(location) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
		resolve(79);
		reject('City not found');
		}, 1000);
		
	});
}

getTemplatePromise('Philadelphia').then(function (temp) {
	console.log('promise sucess', temp);
}, function (err) {
	console.log('promise error', err)
})*/

function addPromise(a, b) {
	return new Promise(function (resolve, reject) {
		if(typeof a === 'number'  && typeof b  === 'number'){
			resolve(a + b);
		} else {
			reject('Ese no es un numero');
		}
	})
}

addPromise(4,8).then(function (suma) {
	console.log(suma);
}, function(err) {
	console.log('error', err)
})

addPromise('hola',8).then(function (suma) {
	console.log(suma);
}, function(err) {
	console.log('error', err)
})