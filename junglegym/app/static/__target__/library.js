// Transcrypt'ed from Python, 2022-10-03 11:20:53
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
var __name__ = '__main__';
export var gen_random_int = function (number, seed) {
	var ls = list (range (number));
	random.seed (seed);
	random.shuffle (ls);
	return ls;
};
export var generate = function () {
	var number = 10;
	var seed = 200;
	var array = gen_random_int (number, seed);
	var converted_lst = [];
	for (var i of array) {
		converted_lst += str (i);
	}
	var array_str = ','.join (converted_lst);
	var array_str = array_str + '.';
	document.getElementById ('generate').innerHTML = array_str;
};
export var insertion_sort = function (array) {
	var n = len (array);
	for (var outer_index = 0; outer_index < n - 1; outer_index++) {
		var inner_index = outer_index;
		var temp = array [inner_index + 1];
	}
	while (array [inner_index + 1] < array [inner_index] && inner_index >= 0) {
		array [inner_index + 1] = array [inner_index];
		array [inner_index] = temp;
		inner_index--;
	}
};
export var sortnumber1 = function (array) {
	var array_str = document.getElementById ('generate').innerHTML;
	var sorted_lst = insertion_sort (array);
	var array_str = ','.join (sorted_lst);
	document.getElementById ('sorted').innerHTML = array_str;
};
export var sortnumber2 = function () {
	var value = document.getElementsByName ('numbers') [0].value;
	if (value == '') {
		window.alert ('Your textbox is empty');
		return ;
	}
	// pass;
	var array_str = null;
	document.getElementById ('sorted').innerHTML = array_str;
};

//# sourceMappingURL=library.map