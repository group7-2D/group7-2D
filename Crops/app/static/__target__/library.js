// Transcrypt'ed from Python, 2022-11-25 19:53:04
var math = {};
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_math__ from './math.js';
__nest__ (math, '', __module_math__);
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
var __name__ = '__main__';
export var calculated2 = function () {
	var land = document.getElementsByName ('land') [0].value;
	var water = document.getElementsByName ('water') [0].value;
	var machinery = document.getElementsByName ('machinery') [0].value;
	if (land == '' || water == '' || machinery == '') {
		window.alert ('Your textbox is empty');
		return ;
	}
	else {
		var land = int (land);
		var water = int (water);
		var machinery = int (machinery);
		var l = land * land;
		var w = water * water;
		if (machinery == 0) {
			var m = math.log (1, 10);
		}
		else {
			var m = math.log (machinery, 10);
		}
	}
	var y = ((-(60431736.4) + 0.000238717 * l) + 10697.47209 * w) + 37403016.59 * m;
	document.getElementById ('predict').innerHTML = y;
};

//# sourceMappingURL=library.map