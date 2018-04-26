(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () {

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var d3$1 = createCommonjsModule(function (module) {
	!function() {
	  var d3 = {
	    version: "3.5.17"
	  };
	  var d3_arraySlice = [].slice, d3_array = function(list) {
	    return d3_arraySlice.call(list);
	  };
	  var d3_document = this.document;
	  function d3_documentElement(node) {
	    return node && (node.ownerDocument || node.document || node).documentElement;
	  }
	  function d3_window(node) {
	    return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
	  }
	  if (d3_document) {
	    try {
	      d3_array(d3_document.documentElement.childNodes)[0].nodeType;
	    } catch (e) {
	      d3_array = function(list) {
	        var i = list.length, array = new Array(i);
	        while (i--) array[i] = list[i];
	        return array;
	      };
	    }
	  }
	  if (!Date.now) Date.now = function() {
	    return +new Date();
	  };
	  if (d3_document) {
	    try {
	      d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
	    } catch (error) {
	      var d3_element_prototype = this.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = this.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
	      d3_element_prototype.setAttribute = function(name, value) {
	        d3_element_setAttribute.call(this, name, value + "");
	      };
	      d3_element_prototype.setAttributeNS = function(space, local, value) {
	        d3_element_setAttributeNS.call(this, space, local, value + "");
	      };
	      d3_style_prototype.setProperty = function(name, value, priority) {
	        d3_style_setProperty.call(this, name, value + "", priority);
	      };
	    }
	  }
	  d3.ascending = d3_ascending;
	  function d3_ascending(a, b) {
	    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	  }
	  d3.descending = function(a, b) {
	    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	  };
	  d3.min = function(array, f) {
	    var i = -1, n = array.length, a, b;
	    if (arguments.length === 1) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
	    } else {
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
	    }
	    return a;
	  };
	  d3.max = function(array, f) {
	    var i = -1, n = array.length, a, b;
	    if (arguments.length === 1) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
	    } else {
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
	    }
	    return a;
	  };
	  d3.extent = function(array, f) {
	    var i = -1, n = array.length, a, b, c;
	    if (arguments.length === 1) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) {
	        a = c = b;
	        break;
	      }
	      while (++i < n) if ((b = array[i]) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    } else {
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
	        a = c = b;
	        break;
	      }
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    }
	    return [ a, c ];
	  };
	  function d3_number(x) {
	    return x === null ? NaN : +x;
	  }
	  function d3_numeric(x) {
	    return !isNaN(x);
	  }
	  d3.sum = function(array, f) {
	    var s = 0, n = array.length, a, i = -1;
	    if (arguments.length === 1) {
	      while (++i < n) if (d3_numeric(a = +array[i])) s += a;
	    } else {
	      while (++i < n) if (d3_numeric(a = +f.call(array, array[i], i))) s += a;
	    }
	    return s;
	  };
	  d3.mean = function(array, f) {
	    var s = 0, n = array.length, a, i = -1, j = n;
	    if (arguments.length === 1) {
	      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) s += a; else --j;
	    } else {
	      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a; else --j;
	    }
	    if (j) return s / j;
	  };
	  d3.quantile = function(values, p) {
	    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
	    return e ? v + e * (values[h] - v) : v;
	  };
	  d3.median = function(array, f) {
	    var numbers = [], n = array.length, a, i = -1;
	    if (arguments.length === 1) {
	      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
	    } else {
	      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
	    }
	    if (numbers.length) return d3.quantile(numbers.sort(d3_ascending), .5);
	  };
	  d3.variance = function(array, f) {
	    var n = array.length, m = 0, a, d, s = 0, i = -1, j = 0;
	    if (arguments.length === 1) {
	      while (++i < n) {
	        if (d3_numeric(a = d3_number(array[i]))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    } else {
	      while (++i < n) {
	        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    }
	    if (j > 1) return s / (j - 1);
	  };
	  d3.deviation = function() {
	    var v = d3.variance.apply(this, arguments);
	    return v ? Math.sqrt(v) : v;
	  };
	  function d3_bisector(compare) {
	    return {
	      left: function(a, x, lo, hi) {
	        if (arguments.length < 3) lo = 0;
	        if (arguments.length < 4) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) < 0) lo = mid + 1; else hi = mid;
	        }
	        return lo;
	      },
	      right: function(a, x, lo, hi) {
	        if (arguments.length < 3) lo = 0;
	        if (arguments.length < 4) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) > 0) hi = mid; else lo = mid + 1;
	        }
	        return lo;
	      }
	    };
	  }
	  var d3_bisect = d3_bisector(d3_ascending);
	  d3.bisectLeft = d3_bisect.left;
	  d3.bisect = d3.bisectRight = d3_bisect.right;
	  d3.bisector = function(f) {
	    return d3_bisector(f.length === 1 ? function(d, x) {
	      return d3_ascending(f(d), x);
	    } : f);
	  };
	  d3.shuffle = function(array, i0, i1) {
	    if ((m = arguments.length) < 3) {
	      i1 = array.length;
	      if (m < 2) i0 = 0;
	    }
	    var m = i1 - i0, t, i;
	    while (m) {
	      i = Math.random() * m-- | 0;
	      t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
	    }
	    return array;
	  };
	  d3.permute = function(array, indexes) {
	    var i = indexes.length, permutes = new Array(i);
	    while (i--) permutes[i] = array[indexes[i]];
	    return permutes;
	  };
	  d3.pairs = function(array) {
	    var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
	    while (i < n) pairs[i] = [ p0 = p1, p1 = array[++i] ];
	    return pairs;
	  };
	  d3.transpose = function(matrix) {
	    if (!(n = matrix.length)) return [];
	    for (var i = -1, m = d3.min(matrix, d3_transposeLength), transpose = new Array(m); ++i < m; ) {
	      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n; ) {
	        row[j] = matrix[j][i];
	      }
	    }
	    return transpose;
	  };
	  function d3_transposeLength(d) {
	    return d.length;
	  }
	  d3.zip = function() {
	    return d3.transpose(arguments);
	  };
	  d3.keys = function(map) {
	    var keys = [];
	    for (var key in map) keys.push(key);
	    return keys;
	  };
	  d3.values = function(map) {
	    var values = [];
	    for (var key in map) values.push(map[key]);
	    return values;
	  };
	  d3.entries = function(map) {
	    var entries = [];
	    for (var key in map) entries.push({
	      key: key,
	      value: map[key]
	    });
	    return entries;
	  };
	  d3.merge = function(arrays) {
	    var n = arrays.length, m, i = -1, j = 0, merged, array;
	    while (++i < n) j += arrays[i].length;
	    merged = new Array(j);
	    while (--n >= 0) {
	      array = arrays[n];
	      m = array.length;
	      while (--m >= 0) {
	        merged[--j] = array[m];
	      }
	    }
	    return merged;
	  };
	  var abs = Math.abs;
	  d3.range = function(start, stop, step) {
	    if (arguments.length < 3) {
	      step = 1;
	      if (arguments.length < 2) {
	        stop = start;
	        start = 0;
	      }
	    }
	    if ((stop - start) / step === Infinity) throw new Error("infinite range");
	    var range = [], k = d3_range_integerScale(abs(step)), i = -1, j;
	    start *= k, stop *= k, step *= k;
	    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
	    return range;
	  };
	  function d3_range_integerScale(x) {
	    var k = 1;
	    while (x * k % 1) k *= 10;
	    return k;
	  }
	  function d3_class(ctor, properties) {
	    for (var key in properties) {
	      Object.defineProperty(ctor.prototype, key, {
	        value: properties[key],
	        enumerable: false
	      });
	    }
	  }
	  d3.map = function(object, f) {
	    var map = new d3_Map();
	    if (object instanceof d3_Map) {
	      object.forEach(function(key, value) {
	        map.set(key, value);
	      });
	    } else if (Array.isArray(object)) {
	      var i = -1, n = object.length, o;
	      if (arguments.length === 1) while (++i < n) map.set(i, object[i]); else while (++i < n) map.set(f.call(object, o = object[i], i), o);
	    } else {
	      for (var key in object) map.set(key, object[key]);
	    }
	    return map;
	  };
	  function d3_Map() {
	    this._ = Object.create(null);
	  }
	  var d3_map_proto = "__proto__", d3_map_zero = "\x00";
	  d3_class(d3_Map, {
	    has: d3_map_has,
	    get: function(key) {
	      return this._[d3_map_escape(key)];
	    },
	    set: function(key, value) {
	      return this._[d3_map_escape(key)] = value;
	    },
	    remove: d3_map_remove,
	    keys: d3_map_keys,
	    values: function() {
	      var values = [];
	      for (var key in this._) values.push(this._[key]);
	      return values;
	    },
	    entries: function() {
	      var entries = [];
	      for (var key in this._) entries.push({
	        key: d3_map_unescape(key),
	        value: this._[key]
	      });
	      return entries;
	    },
	    size: d3_map_size,
	    empty: d3_map_empty,
	    forEach: function(f) {
	      for (var key in this._) f.call(this, d3_map_unescape(key), this._[key]);
	    }
	  });
	  function d3_map_escape(key) {
	    return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
	  }
	  function d3_map_unescape(key) {
	    return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
	  }
	  function d3_map_has(key) {
	    return d3_map_escape(key) in this._;
	  }
	  function d3_map_remove(key) {
	    return (key = d3_map_escape(key)) in this._ && delete this._[key];
	  }
	  function d3_map_keys() {
	    var keys = [];
	    for (var key in this._) keys.push(d3_map_unescape(key));
	    return keys;
	  }
	  function d3_map_size() {
	    var size = 0;
	    for (var key in this._) ++size;
	    return size;
	  }
	  function d3_map_empty() {
	    for (var key in this._) return false;
	    return true;
	  }
	  d3.nest = function() {
	    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
	    function map(mapType, array, depth) {
	      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
	      var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
	      while (++i < n) {
	        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
	          values.push(object);
	        } else {
	          valuesByKey.set(keyValue, [ object ]);
	        }
	      }
	      if (mapType) {
	        object = mapType();
	        setter = function(keyValue, values) {
	          object.set(keyValue, map(mapType, values, depth));
	        };
	      } else {
	        object = {};
	        setter = function(keyValue, values) {
	          object[keyValue] = map(mapType, values, depth);
	        };
	      }
	      valuesByKey.forEach(setter);
	      return object;
	    }
	    function entries(map, depth) {
	      if (depth >= keys.length) return map;
	      var array = [], sortKey = sortKeys[depth++];
	      map.forEach(function(key, keyMap) {
	        array.push({
	          key: key,
	          values: entries(keyMap, depth)
	        });
	      });
	      return sortKey ? array.sort(function(a, b) {
	        return sortKey(a.key, b.key);
	      }) : array;
	    }
	    nest.map = function(array, mapType) {
	      return map(mapType, array, 0);
	    };
	    nest.entries = function(array) {
	      return entries(map(d3.map, array, 0), 0);
	    };
	    nest.key = function(d) {
	      keys.push(d);
	      return nest;
	    };
	    nest.sortKeys = function(order) {
	      sortKeys[keys.length - 1] = order;
	      return nest;
	    };
	    nest.sortValues = function(order) {
	      sortValues = order;
	      return nest;
	    };
	    nest.rollup = function(f) {
	      rollup = f;
	      return nest;
	    };
	    return nest;
	  };
	  d3.set = function(array) {
	    var set = new d3_Set();
	    if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
	    return set;
	  };
	  function d3_Set() {
	    this._ = Object.create(null);
	  }
	  d3_class(d3_Set, {
	    has: d3_map_has,
	    add: function(key) {
	      this._[d3_map_escape(key += "")] = true;
	      return key;
	    },
	    remove: d3_map_remove,
	    values: d3_map_keys,
	    size: d3_map_size,
	    empty: d3_map_empty,
	    forEach: function(f) {
	      for (var key in this._) f.call(this, d3_map_unescape(key));
	    }
	  });
	  d3.behavior = {};
	  function d3_identity(d) {
	    return d;
	  }
	  d3.rebind = function(target, source) {
	    var i = 1, n = arguments.length, method;
	    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
	    return target;
	  };
	  function d3_rebind(target, source, method) {
	    return function() {
	      var value = method.apply(source, arguments);
	      return value === source ? target : value;
	    };
	  }
	  function d3_vendorSymbol(object, name) {
	    if (name in object) return name;
	    name = name.charAt(0).toUpperCase() + name.slice(1);
	    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
	      var prefixName = d3_vendorPrefixes[i] + name;
	      if (prefixName in object) return prefixName;
	    }
	  }
	  var d3_vendorPrefixes = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
	  function d3_noop() {}
	  d3.dispatch = function() {
	    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
	    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
	    return dispatch;
	  };
	  function d3_dispatch() {}
	  d3_dispatch.prototype.on = function(type, listener) {
	    var i = type.indexOf("."), name = "";
	    if (i >= 0) {
	      name = type.slice(i + 1);
	      type = type.slice(0, i);
	    }
	    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
	    if (arguments.length === 2) {
	      if (listener == null) for (type in this) {
	        if (this.hasOwnProperty(type)) this[type].on(name, null);
	      }
	      return this;
	    }
	  };
	  function d3_dispatch_event(dispatch) {
	    var listeners = [], listenerByName = new d3_Map();
	    function event() {
	      var z = listeners, i = -1, n = z.length, l;
	      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
	      return dispatch;
	    }
	    event.on = function(name, listener) {
	      var l = listenerByName.get(name), i;
	      if (arguments.length < 2) return l && l.on;
	      if (l) {
	        l.on = null;
	        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
	        listenerByName.remove(name);
	      }
	      if (listener) listeners.push(listenerByName.set(name, {
	        on: listener
	      }));
	      return dispatch;
	    };
	    return event;
	  }
	  d3.event = null;
	  function d3_eventPreventDefault() {
	    d3.event.preventDefault();
	  }
	  function d3_eventSource() {
	    var e = d3.event, s;
	    while (s = e.sourceEvent) e = s;
	    return e;
	  }
	  function d3_eventDispatch(target) {
	    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
	    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
	    dispatch.of = function(thiz, argumentz) {
	      return function(e1) {
	        try {
	          var e0 = e1.sourceEvent = d3.event;
	          e1.target = target;
	          d3.event = e1;
	          dispatch[e1.type].apply(thiz, argumentz);
	        } finally {
	          d3.event = e0;
	        }
	      };
	    };
	    return dispatch;
	  }
	  d3.requote = function(s) {
	    return s.replace(d3_requote_re, "\\$&");
	  };
	  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
	  var d3_subclass = {}.__proto__ ? function(object, prototype) {
	    object.__proto__ = prototype;
	  } : function(object, prototype) {
	    for (var property in prototype) object[property] = prototype[property];
	  };
	  function d3_selection(groups) {
	    d3_subclass(groups, d3_selectionPrototype);
	    return groups;
	  }
	  var d3_select = function(s, n) {
	    return n.querySelector(s);
	  }, d3_selectAll = function(s, n) {
	    return n.querySelectorAll(s);
	  }, d3_selectMatches = function(n, s) {
	    var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
	    d3_selectMatches = function(n, s) {
	      return d3_selectMatcher.call(n, s);
	    };
	    return d3_selectMatches(n, s);
	  };
	  if (typeof Sizzle === "function") {
	    d3_select = function(s, n) {
	      return Sizzle(s, n)[0] || null;
	    };
	    d3_selectAll = Sizzle;
	    d3_selectMatches = Sizzle.matchesSelector;
	  }
	  d3.selection = function() {
	    return d3.select(d3_document.documentElement);
	  };
	  var d3_selectionPrototype = d3.selection.prototype = [];
	  d3_selectionPrototype.select = function(selector) {
	    var subgroups = [], subgroup, subnode, group, node;
	    selector = d3_selection_selector(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = (group = this[j]).parentNode;
	      for (var i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroup.push(subnode = selector.call(node, node.__data__, i, j));
	          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_selector(selector) {
	    return typeof selector === "function" ? selector : function() {
	      return d3_select(selector, this);
	    };
	  }
	  d3_selectionPrototype.selectAll = function(selector) {
	    var subgroups = [], subgroup, node;
	    selector = d3_selection_selectorAll(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
	          subgroup.parentNode = node;
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_selectorAll(selector) {
	    return typeof selector === "function" ? selector : function() {
	      return d3_selectAll(selector, this);
	    };
	  }
	  var d3_nsXhtml = "http://www.w3.org/1999/xhtml";
	  var d3_nsPrefix = {
	    svg: "http://www.w3.org/2000/svg",
	    xhtml: d3_nsXhtml,
	    xlink: "http://www.w3.org/1999/xlink",
	    xml: "http://www.w3.org/XML/1998/namespace",
	    xmlns: "http://www.w3.org/2000/xmlns/"
	  };
	  d3.ns = {
	    prefix: d3_nsPrefix,
	    qualify: function(name) {
	      var i = name.indexOf(":"), prefix = name;
	      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	      return d3_nsPrefix.hasOwnProperty(prefix) ? {
	        space: d3_nsPrefix[prefix],
	        local: name
	      } : name;
	    }
	  };
	  d3_selectionPrototype.attr = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") {
	        var node = this.node();
	        name = d3.ns.qualify(name);
	        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
	      }
	      for (value in name) this.each(d3_selection_attr(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_attr(name, value));
	  };
	  function d3_selection_attr(name, value) {
	    name = d3.ns.qualify(name);
	    function attrNull() {
	      this.removeAttribute(name);
	    }
	    function attrNullNS() {
	      this.removeAttributeNS(name.space, name.local);
	    }
	    function attrConstant() {
	      this.setAttribute(name, value);
	    }
	    function attrConstantNS() {
	      this.setAttributeNS(name.space, name.local, value);
	    }
	    function attrFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
	    }
	    function attrFunctionNS() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
	    }
	    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
	  }
	  function d3_collapse(s) {
	    return s.trim().replace(/\s+/g, " ");
	  }
	  d3_selectionPrototype.classed = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") {
	        var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;
	        if (value = node.classList) {
	          while (++i < n) if (!value.contains(name[i])) return false;
	        } else {
	          value = node.getAttribute("class");
	          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
	        }
	        return true;
	      }
	      for (value in name) this.each(d3_selection_classed(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_classed(name, value));
	  };
	  function d3_selection_classedRe(name) {
	    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
	  }
	  function d3_selection_classes(name) {
	    return (name + "").trim().split(/^|\s+/);
	  }
	  function d3_selection_classed(name, value) {
	    name = d3_selection_classes(name).map(d3_selection_classedName);
	    var n = name.length;
	    function classedConstant() {
	      var i = -1;
	      while (++i < n) name[i](this, value);
	    }
	    function classedFunction() {
	      var i = -1, x = value.apply(this, arguments);
	      while (++i < n) name[i](this, x);
	    }
	    return typeof value === "function" ? classedFunction : classedConstant;
	  }
	  function d3_selection_classedName(name) {
	    var re = d3_selection_classedRe(name);
	    return function(node, value) {
	      if (c = node.classList) return value ? c.add(name) : c.remove(name);
	      var c = node.getAttribute("class") || "";
	      if (value) {
	        re.lastIndex = 0;
	        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
	      } else {
	        node.setAttribute("class", d3_collapse(c.replace(re, " ")));
	      }
	    };
	  }
	  d3_selectionPrototype.style = function(name, value, priority) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof name !== "string") {
	        if (n < 2) value = "";
	        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
	        return this;
	      }
	      if (n < 2) {
	        var node = this.node();
	        return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
	      }
	      priority = "";
	    }
	    return this.each(d3_selection_style(name, value, priority));
	  };
	  function d3_selection_style(name, value, priority) {
	    function styleNull() {
	      this.style.removeProperty(name);
	    }
	    function styleConstant() {
	      this.style.setProperty(name, value, priority);
	    }
	    function styleFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
	    }
	    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
	  }
	  d3_selectionPrototype.property = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") return this.node()[name];
	      for (value in name) this.each(d3_selection_property(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_property(name, value));
	  };
	  function d3_selection_property(name, value) {
	    function propertyNull() {
	      delete this[name];
	    }
	    function propertyConstant() {
	      this[name] = value;
	    }
	    function propertyFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) delete this[name]; else this[name] = x;
	    }
	    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
	  }
	  d3_selectionPrototype.text = function(value) {
	    return arguments.length ? this.each(typeof value === "function" ? function() {
	      var v = value.apply(this, arguments);
	      this.textContent = v == null ? "" : v;
	    } : value == null ? function() {
	      this.textContent = "";
	    } : function() {
	      this.textContent = value;
	    }) : this.node().textContent;
	  };
	  d3_selectionPrototype.html = function(value) {
	    return arguments.length ? this.each(typeof value === "function" ? function() {
	      var v = value.apply(this, arguments);
	      this.innerHTML = v == null ? "" : v;
	    } : value == null ? function() {
	      this.innerHTML = "";
	    } : function() {
	      this.innerHTML = value;
	    }) : this.node().innerHTML;
	  };
	  d3_selectionPrototype.append = function(name) {
	    name = d3_selection_creator(name);
	    return this.select(function() {
	      return this.appendChild(name.apply(this, arguments));
	    });
	  };
	  function d3_selection_creator(name) {
	    function create() {
	      var document = this.ownerDocument, namespace = this.namespaceURI;
	      return namespace === d3_nsXhtml && document.documentElement.namespaceURI === d3_nsXhtml ? document.createElement(name) : document.createElementNS(namespace, name);
	    }
	    function createNS() {
	      return this.ownerDocument.createElementNS(name.space, name.local);
	    }
	    return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? createNS : create;
	  }
	  d3_selectionPrototype.insert = function(name, before) {
	    name = d3_selection_creator(name);
	    before = d3_selection_selector(before);
	    return this.select(function() {
	      return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
	    });
	  };
	  d3_selectionPrototype.remove = function() {
	    return this.each(d3_selectionRemove);
	  };
	  function d3_selectionRemove() {
	    var parent = this.parentNode;
	    if (parent) parent.removeChild(this);
	  }
	  d3_selectionPrototype.data = function(value, key) {
	    var i = -1, n = this.length, group, node;
	    if (!arguments.length) {
	      value = new Array(n = (group = this[0]).length);
	      while (++i < n) {
	        if (node = group[i]) {
	          value[i] = node.__data__;
	        }
	      }
	      return value;
	    }
	    function bind(group, groupData) {
	      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
	      if (key) {
	        var nodeByKeyValue = new d3_Map(), keyValues = new Array(n), keyValue;
	        for (i = -1; ++i < n; ) {
	          if (node = group[i]) {
	            if (nodeByKeyValue.has(keyValue = key.call(node, node.__data__, i))) {
	              exitNodes[i] = node;
	            } else {
	              nodeByKeyValue.set(keyValue, node);
	            }
	            keyValues[i] = keyValue;
	          }
	        }
	        for (i = -1; ++i < m; ) {
	          if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
	            enterNodes[i] = d3_selection_dataNode(nodeData);
	          } else if (node !== true) {
	            updateNodes[i] = node;
	            node.__data__ = nodeData;
	          }
	          nodeByKeyValue.set(keyValue, true);
	        }
	        for (i = -1; ++i < n; ) {
	          if (i in keyValues && nodeByKeyValue.get(keyValues[i]) !== true) {
	            exitNodes[i] = group[i];
	          }
	        }
	      } else {
	        for (i = -1; ++i < n0; ) {
	          node = group[i];
	          nodeData = groupData[i];
	          if (node) {
	            node.__data__ = nodeData;
	            updateNodes[i] = node;
	          } else {
	            enterNodes[i] = d3_selection_dataNode(nodeData);
	          }
	        }
	        for (;i < m; ++i) {
	          enterNodes[i] = d3_selection_dataNode(groupData[i]);
	        }
	        for (;i < n; ++i) {
	          exitNodes[i] = group[i];
	        }
	      }
	      enterNodes.update = updateNodes;
	      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
	      enter.push(enterNodes);
	      update.push(updateNodes);
	      exit.push(exitNodes);
	    }
	    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
	    if (typeof value === "function") {
	      while (++i < n) {
	        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
	      }
	    } else {
	      while (++i < n) {
	        bind(group = this[i], value);
	      }
	    }
	    update.enter = function() {
	      return enter;
	    };
	    update.exit = function() {
	      return exit;
	    };
	    return update;
	  };
	  function d3_selection_dataNode(data) {
	    return {
	      __data__: data
	    };
	  }
	  d3_selectionPrototype.datum = function(value) {
	    return arguments.length ? this.property("__data__", value) : this.property("__data__");
	  };
	  d3_selectionPrototype.filter = function(filter) {
	    var subgroups = [], subgroup, group, node;
	    if (typeof filter !== "function") filter = d3_selection_filter(filter);
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = (group = this[j]).parentNode;
	      for (var i = 0, n = group.length; i < n; i++) {
	        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
	          subgroup.push(node);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_filter(selector) {
	    return function() {
	      return d3_selectMatches(this, selector);
	    };
	  }
	  d3_selectionPrototype.order = function() {
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
	        if (node = group[i]) {
	          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
	          next = node;
	        }
	      }
	    }
	    return this;
	  };
	  d3_selectionPrototype.sort = function(comparator) {
	    comparator = d3_selection_sortComparator.apply(this, arguments);
	    for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
	    return this.order();
	  };
	  function d3_selection_sortComparator(comparator) {
	    if (!arguments.length) comparator = d3_ascending;
	    return function(a, b) {
	      return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
	    };
	  }
	  d3_selectionPrototype.each = function(callback) {
	    return d3_selection_each(this, function(node, i, j) {
	      callback.call(node, node.__data__, i, j);
	    });
	  };
	  function d3_selection_each(groups, callback) {
	    for (var j = 0, m = groups.length; j < m; j++) {
	      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
	        if (node = group[i]) callback(node, i, j);
	      }
	    }
	    return groups;
	  }
	  d3_selectionPrototype.call = function(callback) {
	    var args = d3_array(arguments);
	    callback.apply(args[0] = this, args);
	    return this;
	  };
	  d3_selectionPrototype.empty = function() {
	    return !this.node();
	  };
	  d3_selectionPrototype.node = function() {
	    for (var j = 0, m = this.length; j < m; j++) {
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        var node = group[i];
	        if (node) return node;
	      }
	    }
	    return null;
	  };
	  d3_selectionPrototype.size = function() {
	    var n = 0;
	    d3_selection_each(this, function() {
	      ++n;
	    });
	    return n;
	  };
	  function d3_selection_enter(selection) {
	    d3_subclass(selection, d3_selection_enterPrototype);
	    return selection;
	  }
	  var d3_selection_enterPrototype = [];
	  d3.selection.enter = d3_selection_enter;
	  d3.selection.enter.prototype = d3_selection_enterPrototype;
	  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
	  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
	  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
	  d3_selection_enterPrototype.call = d3_selectionPrototype.call;
	  d3_selection_enterPrototype.size = d3_selectionPrototype.size;
	  d3_selection_enterPrototype.select = function(selector) {
	    var subgroups = [], subgroup, subnode, upgroup, group, node;
	    for (var j = -1, m = this.length; ++j < m; ) {
	      upgroup = (group = this[j]).update;
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = group.parentNode;
	      for (var i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
	          subnode.__data__ = node.__data__;
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  d3_selection_enterPrototype.insert = function(name, before) {
	    if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
	    return d3_selectionPrototype.insert.call(this, name, before);
	  };
	  function d3_selection_enterInsertBefore(enter) {
	    var i0, j0;
	    return function(d, i, j) {
	      var group = enter[j].update, n = group.length, node;
	      if (j != j0) j0 = j, i0 = 0;
	      if (i >= i0) i0 = i + 1;
	      while (!(node = group[i0]) && ++i0 < n) ;
	      return node;
	    };
	  }
	  d3.select = function(node) {
	    var group;
	    if (typeof node === "string") {
	      group = [ d3_select(node, d3_document) ];
	      group.parentNode = d3_document.documentElement;
	    } else {
	      group = [ node ];
	      group.parentNode = d3_documentElement(node);
	    }
	    return d3_selection([ group ]);
	  };
	  d3.selectAll = function(nodes) {
	    var group;
	    if (typeof nodes === "string") {
	      group = d3_array(d3_selectAll(nodes, d3_document));
	      group.parentNode = d3_document.documentElement;
	    } else {
	      group = d3_array(nodes);
	      group.parentNode = null;
	    }
	    return d3_selection([ group ]);
	  };
	  d3_selectionPrototype.on = function(type, listener, capture) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof type !== "string") {
	        if (n < 2) listener = false;
	        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
	        return this;
	      }
	      if (n < 2) return (n = this.node()["__on" + type]) && n._;
	      capture = false;
	    }
	    return this.each(d3_selection_on(type, listener, capture));
	  };
	  function d3_selection_on(type, listener, capture) {
	    var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
	    if (i > 0) type = type.slice(0, i);
	    var filter = d3_selection_onFilters.get(type);
	    if (filter) type = filter, wrap = d3_selection_onFilter;
	    function onRemove() {
	      var l = this[name];
	      if (l) {
	        this.removeEventListener(type, l, l.$);
	        delete this[name];
	      }
	    }
	    function onAdd() {
	      var l = wrap(listener, d3_array(arguments));
	      onRemove.call(this);
	      this.addEventListener(type, this[name] = l, l.$ = capture);
	      l._ = listener;
	    }
	    function removeAll() {
	      var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"), match;
	      for (var name in this) {
	        if (match = name.match(re)) {
	          var l = this[name];
	          this.removeEventListener(match[1], l, l.$);
	          delete this[name];
	        }
	      }
	    }
	    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
	  }
	  var d3_selection_onFilters = d3.map({
	    mouseenter: "mouseover",
	    mouseleave: "mouseout"
	  });
	  if (d3_document) {
	    d3_selection_onFilters.forEach(function(k) {
	      if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
	    });
	  }
	  function d3_selection_onListener(listener, argumentz) {
	    return function(e) {
	      var o = d3.event;
	      d3.event = e;
	      argumentz[0] = this.__data__;
	      try {
	        listener.apply(this, argumentz);
	      } finally {
	        d3.event = o;
	      }
	    };
	  }
	  function d3_selection_onFilter(listener, argumentz) {
	    var l = d3_selection_onListener(listener, argumentz);
	    return function(e) {
	      var target = this, related = e.relatedTarget;
	      if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
	        l.call(target, e);
	      }
	    };
	  }
	  var d3_event_dragSelect, d3_event_dragId = 0;
	  function d3_event_dragSuppress(node) {
	    var name = ".dragsuppress-" + ++d3_event_dragId, click = "click" + name, w = d3.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
	    if (d3_event_dragSelect == null) {
	      d3_event_dragSelect = "onselectstart" in node ? false : d3_vendorSymbol(node.style, "userSelect");
	    }
	    if (d3_event_dragSelect) {
	      var style = d3_documentElement(node).style, select = style[d3_event_dragSelect];
	      style[d3_event_dragSelect] = "none";
	    }
	    return function(suppressClick) {
	      w.on(name, null);
	      if (d3_event_dragSelect) style[d3_event_dragSelect] = select;
	      if (suppressClick) {
	        var off = function() {
	          w.on(click, null);
	        };
	        w.on(click, function() {
	          d3_eventPreventDefault();
	          off();
	        }, true);
	        setTimeout(off, 0);
	      }
	    };
	  }
	  d3.mouse = function(container) {
	    return d3_mousePoint(container, d3_eventSource());
	  };
	  var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
	  function d3_mousePoint(container, e) {
	    if (e.changedTouches) e = e.changedTouches[0];
	    var svg = container.ownerSVGElement || container;
	    if (svg.createSVGPoint) {
	      var point = svg.createSVGPoint();
	      if (d3_mouse_bug44083 < 0) {
	        var window = d3_window(container);
	        if (window.scrollX || window.scrollY) {
	          svg = d3.select("body").append("svg").style({
	            position: "absolute",
	            top: 0,
	            left: 0,
	            margin: 0,
	            padding: 0,
	            border: "none"
	          }, "important");
	          var ctm = svg[0][0].getScreenCTM();
	          d3_mouse_bug44083 = !(ctm.f || ctm.e);
	          svg.remove();
	        }
	      }
	      if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY; else point.x = e.clientX, point.y = e.clientY;
	      point = point.matrixTransform(container.getScreenCTM().inverse());
	      return [ point.x, point.y ];
	    }
	    var rect = container.getBoundingClientRect();
	    return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
	  }
	  d3.touch = function(container, touches, identifier) {
	    if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
	    if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
	      if ((touch = touches[i]).identifier === identifier) {
	        return d3_mousePoint(container, touch);
	      }
	    }
	  };
	  d3.behavior.drag = function() {
	    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d3.mouse, d3_window, "mousemove", "mouseup"), touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_identity, "touchmove", "touchend");
	    function drag() {
	      this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
	    }
	    function dragstart(id, position, subject, move, end) {
	      return function() {
	        var that = this, target = d3.event.target.correspondingElement || d3.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id(), dragName = ".drag" + (dragId == null ? "" : "-" + dragId), dragOffset, dragSubject = d3.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(target), position0 = position(parent, dragId);
	        if (origin) {
	          dragOffset = origin.apply(that, arguments);
	          dragOffset = [ dragOffset.x - position0[0], dragOffset.y - position0[1] ];
	        } else {
	          dragOffset = [ 0, 0 ];
	        }
	        dispatch({
	          type: "dragstart"
	        });
	        function moved() {
	          var position1 = position(parent, dragId), dx, dy;
	          if (!position1) return;
	          dx = position1[0] - position0[0];
	          dy = position1[1] - position0[1];
	          dragged |= dx | dy;
	          position0 = position1;
	          dispatch({
	            type: "drag",
	            x: position1[0] + dragOffset[0],
	            y: position1[1] + dragOffset[1],
	            dx: dx,
	            dy: dy
	          });
	        }
	        function ended() {
	          if (!position(parent, dragId)) return;
	          dragSubject.on(move + dragName, null).on(end + dragName, null);
	          dragRestore(dragged);
	          dispatch({
	            type: "dragend"
	          });
	        }
	      };
	    }
	    drag.origin = function(x) {
	      if (!arguments.length) return origin;
	      origin = x;
	      return drag;
	    };
	    return d3.rebind(drag, event, "on");
	  };
	  function d3_behavior_dragTouchId() {
	    return d3.event.changedTouches[0].identifier;
	  }
	  d3.touches = function(container, touches) {
	    if (arguments.length < 2) touches = d3_eventSource().touches;
	    return touches ? d3_array(touches).map(function(touch) {
	      var point = d3_mousePoint(container, touch);
	      point.identifier = touch.identifier;
	      return point;
	    }) : [];
	  };
	  var ε = 1e-6, ε2 = ε * ε, π = Math.PI, τ = 2 * π, τε = τ - ε, halfπ = π / 2, d3_radians = π / 180, d3_degrees = 180 / π;
	  function d3_sgn(x) {
	    return x > 0 ? 1 : x < 0 ? -1 : 0;
	  }
	  function d3_cross2d(a, b, c) {
	    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
	  }
	  function d3_acos(x) {
	    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
	  }
	  function d3_asin(x) {
	    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
	  }
	  function d3_sinh(x) {
	    return ((x = Math.exp(x)) - 1 / x) / 2;
	  }
	  function d3_cosh(x) {
	    return ((x = Math.exp(x)) + 1 / x) / 2;
	  }
	  function d3_tanh(x) {
	    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
	  }
	  function d3_haversin(x) {
	    return (x = Math.sin(x / 2)) * x;
	  }
	  var ρ = Math.SQRT2, ρ2 = 2, ρ4 = 4;
	  d3.interpolateZoom = function(p0, p1) {
	    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
	    if (d2 < ε2) {
	      S = Math.log(w1 / w0) / ρ;
	      i = function(t) {
	        return [ ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * t * S) ];
	      };
	    } else {
	      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1), b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
	      S = (r1 - r0) / ρ;
	      i = function(t) {
	        var s = t * S, coshr0 = d3_cosh(r0), u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
	        return [ ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0) ];
	      };
	    }
	    i.duration = S * 1e3;
	    return i;
	  };
	  d3.behavior.zoom = function() {
	    var view = {
	      x: 0,
	      y: 0,
	      k: 1
	    }, translate0, center0, center, size = [ 960, 500 ], scaleExtent = d3_behavior_zoomInfinity, duration = 250, zooming = 0, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
	    if (!d3_behavior_zoomWheel) {
	      d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
	        return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
	      }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
	        return d3.event.wheelDelta;
	      }, "mousewheel") : (d3_behavior_zoomDelta = function() {
	        return -d3.event.detail;
	      }, "MozMousePixelScroll");
	    }
	    function zoom(g) {
	      g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
	    }
	    zoom.event = function(g) {
	      g.each(function() {
	        var dispatch = event.of(this, arguments), view1 = view;
	        if (d3_transitionInheritId) {
	          d3.select(this).transition().each("start.zoom", function() {
	            view = this.__chart__ || {
	              x: 0,
	              y: 0,
	              k: 1
	            };
	            zoomstarted(dispatch);
	          }).tween("zoom:zoom", function() {
	            var dx = size[0], dy = size[1], cx = center0 ? center0[0] : dx / 2, cy = center0 ? center0[1] : dy / 2, i = d3.interpolateZoom([ (cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k ], [ (cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k ]);
	            return function(t) {
	              var l = i(t), k = dx / l[2];
	              this.__chart__ = view = {
	                x: cx - l[0] * k,
	                y: cy - l[1] * k,
	                k: k
	              };
	              zoomed(dispatch);
	            };
	          }).each("interrupt.zoom", function() {
	            zoomended(dispatch);
	          }).each("end.zoom", function() {
	            zoomended(dispatch);
	          });
	        } else {
	          this.__chart__ = view;
	          zoomstarted(dispatch);
	          zoomed(dispatch);
	          zoomended(dispatch);
	        }
	      });
	    };
	    zoom.translate = function(_) {
	      if (!arguments.length) return [ view.x, view.y ];
	      view = {
	        x: +_[0],
	        y: +_[1],
	        k: view.k
	      };
	      rescale();
	      return zoom;
	    };
	    zoom.scale = function(_) {
	      if (!arguments.length) return view.k;
	      view = {
	        x: view.x,
	        y: view.y,
	        k: null
	      };
	      scaleTo(+_);
	      rescale();
	      return zoom;
	    };
	    zoom.scaleExtent = function(_) {
	      if (!arguments.length) return scaleExtent;
	      scaleExtent = _ == null ? d3_behavior_zoomInfinity : [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.center = function(_) {
	      if (!arguments.length) return center;
	      center = _ && [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.size = function(_) {
	      if (!arguments.length) return size;
	      size = _ && [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.duration = function(_) {
	      if (!arguments.length) return duration;
	      duration = +_;
	      return zoom;
	    };
	    zoom.x = function(z) {
	      if (!arguments.length) return x1;
	      x1 = z;
	      x0 = z.copy();
	      view = {
	        x: 0,
	        y: 0,
	        k: 1
	      };
	      return zoom;
	    };
	    zoom.y = function(z) {
	      if (!arguments.length) return y1;
	      y1 = z;
	      y0 = z.copy();
	      view = {
	        x: 0,
	        y: 0,
	        k: 1
	      };
	      return zoom;
	    };
	    function location(p) {
	      return [ (p[0] - view.x) / view.k, (p[1] - view.y) / view.k ];
	    }
	    function point(l) {
	      return [ l[0] * view.k + view.x, l[1] * view.k + view.y ];
	    }
	    function scaleTo(s) {
	      view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
	    }
	    function translateTo(p, l) {
	      l = point(l);
	      view.x += p[0] - l[0];
	      view.y += p[1] - l[1];
	    }
	    function zoomTo(that, p, l, k) {
	      that.__chart__ = {
	        x: view.x,
	        y: view.y,
	        k: view.k
	      };
	      scaleTo(Math.pow(2, k));
	      translateTo(center0 = p, l);
	      that = d3.select(that);
	      if (duration > 0) that = that.transition().duration(duration);
	      that.call(zoom.event);
	    }
	    function rescale() {
	      if (x1) x1.domain(x0.range().map(function(x) {
	        return (x - view.x) / view.k;
	      }).map(x0.invert));
	      if (y1) y1.domain(y0.range().map(function(y) {
	        return (y - view.y) / view.k;
	      }).map(y0.invert));
	    }
	    function zoomstarted(dispatch) {
	      if (!zooming++) dispatch({
	        type: "zoomstart"
	      });
	    }
	    function zoomed(dispatch) {
	      rescale();
	      dispatch({
	        type: "zoom",
	        scale: view.k,
	        translate: [ view.x, view.y ]
	      });
	    }
	    function zoomended(dispatch) {
	      if (!--zooming) dispatch({
	        type: "zoomend"
	      }), center0 = null;
	    }
	    function mousedowned() {
	      var that = this, dispatch = event.of(that, arguments), dragged = 0, subject = d3.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended), location0 = location(d3.mouse(that)), dragRestore = d3_event_dragSuppress(that);
	      d3_selection_interrupt.call(that);
	      zoomstarted(dispatch);
	      function moved() {
	        dragged = 1;
	        translateTo(d3.mouse(that), location0);
	        zoomed(dispatch);
	      }
	      function ended() {
	        subject.on(mousemove, null).on(mouseup, null);
	        dragRestore(dragged);
	        zoomended(dispatch);
	      }
	    }
	    function touchstarted() {
	      var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = ".zoom-" + d3.event.changedTouches[0].identifier, touchmove = "touchmove" + zoomName, touchend = "touchend" + zoomName, targets = [], subject = d3.select(that), dragRestore = d3_event_dragSuppress(that);
	      started();
	      zoomstarted(dispatch);
	      subject.on(mousedown, null).on(touchstart, started);
	      function relocate() {
	        var touches = d3.touches(that);
	        scale0 = view.k;
	        touches.forEach(function(t) {
	          if (t.identifier in locations0) locations0[t.identifier] = location(t);
	        });
	        return touches;
	      }
	      function started() {
	        var target = d3.event.target;
	        d3.select(target).on(touchmove, moved).on(touchend, ended);
	        targets.push(target);
	        var changed = d3.event.changedTouches;
	        for (var i = 0, n = changed.length; i < n; ++i) {
	          locations0[changed[i].identifier] = null;
	        }
	        var touches = relocate(), now = Date.now();
	        if (touches.length === 1) {
	          if (now - touchtime < 500) {
	            var p = touches[0];
	            zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
	            d3_eventPreventDefault();
	          }
	          touchtime = now;
	        } else if (touches.length > 1) {
	          var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];
	          distance0 = dx * dx + dy * dy;
	        }
	      }
	      function moved() {
	        var touches = d3.touches(that), p0, l0, p1, l1;
	        d3_selection_interrupt.call(that);
	        for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
	          p1 = touches[i];
	          if (l1 = locations0[p1.identifier]) {
	            if (l0) break;
	            p0 = p1, l0 = l1;
	          }
	        }
	        if (l1) {
	          var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
	          p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
	          l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
	          scaleTo(scale1 * scale0);
	        }
	        touchtime = null;
	        translateTo(p0, l0);
	        zoomed(dispatch);
	      }
	      function ended() {
	        if (d3.event.touches.length) {
	          var changed = d3.event.changedTouches;
	          for (var i = 0, n = changed.length; i < n; ++i) {
	            delete locations0[changed[i].identifier];
	          }
	          for (var identifier in locations0) {
	            return void relocate();
	          }
	        }
	        d3.selectAll(targets).on(zoomName, null);
	        subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
	        dragRestore();
	        zoomended(dispatch);
	      }
	    }
	    function mousewheeled() {
	      var dispatch = event.of(this, arguments);
	      if (mousewheelTimer) clearTimeout(mousewheelTimer); else d3_selection_interrupt.call(this), translate0 = location(center0 = center || d3.mouse(this)), zoomstarted(dispatch);
	      mousewheelTimer = setTimeout(function() {
	        mousewheelTimer = null;
	        zoomended(dispatch);
	      }, 50);
	      d3_eventPreventDefault();
	      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
	      translateTo(center0, translate0);
	      zoomed(dispatch);
	    }
	    function dblclicked() {
	      var p = d3.mouse(this), k = Math.log(view.k) / Math.LN2;
	      zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
	    }
	    return d3.rebind(zoom, event, "on");
	  };
	  var d3_behavior_zoomInfinity = [ 0, Infinity ], d3_behavior_zoomDelta, d3_behavior_zoomWheel;
	  d3.color = d3_color;
	  function d3_color() {}
	  d3_color.prototype.toString = function() {
	    return this.rgb() + "";
	  };
	  d3.hsl = d3_hsl;
	  function d3_hsl(h, s, l) {
	    return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
	  }
	  var d3_hslPrototype = d3_hsl.prototype = new d3_color();
	  d3_hslPrototype.brighter = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_hsl(this.h, this.s, this.l / k);
	  };
	  d3_hslPrototype.darker = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_hsl(this.h, this.s, k * this.l);
	  };
	  d3_hslPrototype.rgb = function() {
	    return d3_hsl_rgb(this.h, this.s, this.l);
	  };
	  function d3_hsl_rgb(h, s, l) {
	    var m1, m2;
	    h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
	    s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
	    l = l < 0 ? 0 : l > 1 ? 1 : l;
	    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
	    m1 = 2 * l - m2;
	    function v(h) {
	      if (h > 360) h -= 360; else if (h < 0) h += 360;
	      if (h < 60) return m1 + (m2 - m1) * h / 60;
	      if (h < 180) return m2;
	      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
	      return m1;
	    }
	    function vv(h) {
	      return Math.round(v(h) * 255);
	    }
	    return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
	  }
	  d3.hcl = d3_hcl;
	  function d3_hcl(h, c, l) {
	    return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
	  }
	  var d3_hclPrototype = d3_hcl.prototype = new d3_color();
	  d3_hclPrototype.brighter = function(k) {
	    return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
	  };
	  d3_hclPrototype.darker = function(k) {
	    return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
	  };
	  d3_hclPrototype.rgb = function() {
	    return d3_hcl_lab(this.h, this.c, this.l).rgb();
	  };
	  function d3_hcl_lab(h, c, l) {
	    if (isNaN(h)) h = 0;
	    if (isNaN(c)) c = 0;
	    return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
	  }
	  d3.lab = d3_lab;
	  function d3_lab(l, a, b) {
	    return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
	  }
	  var d3_lab_K = 18;
	  var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
	  var d3_labPrototype = d3_lab.prototype = new d3_color();
	  d3_labPrototype.brighter = function(k) {
	    return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
	  };
	  d3_labPrototype.darker = function(k) {
	    return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
	  };
	  d3_labPrototype.rgb = function() {
	    return d3_lab_rgb(this.l, this.a, this.b);
	  };
	  function d3_lab_rgb(l, a, b) {
	    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
	    x = d3_lab_xyz(x) * d3_lab_X;
	    y = d3_lab_xyz(y) * d3_lab_Y;
	    z = d3_lab_xyz(z) * d3_lab_Z;
	    return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
	  }
	  function d3_lab_hcl(l, a, b) {
	    return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
	  }
	  function d3_lab_xyz(x) {
	    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
	  }
	  function d3_xyz_lab(x) {
	    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
	  }
	  function d3_xyz_rgb(r) {
	    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
	  }
	  d3.rgb = d3_rgb;
	  function d3_rgb(r, g, b) {
	    return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
	  }
	  function d3_rgbNumber(value) {
	    return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
	  }
	  function d3_rgbString(value) {
	    return d3_rgbNumber(value) + "";
	  }
	  var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
	  d3_rgbPrototype.brighter = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    var r = this.r, g = this.g, b = this.b, i = 30;
	    if (!r && !g && !b) return new d3_rgb(i, i, i);
	    if (r && r < i) r = i;
	    if (g && g < i) g = i;
	    if (b && b < i) b = i;
	    return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
	  };
	  d3_rgbPrototype.darker = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_rgb(k * this.r, k * this.g, k * this.b);
	  };
	  d3_rgbPrototype.hsl = function() {
	    return d3_rgb_hsl(this.r, this.g, this.b);
	  };
	  d3_rgbPrototype.toString = function() {
	    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
	  };
	  function d3_rgb_hex(v) {
	    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
	  }
	  function d3_rgb_parse(format, rgb, hsl) {
	    var r = 0, g = 0, b = 0, m1, m2, color;
	    m1 = /([a-z]+)\((.*)\)/.exec(format = format.toLowerCase());
	    if (m1) {
	      m2 = m1[2].split(",");
	      switch (m1[1]) {
	       case "hsl":
	        {
	          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
	        }

	       case "rgb":
	        {
	          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
	        }
	      }
	    }
	    if (color = d3_rgb_names.get(format)) {
	      return rgb(color.r, color.g, color.b);
	    }
	    if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
	      if (format.length === 4) {
	        r = (color & 3840) >> 4;
	        r = r >> 4 | r;
	        g = color & 240;
	        g = g >> 4 | g;
	        b = color & 15;
	        b = b << 4 | b;
	      } else if (format.length === 7) {
	        r = (color & 16711680) >> 16;
	        g = (color & 65280) >> 8;
	        b = color & 255;
	      }
	    }
	    return rgb(r, g, b);
	  }
	  function d3_rgb_hsl(r, g, b) {
	    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
	    if (d) {
	      s = l < .5 ? d / (max + min) : d / (2 - max - min);
	      if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
	      h *= 60;
	    } else {
	      h = NaN;
	      s = l > 0 && l < 1 ? 0 : h;
	    }
	    return new d3_hsl(h, s, l);
	  }
	  function d3_rgb_lab(r, g, b) {
	    r = d3_rgb_xyz(r);
	    g = d3_rgb_xyz(g);
	    b = d3_rgb_xyz(b);
	    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
	    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
	  }
	  function d3_rgb_xyz(r) {
	    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
	  }
	  function d3_rgb_parseNumber(c) {
	    var f = parseFloat(c);
	    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
	  }
	  var d3_rgb_names = d3.map({
	    aliceblue: 15792383,
	    antiquewhite: 16444375,
	    aqua: 65535,
	    aquamarine: 8388564,
	    azure: 15794175,
	    beige: 16119260,
	    bisque: 16770244,
	    black: 0,
	    blanchedalmond: 16772045,
	    blue: 255,
	    blueviolet: 9055202,
	    brown: 10824234,
	    burlywood: 14596231,
	    cadetblue: 6266528,
	    chartreuse: 8388352,
	    chocolate: 13789470,
	    coral: 16744272,
	    cornflowerblue: 6591981,
	    cornsilk: 16775388,
	    crimson: 14423100,
	    cyan: 65535,
	    darkblue: 139,
	    darkcyan: 35723,
	    darkgoldenrod: 12092939,
	    darkgray: 11119017,
	    darkgreen: 25600,
	    darkgrey: 11119017,
	    darkkhaki: 12433259,
	    darkmagenta: 9109643,
	    darkolivegreen: 5597999,
	    darkorange: 16747520,
	    darkorchid: 10040012,
	    darkred: 9109504,
	    darksalmon: 15308410,
	    darkseagreen: 9419919,
	    darkslateblue: 4734347,
	    darkslategray: 3100495,
	    darkslategrey: 3100495,
	    darkturquoise: 52945,
	    darkviolet: 9699539,
	    deeppink: 16716947,
	    deepskyblue: 49151,
	    dimgray: 6908265,
	    dimgrey: 6908265,
	    dodgerblue: 2003199,
	    firebrick: 11674146,
	    floralwhite: 16775920,
	    forestgreen: 2263842,
	    fuchsia: 16711935,
	    gainsboro: 14474460,
	    ghostwhite: 16316671,
	    gold: 16766720,
	    goldenrod: 14329120,
	    gray: 8421504,
	    green: 32768,
	    greenyellow: 11403055,
	    grey: 8421504,
	    honeydew: 15794160,
	    hotpink: 16738740,
	    indianred: 13458524,
	    indigo: 4915330,
	    ivory: 16777200,
	    khaki: 15787660,
	    lavender: 15132410,
	    lavenderblush: 16773365,
	    lawngreen: 8190976,
	    lemonchiffon: 16775885,
	    lightblue: 11393254,
	    lightcoral: 15761536,
	    lightcyan: 14745599,
	    lightgoldenrodyellow: 16448210,
	    lightgray: 13882323,
	    lightgreen: 9498256,
	    lightgrey: 13882323,
	    lightpink: 16758465,
	    lightsalmon: 16752762,
	    lightseagreen: 2142890,
	    lightskyblue: 8900346,
	    lightslategray: 7833753,
	    lightslategrey: 7833753,
	    lightsteelblue: 11584734,
	    lightyellow: 16777184,
	    lime: 65280,
	    limegreen: 3329330,
	    linen: 16445670,
	    magenta: 16711935,
	    maroon: 8388608,
	    mediumaquamarine: 6737322,
	    mediumblue: 205,
	    mediumorchid: 12211667,
	    mediumpurple: 9662683,
	    mediumseagreen: 3978097,
	    mediumslateblue: 8087790,
	    mediumspringgreen: 64154,
	    mediumturquoise: 4772300,
	    mediumvioletred: 13047173,
	    midnightblue: 1644912,
	    mintcream: 16121850,
	    mistyrose: 16770273,
	    moccasin: 16770229,
	    navajowhite: 16768685,
	    navy: 128,
	    oldlace: 16643558,
	    olive: 8421376,
	    olivedrab: 7048739,
	    orange: 16753920,
	    orangered: 16729344,
	    orchid: 14315734,
	    palegoldenrod: 15657130,
	    palegreen: 10025880,
	    paleturquoise: 11529966,
	    palevioletred: 14381203,
	    papayawhip: 16773077,
	    peachpuff: 16767673,
	    peru: 13468991,
	    pink: 16761035,
	    plum: 14524637,
	    powderblue: 11591910,
	    purple: 8388736,
	    rebeccapurple: 6697881,
	    red: 16711680,
	    rosybrown: 12357519,
	    royalblue: 4286945,
	    saddlebrown: 9127187,
	    salmon: 16416882,
	    sandybrown: 16032864,
	    seagreen: 3050327,
	    seashell: 16774638,
	    sienna: 10506797,
	    silver: 12632256,
	    skyblue: 8900331,
	    slateblue: 6970061,
	    slategray: 7372944,
	    slategrey: 7372944,
	    snow: 16775930,
	    springgreen: 65407,
	    steelblue: 4620980,
	    tan: 13808780,
	    teal: 32896,
	    thistle: 14204888,
	    tomato: 16737095,
	    turquoise: 4251856,
	    violet: 15631086,
	    wheat: 16113331,
	    white: 16777215,
	    whitesmoke: 16119285,
	    yellow: 16776960,
	    yellowgreen: 10145074
	  });
	  d3_rgb_names.forEach(function(key, value) {
	    d3_rgb_names.set(key, d3_rgbNumber(value));
	  });
	  function d3_functor(v) {
	    return typeof v === "function" ? v : function() {
	      return v;
	    };
	  }
	  d3.functor = d3_functor;
	  d3.xhr = d3_xhrType(d3_identity);
	  function d3_xhrType(response) {
	    return function(url, mimeType, callback) {
	      if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, mimeType = null;
	      return d3_xhr(url, mimeType, response, callback);
	    };
	  }
	  function d3_xhr(url, mimeType, response, callback) {
	    var xhr = {}, dispatch = d3.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
	    if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
	    "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
	      request.readyState > 3 && respond();
	    };
	    function respond() {
	      var status = request.status, result;
	      if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
	        try {
	          result = response.call(xhr, request);
	        } catch (e) {
	          dispatch.error.call(xhr, e);
	          return;
	        }
	        dispatch.load.call(xhr, result);
	      } else {
	        dispatch.error.call(xhr, request);
	      }
	    }
	    request.onprogress = function(event) {
	      var o = d3.event;
	      d3.event = event;
	      try {
	        dispatch.progress.call(xhr, request);
	      } finally {
	        d3.event = o;
	      }
	    };
	    xhr.header = function(name, value) {
	      name = (name + "").toLowerCase();
	      if (arguments.length < 2) return headers[name];
	      if (value == null) delete headers[name]; else headers[name] = value + "";
	      return xhr;
	    };
	    xhr.mimeType = function(value) {
	      if (!arguments.length) return mimeType;
	      mimeType = value == null ? null : value + "";
	      return xhr;
	    };
	    xhr.responseType = function(value) {
	      if (!arguments.length) return responseType;
	      responseType = value;
	      return xhr;
	    };
	    xhr.response = function(value) {
	      response = value;
	      return xhr;
	    };
	    [ "get", "post" ].forEach(function(method) {
	      xhr[method] = function() {
	        return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
	      };
	    });
	    xhr.send = function(method, data, callback) {
	      if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
	      request.open(method, url, true);
	      if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
	      if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
	      if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
	      if (responseType != null) request.responseType = responseType;
	      if (callback != null) xhr.on("error", callback).on("load", function(request) {
	        callback(null, request);
	      });
	      dispatch.beforesend.call(xhr, request);
	      request.send(data == null ? null : data);
	      return xhr;
	    };
	    xhr.abort = function() {
	      request.abort();
	      return xhr;
	    };
	    d3.rebind(xhr, dispatch, "on");
	    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
	  }
	  function d3_xhr_fixCallback(callback) {
	    return callback.length === 1 ? function(error, request) {
	      callback(error == null ? request : null);
	    } : callback;
	  }
	  function d3_xhrHasResponse(request) {
	    var type = request.responseType;
	    return type && type !== "text" ? request.response : request.responseText;
	  }
	  d3.dsv = function(delimiter, mimeType) {
	    var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
	    function dsv(url, row, callback) {
	      if (arguments.length < 3) callback = row, row = null;
	      var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
	      xhr.row = function(_) {
	        return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
	      };
	      return xhr;
	    }
	    function response(request) {
	      return dsv.parse(request.responseText);
	    }
	    function typedResponse(f) {
	      return function(request) {
	        return dsv.parse(request.responseText, f);
	      };
	    }
	    dsv.parse = function(text, f) {
	      var o;
	      return dsv.parseRows(text, function(row, i) {
	        if (o) return o(row, i - 1);
	        var a = new Function("d", "return {" + row.map(function(name, i) {
	          return JSON.stringify(name) + ": d[" + i + "]";
	        }).join(",") + "}");
	        o = f ? function(row, i) {
	          return f(a(row), i);
	        } : a;
	      });
	    };
	    dsv.parseRows = function(text, f) {
	      var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
	      function token() {
	        if (I >= N) return EOF;
	        if (eol) return eol = false, EOL;
	        var j = I;
	        if (text.charCodeAt(j) === 34) {
	          var i = j;
	          while (i++ < N) {
	            if (text.charCodeAt(i) === 34) {
	              if (text.charCodeAt(i + 1) !== 34) break;
	              ++i;
	            }
	          }
	          I = i + 2;
	          var c = text.charCodeAt(i + 1);
	          if (c === 13) {
	            eol = true;
	            if (text.charCodeAt(i + 2) === 10) ++I;
	          } else if (c === 10) {
	            eol = true;
	          }
	          return text.slice(j + 1, i).replace(/""/g, '"');
	        }
	        while (I < N) {
	          var c = text.charCodeAt(I++), k = 1;
	          if (c === 10) eol = true; else if (c === 13) {
	            eol = true;
	            if (text.charCodeAt(I) === 10) ++I, ++k;
	          } else if (c !== delimiterCode) continue;
	          return text.slice(j, I - k);
	        }
	        return text.slice(j);
	      }
	      while ((t = token()) !== EOF) {
	        var a = [];
	        while (t !== EOL && t !== EOF) {
	          a.push(t);
	          t = token();
	        }
	        if (f && (a = f(a, n++)) == null) continue;
	        rows.push(a);
	      }
	      return rows;
	    };
	    dsv.format = function(rows) {
	      if (Array.isArray(rows[0])) return dsv.formatRows(rows);
	      var fieldSet = new d3_Set(), fields = [];
	      rows.forEach(function(row) {
	        for (var field in row) {
	          if (!fieldSet.has(field)) {
	            fields.push(fieldSet.add(field));
	          }
	        }
	      });
	      return [ fields.map(formatValue).join(delimiter) ].concat(rows.map(function(row) {
	        return fields.map(function(field) {
	          return formatValue(row[field]);
	        }).join(delimiter);
	      })).join("\n");
	    };
	    dsv.formatRows = function(rows) {
	      return rows.map(formatRow).join("\n");
	    };
	    function formatRow(row) {
	      return row.map(formatValue).join(delimiter);
	    }
	    function formatValue(text) {
	      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
	    }
	    return dsv;
	  };
	  d3.csv = d3.dsv(",", "text/csv");
	  d3.tsv = d3.dsv("	", "text/tab-separated-values");
	  var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function(callback) {
	    setTimeout(callback, 17);
	  };
	  d3.timer = function() {
	    d3_timer.apply(this, arguments);
	  };
	  function d3_timer(callback, delay, then) {
	    var n = arguments.length;
	    if (n < 2) delay = 0;
	    if (n < 3) then = Date.now();
	    var time = then + delay, timer = {
	      c: callback,
	      t: time,
	      n: null
	    };
	    if (d3_timer_queueTail) d3_timer_queueTail.n = timer; else d3_timer_queueHead = timer;
	    d3_timer_queueTail = timer;
	    if (!d3_timer_interval) {
	      d3_timer_timeout = clearTimeout(d3_timer_timeout);
	      d3_timer_interval = 1;
	      d3_timer_frame(d3_timer_step);
	    }
	    return timer;
	  }
	  function d3_timer_step() {
	    var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
	    if (delay > 24) {
	      if (isFinite(delay)) {
	        clearTimeout(d3_timer_timeout);
	        d3_timer_timeout = setTimeout(d3_timer_step, delay);
	      }
	      d3_timer_interval = 0;
	    } else {
	      d3_timer_interval = 1;
	      d3_timer_frame(d3_timer_step);
	    }
	  }
	  d3.timer.flush = function() {
	    d3_timer_mark();
	    d3_timer_sweep();
	  };
	  function d3_timer_mark() {
	    var now = Date.now(), timer = d3_timer_queueHead;
	    while (timer) {
	      if (now >= timer.t && timer.c(now - timer.t)) timer.c = null;
	      timer = timer.n;
	    }
	    return now;
	  }
	  function d3_timer_sweep() {
	    var t0, t1 = d3_timer_queueHead, time = Infinity;
	    while (t1) {
	      if (t1.c) {
	        if (t1.t < time) time = t1.t;
	        t1 = (t0 = t1).n;
	      } else {
	        t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
	      }
	    }
	    d3_timer_queueTail = t0;
	    return time;
	  }
	  function d3_format_precision(x, p) {
	    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
	  }
	  d3.round = function(x, n) {
	    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
	  };
	  var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
	  d3.formatPrefix = function(value, precision) {
	    var i = 0;
	    if (value = +value) {
	      if (value < 0) value *= -1;
	      if (precision) value = d3.round(value, d3_format_precision(value, precision));
	      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
	      i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
	    }
	    return d3_formatPrefixes[8 + i / 3];
	  };
	  function d3_formatPrefix(d, i) {
	    var k = Math.pow(10, abs(8 - i) * 3);
	    return {
	      scale: i > 8 ? function(d) {
	        return d / k;
	      } : function(d) {
	        return d * k;
	      },
	      symbol: d
	    };
	  }
	  function d3_locale_numberFormat(locale) {
	    var locale_decimal = locale.decimal, locale_thousands = locale.thousands, locale_grouping = locale.grouping, locale_currency = locale.currency, formatGroup = locale_grouping && locale_thousands ? function(value, width) {
	      var i = value.length, t = [], j = 0, g = locale_grouping[0], length = 0;
	      while (i > 0 && g > 0) {
	        if (length + g + 1 > width) g = Math.max(1, width - length);
	        t.push(value.substring(i -= g, i + g));
	        if ((length += g + 1) > width) break;
	        g = locale_grouping[j = (j + 1) % locale_grouping.length];
	      }
	      return t.reverse().join(locale_thousands);
	    } : d3_identity;
	    return function(specifier) {
	      var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "-", symbol = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, prefix = "", suffix = "", integer = false, exponent = true;
	      if (precision) precision = +precision.substring(1);
	      if (zfill || fill === "0" && align === "=") {
	        zfill = fill = "0";
	        align = "=";
	      }
	      switch (type) {
	       case "n":
	        comma = true;
	        type = "g";
	        break;

	       case "%":
	        scale = 100;
	        suffix = "%";
	        type = "f";
	        break;

	       case "p":
	        scale = 100;
	        suffix = "%";
	        type = "r";
	        break;

	       case "b":
	       case "o":
	       case "x":
	       case "X":
	        if (symbol === "#") prefix = "0" + type.toLowerCase();

	       case "c":
	        exponent = false;

	       case "d":
	        integer = true;
	        precision = 0;
	        break;

	       case "s":
	        scale = -1;
	        type = "r";
	        break;
	      }
	      if (symbol === "$") prefix = locale_currency[0], suffix = locale_currency[1];
	      if (type == "r" && !precision) type = "g";
	      if (precision != null) {
	        if (type == "g") precision = Math.max(1, Math.min(21, precision)); else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
	      }
	      type = d3_format_types.get(type) || d3_format_typeDefault;
	      var zcomma = zfill && comma;
	      return function(value) {
	        var fullSuffix = suffix;
	        if (integer && value % 1) return "";
	        var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;
	        if (scale < 0) {
	          var unit = d3.formatPrefix(value, precision);
	          value = unit.scale(value);
	          fullSuffix = unit.symbol + suffix;
	        } else {
	          value *= scale;
	        }
	        value = type(value, precision);
	        var i = value.lastIndexOf("."), before, after;
	        if (i < 0) {
	          var j = exponent ? value.lastIndexOf("e") : -1;
	          if (j < 0) before = value, after = ""; else before = value.substring(0, j), after = value.substring(j);
	        } else {
	          before = value.substring(0, i);
	          after = locale_decimal + value.substring(i + 1);
	        }
	        if (!zfill && comma) before = formatGroup(before, Infinity);
	        var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
	        if (zcomma) before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
	        negative += prefix;
	        value = before + after;
	        return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
	      };
	    };
	  }
	  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
	  var d3_format_types = d3.map({
	    b: function(x) {
	      return x.toString(2);
	    },
	    c: function(x) {
	      return String.fromCharCode(x);
	    },
	    o: function(x) {
	      return x.toString(8);
	    },
	    x: function(x) {
	      return x.toString(16);
	    },
	    X: function(x) {
	      return x.toString(16).toUpperCase();
	    },
	    g: function(x, p) {
	      return x.toPrecision(p);
	    },
	    e: function(x, p) {
	      return x.toExponential(p);
	    },
	    f: function(x, p) {
	      return x.toFixed(p);
	    },
	    r: function(x, p) {
	      return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
	    }
	  });
	  function d3_format_typeDefault(x) {
	    return x + "";
	  }
	  var d3_time = d3.time = {}, d3_date = Date;
	  function d3_date_utc() {
	    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
	  }
	  d3_date_utc.prototype = {
	    getDate: function() {
	      return this._.getUTCDate();
	    },
	    getDay: function() {
	      return this._.getUTCDay();
	    },
	    getFullYear: function() {
	      return this._.getUTCFullYear();
	    },
	    getHours: function() {
	      return this._.getUTCHours();
	    },
	    getMilliseconds: function() {
	      return this._.getUTCMilliseconds();
	    },
	    getMinutes: function() {
	      return this._.getUTCMinutes();
	    },
	    getMonth: function() {
	      return this._.getUTCMonth();
	    },
	    getSeconds: function() {
	      return this._.getUTCSeconds();
	    },
	    getTime: function() {
	      return this._.getTime();
	    },
	    getTimezoneOffset: function() {
	      return 0;
	    },
	    valueOf: function() {
	      return this._.valueOf();
	    },
	    setDate: function() {
	      d3_time_prototype.setUTCDate.apply(this._, arguments);
	    },
	    setDay: function() {
	      d3_time_prototype.setUTCDay.apply(this._, arguments);
	    },
	    setFullYear: function() {
	      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
	    },
	    setHours: function() {
	      d3_time_prototype.setUTCHours.apply(this._, arguments);
	    },
	    setMilliseconds: function() {
	      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
	    },
	    setMinutes: function() {
	      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
	    },
	    setMonth: function() {
	      d3_time_prototype.setUTCMonth.apply(this._, arguments);
	    },
	    setSeconds: function() {
	      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
	    },
	    setTime: function() {
	      d3_time_prototype.setTime.apply(this._, arguments);
	    }
	  };
	  var d3_time_prototype = Date.prototype;
	  function d3_time_interval(local, step, number) {
	    function round(date) {
	      var d0 = local(date), d1 = offset(d0, 1);
	      return date - d0 < d1 - date ? d0 : d1;
	    }
	    function ceil(date) {
	      step(date = local(new d3_date(date - 1)), 1);
	      return date;
	    }
	    function offset(date, k) {
	      step(date = new d3_date(+date), k);
	      return date;
	    }
	    function range(t0, t1, dt) {
	      var time = ceil(t0), times = [];
	      if (dt > 1) {
	        while (time < t1) {
	          if (!(number(time) % dt)) times.push(new Date(+time));
	          step(time, 1);
	        }
	      } else {
	        while (time < t1) times.push(new Date(+time)), step(time, 1);
	      }
	      return times;
	    }
	    function range_utc(t0, t1, dt) {
	      try {
	        d3_date = d3_date_utc;
	        var utc = new d3_date_utc();
	        utc._ = t0;
	        return range(utc, t1, dt);
	      } finally {
	        d3_date = Date;
	      }
	    }
	    local.floor = local;
	    local.round = round;
	    local.ceil = ceil;
	    local.offset = offset;
	    local.range = range;
	    var utc = local.utc = d3_time_interval_utc(local);
	    utc.floor = utc;
	    utc.round = d3_time_interval_utc(round);
	    utc.ceil = d3_time_interval_utc(ceil);
	    utc.offset = d3_time_interval_utc(offset);
	    utc.range = range_utc;
	    return local;
	  }
	  function d3_time_interval_utc(method) {
	    return function(date, k) {
	      try {
	        d3_date = d3_date_utc;
	        var utc = new d3_date_utc();
	        utc._ = date;
	        return method(utc, k)._;
	      } finally {
	        d3_date = Date;
	      }
	    };
	  }
	  d3_time.year = d3_time_interval(function(date) {
	    date = d3_time.day(date);
	    date.setMonth(0, 1);
	    return date;
	  }, function(date, offset) {
	    date.setFullYear(date.getFullYear() + offset);
	  }, function(date) {
	    return date.getFullYear();
	  });
	  d3_time.years = d3_time.year.range;
	  d3_time.years.utc = d3_time.year.utc.range;
	  d3_time.day = d3_time_interval(function(date) {
	    var day = new d3_date(2e3, 0);
	    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	    return day;
	  }, function(date, offset) {
	    date.setDate(date.getDate() + offset);
	  }, function(date) {
	    return date.getDate() - 1;
	  });
	  d3_time.days = d3_time.day.range;
	  d3_time.days.utc = d3_time.day.utc.range;
	  d3_time.dayOfYear = function(date) {
	    var year = d3_time.year(date);
	    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
	  };
	  [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ].forEach(function(day, i) {
	    i = 7 - i;
	    var interval = d3_time[day] = d3_time_interval(function(date) {
	      (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
	      return date;
	    }, function(date, offset) {
	      date.setDate(date.getDate() + Math.floor(offset) * 7);
	    }, function(date) {
	      var day = d3_time.year(date).getDay();
	      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
	    });
	    d3_time[day + "s"] = interval.range;
	    d3_time[day + "s"].utc = interval.utc.range;
	    d3_time[day + "OfYear"] = function(date) {
	      var day = d3_time.year(date).getDay();
	      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
	    };
	  });
	  d3_time.week = d3_time.sunday;
	  d3_time.weeks = d3_time.sunday.range;
	  d3_time.weeks.utc = d3_time.sunday.utc.range;
	  d3_time.weekOfYear = d3_time.sundayOfYear;
	  function d3_locale_timeFormat(locale) {
	    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_days = locale.days, locale_shortDays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
	    function d3_time_format(template) {
	      var n = template.length;
	      function format(date) {
	        var string = [], i = -1, j = 0, c, p, f;
	        while (++i < n) {
	          if (template.charCodeAt(i) === 37) {
	            string.push(template.slice(j, i));
	            if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
	            if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
	            string.push(c);
	            j = i + 1;
	          }
	        }
	        string.push(template.slice(j, i));
	        return string.join("");
	      }
	      format.parse = function(string) {
	        var d = {
	          y: 1900,
	          m: 0,
	          d: 1,
	          H: 0,
	          M: 0,
	          S: 0,
	          L: 0,
	          Z: null
	        }, i = d3_time_parse(d, template, string, 0);
	        if (i != string.length) return null;
	        if ("p" in d) d.H = d.H % 12 + d.p * 12;
	        var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
	        if ("j" in d) date.setFullYear(d.y, 0, d.j); else if ("W" in d || "U" in d) {
	          if (!("w" in d)) d.w = "W" in d ? 1 : 0;
	          date.setFullYear(d.y, 0, 1);
	          date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
	        } else date.setFullYear(d.y, d.m, d.d);
	        date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
	        return localZ ? date._ : date;
	      };
	      format.toString = function() {
	        return template;
	      };
	      return format;
	    }
	    function d3_time_parse(date, template, string, j) {
	      var c, p, t, i = 0, n = template.length, m = string.length;
	      while (i < n) {
	        if (j >= m) return -1;
	        c = template.charCodeAt(i++);
	        if (c === 37) {
	          t = template.charAt(i++);
	          p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
	          if (!p || (j = p(date, string, j)) < 0) return -1;
	        } else if (c != string.charCodeAt(j++)) {
	          return -1;
	        }
	      }
	      return j;
	    }
	    d3_time_format.utc = function(template) {
	      var local = d3_time_format(template);
	      function format(date) {
	        try {
	          d3_date = d3_date_utc;
	          var utc = new d3_date();
	          utc._ = date;
	          return local(utc);
	        } finally {
	          d3_date = Date;
	        }
	      }
	      format.parse = function(string) {
	        try {
	          d3_date = d3_date_utc;
	          var date = local.parse(string);
	          return date && date._;
	        } finally {
	          d3_date = Date;
	        }
	      };
	      format.toString = local.toString;
	      return format;
	    };
	    d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
	    var d3_time_periodLookup = d3.map(), d3_time_dayRe = d3_time_formatRe(locale_days), d3_time_dayLookup = d3_time_formatLookup(locale_days), d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays), d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays), d3_time_monthRe = d3_time_formatRe(locale_months), d3_time_monthLookup = d3_time_formatLookup(locale_months), d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths), d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
	    locale_periods.forEach(function(p, i) {
	      d3_time_periodLookup.set(p.toLowerCase(), i);
	    });
	    var d3_time_formats = {
	      a: function(d) {
	        return locale_shortDays[d.getDay()];
	      },
	      A: function(d) {
	        return locale_days[d.getDay()];
	      },
	      b: function(d) {
	        return locale_shortMonths[d.getMonth()];
	      },
	      B: function(d) {
	        return locale_months[d.getMonth()];
	      },
	      c: d3_time_format(locale_dateTime),
	      d: function(d, p) {
	        return d3_time_formatPad(d.getDate(), p, 2);
	      },
	      e: function(d, p) {
	        return d3_time_formatPad(d.getDate(), p, 2);
	      },
	      H: function(d, p) {
	        return d3_time_formatPad(d.getHours(), p, 2);
	      },
	      I: function(d, p) {
	        return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
	      },
	      j: function(d, p) {
	        return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
	      },
	      L: function(d, p) {
	        return d3_time_formatPad(d.getMilliseconds(), p, 3);
	      },
	      m: function(d, p) {
	        return d3_time_formatPad(d.getMonth() + 1, p, 2);
	      },
	      M: function(d, p) {
	        return d3_time_formatPad(d.getMinutes(), p, 2);
	      },
	      p: function(d) {
	        return locale_periods[+(d.getHours() >= 12)];
	      },
	      S: function(d, p) {
	        return d3_time_formatPad(d.getSeconds(), p, 2);
	      },
	      U: function(d, p) {
	        return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
	      },
	      w: function(d) {
	        return d.getDay();
	      },
	      W: function(d, p) {
	        return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
	      },
	      x: d3_time_format(locale_date),
	      X: d3_time_format(locale_time),
	      y: function(d, p) {
	        return d3_time_formatPad(d.getFullYear() % 100, p, 2);
	      },
	      Y: function(d, p) {
	        return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
	      },
	      Z: d3_time_zone,
	      "%": function() {
	        return "%";
	      }
	    };
	    var d3_time_parsers = {
	      a: d3_time_parseWeekdayAbbrev,
	      A: d3_time_parseWeekday,
	      b: d3_time_parseMonthAbbrev,
	      B: d3_time_parseMonth,
	      c: d3_time_parseLocaleFull,
	      d: d3_time_parseDay,
	      e: d3_time_parseDay,
	      H: d3_time_parseHour24,
	      I: d3_time_parseHour24,
	      j: d3_time_parseDayOfYear,
	      L: d3_time_parseMilliseconds,
	      m: d3_time_parseMonthNumber,
	      M: d3_time_parseMinutes,
	      p: d3_time_parseAmPm,
	      S: d3_time_parseSeconds,
	      U: d3_time_parseWeekNumberSunday,
	      w: d3_time_parseWeekdayNumber,
	      W: d3_time_parseWeekNumberMonday,
	      x: d3_time_parseLocaleDate,
	      X: d3_time_parseLocaleTime,
	      y: d3_time_parseYear,
	      Y: d3_time_parseFullYear,
	      Z: d3_time_parseZone,
	      "%": d3_time_parseLiteralPercent
	    };
	    function d3_time_parseWeekdayAbbrev(date, string, i) {
	      d3_time_dayAbbrevRe.lastIndex = 0;
	      var n = d3_time_dayAbbrevRe.exec(string.slice(i));
	      return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseWeekday(date, string, i) {
	      d3_time_dayRe.lastIndex = 0;
	      var n = d3_time_dayRe.exec(string.slice(i));
	      return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseMonthAbbrev(date, string, i) {
	      d3_time_monthAbbrevRe.lastIndex = 0;
	      var n = d3_time_monthAbbrevRe.exec(string.slice(i));
	      return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseMonth(date, string, i) {
	      d3_time_monthRe.lastIndex = 0;
	      var n = d3_time_monthRe.exec(string.slice(i));
	      return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseLocaleFull(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
	    }
	    function d3_time_parseLocaleDate(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
	    }
	    function d3_time_parseLocaleTime(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
	    }
	    function d3_time_parseAmPm(date, string, i) {
	      var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
	      return n == null ? -1 : (date.p = n, i);
	    }
	    return d3_time_format;
	  }
	  var d3_time_formatPads = {
	    "-": "",
	    _: " ",
	    "0": "0"
	  }, d3_time_numberRe = /^\s*\d+/, d3_time_percentRe = /^%/;
	  function d3_time_formatPad(value, fill, width) {
	    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
	    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
	  }
	  function d3_time_formatRe(names) {
	    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
	  }
	  function d3_time_formatLookup(names) {
	    var map = new d3_Map(), i = -1, n = names.length;
	    while (++i < n) map.set(names[i].toLowerCase(), i);
	    return map;
	  }
	  function d3_time_parseWeekdayNumber(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 1));
	    return n ? (date.w = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseWeekNumberSunday(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i));
	    return n ? (date.U = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseWeekNumberMonday(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i));
	    return n ? (date.W = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseFullYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 4));
	    return n ? (date.y = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
	  }
	  function d3_time_parseZone(date, string, i) {
	    return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, i + 5) : -1;
	  }
	  function d3_time_expandYear(d) {
	    return d + (d > 68 ? 1900 : 2e3);
	  }
	  function d3_time_parseMonthNumber(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
	  }
	  function d3_time_parseDay(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.d = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseDayOfYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
	    return n ? (date.j = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseHour24(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.H = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseMinutes(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.M = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseSeconds(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.S = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseMilliseconds(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
	    return n ? (date.L = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_zone(d) {
	    var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = abs(z) / 60 | 0, zm = abs(z) % 60;
	    return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
	  }
	  function d3_time_parseLiteralPercent(date, string, i) {
	    d3_time_percentRe.lastIndex = 0;
	    var n = d3_time_percentRe.exec(string.slice(i, i + 1));
	    return n ? i + n[0].length : -1;
	  }
	  function d3_time_formatMulti(formats) {
	    var n = formats.length, i = -1;
	    while (++i < n) formats[i][0] = this(formats[i][0]);
	    return function(date) {
	      var i = 0, f = formats[i];
	      while (!f[1](date)) f = formats[++i];
	      return f[0](date);
	    };
	  }
	  d3.locale = function(locale) {
	    return {
	      numberFormat: d3_locale_numberFormat(locale),
	      timeFormat: d3_locale_timeFormat(locale)
	    };
	  };
	  var d3_locale_enUS = d3.locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [ 3 ],
	    currency: [ "$", "" ],
	    dateTime: "%a %b %e %X %Y",
	    date: "%m/%d/%Y",
	    time: "%H:%M:%S",
	    periods: [ "AM", "PM" ],
	    days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
	    shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
	    months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
	    shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
	  });
	  d3.format = d3_locale_enUS.numberFormat;
	  d3.geo = {};
	  function d3_adder() {}
	  d3_adder.prototype = {
	    s: 0,
	    t: 0,
	    add: function(y) {
	      d3_adderSum(y, this.t, d3_adderTemp);
	      d3_adderSum(d3_adderTemp.s, this.s, this);
	      if (this.s) this.t += d3_adderTemp.t; else this.s = d3_adderTemp.t;
	    },
	    reset: function() {
	      this.s = this.t = 0;
	    },
	    valueOf: function() {
	      return this.s;
	    }
	  };
	  var d3_adderTemp = new d3_adder();
	  function d3_adderSum(a, b, o) {
	    var x = o.s = a + b, bv = x - a, av = x - bv;
	    o.t = a - av + (b - bv);
	  }
	  d3.geo.stream = function(object, listener) {
	    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
	      d3_geo_streamObjectType[object.type](object, listener);
	    } else {
	      d3_geo_streamGeometry(object, listener);
	    }
	  };
	  function d3_geo_streamGeometry(geometry, listener) {
	    if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
	      d3_geo_streamGeometryType[geometry.type](geometry, listener);
	    }
	  }
	  var d3_geo_streamObjectType = {
	    Feature: function(feature, listener) {
	      d3_geo_streamGeometry(feature.geometry, listener);
	    },
	    FeatureCollection: function(object, listener) {
	      var features = object.features, i = -1, n = features.length;
	      while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
	    }
	  };
	  var d3_geo_streamGeometryType = {
	    Sphere: function(object, listener) {
	      listener.sphere();
	    },
	    Point: function(object, listener) {
	      object = object.coordinates;
	      listener.point(object[0], object[1], object[2]);
	    },
	    MultiPoint: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) object = coordinates[i], listener.point(object[0], object[1], object[2]);
	    },
	    LineString: function(object, listener) {
	      d3_geo_streamLine(object.coordinates, listener, 0);
	    },
	    MultiLineString: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
	    },
	    Polygon: function(object, listener) {
	      d3_geo_streamPolygon(object.coordinates, listener);
	    },
	    MultiPolygon: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
	    },
	    GeometryCollection: function(object, listener) {
	      var geometries = object.geometries, i = -1, n = geometries.length;
	      while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
	    }
	  };
	  function d3_geo_streamLine(coordinates, listener, closed) {
	    var i = -1, n = coordinates.length - closed, coordinate;
	    listener.lineStart();
	    while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
	    listener.lineEnd();
	  }
	  function d3_geo_streamPolygon(coordinates, listener) {
	    var i = -1, n = coordinates.length;
	    listener.polygonStart();
	    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
	    listener.polygonEnd();
	  }
	  d3.geo.area = function(object) {
	    d3_geo_areaSum = 0;
	    d3.geo.stream(object, d3_geo_area);
	    return d3_geo_areaSum;
	  };
	  var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
	  var d3_geo_area = {
	    sphere: function() {
	      d3_geo_areaSum += 4 * π;
	    },
	    point: d3_noop,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: function() {
	      d3_geo_areaRingSum.reset();
	      d3_geo_area.lineStart = d3_geo_areaRingStart;
	    },
	    polygonEnd: function() {
	      var area = 2 * d3_geo_areaRingSum;
	      d3_geo_areaSum += area < 0 ? 4 * π + area : area;
	      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
	    }
	  };
	  function d3_geo_areaRingStart() {
	    var λ00, φ00, λ0, cosφ0, sinφ0;
	    d3_geo_area.point = function(λ, φ) {
	      d3_geo_area.point = nextPoint;
	      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), sinφ0 = Math.sin(φ);
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      φ = φ * d3_radians / 2 + π / 4;
	      var dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(adλ), v = k * sdλ * Math.sin(adλ);
	      d3_geo_areaRingSum.add(Math.atan2(v, u));
	      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
	    }
	    d3_geo_area.lineEnd = function() {
	      nextPoint(λ00, φ00);
	    };
	  }
	  function d3_geo_cartesian(spherical) {
	    var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
	    return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
	  }
	  function d3_geo_cartesianDot(a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	  }
	  function d3_geo_cartesianCross(a, b) {
	    return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
	  }
	  function d3_geo_cartesianAdd(a, b) {
	    a[0] += b[0];
	    a[1] += b[1];
	    a[2] += b[2];
	  }
	  function d3_geo_cartesianScale(vector, k) {
	    return [ vector[0] * k, vector[1] * k, vector[2] * k ];
	  }
	  function d3_geo_cartesianNormalize(d) {
	    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
	    d[0] /= l;
	    d[1] /= l;
	    d[2] /= l;
	  }
	  function d3_geo_spherical(cartesian) {
	    return [ Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2]) ];
	  }
	  function d3_geo_sphericalEqual(a, b) {
	    return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
	  }
	  d3.geo.bounds = function() {
	    var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
	    var bound = {
	      point: point,
	      lineStart: lineStart,
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        bound.point = ringPoint;
	        bound.lineStart = ringStart;
	        bound.lineEnd = ringEnd;
	        dλSum = 0;
	        d3_geo_area.polygonStart();
	      },
	      polygonEnd: function() {
	        d3_geo_area.polygonEnd();
	        bound.point = point;
	        bound.lineStart = lineStart;
	        bound.lineEnd = lineEnd;
	        if (d3_geo_areaRingSum < 0) λ0 = -(λ1 = 180), φ0 = -(φ1 = 90); else if (dλSum > ε) φ1 = 90; else if (dλSum < -ε) φ0 = -90;
	        range[0] = λ0, range[1] = λ1;
	      }
	    };
	    function point(λ, φ) {
	      ranges.push(range = [ λ0 = λ, λ1 = λ ]);
	      if (φ < φ0) φ0 = φ;
	      if (φ > φ1) φ1 = φ;
	    }
	    function linePoint(λ, φ) {
	      var p = d3_geo_cartesian([ λ * d3_radians, φ * d3_radians ]);
	      if (p0) {
	        var normal = d3_geo_cartesianCross(p0, p), equatorial = [ normal[1], -normal[0], 0 ], inflection = d3_geo_cartesianCross(equatorial, normal);
	        d3_geo_cartesianNormalize(inflection);
	        inflection = d3_geo_spherical(inflection);
	        var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = abs(dλ) > 180;
	        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
	          var φi = inflection[1] * d3_degrees;
	          if (φi > φ1) φ1 = φi;
	        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
	          var φi = -inflection[1] * d3_degrees;
	          if (φi < φ0) φ0 = φi;
	        } else {
	          if (φ < φ0) φ0 = φ;
	          if (φ > φ1) φ1 = φ;
	        }
	        if (antimeridian) {
	          if (λ < λ_) {
	            if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
	          } else {
	            if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
	          }
	        } else {
	          if (λ1 >= λ0) {
	            if (λ < λ0) λ0 = λ;
	            if (λ > λ1) λ1 = λ;
	          } else {
	            if (λ > λ_) {
	              if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
	            } else {
	              if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
	            }
	          }
	        }
	      } else {
	        point(λ, φ);
	      }
	      p0 = p, λ_ = λ;
	    }
	    function lineStart() {
	      bound.point = linePoint;
	    }
	    function lineEnd() {
	      range[0] = λ0, range[1] = λ1;
	      bound.point = point;
	      p0 = null;
	    }
	    function ringPoint(λ, φ) {
	      if (p0) {
	        var dλ = λ - λ_;
	        dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
	      } else λ__ = λ, φ__ = φ;
	      d3_geo_area.point(λ, φ);
	      linePoint(λ, φ);
	    }
	    function ringStart() {
	      d3_geo_area.lineStart();
	    }
	    function ringEnd() {
	      ringPoint(λ__, φ__);
	      d3_geo_area.lineEnd();
	      if (abs(dλSum) > ε) λ0 = -(λ1 = 180);
	      range[0] = λ0, range[1] = λ1;
	      p0 = null;
	    }
	    function angle(λ0, λ1) {
	      return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
	    }
	    function compareRanges(a, b) {
	      return a[0] - b[0];
	    }
	    function withinRange(x, range) {
	      return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
	    }
	    return function(feature) {
	      φ1 = λ1 = -(λ0 = φ0 = Infinity);
	      ranges = [];
	      d3.geo.stream(feature, bound);
	      var n = ranges.length;
	      if (n) {
	        ranges.sort(compareRanges);
	        for (var i = 1, a = ranges[0], b, merged = [ a ]; i < n; ++i) {
	          b = ranges[i];
	          if (withinRange(b[0], a) || withinRange(b[1], a)) {
	            if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
	            if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
	          } else {
	            merged.push(a = b);
	          }
	        }
	        var best = -Infinity, dλ;
	        for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
	          b = merged[i];
	          if ((dλ = angle(a[1], b[0])) > best) best = dλ, λ0 = b[0], λ1 = a[1];
	        }
	      }
	      ranges = range = null;
	      return λ0 === Infinity || φ0 === Infinity ? [ [ NaN, NaN ], [ NaN, NaN ] ] : [ [ λ0, φ0 ], [ λ1, φ1 ] ];
	    };
	  }();
	  d3.geo.centroid = function(object) {
	    d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
	    d3.geo.stream(object, d3_geo_centroid);
	    var x = d3_geo_centroidX2, y = d3_geo_centroidY2, z = d3_geo_centroidZ2, m = x * x + y * y + z * z;
	    if (m < ε2) {
	      x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
	      if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
	      m = x * x + y * y + z * z;
	      if (m < ε2) return [ NaN, NaN ];
	    }
	    return [ Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees ];
	  };
	  var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
	  var d3_geo_centroid = {
	    sphere: d3_noop,
	    point: d3_geo_centroidPoint,
	    lineStart: d3_geo_centroidLineStart,
	    lineEnd: d3_geo_centroidLineEnd,
	    polygonStart: function() {
	      d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
	    }
	  };
	  function d3_geo_centroidPoint(λ, φ) {
	    λ *= d3_radians;
	    var cosφ = Math.cos(φ *= d3_radians);
	    d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
	  }
	  function d3_geo_centroidPointXYZ(x, y, z) {
	    ++d3_geo_centroidW0;
	    d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
	    d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
	    d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
	  }
	  function d3_geo_centroidLineStart() {
	    var x0, y0, z0;
	    d3_geo_centroid.point = function(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians);
	      x0 = cosφ * Math.cos(λ);
	      y0 = cosφ * Math.sin(λ);
	      z0 = Math.sin(φ);
	      d3_geo_centroid.point = nextPoint;
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
	      d3_geo_centroidW1 += w;
	      d3_geo_centroidX1 += w * (x0 + (x0 = x));
	      d3_geo_centroidY1 += w * (y0 + (y0 = y));
	      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    }
	  }
	  function d3_geo_centroidLineEnd() {
	    d3_geo_centroid.point = d3_geo_centroidPoint;
	  }
	  function d3_geo_centroidRingStart() {
	    var λ00, φ00, x0, y0, z0;
	    d3_geo_centroid.point = function(λ, φ) {
	      λ00 = λ, φ00 = φ;
	      d3_geo_centroid.point = nextPoint;
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians);
	      x0 = cosφ * Math.cos(λ);
	      y0 = cosφ * Math.sin(λ);
	      z0 = Math.sin(φ);
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    };
	    d3_geo_centroid.lineEnd = function() {
	      nextPoint(λ00, φ00);
	      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
	      d3_geo_centroid.point = d3_geo_centroidPoint;
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = Math.sqrt(cx * cx + cy * cy + cz * cz), u = x0 * x + y0 * y + z0 * z, v = m && -d3_acos(u) / m, w = Math.atan2(m, u);
	      d3_geo_centroidX2 += v * cx;
	      d3_geo_centroidY2 += v * cy;
	      d3_geo_centroidZ2 += v * cz;
	      d3_geo_centroidW1 += w;
	      d3_geo_centroidX1 += w * (x0 + (x0 = x));
	      d3_geo_centroidY1 += w * (y0 + (y0 = y));
	      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    }
	  }
	  function d3_geo_compose(a, b) {
	    function compose(x, y) {
	      return x = a(x, y), b(x[0], x[1]);
	    }
	    if (a.invert && b.invert) compose.invert = function(x, y) {
	      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
	    };
	    return compose;
	  }
	  function d3_true() {
	    return true;
	  }
	  function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
	    var subject = [], clip = [];
	    segments.forEach(function(segment) {
	      if ((n = segment.length - 1) <= 0) return;
	      var n, p0 = segment[0], p1 = segment[n];
	      if (d3_geo_sphericalEqual(p0, p1)) {
	        listener.lineStart();
	        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
	        listener.lineEnd();
	        return;
	      }
	      var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true), b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
	      a.o = b;
	      subject.push(a);
	      clip.push(b);
	      a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
	      b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
	      a.o = b;
	      subject.push(a);
	      clip.push(b);
	    });
	    clip.sort(compare);
	    d3_geo_clipPolygonLinkCircular(subject);
	    d3_geo_clipPolygonLinkCircular(clip);
	    if (!subject.length) return;
	    for (var i = 0, entry = clipStartInside, n = clip.length; i < n; ++i) {
	      clip[i].e = entry = !entry;
	    }
	    var start = subject[0], points, point;
	    while (1) {
	      var current = start, isSubject = true;
	      while (current.v) if ((current = current.n) === start) return;
	      points = current.z;
	      listener.lineStart();
	      do {
	        current.v = current.o.v = true;
	        if (current.e) {
	          if (isSubject) {
	            for (var i = 0, n = points.length; i < n; ++i) listener.point((point = points[i])[0], point[1]);
	          } else {
	            interpolate(current.x, current.n.x, 1, listener);
	          }
	          current = current.n;
	        } else {
	          if (isSubject) {
	            points = current.p.z;
	            for (var i = points.length - 1; i >= 0; --i) listener.point((point = points[i])[0], point[1]);
	          } else {
	            interpolate(current.x, current.p.x, -1, listener);
	          }
	          current = current.p;
	        }
	        current = current.o;
	        points = current.z;
	        isSubject = !isSubject;
	      } while (!current.v);
	      listener.lineEnd();
	    }
	  }
	  function d3_geo_clipPolygonLinkCircular(array) {
	    if (!(n = array.length)) return;
	    var n, i = 0, a = array[0], b;
	    while (++i < n) {
	      a.n = b = array[i];
	      b.p = a;
	      a = b;
	    }
	    a.n = b = array[0];
	    b.p = a;
	  }
	  function d3_geo_clipPolygonIntersection(point, points, other, entry) {
	    this.x = point;
	    this.z = points;
	    this.o = other;
	    this.e = entry;
	    this.v = false;
	    this.n = this.p = null;
	  }
	  function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
	    return function(rotate, listener) {
	      var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
	      var clip = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          clip.point = pointRing;
	          clip.lineStart = ringStart;
	          clip.lineEnd = ringEnd;
	          segments = [];
	          polygon = [];
	        },
	        polygonEnd: function() {
	          clip.point = point;
	          clip.lineStart = lineStart;
	          clip.lineEnd = lineEnd;
	          segments = d3.merge(segments);
	          var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
	          if (segments.length) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
	          } else if (clipStartInside) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            listener.lineStart();
	            interpolate(null, null, 1, listener);
	            listener.lineEnd();
	          }
	          if (polygonStarted) listener.polygonEnd(), polygonStarted = false;
	          segments = polygon = null;
	        },
	        sphere: function() {
	          listener.polygonStart();
	          listener.lineStart();
	          interpolate(null, null, 1, listener);
	          listener.lineEnd();
	          listener.polygonEnd();
	        }
	      };
	      function point(λ, φ) {
	        var point = rotate(λ, φ);
	        if (pointVisible(λ = point[0], φ = point[1])) listener.point(λ, φ);
	      }
	      function pointLine(λ, φ) {
	        var point = rotate(λ, φ);
	        line.point(point[0], point[1]);
	      }
	      function lineStart() {
	        clip.point = pointLine;
	        line.lineStart();
	      }
	      function lineEnd() {
	        clip.point = point;
	        line.lineEnd();
	      }
	      var segments;
	      var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;
	      function pointRing(λ, φ) {
	        ring.push([ λ, φ ]);
	        var point = rotate(λ, φ);
	        ringListener.point(point[0], point[1]);
	      }
	      function ringStart() {
	        ringListener.lineStart();
	        ring = [];
	      }
	      function ringEnd() {
	        pointRing(ring[0][0], ring[0][1]);
	        ringListener.lineEnd();
	        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
	        ring.pop();
	        polygon.push(ring);
	        ring = null;
	        if (!n) return;
	        if (clean & 1) {
	          segment = ringSegments[0];
	          var n = segment.length - 1, i = -1, point;
	          if (n > 0) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            listener.lineStart();
	            while (++i < n) listener.point((point = segment[i])[0], point[1]);
	            listener.lineEnd();
	          }
	          return;
	        }
	        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
	        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
	      }
	      return clip;
	    };
	  }
	  function d3_geo_clipSegmentLength1(segment) {
	    return segment.length > 1;
	  }
	  function d3_geo_clipBufferListener() {
	    var lines = [], line;
	    return {
	      lineStart: function() {
	        lines.push(line = []);
	      },
	      point: function(λ, φ) {
	        line.push([ λ, φ ]);
	      },
	      lineEnd: d3_noop,
	      buffer: function() {
	        var buffer = lines;
	        lines = [];
	        line = null;
	        return buffer;
	      },
	      rejoin: function() {
	        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
	      }
	    };
	  }
	  function d3_geo_clipSort(a, b) {
	    return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
	  }
	  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [ -π, -π / 2 ]);
	  function d3_geo_clipAntimeridianLine(listener) {
	    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
	    return {
	      lineStart: function() {
	        listener.lineStart();
	        clean = 1;
	      },
	      point: function(λ1, φ1) {
	        var sλ1 = λ1 > 0 ? π : -π, dλ = abs(λ1 - λ0);
	        if (abs(dλ - π) < ε) {
	          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
	          listener.point(sλ0, φ0);
	          listener.lineEnd();
	          listener.lineStart();
	          listener.point(sλ1, φ0);
	          listener.point(λ1, φ0);
	          clean = 0;
	        } else if (sλ0 !== sλ1 && dλ >= π) {
	          if (abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
	          if (abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
	          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
	          listener.point(sλ0, φ0);
	          listener.lineEnd();
	          listener.lineStart();
	          listener.point(sλ1, φ0);
	          clean = 0;
	        }
	        listener.point(λ0 = λ1, φ0 = φ1);
	        sλ0 = sλ1;
	      },
	      lineEnd: function() {
	        listener.lineEnd();
	        λ0 = φ0 = NaN;
	      },
	      clean: function() {
	        return 2 - clean;
	      }
	    };
	  }
	  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
	    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
	    return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
	  }
	  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
	    var φ;
	    if (from == null) {
	      φ = direction * halfπ;
	      listener.point(-π, φ);
	      listener.point(0, φ);
	      listener.point(π, φ);
	      listener.point(π, 0);
	      listener.point(π, -φ);
	      listener.point(0, -φ);
	      listener.point(-π, -φ);
	      listener.point(-π, 0);
	      listener.point(-π, φ);
	    } else if (abs(from[0] - to[0]) > ε) {
	      var s = from[0] < to[0] ? π : -π;
	      φ = direction * s / 2;
	      listener.point(-s, φ);
	      listener.point(0, φ);
	      listener.point(s, φ);
	    } else {
	      listener.point(to[0], to[1]);
	    }
	  }
	  function d3_geo_pointInPolygon(point, polygon) {
	    var meridian = point[0], parallel = point[1], meridianNormal = [ Math.sin(meridian), -Math.cos(meridian), 0 ], polarAngle = 0, winding = 0;
	    d3_geo_areaRingSum.reset();
	    for (var i = 0, n = polygon.length; i < n; ++i) {
	      var ring = polygon[i], m = ring.length;
	      if (!m) continue;
	      var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;
	      while (true) {
	        if (j === m) j = 0;
	        point = ring[j];
	        var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, antimeridian = adλ > π, k = sinφ0 * sinφ;
	        d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
	        polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
	        if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
	          var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
	          d3_geo_cartesianNormalize(arc);
	          var intersection = d3_geo_cartesianCross(meridianNormal, arc);
	          d3_geo_cartesianNormalize(intersection);
	          var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
	          if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
	            winding += antimeridian ^ dλ >= 0 ? 1 : -1;
	          }
	        }
	        if (!j++) break;
	        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
	      }
	    }
	    return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < -ε) ^ winding & 1;
	  }
	  function d3_geo_clipCircle(radius) {
	    var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
	    return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [ 0, -radius ] : [ -π, radius - π ]);
	    function visible(λ, φ) {
	      return Math.cos(λ) * Math.cos(φ) > cr;
	    }
	    function clipLine(listener) {
	      var point0, c0, v0, v00, clean;
	      return {
	        lineStart: function() {
	          v00 = v0 = false;
	          clean = 1;
	        },
	        point: function(λ, φ) {
	          var point1 = [ λ, φ ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
	          if (!point0 && (v00 = v0 = v)) listener.lineStart();
	          if (v !== v0) {
	            point2 = intersect(point0, point1);
	            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
	              point1[0] += ε;
	              point1[1] += ε;
	              v = visible(point1[0], point1[1]);
	            }
	          }
	          if (v !== v0) {
	            clean = 0;
	            if (v) {
	              listener.lineStart();
	              point2 = intersect(point1, point0);
	              listener.point(point2[0], point2[1]);
	            } else {
	              point2 = intersect(point0, point1);
	              listener.point(point2[0], point2[1]);
	              listener.lineEnd();
	            }
	            point0 = point2;
	          } else if (notHemisphere && point0 && smallRadius ^ v) {
	            var t;
	            if (!(c & c0) && (t = intersect(point1, point0, true))) {
	              clean = 0;
	              if (smallRadius) {
	                listener.lineStart();
	                listener.point(t[0][0], t[0][1]);
	                listener.point(t[1][0], t[1][1]);
	                listener.lineEnd();
	              } else {
	                listener.point(t[1][0], t[1][1]);
	                listener.lineEnd();
	                listener.lineStart();
	                listener.point(t[0][0], t[0][1]);
	              }
	            }
	          }
	          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
	            listener.point(point1[0], point1[1]);
	          }
	          point0 = point1, v0 = v, c0 = c;
	        },
	        lineEnd: function() {
	          if (v0) listener.lineEnd();
	          point0 = null;
	        },
	        clean: function() {
	          return clean | (v00 && v0) << 1;
	        }
	      };
	    }
	    function intersect(a, b, two) {
	      var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
	      var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
	      if (!determinant) return !two && a;
	      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
	      d3_geo_cartesianAdd(A, B);
	      var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
	      if (t2 < 0) return;
	      var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
	      d3_geo_cartesianAdd(q, A);
	      q = d3_geo_spherical(q);
	      if (!two) return q;
	      var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;
	      if (λ1 < λ0) z = λ0, λ0 = λ1, λ1 = z;
	      var δλ = λ1 - λ0, polar = abs(δλ - π) < ε, meridian = polar || δλ < ε;
	      if (!polar && φ1 < φ0) z = φ0, φ0 = φ1, φ1 = z;
	      if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
	        var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
	        d3_geo_cartesianAdd(q1, A);
	        return [ q, d3_geo_spherical(q1) ];
	      }
	    }
	    function code(λ, φ) {
	      var r = smallRadius ? radius : π - radius, code = 0;
	      if (λ < -r) code |= 1; else if (λ > r) code |= 2;
	      if (φ < -r) code |= 4; else if (φ > r) code |= 8;
	      return code;
	    }
	  }
	  function d3_geom_clipLine(x0, y0, x1, y1) {
	    return function(line) {
	      var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
	      r = x0 - ax;
	      if (!dx && r > 0) return;
	      r /= dx;
	      if (dx < 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      } else if (dx > 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      }
	      r = x1 - ax;
	      if (!dx && r < 0) return;
	      r /= dx;
	      if (dx < 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      } else if (dx > 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      }
	      r = y0 - ay;
	      if (!dy && r > 0) return;
	      r /= dy;
	      if (dy < 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      } else if (dy > 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      }
	      r = y1 - ay;
	      if (!dy && r < 0) return;
	      r /= dy;
	      if (dy < 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      } else if (dy > 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      }
	      if (t0 > 0) line.a = {
	        x: ax + t0 * dx,
	        y: ay + t0 * dy
	      };
	      if (t1 < 1) line.b = {
	        x: ax + t1 * dx,
	        y: ay + t1 * dy
	      };
	      return line;
	    };
	  }
	  var d3_geo_clipExtentMAX = 1e9;
	  d3.geo.clipExtent = function() {
	    var x0, y0, x1, y1, stream, clip, clipExtent = {
	      stream: function(output) {
	        if (stream) stream.valid = false;
	        stream = clip(output);
	        stream.valid = true;
	        return stream;
	      },
	      extent: function(_) {
	        if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
	        clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
	        if (stream) stream.valid = false, stream = null;
	        return clipExtent;
	      }
	    };
	    return clipExtent.extent([ [ 0, 0 ], [ 960, 500 ] ]);
	  };
	  function d3_geo_clipExtent(x0, y0, x1, y1) {
	    return function(listener) {
	      var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;
	      var clip = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          listener = bufferListener;
	          segments = [];
	          polygon = [];
	          clean = true;
	        },
	        polygonEnd: function() {
	          listener = listener_;
	          segments = d3.merge(segments);
	          var clipStartInside = insidePolygon([ x0, y1 ]), inside = clean && clipStartInside, visible = segments.length;
	          if (inside || visible) {
	            listener.polygonStart();
	            if (inside) {
	              listener.lineStart();
	              interpolate(null, null, 1, listener);
	              listener.lineEnd();
	            }
	            if (visible) {
	              d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
	            }
	            listener.polygonEnd();
	          }
	          segments = polygon = ring = null;
	        }
	      };
	      function insidePolygon(p) {
	        var wn = 0, n = polygon.length, y = p[1];
	        for (var i = 0; i < n; ++i) {
	          for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
	            b = v[j];
	            if (a[1] <= y) {
	              if (b[1] > y && d3_cross2d(a, b, p) > 0) ++wn;
	            } else {
	              if (b[1] <= y && d3_cross2d(a, b, p) < 0) --wn;
	            }
	            a = b;
	          }
	        }
	        return wn !== 0;
	      }
	      function interpolate(from, to, direction, listener) {
	        var a = 0, a1 = 0;
	        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
	          do {
	            listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
	          } while ((a = (a + direction + 4) % 4) !== a1);
	        } else {
	          listener.point(to[0], to[1]);
	        }
	      }
	      function pointVisible(x, y) {
	        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
	      }
	      function point(x, y) {
	        if (pointVisible(x, y)) listener.point(x, y);
	      }
	      var x__, y__, v__, x_, y_, v_, first, clean;
	      function lineStart() {
	        clip.point = linePoint;
	        if (polygon) polygon.push(ring = []);
	        first = true;
	        v_ = false;
	        x_ = y_ = NaN;
	      }
	      function lineEnd() {
	        if (segments) {
	          linePoint(x__, y__);
	          if (v__ && v_) bufferListener.rejoin();
	          segments.push(bufferListener.buffer());
	        }
	        clip.point = point;
	        if (v_) listener.lineEnd();
	      }
	      function linePoint(x, y) {
	        x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
	        y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
	        var v = pointVisible(x, y);
	        if (polygon) ring.push([ x, y ]);
	        if (first) {
	          x__ = x, y__ = y, v__ = v;
	          first = false;
	          if (v) {
	            listener.lineStart();
	            listener.point(x, y);
	          }
	        } else {
	          if (v && v_) listener.point(x, y); else {
	            var l = {
	              a: {
	                x: x_,
	                y: y_
	              },
	              b: {
	                x: x,
	                y: y
	              }
	            };
	            if (clipLine(l)) {
	              if (!v_) {
	                listener.lineStart();
	                listener.point(l.a.x, l.a.y);
	              }
	              listener.point(l.b.x, l.b.y);
	              if (!v) listener.lineEnd();
	              clean = false;
	            } else if (v) {
	              listener.lineStart();
	              listener.point(x, y);
	              clean = false;
	            }
	          }
	        }
	        x_ = x, y_ = y, v_ = v;
	      }
	      return clip;
	    };
	    function corner(p, direction) {
	      return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
	    }
	    function compare(a, b) {
	      return comparePoints(a.x, b.x);
	    }
	    function comparePoints(a, b) {
	      var ca = corner(a, 1), cb = corner(b, 1);
	      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
	    }
	  }
	  function d3_geo_conic(projectAt) {
	    var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);
	    p.parallels = function(_) {
	      if (!arguments.length) return [ φ0 / π * 180, φ1 / π * 180 ];
	      return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
	    };
	    return p;
	  }
	  function d3_geo_conicEqualArea(φ0, φ1) {
	    var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
	    function forward(λ, φ) {
	      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
	      return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = ρ0 - y;
	      return [ Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
	    };
	    return forward;
	  }
	  (d3.geo.conicEqualArea = function() {
	    return d3_geo_conic(d3_geo_conicEqualArea);
	  }).raw = d3_geo_conicEqualArea;
	  d3.geo.albers = function() {
	    return d3.geo.conicEqualArea().rotate([ 96, 0 ]).center([ -.6, 38.7 ]).parallels([ 29.5, 45.5 ]).scale(1070);
	  };
	  d3.geo.albersUsa = function() {
	    var lower48 = d3.geo.albers();
	    var alaska = d3.geo.conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]);
	    var hawaii = d3.geo.conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]);
	    var point, pointStream = {
	      point: function(x, y) {
	        point = [ x, y ];
	      }
	    }, lower48Point, alaskaPoint, hawaiiPoint;
	    function albersUsa(coordinates) {
	      var x = coordinates[0], y = coordinates[1];
	      point = null;
	      (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
	      return point;
	    }
	    albersUsa.invert = function(coordinates) {
	      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
	      return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
	    };
	    albersUsa.stream = function(stream) {
	      var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
	      return {
	        point: function(x, y) {
	          lower48Stream.point(x, y);
	          alaskaStream.point(x, y);
	          hawaiiStream.point(x, y);
	        },
	        sphere: function() {
	          lower48Stream.sphere();
	          alaskaStream.sphere();
	          hawaiiStream.sphere();
	        },
	        lineStart: function() {
	          lower48Stream.lineStart();
	          alaskaStream.lineStart();
	          hawaiiStream.lineStart();
	        },
	        lineEnd: function() {
	          lower48Stream.lineEnd();
	          alaskaStream.lineEnd();
	          hawaiiStream.lineEnd();
	        },
	        polygonStart: function() {
	          lower48Stream.polygonStart();
	          alaskaStream.polygonStart();
	          hawaiiStream.polygonStart();
	        },
	        polygonEnd: function() {
	          lower48Stream.polygonEnd();
	          alaskaStream.polygonEnd();
	          hawaiiStream.polygonEnd();
	        }
	      };
	    };
	    albersUsa.precision = function(_) {
	      if (!arguments.length) return lower48.precision();
	      lower48.precision(_);
	      alaska.precision(_);
	      hawaii.precision(_);
	      return albersUsa;
	    };
	    albersUsa.scale = function(_) {
	      if (!arguments.length) return lower48.scale();
	      lower48.scale(_);
	      alaska.scale(_ * .35);
	      hawaii.scale(_);
	      return albersUsa.translate(lower48.translate());
	    };
	    albersUsa.translate = function(_) {
	      if (!arguments.length) return lower48.translate();
	      var k = lower48.scale(), x = +_[0], y = +_[1];
	      lower48Point = lower48.translate(_).clipExtent([ [ x - .455 * k, y - .238 * k ], [ x + .455 * k, y + .238 * k ] ]).stream(pointStream).point;
	      alaskaPoint = alaska.translate([ x - .307 * k, y + .201 * k ]).clipExtent([ [ x - .425 * k + ε, y + .12 * k + ε ], [ x - .214 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
	      hawaiiPoint = hawaii.translate([ x - .205 * k, y + .212 * k ]).clipExtent([ [ x - .214 * k + ε, y + .166 * k + ε ], [ x - .115 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
	      return albersUsa;
	    };
	    return albersUsa.scale(1070);
	  };
	  var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
	    point: d3_noop,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: function() {
	      d3_geo_pathAreaPolygon = 0;
	      d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
	      d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
	    }
	  };
	  function d3_geo_pathAreaRingStart() {
	    var x00, y00, x0, y0;
	    d3_geo_pathArea.point = function(x, y) {
	      d3_geo_pathArea.point = nextPoint;
	      x00 = x0 = x, y00 = y0 = y;
	    };
	    function nextPoint(x, y) {
	      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
	      x0 = x, y0 = y;
	    }
	    d3_geo_pathArea.lineEnd = function() {
	      nextPoint(x00, y00);
	    };
	  }
	  var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
	  var d3_geo_pathBounds = {
	    point: d3_geo_pathBoundsPoint,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: d3_noop,
	    polygonEnd: d3_noop
	  };
	  function d3_geo_pathBoundsPoint(x, y) {
	    if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
	    if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
	    if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
	    if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
	  }
	  function d3_geo_pathBuffer() {
	    var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
	    var stream = {
	      point: point,
	      lineStart: function() {
	        stream.point = pointLineStart;
	      },
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        stream.lineEnd = lineEndPolygon;
	      },
	      polygonEnd: function() {
	        stream.lineEnd = lineEnd;
	        stream.point = point;
	      },
	      pointRadius: function(_) {
	        pointCircle = d3_geo_pathBufferCircle(_);
	        return stream;
	      },
	      result: function() {
	        if (buffer.length) {
	          var result = buffer.join("");
	          buffer = [];
	          return result;
	        }
	      }
	    };
	    function point(x, y) {
	      buffer.push("M", x, ",", y, pointCircle);
	    }
	    function pointLineStart(x, y) {
	      buffer.push("M", x, ",", y);
	      stream.point = pointLine;
	    }
	    function pointLine(x, y) {
	      buffer.push("L", x, ",", y);
	    }
	    function lineEnd() {
	      stream.point = point;
	    }
	    function lineEndPolygon() {
	      buffer.push("Z");
	    }
	    return stream;
	  }
	  function d3_geo_pathBufferCircle(radius) {
	    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
	  }
	  var d3_geo_pathCentroid = {
	    point: d3_geo_pathCentroidPoint,
	    lineStart: d3_geo_pathCentroidLineStart,
	    lineEnd: d3_geo_pathCentroidLineEnd,
	    polygonStart: function() {
	      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
	      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
	      d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
	    }
	  };
	  function d3_geo_pathCentroidPoint(x, y) {
	    d3_geo_centroidX0 += x;
	    d3_geo_centroidY0 += y;
	    ++d3_geo_centroidZ0;
	  }
	  function d3_geo_pathCentroidLineStart() {
	    var x0, y0;
	    d3_geo_pathCentroid.point = function(x, y) {
	      d3_geo_pathCentroid.point = nextPoint;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    };
	    function nextPoint(x, y) {
	      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
	      d3_geo_centroidX1 += z * (x0 + x) / 2;
	      d3_geo_centroidY1 += z * (y0 + y) / 2;
	      d3_geo_centroidZ1 += z;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    }
	  }
	  function d3_geo_pathCentroidLineEnd() {
	    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
	  }
	  function d3_geo_pathCentroidRingStart() {
	    var x00, y00, x0, y0;
	    d3_geo_pathCentroid.point = function(x, y) {
	      d3_geo_pathCentroid.point = nextPoint;
	      d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
	    };
	    function nextPoint(x, y) {
	      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
	      d3_geo_centroidX1 += z * (x0 + x) / 2;
	      d3_geo_centroidY1 += z * (y0 + y) / 2;
	      d3_geo_centroidZ1 += z;
	      z = y0 * x - x0 * y;
	      d3_geo_centroidX2 += z * (x0 + x);
	      d3_geo_centroidY2 += z * (y0 + y);
	      d3_geo_centroidZ2 += z * 3;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    }
	    d3_geo_pathCentroid.lineEnd = function() {
	      nextPoint(x00, y00);
	    };
	  }
	  function d3_geo_pathContext(context) {
	    var pointRadius = 4.5;
	    var stream = {
	      point: point,
	      lineStart: function() {
	        stream.point = pointLineStart;
	      },
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        stream.lineEnd = lineEndPolygon;
	      },
	      polygonEnd: function() {
	        stream.lineEnd = lineEnd;
	        stream.point = point;
	      },
	      pointRadius: function(_) {
	        pointRadius = _;
	        return stream;
	      },
	      result: d3_noop
	    };
	    function point(x, y) {
	      context.moveTo(x + pointRadius, y);
	      context.arc(x, y, pointRadius, 0, τ);
	    }
	    function pointLineStart(x, y) {
	      context.moveTo(x, y);
	      stream.point = pointLine;
	    }
	    function pointLine(x, y) {
	      context.lineTo(x, y);
	    }
	    function lineEnd() {
	      stream.point = point;
	    }
	    function lineEndPolygon() {
	      context.closePath();
	    }
	    return stream;
	  }
	  function d3_geo_resample(project) {
	    var δ2 = .5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
	    function resample(stream) {
	      return (maxDepth ? resampleRecursive : resampleNone)(stream);
	    }
	    function resampleNone(stream) {
	      return d3_geo_transformPoint(stream, function(x, y) {
	        x = project(x, y);
	        stream.point(x[0], x[1]);
	      });
	    }
	    function resampleRecursive(stream) {
	      var λ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
	      var resample = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          stream.polygonStart();
	          resample.lineStart = ringStart;
	        },
	        polygonEnd: function() {
	          stream.polygonEnd();
	          resample.lineStart = lineStart;
	        }
	      };
	      function point(x, y) {
	        x = project(x, y);
	        stream.point(x[0], x[1]);
	      }
	      function lineStart() {
	        x0 = NaN;
	        resample.point = linePoint;
	        stream.lineStart();
	      }
	      function linePoint(λ, φ) {
	        var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
	        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
	        stream.point(x0, y0);
	      }
	      function lineEnd() {
	        resample.point = point;
	        stream.lineEnd();
	      }
	      function ringStart() {
	        lineStart();
	        resample.point = ringPoint;
	        resample.lineEnd = ringEnd;
	      }
	      function ringPoint(λ, φ) {
	        linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
	        resample.point = linePoint;
	      }
	      function ringEnd() {
	        resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
	        resample.lineEnd = lineEnd;
	        lineEnd();
	      }
	      return resample;
	    }
	    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
	      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
	      if (d2 > 4 * δ2 && depth--) {
	        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
	        if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
	          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
	          stream.point(x2, y2);
	          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
	        }
	      }
	    }
	    resample.precision = function(_) {
	      if (!arguments.length) return Math.sqrt(δ2);
	      maxDepth = (δ2 = _ * _) > 0 && 16;
	      return resample;
	    };
	    return resample;
	  }
	  d3.geo.path = function() {
	    var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
	    function path(object) {
	      if (object) {
	        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
	        if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
	        d3.geo.stream(object, cacheStream);
	      }
	      return contextStream.result();
	    }
	    path.area = function(object) {
	      d3_geo_pathAreaSum = 0;
	      d3.geo.stream(object, projectStream(d3_geo_pathArea));
	      return d3_geo_pathAreaSum;
	    };
	    path.centroid = function(object) {
	      d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
	      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
	      return d3_geo_centroidZ2 ? [ d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2 ] : d3_geo_centroidZ1 ? [ d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1 ] : d3_geo_centroidZ0 ? [ d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0 ] : [ NaN, NaN ];
	    };
	    path.bounds = function(object) {
	      d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
	      d3.geo.stream(object, projectStream(d3_geo_pathBounds));
	      return [ [ d3_geo_pathBoundsX0, d3_geo_pathBoundsY0 ], [ d3_geo_pathBoundsX1, d3_geo_pathBoundsY1 ] ];
	    };
	    path.projection = function(_) {
	      if (!arguments.length) return projection;
	      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
	      return reset();
	    };
	    path.context = function(_) {
	      if (!arguments.length) return context;
	      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
	      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
	      return reset();
	    };
	    path.pointRadius = function(_) {
	      if (!arguments.length) return pointRadius;
	      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
	      return path;
	    };
	    function reset() {
	      cacheStream = null;
	      return path;
	    }
	    return path.projection(d3.geo.albersUsa()).context(null);
	  };
	  function d3_geo_pathProjectStream(project) {
	    var resample = d3_geo_resample(function(x, y) {
	      return project([ x * d3_degrees, y * d3_degrees ]);
	    });
	    return function(stream) {
	      return d3_geo_projectionRadians(resample(stream));
	    };
	  }
	  d3.geo.transform = function(methods) {
	    return {
	      stream: function(stream) {
	        var transform = new d3_geo_transform(stream);
	        for (var k in methods) transform[k] = methods[k];
	        return transform;
	      }
	    };
	  };
	  function d3_geo_transform(stream) {
	    this.stream = stream;
	  }
	  d3_geo_transform.prototype = {
	    point: function(x, y) {
	      this.stream.point(x, y);
	    },
	    sphere: function() {
	      this.stream.sphere();
	    },
	    lineStart: function() {
	      this.stream.lineStart();
	    },
	    lineEnd: function() {
	      this.stream.lineEnd();
	    },
	    polygonStart: function() {
	      this.stream.polygonStart();
	    },
	    polygonEnd: function() {
	      this.stream.polygonEnd();
	    }
	  };
	  function d3_geo_transformPoint(stream, point) {
	    return {
	      point: point,
	      sphere: function() {
	        stream.sphere();
	      },
	      lineStart: function() {
	        stream.lineStart();
	      },
	      lineEnd: function() {
	        stream.lineEnd();
	      },
	      polygonStart: function() {
	        stream.polygonStart();
	      },
	      polygonEnd: function() {
	        stream.polygonEnd();
	      }
	    };
	  }
	  d3.geo.projection = d3_geo_projection;
	  d3.geo.projectionMutator = d3_geo_projectionMutator;
	  function d3_geo_projection(project) {
	    return d3_geo_projectionMutator(function() {
	      return project;
	    })();
	  }
	  function d3_geo_projectionMutator(projectAt) {
	    var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
	      x = project(x, y);
	      return [ x[0] * k + δx, δy - x[1] * k ];
	    }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
	    function projection(point) {
	      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
	      return [ point[0] * k + δx, δy - point[1] * k ];
	    }
	    function invert(point) {
	      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
	      return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
	    }
	    projection.stream = function(output) {
	      if (stream) stream.valid = false;
	      stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
	      stream.valid = true;
	      return stream;
	    };
	    projection.clipAngle = function(_) {
	      if (!arguments.length) return clipAngle;
	      preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
	      return invalidate();
	    };
	    projection.clipExtent = function(_) {
	      if (!arguments.length) return clipExtent;
	      clipExtent = _;
	      postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
	      return invalidate();
	    };
	    projection.scale = function(_) {
	      if (!arguments.length) return k;
	      k = +_;
	      return reset();
	    };
	    projection.translate = function(_) {
	      if (!arguments.length) return [ x, y ];
	      x = +_[0];
	      y = +_[1];
	      return reset();
	    };
	    projection.center = function(_) {
	      if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
	      λ = _[0] % 360 * d3_radians;
	      φ = _[1] % 360 * d3_radians;
	      return reset();
	    };
	    projection.rotate = function(_) {
	      if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
	      δλ = _[0] % 360 * d3_radians;
	      δφ = _[1] % 360 * d3_radians;
	      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
	      return reset();
	    };
	    d3.rebind(projection, projectResample, "precision");
	    function reset() {
	      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
	      var center = project(λ, φ);
	      δx = x - center[0] * k;
	      δy = y + center[1] * k;
	      return invalidate();
	    }
	    function invalidate() {
	      if (stream) stream.valid = false, stream = null;
	      return projection;
	    }
	    return function() {
	      project = projectAt.apply(this, arguments);
	      projection.invert = project.invert && invert;
	      return reset();
	    };
	  }
	  function d3_geo_projectionRadians(stream) {
	    return d3_geo_transformPoint(stream, function(x, y) {
	      stream.point(x * d3_radians, y * d3_radians);
	    });
	  }
	  function d3_geo_equirectangular(λ, φ) {
	    return [ λ, φ ];
	  }
	  (d3.geo.equirectangular = function() {
	    return d3_geo_projection(d3_geo_equirectangular);
	  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
	  d3.geo.rotation = function(rotate) {
	    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
	    function forward(coordinates) {
	      coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
	      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
	    }
	    forward.invert = function(coordinates) {
	      coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
	      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
	    };
	    return forward;
	  };
	  function d3_geo_identityRotation(λ, φ) {
	    return [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
	  }
	  d3_geo_identityRotation.invert = d3_geo_equirectangular;
	  function d3_geo_rotation(δλ, δφ, δγ) {
	    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
	  }
	  function d3_geo_forwardRotationλ(δλ) {
	    return function(λ, φ) {
	      return λ += δλ, [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
	    };
	  }
	  function d3_geo_rotationλ(δλ) {
	    var rotation = d3_geo_forwardRotationλ(δλ);
	    rotation.invert = d3_geo_forwardRotationλ(-δλ);
	    return rotation;
	  }
	  function d3_geo_rotationφγ(δφ, δγ) {
	    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
	    function rotation(λ, φ) {
	      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
	      return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ) ];
	    }
	    rotation.invert = function(λ, φ) {
	      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
	      return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ) ];
	    };
	    return rotation;
	  }
	  d3.geo.circle = function() {
	    var origin = [ 0, 0 ], angle, precision = 6, interpolate;
	    function circle() {
	      var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
	      interpolate(null, null, 1, {
	        point: function(x, y) {
	          ring.push(x = rotate(x, y));
	          x[0] *= d3_degrees, x[1] *= d3_degrees;
	        }
	      });
	      return {
	        type: "Polygon",
	        coordinates: [ ring ]
	      };
	    }
	    circle.origin = function(x) {
	      if (!arguments.length) return origin;
	      origin = x;
	      return circle;
	    };
	    circle.angle = function(x) {
	      if (!arguments.length) return angle;
	      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
	      return circle;
	    };
	    circle.precision = function(_) {
	      if (!arguments.length) return precision;
	      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
	      return circle;
	    };
	    return circle.angle(90);
	  };
	  function d3_geo_circleInterpolate(radius, precision) {
	    var cr = Math.cos(radius), sr = Math.sin(radius);
	    return function(from, to, direction, listener) {
	      var step = direction * precision;
	      if (from != null) {
	        from = d3_geo_circleAngle(cr, from);
	        to = d3_geo_circleAngle(cr, to);
	        if (direction > 0 ? from < to : from > to) from += direction * τ;
	      } else {
	        from = radius + direction * τ;
	        to = radius - .5 * step;
	      }
	      for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
	        listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
	      }
	    };
	  }
	  function d3_geo_circleAngle(cr, point) {
	    var a = d3_geo_cartesian(point);
	    a[0] -= cr;
	    d3_geo_cartesianNormalize(a);
	    var angle = d3_acos(-a[1]);
	    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
	  }
	  d3.geo.distance = function(a, b) {
	    var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
	    return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
	  };
	  d3.geo.graticule = function() {
	    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
	    function graticule() {
	      return {
	        type: "MultiLineString",
	        coordinates: lines()
	      };
	    }
	    function lines() {
	      return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
	        return abs(x % DX) > ε;
	      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
	        return abs(y % DY) > ε;
	      }).map(y));
	    }
	    graticule.lines = function() {
	      return lines().map(function(coordinates) {
	        return {
	          type: "LineString",
	          coordinates: coordinates
	        };
	      });
	    };
	    graticule.outline = function() {
	      return {
	        type: "Polygon",
	        coordinates: [ X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1)) ]
	      };
	    };
	    graticule.extent = function(_) {
	      if (!arguments.length) return graticule.minorExtent();
	      return graticule.majorExtent(_).minorExtent(_);
	    };
	    graticule.majorExtent = function(_) {
	      if (!arguments.length) return [ [ X0, Y0 ], [ X1, Y1 ] ];
	      X0 = +_[0][0], X1 = +_[1][0];
	      Y0 = +_[0][1], Y1 = +_[1][1];
	      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
	      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
	      return graticule.precision(precision);
	    };
	    graticule.minorExtent = function(_) {
	      if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
	      x0 = +_[0][0], x1 = +_[1][0];
	      y0 = +_[0][1], y1 = +_[1][1];
	      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
	      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
	      return graticule.precision(precision);
	    };
	    graticule.step = function(_) {
	      if (!arguments.length) return graticule.minorStep();
	      return graticule.majorStep(_).minorStep(_);
	    };
	    graticule.majorStep = function(_) {
	      if (!arguments.length) return [ DX, DY ];
	      DX = +_[0], DY = +_[1];
	      return graticule;
	    };
	    graticule.minorStep = function(_) {
	      if (!arguments.length) return [ dx, dy ];
	      dx = +_[0], dy = +_[1];
	      return graticule;
	    };
	    graticule.precision = function(_) {
	      if (!arguments.length) return precision;
	      precision = +_;
	      x = d3_geo_graticuleX(y0, y1, 90);
	      y = d3_geo_graticuleY(x0, x1, precision);
	      X = d3_geo_graticuleX(Y0, Y1, 90);
	      Y = d3_geo_graticuleY(X0, X1, precision);
	      return graticule;
	    };
	    return graticule.majorExtent([ [ -180, -90 + ε ], [ 180, 90 - ε ] ]).minorExtent([ [ -180, -80 - ε ], [ 180, 80 + ε ] ]);
	  };
	  function d3_geo_graticuleX(y0, y1, dy) {
	    var y = d3.range(y0, y1 - ε, dy).concat(y1);
	    return function(x) {
	      return y.map(function(y) {
	        return [ x, y ];
	      });
	    };
	  }
	  function d3_geo_graticuleY(x0, x1, dx) {
	    var x = d3.range(x0, x1 - ε, dx).concat(x1);
	    return function(y) {
	      return x.map(function(x) {
	        return [ x, y ];
	      });
	    };
	  }
	  function d3_source(d) {
	    return d.source;
	  }
	  function d3_target(d) {
	    return d.target;
	  }
	  d3.geo.greatArc = function() {
	    var source = d3_source, source_, target = d3_target, target_;
	    function greatArc() {
	      return {
	        type: "LineString",
	        coordinates: [ source_ || source.apply(this, arguments), target_ || target.apply(this, arguments) ]
	      };
	    }
	    greatArc.distance = function() {
	      return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
	    };
	    greatArc.source = function(_) {
	      if (!arguments.length) return source;
	      source = _, source_ = typeof _ === "function" ? null : _;
	      return greatArc;
	    };
	    greatArc.target = function(_) {
	      if (!arguments.length) return target;
	      target = _, target_ = typeof _ === "function" ? null : _;
	      return greatArc;
	    };
	    greatArc.precision = function() {
	      return arguments.length ? greatArc : 0;
	    };
	    return greatArc;
	  };
	  d3.geo.interpolate = function(source, target) {
	    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
	  };
	  function d3_geo_interpolate(x0, y0, x1, y1) {
	    var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
	    var interpolate = d ? function(t) {
	      var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
	      return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
	    } : function() {
	      return [ x0 * d3_degrees, y0 * d3_degrees ];
	    };
	    interpolate.distance = d;
	    return interpolate;
	  }
	  d3.geo.length = function(object) {
	    d3_geo_lengthSum = 0;
	    d3.geo.stream(object, d3_geo_length);
	    return d3_geo_lengthSum;
	  };
	  var d3_geo_lengthSum;
	  var d3_geo_length = {
	    sphere: d3_noop,
	    point: d3_noop,
	    lineStart: d3_geo_lengthLineStart,
	    lineEnd: d3_noop,
	    polygonStart: d3_noop,
	    polygonEnd: d3_noop
	  };
	  function d3_geo_lengthLineStart() {
	    var λ0, sinφ0, cosφ0;
	    d3_geo_length.point = function(λ, φ) {
	      λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
	      d3_geo_length.point = nextPoint;
	    };
	    d3_geo_length.lineEnd = function() {
	      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
	    };
	    function nextPoint(λ, φ) {
	      var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);
	      d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
	      λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
	    }
	  }
	  function d3_geo_azimuthal(scale, angle) {
	    function azimuthal(λ, φ) {
	      var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
	      return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
	    }
	    azimuthal.invert = function(x, y) {
	      var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
	      return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
	    };
	    return azimuthal;
	  }
	  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
	    return Math.sqrt(2 / (1 + cosλcosφ));
	  }, function(ρ) {
	    return 2 * Math.asin(ρ / 2);
	  });
	  (d3.geo.azimuthalEqualArea = function() {
	    return d3_geo_projection(d3_geo_azimuthalEqualArea);
	  }).raw = d3_geo_azimuthalEqualArea;
	  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
	    var c = Math.acos(cosλcosφ);
	    return c && c / Math.sin(c);
	  }, d3_identity);
	  (d3.geo.azimuthalEquidistant = function() {
	    return d3_geo_projection(d3_geo_azimuthalEquidistant);
	  }).raw = d3_geo_azimuthalEquidistant;
	  function d3_geo_conicConformal(φ0, φ1) {
	    var cosφ0 = Math.cos(φ0), t = function(φ) {
	      return Math.tan(π / 4 + φ / 2);
	    }, n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)), F = cosφ0 * Math.pow(t(φ0), n) / n;
	    if (!n) return d3_geo_mercator;
	    function forward(λ, φ) {
	      if (F > 0) {
	        if (φ < -halfπ + ε) φ = -halfπ + ε;
	      } else {
	        if (φ > halfπ - ε) φ = halfπ - ε;
	      }
	      var ρ = F / Math.pow(t(φ), n);
	      return [ ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = F - y, ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
	      return [ Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ ];
	    };
	    return forward;
	  }
	  (d3.geo.conicConformal = function() {
	    return d3_geo_conic(d3_geo_conicConformal);
	  }).raw = d3_geo_conicConformal;
	  function d3_geo_conicEquidistant(φ0, φ1) {
	    var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;
	    if (abs(n) < ε) return d3_geo_equirectangular;
	    function forward(λ, φ) {
	      var ρ = G - φ;
	      return [ ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = G - y;
	      return [ Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y) ];
	    };
	    return forward;
	  }
	  (d3.geo.conicEquidistant = function() {
	    return d3_geo_conic(d3_geo_conicEquidistant);
	  }).raw = d3_geo_conicEquidistant;
	  var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
	    return 1 / cosλcosφ;
	  }, Math.atan);
	  (d3.geo.gnomonic = function() {
	    return d3_geo_projection(d3_geo_gnomonic);
	  }).raw = d3_geo_gnomonic;
	  function d3_geo_mercator(λ, φ) {
	    return [ λ, Math.log(Math.tan(π / 4 + φ / 2)) ];
	  }
	  d3_geo_mercator.invert = function(x, y) {
	    return [ x, 2 * Math.atan(Math.exp(y)) - halfπ ];
	  };
	  function d3_geo_mercatorProjection(project) {
	    var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
	    m.scale = function() {
	      var v = scale.apply(m, arguments);
	      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
	    };
	    m.translate = function() {
	      var v = translate.apply(m, arguments);
	      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
	    };
	    m.clipExtent = function(_) {
	      var v = clipExtent.apply(m, arguments);
	      if (v === m) {
	        if (clipAuto = _ == null) {
	          var k = π * scale(), t = translate();
	          clipExtent([ [ t[0] - k, t[1] - k ], [ t[0] + k, t[1] + k ] ]);
	        }
	      } else if (clipAuto) {
	        v = null;
	      }
	      return v;
	    };
	    return m.clipExtent(null);
	  }
	  (d3.geo.mercator = function() {
	    return d3_geo_mercatorProjection(d3_geo_mercator);
	  }).raw = d3_geo_mercator;
	  var d3_geo_orthographic = d3_geo_azimuthal(function() {
	    return 1;
	  }, Math.asin);
	  (d3.geo.orthographic = function() {
	    return d3_geo_projection(d3_geo_orthographic);
	  }).raw = d3_geo_orthographic;
	  var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
	    return 1 / (1 + cosλcosφ);
	  }, function(ρ) {
	    return 2 * Math.atan(ρ);
	  });
	  (d3.geo.stereographic = function() {
	    return d3_geo_projection(d3_geo_stereographic);
	  }).raw = d3_geo_stereographic;
	  function d3_geo_transverseMercator(λ, φ) {
	    return [ Math.log(Math.tan(π / 4 + φ / 2)), -λ ];
	  }
	  d3_geo_transverseMercator.invert = function(x, y) {
	    return [ -y, 2 * Math.atan(Math.exp(x)) - halfπ ];
	  };
	  (d3.geo.transverseMercator = function() {
	    var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator), center = projection.center, rotate = projection.rotate;
	    projection.center = function(_) {
	      return _ ? center([ -_[1], _[0] ]) : (_ = center(), [ _[1], -_[0] ]);
	    };
	    projection.rotate = function(_) {
	      return _ ? rotate([ _[0], _[1], _.length > 2 ? _[2] + 90 : 90 ]) : (_ = rotate(), [ _[0], _[1], _[2] - 90 ]);
	    };
	    return rotate([ 0, 0, 90 ]);
	  }).raw = d3_geo_transverseMercator;
	  d3.geom = {};
	  function d3_geom_pointX(d) {
	    return d[0];
	  }
	  function d3_geom_pointY(d) {
	    return d[1];
	  }
	  d3.geom.hull = function(vertices) {
	    var x = d3_geom_pointX, y = d3_geom_pointY;
	    if (arguments.length) return hull(vertices);
	    function hull(data) {
	      if (data.length < 3) return [];
	      var fx = d3_functor(x), fy = d3_functor(y), i, n = data.length, points = [], flippedPoints = [];
	      for (i = 0; i < n; i++) {
	        points.push([ +fx.call(this, data[i], i), +fy.call(this, data[i], i), i ]);
	      }
	      points.sort(d3_geom_hullOrder);
	      for (i = 0; i < n; i++) flippedPoints.push([ points[i][0], -points[i][1] ]);
	      var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);
	      var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];
	      for (i = upper.length - 1; i >= 0; --i) polygon.push(data[points[upper[i]][2]]);
	      for (i = +skipLeft; i < lower.length - skipRight; ++i) polygon.push(data[points[lower[i]][2]]);
	      return polygon;
	    }
	    hull.x = function(_) {
	      return arguments.length ? (x = _, hull) : x;
	    };
	    hull.y = function(_) {
	      return arguments.length ? (y = _, hull) : y;
	    };
	    return hull;
	  };
	  function d3_geom_hullUpper(points) {
	    var n = points.length, hull = [ 0, 1 ], hs = 2;
	    for (var i = 2; i < n; i++) {
	      while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0) --hs;
	      hull[hs++] = i;
	    }
	    return hull.slice(0, hs);
	  }
	  function d3_geom_hullOrder(a, b) {
	    return a[0] - b[0] || a[1] - b[1];
	  }
	  d3.geom.polygon = function(coordinates) {
	    d3_subclass(coordinates, d3_geom_polygonPrototype);
	    return coordinates;
	  };
	  var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
	  d3_geom_polygonPrototype.area = function() {
	    var i = -1, n = this.length, a, b = this[n - 1], area = 0;
	    while (++i < n) {
	      a = b;
	      b = this[i];
	      area += a[1] * b[0] - a[0] * b[1];
	    }
	    return area * .5;
	  };
	  d3_geom_polygonPrototype.centroid = function(k) {
	    var i = -1, n = this.length, x = 0, y = 0, a, b = this[n - 1], c;
	    if (!arguments.length) k = -1 / (6 * this.area());
	    while (++i < n) {
	      a = b;
	      b = this[i];
	      c = a[0] * b[1] - b[0] * a[1];
	      x += (a[0] + b[0]) * c;
	      y += (a[1] + b[1]) * c;
	    }
	    return [ x * k, y * k ];
	  };
	  d3_geom_polygonPrototype.clip = function(subject) {
	    var input, closed = d3_geom_polygonClosed(subject), i = -1, n = this.length - d3_geom_polygonClosed(this), j, m, a = this[n - 1], b, c, d;
	    while (++i < n) {
	      input = subject.slice();
	      subject.length = 0;
	      b = this[i];
	      c = input[(m = input.length - closed) - 1];
	      j = -1;
	      while (++j < m) {
	        d = input[j];
	        if (d3_geom_polygonInside(d, a, b)) {
	          if (!d3_geom_polygonInside(c, a, b)) {
	            subject.push(d3_geom_polygonIntersect(c, d, a, b));
	          }
	          subject.push(d);
	        } else if (d3_geom_polygonInside(c, a, b)) {
	          subject.push(d3_geom_polygonIntersect(c, d, a, b));
	        }
	        c = d;
	      }
	      if (closed) subject.push(subject[0]);
	      a = b;
	    }
	    return subject;
	  };
	  function d3_geom_polygonInside(p, a, b) {
	    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
	  }
	  function d3_geom_polygonIntersect(c, d, a, b) {
	    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
	    return [ x1 + ua * x21, y1 + ua * y21 ];
	  }
	  function d3_geom_polygonClosed(coordinates) {
	    var a = coordinates[0], b = coordinates[coordinates.length - 1];
	    return !(a[0] - b[0] || a[1] - b[1]);
	  }
	  var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [], d3_geom_voronoiFirstCircle, d3_geom_voronoiCircles, d3_geom_voronoiCirclePool = [];
	  function d3_geom_voronoiBeach() {
	    d3_geom_voronoiRedBlackNode(this);
	    this.edge = this.site = this.circle = null;
	  }
	  function d3_geom_voronoiCreateBeach(site) {
	    var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
	    beach.site = site;
	    return beach;
	  }
	  function d3_geom_voronoiDetachBeach(beach) {
	    d3_geom_voronoiDetachCircle(beach);
	    d3_geom_voronoiBeaches.remove(beach);
	    d3_geom_voronoiBeachPool.push(beach);
	    d3_geom_voronoiRedBlackNode(beach);
	  }
	  function d3_geom_voronoiRemoveBeach(beach) {
	    var circle = beach.circle, x = circle.x, y = circle.cy, vertex = {
	      x: x,
	      y: y
	    }, previous = beach.P, next = beach.N, disappearing = [ beach ];
	    d3_geom_voronoiDetachBeach(beach);
	    var lArc = previous;
	    while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
	      previous = lArc.P;
	      disappearing.unshift(lArc);
	      d3_geom_voronoiDetachBeach(lArc);
	      lArc = previous;
	    }
	    disappearing.unshift(lArc);
	    d3_geom_voronoiDetachCircle(lArc);
	    var rArc = next;
	    while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
	      next = rArc.N;
	      disappearing.push(rArc);
	      d3_geom_voronoiDetachBeach(rArc);
	      rArc = next;
	    }
	    disappearing.push(rArc);
	    d3_geom_voronoiDetachCircle(rArc);
	    var nArcs = disappearing.length, iArc;
	    for (iArc = 1; iArc < nArcs; ++iArc) {
	      rArc = disappearing[iArc];
	      lArc = disappearing[iArc - 1];
	      d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
	    }
	    lArc = disappearing[0];
	    rArc = disappearing[nArcs - 1];
	    rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
	    d3_geom_voronoiAttachCircle(lArc);
	    d3_geom_voronoiAttachCircle(rArc);
	  }
	  function d3_geom_voronoiAddBeach(site) {
	    var x = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
	    while (node) {
	      dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
	      if (dxl > ε) node = node.L; else {
	        dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
	        if (dxr > ε) {
	          if (!node.R) {
	            lArc = node;
	            break;
	          }
	          node = node.R;
	        } else {
	          if (dxl > -ε) {
	            lArc = node.P;
	            rArc = node;
	          } else if (dxr > -ε) {
	            lArc = node;
	            rArc = node.N;
	          } else {
	            lArc = rArc = node;
	          }
	          break;
	        }
	      }
	    }
	    var newArc = d3_geom_voronoiCreateBeach(site);
	    d3_geom_voronoiBeaches.insert(lArc, newArc);
	    if (!lArc && !rArc) return;
	    if (lArc === rArc) {
	      d3_geom_voronoiDetachCircle(lArc);
	      rArc = d3_geom_voronoiCreateBeach(lArc.site);
	      d3_geom_voronoiBeaches.insert(newArc, rArc);
	      newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
	      d3_geom_voronoiAttachCircle(lArc);
	      d3_geom_voronoiAttachCircle(rArc);
	      return;
	    }
	    if (!rArc) {
	      newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
	      return;
	    }
	    d3_geom_voronoiDetachCircle(lArc);
	    d3_geom_voronoiDetachCircle(rArc);
	    var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = {
	      x: (cy * hb - by * hc) / d + ax,
	      y: (bx * hc - cx * hb) / d + ay
	    };
	    d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
	    newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
	    rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
	    d3_geom_voronoiAttachCircle(lArc);
	    d3_geom_voronoiAttachCircle(rArc);
	  }
	  function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
	    var site = arc.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;
	    if (!pby2) return rfocx;
	    var lArc = arc.P;
	    if (!lArc) return -Infinity;
	    site = lArc.site;
	    var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;
	    if (!plby2) return lfocx;
	    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
	    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
	    return (rfocx + lfocx) / 2;
	  }
	  function d3_geom_voronoiRightBreakPoint(arc, directrix) {
	    var rArc = arc.N;
	    if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
	    var site = arc.site;
	    return site.y === directrix ? site.x : Infinity;
	  }
	  function d3_geom_voronoiCell(site) {
	    this.site = site;
	    this.edges = [];
	  }
	  d3_geom_voronoiCell.prototype.prepare = function() {
	    var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;
	    while (iHalfEdge--) {
	      edge = halfEdges[iHalfEdge].edge;
	      if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
	    }
	    halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
	    return halfEdges.length;
	  };
	  function d3_geom_voronoiCloseCells(extent) {
	    var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;
	    while (iCell--) {
	      cell = cells[iCell];
	      if (!cell || !cell.prepare()) continue;
	      halfEdges = cell.edges;
	      nHalfEdges = halfEdges.length;
	      iHalfEdge = 0;
	      while (iHalfEdge < nHalfEdges) {
	        end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
	        start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
	        if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
	          halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
	            x: x0,
	            y: abs(x2 - x0) < ε ? y2 : y1
	          } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
	            x: abs(y2 - y1) < ε ? x2 : x1,
	            y: y1
	          } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
	            x: x1,
	            y: abs(x2 - x1) < ε ? y2 : y0
	          } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
	            x: abs(y2 - y0) < ε ? x2 : x0,
	            y: y0
	          } : null), cell.site, null));
	          ++nHalfEdges;
	        }
	      }
	    }
	  }
	  function d3_geom_voronoiHalfEdgeOrder(a, b) {
	    return b.angle - a.angle;
	  }
	  function d3_geom_voronoiCircle() {
	    d3_geom_voronoiRedBlackNode(this);
	    this.x = this.y = this.arc = this.site = this.cy = null;
	  }
	  function d3_geom_voronoiAttachCircle(arc) {
	    var lArc = arc.P, rArc = arc.N;
	    if (!lArc || !rArc) return;
	    var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
	    if (lSite === rSite) return;
	    var bx = cSite.x, by = cSite.y, ax = lSite.x - bx, ay = lSite.y - by, cx = rSite.x - bx, cy = rSite.y - by;
	    var d = 2 * (ax * cy - ay * cx);
	    if (d >= -ε2) return;
	    var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d, cy = y + by;
	    var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
	    circle.arc = arc;
	    circle.site = cSite;
	    circle.x = x + bx;
	    circle.y = cy + Math.sqrt(x * x + y * y);
	    circle.cy = cy;
	    arc.circle = circle;
	    var before = null, node = d3_geom_voronoiCircles._;
	    while (node) {
	      if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
	        if (node.L) node = node.L; else {
	          before = node.P;
	          break;
	        }
	      } else {
	        if (node.R) node = node.R; else {
	          before = node;
	          break;
	        }
	      }
	    }
	    d3_geom_voronoiCircles.insert(before, circle);
	    if (!before) d3_geom_voronoiFirstCircle = circle;
	  }
	  function d3_geom_voronoiDetachCircle(arc) {
	    var circle = arc.circle;
	    if (circle) {
	      if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
	      d3_geom_voronoiCircles.remove(circle);
	      d3_geom_voronoiCirclePool.push(circle);
	      d3_geom_voronoiRedBlackNode(circle);
	      arc.circle = null;
	    }
	  }
	  function d3_geom_voronoiClipEdges(extent) {
	    var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;
	    while (i--) {
	      e = edges[i];
	      if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
	        e.a = e.b = null;
	        edges.splice(i, 1);
	      }
	    }
	  }
	  function d3_geom_voronoiConnectEdge(edge, extent) {
	    var vb = edge.b;
	    if (vb) return true;
	    var va = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
	    if (ry === ly) {
	      if (fx < x0 || fx >= x1) return;
	      if (lx > rx) {
	        if (!va) va = {
	          x: fx,
	          y: y0
	        }; else if (va.y >= y1) return;
	        vb = {
	          x: fx,
	          y: y1
	        };
	      } else {
	        if (!va) va = {
	          x: fx,
	          y: y1
	        }; else if (va.y < y0) return;
	        vb = {
	          x: fx,
	          y: y0
	        };
	      }
	    } else {
	      fm = (lx - rx) / (ry - ly);
	      fb = fy - fm * fx;
	      if (fm < -1 || fm > 1) {
	        if (lx > rx) {
	          if (!va) va = {
	            x: (y0 - fb) / fm,
	            y: y0
	          }; else if (va.y >= y1) return;
	          vb = {
	            x: (y1 - fb) / fm,
	            y: y1
	          };
	        } else {
	          if (!va) va = {
	            x: (y1 - fb) / fm,
	            y: y1
	          }; else if (va.y < y0) return;
	          vb = {
	            x: (y0 - fb) / fm,
	            y: y0
	          };
	        }
	      } else {
	        if (ly < ry) {
	          if (!va) va = {
	            x: x0,
	            y: fm * x0 + fb
	          }; else if (va.x >= x1) return;
	          vb = {
	            x: x1,
	            y: fm * x1 + fb
	          };
	        } else {
	          if (!va) va = {
	            x: x1,
	            y: fm * x1 + fb
	          }; else if (va.x < x0) return;
	          vb = {
	            x: x0,
	            y: fm * x0 + fb
	          };
	        }
	      }
	    }
	    edge.a = va;
	    edge.b = vb;
	    return true;
	  }
	  function d3_geom_voronoiEdge(lSite, rSite) {
	    this.l = lSite;
	    this.r = rSite;
	    this.a = this.b = null;
	  }
	  function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
	    var edge = new d3_geom_voronoiEdge(lSite, rSite);
	    d3_geom_voronoiEdges.push(edge);
	    if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
	    if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
	    d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
	    d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
	    return edge;
	  }
	  function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
	    var edge = new d3_geom_voronoiEdge(lSite, null);
	    edge.a = va;
	    edge.b = vb;
	    d3_geom_voronoiEdges.push(edge);
	    return edge;
	  }
	  function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
	    if (!edge.a && !edge.b) {
	      edge.a = vertex;
	      edge.l = lSite;
	      edge.r = rSite;
	    } else if (edge.l === rSite) {
	      edge.b = vertex;
	    } else {
	      edge.a = vertex;
	    }
	  }
	  function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
	    var va = edge.a, vb = edge.b;
	    this.edge = edge;
	    this.site = lSite;
	    this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
	  }
	  d3_geom_voronoiHalfEdge.prototype = {
	    start: function() {
	      return this.edge.l === this.site ? this.edge.a : this.edge.b;
	    },
	    end: function() {
	      return this.edge.l === this.site ? this.edge.b : this.edge.a;
	    }
	  };
	  function d3_geom_voronoiRedBlackTree() {
	    this._ = null;
	  }
	  function d3_geom_voronoiRedBlackNode(node) {
	    node.U = node.C = node.L = node.R = node.P = node.N = null;
	  }
	  d3_geom_voronoiRedBlackTree.prototype = {
	    insert: function(after, node) {
	      var parent, grandpa, uncle;
	      if (after) {
	        node.P = after;
	        node.N = after.N;
	        if (after.N) after.N.P = node;
	        after.N = node;
	        if (after.R) {
	          after = after.R;
	          while (after.L) after = after.L;
	          after.L = node;
	        } else {
	          after.R = node;
	        }
	        parent = after;
	      } else if (this._) {
	        after = d3_geom_voronoiRedBlackFirst(this._);
	        node.P = null;
	        node.N = after;
	        after.P = after.L = node;
	        parent = after;
	      } else {
	        node.P = node.N = null;
	        this._ = node;
	        parent = null;
	      }
	      node.L = node.R = null;
	      node.U = parent;
	      node.C = true;
	      after = node;
	      while (parent && parent.C) {
	        grandpa = parent.U;
	        if (parent === grandpa.L) {
	          uncle = grandpa.R;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.R) {
	              d3_geom_voronoiRedBlackRotateLeft(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            d3_geom_voronoiRedBlackRotateRight(this, grandpa);
	          }
	        } else {
	          uncle = grandpa.L;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.L) {
	              d3_geom_voronoiRedBlackRotateRight(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
	          }
	        }
	        parent = after.U;
	      }
	      this._.C = false;
	    },
	    remove: function(node) {
	      if (node.N) node.N.P = node.P;
	      if (node.P) node.P.N = node.N;
	      node.N = node.P = null;
	      var parent = node.U, sibling, left = node.L, right = node.R, next, red;
	      if (!left) next = right; else if (!right) next = left; else next = d3_geom_voronoiRedBlackFirst(right);
	      if (parent) {
	        if (parent.L === node) parent.L = next; else parent.R = next;
	      } else {
	        this._ = next;
	      }
	      if (left && right) {
	        red = next.C;
	        next.C = node.C;
	        next.L = left;
	        left.U = next;
	        if (next !== right) {
	          parent = next.U;
	          next.U = node.U;
	          node = next.R;
	          parent.L = node;
	          next.R = right;
	          right.U = next;
	        } else {
	          next.U = parent;
	          parent = next;
	          node = next.R;
	        }
	      } else {
	        red = node.C;
	        node = next;
	      }
	      if (node) node.U = parent;
	      if (red) return;
	      if (node && node.C) {
	        node.C = false;
	        return;
	      }
	      do {
	        if (node === this._) break;
	        if (node === parent.L) {
	          sibling = parent.R;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            d3_geom_voronoiRedBlackRotateLeft(this, parent);
	            sibling = parent.R;
	          }
	          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
	            if (!sibling.R || !sibling.R.C) {
	              sibling.L.C = false;
	              sibling.C = true;
	              d3_geom_voronoiRedBlackRotateRight(this, sibling);
	              sibling = parent.R;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.R.C = false;
	            d3_geom_voronoiRedBlackRotateLeft(this, parent);
	            node = this._;
	            break;
	          }
	        } else {
	          sibling = parent.L;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            d3_geom_voronoiRedBlackRotateRight(this, parent);
	            sibling = parent.L;
	          }
	          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
	            if (!sibling.L || !sibling.L.C) {
	              sibling.R.C = false;
	              sibling.C = true;
	              d3_geom_voronoiRedBlackRotateLeft(this, sibling);
	              sibling = parent.L;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.L.C = false;
	            d3_geom_voronoiRedBlackRotateRight(this, parent);
	            node = this._;
	            break;
	          }
	        }
	        sibling.C = true;
	        node = parent;
	        parent = parent.U;
	      } while (!node.C);
	      if (node) node.C = false;
	    }
	  };
	  function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
	    var p = node, q = node.R, parent = p.U;
	    if (parent) {
	      if (parent.L === p) parent.L = q; else parent.R = q;
	    } else {
	      tree._ = q;
	    }
	    q.U = parent;
	    p.U = q;
	    p.R = q.L;
	    if (p.R) p.R.U = p;
	    q.L = p;
	  }
	  function d3_geom_voronoiRedBlackRotateRight(tree, node) {
	    var p = node, q = node.L, parent = p.U;
	    if (parent) {
	      if (parent.L === p) parent.L = q; else parent.R = q;
	    } else {
	      tree._ = q;
	    }
	    q.U = parent;
	    p.U = q;
	    p.L = q.R;
	    if (p.L) p.L.U = p;
	    q.R = p;
	  }
	  function d3_geom_voronoiRedBlackFirst(node) {
	    while (node.L) node = node.L;
	    return node;
	  }
	  function d3_geom_voronoi(sites, bbox) {
	    var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;
	    d3_geom_voronoiEdges = [];
	    d3_geom_voronoiCells = new Array(sites.length);
	    d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
	    d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
	    while (true) {
	      circle = d3_geom_voronoiFirstCircle;
	      if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
	        if (site.x !== x0 || site.y !== y0) {
	          d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
	          d3_geom_voronoiAddBeach(site);
	          x0 = site.x, y0 = site.y;
	        }
	        site = sites.pop();
	      } else if (circle) {
	        d3_geom_voronoiRemoveBeach(circle.arc);
	      } else {
	        break;
	      }
	    }
	    if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
	    var diagram = {
	      cells: d3_geom_voronoiCells,
	      edges: d3_geom_voronoiEdges
	    };
	    d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
	    return diagram;
	  }
	  function d3_geom_voronoiVertexOrder(a, b) {
	    return b.y - a.y || b.x - a.x;
	  }
	  d3.geom.voronoi = function(points) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, fx = x, fy = y, clipExtent = d3_geom_voronoiClipExtent;
	    if (points) return voronoi(points);
	    function voronoi(data) {
	      var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];
	      d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
	        var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function(e) {
	          var s = e.start();
	          return [ s.x, s.y ];
	        }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [ [ x0, y1 ], [ x1, y1 ], [ x1, y0 ], [ x0, y0 ] ] : [];
	        polygon.point = data[i];
	      });
	      return polygons;
	    }
	    function sites(data) {
	      return data.map(function(d, i) {
	        return {
	          x: Math.round(fx(d, i) / ε) * ε,
	          y: Math.round(fy(d, i) / ε) * ε,
	          i: i
	        };
	      });
	    }
	    voronoi.links = function(data) {
	      return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
	        return edge.l && edge.r;
	      }).map(function(edge) {
	        return {
	          source: data[edge.l.i],
	          target: data[edge.r.i]
	        };
	      });
	    };
	    voronoi.triangles = function(data) {
	      var triangles = [];
	      d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
	        var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m = edges.length, s0, e1 = edges[m - 1].edge, s1 = e1.l === site ? e1.r : e1.l;
	        while (++j < m) {
	          s0 = s1;
	          e1 = edges[j].edge;
	          s1 = e1.l === site ? e1.r : e1.l;
	          if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
	            triangles.push([ data[i], data[s0.i], data[s1.i] ]);
	          }
	        }
	      });
	      return triangles;
	    };
	    voronoi.x = function(_) {
	      return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
	    };
	    voronoi.y = function(_) {
	      return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
	    };
	    voronoi.clipExtent = function(_) {
	      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
	      clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
	      return voronoi;
	    };
	    voronoi.size = function(_) {
	      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
	      return voronoi.clipExtent(_ && [ [ 0, 0 ], _ ]);
	    };
	    return voronoi;
	  };
	  var d3_geom_voronoiClipExtent = [ [ -1e6, -1e6 ], [ 1e6, 1e6 ] ];
	  function d3_geom_voronoiTriangleArea(a, b, c) {
	    return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
	  }
	  d3.geom.delaunay = function(vertices) {
	    return d3.geom.voronoi().triangles(vertices);
	  };
	  d3.geom.quadtree = function(points, x1, y1, x2, y2) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, compat;
	    if (compat = arguments.length) {
	      x = d3_geom_quadtreeCompatX;
	      y = d3_geom_quadtreeCompatY;
	      if (compat === 3) {
	        y2 = y1;
	        x2 = x1;
	        y1 = x1 = 0;
	      }
	      return quadtree(points);
	    }
	    function quadtree(data) {
	      var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
	      if (x1 != null) {
	        x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
	      } else {
	        x2_ = y2_ = -(x1_ = y1_ = Infinity);
	        xs = [], ys = [];
	        n = data.length;
	        if (compat) for (i = 0; i < n; ++i) {
	          d = data[i];
	          if (d.x < x1_) x1_ = d.x;
	          if (d.y < y1_) y1_ = d.y;
	          if (d.x > x2_) x2_ = d.x;
	          if (d.y > y2_) y2_ = d.y;
	          xs.push(d.x);
	          ys.push(d.y);
	        } else for (i = 0; i < n; ++i) {
	          var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
	          if (x_ < x1_) x1_ = x_;
	          if (y_ < y1_) y1_ = y_;
	          if (x_ > x2_) x2_ = x_;
	          if (y_ > y2_) y2_ = y_;
	          xs.push(x_);
	          ys.push(y_);
	        }
	      }
	      var dx = x2_ - x1_, dy = y2_ - y1_;
	      if (dx > dy) y2_ = y1_ + dx; else x2_ = x1_ + dy;
	      function insert(n, d, x, y, x1, y1, x2, y2) {
	        if (isNaN(x) || isNaN(y)) return;
	        if (n.leaf) {
	          var nx = n.x, ny = n.y;
	          if (nx != null) {
	            if (abs(nx - x) + abs(ny - y) < .01) {
	              insertChild(n, d, x, y, x1, y1, x2, y2);
	            } else {
	              var nPoint = n.point;
	              n.x = n.y = n.point = null;
	              insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
	              insertChild(n, d, x, y, x1, y1, x2, y2);
	            }
	          } else {
	            n.x = x, n.y = y, n.point = d;
	          }
	        } else {
	          insertChild(n, d, x, y, x1, y1, x2, y2);
	        }
	      }
	      function insertChild(n, d, x, y, x1, y1, x2, y2) {
	        var xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym, i = below << 1 | right;
	        n.leaf = false;
	        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
	        if (right) x1 = xm; else x2 = xm;
	        if (below) y1 = ym; else y2 = ym;
	        insert(n, d, x, y, x1, y1, x2, y2);
	      }
	      var root = d3_geom_quadtreeNode();
	      root.add = function(d) {
	        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
	      };
	      root.visit = function(f) {
	        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
	      };
	      root.find = function(point) {
	        return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
	      };
	      i = -1;
	      if (x1 == null) {
	        while (++i < n) {
	          insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
	        }
	        --i;
	      } else data.forEach(root.add);
	      xs = ys = data = d = null;
	      return root;
	    }
	    quadtree.x = function(_) {
	      return arguments.length ? (x = _, quadtree) : x;
	    };
	    quadtree.y = function(_) {
	      return arguments.length ? (y = _, quadtree) : y;
	    };
	    quadtree.extent = function(_) {
	      if (!arguments.length) return x1 == null ? null : [ [ x1, y1 ], [ x2, y2 ] ];
	      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], y2 = +_[1][1];
	      return quadtree;
	    };
	    quadtree.size = function(_) {
	      if (!arguments.length) return x1 == null ? null : [ x2 - x1, y2 - y1 ];
	      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
	      return quadtree;
	    };
	    return quadtree;
	  };
	  function d3_geom_quadtreeCompatX(d) {
	    return d.x;
	  }
	  function d3_geom_quadtreeCompatY(d) {
	    return d.y;
	  }
	  function d3_geom_quadtreeNode() {
	    return {
	      leaf: true,
	      nodes: [],
	      point: null,
	      x: null,
	      y: null
	    };
	  }
	  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
	    if (!f(node, x1, y1, x2, y2)) {
	      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
	      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
	      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
	      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
	      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
	    }
	  }
	  function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
	    var minDistance2 = Infinity, closestPoint;
	    (function find(node, x1, y1, x2, y2) {
	      if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0) return;
	      if (point = node.point) {
	        var point, dx = x - node.x, dy = y - node.y, distance2 = dx * dx + dy * dy;
	        if (distance2 < minDistance2) {
	          var distance = Math.sqrt(minDistance2 = distance2);
	          x0 = x - distance, y0 = y - distance;
	          x3 = x + distance, y3 = y + distance;
	          closestPoint = point;
	        }
	      }
	      var children = node.nodes, xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym;
	      for (var i = below << 1 | right, j = i + 4; i < j; ++i) {
	        if (node = children[i & 3]) switch (i & 3) {
	         case 0:
	          find(node, x1, y1, xm, ym);
	          break;

	         case 1:
	          find(node, xm, y1, x2, ym);
	          break;

	         case 2:
	          find(node, x1, ym, xm, y2);
	          break;

	         case 3:
	          find(node, xm, ym, x2, y2);
	          break;
	        }
	      }
	    })(root, x0, y0, x3, y3);
	    return closestPoint;
	  }
	  d3.interpolateRgb = d3_interpolateRgb;
	  function d3_interpolateRgb(a, b) {
	    a = d3.rgb(a);
	    b = d3.rgb(b);
	    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
	    return function(t) {
	      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
	    };
	  }
	  d3.interpolateObject = d3_interpolateObject;
	  function d3_interpolateObject(a, b) {
	    var i = {}, c = {}, k;
	    for (k in a) {
	      if (k in b) {
	        i[k] = d3_interpolate(a[k], b[k]);
	      } else {
	        c[k] = a[k];
	      }
	    }
	    for (k in b) {
	      if (!(k in a)) {
	        c[k] = b[k];
	      }
	    }
	    return function(t) {
	      for (k in i) c[k] = i[k](t);
	      return c;
	    };
	  }
	  d3.interpolateNumber = d3_interpolateNumber;
	  function d3_interpolateNumber(a, b) {
	    a = +a, b = +b;
	    return function(t) {
	      return a * (1 - t) + b * t;
	    };
	  }
	  d3.interpolateString = d3_interpolateString;
	  function d3_interpolateString(a, b) {
	    var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
	    a = a + "", b = b + "";
	    while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
	      if ((bs = bm.index) > bi) {
	        bs = b.slice(bi, bs);
	        if (s[i]) s[i] += bs; else s[++i] = bs;
	      }
	      if ((am = am[0]) === (bm = bm[0])) {
	        if (s[i]) s[i] += bm; else s[++i] = bm;
	      } else {
	        s[++i] = null;
	        q.push({
	          i: i,
	          x: d3_interpolateNumber(am, bm)
	        });
	      }
	      bi = d3_interpolate_numberB.lastIndex;
	    }
	    if (bi < b.length) {
	      bs = b.slice(bi);
	      if (s[i]) s[i] += bs; else s[++i] = bs;
	    }
	    return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
	      return b(t) + "";
	    }) : function() {
	      return b;
	    } : (b = q.length, function(t) {
	      for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
	      return s.join("");
	    });
	  }
	  var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
	  d3.interpolate = d3_interpolate;
	  function d3_interpolate(a, b) {
	    var i = d3.interpolators.length, f;
	    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
	    return f;
	  }
	  d3.interpolators = [ function(a, b) {
	    var t = typeof b;
	    return (t === "string" ? d3_rgb_names.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
	  } ];
	  d3.interpolateArray = d3_interpolateArray;
	  function d3_interpolateArray(a, b) {
	    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
	    for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
	    for (;i < na; ++i) c[i] = a[i];
	    for (;i < nb; ++i) c[i] = b[i];
	    return function(t) {
	      for (i = 0; i < n0; ++i) c[i] = x[i](t);
	      return c;
	    };
	  }
	  var d3_ease_default = function() {
	    return d3_identity;
	  };
	  var d3_ease = d3.map({
	    linear: d3_ease_default,
	    poly: d3_ease_poly,
	    quad: function() {
	      return d3_ease_quad;
	    },
	    cubic: function() {
	      return d3_ease_cubic;
	    },
	    sin: function() {
	      return d3_ease_sin;
	    },
	    exp: function() {
	      return d3_ease_exp;
	    },
	    circle: function() {
	      return d3_ease_circle;
	    },
	    elastic: d3_ease_elastic,
	    back: d3_ease_back,
	    bounce: function() {
	      return d3_ease_bounce;
	    }
	  });
	  var d3_ease_mode = d3.map({
	    "in": d3_identity,
	    out: d3_ease_reverse,
	    "in-out": d3_ease_reflect,
	    "out-in": function(f) {
	      return d3_ease_reflect(d3_ease_reverse(f));
	    }
	  });
	  d3.ease = function(name) {
	    var i = name.indexOf("-"), t = i >= 0 ? name.slice(0, i) : name, m = i >= 0 ? name.slice(i + 1) : "in";
	    t = d3_ease.get(t) || d3_ease_default;
	    m = d3_ease_mode.get(m) || d3_identity;
	    return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
	  };
	  function d3_ease_clamp(f) {
	    return function(t) {
	      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
	    };
	  }
	  function d3_ease_reverse(f) {
	    return function(t) {
	      return 1 - f(1 - t);
	    };
	  }
	  function d3_ease_reflect(f) {
	    return function(t) {
	      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
	    };
	  }
	  function d3_ease_quad(t) {
	    return t * t;
	  }
	  function d3_ease_cubic(t) {
	    return t * t * t;
	  }
	  function d3_ease_cubicInOut(t) {
	    if (t <= 0) return 0;
	    if (t >= 1) return 1;
	    var t2 = t * t, t3 = t2 * t;
	    return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
	  }
	  function d3_ease_poly(e) {
	    return function(t) {
	      return Math.pow(t, e);
	    };
	  }
	  function d3_ease_sin(t) {
	    return 1 - Math.cos(t * halfπ);
	  }
	  function d3_ease_exp(t) {
	    return Math.pow(2, 10 * (t - 1));
	  }
	  function d3_ease_circle(t) {
	    return 1 - Math.sqrt(1 - t * t);
	  }
	  function d3_ease_elastic(a, p) {
	    var s;
	    if (arguments.length < 2) p = .45;
	    if (arguments.length) s = p / τ * Math.asin(1 / a); else a = 1, s = p / 4;
	    return function(t) {
	      return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
	    };
	  }
	  function d3_ease_back(s) {
	    if (!s) s = 1.70158;
	    return function(t) {
	      return t * t * ((s + 1) * t - s);
	    };
	  }
	  function d3_ease_bounce(t) {
	    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
	  }
	  d3.interpolateHcl = d3_interpolateHcl;
	  function d3_interpolateHcl(a, b) {
	    a = d3.hcl(a);
	    b = d3.hcl(b);
	    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
	    if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
	    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
	    return function(t) {
	      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
	    };
	  }
	  d3.interpolateHsl = d3_interpolateHsl;
	  function d3_interpolateHsl(a, b) {
	    a = d3.hsl(a);
	    b = d3.hsl(b);
	    var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
	    if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
	    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
	    return function(t) {
	      return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
	    };
	  }
	  d3.interpolateLab = d3_interpolateLab;
	  function d3_interpolateLab(a, b) {
	    a = d3.lab(a);
	    b = d3.lab(b);
	    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
	    return function(t) {
	      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
	    };
	  }
	  d3.interpolateRound = d3_interpolateRound;
	  function d3_interpolateRound(a, b) {
	    b -= a;
	    return function(t) {
	      return Math.round(a + b * t);
	    };
	  }
	  d3.transform = function(string) {
	    var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
	    return (d3.transform = function(string) {
	      if (string != null) {
	        g.setAttribute("transform", string);
	        var t = g.transform.baseVal.consolidate();
	      }
	      return new d3_transform(t ? t.matrix : d3_transformIdentity);
	    })(string);
	  };
	  function d3_transform(m) {
	    var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
	    if (r0[0] * r1[1] < r1[0] * r0[1]) {
	      r0[0] *= -1;
	      r0[1] *= -1;
	      kx *= -1;
	      kz *= -1;
	    }
	    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
	    this.translate = [ m.e, m.f ];
	    this.scale = [ kx, ky ];
	    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
	  }
	  d3_transform.prototype.toString = function() {
	    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
	  };
	  function d3_transformDot(a, b) {
	    return a[0] * b[0] + a[1] * b[1];
	  }
	  function d3_transformNormalize(a) {
	    var k = Math.sqrt(d3_transformDot(a, a));
	    if (k) {
	      a[0] /= k;
	      a[1] /= k;
	    }
	    return k;
	  }
	  function d3_transformCombine(a, b, k) {
	    a[0] += k * b[0];
	    a[1] += k * b[1];
	    return a;
	  }
	  var d3_transformIdentity = {
	    a: 1,
	    b: 0,
	    c: 0,
	    d: 1,
	    e: 0,
	    f: 0
	  };
	  d3.interpolateTransform = d3_interpolateTransform;
	  function d3_interpolateTransformPop(s) {
	    return s.length ? s.pop() + "," : "";
	  }
	  function d3_interpolateTranslate(ta, tb, s, q) {
	    if (ta[0] !== tb[0] || ta[1] !== tb[1]) {
	      var i = s.push("translate(", null, ",", null, ")");
	      q.push({
	        i: i - 4,
	        x: d3_interpolateNumber(ta[0], tb[0])
	      }, {
	        i: i - 2,
	        x: d3_interpolateNumber(ta[1], tb[1])
	      });
	    } else if (tb[0] || tb[1]) {
	      s.push("translate(" + tb + ")");
	    }
	  }
	  function d3_interpolateRotate(ra, rb, s, q) {
	    if (ra !== rb) {
	      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
	      q.push({
	        i: s.push(d3_interpolateTransformPop(s) + "rotate(", null, ")") - 2,
	        x: d3_interpolateNumber(ra, rb)
	      });
	    } else if (rb) {
	      s.push(d3_interpolateTransformPop(s) + "rotate(" + rb + ")");
	    }
	  }
	  function d3_interpolateSkew(wa, wb, s, q) {
	    if (wa !== wb) {
	      q.push({
	        i: s.push(d3_interpolateTransformPop(s) + "skewX(", null, ")") - 2,
	        x: d3_interpolateNumber(wa, wb)
	      });
	    } else if (wb) {
	      s.push(d3_interpolateTransformPop(s) + "skewX(" + wb + ")");
	    }
	  }
	  function d3_interpolateScale(ka, kb, s, q) {
	    if (ka[0] !== kb[0] || ka[1] !== kb[1]) {
	      var i = s.push(d3_interpolateTransformPop(s) + "scale(", null, ",", null, ")");
	      q.push({
	        i: i - 4,
	        x: d3_interpolateNumber(ka[0], kb[0])
	      }, {
	        i: i - 2,
	        x: d3_interpolateNumber(ka[1], kb[1])
	      });
	    } else if (kb[0] !== 1 || kb[1] !== 1) {
	      s.push(d3_interpolateTransformPop(s) + "scale(" + kb + ")");
	    }
	  }
	  function d3_interpolateTransform(a, b) {
	    var s = [], q = [];
	    a = d3.transform(a), b = d3.transform(b);
	    d3_interpolateTranslate(a.translate, b.translate, s, q);
	    d3_interpolateRotate(a.rotate, b.rotate, s, q);
	    d3_interpolateSkew(a.skew, b.skew, s, q);
	    d3_interpolateScale(a.scale, b.scale, s, q);
	    a = b = null;
	    return function(t) {
	      var i = -1, n = q.length, o;
	      while (++i < n) s[(o = q[i]).i] = o.x(t);
	      return s.join("");
	    };
	  }
	  function d3_uninterpolateNumber(a, b) {
	    b = (b -= a = +a) || 1 / b;
	    return function(x) {
	      return (x - a) / b;
	    };
	  }
	  function d3_uninterpolateClamp(a, b) {
	    b = (b -= a = +a) || 1 / b;
	    return function(x) {
	      return Math.max(0, Math.min(1, (x - a) / b));
	    };
	  }
	  d3.layout = {};
	  d3.layout.bundle = function() {
	    return function(links) {
	      var paths = [], i = -1, n = links.length;
	      while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
	      return paths;
	    };
	  };
	  function d3_layout_bundlePath(link) {
	    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
	    while (start !== lca) {
	      start = start.parent;
	      points.push(start);
	    }
	    var k = points.length;
	    while (end !== lca) {
	      points.splice(k, 0, end);
	      end = end.parent;
	    }
	    return points;
	  }
	  function d3_layout_bundleAncestors(node) {
	    var ancestors = [], parent = node.parent;
	    while (parent != null) {
	      ancestors.push(node);
	      node = parent;
	      parent = parent.parent;
	    }
	    ancestors.push(node);
	    return ancestors;
	  }
	  function d3_layout_bundleLeastCommonAncestor(a, b) {
	    if (a === b) return a;
	    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
	    while (aNode === bNode) {
	      sharedNode = aNode;
	      aNode = aNodes.pop();
	      bNode = bNodes.pop();
	    }
	    return sharedNode;
	  }
	  d3.layout.chord = function() {
	    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
	    function relayout() {
	      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
	      chords = [];
	      groups = [];
	      k = 0, i = -1;
	      while (++i < n) {
	        x = 0, j = -1;
	        while (++j < n) {
	          x += matrix[i][j];
	        }
	        groupSums.push(x);
	        subgroupIndex.push(d3.range(n));
	        k += x;
	      }
	      if (sortGroups) {
	        groupIndex.sort(function(a, b) {
	          return sortGroups(groupSums[a], groupSums[b]);
	        });
	      }
	      if (sortSubgroups) {
	        subgroupIndex.forEach(function(d, i) {
	          d.sort(function(a, b) {
	            return sortSubgroups(matrix[i][a], matrix[i][b]);
	          });
	        });
	      }
	      k = (τ - padding * n) / k;
	      x = 0, i = -1;
	      while (++i < n) {
	        x0 = x, j = -1;
	        while (++j < n) {
	          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
	          subgroups[di + "-" + dj] = {
	            index: di,
	            subindex: dj,
	            startAngle: a0,
	            endAngle: a1,
	            value: v
	          };
	        }
	        groups[di] = {
	          index: di,
	          startAngle: x0,
	          endAngle: x,
	          value: groupSums[di]
	        };
	        x += padding;
	      }
	      i = -1;
	      while (++i < n) {
	        j = i - 1;
	        while (++j < n) {
	          var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
	          if (source.value || target.value) {
	            chords.push(source.value < target.value ? {
	              source: target,
	              target: source
	            } : {
	              source: source,
	              target: target
	            });
	          }
	        }
	      }
	      if (sortChords) resort();
	    }
	    function resort() {
	      chords.sort(function(a, b) {
	        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
	      });
	    }
	    chord.matrix = function(x) {
	      if (!arguments.length) return matrix;
	      n = (matrix = x) && matrix.length;
	      chords = groups = null;
	      return chord;
	    };
	    chord.padding = function(x) {
	      if (!arguments.length) return padding;
	      padding = x;
	      chords = groups = null;
	      return chord;
	    };
	    chord.sortGroups = function(x) {
	      if (!arguments.length) return sortGroups;
	      sortGroups = x;
	      chords = groups = null;
	      return chord;
	    };
	    chord.sortSubgroups = function(x) {
	      if (!arguments.length) return sortSubgroups;
	      sortSubgroups = x;
	      chords = null;
	      return chord;
	    };
	    chord.sortChords = function(x) {
	      if (!arguments.length) return sortChords;
	      sortChords = x;
	      if (chords) resort();
	      return chord;
	    };
	    chord.chords = function() {
	      if (!chords) relayout();
	      return chords;
	    };
	    chord.groups = function() {
	      if (!groups) relayout();
	      return groups;
	    };
	    return chord;
	  };
	  d3.layout.force = function() {
	    var force = {}, event = d3.dispatch("start", "tick", "end"), timer, size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, chargeDistance2 = d3_layout_forceChargeDistance2, gravity = .1, theta2 = .64, nodes = [], links = [], distances, strengths, charges;
	    function repulse(node) {
	      return function(quad, x1, _, x2) {
	        if (quad.point !== node) {
	          var dx = quad.cx - node.x, dy = quad.cy - node.y, dw = x2 - x1, dn = dx * dx + dy * dy;
	          if (dw * dw / theta2 < dn) {
	            if (dn < chargeDistance2) {
	              var k = quad.charge / dn;
	              node.px -= dx * k;
	              node.py -= dy * k;
	            }
	            return true;
	          }
	          if (quad.point && dn && dn < chargeDistance2) {
	            var k = quad.pointCharge / dn;
	            node.px -= dx * k;
	            node.py -= dy * k;
	          }
	        }
	        return !quad.charge;
	      };
	    }
	    force.tick = function() {
	      if ((alpha *= .99) < .005) {
	        timer = null;
	        event.end({
	          type: "end",
	          alpha: alpha = 0
	        });
	        return true;
	      }
	      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
	      for (i = 0; i < m; ++i) {
	        o = links[i];
	        s = o.source;
	        t = o.target;
	        x = t.x - s.x;
	        y = t.y - s.y;
	        if (l = x * x + y * y) {
	          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
	          x *= l;
	          y *= l;
	          t.x -= x * (k = s.weight + t.weight ? s.weight / (s.weight + t.weight) : .5);
	          t.y -= y * k;
	          s.x += x * (k = 1 - k);
	          s.y += y * k;
	        }
	      }
	      if (k = alpha * gravity) {
	        x = size[0] / 2;
	        y = size[1] / 2;
	        i = -1;
	        if (k) while (++i < n) {
	          o = nodes[i];
	          o.x += (x - o.x) * k;
	          o.y += (y - o.y) * k;
	        }
	      }
	      if (charge) {
	        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
	        i = -1;
	        while (++i < n) {
	          if (!(o = nodes[i]).fixed) {
	            q.visit(repulse(o));
	          }
	        }
	      }
	      i = -1;
	      while (++i < n) {
	        o = nodes[i];
	        if (o.fixed) {
	          o.x = o.px;
	          o.y = o.py;
	        } else {
	          o.x -= (o.px - (o.px = o.x)) * friction;
	          o.y -= (o.py - (o.py = o.y)) * friction;
	        }
	      }
	      event.tick({
	        type: "tick",
	        alpha: alpha
	      });
	    };
	    force.nodes = function(x) {
	      if (!arguments.length) return nodes;
	      nodes = x;
	      return force;
	    };
	    force.links = function(x) {
	      if (!arguments.length) return links;
	      links = x;
	      return force;
	    };
	    force.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return force;
	    };
	    force.linkDistance = function(x) {
	      if (!arguments.length) return linkDistance;
	      linkDistance = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.distance = force.linkDistance;
	    force.linkStrength = function(x) {
	      if (!arguments.length) return linkStrength;
	      linkStrength = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.friction = function(x) {
	      if (!arguments.length) return friction;
	      friction = +x;
	      return force;
	    };
	    force.charge = function(x) {
	      if (!arguments.length) return charge;
	      charge = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.chargeDistance = function(x) {
	      if (!arguments.length) return Math.sqrt(chargeDistance2);
	      chargeDistance2 = x * x;
	      return force;
	    };
	    force.gravity = function(x) {
	      if (!arguments.length) return gravity;
	      gravity = +x;
	      return force;
	    };
	    force.theta = function(x) {
	      if (!arguments.length) return Math.sqrt(theta2);
	      theta2 = x * x;
	      return force;
	    };
	    force.alpha = function(x) {
	      if (!arguments.length) return alpha;
	      x = +x;
	      if (alpha) {
	        if (x > 0) {
	          alpha = x;
	        } else {
	          timer.c = null, timer.t = NaN, timer = null;
	          event.end({
	            type: "end",
	            alpha: alpha = 0
	          });
	        }
	      } else if (x > 0) {
	        event.start({
	          type: "start",
	          alpha: alpha = x
	        });
	        timer = d3_timer(force.tick);
	      }
	      return force;
	    };
	    force.start = function() {
	      var i, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
	      for (i = 0; i < n; ++i) {
	        (o = nodes[i]).index = i;
	        o.weight = 0;
	      }
	      for (i = 0; i < m; ++i) {
	        o = links[i];
	        if (typeof o.source == "number") o.source = nodes[o.source];
	        if (typeof o.target == "number") o.target = nodes[o.target];
	        ++o.source.weight;
	        ++o.target.weight;
	      }
	      for (i = 0; i < n; ++i) {
	        o = nodes[i];
	        if (isNaN(o.x)) o.x = position("x", w);
	        if (isNaN(o.y)) o.y = position("y", h);
	        if (isNaN(o.px)) o.px = o.x;
	        if (isNaN(o.py)) o.py = o.y;
	      }
	      distances = [];
	      if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
	      strengths = [];
	      if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
	      charges = [];
	      if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
	      function position(dimension, size) {
	        if (!neighbors) {
	          neighbors = new Array(n);
	          for (j = 0; j < n; ++j) {
	            neighbors[j] = [];
	          }
	          for (j = 0; j < m; ++j) {
	            var o = links[j];
	            neighbors[o.source.index].push(o.target);
	            neighbors[o.target.index].push(o.source);
	          }
	        }
	        var candidates = neighbors[i], j = -1, l = candidates.length, x;
	        while (++j < l) if (!isNaN(x = candidates[j][dimension])) return x;
	        return Math.random() * size;
	      }
	      return force.resume();
	    };
	    force.resume = function() {
	      return force.alpha(.1);
	    };
	    force.stop = function() {
	      return force.alpha(0);
	    };
	    force.drag = function() {
	      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
	      if (!arguments.length) return drag;
	      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
	    };
	    function dragmove(d) {
	      d.px = d3.event.x, d.py = d3.event.y;
	      force.resume();
	    }
	    return d3.rebind(force, event, "on");
	  };
	  function d3_layout_forceDragstart(d) {
	    d.fixed |= 2;
	  }
	  function d3_layout_forceDragend(d) {
	    d.fixed &= ~6;
	  }
	  function d3_layout_forceMouseover(d) {
	    d.fixed |= 4;
	    d.px = d.x, d.py = d.y;
	  }
	  function d3_layout_forceMouseout(d) {
	    d.fixed &= ~4;
	  }
	  function d3_layout_forceAccumulate(quad, alpha, charges) {
	    var cx = 0, cy = 0;
	    quad.charge = 0;
	    if (!quad.leaf) {
	      var nodes = quad.nodes, n = nodes.length, i = -1, c;
	      while (++i < n) {
	        c = nodes[i];
	        if (c == null) continue;
	        d3_layout_forceAccumulate(c, alpha, charges);
	        quad.charge += c.charge;
	        cx += c.charge * c.cx;
	        cy += c.charge * c.cy;
	      }
	    }
	    if (quad.point) {
	      if (!quad.leaf) {
	        quad.point.x += Math.random() - .5;
	        quad.point.y += Math.random() - .5;
	      }
	      var k = alpha * charges[quad.point.index];
	      quad.charge += quad.pointCharge = k;
	      cx += k * quad.point.x;
	      cy += k * quad.point.y;
	    }
	    quad.cx = cx / quad.charge;
	    quad.cy = cy / quad.charge;
	  }
	  var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1, d3_layout_forceChargeDistance2 = Infinity;
	  d3.layout.hierarchy = function() {
	    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
	    function hierarchy(root) {
	      var stack = [ root ], nodes = [], node;
	      root.depth = 0;
	      while ((node = stack.pop()) != null) {
	        nodes.push(node);
	        if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
	          var n, childs, child;
	          while (--n >= 0) {
	            stack.push(child = childs[n]);
	            child.parent = node;
	            child.depth = node.depth + 1;
	          }
	          if (value) node.value = 0;
	          node.children = childs;
	        } else {
	          if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
	          delete node.children;
	        }
	      }
	      d3_layout_hierarchyVisitAfter(root, function(node) {
	        var childs, parent;
	        if (sort && (childs = node.children)) childs.sort(sort);
	        if (value && (parent = node.parent)) parent.value += node.value;
	      });
	      return nodes;
	    }
	    hierarchy.sort = function(x) {
	      if (!arguments.length) return sort;
	      sort = x;
	      return hierarchy;
	    };
	    hierarchy.children = function(x) {
	      if (!arguments.length) return children;
	      children = x;
	      return hierarchy;
	    };
	    hierarchy.value = function(x) {
	      if (!arguments.length) return value;
	      value = x;
	      return hierarchy;
	    };
	    hierarchy.revalue = function(root) {
	      if (value) {
	        d3_layout_hierarchyVisitBefore(root, function(node) {
	          if (node.children) node.value = 0;
	        });
	        d3_layout_hierarchyVisitAfter(root, function(node) {
	          var parent;
	          if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
	          if (parent = node.parent) parent.value += node.value;
	        });
	      }
	      return root;
	    };
	    return hierarchy;
	  };
	  function d3_layout_hierarchyRebind(object, hierarchy) {
	    d3.rebind(object, hierarchy, "sort", "children", "value");
	    object.nodes = object;
	    object.links = d3_layout_hierarchyLinks;
	    return object;
	  }
	  function d3_layout_hierarchyVisitBefore(node, callback) {
	    var nodes = [ node ];
	    while ((node = nodes.pop()) != null) {
	      callback(node);
	      if ((children = node.children) && (n = children.length)) {
	        var n, children;
	        while (--n >= 0) nodes.push(children[n]);
	      }
	    }
	  }
	  function d3_layout_hierarchyVisitAfter(node, callback) {
	    var nodes = [ node ], nodes2 = [];
	    while ((node = nodes.pop()) != null) {
	      nodes2.push(node);
	      if ((children = node.children) && (n = children.length)) {
	        var i = -1, n, children;
	        while (++i < n) nodes.push(children[i]);
	      }
	    }
	    while ((node = nodes2.pop()) != null) {
	      callback(node);
	    }
	  }
	  function d3_layout_hierarchyChildren(d) {
	    return d.children;
	  }
	  function d3_layout_hierarchyValue(d) {
	    return d.value;
	  }
	  function d3_layout_hierarchySort(a, b) {
	    return b.value - a.value;
	  }
	  function d3_layout_hierarchyLinks(nodes) {
	    return d3.merge(nodes.map(function(parent) {
	      return (parent.children || []).map(function(child) {
	        return {
	          source: parent,
	          target: child
	        };
	      });
	    }));
	  }
	  d3.layout.partition = function() {
	    var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
	    function position(node, x, dx, dy) {
	      var children = node.children;
	      node.x = x;
	      node.y = node.depth * dy;
	      node.dx = dx;
	      node.dy = dy;
	      if (children && (n = children.length)) {
	        var i = -1, n, c, d;
	        dx = node.value ? dx / node.value : 0;
	        while (++i < n) {
	          position(c = children[i], x, d = c.value * dx, dy);
	          x += d;
	        }
	      }
	    }
	    function depth(node) {
	      var children = node.children, d = 0;
	      if (children && (n = children.length)) {
	        var i = -1, n;
	        while (++i < n) d = Math.max(d, depth(children[i]));
	      }
	      return 1 + d;
	    }
	    function partition(d, i) {
	      var nodes = hierarchy.call(this, d, i);
	      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
	      return nodes;
	    }
	    partition.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return partition;
	    };
	    return d3_layout_hierarchyRebind(partition, hierarchy);
	  };
	  d3.layout.pie = function() {
	    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = τ, padAngle = 0;
	    function pie(data) {
	      var n = data.length, values = data.map(function(d, i) {
	        return +value.call(pie, d, i);
	      }), a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle), da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a, p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)), pa = p * (da < 0 ? -1 : 1), sum = d3.sum(values), k = sum ? (da - n * pa) / sum : 0, index = d3.range(n), arcs = [], v;
	      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
	        return values[j] - values[i];
	      } : function(i, j) {
	        return sort(data[i], data[j]);
	      });
	      index.forEach(function(i) {
	        arcs[i] = {
	          data: data[i],
	          value: v = values[i],
	          startAngle: a,
	          endAngle: a += v * k + pa,
	          padAngle: p
	        };
	      });
	      return arcs;
	    }
	    pie.value = function(_) {
	      if (!arguments.length) return value;
	      value = _;
	      return pie;
	    };
	    pie.sort = function(_) {
	      if (!arguments.length) return sort;
	      sort = _;
	      return pie;
	    };
	    pie.startAngle = function(_) {
	      if (!arguments.length) return startAngle;
	      startAngle = _;
	      return pie;
	    };
	    pie.endAngle = function(_) {
	      if (!arguments.length) return endAngle;
	      endAngle = _;
	      return pie;
	    };
	    pie.padAngle = function(_) {
	      if (!arguments.length) return padAngle;
	      padAngle = _;
	      return pie;
	    };
	    return pie;
	  };
	  var d3_layout_pieSortByValue = {};
	  d3.layout.stack = function() {
	    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
	    function stack(data, index) {
	      if (!(n = data.length)) return data;
	      var series = data.map(function(d, i) {
	        return values.call(stack, d, i);
	      });
	      var points = series.map(function(d) {
	        return d.map(function(v, i) {
	          return [ x.call(stack, v, i), y.call(stack, v, i) ];
	        });
	      });
	      var orders = order.call(stack, points, index);
	      series = d3.permute(series, orders);
	      points = d3.permute(points, orders);
	      var offsets = offset.call(stack, points, index);
	      var m = series[0].length, n, i, j, o;
	      for (j = 0; j < m; ++j) {
	        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
	        for (i = 1; i < n; ++i) {
	          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
	        }
	      }
	      return data;
	    }
	    stack.values = function(x) {
	      if (!arguments.length) return values;
	      values = x;
	      return stack;
	    };
	    stack.order = function(x) {
	      if (!arguments.length) return order;
	      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
	      return stack;
	    };
	    stack.offset = function(x) {
	      if (!arguments.length) return offset;
	      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
	      return stack;
	    };
	    stack.x = function(z) {
	      if (!arguments.length) return x;
	      x = z;
	      return stack;
	    };
	    stack.y = function(z) {
	      if (!arguments.length) return y;
	      y = z;
	      return stack;
	    };
	    stack.out = function(z) {
	      if (!arguments.length) return out;
	      out = z;
	      return stack;
	    };
	    return stack;
	  };
	  function d3_layout_stackX(d) {
	    return d.x;
	  }
	  function d3_layout_stackY(d) {
	    return d.y;
	  }
	  function d3_layout_stackOut(d, y0, y) {
	    d.y0 = y0;
	    d.y = y;
	  }
	  var d3_layout_stackOrders = d3.map({
	    "inside-out": function(data) {
	      var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
	        return max[a] - max[b];
	      }), top = 0, bottom = 0, tops = [], bottoms = [];
	      for (i = 0; i < n; ++i) {
	        j = index[i];
	        if (top < bottom) {
	          top += sums[j];
	          tops.push(j);
	        } else {
	          bottom += sums[j];
	          bottoms.push(j);
	        }
	      }
	      return bottoms.reverse().concat(tops);
	    },
	    reverse: function(data) {
	      return d3.range(data.length).reverse();
	    },
	    "default": d3_layout_stackOrderDefault
	  });
	  var d3_layout_stackOffsets = d3.map({
	    silhouette: function(data) {
	      var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
	      for (j = 0; j < m; ++j) {
	        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
	        if (o > max) max = o;
	        sums.push(o);
	      }
	      for (j = 0; j < m; ++j) {
	        y0[j] = (max - sums[j]) / 2;
	      }
	      return y0;
	    },
	    wiggle: function(data) {
	      var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
	      y0[0] = o = o0 = 0;
	      for (j = 1; j < m; ++j) {
	        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
	        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
	          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
	            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
	          }
	          s2 += s3 * data[i][j][1];
	        }
	        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
	        if (o < o0) o0 = o;
	      }
	      for (j = 0; j < m; ++j) y0[j] -= o0;
	      return y0;
	    },
	    expand: function(data) {
	      var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
	      for (j = 0; j < m; ++j) {
	        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
	        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
	      }
	      for (j = 0; j < m; ++j) y0[j] = 0;
	      return y0;
	    },
	    zero: d3_layout_stackOffsetZero
	  });
	  function d3_layout_stackOrderDefault(data) {
	    return d3.range(data.length);
	  }
	  function d3_layout_stackOffsetZero(data) {
	    var j = -1, m = data[0].length, y0 = [];
	    while (++j < m) y0[j] = 0;
	    return y0;
	  }
	  function d3_layout_stackMaxIndex(array) {
	    var i = 1, j = 0, v = array[0][1], k, n = array.length;
	    for (;i < n; ++i) {
	      if ((k = array[i][1]) > v) {
	        j = i;
	        v = k;
	      }
	    }
	    return j;
	  }
	  function d3_layout_stackReduceSum(d) {
	    return d.reduce(d3_layout_stackSum, 0);
	  }
	  function d3_layout_stackSum(p, d) {
	    return p + d[1];
	  }
	  d3.layout.histogram = function() {
	    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
	    function histogram(data, i) {
	      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
	      while (++i < m) {
	        bin = bins[i] = [];
	        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
	        bin.y = 0;
	      }
	      if (m > 0) {
	        i = -1;
	        while (++i < n) {
	          x = values[i];
	          if (x >= range[0] && x <= range[1]) {
	            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
	            bin.y += k;
	            bin.push(data[i]);
	          }
	        }
	      }
	      return bins;
	    }
	    histogram.value = function(x) {
	      if (!arguments.length) return valuer;
	      valuer = x;
	      return histogram;
	    };
	    histogram.range = function(x) {
	      if (!arguments.length) return ranger;
	      ranger = d3_functor(x);
	      return histogram;
	    };
	    histogram.bins = function(x) {
	      if (!arguments.length) return binner;
	      binner = typeof x === "number" ? function(range) {
	        return d3_layout_histogramBinFixed(range, x);
	      } : d3_functor(x);
	      return histogram;
	    };
	    histogram.frequency = function(x) {
	      if (!arguments.length) return frequency;
	      frequency = !!x;
	      return histogram;
	    };
	    return histogram;
	  };
	  function d3_layout_histogramBinSturges(range, values) {
	    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
	  }
	  function d3_layout_histogramBinFixed(range, n) {
	    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
	    while (++x <= n) f[x] = m * x + b;
	    return f;
	  }
	  function d3_layout_histogramRange(values) {
	    return [ d3.min(values), d3.max(values) ];
	  }
	  d3.layout.pack = function() {
	    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ], radius;
	    function pack(d, i) {
	      var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size[0], h = size[1], r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
	        return radius;
	      };
	      root.x = root.y = 0;
	      d3_layout_hierarchyVisitAfter(root, function(d) {
	        d.r = +r(d.value);
	      });
	      d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
	      if (padding) {
	        var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
	        d3_layout_hierarchyVisitAfter(root, function(d) {
	          d.r += dr;
	        });
	        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
	        d3_layout_hierarchyVisitAfter(root, function(d) {
	          d.r -= dr;
	        });
	      }
	      d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
	      return nodes;
	    }
	    pack.size = function(_) {
	      if (!arguments.length) return size;
	      size = _;
	      return pack;
	    };
	    pack.radius = function(_) {
	      if (!arguments.length) return radius;
	      radius = _ == null || typeof _ === "function" ? _ : +_;
	      return pack;
	    };
	    pack.padding = function(_) {
	      if (!arguments.length) return padding;
	      padding = +_;
	      return pack;
	    };
	    return d3_layout_hierarchyRebind(pack, hierarchy);
	  };
	  function d3_layout_packSort(a, b) {
	    return a.value - b.value;
	  }
	  function d3_layout_packInsert(a, b) {
	    var c = a._pack_next;
	    a._pack_next = b;
	    b._pack_prev = a;
	    b._pack_next = c;
	    c._pack_prev = b;
	  }
	  function d3_layout_packSplice(a, b) {
	    a._pack_next = b;
	    b._pack_prev = a;
	  }
	  function d3_layout_packIntersects(a, b) {
	    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
	    return .999 * dr * dr > dx * dx + dy * dy;
	  }
	  function d3_layout_packSiblings(node) {
	    if (!(nodes = node.children) || !(n = nodes.length)) return;
	    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
	    function bound(node) {
	      xMin = Math.min(node.x - node.r, xMin);
	      xMax = Math.max(node.x + node.r, xMax);
	      yMin = Math.min(node.y - node.r, yMin);
	      yMax = Math.max(node.y + node.r, yMax);
	    }
	    nodes.forEach(d3_layout_packLink);
	    a = nodes[0];
	    a.x = -a.r;
	    a.y = 0;
	    bound(a);
	    if (n > 1) {
	      b = nodes[1];
	      b.x = b.r;
	      b.y = 0;
	      bound(b);
	      if (n > 2) {
	        c = nodes[2];
	        d3_layout_packPlace(a, b, c);
	        bound(c);
	        d3_layout_packInsert(a, c);
	        a._pack_prev = c;
	        d3_layout_packInsert(c, b);
	        b = a._pack_next;
	        for (i = 3; i < n; i++) {
	          d3_layout_packPlace(a, b, c = nodes[i]);
	          var isect = 0, s1 = 1, s2 = 1;
	          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
	            if (d3_layout_packIntersects(j, c)) {
	              isect = 1;
	              break;
	            }
	          }
	          if (isect == 1) {
	            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
	              if (d3_layout_packIntersects(k, c)) {
	                break;
	              }
	            }
	          }
	          if (isect) {
	            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
	            i--;
	          } else {
	            d3_layout_packInsert(a, c);
	            b = c;
	            bound(c);
	          }
	        }
	      }
	    }
	    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
	    for (i = 0; i < n; i++) {
	      c = nodes[i];
	      c.x -= cx;
	      c.y -= cy;
	      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
	    }
	    node.r = cr;
	    nodes.forEach(d3_layout_packUnlink);
	  }
	  function d3_layout_packLink(node) {
	    node._pack_next = node._pack_prev = node;
	  }
	  function d3_layout_packUnlink(node) {
	    delete node._pack_next;
	    delete node._pack_prev;
	  }
	  function d3_layout_packTransform(node, x, y, k) {
	    var children = node.children;
	    node.x = x += k * node.x;
	    node.y = y += k * node.y;
	    node.r *= k;
	    if (children) {
	      var i = -1, n = children.length;
	      while (++i < n) d3_layout_packTransform(children[i], x, y, k);
	    }
	  }
	  function d3_layout_packPlace(a, b, c) {
	    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
	    if (db && (dx || dy)) {
	      var da = b.r + c.r, dc = dx * dx + dy * dy;
	      da *= da;
	      db *= db;
	      var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
	      c.x = a.x + x * dx + y * dy;
	      c.y = a.y + x * dy - y * dx;
	    } else {
	      c.x = a.x + db;
	      c.y = a.y;
	    }
	  }
	  d3.layout.tree = function() {
	    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = null;
	    function tree(d, i) {
	      var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);
	      d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
	      d3_layout_hierarchyVisitBefore(root1, secondWalk);
	      if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode); else {
	        var left = root0, right = root0, bottom = root0;
	        d3_layout_hierarchyVisitBefore(root0, function(node) {
	          if (node.x < left.x) left = node;
	          if (node.x > right.x) right = node;
	          if (node.depth > bottom.depth) bottom = node;
	        });
	        var tx = separation(left, right) / 2 - left.x, kx = size[0] / (right.x + separation(right, left) / 2 + tx), ky = size[1] / (bottom.depth || 1);
	        d3_layout_hierarchyVisitBefore(root0, function(node) {
	          node.x = (node.x + tx) * kx;
	          node.y = node.depth * ky;
	        });
	      }
	      return nodes;
	    }
	    function wrapTree(root0) {
	      var root1 = {
	        A: null,
	        children: [ root0 ]
	      }, queue = [ root1 ], node1;
	      while ((node1 = queue.pop()) != null) {
	        for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {
	          queue.push((children[i] = child = {
	            _: children[i],
	            parent: node1,
	            children: (child = children[i].children) && child.slice() || [],
	            A: null,
	            a: null,
	            z: 0,
	            m: 0,
	            c: 0,
	            s: 0,
	            t: null,
	            i: i
	          }).a = child);
	        }
	      }
	      return root1.children[0];
	    }
	    function firstWalk(v) {
	      var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
	      if (children.length) {
	        d3_layout_treeShift(v);
	        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
	        if (w) {
	          v.z = w.z + separation(v._, w._);
	          v.m = v.z - midpoint;
	        } else {
	          v.z = midpoint;
	        }
	      } else if (w) {
	        v.z = w.z + separation(v._, w._);
	      }
	      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
	    }
	    function secondWalk(v) {
	      v._.x = v.z + v.parent.m;
	      v.m += v.parent.m;
	    }
	    function apportion(v, w, ancestor) {
	      if (w) {
	        var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
	        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
	          vom = d3_layout_treeLeft(vom);
	          vop = d3_layout_treeRight(vop);
	          vop.a = v;
	          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
	          if (shift > 0) {
	            d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
	            sip += shift;
	            sop += shift;
	          }
	          sim += vim.m;
	          sip += vip.m;
	          som += vom.m;
	          sop += vop.m;
	        }
	        if (vim && !d3_layout_treeRight(vop)) {
	          vop.t = vim;
	          vop.m += sim - sop;
	        }
	        if (vip && !d3_layout_treeLeft(vom)) {
	          vom.t = vip;
	          vom.m += sip - som;
	          ancestor = v;
	        }
	      }
	      return ancestor;
	    }
	    function sizeNode(node) {
	      node.x *= size[0];
	      node.y = node.depth * size[1];
	    }
	    tree.separation = function(x) {
	      if (!arguments.length) return separation;
	      separation = x;
	      return tree;
	    };
	    tree.size = function(x) {
	      if (!arguments.length) return nodeSize ? null : size;
	      nodeSize = (size = x) == null ? sizeNode : null;
	      return tree;
	    };
	    tree.nodeSize = function(x) {
	      if (!arguments.length) return nodeSize ? size : null;
	      nodeSize = (size = x) == null ? null : sizeNode;
	      return tree;
	    };
	    return d3_layout_hierarchyRebind(tree, hierarchy);
	  };
	  function d3_layout_treeSeparation(a, b) {
	    return a.parent == b.parent ? 1 : 2;
	  }
	  function d3_layout_treeLeft(v) {
	    var children = v.children;
	    return children.length ? children[0] : v.t;
	  }
	  function d3_layout_treeRight(v) {
	    var children = v.children, n;
	    return (n = children.length) ? children[n - 1] : v.t;
	  }
	  function d3_layout_treeMove(wm, wp, shift) {
	    var change = shift / (wp.i - wm.i);
	    wp.c -= change;
	    wp.s += shift;
	    wm.c += change;
	    wp.z += shift;
	    wp.m += shift;
	  }
	  function d3_layout_treeShift(v) {
	    var shift = 0, change = 0, children = v.children, i = children.length, w;
	    while (--i >= 0) {
	      w = children[i];
	      w.z += shift;
	      w.m += shift;
	      shift += w.s + (change += w.c);
	    }
	  }
	  function d3_layout_treeAncestor(vim, v, ancestor) {
	    return vim.a.parent === v.parent ? vim.a : ancestor;
	  }
	  d3.layout.cluster = function() {
	    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = false;
	    function cluster(d, i) {
	      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
	      d3_layout_hierarchyVisitAfter(root, function(node) {
	        var children = node.children;
	        if (children && children.length) {
	          node.x = d3_layout_clusterX(children);
	          node.y = d3_layout_clusterY(children);
	        } else {
	          node.x = previousNode ? x += separation(node, previousNode) : 0;
	          node.y = 0;
	          previousNode = node;
	        }
	      });
	      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
	      d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
	        node.x = (node.x - root.x) * size[0];
	        node.y = (root.y - node.y) * size[1];
	      } : function(node) {
	        node.x = (node.x - x0) / (x1 - x0) * size[0];
	        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
	      });
	      return nodes;
	    }
	    cluster.separation = function(x) {
	      if (!arguments.length) return separation;
	      separation = x;
	      return cluster;
	    };
	    cluster.size = function(x) {
	      if (!arguments.length) return nodeSize ? null : size;
	      nodeSize = (size = x) == null;
	      return cluster;
	    };
	    cluster.nodeSize = function(x) {
	      if (!arguments.length) return nodeSize ? size : null;
	      nodeSize = (size = x) != null;
	      return cluster;
	    };
	    return d3_layout_hierarchyRebind(cluster, hierarchy);
	  };
	  function d3_layout_clusterY(children) {
	    return 1 + d3.max(children, function(child) {
	      return child.y;
	    });
	  }
	  function d3_layout_clusterX(children) {
	    return children.reduce(function(x, child) {
	      return x + child.x;
	    }, 0) / children.length;
	  }
	  function d3_layout_clusterLeft(node) {
	    var children = node.children;
	    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
	  }
	  function d3_layout_clusterRight(node) {
	    var children = node.children, n;
	    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
	  }
	  d3.layout.treemap = function() {
	    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
	    function scale(children, k) {
	      var i = -1, n = children.length, child, area;
	      while (++i < n) {
	        area = (child = children[i]).value * (k < 0 ? 0 : k);
	        child.area = isNaN(area) || area <= 0 ? 0 : area;
	      }
	    }
	    function squarify(node) {
	      var children = node.children;
	      if (children && children.length) {
	        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
	        scale(remaining, rect.dx * rect.dy / node.value);
	        row.area = 0;
	        while ((n = remaining.length) > 0) {
	          row.push(child = remaining[n - 1]);
	          row.area += child.area;
	          if (mode !== "squarify" || (score = worst(row, u)) <= best) {
	            remaining.pop();
	            best = score;
	          } else {
	            row.area -= row.pop().area;
	            position(row, u, rect, false);
	            u = Math.min(rect.dx, rect.dy);
	            row.length = row.area = 0;
	            best = Infinity;
	          }
	        }
	        if (row.length) {
	          position(row, u, rect, true);
	          row.length = row.area = 0;
	        }
	        children.forEach(squarify);
	      }
	    }
	    function stickify(node) {
	      var children = node.children;
	      if (children && children.length) {
	        var rect = pad(node), remaining = children.slice(), child, row = [];
	        scale(remaining, rect.dx * rect.dy / node.value);
	        row.area = 0;
	        while (child = remaining.pop()) {
	          row.push(child);
	          row.area += child.area;
	          if (child.z != null) {
	            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
	            row.length = row.area = 0;
	          }
	        }
	        children.forEach(stickify);
	      }
	    }
	    function worst(row, u) {
	      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
	      while (++i < n) {
	        if (!(r = row[i].area)) continue;
	        if (r < rmin) rmin = r;
	        if (r > rmax) rmax = r;
	      }
	      s *= s;
	      u *= u;
	      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
	    }
	    function position(row, u, rect, flush) {
	      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
	      if (u == rect.dx) {
	        if (flush || v > rect.dy) v = rect.dy;
	        while (++i < n) {
	          o = row[i];
	          o.x = x;
	          o.y = y;
	          o.dy = v;
	          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
	        }
	        o.z = true;
	        o.dx += rect.x + rect.dx - x;
	        rect.y += v;
	        rect.dy -= v;
	      } else {
	        if (flush || v > rect.dx) v = rect.dx;
	        while (++i < n) {
	          o = row[i];
	          o.x = x;
	          o.y = y;
	          o.dx = v;
	          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
	        }
	        o.z = false;
	        o.dy += rect.y + rect.dy - y;
	        rect.x += v;
	        rect.dx -= v;
	      }
	    }
	    function treemap(d) {
	      var nodes = stickies || hierarchy(d), root = nodes[0];
	      root.x = root.y = 0;
	      if (root.value) root.dx = size[0], root.dy = size[1]; else root.dx = root.dy = 0;
	      if (stickies) hierarchy.revalue(root);
	      scale([ root ], root.dx * root.dy / root.value);
	      (stickies ? stickify : squarify)(root);
	      if (sticky) stickies = nodes;
	      return nodes;
	    }
	    treemap.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return treemap;
	    };
	    treemap.padding = function(x) {
	      if (!arguments.length) return padding;
	      function padFunction(node) {
	        var p = x.call(treemap, node, node.depth);
	        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
	      }
	      function padConstant(node) {
	        return d3_layout_treemapPad(node, x);
	      }
	      var type;
	      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], padConstant) : padConstant;
	      return treemap;
	    };
	    treemap.round = function(x) {
	      if (!arguments.length) return round != Number;
	      round = x ? Math.round : Number;
	      return treemap;
	    };
	    treemap.sticky = function(x) {
	      if (!arguments.length) return sticky;
	      sticky = x;
	      stickies = null;
	      return treemap;
	    };
	    treemap.ratio = function(x) {
	      if (!arguments.length) return ratio;
	      ratio = x;
	      return treemap;
	    };
	    treemap.mode = function(x) {
	      if (!arguments.length) return mode;
	      mode = x + "";
	      return treemap;
	    };
	    return d3_layout_hierarchyRebind(treemap, hierarchy);
	  };
	  function d3_layout_treemapPadNull(node) {
	    return {
	      x: node.x,
	      y: node.y,
	      dx: node.dx,
	      dy: node.dy
	    };
	  }
	  function d3_layout_treemapPad(node, padding) {
	    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
	    if (dx < 0) {
	      x += dx / 2;
	      dx = 0;
	    }
	    if (dy < 0) {
	      y += dy / 2;
	      dy = 0;
	    }
	    return {
	      x: x,
	      y: y,
	      dx: dx,
	      dy: dy
	    };
	  }
	  d3.random = {
	    normal: function(µ, σ) {
	      var n = arguments.length;
	      if (n < 2) σ = 1;
	      if (n < 1) µ = 0;
	      return function() {
	        var x, y, r;
	        do {
	          x = Math.random() * 2 - 1;
	          y = Math.random() * 2 - 1;
	          r = x * x + y * y;
	        } while (!r || r > 1);
	        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
	      };
	    },
	    logNormal: function() {
	      var random = d3.random.normal.apply(d3, arguments);
	      return function() {
	        return Math.exp(random());
	      };
	    },
	    bates: function(m) {
	      var random = d3.random.irwinHall(m);
	      return function() {
	        return random() / m;
	      };
	    },
	    irwinHall: function(m) {
	      return function() {
	        for (var s = 0, j = 0; j < m; j++) s += Math.random();
	        return s;
	      };
	    }
	  };
	  d3.scale = {};
	  function d3_scaleExtent(domain) {
	    var start = domain[0], stop = domain[domain.length - 1];
	    return start < stop ? [ start, stop ] : [ stop, start ];
	  }
	  function d3_scaleRange(scale) {
	    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
	  }
	  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
	    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
	    return function(x) {
	      return i(u(x));
	    };
	  }
	  function d3_scale_nice(domain, nice) {
	    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
	    if (x1 < x0) {
	      dx = i0, i0 = i1, i1 = dx;
	      dx = x0, x0 = x1, x1 = dx;
	    }
	    domain[i0] = nice.floor(x0);
	    domain[i1] = nice.ceil(x1);
	    return domain;
	  }
	  function d3_scale_niceStep(step) {
	    return step ? {
	      floor: function(x) {
	        return Math.floor(x / step) * step;
	      },
	      ceil: function(x) {
	        return Math.ceil(x / step) * step;
	      }
	    } : d3_scale_niceIdentity;
	  }
	  var d3_scale_niceIdentity = {
	    floor: d3_identity,
	    ceil: d3_identity
	  };
	  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
	    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
	    if (domain[k] < domain[0]) {
	      domain = domain.slice().reverse();
	      range = range.slice().reverse();
	    }
	    while (++j <= k) {
	      u.push(uninterpolate(domain[j - 1], domain[j]));
	      i.push(interpolate(range[j - 1], range[j]));
	    }
	    return function(x) {
	      var j = d3.bisect(domain, x, 1, k) - 1;
	      return i[j](u[j](x));
	    };
	  }
	  d3.scale.linear = function() {
	    return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3_interpolate, false);
	  };
	  function d3_scale_linear(domain, range, interpolate, clamp) {
	    var output, input;
	    function rescale() {
	      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
	      output = linear(domain, range, uninterpolate, interpolate);
	      input = linear(range, domain, uninterpolate, d3_interpolate);
	      return scale;
	    }
	    function scale(x) {
	      return output(x);
	    }
	    scale.invert = function(y) {
	      return input(y);
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(Number);
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.rangeRound = function(x) {
	      return scale.range(x).interpolate(d3_interpolateRound);
	    };
	    scale.clamp = function(x) {
	      if (!arguments.length) return clamp;
	      clamp = x;
	      return rescale();
	    };
	    scale.interpolate = function(x) {
	      if (!arguments.length) return interpolate;
	      interpolate = x;
	      return rescale();
	    };
	    scale.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    scale.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    scale.nice = function(m) {
	      d3_scale_linearNice(domain, m);
	      return rescale();
	    };
	    scale.copy = function() {
	      return d3_scale_linear(domain, range, interpolate, clamp);
	    };
	    return rescale();
	  }
	  function d3_scale_linearRebind(scale, linear) {
	    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
	  }
	  function d3_scale_linearNice(domain, m) {
	    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
	    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
	    return domain;
	  }
	  function d3_scale_linearTickRange(domain, m) {
	    if (m == null) m = 10;
	    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
	    if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
	    extent[0] = Math.ceil(extent[0] / step) * step;
	    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
	    extent[2] = step;
	    return extent;
	  }
	  function d3_scale_linearTicks(domain, m) {
	    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
	  }
	  function d3_scale_linearTickFormat(domain, m, format) {
	    var range = d3_scale_linearTickRange(domain, m);
	    if (format) {
	      var match = d3_format_re.exec(format);
	      match.shift();
	      if (match[8] === "s") {
	        var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
	        if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
	        match[8] = "f";
	        format = d3.format(match.join(""));
	        return function(d) {
	          return format(prefix.scale(d)) + prefix.symbol;
	        };
	      }
	      if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
	      format = match.join("");
	    } else {
	      format = ",." + d3_scale_linearPrecision(range[2]) + "f";
	    }
	    return d3.format(format);
	  }
	  var d3_scale_linearFormatSignificant = {
	    s: 1,
	    g: 1,
	    p: 1,
	    r: 1,
	    e: 1
	  };
	  function d3_scale_linearPrecision(value) {
	    return -Math.floor(Math.log(value) / Math.LN10 + .01);
	  }
	  function d3_scale_linearFormatPrecision(type, range) {
	    var p = d3_scale_linearPrecision(range[2]);
	    return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
	  }
	  d3.scale.log = function() {
	    return d3_scale_log(d3.scale.linear().domain([ 0, 1 ]), 10, true, [ 1, 10 ]);
	  };
	  function d3_scale_log(linear, base, positive, domain) {
	    function log(x) {
	      return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
	    }
	    function pow(x) {
	      return positive ? Math.pow(base, x) : -Math.pow(base, -x);
	    }
	    function scale(x) {
	      return linear(log(x));
	    }
	    scale.invert = function(x) {
	      return pow(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      positive = x[0] >= 0;
	      linear.domain((domain = x.map(Number)).map(log));
	      return scale;
	    };
	    scale.base = function(_) {
	      if (!arguments.length) return base;
	      base = +_;
	      linear.domain(domain.map(log));
	      return scale;
	    };
	    scale.nice = function() {
	      var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
	      linear.domain(niced);
	      domain = niced.map(pow);
	      return scale;
	    };
	    scale.ticks = function() {
	      var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log(u)), j = Math.ceil(log(v)), n = base % 1 ? 2 : base;
	      if (isFinite(j - i)) {
	        if (positive) {
	          for (;i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow(i) * k);
	          ticks.push(pow(i));
	        } else {
	          ticks.push(pow(i));
	          for (;i++ < j; ) for (var k = n - 1; k > 0; k--) ticks.push(pow(i) * k);
	        }
	        for (i = 0; ticks[i] < u; i++) {}
	        for (j = ticks.length; ticks[j - 1] > v; j--) {}
	        ticks = ticks.slice(i, j);
	      }
	      return ticks;
	    };
	    scale.tickFormat = function(n, format) {
	      if (!arguments.length) return d3_scale_logFormat;
	      if (arguments.length < 2) format = d3_scale_logFormat; else if (typeof format !== "function") format = d3.format(format);
	      var k = Math.max(1, base * n / scale.ticks().length);
	      return function(d) {
	        var i = d / pow(Math.round(log(d)));
	        if (i * base < base - .5) i *= base;
	        return i <= k ? format(d) : "";
	      };
	    };
	    scale.copy = function() {
	      return d3_scale_log(linear.copy(), base, positive, domain);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  var d3_scale_logFormat = d3.format(".0e"), d3_scale_logNiceNegative = {
	    floor: function(x) {
	      return -Math.ceil(-x);
	    },
	    ceil: function(x) {
	      return -Math.floor(-x);
	    }
	  };
	  d3.scale.pow = function() {
	    return d3_scale_pow(d3.scale.linear(), 1, [ 0, 1 ]);
	  };
	  function d3_scale_pow(linear, exponent, domain) {
	    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
	    function scale(x) {
	      return linear(powp(x));
	    }
	    scale.invert = function(x) {
	      return powb(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      linear.domain((domain = x.map(Number)).map(powp));
	      return scale;
	    };
	    scale.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    scale.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    scale.nice = function(m) {
	      return scale.domain(d3_scale_linearNice(domain, m));
	    };
	    scale.exponent = function(x) {
	      if (!arguments.length) return exponent;
	      powp = d3_scale_powPow(exponent = x);
	      powb = d3_scale_powPow(1 / exponent);
	      linear.domain(domain.map(powp));
	      return scale;
	    };
	    scale.copy = function() {
	      return d3_scale_pow(linear.copy(), exponent, domain);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  function d3_scale_powPow(e) {
	    return function(x) {
	      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
	    };
	  }
	  d3.scale.sqrt = function() {
	    return d3.scale.pow().exponent(.5);
	  };
	  d3.scale.ordinal = function() {
	    return d3_scale_ordinal([], {
	      t: "range",
	      a: [ [] ]
	    });
	  };
	  function d3_scale_ordinal(domain, ranger) {
	    var index, range, rangeBand;
	    function scale(x) {
	      return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
	    }
	    function steps(start, step) {
	      return d3.range(domain.length).map(function(i) {
	        return start + step * i;
	      });
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = [];
	      index = new d3_Map();
	      var i = -1, n = x.length, xi;
	      while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
	      return scale[ranger.t].apply(scale, ranger.a);
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      rangeBand = 0;
	      ranger = {
	        t: "range",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangePoints = function(x, padding) {
	      if (arguments.length < 2) padding = 0;
	      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = (start + stop) / 2, 0) : (stop - start) / (domain.length - 1 + padding);
	      range = steps(start + step * padding / 2, step);
	      rangeBand = 0;
	      ranger = {
	        t: "rangePoints",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeRoundPoints = function(x, padding) {
	      if (arguments.length < 2) padding = 0;
	      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 0) : (stop - start) / (domain.length - 1 + padding) | 0;
	      range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
	      rangeBand = 0;
	      ranger = {
	        t: "rangeRoundPoints",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeBands = function(x, padding, outerPadding) {
	      if (arguments.length < 2) padding = 0;
	      if (arguments.length < 3) outerPadding = padding;
	      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
	      range = steps(start + step * outerPadding, step);
	      if (reverse) range.reverse();
	      rangeBand = step * (1 - padding);
	      ranger = {
	        t: "rangeBands",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeRoundBands = function(x, padding, outerPadding) {
	      if (arguments.length < 2) padding = 0;
	      if (arguments.length < 3) outerPadding = padding;
	      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
	      range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
	      if (reverse) range.reverse();
	      rangeBand = Math.round(step * (1 - padding));
	      ranger = {
	        t: "rangeRoundBands",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeBand = function() {
	      return rangeBand;
	    };
	    scale.rangeExtent = function() {
	      return d3_scaleExtent(ranger.a[0]);
	    };
	    scale.copy = function() {
	      return d3_scale_ordinal(domain, ranger);
	    };
	    return scale.domain(domain);
	  }
	  d3.scale.category10 = function() {
	    return d3.scale.ordinal().range(d3_category10);
	  };
	  d3.scale.category20 = function() {
	    return d3.scale.ordinal().range(d3_category20);
	  };
	  d3.scale.category20b = function() {
	    return d3.scale.ordinal().range(d3_category20b);
	  };
	  d3.scale.category20c = function() {
	    return d3.scale.ordinal().range(d3_category20c);
	  };
	  var d3_category10 = [ 2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175 ].map(d3_rgbString);
	  var d3_category20 = [ 2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725 ].map(d3_rgbString);
	  var d3_category20b = [ 3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654 ].map(d3_rgbString);
	  var d3_category20c = [ 3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081 ].map(d3_rgbString);
	  d3.scale.quantile = function() {
	    return d3_scale_quantile([], []);
	  };
	  function d3_scale_quantile(domain, range) {
	    var thresholds;
	    function rescale() {
	      var k = 0, q = range.length;
	      thresholds = [];
	      while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
	      return scale;
	    }
	    function scale(x) {
	      if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)];
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.quantiles = function() {
	      return thresholds;
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      return y < 0 ? [ NaN, NaN ] : [ y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1] ];
	    };
	    scale.copy = function() {
	      return d3_scale_quantile(domain, range);
	    };
	    return rescale();
	  }
	  d3.scale.quantize = function() {
	    return d3_scale_quantize(0, 1, [ 0, 1 ]);
	  };
	  function d3_scale_quantize(x0, x1, range) {
	    var kx, i;
	    function scale(x) {
	      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
	    }
	    function rescale() {
	      kx = range.length / (x1 - x0);
	      i = range.length - 1;
	      return scale;
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return [ x0, x1 ];
	      x0 = +x[0];
	      x1 = +x[x.length - 1];
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      y = y < 0 ? NaN : y / kx + x0;
	      return [ y, y + 1 / kx ];
	    };
	    scale.copy = function() {
	      return d3_scale_quantize(x0, x1, range);
	    };
	    return rescale();
	  }
	  d3.scale.threshold = function() {
	    return d3_scale_threshold([ .5 ], [ 0, 1 ]);
	  };
	  function d3_scale_threshold(domain, range) {
	    function scale(x) {
	      if (x <= x) return range[d3.bisect(domain, x)];
	    }
	    scale.domain = function(_) {
	      if (!arguments.length) return domain;
	      domain = _;
	      return scale;
	    };
	    scale.range = function(_) {
	      if (!arguments.length) return range;
	      range = _;
	      return scale;
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      return [ domain[y - 1], domain[y] ];
	    };
	    scale.copy = function() {
	      return d3_scale_threshold(domain, range);
	    };
	    return scale;
	  }
	  d3.scale.identity = function() {
	    return d3_scale_identity([ 0, 1 ]);
	  };
	  function d3_scale_identity(domain) {
	    function identity(x) {
	      return +x;
	    }
	    identity.invert = identity;
	    identity.domain = identity.range = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(identity);
	      return identity;
	    };
	    identity.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    identity.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    identity.copy = function() {
	      return d3_scale_identity(domain);
	    };
	    return identity;
	  }
	  d3.svg = {};
	  function d3_zero() {
	    return 0;
	  }
	  d3.svg.arc = function() {
	    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, cornerRadius = d3_zero, padRadius = d3_svg_arcAuto, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle, padAngle = d3_svg_arcPadAngle;
	    function arc() {
	      var r0 = Math.max(0, +innerRadius.apply(this, arguments)), r1 = Math.max(0, +outerRadius.apply(this, arguments)), a0 = startAngle.apply(this, arguments) - halfπ, a1 = endAngle.apply(this, arguments) - halfπ, da = Math.abs(a1 - a0), cw = a0 > a1 ? 0 : 1;
	      if (r1 < r0) rc = r1, r1 = r0, r0 = rc;
	      if (da >= τε) return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
	      var rc, cr, rp, ap, p0 = 0, p1 = 0, x0, y0, x1, y1, x2, y2, x3, y3, path = [];
	      if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
	        rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
	        if (!cw) p1 *= -1;
	        if (r1) p1 = d3_asin(rp / r1 * Math.sin(ap));
	        if (r0) p0 = d3_asin(rp / r0 * Math.sin(ap));
	      }
	      if (r1) {
	        x0 = r1 * Math.cos(a0 + p1);
	        y0 = r1 * Math.sin(a0 + p1);
	        x1 = r1 * Math.cos(a1 - p1);
	        y1 = r1 * Math.sin(a1 - p1);
	        var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
	        if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
	          var h1 = (a0 + a1) / 2;
	          x0 = r1 * Math.cos(h1);
	          y0 = r1 * Math.sin(h1);
	          x1 = y1 = null;
	        }
	      } else {
	        x0 = y0 = 0;
	      }
	      if (r0) {
	        x2 = r0 * Math.cos(a1 - p0);
	        y2 = r0 * Math.sin(a1 - p0);
	        x3 = r0 * Math.cos(a0 + p0);
	        y3 = r0 * Math.sin(a0 + p0);
	        var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
	        if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
	          var h0 = (a0 + a1) / 2;
	          x2 = r0 * Math.cos(h0);
	          y2 = r0 * Math.sin(h0);
	          x3 = y3 = null;
	        }
	      } else {
	        x2 = y2 = 0;
	      }
	      if (da > ε && (rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
	        cr = r0 < r1 ^ cw ? 0 : 1;
	        var rc1 = rc, rc0 = rc;
	        if (da < π) {
	          var oc = x3 == null ? [ x2, y2 ] : x1 == null ? [ x0, y0 ] : d3_geom_polygonIntersect([ x0, y0 ], [ x3, y3 ], [ x1, y1 ], [ x2, y2 ]), ax = x0 - oc[0], ay = y0 - oc[1], bx = x1 - oc[0], by = y1 - oc[1], kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2), lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
	          rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
	          rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
	        }
	        if (x1 != null) {
	          var t30 = d3_svg_arcCornerTangents(x3 == null ? [ x2, y2 ] : [ x3, y3 ], [ x0, y0 ], r1, rc1, cw), t12 = d3_svg_arcCornerTangents([ x1, y1 ], [ x2, y2 ], r1, rc1, cw);
	          if (rc === rc1) {
	            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
	          } else {
	            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
	          }
	        } else {
	          path.push("M", x0, ",", y0);
	        }
	        if (x3 != null) {
	          var t03 = d3_svg_arcCornerTangents([ x0, y0 ], [ x3, y3 ], r0, -rc0, cw), t21 = d3_svg_arcCornerTangents([ x2, y2 ], x1 == null ? [ x0, y0 ] : [ x1, y1 ], r0, -rc0, cw);
	          if (rc === rc0) {
	            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
	          } else {
	            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
	          }
	        } else {
	          path.push("L", x2, ",", y2);
	        }
	      } else {
	        path.push("M", x0, ",", y0);
	        if (x1 != null) path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
	        path.push("L", x2, ",", y2);
	        if (x3 != null) path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
	      }
	      path.push("Z");
	      return path.join("");
	    }
	    function circleSegment(r1, cw) {
	      return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
	    }
	    arc.innerRadius = function(v) {
	      if (!arguments.length) return innerRadius;
	      innerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.outerRadius = function(v) {
	      if (!arguments.length) return outerRadius;
	      outerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.cornerRadius = function(v) {
	      if (!arguments.length) return cornerRadius;
	      cornerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.padRadius = function(v) {
	      if (!arguments.length) return padRadius;
	      padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
	      return arc;
	    };
	    arc.startAngle = function(v) {
	      if (!arguments.length) return startAngle;
	      startAngle = d3_functor(v);
	      return arc;
	    };
	    arc.endAngle = function(v) {
	      if (!arguments.length) return endAngle;
	      endAngle = d3_functor(v);
	      return arc;
	    };
	    arc.padAngle = function(v) {
	      if (!arguments.length) return padAngle;
	      padAngle = d3_functor(v);
	      return arc;
	    };
	    arc.centroid = function() {
	      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
	      return [ Math.cos(a) * r, Math.sin(a) * r ];
	    };
	    return arc;
	  };
	  var d3_svg_arcAuto = "auto";
	  function d3_svg_arcInnerRadius(d) {
	    return d.innerRadius;
	  }
	  function d3_svg_arcOuterRadius(d) {
	    return d.outerRadius;
	  }
	  function d3_svg_arcStartAngle(d) {
	    return d.startAngle;
	  }
	  function d3_svg_arcEndAngle(d) {
	    return d.endAngle;
	  }
	  function d3_svg_arcPadAngle(d) {
	    return d && d.padAngle;
	  }
	  function d3_svg_arcSweep(x0, y0, x1, y1) {
	    return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
	  }
	  function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
	    var x01 = p0[0] - p1[0], y01 = p0[1] - p1[1], lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x1 = p0[0] + ox, y1 = p0[1] + oy, x2 = p1[0] + ox, y2 = p1[1] + oy, x3 = (x1 + x2) / 2, y3 = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, d2 = dx * dx + dy * dy, r = r1 - rc, D = x1 * y2 - x2 * y1, d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x3, dy0 = cy0 - y3, dx1 = cx1 - x3, dy1 = cy1 - y3;
	    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
	    return [ [ cx0 - ox, cy0 - oy ], [ cx0 * r1 / r, cy0 * r1 / r ] ];
	  }
	  function d3_svg_line(projection) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
	    function line(data) {
	      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
	      function segment() {
	        segments.push("M", interpolate(projection(points), tension));
	      }
	      while (++i < n) {
	        if (defined.call(this, d = data[i], i)) {
	          points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
	        } else if (points.length) {
	          segment();
	          points = [];
	        }
	      }
	      if (points.length) segment();
	      return segments.length ? segments.join("") : null;
	    }
	    line.x = function(_) {
	      if (!arguments.length) return x;
	      x = _;
	      return line;
	    };
	    line.y = function(_) {
	      if (!arguments.length) return y;
	      y = _;
	      return line;
	    };
	    line.defined = function(_) {
	      if (!arguments.length) return defined;
	      defined = _;
	      return line;
	    };
	    line.interpolate = function(_) {
	      if (!arguments.length) return interpolateKey;
	      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
	      return line;
	    };
	    line.tension = function(_) {
	      if (!arguments.length) return tension;
	      tension = _;
	      return line;
	    };
	    return line;
	  }
	  d3.svg.line = function() {
	    return d3_svg_line(d3_identity);
	  };
	  var d3_svg_lineInterpolators = d3.map({
	    linear: d3_svg_lineLinear,
	    "linear-closed": d3_svg_lineLinearClosed,
	    step: d3_svg_lineStep,
	    "step-before": d3_svg_lineStepBefore,
	    "step-after": d3_svg_lineStepAfter,
	    basis: d3_svg_lineBasis,
	    "basis-open": d3_svg_lineBasisOpen,
	    "basis-closed": d3_svg_lineBasisClosed,
	    bundle: d3_svg_lineBundle,
	    cardinal: d3_svg_lineCardinal,
	    "cardinal-open": d3_svg_lineCardinalOpen,
	    "cardinal-closed": d3_svg_lineCardinalClosed,
	    monotone: d3_svg_lineMonotone
	  });
	  d3_svg_lineInterpolators.forEach(function(key, value) {
	    value.key = key;
	    value.closed = /-closed$/.test(key);
	  });
	  function d3_svg_lineLinear(points) {
	    return points.length > 1 ? points.join("L") : points + "Z";
	  }
	  function d3_svg_lineLinearClosed(points) {
	    return points.join("L") + "Z";
	  }
	  function d3_svg_lineStep(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
	    if (n > 1) path.push("H", p[0]);
	    return path.join("");
	  }
	  function d3_svg_lineStepBefore(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
	    return path.join("");
	  }
	  function d3_svg_lineStepAfter(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
	    return path.join("");
	  }
	  function d3_svg_lineCardinalOpen(points, tension) {
	    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
	  }
	  function d3_svg_lineCardinalClosed(points, tension) {
	    return points.length < 3 ? d3_svg_lineLinearClosed(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
	  }
	  function d3_svg_lineCardinal(points, tension) {
	    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
	  }
	  function d3_svg_lineHermite(points, tangents) {
	    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
	      return d3_svg_lineLinear(points);
	    }
	    var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
	    if (quad) {
	      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
	      p0 = points[1];
	      pi = 2;
	    }
	    if (tangents.length > 1) {
	      t = tangents[1];
	      p = points[pi];
	      pi++;
	      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
	      for (var i = 2; i < tangents.length; i++, pi++) {
	        p = points[pi];
	        t = tangents[i];
	        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
	      }
	    }
	    if (quad) {
	      var lp = points[pi];
	      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
	    }
	    return path;
	  }
	  function d3_svg_lineCardinalTangents(points, tension) {
	    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
	    while (++i < n) {
	      p0 = p1;
	      p1 = p2;
	      p2 = points[i];
	      tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
	    }
	    return tangents;
	  }
	  function d3_svg_lineBasis(points) {
	    if (points.length < 3) return d3_svg_lineLinear(points);
	    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
	    points.push(points[n - 1]);
	    while (++i <= n) {
	      pi = points[i];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    points.pop();
	    path.push("L", pi);
	    return path.join("");
	  }
	  function d3_svg_lineBasisOpen(points) {
	    if (points.length < 4) return d3_svg_lineLinear(points);
	    var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
	    while (++i < 3) {
	      pi = points[i];
	      px.push(pi[0]);
	      py.push(pi[1]);
	    }
	    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
	    --i;
	    while (++i < n) {
	      pi = points[i];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    return path.join("");
	  }
	  function d3_svg_lineBasisClosed(points) {
	    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
	    while (++i < 4) {
	      pi = points[i % n];
	      px.push(pi[0]);
	      py.push(pi[1]);
	    }
	    path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
	    --i;
	    while (++i < m) {
	      pi = points[i % n];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    return path.join("");
	  }
	  function d3_svg_lineBundle(points, tension) {
	    var n = points.length - 1;
	    if (n) {
	      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
	      while (++i <= n) {
	        p = points[i];
	        t = i / n;
	        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
	        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
	      }
	    }
	    return d3_svg_lineBasis(points);
	  }
	  function d3_svg_lineDot4(a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
	  }
	  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
	  function d3_svg_lineBasisBezier(path, x, y) {
	    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
	  }
	  function d3_svg_lineSlope(p0, p1) {
	    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
	  }
	  function d3_svg_lineFiniteDifferences(points) {
	    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
	    while (++i < j) {
	      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
	    }
	    m[i] = d;
	    return m;
	  }
	  function d3_svg_lineMonotoneTangents(points) {
	    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
	    while (++i < j) {
	      d = d3_svg_lineSlope(points[i], points[i + 1]);
	      if (abs(d) < ε) {
	        m[i] = m[i + 1] = 0;
	      } else {
	        a = m[i] / d;
	        b = m[i + 1] / d;
	        s = a * a + b * b;
	        if (s > 9) {
	          s = d * 3 / Math.sqrt(s);
	          m[i] = s * a;
	          m[i + 1] = s * b;
	        }
	      }
	    }
	    i = -1;
	    while (++i <= j) {
	      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
	      tangents.push([ s || 0, m[i] * s || 0 ]);
	    }
	    return tangents;
	  }
	  function d3_svg_lineMonotone(points) {
	    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
	  }
	  d3.svg.line.radial = function() {
	    var line = d3_svg_line(d3_svg_lineRadial);
	    line.radius = line.x, delete line.x;
	    line.angle = line.y, delete line.y;
	    return line;
	  };
	  function d3_svg_lineRadial(points) {
	    var point, i = -1, n = points.length, r, a;
	    while (++i < n) {
	      point = points[i];
	      r = point[0];
	      a = point[1] - halfπ;
	      point[0] = r * Math.cos(a);
	      point[1] = r * Math.sin(a);
	    }
	    return points;
	  }
	  function d3_svg_area(projection) {
	    var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
	    function area(data) {
	      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
	        return x;
	      } : d3_functor(x1), fy1 = y0 === y1 ? function() {
	        return y;
	      } : d3_functor(y1), x, y;
	      function segment() {
	        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
	      }
	      while (++i < n) {
	        if (defined.call(this, d = data[i], i)) {
	          points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
	          points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
	        } else if (points0.length) {
	          segment();
	          points0 = [];
	          points1 = [];
	        }
	      }
	      if (points0.length) segment();
	      return segments.length ? segments.join("") : null;
	    }
	    area.x = function(_) {
	      if (!arguments.length) return x1;
	      x0 = x1 = _;
	      return area;
	    };
	    area.x0 = function(_) {
	      if (!arguments.length) return x0;
	      x0 = _;
	      return area;
	    };
	    area.x1 = function(_) {
	      if (!arguments.length) return x1;
	      x1 = _;
	      return area;
	    };
	    area.y = function(_) {
	      if (!arguments.length) return y1;
	      y0 = y1 = _;
	      return area;
	    };
	    area.y0 = function(_) {
	      if (!arguments.length) return y0;
	      y0 = _;
	      return area;
	    };
	    area.y1 = function(_) {
	      if (!arguments.length) return y1;
	      y1 = _;
	      return area;
	    };
	    area.defined = function(_) {
	      if (!arguments.length) return defined;
	      defined = _;
	      return area;
	    };
	    area.interpolate = function(_) {
	      if (!arguments.length) return interpolateKey;
	      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
	      interpolateReverse = interpolate.reverse || interpolate;
	      L = interpolate.closed ? "M" : "L";
	      return area;
	    };
	    area.tension = function(_) {
	      if (!arguments.length) return tension;
	      tension = _;
	      return area;
	    };
	    return area;
	  }
	  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
	  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
	  d3.svg.area = function() {
	    return d3_svg_area(d3_identity);
	  };
	  d3.svg.area.radial = function() {
	    var area = d3_svg_area(d3_svg_lineRadial);
	    area.radius = area.x, delete area.x;
	    area.innerRadius = area.x0, delete area.x0;
	    area.outerRadius = area.x1, delete area.x1;
	    area.angle = area.y, delete area.y;
	    area.startAngle = area.y0, delete area.y0;
	    area.endAngle = area.y1, delete area.y1;
	    return area;
	  };
	  d3.svg.chord = function() {
	    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
	    function chord(d, i) {
	      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
	      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
	    }
	    function subgroup(self, f, d, i) {
	      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) - halfπ, a1 = endAngle.call(self, subgroup, i) - halfπ;
	      return {
	        r: r,
	        a0: a0,
	        a1: a1,
	        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
	        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
	      };
	    }
	    function equals(a, b) {
	      return a.a0 == b.a0 && a.a1 == b.a1;
	    }
	    function arc(r, p, a) {
	      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
	    }
	    function curve(r0, p0, r1, p1) {
	      return "Q 0,0 " + p1;
	    }
	    chord.radius = function(v) {
	      if (!arguments.length) return radius;
	      radius = d3_functor(v);
	      return chord;
	    };
	    chord.source = function(v) {
	      if (!arguments.length) return source;
	      source = d3_functor(v);
	      return chord;
	    };
	    chord.target = function(v) {
	      if (!arguments.length) return target;
	      target = d3_functor(v);
	      return chord;
	    };
	    chord.startAngle = function(v) {
	      if (!arguments.length) return startAngle;
	      startAngle = d3_functor(v);
	      return chord;
	    };
	    chord.endAngle = function(v) {
	      if (!arguments.length) return endAngle;
	      endAngle = d3_functor(v);
	      return chord;
	    };
	    return chord;
	  };
	  function d3_svg_chordRadius(d) {
	    return d.radius;
	  }
	  d3.svg.diagonal = function() {
	    var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
	    function diagonal(d, i) {
	      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
	        x: p0.x,
	        y: m
	      }, {
	        x: p3.x,
	        y: m
	      }, p3 ];
	      p = p.map(projection);
	      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
	    }
	    diagonal.source = function(x) {
	      if (!arguments.length) return source;
	      source = d3_functor(x);
	      return diagonal;
	    };
	    diagonal.target = function(x) {
	      if (!arguments.length) return target;
	      target = d3_functor(x);
	      return diagonal;
	    };
	    diagonal.projection = function(x) {
	      if (!arguments.length) return projection;
	      projection = x;
	      return diagonal;
	    };
	    return diagonal;
	  };
	  function d3_svg_diagonalProjection(d) {
	    return [ d.x, d.y ];
	  }
	  d3.svg.diagonal.radial = function() {
	    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
	    diagonal.projection = function(x) {
	      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
	    };
	    return diagonal;
	  };
	  function d3_svg_diagonalRadialProjection(projection) {
	    return function() {
	      var d = projection.apply(this, arguments), r = d[0], a = d[1] - halfπ;
	      return [ r * Math.cos(a), r * Math.sin(a) ];
	    };
	  }
	  d3.svg.symbol = function() {
	    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
	    function symbol(d, i) {
	      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
	    }
	    symbol.type = function(x) {
	      if (!arguments.length) return type;
	      type = d3_functor(x);
	      return symbol;
	    };
	    symbol.size = function(x) {
	      if (!arguments.length) return size;
	      size = d3_functor(x);
	      return symbol;
	    };
	    return symbol;
	  };
	  function d3_svg_symbolSize() {
	    return 64;
	  }
	  function d3_svg_symbolType() {
	    return "circle";
	  }
	  function d3_svg_symbolCircle(size) {
	    var r = Math.sqrt(size / π);
	    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
	  }
	  var d3_svg_symbols = d3.map({
	    circle: d3_svg_symbolCircle,
	    cross: function(size) {
	      var r = Math.sqrt(size / 5) / 2;
	      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
	    },
	    diamond: function(size) {
	      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
	      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
	    },
	    square: function(size) {
	      var r = Math.sqrt(size) / 2;
	      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
	    },
	    "triangle-down": function(size) {
	      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
	      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
	    },
	    "triangle-up": function(size) {
	      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
	      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
	    }
	  });
	  d3.svg.symbolTypes = d3_svg_symbols.keys();
	  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
	  d3_selectionPrototype.transition = function(name) {
	    var id = d3_transitionInheritId || ++d3_transitionId, ns = d3_transitionNamespace(name), subgroups = [], subgroup, node, transition = d3_transitionInherit || {
	      time: Date.now(),
	      ease: d3_ease_cubicInOut,
	      delay: 0,
	      duration: 250
	    };
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) d3_transitionNode(node, i, ns, id, transition);
	        subgroup.push(node);
	      }
	    }
	    return d3_transition(subgroups, ns, id);
	  };
	  d3_selectionPrototype.interrupt = function(name) {
	    return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
	  };
	  var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
	  function d3_selection_interruptNS(ns) {
	    return function() {
	      var lock, activeId, active;
	      if ((lock = this[ns]) && (active = lock[activeId = lock.active])) {
	        active.timer.c = null;
	        active.timer.t = NaN;
	        if (--lock.count) delete lock[activeId]; else delete this[ns];
	        lock.active += .5;
	        active.event && active.event.interrupt.call(this, this.__data__, active.index);
	      }
	    };
	  }
	  function d3_transition(groups, ns, id) {
	    d3_subclass(groups, d3_transitionPrototype);
	    groups.namespace = ns;
	    groups.id = id;
	    return groups;
	  }
	  var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
	  d3_transitionPrototype.call = d3_selectionPrototype.call;
	  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
	  d3_transitionPrototype.node = d3_selectionPrototype.node;
	  d3_transitionPrototype.size = d3_selectionPrototype.size;
	  d3.transition = function(selection, name) {
	    return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d3.selection().transition(selection);
	  };
	  d3.transition.prototype = d3_transitionPrototype;
	  d3_transitionPrototype.select = function(selector) {
	    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnode, node;
	    selector = d3_selection_selector(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
	          if ("__data__" in node) subnode.__data__ = node.__data__;
	          d3_transitionNode(subnode, i, ns, id, node[ns][id]);
	          subgroup.push(subnode);
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_transition(subgroups, ns, id);
	  };
	  d3_transitionPrototype.selectAll = function(selector) {
	    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnodes, node, subnode, transition;
	    selector = d3_selection_selectorAll(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          transition = node[ns][id];
	          subnodes = selector.call(node, node.__data__, i, j);
	          subgroups.push(subgroup = []);
	          for (var k = -1, o = subnodes.length; ++k < o; ) {
	            if (subnode = subnodes[k]) d3_transitionNode(subnode, k, ns, id, transition);
	            subgroup.push(subnode);
	          }
	        }
	      }
	    }
	    return d3_transition(subgroups, ns, id);
	  };
	  d3_transitionPrototype.filter = function(filter) {
	    var subgroups = [], subgroup, group, node;
	    if (typeof filter !== "function") filter = d3_selection_filter(filter);
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
	          subgroup.push(node);
	        }
	      }
	    }
	    return d3_transition(subgroups, this.namespace, this.id);
	  };
	  d3_transitionPrototype.tween = function(name, tween) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 2) return this.node()[ns][id].tween.get(name);
	    return d3_selection_each(this, tween == null ? function(node) {
	      node[ns][id].tween.remove(name);
	    } : function(node) {
	      node[ns][id].tween.set(name, tween);
	    });
	  };
	  function d3_transition_tween(groups, name, value, tween) {
	    var id = groups.id, ns = groups.namespace;
	    return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
	      node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
	    } : (value = tween(value), function(node) {
	      node[ns][id].tween.set(name, value);
	    }));
	  }
	  d3_transitionPrototype.attr = function(nameNS, value) {
	    if (arguments.length < 2) {
	      for (value in nameNS) this.attr(value, nameNS[value]);
	      return this;
	    }
	    var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d3.ns.qualify(nameNS);
	    function attrNull() {
	      this.removeAttribute(name);
	    }
	    function attrNullNS() {
	      this.removeAttributeNS(name.space, name.local);
	    }
	    function attrTween(b) {
	      return b == null ? attrNull : (b += "", function() {
	        var a = this.getAttribute(name), i;
	        return a !== b && (i = interpolate(a, b), function(t) {
	          this.setAttribute(name, i(t));
	        });
	      });
	    }
	    function attrTweenNS(b) {
	      return b == null ? attrNullNS : (b += "", function() {
	        var a = this.getAttributeNS(name.space, name.local), i;
	        return a !== b && (i = interpolate(a, b), function(t) {
	          this.setAttributeNS(name.space, name.local, i(t));
	        });
	      });
	    }
	    return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
	  };
	  d3_transitionPrototype.attrTween = function(nameNS, tween) {
	    var name = d3.ns.qualify(nameNS);
	    function attrTween(d, i) {
	      var f = tween.call(this, d, i, this.getAttribute(name));
	      return f && function(t) {
	        this.setAttribute(name, f(t));
	      };
	    }
	    function attrTweenNS(d, i) {
	      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
	      return f && function(t) {
	        this.setAttributeNS(name.space, name.local, f(t));
	      };
	    }
	    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
	  };
	  d3_transitionPrototype.style = function(name, value, priority) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof name !== "string") {
	        if (n < 2) value = "";
	        for (priority in name) this.style(priority, name[priority], value);
	        return this;
	      }
	      priority = "";
	    }
	    function styleNull() {
	      this.style.removeProperty(name);
	    }
	    function styleString(b) {
	      return b == null ? styleNull : (b += "", function() {
	        var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name), i;
	        return a !== b && (i = d3_interpolate(a, b), function(t) {
	          this.style.setProperty(name, i(t), priority);
	        });
	      });
	    }
	    return d3_transition_tween(this, "style." + name, value, styleString);
	  };
	  d3_transitionPrototype.styleTween = function(name, tween, priority) {
	    if (arguments.length < 3) priority = "";
	    function styleTween(d, i) {
	      var f = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
	      return f && function(t) {
	        this.style.setProperty(name, f(t), priority);
	      };
	    }
	    return this.tween("style." + name, styleTween);
	  };
	  d3_transitionPrototype.text = function(value) {
	    return d3_transition_tween(this, "text", value, d3_transition_text);
	  };
	  function d3_transition_text(b) {
	    if (b == null) b = "";
	    return function() {
	      this.textContent = b;
	    };
	  }
	  d3_transitionPrototype.remove = function() {
	    var ns = this.namespace;
	    return this.each("end.transition", function() {
	      var p;
	      if (this[ns].count < 2 && (p = this.parentNode)) p.removeChild(this);
	    });
	  };
	  d3_transitionPrototype.ease = function(value) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 1) return this.node()[ns][id].ease;
	    if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
	    return d3_selection_each(this, function(node) {
	      node[ns][id].ease = value;
	    });
	  };
	  d3_transitionPrototype.delay = function(value) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 1) return this.node()[ns][id].delay;
	    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
	      node[ns][id].delay = +value.call(node, node.__data__, i, j);
	    } : (value = +value, function(node) {
	      node[ns][id].delay = value;
	    }));
	  };
	  d3_transitionPrototype.duration = function(value) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 1) return this.node()[ns][id].duration;
	    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
	      node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
	    } : (value = Math.max(1, value), function(node) {
	      node[ns][id].duration = value;
	    }));
	  };
	  d3_transitionPrototype.each = function(type, listener) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 2) {
	      var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
	      try {
	        d3_transitionInheritId = id;
	        d3_selection_each(this, function(node, i, j) {
	          d3_transitionInherit = node[ns][id];
	          type.call(node, node.__data__, i, j);
	        });
	      } finally {
	        d3_transitionInherit = inherit;
	        d3_transitionInheritId = inheritId;
	      }
	    } else {
	      d3_selection_each(this, function(node) {
	        var transition = node[ns][id];
	        (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener);
	      });
	    }
	    return this;
	  };
	  d3_transitionPrototype.transition = function() {
	    var id0 = this.id, id1 = ++d3_transitionId, ns = this.namespace, subgroups = [], subgroup, group, node, transition;
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        if (node = group[i]) {
	          transition = node[ns][id0];
	          d3_transitionNode(node, i, ns, id1, {
	            time: transition.time,
	            ease: transition.ease,
	            delay: transition.delay + transition.duration,
	            duration: transition.duration
	          });
	        }
	        subgroup.push(node);
	      }
	    }
	    return d3_transition(subgroups, ns, id1);
	  };
	  function d3_transitionNamespace(name) {
	    return name == null ? "__transition__" : "__transition_" + name + "__";
	  }
	  function d3_transitionNode(node, i, ns, id, inherit) {
	    var lock = node[ns] || (node[ns] = {
	      active: 0,
	      count: 0
	    }), transition = lock[id], time, timer, duration, ease, tweens;
	    function schedule(elapsed) {
	      var delay = transition.delay;
	      timer.t = delay + time;
	      if (delay <= elapsed) return start(elapsed - delay);
	      timer.c = start;
	    }
	    function start(elapsed) {
	      var activeId = lock.active, active = lock[activeId];
	      if (active) {
	        active.timer.c = null;
	        active.timer.t = NaN;
	        --lock.count;
	        delete lock[activeId];
	        active.event && active.event.interrupt.call(node, node.__data__, active.index);
	      }
	      for (var cancelId in lock) {
	        if (+cancelId < id) {
	          var cancel = lock[cancelId];
	          cancel.timer.c = null;
	          cancel.timer.t = NaN;
	          --lock.count;
	          delete lock[cancelId];
	        }
	      }
	      timer.c = tick;
	      d3_timer(function() {
	        if (timer.c && tick(elapsed || 1)) {
	          timer.c = null;
	          timer.t = NaN;
	        }
	        return 1;
	      }, 0, time);
	      lock.active = id;
	      transition.event && transition.event.start.call(node, node.__data__, i);
	      tweens = [];
	      transition.tween.forEach(function(key, value) {
	        if (value = value.call(node, node.__data__, i)) {
	          tweens.push(value);
	        }
	      });
	      ease = transition.ease;
	      duration = transition.duration;
	    }
	    function tick(elapsed) {
	      var t = elapsed / duration, e = ease(t), n = tweens.length;
	      while (n > 0) {
	        tweens[--n].call(node, e);
	      }
	      if (t >= 1) {
	        transition.event && transition.event.end.call(node, node.__data__, i);
	        if (--lock.count) delete lock[id]; else delete node[ns];
	        return 1;
	      }
	    }
	    if (!transition) {
	      time = inherit.time;
	      timer = d3_timer(schedule, 0, time);
	      transition = lock[id] = {
	        tween: new d3_Map(),
	        time: time,
	        timer: timer,
	        delay: inherit.delay,
	        duration: inherit.duration,
	        ease: inherit.ease,
	        index: i
	      };
	      inherit = null;
	      ++lock.count;
	    }
	  }
	  d3.svg.axis = function() {
	    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_;
	    function axis(g) {
	      g.each(function() {
	        var g = d3.select(this);
	        var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = scale.copy();
	        var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g.selectAll(".tick").data(ticks, scale1), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε), tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(), tickUpdate = d3.transition(tick.order()).style("opacity", 1), tickSpacing = Math.max(innerTickSize, 0) + tickPadding, tickTransform;
	        var range = d3_scaleRange(scale1), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"), d3.transition(path));
	        tickEnter.append("line");
	        tickEnter.append("text");
	        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text"), sign = orient === "top" || orient === "left" ? -1 : 1, x1, x2, y1, y2;
	        if (orient === "bottom" || orient === "top") {
	          tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
	          text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
	          pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
	        } else {
	          tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
	          text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
	          pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
	        }
	        lineEnter.attr(y2, sign * innerTickSize);
	        textEnter.attr(y1, sign * tickSpacing);
	        lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
	        textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
	        if (scale1.rangeBand) {
	          var x = scale1, dx = x.rangeBand() / 2;
	          scale0 = scale1 = function(d) {
	            return x(d) + dx;
	          };
	        } else if (scale0.rangeBand) {
	          scale0 = scale1;
	        } else {
	          tickExit.call(tickTransform, scale1, scale0);
	        }
	        tickEnter.call(tickTransform, scale0, scale1);
	        tickUpdate.call(tickTransform, scale1, scale1);
	      });
	    }
	    axis.scale = function(x) {
	      if (!arguments.length) return scale;
	      scale = x;
	      return axis;
	    };
	    axis.orient = function(x) {
	      if (!arguments.length) return orient;
	      orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
	      return axis;
	    };
	    axis.ticks = function() {
	      if (!arguments.length) return tickArguments_;
	      tickArguments_ = d3_array(arguments);
	      return axis;
	    };
	    axis.tickValues = function(x) {
	      if (!arguments.length) return tickValues;
	      tickValues = x;
	      return axis;
	    };
	    axis.tickFormat = function(x) {
	      if (!arguments.length) return tickFormat_;
	      tickFormat_ = x;
	      return axis;
	    };
	    axis.tickSize = function(x) {
	      var n = arguments.length;
	      if (!n) return innerTickSize;
	      innerTickSize = +x;
	      outerTickSize = +arguments[n - 1];
	      return axis;
	    };
	    axis.innerTickSize = function(x) {
	      if (!arguments.length) return innerTickSize;
	      innerTickSize = +x;
	      return axis;
	    };
	    axis.outerTickSize = function(x) {
	      if (!arguments.length) return outerTickSize;
	      outerTickSize = +x;
	      return axis;
	    };
	    axis.tickPadding = function(x) {
	      if (!arguments.length) return tickPadding;
	      tickPadding = +x;
	      return axis;
	    };
	    axis.tickSubdivide = function() {
	      return arguments.length && axis;
	    };
	    return axis;
	  };
	  var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
	    top: 1,
	    right: 1,
	    bottom: 1,
	    left: 1
	  };
	  function d3_svg_axisX(selection, x0, x1) {
	    selection.attr("transform", function(d) {
	      var v0 = x0(d);
	      return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
	    });
	  }
	  function d3_svg_axisY(selection, y0, y1) {
	    selection.attr("transform", function(d) {
	      var v0 = y0(d);
	      return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
	    });
	  }
	  d3.svg.brush = function() {
	    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, xExtent = [ 0, 0 ], yExtent = [ 0, 0 ], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
	    function brush(g) {
	      g.each(function() {
	        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
	        var background = g.selectAll(".background").data([ 0 ]);
	        background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
	        g.selectAll(".extent").data([ 0 ]).enter().append("rect").attr("class", "extent").style("cursor", "move");
	        var resize = g.selectAll(".resize").data(resizes, d3_identity);
	        resize.exit().remove();
	        resize.enter().append("g").attr("class", function(d) {
	          return "resize " + d;
	        }).style("cursor", function(d) {
	          return d3_svg_brushCursor[d];
	        }).append("rect").attr("x", function(d) {
	          return /[ew]$/.test(d) ? -3 : null;
	        }).attr("y", function(d) {
	          return /^[ns]/.test(d) ? -3 : null;
	        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
	        resize.style("display", brush.empty() ? "none" : null);
	        var gUpdate = d3.transition(g), backgroundUpdate = d3.transition(background), range;
	        if (x) {
	          range = d3_scaleRange(x);
	          backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
	          redrawX(gUpdate);
	        }
	        if (y) {
	          range = d3_scaleRange(y);
	          backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
	          redrawY(gUpdate);
	        }
	        redraw(gUpdate);
	      });
	    }
	    brush.event = function(g) {
	      g.each(function() {
	        var event_ = event.of(this, arguments), extent1 = {
	          x: xExtent,
	          y: yExtent,
	          i: xExtentDomain,
	          j: yExtentDomain
	        }, extent0 = this.__chart__ || extent1;
	        this.__chart__ = extent1;
	        if (d3_transitionInheritId) {
	          d3.select(this).transition().each("start.brush", function() {
	            xExtentDomain = extent0.i;
	            yExtentDomain = extent0.j;
	            xExtent = extent0.x;
	            yExtent = extent0.y;
	            event_({
	              type: "brushstart"
	            });
	          }).tween("brush:brush", function() {
	            var xi = d3_interpolateArray(xExtent, extent1.x), yi = d3_interpolateArray(yExtent, extent1.y);
	            xExtentDomain = yExtentDomain = null;
	            return function(t) {
	              xExtent = extent1.x = xi(t);
	              yExtent = extent1.y = yi(t);
	              event_({
	                type: "brush",
	                mode: "resize"
	              });
	            };
	          }).each("end.brush", function() {
	            xExtentDomain = extent1.i;
	            yExtentDomain = extent1.j;
	            event_({
	              type: "brush",
	              mode: "resize"
	            });
	            event_({
	              type: "brushend"
	            });
	          });
	        } else {
	          event_({
	            type: "brushstart"
	          });
	          event_({
	            type: "brush",
	            mode: "resize"
	          });
	          event_({
	            type: "brushend"
	          });
	        }
	      });
	    };
	    function redraw(g) {
	      g.selectAll(".resize").attr("transform", function(d) {
	        return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
	      });
	    }
	    function redrawX(g) {
	      g.select(".extent").attr("x", xExtent[0]);
	      g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
	    }
	    function redrawY(g) {
	      g.select(".extent").attr("y", yExtent[0]);
	      g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
	    }
	    function brushstart() {
	      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(target), center, origin = d3.mouse(target), offset;
	      var w = d3.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);
	      if (d3.event.changedTouches) {
	        w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
	      } else {
	        w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
	      }
	      g.interrupt().selectAll("*").interrupt();
	      if (dragging) {
	        origin[0] = xExtent[0] - origin[0];
	        origin[1] = yExtent[0] - origin[1];
	      } else if (resizing) {
	        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
	        offset = [ xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1] ];
	        origin[0] = xExtent[ex];
	        origin[1] = yExtent[ey];
	      } else if (d3.event.altKey) center = origin.slice();
	      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
	      d3.select("body").style("cursor", eventTarget.style("cursor"));
	      event_({
	        type: "brushstart"
	      });
	      brushmove();
	      function keydown() {
	        if (d3.event.keyCode == 32) {
	          if (!dragging) {
	            center = null;
	            origin[0] -= xExtent[1];
	            origin[1] -= yExtent[1];
	            dragging = 2;
	          }
	          d3_eventPreventDefault();
	        }
	      }
	      function keyup() {
	        if (d3.event.keyCode == 32 && dragging == 2) {
	          origin[0] += xExtent[1];
	          origin[1] += yExtent[1];
	          dragging = 0;
	          d3_eventPreventDefault();
	        }
	      }
	      function brushmove() {
	        var point = d3.mouse(target), moved = false;
	        if (offset) {
	          point[0] += offset[0];
	          point[1] += offset[1];
	        }
	        if (!dragging) {
	          if (d3.event.altKey) {
	            if (!center) center = [ (xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2 ];
	            origin[0] = xExtent[+(point[0] < center[0])];
	            origin[1] = yExtent[+(point[1] < center[1])];
	          } else center = null;
	        }
	        if (resizingX && move1(point, x, 0)) {
	          redrawX(g);
	          moved = true;
	        }
	        if (resizingY && move1(point, y, 1)) {
	          redrawY(g);
	          moved = true;
	        }
	        if (moved) {
	          redraw(g);
	          event_({
	            type: "brush",
	            mode: dragging ? "move" : "resize"
	          });
	        }
	      }
	      function move1(point, scale, i) {
	        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], extent = i ? yExtent : xExtent, size = extent[1] - extent[0], min, max;
	        if (dragging) {
	          r0 -= position;
	          r1 -= size + position;
	        }
	        min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
	        if (dragging) {
	          max = (min += position) + size;
	        } else {
	          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
	          if (position < min) {
	            max = min;
	            min = position;
	          } else {
	            max = position;
	          }
	        }
	        if (extent[0] != min || extent[1] != max) {
	          if (i) yExtentDomain = null; else xExtentDomain = null;
	          extent[0] = min;
	          extent[1] = max;
	          return true;
	        }
	      }
	      function brushend() {
	        brushmove();
	        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
	        d3.select("body").style("cursor", null);
	        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
	        dragRestore();
	        event_({
	          type: "brushend"
	        });
	      }
	    }
	    brush.x = function(z) {
	      if (!arguments.length) return x;
	      x = z;
	      resizes = d3_svg_brushResizes[!x << 1 | !y];
	      return brush;
	    };
	    brush.y = function(z) {
	      if (!arguments.length) return y;
	      y = z;
	      resizes = d3_svg_brushResizes[!x << 1 | !y];
	      return brush;
	    };
	    brush.clamp = function(z) {
	      if (!arguments.length) return x && y ? [ xClamp, yClamp ] : x ? xClamp : y ? yClamp : null;
	      if (x && y) xClamp = !!z[0], yClamp = !!z[1]; else if (x) xClamp = !!z; else if (y) yClamp = !!z;
	      return brush;
	    };
	    brush.extent = function(z) {
	      var x0, x1, y0, y1, t;
	      if (!arguments.length) {
	        if (x) {
	          if (xExtentDomain) {
	            x0 = xExtentDomain[0], x1 = xExtentDomain[1];
	          } else {
	            x0 = xExtent[0], x1 = xExtent[1];
	            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
	            if (x1 < x0) t = x0, x0 = x1, x1 = t;
	          }
	        }
	        if (y) {
	          if (yExtentDomain) {
	            y0 = yExtentDomain[0], y1 = yExtentDomain[1];
	          } else {
	            y0 = yExtent[0], y1 = yExtent[1];
	            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
	            if (y1 < y0) t = y0, y0 = y1, y1 = t;
	          }
	        }
	        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
	      }
	      if (x) {
	        x0 = z[0], x1 = z[1];
	        if (y) x0 = x0[0], x1 = x1[0];
	        xExtentDomain = [ x0, x1 ];
	        if (x.invert) x0 = x(x0), x1 = x(x1);
	        if (x1 < x0) t = x0, x0 = x1, x1 = t;
	        if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [ x0, x1 ];
	      }
	      if (y) {
	        y0 = z[0], y1 = z[1];
	        if (x) y0 = y0[1], y1 = y1[1];
	        yExtentDomain = [ y0, y1 ];
	        if (y.invert) y0 = y(y0), y1 = y(y1);
	        if (y1 < y0) t = y0, y0 = y1, y1 = t;
	        if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [ y0, y1 ];
	      }
	      return brush;
	    };
	    brush.clear = function() {
	      if (!brush.empty()) {
	        xExtent = [ 0, 0 ], yExtent = [ 0, 0 ];
	        xExtentDomain = yExtentDomain = null;
	      }
	      return brush;
	    };
	    brush.empty = function() {
	      return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
	    };
	    return d3.rebind(brush, event, "on");
	  };
	  var d3_svg_brushCursor = {
	    n: "ns-resize",
	    e: "ew-resize",
	    s: "ns-resize",
	    w: "ew-resize",
	    nw: "nwse-resize",
	    ne: "nesw-resize",
	    se: "nwse-resize",
	    sw: "nesw-resize"
	  };
	  var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
	  var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
	  var d3_time_formatUtc = d3_time_format.utc;
	  var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
	  d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
	  function d3_time_formatIsoNative(date) {
	    return date.toISOString();
	  }
	  d3_time_formatIsoNative.parse = function(string) {
	    var date = new Date(string);
	    return isNaN(date) ? null : date;
	  };
	  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
	  d3_time.second = d3_time_interval(function(date) {
	    return new d3_date(Math.floor(date / 1e3) * 1e3);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
	  }, function(date) {
	    return date.getSeconds();
	  });
	  d3_time.seconds = d3_time.second.range;
	  d3_time.seconds.utc = d3_time.second.utc.range;
	  d3_time.minute = d3_time_interval(function(date) {
	    return new d3_date(Math.floor(date / 6e4) * 6e4);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
	  }, function(date) {
	    return date.getMinutes();
	  });
	  d3_time.minutes = d3_time.minute.range;
	  d3_time.minutes.utc = d3_time.minute.utc.range;
	  d3_time.hour = d3_time_interval(function(date) {
	    var timezone = date.getTimezoneOffset() / 60;
	    return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
	  }, function(date) {
	    return date.getHours();
	  });
	  d3_time.hours = d3_time.hour.range;
	  d3_time.hours.utc = d3_time.hour.utc.range;
	  d3_time.month = d3_time_interval(function(date) {
	    date = d3_time.day(date);
	    date.setDate(1);
	    return date;
	  }, function(date, offset) {
	    date.setMonth(date.getMonth() + offset);
	  }, function(date) {
	    return date.getMonth();
	  });
	  d3_time.months = d3_time.month.range;
	  d3_time.months.utc = d3_time.month.utc.range;
	  function d3_time_scale(linear, methods, format) {
	    function scale(x) {
	      return linear(x);
	    }
	    scale.invert = function(x) {
	      return d3_time_scaleDate(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
	      linear.domain(x);
	      return scale;
	    };
	    function tickMethod(extent, count) {
	      var span = extent[1] - extent[0], target = span / count, i = d3.bisect(d3_time_scaleSteps, target);
	      return i == d3_time_scaleSteps.length ? [ methods.year, d3_scale_linearTickRange(extent.map(function(d) {
	        return d / 31536e6;
	      }), count)[2] ] : !i ? [ d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2] ] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
	    }
	    scale.nice = function(interval, skip) {
	      var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
	      if (method) interval = method[0], skip = method[1];
	      function skipped(date) {
	        return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
	      }
	      return scale.domain(d3_scale_nice(domain, skip > 1 ? {
	        floor: function(date) {
	          while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
	          return date;
	        },
	        ceil: function(date) {
	          while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate(+date + 1);
	          return date;
	        }
	      } : interval));
	    };
	    scale.ticks = function(interval, skip) {
	      var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [ {
	        range: interval
	      }, skip ];
	      if (method) interval = method[0], skip = method[1];
	      return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
	    };
	    scale.tickFormat = function() {
	      return format;
	    };
	    scale.copy = function() {
	      return d3_time_scale(linear.copy(), methods, format);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  function d3_time_scaleDate(t) {
	    return new Date(t);
	  }
	  var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
	  var d3_time_scaleLocalMethods = [ [ d3_time.second, 1 ], [ d3_time.second, 5 ], [ d3_time.second, 15 ], [ d3_time.second, 30 ], [ d3_time.minute, 1 ], [ d3_time.minute, 5 ], [ d3_time.minute, 15 ], [ d3_time.minute, 30 ], [ d3_time.hour, 1 ], [ d3_time.hour, 3 ], [ d3_time.hour, 6 ], [ d3_time.hour, 12 ], [ d3_time.day, 1 ], [ d3_time.day, 2 ], [ d3_time.week, 1 ], [ d3_time.month, 1 ], [ d3_time.month, 3 ], [ d3_time.year, 1 ] ];
	  var d3_time_scaleLocalFormat = d3_time_format.multi([ [ ".%L", function(d) {
	    return d.getMilliseconds();
	  } ], [ ":%S", function(d) {
	    return d.getSeconds();
	  } ], [ "%I:%M", function(d) {
	    return d.getMinutes();
	  } ], [ "%I %p", function(d) {
	    return d.getHours();
	  } ], [ "%a %d", function(d) {
	    return d.getDay() && d.getDate() != 1;
	  } ], [ "%b %d", function(d) {
	    return d.getDate() != 1;
	  } ], [ "%B", function(d) {
	    return d.getMonth();
	  } ], [ "%Y", d3_true ] ]);
	  var d3_time_scaleMilliseconds = {
	    range: function(start, stop, step) {
	      return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
	    },
	    floor: d3_identity,
	    ceil: d3_identity
	  };
	  d3_time_scaleLocalMethods.year = d3_time.year;
	  d3_time.scale = function() {
	    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
	  };
	  var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
	    return [ m[0].utc, m[1] ];
	  });
	  var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([ [ ".%L", function(d) {
	    return d.getUTCMilliseconds();
	  } ], [ ":%S", function(d) {
	    return d.getUTCSeconds();
	  } ], [ "%I:%M", function(d) {
	    return d.getUTCMinutes();
	  } ], [ "%I %p", function(d) {
	    return d.getUTCHours();
	  } ], [ "%a %d", function(d) {
	    return d.getUTCDay() && d.getUTCDate() != 1;
	  } ], [ "%b %d", function(d) {
	    return d.getUTCDate() != 1;
	  } ], [ "%B", function(d) {
	    return d.getUTCMonth();
	  } ], [ "%Y", d3_true ] ]);
	  d3_time_scaleUtcMethods.year = d3_time.year.utc;
	  d3_time.scale.utc = function() {
	    return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
	  };
	  d3.text = d3_xhrType(function(request) {
	    return request.responseText;
	  });
	  d3.json = function(url, callback) {
	    return d3_xhr(url, "application/json", d3_json, callback);
	  };
	  function d3_json(request) {
	    return JSON.parse(request.responseText);
	  }
	  d3.html = function(url, callback) {
	    return d3_xhr(url, "text/html", d3_html, callback);
	  };
	  function d3_html(request) {
	    var range = d3_document.createRange();
	    range.selectNode(d3_document.body);
	    return range.createContextualFragment(request.responseText);
	  }
	  d3.xml = d3_xhrType(function(request) {
	    return request.responseXML;
	  });
	  if (typeof undefined === "function" && undefined.amd) this.d3 = d3, undefined(d3); else if ('object' === "object" && module.exports) module.exports = d3; else this.d3 = d3;
	}();
	});

	/* @flow */

	/* @flow */

	/**
	 * Sort an array of numbers by their numeric value, ensuring that the
	 * array is not changed in place.
	 *
	 * This is necessary because the default behavior of .sort
	 * in JavaScript is to sort arrays as string values
	 *
	 *     [1, 10, 12, 102, 20].sort()
	 *     // output
	 *     [1, 10, 102, 12, 20]
	 *
	 * @param {Array<number>} x input array
	 * @return {Array<number>} sorted array
	 * @private
	 * @example
	 * numericSort([3, 2, 1]) // => [1, 2, 3]
	 */
	function numericSort(x /*: Array<number> */) /*: Array<number> */ {
	    return x
	        // ensure the array is not changed in-place
	        .slice()
	        // comparator function that treats input as numeric
	        .sort(function(a, b) {
	            return a - b;
	        });
	}

	/* @flow */

	/**
	 * For a sorted input, counting the number of unique values
	 * is possible in constant time and constant memory. This is
	 * a simple implementation of the algorithm.
	 *
	 * Values are compared with `===`, so objects and non-primitive objects
	 * are not handled in any special way.
	 *
	 * @param {Array<*>} x an array of any kind of value
	 * @returns {number} count of unique values
	 * @example
	 * uniqueCountSorted([1, 2, 3]); // => 3
	 * uniqueCountSorted([1, 1, 1]); // => 1
	 */
	function uniqueCountSorted(x/*: Array<any>*/)/*: number */ {
	    var uniqueValueCount = 0,
	        lastSeenValue;
	    for (var i = 0; i < x.length; i++) {
	        if (i === 0 || x[i] !== lastSeenValue) {
	            lastSeenValue = x[i];
	            uniqueValueCount++;
	        }
	    }
	    return uniqueValueCount;
	}

	/* @flow */

	/**
	 * Create a new column x row matrix.
	 *
	 * @private
	 * @param {number} columns
	 * @param {number} rows
	 * @return {Array<Array<number>>} matrix
	 * @example
	 * makeMatrix(10, 10);
	 */
	function makeMatrix(columns, rows) {
	    var matrix = [];
	    for (var i = 0; i < columns; i++) {
	        var column = [];
	        for (var j = 0; j < rows; j++) {
	            column.push(0);
	        }
	        matrix.push(column);
	    }
	    return matrix;
	}

	/**
	 * Generates incrementally computed values based on the sums and sums of
	 * squares for the data array
	 *
	 * @private
	 * @param {number} j
	 * @param {number} i
	 * @param {Array<number>} sums
	 * @param {Array<number>} sumsOfSquares
	 * @return {number}
	 * @example
	 * ssq(0, 1, [-1, 0, 2], [1, 1, 5]);
	 */
	function ssq(j, i, sums, sumsOfSquares) {
	    var sji; // s(j, i)
	    if (j > 0) {
	        var muji = (sums[i] - sums[j - 1]) / (i - j + 1); // mu(j, i)
	        sji = sumsOfSquares[i] - sumsOfSquares[j - 1] - (i - j + 1) * muji * muji;
	    } else {
	        sji = sumsOfSquares[i] - sums[i] * sums[i] / (i + 1);
	    }
	    if (sji < 0) {
	        return 0;
	    }
	    return sji;
	}

	/**
	 * Function that recursively divides and conquers computations
	 * for cluster j
	 *
	 * @private
	 * @param {number} iMin Minimum index in cluster to be computed
	 * @param {number} iMax Maximum index in cluster to be computed
	 * @param {number} cluster Index of the cluster currently being computed
	 * @param {Array<Array<number>>} matrix
	 * @param {Array<Array<number>>} backtrackMatrix
	 * @param {Array<number>} sums
	 * @param {Array<number>} sumsOfSquares
	 */
	function fillMatrixColumn(iMin, iMax, cluster, matrix, backtrackMatrix, sums, sumsOfSquares) {
	    if (iMin > iMax) {
	        return;
	    }

	    // Start at midpoint between iMin and iMax
	    var i = Math.floor((iMin + iMax) / 2);

	    matrix[cluster][i] = matrix[cluster - 1][i - 1];
	    backtrackMatrix[cluster][i] = i;

	    var jlow = cluster; // the lower end for j

	    if (iMin > cluster) {
	        jlow = Math.max(jlow, backtrackMatrix[cluster][iMin - 1] || 0);
	    }
	    jlow = Math.max(jlow, backtrackMatrix[cluster - 1][i] || 0);

	    var jhigh = i - 1; // the upper end for j
	    if (iMax < matrix.length - 1) {
	        jhigh = Math.min(jhigh, backtrackMatrix[cluster][iMax + 1] || 0);
	    }

	    var sji;
	    var sjlowi;
	    var ssqjlow;
	    var ssqj;
	    for (var j = jhigh; j >= jlow; --j) {
	        sji = ssq(j, i, sums, sumsOfSquares);

	        if (sji + matrix[cluster - 1][jlow - 1] >= matrix[cluster][i]) {
	            break;
	        }

	        // Examine the lower bound of the cluster border
	        sjlowi = ssq(jlow, i, sums, sumsOfSquares);

	        ssqjlow = sjlowi + matrix[cluster - 1][jlow - 1];

	        if (ssqjlow < matrix[cluster][i]) {
	            // Shrink the lower bound
	            matrix[cluster][i] = ssqjlow;
	            backtrackMatrix[cluster][i] = jlow;
	        }
	        jlow++;

	        ssqj = sji + matrix[cluster - 1][j - 1];
	        if (ssqj < matrix[cluster][i]) {
	            matrix[cluster][i] = ssqj;
	            backtrackMatrix[cluster][i] = j;
	        }
	    }

	    fillMatrixColumn(iMin, i - 1, cluster, matrix, backtrackMatrix, sums, sumsOfSquares);
	    fillMatrixColumn(i + 1, iMax, cluster, matrix, backtrackMatrix, sums, sumsOfSquares);
	}

	/**
	 * Initializes the main matrices used in Ckmeans and kicks
	 * off the divide and conquer cluster computation strategy
	 *
	 * @private
	 * @param {Array<number>} data sorted array of values
	 * @param {Array<Array<number>>} matrix
	 * @param {Array<Array<number>>} backtrackMatrix
	 */
	function fillMatrices(data, matrix, backtrackMatrix) {
	    var nValues = matrix[0].length;

	    // Shift values by the median to improve numeric stability
	    var shift = data[Math.floor(nValues / 2)];

	    // Cumulative sum and cumulative sum of squares for all values in data array
	    var sums = [];
	    var sumsOfSquares = [];

	    // Initialize first column in matrix & backtrackMatrix
	    for (var i = 0, shiftedValue; i < nValues; ++i) {
	        shiftedValue = data[i] - shift;
	        if (i === 0) {
	            sums.push(shiftedValue);
	            sumsOfSquares.push(shiftedValue * shiftedValue);
	        } else {
	            sums.push(sums[i - 1] + shiftedValue);
	            sumsOfSquares.push(sumsOfSquares[i - 1] + shiftedValue * shiftedValue);
	        }

	        // Initialize for cluster = 0
	        matrix[0][i] = ssq(0, i, sums, sumsOfSquares);
	        backtrackMatrix[0][i] = 0;
	    }

	    // Initialize the rest of the columns
	    var iMin;
	    for (var cluster = 1; cluster < matrix.length; ++cluster) {
	        if (cluster < matrix.length - 1) {
	            iMin = cluster;
	        } else {
	            // No need to compute matrix[K-1][0] ... matrix[K-1][N-2]
	            iMin = nValues - 1;
	        }

	        fillMatrixColumn(iMin, nValues - 1, cluster, matrix, backtrackMatrix, sums, sumsOfSquares);
	    }
	}

	/**
	 * Ckmeans clustering is an improvement on heuristic-based clustering
	 * approaches like Jenks. The algorithm was developed in
	 * [Haizhou Wang and Mingzhou Song](http://journal.r-project.org/archive/2011-2/RJournal_2011-2_Wang+Song.pdf)
	 * as a [dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming) approach
	 * to the problem of clustering numeric data into groups with the least
	 * within-group sum-of-squared-deviations.
	 *
	 * Minimizing the difference within groups - what Wang & Song refer to as
	 * `withinss`, or within sum-of-squares, means that groups are optimally
	 * homogenous within and the data is split into representative groups.
	 * This is very useful for visualization, where you may want to represent
	 * a continuous variable in discrete color or style groups. This function
	 * can provide groups that emphasize differences between data.
	 *
	 * Being a dynamic approach, this algorithm is based on two matrices that
	 * store incrementally-computed values for squared deviations and backtracking
	 * indexes.
	 *
	 * This implementation is based on Ckmeans 3.4.6, which introduced a new divide
	 * and conquer approach that improved runtime from O(kn^2) to O(kn log(n)).
	 *
	 * Unlike the [original implementation](https://cran.r-project.org/web/packages/Ckmeans.1d.dp/index.html),
	 * this implementation does not include any code to automatically determine
	 * the optimal number of clusters: this information needs to be explicitly
	 * provided.
	 *
	 * ### References
	 * _Ckmeans.1d.dp: Optimal k-means Clustering in One Dimension by Dynamic
	 * Programming_ Haizhou Wang and Mingzhou Song ISSN 2073-4859
	 *
	 * from The R Journal Vol. 3/2, December 2011
	 * @param {Array<number>} x input data, as an array of number values
	 * @param {number} nClusters number of desired classes. This cannot be
	 * greater than the number of values in the data array.
	 * @returns {Array<Array<number>>} clustered input
	 * @throws {Error} if the number of requested clusters is higher than the size of the data
	 * @example
	 * ckmeans([-1, 2, -1, 2, 4, 5, 6, -1, 2, -1], 3);
	 * // The input, clustered into groups of similar numbers.
	 * //= [[-1, -1, -1, -1], [2, 2, 2], [4, 5, 6]]);
	 */
	function ckmeans(
	    x/*: Array<number> */,
	    nClusters/*: number */)/*: Array<Array<number>> */ {

	    if (nClusters > x.length) {
	        throw new Error('cannot generate more classes than there are data values');
	    }

	    var sorted = numericSort(x),
	        // we'll use this as the maximum number of clusters
	        uniqueCount = uniqueCountSorted(sorted);

	    // if all of the input values are identical, there's one cluster
	    // with all of the input in it.
	    if (uniqueCount === 1) {
	        return [sorted];
	    }

	    // named 'S' originally
	    var matrix = makeMatrix(nClusters, sorted.length),
	        // named 'J' originally
	        backtrackMatrix = makeMatrix(nClusters, sorted.length);

	    // This is a dynamic programming way to solve the problem of minimizing
	    // within-cluster sum of squares. It's similar to linear regression
	    // in this way, and this calculation incrementally computes the
	    // sum of squares that are later read.
	    fillMatrices(sorted, matrix, backtrackMatrix);

	    // The real work of Ckmeans clustering happens in the matrix generation:
	    // the generated matrices encode all possible clustering combinations, and
	    // once they're generated we can solve for the best clustering groups
	    // very quickly.
	    var clusters = [],
	        clusterRight = backtrackMatrix[0].length - 1;

	    // Backtrack the clusters from the dynamic programming matrix. This
	    // starts at the bottom-right corner of the matrix (if the top-left is 0, 0),
	    // and moves the cluster target with the loop.
	    for (var cluster = backtrackMatrix.length - 1; cluster >= 0; cluster--) {

	        var clusterLeft = backtrackMatrix[cluster][clusterRight];

	        // fill the cluster from the sorted input by taking a slice of the
	        // array. the backtrack matrix makes this easy - it stores the
	        // indexes where the cluster should start and end.
	        clusters[cluster] = sorted.slice(clusterLeft, clusterRight + 1);

	        if (cluster > 0) {
	            clusterRight = clusterLeft - 1;
	        }
	    }

	    return clusters;
	}

	/* @flow */

	var SQRT_2PI = Math.sqrt(2 * Math.PI);

	/* @flow */

	var SQRT_2PI$1 = Math.sqrt(2 * Math.PI);
	//# sourceMappingURL=simple-statistics.mjs.map

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	var ColorScale = function () {
	  function ColorScale(data, colors) {
	    var noDataColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#ddd";
	    var valueAccessorFunc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (d) {
	      return d.value;
	    };
	    var scaleType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'quantize';
	    var customDomain = arguments[5];
	    classCallCheck(this, ColorScale);

	    this.data = data;
	    this.colors = colors;
	    this.noDataColor = noDataColor;
	    this.valueAccessorFunc = valueAccessorFunc;
	    this.scaleType = scaleType;
	    this.customDomain = customDomain;

	    // Setup the scale based on scale type
	    if (scaleType === 'quantize') {
	      // Calculate the colors based on a linear quantize domain
	      this.scale = d3$1.scale.quantize();
	    } else if (scaleType === 'quantile' || scaleType === 'ckmeans') {
	      // Calculate the colors by n domain sections(similar to quartiles but of n sections)
	      // ckmeans will be a quantile scale, but with each quantile section having a custom value dependent on where most values are clustering
	      this.scale = d3$1.scale.quantile();
	    } else if (scaleType === 'threshold') {
	      this.scale = d3$1.scale.threshold();
	    }
	    this.scale.domain(this.calculateDomain()).range(colors);
	  }

	  createClass(ColorScale, [{
	    key: 'calculateDomain',
	    value: function calculateDomain() {
	      var notEnoughDataForCkmeans = this.colors.length - 1 > this.data.length;
	      if (this.customDomain) {
	        return this.customDomain;
	      } else if (this.scaleType === 'quantize' || notEnoughDataForCkmeans) {
	        // Standard min/max domain for linear quantize scale
	        return [d3$1.min(this.data, this.valueAccessorFunc), d3$1.max(this.data, this.valueAccessorFunc)];
	      } else if (this.scaleType === 'quantile') {
	        // If the user didn't specify a list of quantiles using the customDomain
	        // then use the data itself as the quantiles
	        return this.data.map(this.valueAccessorFunc);
	      } else if (this.scaleType === 'threshold' || this.scaleType === 'ckmeans') {
	        // ckmeans will be a quantile scale, but with each quantile section having a custom value dependent on where most values are clustering
	        var dataValues = this.data.map(this.valueAccessorFunc);
	        return ckmeans(dataValues, this.colors.length - 1).map(function (cluster) {
	          return cluster[0];
	        });
	      }

	      console.warn('Scale type not recognized: ' + this.scaleType);
	      return [undefined, undefined];
	    }
	  }, {
	    key: 'setDomain',
	    value: function setDomain() {
	      this.scale.domain(this.calculateDomain());
	    }
	  }, {
	    key: 'setData',
	    value: function setData(data) {
	      this.data = data;
	    }
	  }, {
	    key: 'getColorFor',
	    value: function getColorFor(value) {
	      if (value === undefined) {
	        return this.noDataColor;
	      }
	      return this.scale(value);
	    }
	  }]);
	  return ColorScale;
	}();

	var mapGeoKey = {
	  'KOS': 'CS-KM'

	  // Get the value that the geo key is mapped to, if it doesn't exist just use the original key as default
	  // The purpose of this is to map values in our data that don't match our geo json, for example our data has Kosovo's country code as 'CS-KM' but our geojson is 'KOS'
	};var mapGeoKeyToDataKey = function mapGeoKeyToDataKey(geoKey) {
	  return mapGeoKey[geoKey] || geoKey;
	};

	// Choropleth adapted from http://techslides.com/demos/d3/worldmap-template.html
	// Zoom buttons adapted from http://bl.ocks.org/linssen/7352810
	function ChoroplethGenerator (parentId) {
	  var chart = {};

	  d3.select(window).on("resize", throttle);

	  var zoom = d3.behavior.zoom().scaleExtent([1, 9]).on("zoom", zoomAndPan);

	  var _width = document.getElementById(parentId).offsetWidth;
	  var _height = _width / 2;

	  var projection = void 0,
	      path = void 0,
	      svg = void 0,
	      g = void 0;
	  var _topojson = void 0,
	      _data = void 0,
	      _colorScale = void 0;
	  var _colorPalette = { colors: ['green', 'red', 'blue'], noDataColor: '#bbb' };
	  var _colorMapper = function _colorMapper(value) {
	    return '#ccc';
	  };
	  var _keyAccessor = function _keyAccessor(datum) {
	    return datum !== undefined ? datum.name : undefined;
	  };
	  var _valueAccessor = function _valueAccessor(datum) {
	    return datum !== undefined ? datum.value : undefined;
	  };
	  var _tooltipContent = function _tooltipContent(datum, geoDatum) {
	    return geoDatum.properties.name + '<br/>' + (datum.value || 'No Data');
	  };
	  var _numberFormatter = function _numberFormatter(value) {
	    return Math.round(value);
	  };
	  var _showLegend = true;
	  var _scaleType = 'quantize';

	  var tooltip;

	  function initialize(w, h) {
	    updateProjection(w, h);
	    addZoomControls();

	    var parentContainer = d3.select("#" + parentId);
	    parentContainer.style({ 'position': 'relative' }).classed('d3-choropleth-chart', true); // For default styles
	    tooltip = parentContainer.append("div").attr("class", "tooltip hidden");
	    svg = parentContainer.append("svg").attr("width", _width).attr("height", _height).call(zoom).on("wheel.zoom", null); // Don't zoom with mouse scroll

	    g = svg.append("g");

	    updateColorMapper();

	    if (_showLegend) {
	      addLegend();
	    }
	  }

	  function updateSvgSize(w, h) {
	    svg.attr("width", w).attr("height", h);
	  }

	  function updateLegendPosition(w, h) {
	    svg.select('g.legend').attr('transform', 'translate(0, ' + (getContainerHeight() - 200) + ')');
	  }

	  function updateProjection() {
	    projection = d3.geo.mercator().translate([_width / 2, _height / 2]).scale(_width / 2 / Math.PI);

	    path = d3.geo.path().projection(projection);
	  }

	  function updateColorMapper() {
	    _colorScale = new ColorScale(_data, _colorPalette.colors, _colorPalette.noDataColor, _valueAccessor, _scaleType);
	    _colorMapper = function _colorMapper(value) {
	      return _colorScale.getColorFor(value);
	    };
	  }

	  function getContainerHeight() {
	    return document.getElementById(parentId).offsetHeight;
	  }

	  function addLegend() {
	    var legendBottomOffset = getContainerHeight() - 200;
	    var legend = svg.append('g').classed('legend', true).attr('transform', 'translate(' + 0 + ', ' + legendBottomOffset + ')');
	    legend.append('rect').classed('background', true).attr('width', 170).attr('height', 180).attr('fill', 'none');

	    legend.append('text').classed('legend-title', true).text('Legend').attr('alignment-baseline', 'hanging').attr('y', 10).attr('x', 10);

	    var keyContainer = legend.append('g').classed('key-container', true).attr('transform', 'translate(' + 10 + ', 35)');

	    var legendColors = _colorScale.scale.range().slice(0).reverse();
	    legendColors.push(_colorScale.noDataColor);
	    var keyRow = keyContainer.selectAll('g').data(legendColors).enter().append('g').attr('transform', function (d, i) {
	      return 'translate(' + 0 + ', ' + i * 20 + ')';
	    });

	    keyRow.append('rect').attr('x', 0).attr('y', 0).attr('height', 15).attr('width', 15).attr('fill', function (color) {
	      return color;
	    });

	    keyRow.append('text').text(function (color) {
	      return getLegendValueRange(color);
	    }).classed('key-text', true).attr('alignment-baseline', 'hanging').attr('x', 25).attr('y', 0);
	  }

	  function addZoomControls() {
	    var container = d3.select("#" + parentId);
	    var zoomControlContainer = container.append('div').classed('zoom-controls-container', true);
	    zoomControlContainer.append('div').classed('reset-button', true).text('reset zoom');
	    var zoomButtons = zoomControlContainer.append('div').classed('zoom-buttons', true);
	    zoomButtons.append('div').classed('zoom-button', true).attr('id', 'zoom-in').text('+');
	    zoomButtons.append('div').classed('zoom-button', true).attr('id', 'zoom-out').text('-');

	    d3.selectAll('#' + parentId + ' .zoom-button').on('click', zoomClick);
	    d3.select('#' + parentId + ' .reset-button').on('click', resetZoom);
	  }

	  function getLegendValueRange(color) {
	    var colorValueRange = _colorScale.scale.invertExtent;
	    if (!colorValueRange(color)[0]) return '0 Projects';
	    return _numberFormatter(Math.ceil(colorValueRange(color)[0])) + ' to ' + _numberFormatter(Math.floor(colorValueRange(color)[1])) + ' Projects';
	  }

	  chart.numberFormatter = function (_) {
	    _numberFormatter = _;
	    return chart;
	  };

	  chart.colorPalette = function (_) {
	    _colorPalette = _;
	    if (_data !== undefined) updateColorMapper();
	    return chart;
	  };

	  chart.topojson = function (_) {
	    _topojson = _;
	    return chart;
	  };

	  chart.data = function (_) {
	    _data = _;
	    return chart;
	  };

	  chart.tooltipContent = function (_) {
	    _tooltipContent = _;
	    return chart;
	  };

	  chart.valueAccessor = function (_) {
	    _valueAccessor = _;
	    return chart;
	  };

	  chart.keyAccessor = function (_) {
	    _keyAccessor = _;
	    return chart;
	  };

	  chart.showLegend = function (_) {
	    _showLegend = _;
	    return chart;
	  };

	  chart.scaleType = function (_) {
	    _scaleType = _;
	    return chart;
	  };

	  function getDatum(geoId) {
	    var datum = _data.find(function (d) {
	      return _keyAccessor(d) === mapGeoKeyToDataKey(geoId);
	    });
	    if (!datum) {
	      var geoDatum = _topojson.find(function (d) {
	        return d.id === geoId;
	      });
	      if (!geoDatum) {
	        return { noDataFound: true, noGeoDataFound: true, name: geoId };
	      }
	      return Object.assign({ noDataFound: true }, geoDatum);
	    }
	    return datum;
	  }

	  function getDataValue(key) {
	    return _valueAccessor(getDatum(key));
	  }

	  chart.draw = function (hasBeenInitialized) {
	    if (!hasBeenInitialized) {
	      initialize(_width, _height);
	    }

	    // Join: topojson to country nodes
	    var country = g.selectAll(".country").data(_topojson);

	    // Enter: append the corresponding path nodes
	    country.enter().insert("path").attr("class", "country").attr("id", function (d, i) {
	      return d.id;
	    }).attr("title", function (d, i) {
	      return d.properties.name;
	    }).style("fill", function (d, i) {
	      return _colorMapper(getDataValue(d.id));
	    });
	    d3.selectAll(".country").style("stroke-width", .5 / zoom.scale());

	    // Update: set the country path, which can change when resize happens
	    country.attr("d", path);

	    //offsets for tooltips
	    var offsetL = 20;
	    var offsetT = 10;

	    //tooltips
	    country.on("mousemove", function (d, i) {

	      var mouse = d3.mouse(svg.node()).map(function (d) {
	        return parseInt(d);
	      });

	      tooltip.classed("hidden", false).attr("style", "left:" + (mouse[0] + offsetL) + "px;top:" + (mouse[1] + offsetT) + "px").html(_tooltipContent(getDatum(d.id), d));
	    }).on("mouseout", function (d, i) {
	      tooltip.classed("hidden", true);
	    });

	    resetZoom();
	  };

	  function redraw() {
	    var parentContainer = d3.select("#" + parentId);
	    _width = parentContainer.node().offsetWidth;
	    _height = _width / 2;
	    updateProjection(_width, _height);
	    updateSvgSize(_width, _height);
	    updateColorMapper();
	    updateLegendPosition();
	    chart.draw(true);
	  }

	  function zoomAndPan(zoomFromButton) {
	    if (!zoomFromButton) {
	      var t = d3.event.translate;
	      var s = d3.event.scale;
	      var h = _height / 4;

	      t[0] = Math.min(_width / _height * (s - 1), Math.max(_width * (1 - s), t[0]));

	      t[1] = Math.min(h * (s - 1) + h * s, Math.max(_height * (1 - s) - h * s, t[1]));

	      zoom.translate(t);
	      g.attr("transform", "translate(" + t + ")scale(" + s + ")");
	    }

	    g.attr("transform", "translate(" + zoom.translate() + ")scale(" + zoom.scale() + ")");
	    //adjust the country hover stroke width based on zoom level
	    d3.selectAll(".country").style("stroke-width", .5 / zoom.scale());
	  }

	  var throttleTimer;
	  function throttle() {
	    window.clearTimeout(throttleTimer);
	    throttleTimer = window.setTimeout(function () {
	      redraw();
	    }, 200);
	  }

	  // ZOOM BUTTON LOGIC ***********
	  function interpolateZoom(translate, scale) {
	    return d3.transition().duration(350).tween("zoom", function () {
	      var iTranslate = d3.interpolate(zoom.translate(), translate),
	          iScale = d3.interpolate(zoom.scale(), scale);
	      return function (t) {
	        zoom.scale(iScale(t)).translate(iTranslate(t));
	        zoomAndPan(true);
	      };
	    });
	  }

	  function zoomClick() {
	    var clicked = d3.event.target,
	        direction = 1,
	        factor = 0.2,
	        target_zoom = 1,
	        center = [_width / 2, _height / 2],
	        extent = zoom.scaleExtent(),
	        translate = zoom.translate(),
	        translate0 = [],
	        l = [],
	        view = { x: translate[0], y: translate[1], k: zoom.scale() };

	    d3.event.preventDefault();
	    direction = this.id === 'zoom-in' ? 1 : -1;
	    target_zoom = zoom.scale() * (1 + factor * direction);

	    if (target_zoom < extent[0] || target_zoom > extent[1]) {
	      return false;
	    }

	    translate0 = [(center[0] - view.x) / view.k, (center[1] - view.y) / view.k];
	    view.k = target_zoom;
	    l = [translate0[0] * view.k + view.x, translate0[1] * view.k + view.y];

	    view.x += center[0] - l[0];
	    view.y += center[1] - l[1];

	    interpolateZoom([view.x, view.y], view.k);
	  }

	  function resetZoom() {
	    interpolateZoom([0, 0], 1);
	  }

	  return chart;
	}

	var type = "Topology";
	var transform = {"scale":[0.0026128421190149595,0.0016177655752417628],"translate":[-179.99999999999991,-55.885238087]};
	var arcs = [[[42101,42320],[44,-77],[-2,-23],[-65,75],[23,25]],[[96099,58288],[48,-52]],[[96147,58236],[31,-17],[14,-13],[11,-44],[-11,-60],[-24,-69],[-7,-30]],[[96161,58003],[1,-15],[9,0],[24,-20]],[[96195,57968],[7,6],[7,6],[47,21],[13,-1],[13,-11],[11,-18],[-3,-4],[2,-8],[0,-14],[0,-14],[-2,-11],[-36,-153],[-4,-187],[-14,-31]],[[96236,57549],[-6,-54]],[[96230,57495],[-1,-38],[2,-14],[8,-14],[0,-7],[1,-39]],[[96240,57383],[25,-56],[9,-53]],[[96274,57274],[24,-40]],[[96298,57234],[16,-11],[37,-6],[33,13],[110,107],[10,14],[14,10],[4,5],[6,10],[3,5],[15,14],[39,20],[17,5],[26,-7],[13,10],[57,10],[21,51],[18,48],[91,75],[27,4],[39,57],[41,31],[81,15],[71,-32],[17,1],[14,-3]],[[97118,57680],[-3,-16],[-1,-4],[0,-27]],[[97114,57633],[-43,-34]],[[97071,57599],[-13,-21],[8,-18]],[[97066,57560],[24,6],[8,-14],[3,-2],[3,0]],[[97104,57550],[11,9],[20,-2]],[[97135,57557],[97,52],[43,11],[9,5],[7,10],[7,29],[31,-1],[10,12]],[[97339,57675],[9,-2],[5,-12]],[[97353,57661],[4,-2],[4,0],[11,-3],[14,3],[29,-11],[49,11],[50,-38]],[[97514,57621],[28,-54],[12,-8]],[[97554,57559],[-31,-10],[-11,2],[-15,43],[-10,6],[-4,-5],[-5,-6],[-9,-11],[-8,-2],[-11,-17],[-52,-3],[-12,-30]],[[97386,57526],[-28,-4],[-5,-3],[-1,-12]],[[97352,57507],[6,-12],[13,-12],[23,-16]],[[97394,57467],[16,-33],[9,-5]],[[97419,57429],[2,-4],[1,-4],[-1,-5],[-1,-4],[-2,-20],[-7,-2],[-17,25],[-7,3],[-8,-1],[-16,-5],[-116,-101],[-56,0],[-31,26],[-86,14],[-49,-11],[-122,0],[-95,-16],[-9,-3],[-9,-6],[-11,-4],[-116,-6],[-43,-38],[-92,-20],[-17,-45],[-28,-9],[-14,-8],[-3,-5],[0,-6],[1,-4],[0,-7],[-6,-7],[-15,-5],[-48,-45],[-6,-3],[-24,-2],[-8,-7],[1,-19],[6,-17],[1,-9],[-5,-6],[-18,0],[-40,38],[-7,-1],[-4,-4],[-23,-58],[-61,-86],[-61,-57],[-20,-60],[33,-35],[10,-5],[11,-3],[12,-6],[5,-10],[2,-20],[3,-9],[18,-16],[6,-9],[12,-31],[3,-10],[0,-17],[12,-20],[6,-22]],[[96262,56602],[-14,-35]],[[96248,56567],[44,-48],[-5,-35],[2,-13],[3,-4],[2,-5],[5,-8],[3,-9],[-1,-13],[-3,-9],[-19,-21],[-13,-20],[0,-16]],[[96266,56366],[29,-49],[12,-11]],[[96307,56306],[2,-9],[-4,-12],[-10,-20],[-27,-24],[-10,-17],[-19,-80],[-51,-28],[-13,-14]],[[96175,56102],[-33,-78]],[[96142,56024],[-47,-46],[-5,-71],[-42,-17],[5,-39],[57,-69],[2,-15],[-11,-43],[2,-69],[-11,-17],[-4,-11],[2,-21],[-2,-11],[-6,-8]],[[96082,55587],[-35,-23]],[[96047,55564],[-24,3]],[[96023,55567],[-12,-27]],[[96011,55540],[-130,-17],[-74,12],[-125,53],[-13,2],[-30,-9],[-19,-56],[45,-117],[58,-15],[23,-55],[-6,-81]],[[95740,55257],[11,-24],[40,-53]],[[95791,55180],[4,-40]],[[95795,55140],[-66,-74],[-8,-5],[-17,4],[-5,-2],[-12,-32],[-51,-32],[-42,15],[-15,-3],[-18,-18],[-7,-2],[-11,5],[-12,-4],[-8,0],[-16,-2],[-12,-11],[-17,-39],[7,-67],[-5,-19]],[[95480,54854],[-20,-31]],[[95460,54823],[-14,-12],[-3,-20]],[[95443,54791],[5,-10],[6,-4],[3,-3]],[[95457,54774],[1,-4],[1,-11],[4,-21]],[[95463,54738],[-6,-19],[-20,-42]],[[95437,54677],[-7,-8],[-16,-8],[-8,-6],[-20,-70],[14,-60],[-6,-120],[8,-58],[12,-46],[1,-9],[-1,-3],[-1,-2],[-19,-19],[-9,-16],[-43,-88],[-5,-10],[-5,-5],[-6,-11],[-11,-15],[-16,-13],[-10,-7],[-13,1],[-14,-5],[-24,-18],[-25,9],[-38,96],[-57,30],[-18,-4],[-16,-13]],[[95084,54199],[9,-20]],[[95093,54179],[22,1]],[[95115,54180],[7,-14],[-16,-10]],[[95106,54156],[-54,23],[-16,2],[-15,-2],[-8,2],[-4,6],[-5,9],[-9,11],[-19,11],[-12,-9],[-31,-76],[-20,-16],[-6,-7],[-4,-8],[-4,-4],[-32,2],[-56,-64],[-60,-1],[-5,-11],[2,-9],[6,-10],[5,-10],[2,-25],[67,-19],[-8,-41],[-16,1],[-6,-2],[-34,-35],[-98,-39],[-125,20],[-30,48],[-94,-75],[-12,-70],[-8,-13],[-36,-51],[-8,-6],[-53,-14]],[[94300,53674],[-7,-6],[-3,-8]],[[94290,53660],[-37,-199],[-2,-26],[19,-51],[2,-13],[2,-12],[-7,-81],[-1,-49],[-25,-70],[-6,-25],[-1,-10],[2,-8],[14,-13],[16,-23],[11,-12],[3,-6],[-1,-3],[-3,-1],[-2,-2]],[[94274,53056],[-18,-38]],[[94256,53018],[-31,-31],[-444,-182],[-19,1],[-63,16],[-131,1],[-117,-53],[-33,-60],[-43,26],[-155,42],[-134,-17],[-37,-6],[-19,-1],[-19,-3],[-93,-13],[-116,-14],[-39,10],[-100,45],[-31,14],[-33,14],[-32,15],[-95,43],[-32,15],[-64,30],[-64,28],[-122,56],[-12,8]],[[92178,53002],[21,35],[30,48],[185,310],[124,207]],[[92538,53602],[8,31]],[[92546,53633],[-1,43],[-2,8],[7,20],[3,24],[-30,165],[-16,37],[-7,8],[-10,6],[-20,3],[-44,10],[-141,28],[-103,21],[-13,7],[-11,102],[5,46],[-7,88],[4,37],[-9,56],[14,27],[1,10],[6,50],[1,50],[-98,461],[-6,40],[2,57],[74,132],[23,25],[23,89],[-12,4],[-15,1],[-59,2],[-31,16],[-24,32],[-9,45],[14,57],[1,24],[-11,94],[-4,61],[1,28],[11,29],[13,22],[13,19],[24,21],[-2,14],[27,1]],[[92128,55753],[67,6]],[[92195,55759],[-4,12],[-28,48],[-7,17],[-3,7],[-5,5],[-9,6],[-4,4],[-7,35],[30,11],[10,4],[7,6],[18,27],[2,5],[3,5],[4,3],[15,2]],[[92217,55956],[5,53]],[[92222,56009],[7,10],[12,13],[10,28],[11,5],[3,21],[2,21],[0,5],[-2,12],[-1,6],[7,19],[1,7],[1,12],[6,24],[2,25],[-3,134],[34,25],[-2,32],[37,110],[-4,39],[-3,5]],[[92340,56562],[5,3],[23,4],[20,-47],[56,-62],[25,-14],[74,-9],[46,22],[21,0],[23,-17],[39,-52],[11,-9],[21,-13],[12,-63],[2,-9],[7,-23],[5,-7],[5,5],[38,66],[22,17],[25,-31],[4,-3],[8,2],[4,0],[11,-6],[10,1],[34,20],[6,7],[4,9],[10,14],[60,52],[26,16],[23,6],[8,2],[5,7],[8,55],[-10,61],[11,12],[29,13],[10,11],[3,6],[0,3],[-2,4],[-10,4],[-2,3],[-6,10],[-19,23]],[[93045,56655],[-10,35]],[[93035,56690],[2,12],[5,7],[8,3]],[[93050,56712],[84,-3],[64,28],[35,38],[62,9],[36,27],[25,7],[11,-2],[36,-19],[-4,48]],[[93399,56845],[4,10],[4,7]],[[93407,56862],[25,26]],[[93432,56888],[55,3]],[[93487,56891],[4,5],[6,25],[4,7],[6,5],[7,4],[28,9],[13,7],[13,13],[8,12],[30,60],[7,22],[4,23],[1,37],[-7,36],[0,13],[1,12],[5,25],[6,20],[60,152],[-7,96],[18,26],[98,60],[162,5],[6,1],[13,9],[18,31],[11,15],[4,8],[2,13],[0,13],[-3,27],[18,55],[5,4],[7,2],[15,0],[6,5]],[[94056,57748],[19,18]],[[94075,57766],[7,-19],[13,-17]],[[94095,57730],[86,-42],[17,-26],[7,-9],[8,-4],[50,-28],[10,-2],[26,11],[28,-14],[3,4],[7,8],[6,7],[7,6]],[[94350,57641],[7,2],[10,1],[9,-1],[40,-15],[16,12],[103,13],[7,-4],[15,-15],[13,-8],[11,-36],[43,-55],[59,16],[7,6],[8,7],[20,23],[23,-28],[6,-7],[5,2],[3,5],[2,7],[2,3]],[[94759,57569],[5,1],[7,2]],[[94771,57572],[4,1],[51,-21],[6,-19]],[[94832,57533],[-3,-39],[0,-10],[5,-8]],[[94834,57476],[9,-9],[9,-5]],[[94852,57462],[18,-6],[31,-47],[13,-21],[3,-5],[3,-10],[67,54],[10,2],[15,-7],[10,0],[11,64],[123,57],[16,45],[21,-3],[8,2],[5,-1]],[[95206,57586],[25,-9]],[[95231,57577],[-5,32],[1,6],[9,4],[8,-3],[4,-7],[3,-10],[5,-9],[6,-3]],[[95262,57587],[6,7]],[[95268,57594],[-1,8],[-8,9],[-3,4],[-2,7],[1,2],[2,0],[2,-1],[26,-4],[7,-6],[8,-9],[7,-10],[6,-23],[33,-51],[47,-40],[8,1],[7,5],[9,2],[1,0],[4,3],[32,35],[14,28],[1,8],[-7,2],[-7,4],[3,13],[-15,70],[0,34],[2,10],[2,4],[6,5],[3,4]],[[95456,57708],[1,3],[4,11]],[[95461,57722],[25,26],[14,31],[53,-7],[34,13],[12,-4],[3,-2],[4,-3]],[[95606,57776],[7,6]],[[95613,57782],[5,3],[7,3],[16,10],[47,-44],[54,-3],[22,47],[13,8],[1,4],[-1,6],[0,4],[13,31],[-17,76],[-13,5],[-4,3],[-6,12],[-6,20],[-2,18],[5,16]],[[95747,58001],[7,-8],[9,-3]],[[95763,57990],[14,28],[29,23],[34,51],[17,11],[4,5],[5,11],[43,124],[31,23]],[[95940,58266],[-5,14]],[[95935,58280],[0,5],[8,5]],[[95943,58290],[22,3],[7,15]],[[95972,58308],[42,6],[16,-10],[9,-3],[16,26],[4,-2],[5,-4],[3,-3],[4,-6],[3,-5],[3,-11],[6,-9],[16,1]],[[78064,27825],[3,-30],[10,-40],[3,-179],[19,-75],[1,-8],[-4,-8],[-16,-24],[0,-40],[-20,-57],[-1,-12],[0,-16],[10,-39],[1,-46],[2,-16],[0,-5],[-9,-30]],[[78063,27200],[-4,-167]],[[78059,27033],[1,-28],[23,-50]],[[78083,26955],[5,-66]],[[78088,26889],[-2,-11],[-2,-10]],[[78084,26868],[-13,-30],[-18,-40]],[[78053,26798],[-4,-17],[-15,-90],[-7,-27],[-2,-25],[3,-20],[8,-17],[21,-34],[9,-17],[6,-20],[5,-22]],[[78077,26509],[-298,0],[-287,0],[-189,0]],[[77303,26509],[0,-186],[0,-95],[0,-93],[0,-186],[0,-93],[0,-93],[0,-93],[1,-466]],[[77304,25204],[0,-92],[0,-94]],[[77304,25018],[0,-147]],[[77304,24871],[0,-62],[-1,-63],[0,-92],[1,-2],[0,-86],[1,-14],[37,-181],[27,-85],[33,-42],[20,5],[6,-7],[10,-3],[32,-51],[27,-69],[4,-17],[4,-7],[5,-6],[51,-52],[4,-5],[18,-29],[7,-17],[6,-17],[4,-28],[46,-58],[23,-15],[18,-8],[6,-5],[16,-27],[12,-42],[9,-16],[9,-12],[21,-16],[1,-30],[4,-8],[7,-3],[33,4],[5,-3],[6,-3],[8,-9],[7,-14],[9,-11]],[[77840,23665],[-3,-9],[3,-16]],[[77840,23640],[-189,-57],[-78,-24],[-79,-24],[-95,-28],[-193,-57],[-95,-30],[-28,-8],[-9,-2],[-63,51],[-17,-1],[-5,1],[-7,-2],[-13,-7],[-6,4],[-35,-15],[-35,-14],[-39,-28],[-26,23],[-6,-8],[-12,6],[-3,5],[-7,5],[-39,-2],[-4,3],[-12,13],[-12,10],[-20,30],[-39,25],[-116,-26],[-32,21],[-60,0],[-3,-2],[-4,-12],[-2,-3],[-37,29],[-96,-10],[-96,36],[-26,-11],[-32,-2],[-49,14],[-34,26],[-16,6],[-103,175],[-8,31],[-4,5],[-2,6],[0,4],[-122,0],[-52,0],[-47,0],[-98,0],[-295,0],[-195,0],[-296,0],[-195,0],[-326,1],[-47,-22],[-53,10]],[[74228,23785],[-23,42]],[[74205,23827],[-72,63]],[[74133,23890],[-68,71]],[[74065,23961],[5,19],[-15,42]],[[74055,24022],[-29,19],[-14,15],[-6,3],[-16,-7],[-3,1],[-3,3],[-15,-10],[-38,21],[-9,0],[-8,-5],[-43,-12],[-19,-17],[-29,-15],[-26,-45],[-31,-21],[-13,-17],[-7,-6],[-19,-7],[-31,-31],[-120,7],[-56,52],[-59,-25],[-18,-21],[-22,-19],[-4,-12],[-10,1],[-8,5],[-4,1]],[[73395,23880],[0,5],[-6,10],[2,121],[13,140],[12,15],[0,188],[-17,234],[11,50],[-28,73],[7,63],[36,4],[25,72],[31,37],[14,77],[10,160],[19,37],[21,136],[18,74],[25,51],[10,151],[12,45],[4,101],[-10,51],[5,59],[35,132],[33,14],[3,148],[8,31],[-8,77],[47,61],[8,54],[40,39],[70,131],[-2,102],[92,132],[71,7],[36,52],[18,83],[51,76],[49,203],[11,94],[-7,111],[6,154],[21,140],[-7,124],[-34,80],[5,84],[-89,161],[-5,68],[-30,91],[-43,95],[4,55],[-50,111],[10,58],[-20,91],[0,40],[-68,190],[36,83],[14,3],[34,87],[31,37],[33,0],[10,72],[-25,106],[16,14],[-5,75],[-35,88],[-59,199],[-71,261],[-11,62],[-23,43],[-7,161],[-7,36],[-73,132],[-62,166],[-26,88],[-43,108],[83,33],[57,40],[37,-12],[70,43],[23,49],[76,28]],[[73937,30925],[61,-21],[14,21],[100,-7],[116,16],[29,-19],[45,5],[39,-16],[129,-9],[48,14],[351,9],[267,8],[36,-27],[40,7],[31,-23],[3,-86],[46,-78],[1,-236],[15,-85],[25,-74],[37,-38],[17,-78],[-17,-43],[7,-73],[19,-59],[33,-27],[5,-38],[46,-112],[27,-24],[1,-47],[20,-52],[30,-37],[5,-44],[40,-61],[3,-44],[32,-8],[61,10],[43,22],[30,-37],[44,-3],[2,49],[30,21],[67,-11],[58,12],[4,40],[85,0],[15,-43],[221,0],[-8,83],[16,84],[-8,97],[27,-3],[34,61],[-14,101],[4,101],[19,53],[-6,41],[296,0],[14,52],[107,1],[-33,-141],[-2,-89],[213,1],[271,1],[22,-54],[5,-132],[-33,-137],[-4,-128],[35,-81],[19,-126],[13,-40],[-19,-228],[-10,-39],[-8,-153],[1,-113],[-18,-73],[24,-138],[55,-119],[62,-75],[16,-123],[43,-147],[-16,-83],[13,-30],[6,-118],[-60,-68],[30,-140],[14,-98],[22,35],[50,36],[26,52],[73,-37],[39,27],[71,-31],[69,20],[68,59],[47,7],[55,-24],[74,-16],[37,52],[15,46]],[[73895,31680],[-3,-19],[-14,-7],[-76,-28],[-58,-125],[-35,-48],[-55,-34],[33,-65],[-8,-349],[-64,1],[-51,-25]],[[73564,30981],[-24,92],[33,85],[-42,182],[-38,86],[36,-15],[5,39],[-29,-13],[-4,4],[-6,-1],[-8,1]],[[73487,31441],[4,8],[43,58],[10,26],[12,64],[1,3],[5,0],[11,-25],[28,13],[6,3],[3,8],[16,50]],[[73626,31649],[2,14],[-1,27]],[[73627,31690],[4,8],[17,-1],[26,14],[42,11],[24,46],[7,8],[7,7],[4,10],[17,37],[15,-12],[5,-2],[15,6],[19,-48],[48,-81],[18,-13]],[[76570,60844],[27,-23],[44,-119],[31,0],[64,-65],[38,-164],[-12,-45]],[[76762,60428],[-26,-86],[14,-87],[-35,-27],[36,-92],[-23,-50],[38,-140],[33,-22],[15,-75],[91,-18],[10,-36]],[[76915,59795],[-1,-71],[21,-27],[4,-9],[3,-10],[0,-13],[-1,-11],[-5,-21],[-1,-17],[-14,-22],[-5,-2],[-4,-4],[-18,-34],[-17,8],[-10,0],[-5,-5],[-46,-109],[-26,-122],[-10,-6],[-14,-8],[-55,-2],[-13,-12],[-4,-9],[-4,-11],[-1,-12],[-6,-1],[-20,-1]],[[76663,59264],[-2,-6]],[[76661,59258],[6,-39],[11,-15],[18,-36],[1,-11],[-3,-12],[-6,-9],[-29,13]],[[76659,59149],[1,-47]],[[76660,59102],[-6,-15],[-8,-4],[-6,-8],[-1,-13],[-3,2],[-3,1],[-4,0],[-2,-1],[-4,-4]],[[76623,59060],[-1,-12]],[[76622,59048],[-14,3],[-28,23],[-40,21],[11,79],[-42,42],[-20,85],[-144,101],[-37,50],[37,34],[1,65],[-23,24],[-43,93],[42,139],[42,48],[-30,39],[8,110],[18,43],[-32,35],[-6,43],[57,125],[7,144],[-57,31],[-27,-10]],[[76302,60415],[-7,67],[10,83],[-39,53],[95,172],[33,78],[51,24],[-1,-62],[32,-35],[94,49]],[[76514,71861],[67,-9],[71,-47],[-40,-67],[-65,-47],[-99,5],[-24,100],[67,-12],[23,77]],[[69544,60817],[-26,-22],[-12,-7],[-25,-3],[-2,-3],[-4,-7],[-7,-3],[-24,4]],[[69444,60776],[-4,10],[-11,21]],[[69429,60807],[7,4],[1,0],[8,7],[-1,10],[-7,7],[-9,-1],[2,6],[6,14]],[[69436,60854],[-3,5]],[[69433,60859],[1,5],[2,6],[1,4]],[[69437,60874],[8,5],[7,23],[98,-19],[11,-20]],[[69561,60863],[-11,-17]],[[69550,60846],[-5,-13],[-1,-16]],[[89505,49525],[35,-21],[-13,-38],[-70,-4],[-32,37],[80,26]],[[90430,50386],[35,-63],[-3,-98],[9,-25],[-8,-167],[8,-49]],[[90471,49984],[-56,-83],[-27,-12],[-21,-56],[-32,13],[-10,124],[-27,14],[-40,-35],[-16,-41],[11,-131],[-22,-52],[18,-134],[-20,-60],[35,-21],[33,6],[25,-86],[-73,-46],[-62,11],[-56,-34],[15,-124],[-24,-57],[-12,-77],[-26,-52],[-21,-119],[-37,-95],[-13,-79],[-1,-180]],[[90012,48578],[-31,-51],[-373,74],[-265,53],[-328,65],[-17,15],[-120,230],[-241,464],[-10,110]],[[88627,49538],[54,-22],[23,-28],[14,-107],[84,-9],[16,-14],[60,6],[44,20],[113,112],[13,-27],[152,-14],[39,30],[33,-44],[70,13],[54,-44],[106,8],[102,51],[25,37],[52,41],[22,-10],[26,38],[14,68],[29,20],[39,136],[-9,33],[26,45],[144,131],[82,149],[23,56],[44,40],[19,80],[39,-3],[11,38],[72,72],[66,101],[24,114]],[[90352,50655],[40,-29],[-14,-212],[52,-28]],[[90423,50202],[-11,-73],[44,34],[-33,39]],[[44265,723],[60,-19],[105,19],[24,-23],[-162,-37],[-15,21],[-114,-75],[-57,43],[159,71]],[[42620,682],[3,661],[2,663]],[[42625,2006],[138,-211],[-97,-86],[-12,-74],[39,-36],[100,-10],[30,-18],[24,-111],[24,-48],[73,-79],[90,-66],[-5,-45],[105,-90],[150,-98],[53,-23],[108,-134],[244,-112],[58,-9],[148,22],[59,-9],[-68,-169],[-64,-11],[-178,18],[-11,-43],[-123,-14],[-86,-34],[-101,66],[-87,23],[-195,19],[-48,-3],[-158,22],[-85,33],[-10,-31],[-74,-6],[-46,43]],[[45146,9520],[-27,-50],[-34,63],[10,55],[30,-2],[21,-66]],[[45155,9616],[-45,91],[45,4],[0,-95]],[[47994,18736],[15,3],[6,-3],[32,-42],[54,54],[40,14],[88,-35],[29,-25],[28,-111],[4,-101],[24,-34],[37,-119],[-21,-97],[-8,-196],[13,-111],[-42,-164],[-76,-45],[-28,-45],[-38,15],[-37,-104],[-67,10],[-3,-36],[-52,1],[-36,-52],[-49,5],[-27,-49],[-5,-69],[-44,-65],[-66,-13],[-50,-41],[-43,-93],[-62,-24],[-31,-49],[-34,-22],[42,-58],[-8,-38],[-60,25],[-25,-19],[3,-51],[-43,-22],[-3,-55],[-63,-98],[-40,-22],[-6,-63],[-35,-43],[-9,-62],[-76,-68],[-24,-94],[-39,-50],[-15,-50],[-57,-78],[-48,-93],[-48,-16],[-34,-44],[-6,-82],[-69,-101],[-42,-23]],[[46840,15888],[-9,0],[-2,-7],[1,-13],[6,-28],[-3,-24],[-9,-20],[-74,-95]],[[46750,15701],[-16,-41],[1,-24]],[[46735,15636],[15,-37],[9,-25],[2,-14],[5,-120],[-30,-8],[-7,-6],[-4,-11],[3,-7],[16,-33],[3,-28],[-6,-22],[-10,-21],[-6,-27],[3,-27],[0,-17]],[[46728,15233],[-32,-97]],[[46696,15136],[-6,-8],[-15,-11],[-7,-9],[-4,-20],[9,-15],[4,-6],[10,-10],[11,-17]],[[46698,15040],[-1,-55]],[[46697,14985],[-27,-104],[-42,-21],[-10,-16],[-4,-14],[6,-13],[11,-18],[5,-19]],[[46636,14780],[1,-27],[-1,-28]],[[46636,14725],[-15,-55],[4,-13],[26,-48],[5,-18],[-2,-19],[-24,-49],[-10,-27],[-5,-6]],[[46615,14490],[-8,-29],[4,-103],[13,-106],[15,-44],[-2,-93],[-38,-27],[-54,12],[-19,-98],[8,-40],[-42,-93],[-11,-145],[31,-99],[12,-85],[17,-32],[6,-96],[-31,-52],[2,-59],[-21,-43],[13,-52],[37,-31],[24,-52],[62,-58],[109,-50],[42,-49],[91,-64],[104,-146],[44,-104],[-4,-41],[-79,-151],[-15,-83],[10,-78],[44,-112],[54,-69],[68,-50],[63,11],[26,-33],[10,-125],[3,-156],[-8,-47],[-77,-144],[-65,-155],[-42,-76],[-55,-69],[-77,-139],[-9,-132],[-23,-42],[-102,-87],[-112,-83],[-158,-81],[-62,-18],[-128,-65],[-218,-55],[-63,-34],[-35,0],[-374,-86],[-62,4],[-44,-19],[-109,12],[-34,-19],[-82,27],[-41,-8],[-72,27],[-50,79],[-85,8],[-2,-30],[43,-67],[-33,-91],[17,-101],[56,-12],[-11,-70],[53,-34],[-20,-173],[-21,-79],[-57,-6],[-20,-113],[-1,-98],[-44,-47],[27,-108],[34,-25],[29,-74],[-2,-77],[-32,-78],[-150,-105],[-141,-69],[-85,4],[-175,-7],[-33,16],[-76,83],[-43,-6],[-92,60],[-137,65],[-9,52],[-57,7],[-67,-76],[-20,-109],[11,-105],[32,-166],[26,-64],[-17,-70],[14,-79],[-26,-119],[24,-66],[57,-62],[125,-31],[8,-34],[-30,-51],[8,-34],[96,8],[72,-6],[26,27],[-4,73],[-35,38],[78,60],[57,26],[39,-39],[44,-129],[5,-156],[-15,-97],[-45,-45],[-143,-37],[-54,82],[12,59],[-39,70],[-44,22],[-69,-4],[-79,-71],[-47,-16],[-20,-80],[100,-53],[35,-34],[51,-6],[71,-47],[-46,-37],[-122,-48],[-102,-94],[0,-49],[-94,-129],[-22,-52],[6,-99],[37,-126],[-33,-102],[35,-104],[-36,-41],[-5,-45],[-53,-59],[-69,-41],[-16,-27],[-11,-97],[54,-16],[-11,-83],[-33,-21],[-59,38],[-47,-25],[-20,25],[-70,6],[-103,-53],[-40,-39],[19,-46],[-132,-12],[-74,-71],[-62,-111],[-41,-52],[-11,-100],[-36,-30],[-35,-68],[-25,-85],[-4,-56],[31,-148],[45,-103],[33,-35],[79,-51],[132,-185],[60,-27],[164,-25],[84,15],[38,-19],[53,-67],[12,-84],[-9,-105],[-43,-143],[-21,-16],[20,-109],[-30,2],[-14,-71],[-75,-80],[-54,-41],[-64,-92],[-69,-19],[-178,-149],[-32,-90],[-79,-53],[-58,-69],[-29,-71],[-27,-108],[20,-44],[-21,-115],[-10,-135],[-39,-108],[-93,-81],[-96,-20],[-43,-50],[-167,-80],[-77,-142],[-28,-112],[5,-101],[-12,-46],[40,-212],[39,-111],[-60,-64],[71,-26],[95,-222],[123,-186],[-33,-24]],[[42693,2188],[-2,29],[-139,34],[-72,40],[-79,25],[-104,4],[-180,76],[-288,4],[-463,7],[-16,76],[-43,55],[-80,47],[-27,73],[-38,21],[38,47],[14,109],[21,42],[-47,43],[-5,43],[39,39],[12,118],[-29,47],[13,70],[-78,29],[-42,-40],[-61,28],[-122,-93],[-31,14],[-6,67],[-26,52],[-5,118],[-19,61],[-80,78],[19,72],[-35,57],[41,106],[-28,41],[8,40],[-26,61],[13,54],[35,42],[2,42],[119,2],[-9,71],[61,123],[103,47],[57,75],[3,110],[-12,64],[15,36],[54,32],[41,72],[-6,132],[-51,48],[-26,48],[33,103],[43,91],[7,108],[61,12],[43,60],[18,69],[56,18],[-52,80],[32,26],[-21,40],[13,82],[31,4],[64,64],[0,107],[-25,77],[-4,91],[-58,58],[55,25],[60,87],[-20,53],[-29,16],[-22,74],[13,104],[20,23],[72,9],[7,69],[38,18],[37,49],[-10,41],[-61,74],[-36,84],[-64,29],[-51,-10],[-72,37],[12,81],[74,-22],[26,21],[59,-14],[52,23],[62,-36],[28,15],[8,73],[45,80],[-33,63],[-87,16],[-148,-1],[7,113],[-20,71],[37,26],[38,85],[-61,105],[44,53],[-7,48],[-57,34],[-25,50],[14,84],[57,17],[4,65],[-46,35],[-56,7],[-53,75],[14,84],[-14,167],[41,64],[-7,75],[-24,66],[32,73],[35,-15],[81,53],[-23,133],[-24,50],[-26,102],[28,34],[-20,123],[12,74],[9,191],[-41,135],[32,45],[27,137],[32,8],[15,45],[-55,80],[8,82],[45,-13],[1,56],[22,49],[-34,126],[-2,63],[76,6],[-8,51],[31,60],[23,124],[-12,128],[7,57],[71,78],[68,39],[31,-3],[37,36],[10,102],[-49,64],[-17,98],[3,123],[-30,78],[-37,144],[20,72],[4,90],[-32,94],[23,49],[2,94],[-7,110],[-13,27],[19,94],[34,10],[4,116],[42,7],[18,44],[65,-8],[6,95],[43,68],[53,-1],[27,65],[-15,110],[24,33],[-25,96],[5,96],[-26,117],[-32,10],[7,55],[59,27],[13,132],[31,95],[18,132],[64,117],[7,74],[50,-5],[29,26],[-15,64],[7,95],[-20,18],[-2,100],[20,42],[-13,40],[41,175],[-10,56],[-35,31],[-40,-38],[-34,69],[-5,93],[30,38],[13,61],[-53,67],[-16,87],[3,101],[-28,37],[1,46],[-30,32],[-6,86],[-19,48],[43,15],[13,47],[-29,48],[-44,10],[-20,43],[-42,154],[9,151],[13,81],[21,47],[38,-15],[15,50],[8,148],[40,177],[25,34],[2,66],[45,-27],[48,52],[20,115],[-48,42],[20,73],[-2,138],[-44,219],[5,53],[46,83],[41,28],[-1,85],[27,92],[-2,105],[25,49],[8,102],[56,80],[34,34],[45,132],[49,46],[19,118],[36,113],[8,63],[31,33],[18,108],[31,67],[31,4],[51,-35],[26,53],[72,20],[4,109],[-96,196],[-10,58],[8,95],[59,77],[1,54],[-30,208],[-24,57],[1,56],[-19,84],[34,157],[58,49],[-30,51],[-13,76],[-30,23],[-6,56],[26,97],[25,20],[15,49],[34,10],[26,63],[337,219],[9,18],[123,598],[2,20],[-70,110]],[[43173,20437],[20,49],[11,20],[30,35],[4,9],[1,14],[-4,56],[91,57],[11,57],[4,45],[3,15],[5,12],[14,15],[28,5],[44,18],[52,23],[9,10],[9,20],[9,0],[1,7],[2,9],[4,59],[18,101],[7,4],[48,-29],[18,-52],[44,-16],[50,-89],[11,-11],[12,-6],[53,9],[10,8],[26,-5],[20,-4],[103,2],[65,1],[127,-46],[38,-25],[15,-27],[3,-12],[0,-9],[-3,-10],[-6,-9],[-4,-13],[36,-93],[20,-32],[0,-9],[-6,-11]],[[44226,20589],[-4,-25],[0,-17]],[[44222,20547],[10,-9],[10,-33],[13,-10],[16,-82],[9,49],[3,12],[0,44],[17,92],[6,16],[19,27],[9,21],[29,112],[3,4],[7,7],[3,7],[39,137],[17,6],[36,-3],[7,-5],[20,-26],[39,34],[319,-3],[5,-50],[0,-19],[8,-19],[18,-14],[17,-17],[4,-7],[4,-16],[3,-2]],[[44912,20800],[5,-1],[3,-2],[3,-5]],[[44923,20792],[-1,-5]],[[44922,20787],[2,-8],[-4,-12],[-1,-4],[3,-7],[6,-3],[17,-7],[36,-36],[4,-5],[3,-9],[6,-10],[27,-28],[30,-12],[3,-17],[2,-1],[2,0],[2,-1],[9,-15],[3,-11],[-2,-10],[-5,-12],[0,-7],[14,-13],[8,-2],[2,-7],[7,-48],[16,-36],[5,-14],[2,-3],[0,-2],[8,-8],[20,-41],[11,-52],[6,-18],[15,-22],[42,-39],[38,-85],[53,-34],[19,-30],[4,-3],[4,-1],[7,0],[-1,-6],[-2,-7],[-1,-5]],[[45342,20096],[6,-7],[7,-17]],[[45355,20072],[76,-42],[5,-18],[4,-8],[35,-21]],[[45475,19983],[16,-22],[11,-9]],[[45502,19952],[1,-12],[-1,-14],[-3,-10]],[[45499,19916],[10,-23]],[[45509,19893],[10,-9],[11,-24],[0,-8],[11,-23],[65,-41],[42,0],[12,-12],[3,-2],[17,2],[5,-1],[4,-1]],[[45689,19774],[7,-6],[3,-1],[1,-3]],[[45700,19764],[41,-41]],[[45741,19723],[37,-6],[8,-5],[7,-10],[8,-4],[70,-4],[9,3],[19,9],[15,-1],[138,-135],[20,-36],[62,-46],[4,-15],[9,-6],[14,-19],[4,-7],[14,-32],[130,-98],[74,-82],[128,-46],[61,-88],[34,31],[44,-43],[26,-19],[13,0],[15,-21],[30,0],[13,-12],[17,-29],[22,-22],[12,-41],[20,-27]],[[46818,18912],[11,-45],[1,-7]],[[46830,18860],[23,-26],[9,-18],[0,-10],[-6,-53],[-2,-11],[-5,-7],[-9,-6],[-4,-19],[-17,3],[-5,-22],[-3,-3],[-4,0],[-4,0],[-4,0],[-13,-12],[-8,-19],[2,-4],[4,-4]],[[46784,18649],[7,-4]],[[46791,18645],[-4,-9],[-6,-10],[-8,-8],[-13,-8]],[[46760,18610],[8,-33],[-12,-17],[-16,-10]],[[46740,18550],[0,-9]],[[46740,18541],[9,-5]],[[46749,18536],[0,-6],[-5,-12]],[[46744,18518],[-13,-17],[-3,-9],[18,-7],[0,-8],[-5,-10],[-44,-49],[-38,-23],[-31,-90],[-1,-48],[-15,-33],[-15,-220],[-15,-6]],[[46582,17998],[4,-19]],[[46586,17979],[-5,-8],[-6,2],[-7,3],[-7,-3],[-4,-14]],[[46557,17959],[4,-8],[7,-7],[-2,-18]],[[46566,17926],[-50,-26]],[[46516,17900],[-2,-31]],[[46514,17869],[-4,-8],[-6,-12],[-7,-32]],[[46497,17817],[-14,12],[-2,-4],[-2,-4],[-2,-11],[-1,-27],[-34,-24]],[[46442,17759],[20,-56]],[[46462,17703],[35,-20],[104,13],[83,-1],[123,-46],[63,-47],[6,-2],[3,-1],[10,-2],[57,5],[13,-17],[4,-3],[42,-29],[40,2],[67,41],[50,-55],[15,4],[20,22],[26,12],[25,-6],[1,0],[15,-27],[7,-17],[10,-17],[36,-16]],[[47317,17496],[11,33],[8,16],[8,13]],[[47344,17558],[5,12],[1,13],[1,30],[30,19],[13,23],[7,8],[10,7],[81,-17],[7,-5],[6,-12],[6,-24],[3,-6],[5,-4],[10,-3],[23,-18],[14,15],[14,24],[21,15],[8,7],[7,10],[3,14],[0,9],[-1,5],[0,4],[5,12],[1,7],[-1,6],[-2,8],[-9,25],[1,9],[16,8],[2,11],[2,13],[4,10],[28,1],[4,10],[0,28],[3,13],[11,22],[51,28],[9,0],[21,-13],[24,2],[6,7],[1,14]],[[47795,17905],[-3,34]],[[47792,17939],[25,37],[8,3],[19,3],[7,4],[17,58],[4,12],[6,9],[43,9],[1,72],[32,54],[16,82],[0,28],[-1,12],[0,3],[0,2],[4,7],[4,9],[3,8],[-2,8],[-7,12],[-1,9],[7,40],[1,15],[-4,19],[-2,19],[-1,7],[-1,5],[3,7],[2,2],[13,3],[3,9],[0,12],[-3,27],[2,10],[4,10],[4,11],[1,14],[-3,7],[-9,16],[-10,54]],[[47977,18667],[1,15],[3,7],[13,-1],[6,5]],[[48000,18693],[0,12],[-7,20]],[[47993,18725],[1,11]],[[86115,60068],[18,-61],[52,-23],[13,-87],[74,-33],[47,-52],[7,-61],[-71,-64],[60,-144],[22,-26],[151,-109],[-11,-65],[-30,-67],[-89,10],[-11,-41],[58,-24],[38,-72],[45,-23],[25,-49],[62,-61],[53,18],[70,-49],[-59,-99],[46,-33],[40,-61],[-46,-69],[-1,-87],[14,-57]],[[86692,58579],[-46,24],[-98,-35]],[[86548,58568],[-68,178],[0,75],[-73,50],[14,57],[-6,63],[-29,13],[-98,-50],[-55,28],[-21,41],[-35,-21],[-9,73],[-42,53],[-40,-28],[-59,-14]],[[86027,59086],[-35,59],[-84,108],[-80,44],[-86,-21],[-46,9],[-94,53],[22,37],[-49,109],[12,46],[-24,27],[35,40],[29,92],[-7,64],[-40,113],[-57,36],[-7,51]],[[85516,59953],[48,11],[63,-10],[52,32],[99,13],[25,32],[138,-33],[24,28],[80,-10],[-1,41],[71,11]],[[45249,45131],[39,-29],[-23,-48],[-47,4],[-16,57],[47,16]],[[45226,45483],[30,-17],[6,-71],[-46,29],[10,59]],[[125291,7731],[-18,-75],[-65,-1],[8,83],[55,62],[20,-69]],[[125319,7818],[-54,45],[39,30],[15,-75]],[[124296,9371],[83,-12],[57,-28],[56,-9],[25,-23],[141,-55],[30,-53],[48,-16],[114,-70],[80,-6],[228,117],[59,-19],[44,40],[61,-41],[58,101],[28,13],[57,-42],[38,25],[26,71],[85,-63],[47,-101],[-24,-92],[24,-106],[-20,-79],[13,-111],[-2,-75],[-18,-31],[25,-71],[-10,-83],[24,-36],[-16,-104],[-21,17],[18,71],[-63,84],[-28,-123],[-35,-75],[9,-120],[-26,-48],[5,-79],[-24,-62],[44,-55],[-15,-64],[13,-101],[-51,21],[-29,-63],[-54,105],[91,23],[-19,84],[-57,3],[-40,46],[-41,-54],[-45,-10],[-10,-73],[-28,-45],[0,-86],[-61,-28],[-63,-121],[-4,-71],[-82,-11],[-76,58],[-79,3],[-106,29],[-17,64],[15,34],[-25,60],[-34,-19],[-44,51],[-10,46],[-57,84],[-28,5],[-44,115],[-16,74],[-34,34],[-24,215],[122,-111],[13,48],[-35,14],[-71,90],[-27,133],[-56,72],[-51,88],[-22,101],[-28,60],[-10,69],[-34,70],[-3,88],[-26,52],[35,68],[-4,112],[31,-13]],[[125687,9596],[32,-41],[-29,-37],[-43,33],[-81,-11],[-3,63],[103,25],[21,-32]],[[125516,9998],[82,-138],[50,-17],[-3,-61],[17,-71],[-10,-38],[-89,-11],[-31,100],[-42,39],[10,33],[-59,61],[37,31],[3,41],[35,31]],[[124030,9789],[-57,-49],[-14,100],[-18,20],[9,144],[32,30],[14,50],[39,-33],[23,-186],[-28,-76]],[[124517,10735],[-56,-10],[-4,42],[37,9],[23,-41]],[[121561,12549],[-15,-88],[40,-19],[86,17],[59,-19],[23,-64],[-29,-34],[-44,28],[-68,1],[-55,-32],[2,-48],[-61,-50],[-34,44],[-60,20],[-28,-39],[-46,12],[-65,-5],[-51,-20],[-22,55],[-48,39],[34,98],[70,28],[103,22],[106,52],[32,-15],[71,17]],[[127634,17598],[8,-55],[-20,-133],[-18,57],[-4,83],[34,48]],[[127612,17636],[-21,66],[-6,112],[41,3],[-16,-74],[2,-107]],[[112124,18793],[31,-91],[4,-54],[32,-105],[7,-104],[-42,71],[-31,90],[-17,101],[0,66],[16,26]],[[127557,19254],[7,-120],[27,-50],[-41,-151],[-41,-129],[-29,-125],[-32,-39],[-21,110],[47,137],[-12,91],[42,43],[30,53],[5,70],[-28,63],[11,39],[35,8]],[[126696,20048],[60,-38],[41,-145],[-33,-19],[-20,52],[-70,128],[22,22]],[[113061,21663],[-38,23],[33,68],[29,-33],[-24,-58]],[[125934,22013],[-43,-2],[14,70],[29,-68]],[[124858,23281],[27,-8],[-8,-53],[26,-55],[-23,-51],[-27,17],[-9,55],[-40,68],[47,-7],[7,34]],[[122307,23975],[-48,-4],[25,70],[23,-66]],[[122356,24378],[4,-49],[-38,-16],[-22,43],[-33,-51],[-8,-60],[-54,-39],[-63,17],[32,107],[25,34],[120,45],[37,-31]],[[121322,24906],[34,-36],[-4,-120],[-28,37],[-22,74],[20,45]],[[121171,24894],[-30,-18],[1,67],[30,11],[-1,-60]],[[116565,25114],[3,-72],[-38,29],[35,43]],[[116812,25593],[-7,-70],[-39,-7],[12,77],[34,0]],[[121219,26084],[-16,-20],[13,-68],[30,-15],[-2,-39],[-29,-90],[3,-75],[33,16],[56,-45],[-20,-42],[-66,26],[-35,-15],[-68,41],[-21,135],[8,74],[64,41],[-6,80],[56,-4]],[[118793,27455],[0,-31],[28,-45],[-5,-63],[38,-4],[31,-64],[-50,-22],[-67,44],[-66,-35],[-37,1],[4,82],[40,-1],[14,25],[-21,101],[47,93],[30,0],[14,-81]],[[118838,27575],[26,1],[45,-93],[14,24],[45,16],[17,29],[46,-26],[55,65],[47,37],[21,-32],[38,-5],[18,-88],[20,3],[-36,-136],[-21,14],[-33,-86],[-75,-65],[-45,-61],[-102,79],[-83,93],[-6,65],[-19,37],[-25,156],[13,48],[40,-75]],[[121233,27733],[-16,-95],[-50,-126],[-11,14],[60,187],[17,20]],[[119634,27721],[-2,-71],[19,-56],[-25,-40],[-27,88],[6,49],[29,30]],[[123447,27926],[25,-24],[-25,-56],[32,-58],[42,-28],[18,-68],[5,-118],[26,-71],[-19,-53],[15,-79],[6,-151],[39,-47],[56,9],[31,-44],[-45,-103],[-4,-111],[41,-8],[26,-29],[27,-104],[43,-35],[-27,-118],[6,-30],[46,-2],[1,-136],[9,-157],[26,-66],[-22,-203],[31,-118],[27,-36],[7,-120],[29,-119],[30,-45],[35,-16],[45,30],[36,48],[8,68],[45,-31],[56,43],[25,44],[27,-57],[-2,-62],[15,-73],[22,-44],[81,-33],[21,-73],[27,-36],[54,-33],[47,-67],[27,3],[-38,-95],[-5,-44],[25,-73],[-17,-64],[7,-91],[36,-132],[-4,-96],[40,-96],[-10,-87],[10,-45],[-17,-38],[-6,-68],[23,-22],[45,-118],[32,-36],[44,-96],[62,-28],[-23,-67],[27,-77],[6,-49],[41,-92],[-2,-77],[30,-72],[-17,-46],[-1,-139],[-36,-139],[8,-66],[29,-54],[31,-19],[12,-68],[49,-22],[-18,-113],[-6,-102],[21,-53],[43,-61],[81,-76],[35,5],[60,-81],[28,13],[72,-72],[98,-8],[49,-66],[16,-72],[0,-52],[35,-66],[39,-5],[-14,89],[37,-27],[5,-55],[35,-51],[47,19],[22,-37],[47,-16],[21,-45],[-16,-30],[71,-69],[-3,56],[47,27],[17,-94],[69,-46],[22,-37],[1,-46],[28,-32],[-77,-17],[-26,-34],[26,-48],[7,-52],[30,-26],[34,-70],[24,1],[28,-67],[40,-10],[32,-59],[-13,-56],[10,-58],[26,-28],[24,-109],[28,-54],[19,-84],[-17,-44],[19,-99],[48,-182],[36,-86],[-4,-65],[53,62],[20,-49],[53,-53],[-37,158],[25,83],[24,14],[39,-77],[23,-79],[32,-15],[82,-73],[21,132],[27,-12],[46,-87],[-2,-79],[27,-54],[-19,-166],[-4,-119],[26,-73],[-17,-20],[26,-130],[65,-37],[39,-59],[23,-80],[34,-13],[49,-77],[67,-66],[39,-4],[38,25],[12,-74],[47,-43],[27,-122],[20,-65],[35,-65],[59,-64],[39,-16],[33,-60],[6,-95],[65,-149],[91,-28],[9,-117],[-16,-67],[-1,-64],[88,-152],[29,-10],[-22,-69],[-24,-136],[13,-109],[-1,-118],[15,-22],[1,-148],[21,-76],[-48,-39],[-17,-39],[29,-42],[-18,-42],[32,-27],[22,-70],[38,-69],[3,-48],[49,-97],[2,-161],[54,-122],[-10,-118],[5,-80],[21,-44],[-9,-127],[-59,-105],[-12,-77],[-31,-99],[11,-46],[-16,-105],[-2,-81],[-23,-152],[-24,-58],[2,-57],[-22,-98],[-36,-115],[-25,-162],[7,-63],[31,-55],[-15,-40],[4,-53],[-29,-55],[-2,-95],[-23,-62],[6,-39],[-34,-54],[2,-46],[-24,-36],[-36,-114],[-32,-37],[-38,-132],[21,-28],[-14,-46],[-2,-91],[-111,-111],[-24,-47],[7,-47],[-96,-35],[-39,-31],[-64,-120],[-17,-81],[-23,-46],[-42,-24],[19,-34],[-31,-104],[-30,-13],[-13,-90],[-6,-122],[-17,-69],[-34,-9],[3,-57],[-55,-56],[-39,-80],[-2,-97],[-45,-38],[31,-27],[-18,-118],[-31,-47],[8,-79],[-30,-24],[4,-107],[-58,-10],[-24,-98],[-32,-58],[0,-43],[-39,-101],[-34,-32],[5,-56],[-30,-31],[4,-39],[-15,-122],[7,-102],[-24,-41],[-5,-112],[-51,-164],[-11,-60],[45,-181],[-27,-39],[13,-130],[-34,-33],[-41,-2],[-47,-92],[-72,-53],[-69,-8],[-136,6],[-84,-21],[-45,7],[-114,-7],[-149,-58],[-126,-102],[-74,-86],[-198,-261],[-179,-60],[-59,24],[-29,-33],[30,-38],[10,-58],[44,31],[20,-55],[-7,-86],[-65,57],[-32,79],[-35,31],[-33,-49],[-34,0],[-42,153],[-90,-7],[-47,68],[-6,68],[47,35],[-30,87],[-70,7],[-103,-162],[-53,7],[-32,65],[69,23],[52,112],[-4,66],[-31,35],[-17,60],[-61,0],[-8,-25],[-107,-90],[0,-57],[49,33],[29,-25],[-29,-75],[-96,-9],[-58,-62],[-76,-53],[-79,-127],[-53,-22],[-17,-39],[-47,-42],[-78,64],[-36,-4],[-69,78],[-95,35],[-61,65],[-97,66],[-67,-24],[-52,25],[-54,51],[-71,13],[-34,-14],[-27,-66],[-65,11],[-22,51],[-92,101],[-70,45],[-91,-10],[-42,20],[-93,96],[-47,134],[-39,44],[-9,48],[-48,19],[-73,134],[-21,56],[18,33],[-45,106],[43,32],[31,84],[-5,90],[-109,337],[-42,74],[7,37],[-110,127],[-56,54],[36,65],[38,-30],[3,-91],[36,4],[7,58],[-52,54],[59,26],[-27,67],[-30,23],[-47,-43],[-54,-16],[3,-37],[-33,-53],[-52,14],[-41,-18],[-41,-50],[-136,-14],[-27,30],[6,42],[63,52],[54,72],[17,85],[-2,65],[15,33],[-8,113],[20,83],[-37,40],[-70,146],[-12,74],[-57,118],[-23,-61],[8,-50],[-41,-67],[-18,-107],[11,-21],[-63,-269],[0,-45],[-30,-31],[-42,32],[-60,3],[-27,-30],[-36,0],[-26,-43],[-50,9],[-33,-34],[-45,21],[47,95],[-7,35],[34,86],[42,-17],[49,13],[47,-30],[21,23],[5,71],[21,114],[-21,105],[13,117],[-14,58],[37,58],[-8,35],[32,45],[-5,40],[44,56],[23,57],[59,48],[2,55],[-48,166],[17,42],[72,41],[-32,75],[-22,133],[-39,30],[3,-73],[-31,-81],[-21,21],[-84,-115],[-24,-94],[-5,-59],[-58,-164],[-26,-32],[-53,-15],[-21,28],[-60,-77],[-76,-57],[-10,-29],[-82,-77],[-52,-145],[-45,-48],[4,-42],[-72,-51],[-29,-100],[58,-174],[-104,73],[-42,-57],[-10,45],[-68,104],[-75,91],[-47,-8],[32,69],[81,-110],[-3,106],[-19,122],[-28,98],[-5,73],[-26,65],[-131,157],[7,58],[-21,119],[-58,79],[-83,44],[-43,-31],[-21,25],[-33,134],[-50,22],[27,47],[-22,75],[75,-11],[1,89],[-47,80],[-114,-44],[2,43],[36,43],[-54,89],[-45,35],[-4,42],[-37,11],[-12,-42],[-51,24],[-3,-48],[-102,9],[-35,55],[-46,28],[-52,65],[-81,13],[-43,-12],[3,-44],[-95,-4],[-60,77],[-113,112],[-94,75],[-138,78],[-131,-75],[-258,16],[-156,-25],[-82,-4],[-32,-13],[-97,-8],[-80,-21],[-85,-55],[-44,-41],[-166,-107],[-78,-41],[-96,-23],[-89,-55],[-94,-39],[-89,-19],[-145,-8],[-116,22],[-72,31],[-41,-29],[-27,3],[-52,-37],[-128,-132],[-76,-33],[-92,-70],[-37,-15],[-38,-59],[-74,-43],[-134,-30],[-60,-53],[-33,-52],[-41,-144],[-21,-132],[-24,-13],[-51,-77],[-8,-50],[-66,-55],[-86,-12],[-28,-52],[-46,-9],[-24,76],[-25,11],[-55,-21],[-34,9],[-81,-19],[-5,-30],[-67,28],[-29,-6],[-48,-60],[-31,35],[-34,86],[-30,-2],[-48,-41],[-48,24],[-22,-12],[-37,35],[-76,3],[-65,-33],[-26,15],[-49,-16],[-151,-14],[-59,-49],[-92,26],[-68,2],[-75,-37],[-89,-97],[-38,-88],[4,-46],[-39,-50],[-43,-17],[-4,-33],[-55,30],[-70,16],[-22,-37],[-56,-31],[-8,-56],[-88,-43],[-35,-67],[-1,-52],[-46,-1],[-55,-47],[-104,-24],[-15,-28],[-48,16],[-55,-29],[-69,42],[-72,7],[-104,-23],[-41,18],[-52,-4],[-74,17],[-82,76],[-88,29],[-34,67],[-71,113],[-51,57],[-106,82],[-58,8],[-29,-27],[-35,51],[-17,111],[-3,148],[10,39],[-13,61],[34,88],[28,-48],[63,-21],[57,34],[33,52],[45,131],[12,7],[3,163],[-28,224],[64,37],[-21,40],[12,50],[-12,94],[16,74],[-11,80],[7,79],[-25,172],[-86,214],[-55,194],[-50,100],[-30,120],[-49,260],[6,42],[-18,71],[10,78],[-8,152],[12,110],[-31,152],[-25,87],[-70,112],[-28,78],[4,80],[-22,83],[-41,75],[-43,105],[-56,77],[-26,177],[18,82],[-27,148],[-23,82],[-95,245],[-66,150],[-113,173],[-20,96],[29,74],[16,-66],[33,17],[18,-78],[23,-35],[17,-83],[36,-60],[61,42],[13,33],[-1,93],[-39,62],[-37,12],[-41,83],[-8,92],[-53,130],[0,47],[43,22],[88,-177],[-10,-20],[-12,-131],[35,-37],[20,54],[33,-44],[13,-86],[52,-71],[40,43],[10,37],[-16,75],[25,128],[1,91],[-41,32],[-10,46],[-30,42],[-47,122],[-47,172],[-34,28],[-40,145],[-2,101],[-63,120],[-19,74],[-2,102],[18,49],[-7,75],[17,85],[38,104],[17,68],[52,66],[17,123],[-13,102],[24,69],[-1,73],[-18,89],[-39,37],[-4,93],[32,61],[27,92],[36,173],[44,118],[55,42],[-30,-237],[37,-88],[-25,-99],[27,-28],[41,49],[31,-21],[9,75],[40,119],[10,58],[48,140],[108,92],[67,18],[45,42],[89,52],[57,105],[77,66],[50,110],[83,55],[26,79],[18,-12],[63,25],[59,54],[60,73],[52,-59],[70,56],[52,-38],[60,-27],[61,13],[34,30],[27,-9],[63,34],[38,76],[76,82],[89,0],[90,32],[38,-4],[49,34],[49,97],[6,33],[36,42],[55,14],[63,-22],[72,-45],[90,64],[103,27],[65,9],[157,89],[116,79],[93,101],[44,73],[79,176],[48,160],[0,58],[47,37],[2,68],[21,58],[32,-8],[43,49],[76,117],[39,29],[14,93],[-62,33],[3,145],[-24,91],[3,138],[9,49],[40,76],[-1,31],[52,72],[66,10],[-20,51],[15,52],[51,1],[21,113],[48,58],[12,59],[34,25],[-6,-95],[-12,-31],[74,-142],[-3,-65],[45,-62],[53,-195],[13,-9],[46,-109],[6,98],[28,109],[-24,57],[22,63],[78,-88],[-16,82],[41,88],[-51,-12],[-31,91],[-48,72],[33,80],[-1,77],[-42,59],[20,67],[70,-4],[-16,-58],[40,-69],[57,50],[54,10],[37,-77],[46,-8],[22,34],[29,-24],[45,-5],[1,46],[-70,-8],[-13,77],[20,46],[34,-22],[27,51],[7,178],[-36,-102],[-42,60],[-10,115],[10,79],[38,57],[48,-24],[26,82],[0,47],[38,3],[46,-42],[51,-85],[15,94],[-20,40],[-42,-35],[-23,54],[-10,67],[25,26],[47,9],[-8,63],[45,-40],[34,-7],[36,-56],[24,26],[-7,71],[-28,1],[-29,37],[11,44],[-34,81],[52,62],[70,65],[45,-1],[15,77],[-14,90],[42,-16],[-13,-49],[10,-90],[23,38],[30,-10],[2,-69],[36,34],[45,6],[-21,77],[28,21],[5,76],[26,19],[-3,62],[-22,42],[6,62],[22,-4],[16,-140],[22,-39],[55,135],[42,5],[26,-123],[52,48],[-2,68],[45,40],[-27,94],[79,42],[45,-65],[14,-77],[82,22],[37,-16],[27,-71],[68,-74],[34,-66],[13,-51],[44,-81],[104,-124],[8,-76],[-19,-8],[-31,-180],[61,-83],[-11,125],[44,94],[41,-83],[-6,135],[49,42],[117,-53],[82,-25],[47,-52],[1,-59],[33,-30],[-16,164],[39,-12],[59,-44],[46,-114],[23,17],[-17,92],[12,63],[31,30],[-45,74],[-8,65],[-88,97],[6,49],[47,115],[1,34],[84,46],[11,33],[-12,50],[39,74],[-12,53],[20,101],[50,-12],[75,60],[42,72],[-44,90],[-15,10],[4,133],[45,2],[40,58],[-3,92],[89,78],[16,81],[63,1],[0,-42],[23,-34],[15,66],[-22,31],[28,41],[49,-16],[1,66],[-11,52],[44,10],[38,-38],[42,18],[32,-52],[33,-17],[110,17],[46,31],[12,-27],[43,-27],[85,79],[59,-33],[7,49],[52,37],[20,31],[9,110],[-23,50],[40,82],[-39,19],[-38,89],[-48,26],[-48,-12],[-61,-39],[-88,133],[32,32],[29,69],[24,-32],[14,-59],[29,-39],[19,95],[42,31],[13,-42],[35,-12],[76,-170],[33,9],[58,101],[38,-63],[50,-150],[46,-34],[33,26],[50,-64],[55,-26],[23,40],[46,34],[38,-15],[-22,-73],[39,-36],[24,20],[47,-3],[23,-81],[36,31],[36,-46],[54,-14],[33,9],[37,55],[25,8],[35,-110],[41,-12],[39,-71],[73,24],[17,58],[32,23],[27,-14],[29,20],[13,53],[65,33],[18,-29],[-8,-51],[-44,-57],[7,-46],[37,-12],[45,65],[55,-98],[-15,-32],[14,-58],[87,10],[42,114],[-18,33],[-51,9],[46,85],[14,0],[44,67],[31,-32],[22,-111],[38,-68],[71,37],[28,-81],[-33,-50],[-47,-24],[2,-45],[-25,-77],[-29,-38],[-49,-37],[6,-35],[56,-65],[-53,-12],[27,-52],[-45,-98],[-33,13],[2,81],[-26,-16],[2,-45],[-50,-44],[-28,47],[-20,-54],[-64,-49],[14,-32],[-25,-49],[-4,-89],[35,-92],[26,-30],[-5,-64],[-26,-37],[-7,-108],[-57,-80],[-31,-87],[-20,-16],[-35,-92],[-4,-45],[-50,-53],[30,-129],[31,-44],[39,-13],[21,-36],[59,-48],[35,-54],[110,-99],[11,-76],[30,-42],[26,-4],[43,-60],[33,-22],[59,-92],[53,-22],[32,46],[21,-36],[79,-62],[42,-62],[52,-33],[20,2],[76,-49],[46,-115],[74,-108],[47,-53],[48,-31],[70,-29],[63,9],[37,-37],[109,-47],[9,-37],[37,-35],[-6,-52],[26,-105],[24,-38],[63,-16],[78,-98],[63,-22],[45,-33],[28,-52],[92,3],[103,40],[95,99],[29,16],[19,65],[9,75],[22,94],[-6,34],[96,194],[14,81],[27,80],[17,136],[29,87],[-18,89],[9,21],[14,157],[19,105],[58,209],[11,82],[-24,82],[-33,243],[28,147],[-2,105],[-39,79],[-5,107],[35,175],[35,87],[14,57],[-21,61],[-19,113],[16,41],[48,57],[22,93],[0,53],[-55,88],[0,-63],[-28,11],[61,195],[18,96],[27,54],[17,-62],[22,16],[-10,89],[70,345],[11,116],[-6,103],[13,34],[56,17],[30,51],[18,64],[38,5]],[[123346,27921],[-50,-24],[-14,62],[37,34],[27,-72]],[[123358,28231],[-44,-4],[6,41],[29,9],[9,-46]],[[75376,64588],[4,-28],[-35,-71],[-8,-48],[42,-55],[11,-71],[64,-97]],[[75454,64218],[-41,-103],[5,-85],[-99,-17],[-71,48],[-30,-5],[-19,-65],[57,-10],[21,-62],[-18,-42],[-82,-62],[17,-37],[-22,-66],[37,-31],[-27,-65],[-62,-16],[-70,-89]],[[75050,63511],[-40,-20],[-7,-53],[-82,-24],[-39,3],[-74,-58],[-28,18],[-124,3],[-82,-30],[-23,-57],[-110,-56],[-36,13],[-99,0],[-38,28],[-133,23]],[[74135,63301],[-86,26]],[[74049,63327],[-39,2],[-40,-10],[-15,1],[-64,28],[-90,7],[-21,16],[-30,4],[-6,5],[-4,2],[-101,24],[-14,12],[-8,20],[-2,13],[-7,5],[-16,4],[-3,3],[-3,3],[-1,4],[0,8]],[[73585,63478],[4,16]],[[73589,63494],[0,7],[-4,14],[-5,5],[-22,2],[-20,31],[-6,12],[-2,15],[-1,6],[-3,7],[4,11],[23,13],[9,13],[0,8],[0,8],[-9,3],[-25,-5],[-39,-22],[-27,-2],[-17,-6],[-16,-9],[-12,-12],[-18,-3],[-13,-10],[-5,-1],[-7,3],[-11,10],[-34,5],[-54,0],[-16,-18],[-12,0],[-12,6],[-14,4],[-27,-4],[-33,-15],[-26,-27],[-36,-89],[-93,13],[-6,24],[-29,20],[-12,0],[-40,-11],[-16,1]],[[72903,63501],[-12,11]],[[72891,63512],[1,46],[-35,37],[-97,-94],[-95,59],[-2,46],[-106,26]],[[72557,63632],[13,31],[-36,96]],[[72534,63759],[49,91],[0,27],[-24,17],[-12,18],[-3,15]],[[72544,63927],[1,0],[2,-1],[22,-7],[35,6],[18,31],[24,-25],[52,-11]],[[72698,63920],[47,-52],[0,-45],[45,9]],[[72790,63832],[7,-5],[0,-11],[-9,-37]],[[72788,63779],[21,-11]],[[72809,63768],[8,4],[17,11],[23,37],[2,5],[4,2],[11,6],[12,22],[4,13]],[[72890,63868],[-13,33]],[[72877,63901],[5,25],[0,6]],[[72882,63932],[36,-9],[5,1],[5,5],[13,15],[9,0],[51,-21],[4,-8],[15,1],[26,9]],[[73046,63925],[-3,-24]],[[73043,63901],[3,-4],[20,-10],[18,-22]],[[73084,63865],[1,-4],[-1,-8]],[[73084,63853],[0,-3],[-1,0]],[[73083,63850],[3,-8],[6,-4],[40,0],[68,7],[11,13],[7,8],[24,3],[6,3],[3,6],[-1,5]],[[73250,63883],[-9,4]],[[73241,63887],[18,22],[9,3],[18,-4],[26,6],[14,36],[11,10],[1,1],[55,-4],[23,-5],[3,1],[4,11],[4,3],[33,7],[87,-4],[14,45],[85,8],[28,-38],[60,28],[14,0],[21,-5],[8,-18],[10,-8],[8,-7],[-11,-6],[-4,-14],[2,-16]],[[73782,63939],[62,-52]],[[73844,63887],[7,4],[3,0],[16,-4],[10,14],[0,6],[-1,3],[-1,4],[-1,3],[0,3],[0,11]],[[73877,63931],[1,2],[4,10],[0,14]],[[73882,63957],[6,9],[7,15],[0,8],[1,7],[-1,8],[-4,8],[-7,15],[-16,11],[-10,-5],[-6,0],[-21,3],[-6,8],[7,12],[3,5],[3,16],[24,43]],[[73862,64120],[-1,2],[-9,14],[-12,33]],[[73840,64169],[-66,85]],[[73774,64254],[-8,22],[3,13]],[[73769,64289],[2,1],[3,0],[2,1],[7,12],[15,12],[21,25],[60,38],[92,27],[13,7],[37,36],[44,129],[40,-12],[7,-4],[6,-5],[5,-11],[18,-7],[18,26],[15,29]],[[74174,64593],[2,19],[-3,38]],[[74173,64650],[-5,8],[-1,-1],[0,6],[12,27]],[[74179,64690],[63,-39],[36,-70],[92,-21],[49,48],[97,-29],[2,52],[37,65],[46,-10],[24,153],[108,-15],[79,-29],[80,-49],[53,9],[82,-71],[125,-20],[29,43],[79,-10],[7,-25],[82,-12],[27,-72]],[[86548,58568],[-161,56],[-71,9],[-35,22],[-35,98],[-64,35],[-49,103],[-36,29],[-27,107],[-31,21]],[[86039,59048],[-12,38]],[[86661,60438],[36,-5],[9,-52],[74,27],[10,-40],[53,-42],[46,-94],[30,8],[48,-88],[14,-76],[41,-27],[95,-19],[46,-22],[49,9],[27,86],[43,70],[56,20],[65,54],[32,83],[48,80]],[[87483,60410],[28,-27],[149,-239],[35,-86],[24,-135],[72,-117],[59,-48],[-10,-63],[29,-38],[103,-37],[75,11],[30,-40],[40,-14],[38,-55],[13,-78],[-54,37],[-129,18],[-44,-59],[-76,-36],[-51,-85],[15,-56],[-34,-127],[11,-45],[-40,-55],[-9,-89],[43,-56],[-66,-67],[1,-67],[-17,-95],[-51,97],[-35,7],[-18,-154],[-32,-82],[9,-28],[5,-200]],[[87596,58302],[-37,7],[-65,-30],[-67,107],[-47,19],[-38,81],[-76,55],[-8,43],[26,36],[71,15],[24,45],[-14,38],[-49,46],[-7,72],[82,50],[-109,168],[-38,35],[-42,-14],[-111,-100],[-69,-42],[-33,-47],[-71,-43],[-32,-73],[-58,-16],[-48,-78],[-88,-97]],[[86115,60068],[94,95],[81,-9],[19,-22],[80,-32],[-4,-46],[98,-61],[94,20],[46,-53],[63,-44],[48,43],[27,96],[-39,63],[-56,33],[-56,52],[-17,66],[-23,-4],[6,90],[34,-3],[51,86]],[[80584,33060],[-12,-25],[-6,-14],[-14,-57],[-3,-19],[-2,-6],[-3,-8],[-9,-14],[-4,-7],[-2,-16],[12,-6],[4,-38],[-14,-69],[10,-19],[6,-9],[7,-3],[-2,-7],[2,-5],[3,-5],[2,-8],[0,-1],[2,2],[7,17],[5,6],[8,3],[66,-56],[24,-45],[19,-68],[-4,-15],[-5,-12],[3,-20],[-7,-16],[-9,-10],[-10,-2],[-10,8],[-1,-7],[-3,-5],[-3,-4],[-6,-1],[-10,-6],[-9,-9],[-9,-69],[-41,-41],[-7,-1],[-1,2],[-6,-2],[-34,-107],[-4,-22],[6,-31],[-2,-11],[-17,10],[-9,-10],[-15,-41],[-20,-33],[-6,-13],[-6,-45],[-7,-27],[-9,-25],[-12,-23],[-26,-34],[-3,-9],[-10,-38],[-5,-10],[-26,-25],[-13,-21],[-21,-15],[-2,-2],[-7,2],[-9,5]],[[80295,31848],[-9,-25],[-7,-5],[-2,-3]],[[80277,31815],[-9,-29]],[[80268,31786],[-34,9],[-90,-1]],[[80144,31794],[-12,149],[-13,71],[-47,120],[-4,73],[7,119],[-7,158],[14,42],[-11,61],[8,75],[-56,73],[-15,62],[-20,8],[-3,11],[1,12],[2,11]],[[79988,32839],[12,10]],[[80000,32849],[-4,14]],[[79996,32863],[6,61],[37,15],[68,-38],[12,-104],[33,14],[30,-14],[44,24],[31,-13],[18,30],[29,-2],[31,71],[10,117],[1,88],[78,-71],[26,57],[29,-11],[38,35],[42,-52],[25,-10]],[[71184,65915],[34,-21],[58,-80],[-13,-59],[46,-6],[7,-69],[-32,-69],[-41,-26],[-11,-59]],[[71232,65526],[-6,2],[-7,22],[-9,-5],[-9,-2],[-29,11],[-8,-23],[-6,-6],[-21,-13],[-22,-74],[-4,-8],[-15,-11],[-2,-3],[0,-3],[-1,-4],[-14,-24],[-2,-6]],[[71077,65379],[5,-2],[9,-6],[-7,-5],[-5,-22]],[[71079,65344],[4,-15],[3,-7],[16,-11],[24,-61],[4,-6],[7,-1],[3,-3],[3,-8]],[[71143,65232],[-3,-6],[-6,-7],[-8,-21],[-2,-17]],[[71124,65181],[-9,-10],[-9,-5]],[[71106,65166],[-55,4],[-64,-29],[-30,65],[-55,55],[-25,-5],[-77,67],[-54,2],[-1,85],[-22,26],[29,68],[-29,43],[-41,-43],[-10,-59],[-84,-35],[-113,26],[27,53],[-32,53],[12,42],[-52,77],[-103,5],[-35,-16],[-7,77],[-70,46],[-72,5],[-17,79],[-31,70],[-67,-6],[-27,-34],[-44,12],[-64,57],[-4,90],[-34,78]],[[69855,66124],[231,149],[86,28],[16,-78],[94,25],[111,-51],[73,41],[40,59],[15,1],[50,-12],[-5,58],[57,20],[48,-30],[30,37],[69,-60],[38,53],[22,-63],[56,-71],[99,18],[28,-42],[112,-50],[-75,-200],[57,-39],[77,-2]],[[70267,41775],[-9,-15],[-26,-72]],[[70232,41688],[-5,-28],[-3,-9],[-7,-33]],[[70217,41618],[0,-15],[6,-16],[69,-154],[9,-14],[11,-1],[3,-5],[-4,-23],[0,-14],[2,-12],[6,-22],[8,-54],[-1,-19],[-8,-32],[0,-11],[2,-9],[9,-14],[9,-34],[15,-8],[6,-30],[0,-15],[0,-19],[-3,-17],[-13,-47],[0,-31],[-15,-25],[-40,19],[-11,-21],[-2,-21],[-10,-23],[-7,-29],[0,-11],[6,-14],[26,-43],[3,-7],[1,-10],[-1,-11],[0,-4],[-3,-13],[-16,-19],[-6,-64],[-33,-75],[-23,4],[-43,-24],[-6,-7],[-3,-13],[-1,-13],[1,-12],[5,-19],[3,-20],[-3,-15],[-13,-12],[-19,0],[-1,-30],[-24,-49],[-11,-11],[-7,-20],[-2,-17],[3,-16],[6,-30],[0,-41],[-24,-100],[-41,-41],[-36,9],[-46,-11],[-7,-150],[-9,-14],[-1,-5],[0,-6],[0,-1],[7,-151],[1,-18],[-3,-21],[-11,-21],[-3,-7],[0,-6],[1,-11],[0,-6],[-2,-25],[0,-13],[1,-15],[2,-14],[11,-38],[0,-14],[-11,-31],[-8,-126],[-4,-19],[-1,-4],[0,-3],[0,-3]],[[69913,39421],[7,-24]],[[69920,39397],[9,-17],[4,-9],[0,-9],[-3,-83],[-1,-20],[3,-24],[7,-23],[11,-22],[9,-23],[-1,-26],[-3,-10],[-12,3],[-3,-3],[-1,-7],[8,-152],[0,-8],[-2,-5],[-3,-7],[-5,-17],[0,-4],[1,-8],[13,-20],[3,-6],[-2,-7],[-3,-3],[-10,-6],[-10,-22]],[[69929,38859],[4,-110]],[[69933,38749],[19,-34],[1,-28],[-2,-9],[-11,-14],[-5,-14],[0,-13],[4,-25],[-1,-13],[-9,-39],[-4,-40],[0,-38]],[[69925,38482],[-151,-23],[-163,-36],[-100,-38]],[[69511,38385],[5,21],[57,19],[-15,92],[-69,156],[15,43],[-7,83],[-20,67],[36,4],[-2,618],[2,169],[-7,94],[13,34],[-13,51],[-2,303],[-14,53],[-54,93],[-18,109],[-20,37],[10,45],[-3,227],[-5,22],[-216,228],[8,122],[-2,79],[30,64],[15,122]],[[69235,41340],[30,53],[22,-19],[36,124],[53,0],[30,34],[-3,38],[36,58],[51,-4],[14,-39],[45,24],[61,10],[50,-11],[52,85],[56,69],[37,136]],[[69805,41898],[25,69],[-19,25],[-17,106],[49,37],[54,13],[81,60],[37,-60],[27,-14],[21,-52],[73,-108],[15,-62],[80,-55],[20,-36],[6,-31],[4,-2],[4,-9],[2,-4]],[[68973,43763],[-12,-58],[13,-55],[-26,-113],[15,-62],[77,-120],[-19,-78],[11,-55],[52,-119],[37,-47],[7,-55],[51,3],[15,-37],[60,-27],[38,-86],[53,-48],[-7,-32],[-71,35],[-5,-26],[0,-161],[17,-31],[38,-13],[161,-215],[24,-15],[88,-12],[55,74],[52,-12],[36,-75],[18,-99],[-69,-25],[1,-47],[102,-227],[20,-27]],[[69235,41340],[-87,-3],[-70,-34],[-1,43],[-250,81]],[[68827,41427],[-92,-20],[-42,-69],[-28,-5],[-17,-45],[-24,53],[-62,-1],[-81,13],[-14,-12],[-95,1],[-79,19],[-15,-19],[-439,-6],[-45,-75],[-22,-89],[-4,-54],[16,-70],[29,-78],[-6,-55],[28,-24],[-15,-48],[4,-92],[19,-129],[-21,-69],[16,-37],[-4,-57],[14,-21],[14,-28]],[[67862,40410],[-13,-19],[-16,-41],[-18,12],[-38,81],[-31,104],[-40,15],[-16,58],[-53,10],[-43,42],[-84,3],[-21,19],[-86,-33],[-66,-61],[-28,15],[-53,-47],[-19,-83],[-70,29],[-38,43],[-39,-15],[-52,103],[-48,20],[-3,96],[-29,18],[-24,119],[-40,25],[-70,-11]],[[66824,40912],[-29,31],[-12,41]],[[66783,40984],[-6,5]],[[66777,40989],[2,9],[3,32],[16,60],[-6,59],[19,99],[-24,94],[3,53],[64,33],[24,82],[-1,76],[17,19],[-6,95],[-28,34],[10,67],[-34,32],[39,32],[38,62],[81,38],[57,-5],[59,46],[26,78],[68,69],[-17,78],[24,60],[-35,71],[-2,42],[32,13],[39,-14],[25,18],[9,47],[-8,81],[-46,105],[10,31],[68,81],[17,51],[46,8],[71,-30],[77,-92],[52,-20],[13,68],[68,10],[-13,155],[9,71],[51,13],[23,-45],[65,28],[-13,92],[35,150],[56,50],[37,61],[51,36],[30,-10],[89,-67],[50,27],[6,151],[15,24],[102,9],[134,134],[89,40],[28,24],[112,156],[108,7],[27,-49],[62,39],[173,-94]],[[104078,47967],[17,-65],[-8,-64],[-36,26],[-9,87],[36,16]],[[103570,48244],[-20,-85],[-22,44],[42,41]],[[103750,48206],[-9,56],[5,122],[29,-20],[14,-80],[-39,-78]],[[103931,48392],[-42,31],[-8,45],[16,37],[34,-66],[0,-47]],[[103653,48237],[-20,-46],[-45,-52],[-22,31],[28,137],[5,70],[-15,106],[-35,32],[8,96],[28,19],[37,-118],[8,-49],[33,-51],[-10,-175]],[[103568,48686],[-29,-67],[-25,51],[54,16]],[[104322,48129],[7,-55],[-7,-95],[5,-147],[21,-122],[-33,-24],[-13,62],[-40,2],[-37,60],[-34,-27],[-19,-62],[-4,-87],[34,-70]],[[104202,47564],[-27,-42],[-54,99],[-2,89],[-32,77],[23,109],[-43,112],[2,50],[-24,153],[-31,93],[-11,94],[-26,75],[-48,104],[-35,52],[-83,-51],[8,-39],[-23,-60],[-29,-10],[-65,30],[-69,126],[-22,99],[-36,91],[16,112],[-27,76],[-129,33],[65,-73],[54,-20],[14,-29],[-4,-79],[-50,-27],[15,-83],[-38,-110],[32,-26],[9,-68],[36,-90],[2,-93],[-21,-69],[-38,-68],[-27,6],[-21,-40],[-22,-112],[-35,-35],[-61,38],[11,79],[-46,5],[-20,180],[-16,-14],[13,-97],[-14,-37],[19,-92],[-27,-38],[-63,-9],[7,-46],[-77,19],[-27,-40],[-12,69],[-68,-23],[-32,15],[-17,194]],[[102976,48223],[1,51],[-28,109],[5,25],[-20,83],[-16,110],[14,67],[-39,71],[4,68],[39,68],[-44,32],[-50,4],[-10,32],[33,107],[-19,0],[-69,113],[20,134],[46,36],[4,65],[-19,33],[23,65],[2,61],[-101,17],[-28,34],[-100,77],[-46,93],[47,124],[-10,44],[33,18],[16,-40],[30,-4],[40,109],[1,76],[64,12],[72,-19],[44,4],[28,83],[-50,19],[-27,105],[-49,-23],[-44,21],[-40,58],[-2,38],[-74,93],[-37,-18],[-22,82],[35,144],[56,40],[22,66],[49,40],[-13,47],[-41,20],[0,57],[115,-100],[59,-113],[36,24],[17,-24],[33,20],[-54,63],[22,43],[35,-35],[35,-153],[83,-84],[50,1],[47,35],[-15,54],[36,40],[35,-77],[31,-108],[-18,-58],[19,-111],[-15,-162],[15,-56],[28,8],[86,-52],[89,-39],[52,12],[91,0],[32,-17],[158,38],[91,-43],[36,17],[37,-21],[26,26],[104,10],[35,-12],[48,-47],[32,-10],[59,-74],[8,-55],[-38,-17],[-48,41],[-7,-77],[-31,-145],[-16,-19],[-2,-66],[-60,-19],[-17,-72],[-92,-65],[-26,-31],[-89,-2],[-57,-120],[-8,-94],[-21,-9],[0,-79],[33,-89],[20,-102],[9,-100],[62,27],[28,-126],[60,4],[39,63],[-20,113],[18,59],[57,79],[-9,119],[34,-25],[56,52],[39,-75],[39,-199],[-11,-72],[20,-168],[18,-18],[6,-67],[20,-42],[9,-123],[23,-203],[-16,-25],[16,-93]],[[79828,61583],[10,-127],[-17,-51],[-38,-45],[-53,29],[-64,-13],[-25,-26],[-55,-129],[-23,-91],[3,-185],[-58,4],[-44,-54],[2,-40],[-46,-6],[-16,-57],[85,-21],[23,-94],[58,-97],[32,-29],[11,-62]],[[79613,60489],[-79,14],[-2,-8],[0,-14],[-6,-10],[-25,15],[-45,-9],[-28,-28],[-99,114],[-27,-2],[-8,-14],[-2,-4],[-2,-1],[-58,10],[-32,-48],[-18,-6],[-4,0],[-3,1],[-5,0],[-12,-13],[-18,9],[-25,-15],[-35,7],[-37,-89],[-18,-8],[-41,3]],[[78984,60393],[-22,-46],[6,-18]],[[78968,60329],[-14,-2],[-8,3],[-15,19],[-17,-7],[-21,-1],[-11,-3]],[[78882,60338],[-18,-12],[-2,-4],[-2,-7]],[[78860,60315],[0,-9],[1,-10],[1,-7],[20,-14],[22,-67],[3,-44],[-19,-55],[-6,-1],[-32,-9],[-54,-23],[-7,4],[-11,15],[-9,4],[-47,-26],[-19,7],[-33,4],[-102,-48],[-153,100],[-6,1],[-11,-5],[-15,-1]],[[78383,60131],[-1,-8],[1,-11]],[[78383,60112],[-3,-9],[-7,0],[-9,9],[-13,21],[-47,21],[-25,72],[-94,-18],[-39,12],[-2,-4],[-2,-10],[-22,12],[-15,1],[-11,-7],[1,-19],[1,-13],[0,-6],[-2,-4],[-9,-2],[-8,7],[-2,-5],[-4,-1],[-2,-2],[-7,-8],[-5,0],[-18,15],[-111,-56],[-76,17],[-34,-18],[-7,11],[-7,6],[-31,-18],[-2,-5],[0,-11],[-2,-6],[-7,-8],[-25,-4],[-76,14]],[[77661,60096],[9,9],[5,47],[-8,98],[30,81],[-49,96],[-15,88],[-45,18],[-75,54],[-71,113]],[[77442,60700],[31,7]],[[77473,60707],[32,50],[4,9],[5,23],[2,13],[-2,9],[-3,9],[-37,39]],[[77474,60859],[0,13],[8,47]],[[77482,60919],[-3,8]],[[77479,60927],[15,36]],[[77494,60963],[-11,15],[-9,27],[0,2],[0,2],[3,7],[4,4],[10,6],[3,4],[6,11],[4,4],[5,0],[7,-2],[21,12],[52,0],[19,57],[60,65],[8,14],[8,21],[3,20],[-1,8],[0,7],[-25,8],[-12,12],[-10,17],[-9,11],[-12,33],[-27,32],[-3,3],[-2,2],[-6,3],[-11,0],[-4,2],[-3,3],[-4,11],[-3,4],[-3,1],[-16,3],[-10,12],[-12,8],[-5,5],[-4,12],[-7,29],[-5,12]],[[77493,61470],[0,3],[0,2],[2,5]],[[77495,61480],[-1,16],[-2,7],[0,14],[-32,48],[-2,8],[0,5]],[[77458,61578],[1,15]],[[77459,61593],[-10,14],[-5,16],[2,14],[5,15],[4,19],[1,18],[5,14],[1,10],[0,17],[1,8],[5,8],[8,5],[27,4],[12,23],[23,4],[5,10],[0,6],[-3,12],[-1,6],[1,7]],[[77540,61823],[5,18],[-2,10]],[[77543,61851],[33,32]],[[77576,61883],[82,-64],[47,-19],[-4,-39],[-52,-23],[-13,-59],[26,-39],[82,8],[74,25],[61,-4],[41,-27],[78,-11],[139,-41],[76,4],[55,25],[78,-35],[98,4],[112,-28],[40,-31],[75,10],[87,38],[58,86],[82,86],[61,27],[117,19],[158,57],[86,-33],[50,-68],[104,6],[26,-46],[52,24],[30,-15],[17,-71],[92,-54],[82,-16],[55,4]],[[88259,50544],[-12,-46],[-13,15],[-29,82],[8,59],[-13,81],[6,23],[36,11],[9,-4],[-12,-25],[22,-46],[2,-76],[-4,-74]],[[40939,47622],[-37,-101],[-36,-25],[-47,6],[-56,-23],[-70,6],[-10,52],[72,104],[45,23],[54,-55],[36,21],[41,99],[18,-24],[-10,-83]],[[40935,47788],[-13,51],[33,34],[27,-29],[-47,-56]],[[40911,48411],[81,-18],[54,-34],[-16,-33],[-32,39],[-42,7],[-33,-17],[-12,56]],[[40629,48589],[-27,-78],[-45,17],[30,61],[42,0]],[[40494,48614],[70,-25],[-29,-40],[-76,48],[-25,55],[47,-4],[13,-34]],[[40067,49177],[45,-99],[5,-41],[34,-87],[6,-82],[49,-49],[40,-58],[4,-77],[-60,125],[-54,68],[0,104],[-45,83],[-24,113]],[[39135,49461],[76,-4],[12,-161],[-19,-77],[-29,9],[-65,75],[-7,90],[-43,47],[40,67],[63,60],[13,-41],[-41,-65]],[[40067,49514],[-9,-37],[-35,-5],[8,55],[-49,94],[-14,61],[-32,61],[-39,45],[18,24],[31,-34],[6,-51],[52,-118],[28,-30],[35,-65]],[[39296,50047],[-21,-49],[-63,0],[8,33],[76,16]],[[38997,50099],[50,-17],[-4,-76],[20,-23],[25,-85],[51,-86],[-6,-61],[13,-63],[-72,-91],[-60,-22],[-6,39],[-39,53],[-65,40],[-34,59],[40,29],[17,64],[31,54],[20,84],[-21,116],[40,-14]],[[39534,50347],[44,-89],[-47,16],[3,73]],[[38840,51067],[89,-27],[120,27],[27,-29],[-244,-72],[-45,-41],[-22,45],[29,23],[-2,65],[18,60],[30,-51]],[[39125,51190],[100,-35],[70,-101],[23,-51],[81,-59],[0,-65],[16,-67],[-56,-43],[-11,-110],[1,-95],[-15,-19],[-46,116],[48,46],[-12,36],[36,223],[-59,18],[-14,46],[-30,16],[-34,98],[-90,16],[-8,30]],[[76168,62278],[61,37],[74,-24],[-16,-96],[-75,-132],[-9,-85],[27,-58],[57,-15],[14,-44],[99,-96],[-26,-33],[-72,-7],[-34,-24],[72,-105],[17,-55],[-10,-70],[-46,25],[-42,-9],[-22,-33]],[[76237,61454],[-19,2],[-9,-1],[-32,-15],[-23,22],[-25,-24]],[[76129,61438],[-3,-5],[1,-6]],[[76127,61427],[4,-3],[8,-4],[27,-41],[12,-38],[11,-25],[-3,-3],[-10,-1],[-4,-3],[-8,-15],[-4,-4],[-2,3],[-11,33],[-3,4],[-11,9],[-9,3],[-35,-21],[-49,-42],[-6,-10],[9,-5],[-17,-29],[-6,-15]],[[76020,61220],[4,-83]],[[76024,61137],[-16,3],[-22,-1],[-33,-19]],[[75953,61120],[-7,-24],[0,-10],[3,-13],[9,-22],[3,-11],[-3,-6],[-5,-5],[-4,-6],[1,-11],[4,-16],[4,-14],[28,-46],[0,-47],[-8,-10]],[[75978,60879],[-12,-9]],[[75966,60870],[3,-5],[0,-6],[-1,-3],[-4,-1],[-4,3],[-4,1],[-9,-7]],[[75947,60852],[-81,42],[-140,118],[-13,44],[-66,2]],[[75647,61058],[-27,31]],[[75620,61089],[31,14],[-29,72],[-56,43],[-66,125],[-11,77],[-59,22],[-101,120],[-42,39],[-13,43],[-104,135],[-30,15],[-43,78],[-39,193],[-84,121],[-34,-13],[-33,55],[21,36],[-17,52],[19,143],[17,31],[66,5],[82,-115],[50,-16],[16,63],[38,57],[40,13],[76,-26],[57,62],[96,-81],[32,25],[43,-31],[73,-11],[44,27],[57,-62],[58,49],[79,-22],[17,30],[87,-51],[58,15],[66,-57],[-6,-39],[45,-50],[47,3]],[[79664,69248],[7,-10],[27,-26],[11,-15],[8,-7],[9,-3],[9,5],[21,23],[88,-3],[6,-10],[17,-24],[10,-42],[124,40],[22,-1],[22,-7],[18,-12],[12,-8],[59,-16]],[[80134,69132],[-14,-104]],[[80120,69028],[8,-21],[37,-40]],[[80165,68967],[157,89],[90,-6],[44,20],[95,-37],[39,-39],[7,-8],[2,-7]],[[80599,68979],[1,-26]],[[80600,68953],[37,-7],[4,-6],[3,-10],[12,-19],[39,10],[17,-7]],[[80712,68914],[8,-14],[1,-4]],[[80721,68896],[3,-23],[-12,-42],[12,-37]],[[80724,68794],[-29,-35]],[[80695,68759],[-13,-17],[-6,-23]],[[80676,68719],[36,-50]],[[80712,68669],[5,-8],[18,-12],[4,-6]],[[80739,68643],[9,-19]],[[80748,68624],[1,-4],[-2,-6]],[[80747,68614],[-2,-5],[-1,-4]],[[80744,68605],[13,-37]],[[80757,68568],[-37,-18],[3,-10],[6,-7],[1,-8]],[[80730,68525],[-7,-11],[-7,-5],[-23,-5],[-9,-6],[1,-6],[3,-9],[-1,-16],[-21,-29],[-3,-17],[4,-11],[5,-4],[16,-5],[59,-40],[8,-22],[40,-2],[9,-17],[15,-12],[-11,-23],[-19,-30],[-9,-26],[39,-16],[4,-9],[11,-3],[7,-12],[9,-31],[13,-19],[3,-10],[3,-36]],[[80869,68093],[9,-28]],[[80878,68065],[70,-52],[10,-4],[20,-5],[32,-17],[31,-9],[38,-59]],[[81079,67919],[-35,-106]],[[81044,67813],[12,-16],[32,-11]],[[81088,67786],[81,20],[32,-17],[48,-13],[31,-28],[18,1],[8,-1],[8,-5],[9,-13],[0,-9],[-2,-5]],[[81321,67716],[-31,-16]],[[81290,67700],[5,-33],[7,-13],[9,-10],[38,-22],[9,-15],[9,4],[13,0],[6,-3]],[[81386,67608],[26,-31]],[[81412,67577],[-1,-64]],[[81411,67513],[-7,-5],[-19,4],[-26,-5],[-66,-81]],[[81293,67426],[-6,-4],[-15,-4]],[[81272,67418],[-12,-10],[-20,-24],[-20,0],[-1,-2]],[[81219,67382],[-2,-5]],[[81217,67377],[0,-9],[-115,-4],[-49,22]],[[81053,67386],[-4,25],[-5,11],[-7,4]],[[81037,67426],[-47,10]],[[80990,67436],[-8,1],[-8,-3],[-14,-7],[-47,3],[-14,-11],[-7,-30],[1,-7],[1,-7],[1,-8]],[[80895,67367],[-1,-5],[-4,-5]],[[80890,67357],[-10,-1],[-3,-2],[-28,-40],[54,-77],[24,-19],[11,-4],[10,-1],[3,-5],[5,-18],[14,-15],[3,-12],[1,-27],[-9,-11],[-27,-15],[5,-9],[17,-24],[16,-32],[15,-12],[4,-6],[-1,-6],[-5,-1],[-15,2]],[[80974,67022],[1,-10]],[[80975,67012],[-7,-2],[-2,-6],[0,-5],[6,-7],[8,-5],[-2,-49],[3,-8],[7,-12],[0,-11],[-3,-8],[-3,-7]],[[80982,66892],[-10,-11]],[[80972,66881],[11,-16],[7,-8],[7,-4],[6,-3],[14,-3],[5,-45],[20,-12],[4,-9],[2,-12],[-1,-19]],[[81047,66750],[-44,-2],[-67,12],[-35,0],[-30,-11],[-20,-33],[-44,20],[-68,-2]],[[80739,66734],[-15,-9],[8,-25]],[[80732,66700],[-14,-12]],[[80718,66688],[-17,-26],[-11,-7],[-11,-4]],[[80679,66651],[-6,-24]],[[80673,66627],[-3,-2],[-11,1],[-4,-1],[-1,-3],[-2,-11],[-7,-5],[-3,-3],[-1,-5],[-16,-22],[-18,-72],[-12,0],[-5,-2]],[[80590,66502],[-2,-21]],[[80588,66481],[2,-8]],[[80590,66473],[-8,-9],[1,-3],[2,-5]],[[80585,66456],[-5,-2],[-11,-11],[0,-5],[7,-6],[4,-2],[0,-4]],[[80580,66426],[-8,-4]],[[80572,66422],[4,-10]],[[80576,66412],[13,-4],[6,-3]],[[80595,66405],[5,-41]],[[80600,66364],[8,-5],[0,-5],[-5,1],[-4,-1],[-3,-4],[1,-16],[2,-1],[5,0],[6,-9],[4,-17],[2,-3],[2,-4],[1,-3],[-5,-2],[2,-17],[-10,-12],[-12,-8],[-10,-38],[-18,9],[-10,1],[-6,2],[-42,27],[-14,22],[4,18],[1,6],[-1,5],[-1,4],[-3,4],[-4,4],[-20,11],[-5,6],[-15,20],[-22,11],[-100,-12],[-22,-22],[-80,35],[-59,-63],[-24,6],[-24,-15],[-8,-3],[-8,4]],[[80103,66300],[-53,143]],[[80050,66443],[-13,14],[-15,3],[-8,0],[-8,-3],[-34,-39],[-36,-2],[-11,-7],[-13,-10],[-11,-13],[-7,-17]],[[79894,66369],[0,-34]],[[79894,66335],[-2,-10],[-10,-1],[-3,12],[-4,8],[-37,69],[-44,11],[-54,-29],[-53,78],[-37,-47],[-9,-9],[-8,-2],[-37,0],[-14,6],[-47,21],[-41,-20],[-88,34],[-85,-18],[-29,93],[-60,11],[-39,-13],[-25,4],[-72,32],[-84,3],[-14,28],[-90,4],[-36,27],[-119,18],[-160,-5],[-64,17],[-69,-24],[-108,-18],[-127,-1],[-56,-100],[-100,-82],[-15,-2],[-12,10],[-9,13],[-53,15],[-9,0],[-37,-9],[-9,-7],[-5,-8]],[[77920,66444],[2,-10]],[[77922,66434],[11,-29]],[[77933,66405],[-1,-16]],[[77932,66389],[-7,1]],[[77925,66390],[-25,56],[8,90],[44,149],[-15,55],[-92,72],[-71,19],[-18,36],[87,136],[68,47],[115,53],[21,44],[-12,253],[-43,74],[-72,210],[-41,204]],[[77879,67888],[60,-26]],[[77939,67862],[55,18],[3,-1],[7,-3],[6,0],[35,16],[108,3],[21,-36],[7,-1],[13,0],[26,-3],[58,44],[58,20],[4,-11],[6,-6],[7,0],[25,4],[6,3],[6,11],[1,17],[-4,12],[-5,10],[-5,13],[-2,10],[1,2],[2,0],[4,4],[7,4],[2,15],[10,6],[2,2],[83,-9],[17,10],[16,17],[14,42],[67,2],[25,27],[10,5],[4,-1],[3,-1],[2,-5],[26,-35],[-3,-2],[-9,0],[0,-24],[-11,-4],[-3,-4],[3,-11],[9,-9],[10,-4],[34,-6],[41,11],[10,7],[3,10]],[[78754,68031],[1,28],[5,8]],[[78760,68067],[0,7]],[[78760,68074],[-5,4],[-3,7],[-4,5],[-17,10],[-7,23],[-5,3],[-6,-1],[-22,-12],[-17,-1],[-8,3],[-5,8],[0,16]],[[78661,68139],[32,46],[12,61]],[[78705,68246],[24,13],[12,16]],[[78741,68275],[0,25]],[[78741,68300],[-10,22]],[[78731,68322],[-1,20]],[[78730,68342],[5,26],[0,39]],[[78735,68407],[23,55],[48,48],[28,-3],[46,8],[14,8],[19,24],[14,29],[3,35],[29,21],[104,-16],[21,45],[25,28],[25,6],[9,7],[5,10],[-4,10],[-9,6],[-63,10],[-23,-5],[-6,0],[-23,8],[-6,3],[-2,7],[4,12],[9,15],[3,6],[5,23],[3,7],[10,47],[7,12],[17,21],[-1,61]],[[79069,68955],[87,24],[60,74],[50,6],[66,-27],[118,1],[20,79],[103,111],[91,25]],[[35094,45968],[-30,-59],[71,-27],[34,20],[10,-101],[-4,-57],[-44,-146],[-3,-68],[-26,-118],[20,-52],[-21,-98],[-6,-99],[33,-130],[-26,-48],[-9,-146],[-33,-62],[-21,-98],[-34,-75],[-78,-26],[-2,-47],[-70,-106],[6,-56],[-49,5]],[[34812,44374],[-74,-5],[20,372],[7,174],[6,161],[-1,175],[-2,172],[-1,134]],[[34767,45557],[0,54],[10,42],[32,18],[64,-69],[55,101],[16,77],[31,37],[48,153],[71,-2]],[[46631,22081],[6,121],[-12,91],[-350,330],[-351,-7],[-316,-104],[-355,-118],[-50,-213],[-20,-63],[-111,-245],[-17,-49],[1,-302],[-52,-268],[-61,-309],[-22,-114],[-9,-31]],[[44222,20547],[4,42]],[[43173,20437],[-121,-39],[-13,-5],[-27,-3],[-60,6],[-12,5],[-11,25],[-17,5]],[[42912,20431],[-6,24],[1,48]],[[42907,20503],[12,92]],[[42919,20595],[-12,46]],[[42907,20641],[-3,31],[-3,14],[-15,40],[-2,13],[0,12],[6,38],[0,13],[-4,15],[-10,22],[-7,70],[-41,65],[-4,101]],[[42824,21075],[-34,135]],[[42790,21210],[1,150],[-5,27]],[[42786,21387],[-81,202],[-5,9],[-9,4],[-21,0],[-18,15],[-6,26],[0,81]],[[42646,21724],[9,26],[26,35]],[[42681,21785],[-11,26]],[[42670,21811],[-67,52],[-17,23],[-14,36],[-1,18],[4,18],[9,10],[22,11],[-16,42],[-4,20],[1,24],[2,18],[-1,6],[-13,4],[-12,11],[0,12],[6,10],[46,22],[12,2],[5,-1],[5,-2],[3,0],[5,13],[4,21],[0,13],[8,29],[1,9]],[[42658,22232],[-5,39]],[[42653,22271],[-6,12],[-12,8],[-7,7],[-12,19],[-18,22],[-2,8],[0,11],[5,13],[16,21],[6,12],[52,113],[1,50],[-65,64],[-13,36],[-9,14],[-35,50],[-13,13],[-18,9],[-9,15],[-16,51],[-5,8],[-6,7]],[[42487,22834],[14,54]],[[42501,22888],[-22,71],[0,1],[3,8],[0,16],[-3,8],[-10,25],[-3,30],[0,32],[3,30],[0,14],[-3,13],[-14,36],[-8,102],[-16,30],[-6,28],[12,18],[14,17],[3,27],[-1,0],[-3,10],[-18,-5],[-62,34],[-6,15],[-4,24],[-3,67],[-9,28],[-44,66],[-9,19],[-3,23],[-1,49]],[[42288,23724],[-1,66]],[[42287,23790],[-4,18],[-28,43]],[[42255,23851],[-6,3],[-21,4],[-1,0]],[[42227,23858],[18,63]],[[42245,23921],[74,63],[8,14],[2,10]],[[42329,24008],[-2,19]],[[42327,24027],[69,122],[6,12],[7,34],[10,15],[13,2],[8,2],[28,27],[-1,109],[16,43],[12,10],[43,27],[8,21],[-3,17],[-53,58],[-63,-9],[-8,8],[-7,10],[-14,25],[-9,34],[-16,64],[-53,209],[-2,19],[3,18],[49,116],[3,3],[0,5],[-4,19],[2,9],[26,30],[6,24],[7,1],[9,-1],[5,7],[1,12],[-9,14],[-15,30],[-22,26],[-7,10],[-39,86],[9,39],[-2,51],[1,10],[3,9],[9,8],[27,14],[8,98],[5,13],[24,-3],[2,7],[1,40],[26,34],[7,8],[26,22],[8,11],[-2,13],[-9,23]],[[42476,25692],[0,35]],[[42476,25727],[3,11],[10,12],[39,10],[7,13],[-2,22],[-18,80],[-21,21],[-4,12],[-14,136],[-25,36]],[[42451,26080],[-2,31],[24,5]],[[42473,26116],[0,16]],[[42473,26132],[1,8],[14,29],[5,44],[4,121],[-5,49],[-1,24],[2,73]],[[42493,26480],[0,9],[-5,62],[2,40]],[[42490,26591],[47,77]],[[42537,26668],[33,14],[2,6],[9,27],[-4,7],[-12,6]],[[42565,26728],[-3,15]],[[42562,26743],[9,18],[17,17],[7,18],[4,18],[5,3],[-3,6],[-9,26],[-40,111],[-40,113],[-81,224]],[[42431,27297],[-169,477]],[[42262,27774],[29,-1],[40,12]],[[42331,27785],[124,-21],[73,-29],[29,13],[7,-80],[66,8],[30,31],[41,11],[53,40],[74,174],[21,19],[69,5],[40,-35],[67,133],[36,23],[58,84],[52,0],[53,43],[62,103],[103,115],[69,10],[99,54],[122,12],[33,30],[30,-14],[48,-51],[50,97],[31,-17],[26,-72],[1,-9],[-1,-15],[-11,-38],[-2,-25],[2,-25],[3,-24],[7,-32],[2,-41],[5,-20],[1,-7],[-1,-5]],[[43903,28230],[-15,-61]],[[43888,28169],[-15,-11],[-17,-72]],[[43856,28086],[-6,-8],[-9,-3]],[[43841,28075],[0,-5],[5,-14],[0,-4],[-1,-6],[-1,-3],[1,-6],[0,-6],[4,-15],[-3,-40],[19,-26],[2,-19],[0,-10],[-3,-23],[-6,-29],[2,-8],[15,-6],[16,-27],[2,-52],[5,-12],[0,-8],[-1,-5]],[[43897,27751],[-15,-71]],[[43882,27680],[-14,-19],[-6,-11],[-1,-15],[5,-9],[6,-8],[3,-8],[3,-107],[23,-70],[27,-8],[10,-46],[0,-92],[23,17],[27,-24],[26,-151],[78,-22],[30,-70],[46,-44],[41,-14],[8,-13]],[[44217,26966],[0,-21]],[[44217,26945],[-2,-14],[-7,-24],[1,-10]],[[44209,26897],[36,-52]],[[44245,26845],[69,-10],[27,-29],[37,7],[49,-22],[46,55],[54,-12],[61,-49],[40,-69],[12,-7],[12,-13],[4,-3],[28,0],[43,42],[11,-7],[12,-5]],[[44750,26723],[7,-30],[1,-4],[3,-3],[1,-4]],[[44762,26682],[-1,-16]],[[44761,26666],[8,-12],[6,-14],[13,-40]],[[44788,26600],[21,-5],[43,-79],[46,16],[18,-42],[57,-21],[7,-2],[6,-7],[11,-19],[0,-3],[0,-6],[2,-1],[7,0],[9,-8],[61,11],[8,-1],[10,-11],[23,-5],[1,-52],[1,-10],[4,-8],[8,-10],[30,-50],[17,-16],[18,-30],[16,-19],[8,-41],[43,-5],[56,19],[49,-22],[16,10],[27,21],[42,-19],[9,4],[25,-2],[12,22],[16,4],[11,8],[3,-5],[7,-38],[47,-11],[36,-32],[31,-35],[28,-35],[70,-60]],[[45748,26005],[29,-99]],[[45777,25906],[1,-9],[-4,-12],[-4,-28]],[[45770,25857],[-24,-38],[-2,-14],[-1,-14],[6,-22],[0,-51],[25,-38]],[[45774,25680],[9,-48],[12,-44]],[[45795,25588],[2,-26]],[[45797,25562],[-12,-6],[6,-20]],[[45791,25536],[19,-20],[5,-14]],[[45815,25502],[8,-281],[-2,-7]],[[45821,25214],[-43,-1],[-74,-2],[20,-27],[26,-50],[41,-77],[35,-66],[9,-29],[23,-444],[7,-26],[12,-6],[391,-22],[146,-9],[73,-3],[27,-2],[28,33],[16,-1],[4,-7],[2,-60],[-8,-75],[-39,-67],[-9,-40],[10,-98],[-3,-16],[-1,-5],[0,-7],[3,-31],[9,-30],[10,-78],[10,-97],[57,-38],[86,-103],[10,-7],[15,-7],[34,7],[24,-31],[5,-85]],[[46777,23607],[20,-26]],[[46797,23581],[-3,-19],[1,-6],[8,-14],[5,-15],[-1,-11],[-12,-2],[35,-96],[20,-75],[15,-38],[28,-15],[4,-6],[0,-13],[-27,-1],[-13,-9]],[[46857,23261],[-82,-405]],[[46775,22856],[15,-2],[5,-6],[1,-12]],[[46796,22836],[2,-36],[3,-27]],[[46801,22773],[-28,-9]],[[46773,22764],[-85,-273]],[[46688,22491],[-15,-50],[-15,-48],[-13,-44]],[[46645,22349],[2,-17],[61,-83],[38,-55],[-4,-7],[-5,-10],[-5,-10],[-8,-6],[-10,4],[-6,1],[-77,-85]],[[50313,17350],[-8,48],[21,108],[-4,84],[27,10],[26,-29],[-14,-84],[-31,-66],[-17,-71]],[[50299,18213],[-48,64],[28,47],[43,35],[11,-32],[-34,-114]],[[51580,19849],[-23,-85],[-37,-17],[-23,38],[35,48],[12,45],[36,-29]],[[51971,20263],[-9,-55],[-50,18],[43,45],[16,-8]],[[54000,26269],[4,-41],[-32,-22],[-18,11],[5,54],[41,-2]],[[54111,26556],[-4,-47],[-61,-73],[1,42],[64,78]],[[52190,33060],[-41,-7],[2,48],[42,52],[-3,-93]],[[49999,33381],[-26,3],[-5,6],[-4,11],[1,8],[10,15],[3,18],[29,44],[25,-34],[-33,-71]],[[51709,33758],[2,-33],[-36,-43],[-18,34],[20,49],[32,-7]],[[50398,33809],[-24,-18],[-31,33],[15,53],[38,3],[2,-71]],[[50435,33911],[-37,32],[28,81],[31,-49],[-22,-64]],[[49437,34184],[-5,-82],[-35,-10],[-63,-59],[0,59],[54,77],[49,15]],[[50633,34187],[24,-19],[-2,-58],[-21,-5],[-1,82]],[[49286,34199],[28,-48],[-31,-125],[-16,-111],[-22,5],[-40,-110],[-46,-62],[-43,-41],[-44,-59],[-42,-20],[-24,37],[32,111],[60,70],[15,174],[65,149],[31,33],[45,22],[32,-25]],[[49228,34259],[42,150],[51,36],[-6,-63],[-20,-50],[-67,-73]],[[49718,34463],[115,-41],[54,-26],[87,6],[15,28],[66,28],[110,-11],[13,-36],[73,-13],[39,7],[67,-21],[22,-24],[-2,-47],[-31,-69],[-16,-160],[-16,-34],[0,-59],[-28,-24],[-12,-92],[-76,-81],[18,-41],[-17,-100],[-31,-38],[-56,-18],[-44,81],[-16,-136],[-58,-15],[-36,13],[-34,-13],[-1,-49],[-100,-56],[-89,69],[-39,-46],[-50,30],[-4,-45],[-42,-17],[-58,20],[-12,70],[-59,95],[-23,66],[-3,68],[13,88],[-8,161],[11,64],[-4,91],[16,67],[16,119],[15,60],[28,44],[67,17],[16,36],[104,-16]],[[49412,34354],[-26,-4],[-29,49],[3,41],[32,97],[69,35],[39,-38],[14,-43],[-26,-50],[-32,-26],[-44,-61]],[[49951,34587],[22,1],[31,-50],[-35,-68],[-94,-9],[-56,19],[35,64],[43,36],[54,7]],[[49588,34544],[-47,-3],[-31,52],[10,65],[64,-36],[4,-78]],[[49935,34730],[-63,-59],[-27,-44],[-25,-75],[-67,-41],[-25,43],[-52,14],[-35,-16],[-33,73],[7,52],[98,5],[27,47],[45,-4],[103,58],[34,-1],[13,-52]],[[49623,34870],[-4,-71],[12,-44],[-10,-55],[-30,-51],[-34,25],[42,137],[-9,73],[33,-14]],[[49742,34907],[-5,-48],[-46,-59],[-44,-35],[-12,35],[4,72],[23,39],[80,-4]],[[49721,35110],[27,-15],[-33,-84],[-65,-6],[0,39],[53,65],[18,1]],[[49602,35851],[33,-103],[-24,-43],[-31,2],[-26,75],[8,57],[40,12]],[[47273,35744],[19,-12],[6,-1],[19,6],[134,-59],[25,12],[12,21],[2,21],[-2,25],[-1,27],[2,9],[1,5],[1,6],[-1,8],[-4,6],[-39,63],[-16,50],[-24,4],[-5,5],[2,12],[10,35],[20,6],[8,8],[11,27],[3,38],[3,26],[3,11],[7,5],[9,0],[9,-8],[21,-28],[33,-16],[23,-30],[31,13],[13,10],[80,-2],[17,41],[20,14],[6,-4],[5,-8],[9,-1],[30,38],[23,-19],[37,39],[52,-90],[52,12],[16,-13],[0,-73],[19,-6],[14,7]],[[47988,35984],[11,-2],[9,-6],[7,-28],[26,-35],[82,-41],[29,7],[20,-31],[25,50],[48,20],[29,52],[46,9],[83,-46],[23,6],[48,59],[42,-61],[68,-41],[38,-8],[31,54],[65,62],[59,132],[-7,41],[85,259],[-4,45],[24,58],[27,21],[82,222],[10,53],[59,101],[20,70],[37,36]],[[49110,37042],[20,17],[14,92],[18,24],[-5,63],[17,52],[48,-51],[63,-119],[18,-87],[0,-137],[39,49],[-5,-97],[5,-144],[-6,-73],[22,-90],[-2,-48],[37,-204],[16,-17],[32,-150],[29,-107],[12,-88],[35,-81],[10,-48],[49,-131],[109,2],[68,-42],[37,-54],[14,-187],[-19,-89],[12,-33],[-34,-57],[-128,-158],[-12,-49],[-46,-56],[-14,-56],[-42,-113],[-69,-126],[-53,-8],[-20,-23],[-34,-86],[-50,-18],[-47,-102],[-47,-159],[-29,-41],[-67,-130],[-10,-80],[0,-99],[-42,-61],[-37,-26],[3,-91],[-28,-43],[-27,-6],[-49,37],[-79,-48],[-61,-60],[53,-29],[54,29],[31,-102],[29,40],[45,7],[34,23],[95,105],[89,55],[14,38],[50,18],[41,73],[50,41],[34,80],[39,-3],[6,-73],[-30,-56],[31,-68],[0,-126],[21,-66],[30,-43],[12,-78],[34,-94],[39,-24],[14,-83],[22,55],[35,50],[28,-2],[37,30],[51,14],[64,-46],[51,-5],[73,90],[22,-22],[-10,-24],[1,-12],[1,-8],[26,-17],[-3,-68],[-14,-27],[-8,-83],[-21,-45],[-19,-96],[3,-64],[-25,-55],[31,-14],[35,97],[3,63],[37,102],[12,70],[27,88],[33,57],[8,55],[44,53],[16,50],[58,-13],[67,146],[40,-121],[35,6],[26,39],[-12,32],[-36,5],[7,103],[55,-21],[26,111],[-9,51],[37,15],[14,43],[3,110],[49,36],[30,-11],[85,60],[3,-43],[25,-7],[21,30],[5,61],[64,-51],[48,42],[80,-98],[86,-9],[33,-62],[61,32],[20,-71],[30,6],[0,-63],[29,-10],[70,17],[0,-81],[15,-8],[35,49],[11,-46],[41,-44],[24,30],[32,-64],[44,71],[15,-107],[21,38],[32,-25],[8,-103],[37,26],[17,54],[22,-41],[-28,-35],[12,-69],[-10,-62],[32,-29],[21,30],[-8,64],[32,60],[28,12],[78,-25],[-13,-48],[75,-88],[7,-55],[71,-21],[12,-93],[-63,-145],[39,9],[21,42],[38,-30],[13,-69],[-12,-58],[-30,0],[-65,-226],[-18,-140],[27,-34],[3,-38],[68,100],[25,175],[1,72],[113,93],[15,-70],[-40,-97],[-45,-31],[0,-28],[74,-7],[18,88],[37,52],[15,-13],[53,33],[45,8],[56,-21],[8,122],[55,-4],[43,-20],[109,-69],[37,-33],[42,-9],[29,-50],[69,-69],[72,-4],[16,-33],[84,0],[3,56],[66,-7],[48,-62],[7,-28],[62,-18],[19,11],[47,-19],[33,28],[46,-7],[213,37],[31,25],[87,-13],[109,-25],[48,-42],[58,-68],[11,4],[75,-78],[49,-23],[107,-120],[36,-12],[26,-66],[42,-27],[56,-80],[78,-26],[30,-94],[48,-56],[56,-122],[96,-134],[33,-14],[23,-73],[39,-57],[36,-9],[72,-45],[19,-28],[36,-105],[18,-13],[90,-4],[41,-70],[76,-32],[66,14],[110,-9],[51,30],[187,-59],[34,-43],[62,-167],[25,-129],[18,-142],[16,-46],[6,-119],[20,-31],[19,-86],[11,-99],[-4,-50],[26,-167],[16,-17],[1,-96],[23,-54],[-6,-202],[3,-85],[-37,-60],[3,-53],[31,-62],[-15,-100],[-30,-108],[-4,-67],[-71,-282],[-8,-65],[-61,-174],[-33,-69],[-34,-39],[-39,-102],[-103,-123],[-11,-76],[-26,-36],[-33,-93],[-82,-114],[-16,-64],[-44,-92],[-65,-31],[-125,-137],[-52,-109],[-3,-32],[-47,-126],[-44,-69],[-12,-57],[-45,-100],[-84,-297],[-50,-133],[-102,-233],[-103,-180],[-73,-55],[-11,11],[25,95],[-13,79],[-45,13],[-9,39],[-28,10],[-6,-70],[-34,-80],[35,-10],[-25,-88],[-34,-28],[18,-57],[-44,-64],[-4,-37],[-35,-46],[1,-59],[18,-1],[17,-109],[-17,-99],[-20,-64],[51,24],[3,-66],[-25,-128],[1,-63],[-31,-223],[16,-88],[8,-256],[30,-300],[23,-78],[-51,-253],[-4,-67],[-17,-47],[-15,-137],[-18,-88],[6,-61],[-34,-163],[-2,-82],[11,-97],[1,-92],[18,-48],[-53,-115],[-40,-23],[-45,-64],[-47,-115],[-39,-202],[-7,-100],[1,-137],[16,-209],[-5,-109],[-29,-115],[-19,-34],[-73,-66],[-46,-161],[-17,-102],[-35,-76],[-25,-115],[-28,-72],[-24,-20],[-38,-96],[-57,-25],[-26,-54],[-5,-67],[-58,-147],[1,-55],[-42,-98],[21,-52],[-2,-69],[21,-141],[-10,-41],[-96,-82],[-85,-35],[-77,-49],[-39,-45],[-54,-96],[-21,-16],[-11,-101],[27,-51],[-25,-27],[-26,-79],[-123,10],[-94,-2],[-27,-16],[-129,-5],[-34,27],[7,59],[26,37],[-16,68],[-75,-50],[12,-60],[30,-33],[-22,-61],[-87,-14],[-36,-20],[-33,16],[-41,52],[-50,27],[-73,-27],[-23,-51],[-28,-16],[-43,33],[-13,47],[-38,-48],[-91,-39],[-15,-77],[15,-27],[62,-28],[-28,-50],[-34,10],[-67,-29],[-27,22],[-62,-91],[-66,-57],[-19,10],[-50,-56],[11,-97],[-40,-11],[-80,41],[-56,9],[-81,-43],[-61,-98],[-49,56],[-24,-34],[8,-36],[-72,-51],[-143,-129],[-32,-79],[-50,-66],[-100,-91],[-37,-14],[-109,-117],[-26,-42],[2,-60],[-24,-88],[-20,-8],[-34,-70],[-60,-53],[-19,43],[-42,37],[-17,-53],[-3,-63],[-67,16],[8,-53],[35,9],[62,-34],[-27,-31],[-33,-92],[-36,-167],[11,-73],[-33,-48],[-34,-8],[-16,-35],[60,-49],[11,-44],[-20,-62],[-6,-100],[21,-32],[3,-132],[17,-21],[-14,-174],[22,-26],[-36,-86],[27,-71],[-27,-32],[7,-74],[25,-58],[-16,-45],[2,-59],[-20,-114],[-49,-170],[-5,72],[-31,16],[7,-80],[34,-42],[-18,-42],[-48,-21],[-154,-172],[-80,-127],[-99,-195],[-90,-228],[-104,-401],[-155,-359],[-119,-207],[-45,-64],[-158,-183],[-115,-96],[-64,-109],[-9,75],[16,22],[-29,58],[15,31],[48,-37],[34,9],[20,38],[46,14],[58,95],[29,73],[38,-14],[35,35],[25,64],[10,92],[-8,38],[30,42],[42,23],[18,92],[80,64],[19,93],[-4,178],[31,-81],[28,101],[-26,79],[-26,-59],[-48,-22],[-38,8],[-14,-75],[-38,35],[7,60],[-40,14],[-75,63],[8,-73],[36,-78],[-20,-39],[-15,-100],[-35,-22],[8,-136],[-36,-6],[-10,-76],[15,-43],[-68,-34],[-12,-76],[-48,-4],[-56,-25],[-30,-76],[0,-75],[-34,-34],[-2,-53],[-41,-22],[-16,-70],[30,-60],[-26,-18],[-8,-54],[44,-41],[6,-35],[-49,-65],[-46,-134],[-36,-187],[-59,-186],[-76,-136],[-103,-127],[-67,-92],[-43,-40],[-30,33]],[[48432,13721],[-6,0],[-7,-2],[-8,0],[-11,26],[2,55],[8,102],[-8,93],[0,46],[5,28],[4,16],[70,78],[11,52],[66,82],[4,9],[3,11],[-5,9],[-25,39],[-88,51],[-22,34],[-24,24],[-9,12],[-18,38],[-10,12],[-4,8],[-2,10],[0,32],[-8,39],[-39,110],[-23,6],[-39,59],[-25,7],[-4,2],[-3,5],[-6,13],[-13,11],[-15,-3],[-8,-9],[-3,-6],[-4,0],[-9,8],[-40,46],[-50,66],[-13,13],[-10,14],[-8,55],[-4,11],[-6,8],[-19,23],[-12,27],[-87,23],[-57,58],[-45,8],[-32,31],[-7,7],[-15,8],[-13,15],[-12,46],[-13,12],[-4,5],[-7,44],[-90,128],[-24,-18],[1,-26],[-1,-12],[-5,-6],[-25,3],[-6,-8],[-7,-31],[-26,-27],[-5,-12],[-3,-3],[-3,-1],[-57,-4],[-2,5],[-2,4]],[[47450,15340],[2,43]],[[47452,15383],[0,40],[2,14],[6,16],[3,19],[-3,18],[-6,17],[-25,28],[-5,10],[-13,34],[-6,10],[-7,7],[-5,6],[-2,6],[-1,6],[-1,7],[-13,20],[-7,10],[-55,50],[-114,169],[-36,31],[-11,23],[-13,14]],[[47140,15938],[-105,-12]],[[47035,15926],[-41,-103],[-13,-4],[-12,9],[-8,-9],[-21,13],[-70,-2],[-13,12],[-8,33],[-9,13]],[[47994,18736],[2,16]],[[47996,18752],[1,15],[-3,11],[-3,12]],[[47991,18790],[-2,13],[2,21]],[[47991,18824],[4,21],[8,23],[28,51],[8,41],[18,28],[3,11],[-1,12]],[[48059,19011],[-13,57]],[[48046,19068],[4,21],[18,112],[14,34],[5,22],[14,64],[0,19],[-5,43]],[[48096,19383],[1,18],[4,21]],[[48101,19422],[14,33],[5,14],[3,19],[1,17]],[[48124,19505],[-8,34]],[[48116,19539],[-9,17],[-3,9]],[[48104,19565],[-2,22],[-5,20],[0,10],[3,19],[9,17],[14,16],[8,9],[-1,1],[-11,8],[-35,32],[-23,44],[-8,8],[-64,55],[-82,-47],[-44,-51],[-99,-31],[-75,26],[-12,31],[-6,118],[-9,38],[-24,44]],[[47638,19954],[-1,43]],[[47637,19997],[0,2],[-3,19],[0,21],[10,35],[0,18],[-3,12],[-12,19],[-3,14],[1,10],[9,29],[0,10],[-8,46],[-2,5],[-9,10],[-5,8],[0,10],[2,22],[-2,12],[-14,28],[-1,10],[2,21],[0,11],[-8,47],[-2,24],[5,19],[7,17],[4,21]],[[47605,20497],[-1,40]],[[47604,20537],[-4,20],[-43,56],[-2,22],[-2,53],[-42,78],[-12,-10],[-116,17],[-13,8],[-12,17],[-22,19],[-40,82],[-34,-10],[-55,-91],[-23,14],[-2,-3],[-5,-14],[-29,-3],[-4,-11],[-8,-15],[-15,0],[-13,17],[-18,4],[-7,9],[-3,0],[-10,4],[-26,-2],[-51,31],[-66,-16],[-12,12],[-6,4],[-3,0],[-8,5],[-4,0],[-55,2],[-15,45],[-13,-3],[-8,0],[-5,3],[-5,0],[-42,-25],[-36,15]],[[46715,20871],[-17,28],[-1,15],[1,9]],[[46698,20923],[8,37],[13,36],[2,8],[-4,14],[-4,10],[-4,10],[3,10],[5,13],[0,12],[-1,11],[0,12],[16,42],[-2,5],[-5,4],[-4,9],[-4,11],[-1,10]],[[46716,21177],[3,106]],[[46719,21283],[25,59],[3,17],[-4,6],[-6,3],[-3,6],[-1,3],[-3,4],[-2,4],[1,8],[2,5],[11,12],[9,19],[4,27],[2,29],[-2,27],[-6,19],[0,9],[10,25],[3,15],[-1,12],[-6,11],[-2,-11],[-2,0],[-18,25],[-2,0],[-4,3],[-2,3],[-1,6],[3,8],[16,14],[4,6],[-1,11],[-4,9],[-7,7],[-18,4],[-2,4],[2,5],[7,8],[7,10],[8,3]],[[46739,21718],[6,13]],[[46745,21731],[-9,12],[-7,20]],[[46729,21763],[-17,2],[-16,34],[0,116],[-6,4],[-7,3],[-8,7],[-14,21],[-7,41],[4,18],[-2,5],[-6,7],[-10,-8],[-8,8]],[[46632,22021],[1,21]],[[46633,22042],[14,8],[0,6],[-4,7],[-3,5],[-9,13]],[[46645,22349],[43,142]],[[46773,22764],[6,7],[22,2]],[[46801,22773],[-5,63]],[[46775,22856],[4,21],[18,89],[36,175],[24,120]],[[46797,23581],[-6,5],[-5,5],[-9,16]],[[45821,25214],[-6,288]],[[45791,25536],[6,26]],[[45795,25588],[-21,92]],[[45770,25857],[7,49]],[[45777,25906],[-8,9],[1,11],[-11,15],[-11,64]],[[44788,26600],[-27,66]],[[44761,26666],[-2,2],[0,8],[3,6]],[[44762,26682],[-12,41]],[[44245,26845],[-22,41],[-14,11]],[[44217,26945],[0,14],[0,7]],[[43882,27680],[0,44],[15,27]],[[43841,28075],[15,11]],[[43888,28169],[8,44],[7,17]],[[42331,27785],[-69,-11]],[[42262,27774],[-56,-8],[-33,25],[-56,5],[-93,-76],[-36,-15],[-55,17],[-38,62],[-40,-46],[1,716],[35,78],[-30,99],[18,16],[-4,63],[-36,-55],[-74,-81],[-54,-98],[-56,-36],[-13,-39],[-74,-42],[-309,1],[14,72],[-13,51],[-27,27],[1,59],[-32,83],[-32,31],[-146,44],[-155,1],[48,103],[16,9],[34,88],[-6,62],[-36,58],[-40,106],[-36,24],[-31,51],[-2,74],[-66,67],[-30,110],[1,35],[-25,77],[-42,36],[-7,38],[31,16],[1,48],[-48,42],[-49,84],[8,84],[-13,46],[83,23],[10,70],[-29,76],[18,122],[30,57],[66,71],[55,70],[66,24],[26,68],[-18,143],[-22,77],[36,124],[53,104],[15,93],[-4,58],[29,119],[-9,88],[67,46],[46,21],[85,100],[3,34],[55,29],[48,49],[21,46],[35,14],[34,42],[44,20],[42,-16],[62,37],[144,28],[18,25],[43,-14],[48,91],[5,36],[46,5],[15,23],[33,-37],[59,37],[45,-23],[2,-55],[30,-26],[51,23],[12,-39],[29,9],[9,48]],[[42113,31926],[7,22],[67,597],[79,698],[44,380],[11,156],[9,34],[-19,57],[-1,58],[-34,48],[-34,115],[17,55],[-18,85],[-45,33],[-42,68],[-33,23],[-43,78],[-6,35],[7,440],[95,11],[42,39],[30,-11],[44,48],[25,-8],[29,-47],[52,-15],[34,22],[-25,180],[-33,60],[-31,14],[-95,7],[-38,-9],[-18,20],[-34,-20],[2,376],[38,41],[65,23],[87,-32],[213,0],[242,1],[-29,31],[-9,54],[24,92],[37,-52],[16,-65],[24,-42],[53,7],[26,32],[76,150],[58,52],[39,-31],[29,-97],[56,-138],[17,-104],[-9,-178],[13,-50],[72,31]],[[43296,35300],[179,-260],[23,-27],[45,3],[28,-18],[69,44],[39,63],[49,42],[62,2],[26,-72],[-27,-76],[10,-51],[41,21],[24,90],[24,45],[47,9],[26,126],[44,8],[25,41],[45,40],[41,-15],[48,51],[22,56],[53,54],[42,-37],[65,81],[19,43],[10,152],[22,39],[90,18],[56,71],[78,29],[15,75],[-5,94],[-122,11],[-48,-6],[-84,27],[19,145],[-41,149],[-45,109],[3,79],[-11,104],[18,59],[-2,49],[-46,80],[-79,80],[-51,89],[-25,88],[-27,30],[-5,40],[25,21],[32,-37],[28,-67],[86,20],[48,-6],[44,-33],[23,-108],[26,-20],[47,42],[96,-8],[43,-50],[32,70],[55,-29],[59,-98],[50,-101],[42,-24],[36,23],[18,39],[0,75],[-16,72],[8,75],[80,11],[9,54],[28,30],[31,-1],[72,-48],[32,6],[28,34],[41,-8],[38,19],[43,48],[68,6],[9,68],[22,28],[49,2],[14,62],[55,-20],[53,17],[25,34],[17,78],[53,35],[59,89],[5,59],[-25,108],[-29,20]],[[45644,37761],[26,7],[82,-24],[47,12],[45,44],[32,-14],[16,-52],[41,-45],[-19,-184],[0,-38],[-20,-74],[-30,-26],[41,-46],[44,8],[56,-34],[41,-41],[-19,-59],[0,-53],[35,-41],[-7,-34],[51,-91],[-19,-21],[-6,-52],[-32,-70],[-60,-56],[-10,-36],[16,-42],[-3,-63],[-50,-195],[-12,-130],[-3,-100],[36,-146],[1,-61],[62,-59],[-9,-213],[5,-43],[40,-15],[-14,-39],[42,-24],[97,-156],[30,-58],[88,-32],[32,-27],[11,-41],[49,-10],[34,49],[62,-9],[14,41],[-11,66],[37,20],[32,75],[56,-16],[15,-30],[46,-1],[14,82],[32,-1],[44,34],[87,3],[38,67],[13,52],[34,43],[40,-13],[50,45],[36,-63],[35,-1],[44,-28],[64,40],[25,-20],[35,22]],[[46147,42679],[-33,-63],[-37,17],[-15,46],[-3,84],[16,30],[29,-70],[43,-44]],[[112960,37579],[23,-51],[25,-117],[-1,-100],[28,-64],[-7,-34],[-81,41],[-29,148],[-3,123]],[[112915,37525],[39,19],[6,35]],[[112520,37389],[98,-6],[29,10],[77,53],[27,54],[46,59],[79,77],[50,34],[-29,-103]],[[112897,37567],[-13,-43],[-26,-4],[-50,-45],[12,-150],[21,-87],[-27,-139],[-35,-54],[-34,-14],[-41,76],[-22,72],[-52,3],[5,32],[-20,101],[-49,49],[-46,25]],[[103961,51704],[-21,-62],[7,-70],[58,-80],[87,35],[42,-104],[-34,-91],[2,-53],[31,-83],[-18,-50],[-92,-1],[-36,-31],[-69,-5],[-17,43],[-27,3],[-49,-60],[-31,18],[-184,-22],[-49,7],[-79,70],[-78,-37],[-33,-57],[-104,-24],[-52,14],[-68,50],[-24,-5],[-40,36],[-60,-27],[-33,7],[-13,37],[-42,19],[-25,41],[-22,73],[-38,33],[27,66],[35,36]],[[102912,51430],[40,10],[-18,62],[9,52],[29,56],[30,13],[37,111],[43,38],[42,101],[44,63],[74,31],[41,68],[80,31],[73,-6],[125,-63],[-43,-99],[80,9],[86,-33],[25,-33],[45,-6],[31,54],[36,10],[58,-50],[77,-27],[5,-118]],[[78558,23546],[-12,-85],[26,-85],[35,-43],[46,-162],[61,-102],[36,-40],[21,-114],[48,-66],[10,-49],[-4,-75],[29,-76],[37,-158],[24,-36],[38,-9],[7,-49],[47,-52],[51,-40],[12,-34],[51,-49],[74,-41],[39,-5],[32,-39],[41,-23],[18,-76],[8,-72],[-7,-91],[28,15],[95,0],[42,-23],[-6,-78],[10,-50],[-12,-93],[-1,-138],[46,-66],[34,-70],[41,-149],[16,-17],[96,-11],[70,-40],[63,6],[87,-66],[70,-25],[-8,-114],[19,-43],[65,-13],[42,-71]],[[80123,20829],[-7,-3]],[[80116,20826],[-32,8],[-9,-2],[-67,-23],[-25,-38],[-9,-17],[4,-43],[-2,-7],[-4,-6],[-10,-26],[-7,-8],[-16,3],[-9,0],[-12,-26],[-73,-44],[-17,2],[-7,-2],[-15,-13],[-23,9],[-32,-4],[-15,-5],[-54,-54],[-13,-23],[-2,-5],[-1,-8],[1,-8],[1,-5],[0,-5],[-3,-8],[-3,-4],[-13,-10],[-3,-13],[-6,-4],[-9,-4],[-7,-4],[0,-7],[3,-14],[-2,-14],[-10,-22],[-5,-5],[-7,-6],[-8,-3],[-8,-2],[-4,-7],[0,-14],[3,-26],[-6,-17],[-13,-14],[-76,-70],[-16,-18],[-4,-3],[-15,6],[-3,-17],[-7,-13],[-7,-21],[-5,-38],[-8,-7],[-8,-4],[-60,-8],[-27,-44],[-58,-38],[-48,-74],[-50,-292],[-1,-28],[-7,-54],[-52,-42],[-8,-6],[-4,-9],[-23,-36],[-35,-36],[-10,-18],[-14,-52],[-25,-38],[-30,7],[-18,-5],[-157,-73]],[[78791,19247],[0,-16],[3,-44]],[[78794,19187],[0,-25]],[[78794,19162],[-15,-58],[-1,-23]],[[78778,19081],[-11,-30],[-9,-41],[-34,-110],[-12,-81],[-4,-15],[-17,-59],[-8,-36],[-76,-78],[-80,-12],[-16,4],[-18,8],[-15,4],[-96,-57],[-24,8],[-28,-4],[-79,49],[-61,14],[-27,45],[-37,14],[-40,-15]],[[78086,18689],[-8,-2],[2,8],[-1,4]],[[78079,18699],[-3,6],[-5,4],[-4,0],[-19,-7],[-71,99],[-22,9],[-86,107],[-36,-4],[-17,9],[-21,7],[-75,-40],[-24,10],[-62,-106],[-8,-38],[-3,-9],[0,-5],[-1,-5]],[[77622,18736],[2,-6],[4,-7],[2,-6],[-9,-12],[-3,-38]],[[77618,18667],[-21,-43],[-3,-14],[1,-8]],[[77595,18602],[1,-2],[2,-1],[3,-6]],[[77601,18593],[2,-9],[1,-4],[-5,-10],[-5,-10],[-8,-9],[-4,-11]],[[77582,18540],[4,-57]],[[77586,18483],[-22,-23],[1,-19],[-32,-59],[-15,-38]],[[77518,18344],[-44,-11],[-13,-29],[-20,-27],[-15,-10],[-17,-5],[-42,-109],[-14,-34],[-20,-28],[-23,-20],[-25,-9],[-37,-1],[-11,-2],[-11,-6],[-5,-6],[0,-9],[4,-29],[0,-11],[-2,-11],[-3,-11],[-7,-10],[-22,-21],[-9,-6],[-8,1],[-22,8],[-33,2],[-46,14],[-32,-13],[-21,2],[-45,-15],[-103,37],[-28,-26],[-25,-17],[-8,-8],[-22,44],[-5,17],[-4,23],[-2,22],[-1,19],[9,42],[0,13],[-1,9],[-6,13],[-3,8]],[[76776,18134],[0,34]],[[76776,18168],[5,33],[2,7]],[[76783,18208],[11,13],[6,10],[34,71]],[[76834,18302],[15,46],[17,34],[1,10],[-14,37],[-1,12],[1,44],[-4,54],[-10,36],[0,2],[-4,7]],[[76835,18584],[-3,0],[-3,-2],[-6,-3]],[[76823,18579],[1,6],[4,12],[-8,40],[-4,12],[-4,6],[-9,6]],[[76803,18661],[-5,13],[5,14]],[[76803,18688],[0,6],[-5,4],[-8,3],[-1,7],[2,4]],[[76791,18712],[8,30]],[[76799,18742],[-17,22],[0,18],[3,10],[11,10],[-5,6],[-15,-3],[-6,36],[-18,14],[-37,132],[-30,83],[-49,60],[-30,28],[-15,3]],[[76591,19161],[-53,83]],[[76538,19244],[-1,531],[0,426],[0,411],[-1,333],[381,0],[5,23],[-1,381],[-1,369],[-1,618],[-1,464],[0,422],[192,12],[220,66],[356,106],[105,13],[22,-7],[18,-67],[54,-73],[30,-143],[25,1],[158,215],[48,55],[43,2],[27,47],[21,-4],[32,-64],[28,10],[57,92],[36,35],[53,24],[37,-17],[38,29],[40,-8]],[[77640,41295],[0,-17],[55,-127],[40,-45],[70,-108],[127,-329],[8,-28],[11,-106],[-2,-23],[-20,-53],[-4,-19],[0,-7],[4,-15],[0,-8],[0,-20],[1,-5],[3,-8],[5,-1],[2,-6],[0,-3]],[[77940,40367],[-5,-87]],[[77935,40280],[-32,-56],[-35,-26],[-8,-79],[1,-14],[5,-13],[20,-8],[15,23],[7,-1],[3,-13],[-1,-22],[-5,-35]],[[77905,40036],[-6,-17],[-16,-28]],[[77883,39991],[-5,-17],[-1,-14],[4,-18],[5,-13],[42,13],[41,-19],[77,7]],[[78046,39930],[74,-19],[39,6]],[[78159,39917],[7,-6],[-1,-9],[-7,-16],[-2,-8],[3,-10],[11,-12],[2,-8],[-3,-6]],[[78169,39842],[-40,-80]],[[78129,39762],[-5,-21],[-2,-20],[4,-19],[35,-41],[42,-20],[38,17],[31,-41],[40,7],[82,-31],[33,-49],[13,-56],[53,-69],[49,-13],[18,-53]],[[78560,39353],[1,-47],[4,-17],[1,-9]],[[78566,39280],[-2,-11],[-8,-12],[-25,-14],[-9,-12],[0,-8],[1,-10],[8,-32],[49,-52],[16,-50],[89,-77],[75,-42],[6,-22],[63,-64],[23,-4],[20,-96],[60,-75],[53,-42],[1,-13],[0,-8]],[[78986,38636],[-9,-24]],[[78977,38612],[-12,-26],[-7,-25],[-11,-12],[-3,-7],[7,-4],[1,-9],[-2,-12],[-1,-11],[3,-13]],[[78952,38493],[32,-45]],[[78984,38448],[31,-21],[29,-146],[67,-21],[39,-32],[4,-39],[62,-23],[19,-42],[37,-13],[18,-30],[29,-79],[4,-3],[1,-6]],[[79324,37993],[0,-17]],[[79324,37976],[-16,-68],[-1,-10],[1,-7],[3,-16],[4,-40],[24,-72],[32,-38]],[[79371,37725],[6,-24],[12,-13],[4,-8]],[[79393,37680],[-14,7]],[[79379,37687],[-5,6],[-19,5],[-15,19],[-24,9],[-47,33],[-60,-30],[-36,-71],[-40,33],[-114,-18],[-29,55],[-38,1],[-61,67],[-39,-43],[-22,24],[-37,-7],[-54,26],[-59,71],[-28,-20],[-42,-5],[-12,-14]],[[78598,37828],[-11,-51]],[[78587,37777],[-7,-16],[-4,-11],[3,-13],[10,-5],[3,-4],[0,-4],[-1,-13],[-1,-6],[-1,-4],[-6,-10],[-7,-36],[-68,-8],[-18,-40],[-47,23],[-65,-44],[-48,3],[-20,56],[-59,58],[-37,-27],[-76,-97],[-27,7],[-54,-63],[-51,2],[-96,-59],[-45,-41],[-23,-44],[-47,29],[-38,64],[-26,-16],[-31,24],[-13,47],[-33,-2],[-5,-14],[0,-8],[0,-7],[4,-7]],[[77653,37491],[-16,-34]],[[77637,37457],[-25,9],[-37,-145],[-30,-4],[-8,-7],[-1,-14],[0,-18],[2,-11],[7,-13],[0,-5],[0,-7]],[[77545,37242],[-46,-117]],[[77499,37125],[-27,-24],[-82,10],[-76,57],[-55,-1],[-55,33],[-34,0],[-36,-31],[-69,26],[-23,27],[-54,-12],[-29,48],[-80,40],[-31,-17],[-72,-10],[-17,11],[-41,62],[-3,14],[1,12],[4,10],[2,9],[-2,13],[-14,25],[-9,9],[-22,59],[-32,15],[-32,50],[-65,60],[-43,17],[-25,59],[-41,24],[-117,-3],[-67,-75],[-16,-37],[-43,-25],[-27,-89],[-70,-128],[-19,-77],[-23,-35],[-55,-3],[-8,-11],[-5,-16],[-2,-14],[3,-11],[11,-13],[18,-61],[5,-24],[5,-52],[-1,-39],[-11,-50],[-1,-42],[-7,-77],[12,-144]],[[76019,36694],[-17,1],[-26,71],[-32,4],[-69,-15],[-25,-60],[-39,53],[-86,-16],[-19,44],[-69,11],[-65,50],[-47,-55],[-104,-33],[-36,-20],[-45,17],[-15,-24],[-66,4],[-27,-39],[-22,-147],[-17,-44],[9,-54],[-17,-69],[12,-75],[-108,-371]],[[75089,35927],[-23,80],[-18,90],[9,46],[-19,73],[11,99],[-25,71],[-17,-1],[-26,76],[-48,5],[-235,403],[-33,78],[6,140],[-11,96],[-28,84],[-85,87],[-23,48],[-7,119],[-16,112],[2,91],[-15,50],[-38,35],[28,81],[8,71],[-10,60],[14,71],[-17,115],[-39,-9],[-32,68],[12,42],[40,63],[70,42],[24,49],[10,57],[47,174],[43,50],[69,282],[80,88],[-5,28],[23,55]],[[74815,39196],[73,-5],[47,-36],[51,18],[53,65],[54,14],[63,36],[15,76],[53,45],[0,-46],[22,-23],[7,-55],[32,-25],[23,-48],[35,16],[9,35],[84,28],[57,89],[82,38],[15,27],[68,37],[82,-11],[67,32],[167,6],[31,11],[32,98],[54,42],[41,97],[77,150],[-28,45],[-45,31],[-14,63],[78,72],[63,8],[41,-18],[126,12],[73,17],[69,56],[110,-13],[30,13],[29,54],[-6,29],[127,91],[64,142],[8,59],[29,19],[63,125],[46,-3],[42,119],[22,34],[43,8],[24,40],[12,71],[-18,98],[7,41],[54,19],[54,46],[17,59],[50,-13],[28,61],[79,53],[101,-23],[53,-27]],[[43336,62234],[19,-82],[-63,16],[44,66]],[[40736,62789],[-64,-84],[-50,6],[74,78],[40,0]],[[40743,62686],[-29,-52],[-66,15],[5,36],[43,31],[18,39],[58,42],[-29,-111]],[[41705,63511],[-21,27],[77,76],[9,-50],[-65,-53]],[[45735,63597],[4,-59],[69,-32],[-16,-147],[-60,-153],[32,-52],[-71,-96],[-34,-26],[-44,-93],[-57,-12],[-7,-59],[-47,-25],[21,-51],[39,33],[84,-23],[5,49],[114,113],[-116,-50],[-24,36],[61,43],[1,49],[56,81],[47,48],[68,-50],[36,10],[76,-43],[19,-108],[-11,-42],[-44,-37],[-58,-3],[20,-44],[-123,-96],[-126,-48],[-11,18],[-98,8],[-46,-29],[-33,24],[-44,-21],[-47,90],[-33,203],[31,66],[66,60],[74,130],[86,214],[38,27],[64,117],[39,-20]],[[44382,63490],[-22,-30],[100,-103],[-18,-55],[58,-50],[7,72],[28,5],[116,-42],[53,-42],[92,-5],[167,32],[160,5],[48,-17],[-73,-60],[-54,-9],[-50,-78],[-53,13],[-4,-37],[23,-76],[-7,-52],[-89,-4],[-59,48],[5,37],[-31,48],[-41,19],[-48,-40],[-152,48],[-59,60],[-8,33],[-50,30],[-77,-5],[10,80],[-46,57],[-59,-6],[-12,35],[54,88],[17,47],[68,74],[29,-79],[-23,-41]],[[44203,64138],[-35,-68],[-39,35],[14,33],[60,0]],[[48276,64325],[130,-20],[-16,-40],[-119,15],[5,45]],[[21624,64766],[51,-72],[-49,-37],[-28,73],[26,36]],[[40297,62360],[91,42],[28,48],[97,55],[38,-1],[61,65],[76,58],[50,-10],[14,77],[24,42],[18,89],[58,63],[46,126],[38,9],[41,45],[78,20],[24,44],[66,69],[84,38],[34,65],[69,28],[61,60],[51,-23],[158,70],[54,59],[71,13],[28,25],[140,68],[56,64],[75,123],[45,34],[17,62],[87,94],[98,137],[39,92],[47,23],[102,125],[96,87],[31,3],[142,111],[57,53],[92,37],[160,99],[47,7],[116,56],[190,99],[155,53],[128,10],[122,25],[231,-29],[133,-59],[84,-69],[66,-73],[-31,-39],[10,-66],[44,-59],[-44,-42],[29,-26],[-49,-62],[-83,-20],[-61,-39],[-28,-74],[-194,-119],[-56,-5],[-28,30],[-106,38],[-66,51],[-54,-62],[-67,12],[-44,-25],[48,-43],[111,-50],[59,-10],[29,-37],[43,-110],[57,8],[44,49],[58,36],[71,18],[14,-36],[63,15],[53,-58],[-78,-99],[8,-47],[-34,-119],[-143,-119],[194,-7],[7,-64],[-38,-62],[16,-64],[58,-58],[-3,-69],[41,-97],[-6,-53],[45,-59],[99,-2],[39,-42],[49,12],[81,-29],[-36,-51],[1,-47],[38,-57],[52,-25],[88,17],[-4,-34],[99,-52],[46,26],[126,-9],[103,-93],[77,56],[132,114],[12,-114],[38,-32],[67,-24],[17,36],[39,7],[57,-87],[22,-62],[-47,-15],[-24,-42],[121,3],[63,-25],[-38,-57],[-100,5],[-22,-42],[-68,-10],[-28,-36],[-65,8],[-27,-41],[-196,-77],[-21,-36],[-39,11],[-43,-40],[-55,-13],[-83,-54],[-81,-5],[-17,-28],[-119,13],[25,-90],[-9,-28],[-64,-10],[-34,35],[-49,-1],[-5,67],[-43,11],[-27,-51],[-38,-11],[-48,-50],[5,-77],[-85,-156],[-40,-51],[-57,-27],[1,-62],[-28,-10],[-56,-77],[-24,15],[-60,-39],[-81,-91],[-78,-17],[-42,42],[2,63],[-53,93],[-21,-51],[-60,4],[-18,93],[8,67],[-24,64],[37,147],[31,57],[70,75],[-35,16],[60,70],[211,160],[141,113],[58,33],[78,22],[62,58],[-7,-77],[54,-55],[41,67],[112,40],[89,71],[-182,11],[-94,-7],[-29,-21],[-72,29],[-54,-56],[-83,17],[39,82],[70,46],[85,94],[4,50],[-65,21],[-34,-46],[-30,-76],[-49,3],[-42,-46],[-124,-61],[-87,-81],[-140,-74],[-50,47],[-33,-4],[-24,-63],[-91,-58],[-24,44],[-98,-56],[-62,22],[-13,55],[-54,-56],[-36,50]],[[43180,62471],[-68,-8],[-46,72],[18,65],[-24,66],[25,24],[-9,48],[-80,16],[-55,39],[11,80],[-6,247],[-7,499],[-60,100],[-89,89],[-39,17],[-34,-43],[-59,0],[-39,-34],[-100,-34],[-53,37],[-10,113],[-76,4],[-283,-454],[-25,-176],[-44,-38],[-35,-90],[14,-44],[-27,-44],[20,-91],[-60,-79],[3,-39],[-69,-50],[-36,-49],[-15,-62],[-42,-49],[-1,-51],[-70,21],[-47,-57],[-58,25],[-38,-32],[-43,-140],[-306,-2],[-418,-4],[-503,-3]],[[20643,65005],[-61,0],[-4,64],[39,10],[26,-74]],[[48194,65287],[24,-41],[-38,-32],[-67,-17],[-7,52],[60,50],[28,-12]],[[21307,65255],[59,-79],[-9,-20],[-93,56],[-47,87],[90,-44]],[[20383,65363],[38,-61],[9,-78],[-23,-24],[-90,61],[5,56],[61,46]],[[44345,65422],[72,-34],[218,-41],[158,-56],[27,-26],[137,-58],[57,-70],[69,-47],[124,-37],[84,-126],[-58,-50],[-26,9],[-140,-10],[-99,44],[-68,6],[-157,52],[-70,50],[-119,47],[-20,77],[-48,54],[-62,45],[-190,83],[-11,62],[122,26]],[[21059,65465],[-30,64],[48,27],[14,-61],[-32,-30]],[[20987,65454],[-62,86],[-9,61],[22,32],[42,-39],[-17,-61],[24,-79]],[[20596,65911],[-40,-54],[-114,28],[73,67],[47,13],[34,-54]],[[19947,65987],[144,-57],[117,-94],[166,-47],[116,-43],[37,7],[95,-20],[61,-37],[83,-23],[58,8],[58,-35],[34,-118],[48,-65],[17,-57],[114,-124],[-11,-64],[44,-92],[95,-58],[148,-42],[34,-40],[44,-11],[9,-53],[45,-15],[13,-81],[73,-93],[20,-125],[58,-10],[41,-106],[-59,-2],[-45,-72],[-38,-8],[-92,31],[-192,93],[-104,35],[-58,46],[-107,51],[-35,45],[69,61],[15,55],[-69,6],[-28,-27],[-56,21],[-46,-44],[-52,32],[-43,52],[14,79],[-53,57],[-46,-25],[-46,93],[9,39],[-79,-29],[-55,14],[-65,-5],[5,107],[41,30],[-10,47],[-47,12],[-17,103],[-45,9],[-69,-30],[-76,2],[-33,49],[25,77],[-75,-24],[-49,60],[-114,-27],[-42,35],[46,56],[-39,68],[-35,0],[21,76],[124,12],[-2,45],[-92,-42],[-86,-23],[-99,98],[-33,105],[126,55],[75,-3]],[[47503,66451],[-3,-71],[144,64],[41,-16],[-32,-118],[-48,-52],[-72,30],[-62,-4],[-20,-79],[65,8],[49,-29],[-9,-71],[-49,-95],[-137,-215],[-20,-50],[-57,-68],[-36,-111],[-82,-106],[7,-48],[-31,-90],[29,-70],[92,126],[20,-4],[44,94],[66,72],[31,-37],[131,-101],[57,-18],[-90,-62],[-34,-52],[-15,-67],[113,-135],[23,50],[164,47],[9,-51],[-32,-46],[-3,-79],[183,34],[76,130],[36,-32],[-11,-47],[84,15],[84,34],[139,-71],[86,-76],[-59,-123],[-121,-78],[18,-106],[66,-53],[-27,-68],[97,-56],[41,100],[59,-60],[44,68],[46,15],[16,-35],[-28,-104],[-51,-50],[-63,4],[-13,-46],[-58,-29],[-38,-43],[-45,15],[-71,-10],[14,-58],[85,-3],[24,-46],[-45,-115],[-42,-70],[94,-103],[47,94],[-7,34],[51,87],[33,80],[95,33],[30,52],[33,-19],[-72,-118],[-3,-39],[-42,-74],[5,-41],[-33,-56],[49,-100],[98,109],[23,113],[36,-20],[19,-65],[-8,-57],[23,-24],[-44,-116],[-20,-14],[-33,-130],[7,-46],[-34,-145],[-48,-78],[-56,-18],[-21,48],[-41,13],[-69,-72],[-26,23],[9,154],[-17,50],[51,85],[-24,24],[-94,-123],[-89,-96],[-52,12],[14,110],[92,227],[9,96],[-49,173],[-48,18],[-122,-208],[-26,-72],[-29,16],[-60,-29],[-40,11],[-48,-62],[-33,-76],[-8,-60],[-37,-23],[-22,-64],[-64,-33],[-65,22],[-23,-22],[-78,3],[-38,20],[-11,42],[42,64],[147,40],[71,79],[17,89],[28,30],[90,31],[36,31],[-15,37],[-69,-14],[-116,55],[-36,-37],[28,-36],[-15,-60],[-129,-8],[-104,48],[70,39],[-41,99],[-101,-79],[-61,-16],[-108,13],[-40,-57],[-79,33],[-52,-12],[-80,40],[-86,5],[-29,-24],[-40,33],[-43,-2],[-96,26],[-181,-33],[-75,-28],[-60,4],[-72,-26],[-73,33],[8,90],[-45,75],[60,83],[91,66],[107,114],[20,42],[52,49],[6,32],[-70,31],[-52,-19],[-91,-6],[-50,25],[90,74],[8,-42],[60,-25],[42,22],[7,76],[47,92],[16,84],[23,31],[117,22],[14,55],[-51,53],[18,108],[99,90],[-4,71],[125,285],[59,196],[61,103],[-12,41],[63,23],[71,80],[-1,65],[31,20],[40,73],[0,64],[29,49],[86,56],[150,73],[85,54]],[[19948,66364],[-25,-32],[-54,40],[-27,86],[56,59],[50,-153]],[[19913,66728],[7,-48],[-32,-88],[1,-50],[-39,-11],[1,70],[-35,59],[25,49],[72,19]],[[38558,66736],[-32,-70],[-109,-15],[-13,29],[117,73],[37,-17]],[[19794,66834],[-9,-65],[-83,16],[28,49],[64,0]],[[19916,66872],[21,-60],[-62,-11],[-18,34],[59,37]],[[20143,66848],[-105,-75],[-21,-82],[-73,-32],[4,80],[22,70],[118,73],[38,49],[66,21],[13,-46],[-62,-58]],[[19643,66983],[24,-61],[-44,-34],[-10,89],[30,6]],[[19701,67057],[20,-67],[-24,-32],[-76,48],[4,51],[76,0]],[[18502,67135],[81,-12],[-8,-42],[-69,18],[-4,36]],[[19756,66922],[-21,91],[-5,134],[49,-33],[14,-113],[-37,-79]],[[19497,67126],[50,-66],[-1,-46],[-51,-2],[-46,63],[-42,85],[14,40],[76,-74]],[[19803,67070],[-26,98],[48,-15],[-22,-83]],[[19361,67392],[37,-53],[-30,-33],[-33,70],[26,16]],[[37727,67448],[115,-17],[132,-157],[41,-127],[-44,-11],[-92,18],[-100,56],[-69,10],[-185,70],[-43,30],[70,98],[175,30]],[[18450,67462],[4,-53],[64,-68],[-2,-84],[-28,-27],[-60,-6],[7,-87],[39,-15],[26,-99],[95,-54],[32,-97],[72,12],[25,-60],[-37,-59],[-80,48],[-115,177],[-76,54],[-21,46],[-76,65],[-79,116],[75,4],[-33,47],[-104,9],[-14,69],[64,-12],[117,19],[63,48],[42,7]],[[19664,67403],[31,-85],[3,-107],[-29,-146],[-56,-4],[3,88],[36,101],[-36,2],[-12,-112],[-58,-35],[-49,42],[-46,120],[-5,53],[38,41],[5,132],[66,-5],[43,-47],[66,-38]],[[19466,67371],[-74,17],[3,55],[54,57],[17,-129]],[[47501,67615],[46,-14],[-12,-51],[-70,29],[36,36]],[[19549,67522],[-75,-18],[-12,27],[49,105],[41,-79],[-3,-35]],[[19045,67659],[101,-70],[88,-137],[-2,-41],[-72,0],[-58,88],[-87,50],[-45,77],[-37,26],[13,49],[99,-42]],[[19564,67672],[-38,-4],[-74,-83],[6,109],[37,36],[84,19],[-15,-77]],[[19095,67679],[-55,-3],[-60,55],[44,42],[59,-32],[12,-62]],[[19228,67721],[32,-48],[130,-144],[-88,-90],[-35,59],[-53,42],[-8,50],[-44,88],[-37,-12],[-27,78],[-40,14],[-34,66],[37,49],[140,-112],[27,-40]],[[19034,67934],[9,-48],[-42,-62],[-73,45],[-49,49],[107,65],[48,-49]],[[17989,68025],[83,-23],[78,-5],[13,-47],[94,43],[57,-74],[12,-69],[-47,-64],[-109,-44],[55,-35],[84,32],[-12,45],[44,74],[-20,87],[82,5],[79,47],[6,-78],[-67,-129],[-28,-161],[13,-102],[-38,-64],[-83,-14],[-8,-21],[-86,-28],[-39,52],[-72,50],[17,32],[71,-2],[5,29],[-158,68],[14,61],[-96,171],[41,90],[-19,38],[34,36]],[[18848,68306],[-9,-42],[-71,-59],[17,109],[63,-8]],[[46702,68468],[7,-54],[-77,-17],[-27,55],[97,16]],[[18983,68400],[-23,39],[79,85],[-2,-78],[-54,-46]],[[45530,69235],[13,-68],[-66,14],[53,54]],[[45239,69421],[144,-24],[-16,-40],[-94,28],[-34,36]],[[38784,69379],[-7,-97],[-58,-39],[-33,23],[30,48],[5,68],[63,-3]],[[38409,69387],[-28,-36],[-101,-65],[-46,22],[38,53],[53,39],[84,-13]],[[38591,69568],[48,-181],[-22,-82],[-36,-13],[-62,-145],[-44,-61],[-67,11],[65,128],[-41,4],[-110,-165],[-60,35],[111,161],[71,65],[54,-21],[42,153],[6,112],[45,-1]],[[45380,69739],[29,-46],[-20,-50],[13,-55],[-32,-40],[-74,72],[16,89],[68,30]],[[45205,70142],[36,-51],[-52,-31],[-35,39],[51,43]],[[45263,70290],[31,-23],[-35,-48],[-53,46],[57,25]],[[42406,71106],[51,-33],[-63,-70],[-47,99],[59,4]],[[44401,71491],[-46,-42],[-32,20],[23,66],[55,-44]],[[44155,71932],[75,-72],[-17,-21],[-105,25],[-28,69],[75,-1]],[[42835,71998],[31,-3],[65,-74],[-51,-83],[-137,-83],[-46,38],[76,202],[62,3]],[[44093,72636],[36,-101],[-59,-77],[-242,163],[21,39],[146,22],[98,-46]],[[43988,72826],[91,-104],[-28,-21],[-93,35],[-37,84],[67,6]],[[38486,73104],[67,-80],[-2,-65],[-106,-238],[-77,-108],[-40,-3],[-37,64],[-88,56],[-40,96],[26,128],[148,169],[104,6],[45,-25]],[[44130,73201],[111,0],[17,-24],[-90,-79],[-125,30],[-15,28],[45,58],[57,-13]],[[40398,73318],[27,-26],[132,-5],[-34,-45],[-98,19],[-27,57]],[[41798,73389],[113,-46],[121,-109],[-71,-39],[-123,13],[-105,157],[-44,-2],[-52,55],[161,-29]],[[37465,73468],[94,-27],[-39,-77],[3,-64],[-68,-50],[-61,-19],[-51,-70],[-75,-47],[-47,-53],[-149,-83],[-55,48],[-53,-9],[-98,-58],[-30,102],[-61,52],[2,59],[74,49],[62,81],[12,78],[86,65],[67,-53],[47,4],[99,54],[121,-6],[64,41],[56,-17]],[[38880,73792],[218,-13],[54,-21],[79,-101],[-56,-81],[-114,-35],[-103,76],[-122,111],[44,64]],[[44313,73728],[-78,51],[-29,89],[54,33],[53,-173]],[[39364,73900],[168,-62],[50,-57],[-48,-65],[-106,23],[-118,94],[-49,19],[8,63],[95,-15]],[[44152,74042],[51,-34],[-35,-33],[79,-34],[-36,-31],[-77,60],[-88,27],[39,37],[67,8]],[[39212,74118],[-62,-48],[-102,14],[9,30],[155,4]],[[40755,74406],[-8,-77],[-45,-24],[-12,124],[65,-23]],[[43902,74547],[23,-55],[-62,-39],[-113,-9],[94,88],[58,15]],[[44989,75186],[123,-43],[-66,-33],[-57,76]],[[36173,75216],[109,8],[13,-63],[44,-58],[-101,-45],[91,-52],[22,-65],[67,-86],[38,85],[65,86],[52,-47],[110,-51],[-30,-31],[51,-44],[97,-28],[171,-17],[22,-62],[50,-55],[124,-42],[65,-61],[63,-20],[71,12],[93,-47],[134,-111],[23,-159],[48,-43],[-16,-39],[-108,-34],[-24,-46],[198,28],[31,22],[121,-29],[65,59],[265,-228],[-104,-17],[-50,-55],[-67,-37],[-93,-78],[-236,76],[-169,72],[-156,-3],[-14,69],[63,35],[-14,44],[-55,30],[-117,8],[-94,-17],[-20,30],[62,67],[-15,47],[-200,-50],[-56,-60],[31,-52],[-11,-98],[-58,-1],[-107,-92],[-85,3],[-46,-44],[-29,-99],[-42,-49],[-140,-75],[-121,-44],[-90,4],[-49,70],[-7,109],[18,51],[-4,107],[-67,24],[-188,-42],[-144,7],[-80,-59],[-74,-4],[-61,65],[18,43],[106,124],[270,107],[-7,49],[-59,78],[-15,80],[20,132],[74,178],[-27,30],[33,66],[-11,118],[55,235],[34,60],[126,91],[48,-70]],[[36354,75346],[114,-106],[54,-124],[-53,-49],[-58,65],[-96,62],[-28,115],[67,37]],[[36609,75414],[106,-34],[144,-84],[-42,-64],[126,-59],[-2,-43],[-124,17],[-26,60],[-104,-10],[7,87],[-27,40],[-68,21],[-39,43],[49,26]],[[45006,76075],[-128,-86],[-25,29],[57,48],[96,9]],[[44477,76276],[-96,11],[31,78],[65,-89]],[[40463,76626],[331,-68],[2,-119],[-380,1],[-91,50],[-54,78],[8,49],[184,9]],[[35833,76539],[-35,-90],[-51,-40],[-91,40],[-45,82],[40,60],[-53,28],[28,65],[98,86],[96,-64],[-11,-67],[24,-100]],[[39958,76772],[176,-49],[50,-77],[-59,-97],[45,-85],[-8,-163],[-125,-121],[-46,2],[-144,-63],[-137,7],[-149,-26],[-132,10],[-76,112],[-55,175],[43,101],[127,174],[72,69],[150,44],[82,-23],[66,29],[120,-19]],[[38652,76687],[-67,27],[15,79],[78,3],[49,-42],[-75,-67]],[[40502,76731],[-86,108],[39,26],[83,-75],[-36,-59]],[[28885,76827],[-143,33],[-62,57],[145,18],[83,-44],[-23,-64]],[[38814,76966],[-23,-90],[-53,-23],[-59,47],[75,19],[60,47]],[[40223,76920],[50,-42],[-15,-100],[-217,108],[-5,78],[51,60],[103,-32],[33,-72]],[[29937,77066],[38,-72],[-58,-59],[-177,53],[103,99],[94,-21]],[[30560,77149],[-9,-74],[-72,-50],[-99,31],[-3,136],[87,21],[96,-64]],[[30615,77163],[-84,32],[-5,53],[73,14],[16,-99]],[[34224,77420],[47,-80],[-52,-21],[-69,90],[74,11]],[[38864,77439],[93,-56],[-93,-45],[-36,-79],[-108,-114],[-120,-30],[-97,-4],[-10,39],[83,99],[131,38],[51,110],[106,42]],[[34375,77440],[-34,-82],[-91,43],[80,63],[45,-24]],[[39403,77454],[150,-16],[-8,-50],[-102,-63],[-19,-39],[-104,1],[-48,73],[11,76],[120,18]],[[30143,77536],[70,-57],[-77,-16],[7,73]],[[31903,77542],[189,2],[-1,-122],[-177,85],[-11,35]],[[32272,77572],[114,-53],[-12,-85],[-46,-33],[-95,84],[-88,10],[33,66],[94,11]],[[15742,77562],[-116,-31],[22,69],[94,-38]],[[42911,77635],[55,-46],[-89,-65],[-96,46],[130,65]],[[39049,77619],[-46,-65],[-162,-58],[-66,47],[46,53],[119,7],[44,56],[65,-40]],[[38398,77703],[100,-26],[23,-52],[-101,-46],[-124,-7],[-24,-66],[-83,20],[2,53],[-227,52],[116,52],[76,-1],[126,-35],[116,56]],[[33889,77713],[-39,-67],[-69,42],[108,25]],[[31617,77567],[63,51],[128,-114],[137,-44],[120,-70],[102,-108],[-10,-56],[51,-98],[106,-34],[66,39],[71,-28],[-87,-70],[-142,-6],[-185,-155],[-88,-20],[-197,66],[-47,-22],[-153,28],[-77,54],[-193,56],[-98,6],[-130,52],[16,56],[-58,18],[-81,-77],[-90,37],[-67,93],[40,50],[69,23],[115,-12],[114,39],[114,92],[-75,56],[4,72],[87,7],[16,82],[42,58],[112,62],[95,-55],[78,-19],[-7,-64],[39,-45]],[[35592,77888],[136,1],[55,-83],[-104,-9],[-191,40],[-15,50],[119,1]],[[30356,78236],[76,-1],[54,-44],[44,-90],[-162,53],[-12,82]],[[41401,78469],[183,-46],[-34,-47],[-72,-5],[-189,-47],[-42,59],[70,15],[14,66],[70,5]],[[40892,78694],[63,58],[67,-43],[-172,-52],[-33,105],[105,3],[-30,-71]],[[41057,78770],[-104,7],[27,60],[73,4],[4,-71]],[[40297,62360],[-60,7],[-153,-90],[-166,-175],[-64,-107],[-76,-38],[-43,-43],[-10,-37],[-43,-20],[-52,-62],[-131,-271],[-17,-14],[-265,3],[-442,3],[-186,-104],[46,-126],[-4,-103],[12,-51],[44,-40],[-1,-35],[-38,-55],[-470,-270],[-395,-97],[-440,-329],[-108,3],[-137,103],[-35,95],[11,147],[34,57],[93,54],[59,86],[51,55],[10,107],[28,143],[99,308],[2,38],[-55,391],[-92,649],[-22,49],[-384,274],[49,109],[-57,77],[-87,1],[-41,-36],[-53,88],[-7,89],[-20,53],[18,58],[-33,13],[-42,-28],[-45,6],[-26,-35],[-37,11],[-71,99],[-39,163],[-241,165],[-433,284],[-295,189],[-359,228],[-113,-25],[-266,-169],[-178,18],[-67,-2],[-37,56],[-41,9],[-134,-19],[-98,9],[-21,75],[-31,5],[-136,-102],[-58,-17],[-55,7],[-45,31],[-28,56],[-75,26],[-32,64],[-42,10],[-57,-24],[-31,-49],[-55,132],[-68,0],[22,55],[-127,52],[-107,8],[-73,-20],[-16,-36],[-101,-15],[-46,74],[-136,10],[-30,38],[-65,-8],[-44,16],[-45,50],[0,67],[-38,156],[-6,78],[-59,39],[-69,9],[1,-222],[-7,-12],[-420,0],[-252,0],[-421,0],[-505,0],[-337,0],[-421,0],[-253,0],[-336,0],[-252,0],[-337,0],[-420,0],[-421,0],[-252,0],[-420,0],[-338,0],[-504,0],[-422,0],[-504,0],[-252,0],[-336,0],[-252,0],[-421,0],[-337,0],[-252,0],[-337,0],[-252,0],[-337,0],[-335,0],[-421,0],[-206,0]],[[21911,64829],[-77,56],[-31,-56],[-22,0],[-46,85],[13,58],[-27,32],[-1,200],[-91,-52],[6,-49],[-31,-28],[-158,81],[-37,68],[15,63],[33,32],[-43,35],[-47,-37],[-90,-9],[-125,116],[48,172],[-38,56],[-137,2],[-25,68],[-100,37],[-49,-25],[-71,-11],[-51,55],[-45,-32],[-109,15],[24,47],[-16,42],[77,14],[-41,50],[-20,65],[-81,-1],[-38,-22],[-34,56],[-37,-17],[-70,40],[-63,-75],[-156,75],[-40,37],[12,72],[-51,-14],[-54,44],[-5,41],[47,101],[43,46],[13,73],[79,41],[-103,33],[14,-47],[-30,-96],[-40,-12],[-55,132],[-7,88],[16,65],[63,18],[18,82],[135,95],[48,74],[-25,62],[-86,-27],[-17,-33],[-117,-63],[-82,56],[-29,102],[-56,-115],[-36,37],[40,46],[-7,60],[45,121],[-4,56],[-53,-27],[-77,42],[-27,165],[-58,39],[-68,66],[-2,88],[-26,24],[67,43],[-15,63],[10,76],[36,25],[-20,62],[-44,-57],[-96,-67],[-44,-54],[-6,-115],[-35,-31],[-198,224],[-98,116],[-3,131],[-62,30],[18,32],[-17,61],[-70,-6],[10,135],[23,60],[64,40],[26,98],[44,53],[25,79],[107,171],[-62,-3],[4,-57],[-90,-172],[-40,51],[81,117],[-26,118],[-29,76],[-13,91],[44,106]],[[19129,69103],[-19,110],[-129,23],[-35,68],[-57,18],[-75,70],[-99,21],[-186,115],[-82,-4],[-33,98],[7,30],[-92,40],[29,104],[-118,32],[42,73],[-50,91],[-73,95],[-140,235],[-60,80],[-34,86],[-81,88],[-34,107],[-61,52],[-94,117],[-134,66],[-69,82],[1,47],[-61,44],[-57,73],[-86,18],[-63,91],[30,78],[-93,96],[-85,58],[-169,-77],[-128,-30],[-6,-83],[-75,-15],[1,-107],[-56,-83],[-87,-4],[-169,-99],[-54,-49],[-72,205],[-377,318],[-36,82],[-120,55],[-68,61],[41,139],[-10,29],[-202,-8],[-147,-90],[-157,65],[-42,-46],[-171,47],[-8,16],[0,631],[0,360],[-1,451],[0,451],[0,360],[0,360],[0,631],[0,360],[0,451],[-1,541],[0,721],[0,451]],[[14924,77599],[301,-32],[115,13],[84,-29],[212,-37],[73,-67],[122,-76],[125,-33],[82,-55],[346,-120],[76,0],[126,-44],[62,25],[166,-19],[166,-76],[102,12],[-100,69],[-92,8],[-47,67],[9,128],[49,54],[104,22],[133,-29],[-25,72],[51,41],[196,2],[50,33],[39,74],[71,15],[39,-84],[128,-33],[-117,-91],[-12,-49],[161,45],[28,38],[167,9],[86,64],[31,88],[83,-2],[47,53],[156,-34],[115,51],[84,65],[140,41],[65,-30],[54,114],[107,29],[130,10],[150,-40],[106,90],[95,-62],[-74,-80],[-371,-144],[-78,-46],[-64,-73],[-55,42],[-161,-39],[-184,-21],[-60,-76],[10,-33],[-251,-65],[-52,-77],[-112,-58],[-3,-56],[-93,-96],[127,12],[68,32],[164,-35],[46,37],[-60,33],[-108,1],[-11,95],[188,46],[188,83],[108,117],[64,-24],[102,39],[157,-27],[114,78],[44,76],[244,53],[37,22],[165,5],[6,-72],[62,-22],[262,192],[-22,66],[100,56],[199,30],[-170,35],[-63,96],[46,68],[57,5],[185,-99],[118,-95],[103,-155],[64,-145],[175,-149],[116,-69],[86,-13],[102,-46],[109,41],[5,42],[-102,93],[18,56],[129,33],[1,46],[51,74],[-35,64],[121,20],[-12,45],[122,-6],[-47,-138],[39,-37],[-39,-75],[167,-43],[-138,-120],[-3,-64],[343,5],[73,78],[67,-4],[30,110],[-22,59],[79,42],[180,-22],[170,10],[234,-32],[236,-89],[65,-54],[138,-80],[108,-36],[81,0],[428,-76],[73,-59],[166,-65],[257,-46],[79,-35],[78,12],[288,-51],[46,34],[-28,61],[219,-6],[229,-66],[95,-69],[84,-24],[56,-69],[67,-21],[55,-81],[58,-25],[-58,-59],[-107,-43],[-43,21],[-148,-3],[-24,-70],[-107,-6],[-27,-61],[45,-22],[-155,-45],[160,-81],[126,8],[149,-46],[86,0],[121,-29],[208,10],[104,-23],[238,5],[207,50],[133,4],[92,35],[104,-36],[229,112],[172,11],[105,-97],[-8,-56],[102,15],[145,-13],[56,-118],[-36,-26],[60,-47],[46,26],[2,85],[53,21],[59,-119],[173,-94],[39,-69],[5,-72],[-99,17],[-29,-33],[84,-121],[61,-52],[52,-78],[162,-162],[28,11],[-138,134],[-36,70],[-38,186],[104,-56],[91,103],[-107,79],[-49,99],[27,80],[-156,118],[19,100],[109,57],[-100,36],[15,54],[173,-31],[192,52],[43,50],[123,23],[83,88],[58,-13],[58,38],[86,-5],[19,42],[-69,94],[-246,-70],[-21,-66],[-166,-30],[-46,-43],[-275,20],[-16,-40],[62,-39],[-232,-32],[-26,71],[-157,3],[83,78],[121,137],[378,50],[188,71],[202,55],[29,23],[171,-48],[107,-88],[-26,-46],[49,-74],[-48,-49],[168,-112],[34,33],[85,-45],[71,-10],[-29,-58],[74,-66],[231,-6],[134,68],[73,-13],[-11,-58],[109,-56],[51,0],[71,-70],[119,-21],[80,-34],[117,37],[42,-42],[114,-23],[106,55],[114,-13],[92,61],[211,0],[285,-33],[64,-43],[129,-8],[212,62],[-139,91],[-6,63],[84,-9],[108,-82],[56,-94],[167,-72],[26,-26],[202,48],[-22,61],[-200,143],[-202,-83],[-107,120],[50,59],[-64,31],[-23,77],[44,23],[92,-43],[36,37],[116,26],[-83,55],[59,27],[228,-45],[95,-73],[33,-68],[90,28],[76,-43],[-116,-90],[88,-19],[63,80],[150,51],[-30,-133],[-49,-160],[17,-49],[-113,-93],[54,-67],[82,-16],[-44,-58],[58,-59],[129,93],[83,-96],[67,-38],[34,64],[-55,133],[28,20],[-52,80],[-89,44],[58,60],[-15,57],[61,74],[72,30],[144,-23],[199,131],[49,16],[3,65],[97,62],[154,55],[-70,29],[58,155],[-21,62],[-102,34],[-56,-62],[-24,-97],[-116,-22],[-86,21],[32,83],[160,149],[-72,14],[32,111],[81,19],[84,-34],[40,-53],[103,81],[-56,13],[40,67],[-31,28],[-122,-27],[-21,-33],[-149,11],[-92,117],[-120,-43],[-205,71],[-92,60],[-124,2],[-196,192],[-29,135],[143,191],[-80,39],[-83,85],[48,125],[-28,62],[50,84],[85,76],[86,17],[126,-75],[70,41],[3,77],[-184,43],[38,46],[135,59],[73,-2],[30,143],[258,32],[57,-35],[-53,-109],[185,12],[130,-52],[-40,-31],[72,-47],[159,-68],[87,-69],[50,-128],[-18,-153],[111,-133],[140,-39],[99,-184],[103,18],[14,-80],[54,-51],[-173,-13],[-103,55],[-79,-70],[138,-6],[65,-40],[-123,-93],[-109,-36],[-123,-70],[153,-3],[141,-86],[115,-27],[143,95],[68,-17],[54,-78],[173,14],[69,-55],[-123,-51],[-3,-68],[-87,-23],[138,-80],[18,-59],[68,-66],[-16,-183],[-43,-93],[93,-42],[33,-81],[105,85],[61,97],[-40,49],[98,125],[-23,61],[29,79],[49,30],[81,97],[51,18],[98,-28],[83,-92],[182,-95],[88,-75],[38,-89],[-10,-36],[44,-85],[15,-85],[-58,-82],[-94,44],[-83,4],[47,-94],[-35,-92],[85,-183],[67,-39],[122,-113],[67,-44],[12,-56],[48,-62],[63,40],[77,11],[0,69],[70,32],[106,-24],[5,147],[-16,43],[53,76],[188,151],[4,80],[66,133],[-7,148],[26,55],[170,-3],[101,25],[-71,45],[86,64],[-13,49],[72,44],[-173,27],[-49,42],[-71,162],[27,66],[-31,52],[80,84],[245,39],[135,3],[119,-58],[106,-32],[151,-19],[40,17],[259,-22],[-16,-64],[39,-47],[90,-47],[17,-113],[94,27],[91,-7],[160,-49],[-10,-53],[-130,-120],[129,-29],[50,-53],[-13,-85],[-139,-78],[-148,-48],[-219,38],[84,-86],[33,-83],[-11,-47],[78,-21],[-23,-72],[31,-59],[171,-132],[71,-36],[83,-104],[-44,-109],[-25,-117],[-41,-61],[-164,-12],[-87,-129],[-74,-24],[-99,-103],[-144,-8],[-7,-34],[-130,-89],[-76,13],[-43,95],[-64,12],[-112,104],[-49,10],[11,67],[-67,30],[17,54],[-244,-4],[-78,-30],[32,-50],[71,22],[28,45],[102,-4],[19,-68],[78,-43],[53,-102],[95,-73],[103,-171],[-107,3],[-89,74],[-74,-12],[6,-72],[-339,61],[-21,118],[-35,54],[-129,-30],[-148,-10],[-185,4],[-64,-49],[64,-70],[106,-15],[187,-79],[-45,-78],[-168,-82],[-24,-105],[-135,-106],[-105,-57],[9,-42],[-115,-46],[-209,3],[-107,45],[-46,53],[-86,56],[-13,39],[-100,36],[-48,-4],[-140,89],[-134,66],[-58,-71],[-80,37],[-97,-20],[-38,28],[-299,26],[-121,0],[145,-64],[18,52],[208,-28],[219,-54],[84,-42],[93,-69],[38,-71],[81,-38],[54,-69],[494,-38],[145,6],[124,-24],[41,-58],[-13,-53],[-52,-35],[-76,-125],[-112,-148],[-63,-23],[-51,-117],[-46,-36],[-9,-56],[-68,-24],[-197,-107],[-169,41],[-149,-8],[-99,52],[-45,-26],[50,-67],[-116,3],[9,-48],[47,-39],[-76,-103],[-221,-51],[-88,3],[-98,34],[-53,42],[-145,29],[-114,2],[-125,17],[-158,75],[-108,19],[-157,63],[-109,-25],[44,-69],[44,-20],[121,38],[223,-78],[194,-46],[134,2],[62,-42],[11,-39],[103,-49],[115,-20],[20,-38],[66,-28],[37,-55],[20,-127],[-70,-80],[-78,7],[-158,-102],[-206,37],[-69,-26],[-65,25],[-47,-31],[96,-79],[118,-16],[-34,-67],[-106,19],[-94,-46],[-81,-15],[7,-56],[40,-83],[-72,0],[-111,-38],[51,-47],[-103,-67],[-49,-59],[-63,-26],[76,-64],[-205,-118],[-56,-63],[58,-81],[-66,-56],[-90,-207],[-42,-28],[-22,-91],[-43,-101],[-61,-44],[25,-52],[-37,-78],[4,-98],[-44,-89],[16,-114],[-18,-78],[39,-177],[-20,-42],[-14,-173],[43,-62],[80,-60],[34,-67],[97,35],[101,-8],[63,22],[201,-20],[22,-47],[3,-95],[62,-167],[60,-113],[19,-131],[115,-257],[13,-59],[-13,-80],[-81,-139],[149,41],[21,-27],[100,24],[76,33],[281,94],[170,-22],[291,-157],[165,-29],[129,-51],[52,4],[107,-99],[56,-28],[70,-68],[128,-59],[136,-214],[51,-48],[67,-34],[167,-33],[225,-114],[148,-39],[84,-47],[94,-98],[109,-42],[10,-35],[69,-5],[127,-31],[148,32],[57,-12],[57,30],[62,-28],[202,-35],[123,-2],[40,-46],[54,16],[82,-19],[70,-60],[9,-97],[20,-33],[-85,-278],[-3,-97],[72,-101],[44,-156],[-35,-128],[39,-202],[-46,-35],[-20,-68],[-4,-89],[73,-51],[46,-53],[27,-73],[80,-91],[56,-48],[-7,-86],[73,-117],[89,-52],[69,-26],[21,-56],[55,-35],[70,-89],[29,-108],[31,-36],[4,-75],[123,-37],[139,-107],[25,117],[-8,45],[69,61],[-15,45],[81,65],[39,-19],[-8,-64],[53,9],[94,-86],[33,45],[1,83],[-52,31],[-33,83],[67,30],[-21,65],[57,18],[14,49],[45,31],[25,58],[-12,55],[23,41],[-8,77],[-43,32],[-59,79],[11,76],[-10,55],[-41,31],[-34,92],[30,80],[-16,112],[-19,44],[-47,35],[69,28],[-46,41],[-3,84],[19,55],[-44,162],[-87,56],[8,30],[-50,40],[-25,164],[-56,72],[73,39],[199,60],[35,33],[186,74],[90,71],[144,82],[54,63],[154,134],[47,51],[26,66],[147,180],[45,136],[11,90],[-4,95],[9,118],[-21,153],[9,34],[-22,114],[-83,212],[-1,38],[-103,177],[-150,155],[-50,36],[-165,72],[7,23],[-97,59],[-17,33],[-90,22],[28,69],[-33,138],[98,10],[8,57],[58,35],[9,62],[111,53],[18,70],[-42,47],[55,34],[8,50],[-31,40],[128,-5],[35,138],[33,78],[-104,17],[-17,38],[50,63],[-104,129],[57,48],[-90,87],[85,71],[-97,21],[-23,25],[-106,-25],[12,47],[135,135],[23,89],[-12,138],[67,6],[-38,93],[-40,48],[-49,2],[-55,119],[-31,173],[4,80],[83,67],[171,113],[281,-48],[63,-34],[240,-63],[52,-25],[128,-11],[64,14],[123,-30],[83,-54],[33,44],[109,0],[53,43],[114,33],[42,54],[77,11],[38,-54],[138,-51],[57,-77],[118,-22],[50,-31],[7,-98],[142,-38],[106,-105],[116,-39],[40,-46],[-54,-22],[-63,-71],[70,-30],[-10,-60],[117,-80],[62,11],[111,-58],[69,8],[60,-32],[106,41],[83,-25],[17,-125],[57,-30],[85,93],[16,65],[44,9],[58,-121],[1,-52],[-130,-72],[13,-78],[-23,-58],[-2,-81],[58,-66],[-3,-76],[-166,-93],[104,12],[18,-45],[52,-14],[-27,-107],[53,-16],[-17,-47],[-74,-68],[33,-21],[18,-92],[69,34],[73,-23],[4,-59],[-108,-28],[29,-179],[-44,-55],[-60,38],[-119,-34],[-39,-35],[79,-33],[36,-61],[221,183],[180,14],[55,-15],[109,-71],[4,-100],[55,-108],[-42,-122],[24,-8],[44,177],[94,-14],[-13,-54],[96,7],[-21,-56],[30,-51],[71,20],[154,67],[45,66],[126,0],[-5,58],[28,72],[33,8],[30,80],[108,-45],[48,86],[46,15],[84,81],[-37,121],[75,-3],[-13,62],[65,32],[-8,72],[-45,123],[50,52],[107,52],[7,66],[64,115],[-3,41],[42,65],[85,-11],[81,-54],[7,-66],[-21,-53],[88,-12],[36,-87],[-25,-79],[-27,-8],[44,-50],[71,7],[6,-53],[84,-63],[-29,-82],[104,-17],[60,-82],[-26,-59],[97,-37],[-12,-34],[50,-68],[62,-44],[31,-95],[-33,-45],[-93,-58],[64,-46],[86,43],[79,3],[-32,-202],[-159,-13],[40,-36],[150,42],[35,-44],[70,-39],[28,-57],[64,-25],[-29,-41],[52,-32],[45,-96],[-71,-45],[-83,-19],[-33,-58],[132,17],[83,-48],[-30,-66],[11,-62],[129,-6],[56,-25],[14,-81],[-60,-6],[-118,-118],[44,-37],[-66,-57],[43,-93],[-84,15],[55,-82],[78,-58],[31,-52],[67,18],[9,-77],[-30,-13],[31,-70],[105,-26],[2,-48],[108,6],[8,-49],[60,-30],[44,48],[40,-79],[12,-65],[-25,-92],[22,-23],[-38,-148],[67,51],[133,1],[44,54],[40,-30],[-54,-82],[165,0],[68,46],[93,-38],[-7,-83],[45,-34],[9,-42],[78,-48],[182,-13],[26,-36],[112,-1],[68,-65],[84,10],[37,-36],[-14,-56],[-105,-8],[51,-39],[-57,-29],[-86,6],[-108,-17],[-26,-66],[-82,-13],[-99,-54],[-59,1],[-197,-60],[35,-19],[232,65],[-3,-56],[-59,10],[-44,-48],[-92,-25],[-122,-68],[-98,16],[-42,-32],[-80,-24],[-1,-129],[27,-41],[-117,-61],[93,-28],[29,12],[64,89],[134,34],[55,60],[111,21],[2,67],[83,90],[125,46],[117,30],[-74,47],[16,36],[55,23],[84,2],[250,-61],[55,-162],[40,-52],[-17,-34],[-116,-56],[49,-39],[22,-59],[51,38],[1,43],[58,66],[135,8],[-1,-50],[77,-26],[152,-23],[1,-91],[85,-64],[-5,-84],[30,-29],[-79,-77],[45,-61],[9,-58],[-56,-8],[-38,-31],[48,-80],[-51,-42],[26,-34],[98,-13],[37,-31],[-67,-83],[44,-55],[8,-67],[-77,-64],[-18,-51],[-70,-38],[-36,-42],[-51,-9],[-138,-120],[-47,-59],[-55,-41],[-85,-4],[-23,55],[-161,-44],[-30,17],[-88,-84],[-98,-32],[-84,25],[-77,-66],[-23,-64],[-89,-40],[-17,-155],[-50,6],[-30,-43],[-79,-40],[-66,-113],[-85,-24],[-31,-42],[12,-39],[-80,-36],[-35,21],[-54,-26],[-56,8],[-38,-21],[-69,0],[-44,19],[-37,-33],[-36,15],[-53,-27],[-56,10],[-156,-62],[-48,75],[-141,12],[-44,30],[-41,-13],[-160,16],[-124,-2],[-27,-31],[-75,-10],[-107,50],[-102,1],[-99,-22],[-85,32],[-61,-24],[-99,-6],[-142,30],[-182,-40],[-75,21],[-89,-60],[-73,4],[-22,38],[-51,-29],[-77,-101],[-78,-41],[-36,-98],[-34,2],[-38,-136],[-5,-94],[-51,-75],[-136,-15],[-31,-22],[-50,10],[-68,-15],[-22,-90],[-55,-16],[-18,26],[-100,-76],[-4,-62],[-54,-5],[-109,-95],[-29,-96],[-32,-6],[-24,-79],[-59,-104],[-81,-82],[-54,-4],[-71,75],[-61,-3],[-86,62],[-26,-7],[-119,40],[1,-45],[101,1],[73,-30],[49,-38],[52,4],[60,-59],[51,-22],[-23,-82],[-52,-133],[-102,-110],[-14,-62],[-101,-41],[-38,-111],[-44,-82],[-94,-59],[-151,-174],[-41,-4],[-89,-36],[-72,10],[-66,-60],[-67,-25],[-12,-51],[-78,-43],[-53,-62],[-93,-23],[-57,-33],[-11,-62],[-52,-23],[-50,-123],[-79,-90],[-99,-33],[-59,-87],[-64,-48],[44,-63],[-74,-21],[-17,-29],[-112,-79],[-13,-35],[-71,-56]],[[31880,79515],[-119,18],[98,73],[21,-91]],[[31859,79740],[73,-39],[-34,-54],[-105,-24],[-82,93],[92,71],[56,-47]],[[25184,79860],[90,-115],[-33,-94],[10,-107],[-127,-33],[13,-94],[336,98],[-62,17],[158,133],[68,14],[359,-73],[201,-56],[127,-52],[-27,-97],[-105,-77],[-130,-59],[91,-34],[36,61],[63,22],[122,-11],[137,101],[188,-27],[73,-54],[99,40],[-145,114],[48,19],[-71,65],[-97,9],[-77,56],[-8,49],[241,-8],[173,-50],[-50,-22],[144,-67],[74,-3],[121,-99],[90,-26],[-12,-126],[96,-144],[-1,-86],[87,-24],[-38,-94],[112,-72],[125,16],[159,118],[-140,75],[-6,67],[-55,8],[23,100],[-68,106],[7,62],[-102,194],[-5,101],[-54,50],[93,65],[15,72],[136,-16],[186,-82],[65,68],[69,3],[225,-139],[156,-22],[85,-62],[105,-123],[-48,-30],[101,-135],[-33,-26],[122,-163],[-30,-39],[252,-319],[-10,-55],[48,-91],[-82,-24],[15,-69],[-73,-57],[22,-31],[185,-107],[31,-70],[70,-25],[116,-90],[159,-14],[100,13],[4,-50],[170,-56],[175,-97],[98,25],[42,-109],[227,26],[26,-98],[-14,-47],[34,-83],[-35,-87],[-140,9],[-38,54],[-107,-47],[-121,72],[-105,-7],[-109,-33],[37,-33],[-9,-77],[-105,-17],[-143,50],[-53,47],[-82,-46],[179,-64],[2,-93],[188,29],[31,43],[157,2],[45,-41],[-114,-96],[110,-1],[68,-42],[1,-44],[-75,-95],[-161,-27],[-53,-37],[-188,-40],[-57,25],[-85,-37],[-220,52],[-91,9],[-95,38],[-56,-48],[-202,19],[-51,34],[129,60],[-208,33],[-34,33],[-129,14],[-122,-17],[-79,24],[52,62],[-17,71],[-101,62],[-70,-79],[-76,-8],[15,-76],[-93,-63],[-63,-69],[-233,-53],[-229,3],[-9,-43],[-148,-83],[-152,-27],[-105,-36],[-231,-8],[-58,-32],[-87,26],[-248,-60],[-106,14],[-403,-21],[-63,-28],[-189,-6],[53,52],[-95,33],[-45,76],[-71,54],[-7,67],[39,91],[-49,66],[44,23],[-312,54],[-302,-28],[-301,35],[-252,100],[6,68],[-74,2],[-19,49],[-149,68],[-73,140],[31,34],[151,51],[174,21],[183,36],[707,59],[57,-22],[150,-12],[65,13],[340,-51],[125,69],[123,-30],[49,56],[-99,38],[-28,49],[-300,44],[-108,51],[-135,-3],[-164,46],[-75,-31],[-404,-35],[-131,-18],[-55,15],[-119,-16],[-75,37],[-289,-23],[-148,16],[-80,-14],[-47,55],[-184,90],[-85,83],[9,29],[225,93],[124,9],[256,65],[345,63],[-107,66],[-141,-14],[-103,-28],[-86,3],[-193,-39],[-234,3],[-56,33],[69,66],[132,-7],[4,36],[-116,49],[-107,-44],[-50,40],[-133,3],[-83,-22],[-33,91],[32,98],[117,75],[26,55],[211,52],[1,51],[-116,23],[-63,51],[31,50],[124,78],[123,40],[190,134],[182,31],[97,41],[336,95],[74,9],[378,113],[147,-47]],[[27706,80026],[-148,-20],[-8,49],[131,1],[25,-30]],[[28860,79863],[-55,-76],[-178,-152],[-109,7],[-178,127],[-60,23],[-5,58],[-148,75],[-203,44],[167,139],[550,29],[254,-118],[-35,-156]],[[38145,80138],[337,-76],[183,0],[320,21],[106,-37],[249,-62],[66,-93],[108,-24],[90,-118],[96,-17],[-24,-81],[83,-18],[-3,-58],[-74,-19],[-384,24],[-39,17],[-286,9],[-181,-28],[-204,-61],[-151,5],[-145,53],[-87,122],[4,117],[-241,32],[-32,99],[37,36],[-46,64],[36,70],[95,32],[87,-9]],[[35763,80198],[206,0],[349,-27],[86,-39],[-28,-50],[-238,-97],[-174,-129],[-97,-134],[-158,-166],[7,-106],[134,-87],[28,-68],[-79,-118],[21,-123],[108,-131],[62,-34],[179,-140],[118,-43],[87,-10],[39,-94],[-132,-6],[-130,-52],[134,-16],[129,3],[-40,-51],[-3,-95],[80,26],[-25,83],[10,116],[37,89],[67,25],[-71,129],[-68,-30],[-141,22],[-75,56],[6,35],[-119,83],[-104,22],[171,46],[28,96],[78,31],[100,-5],[98,66],[-216,31],[-65,32],[-72,105],[19,147],[73,148],[165,15],[-62,60],[30,55],[106,41],[318,72],[139,56],[311,88],[298,0],[200,-13],[115,-110],[3,-135],[33,-45],[188,-49],[35,-45],[-34,-103],[143,-126],[-112,-61],[17,-151],[-121,-75],[28,-97],[-102,-6],[101,-68],[139,42],[-33,80],[166,134],[114,3],[79,-69],[100,64],[61,-34],[70,-89],[-77,-118],[87,17],[57,144],[76,57],[14,97],[61,49],[151,64],[145,36],[273,-7],[90,-65],[174,-25],[177,-10],[205,-52],[98,-150],[-46,-79],[316,-32],[45,-67],[-55,-93],[-109,-12],[-75,-41],[43,-48],[134,49],[145,25],[117,-7],[-144,-134],[109,29],[48,-21],[-34,-73],[83,1],[70,-70],[108,-26],[-9,74],[92,17],[-30,39],[74,30],[64,62],[340,-82],[64,-36],[114,-115],[-87,-63],[-38,-59],[-159,25],[-71,-18],[-119,-127],[74,-30],[-67,-45],[147,21],[138,50],[104,9],[65,93],[140,47],[57,-22],[46,-87],[-75,-60],[37,-67],[269,92],[53,-15],[-69,-75],[140,24],[148,4],[40,-35],[282,-87],[25,-53],[-63,-76],[-100,-31],[-286,-47],[-82,-67],[182,33],[192,10],[24,-39],[-109,-117],[101,-9],[45,72],[81,7],[5,95],[64,59],[132,-35],[101,-71],[113,-114],[51,-145],[-88,-7],[-153,40],[-102,-4],[-128,-87],[-91,-27],[222,-80],[82,13],[216,-11],[168,-77],[45,-96],[-43,-32],[-74,28],[-145,9],[-123,-9],[-156,25],[-12,-53],[146,-58],[-118,-41],[-34,-84],[-104,5],[-55,-56],[163,-40],[-91,-37],[164,-63],[102,22],[135,-42],[95,-13],[37,-65],[-89,-6],[166,-73],[-22,-86],[108,30],[87,-13],[38,-77],[155,-87],[19,64],[119,16],[102,-17],[83,53],[93,-42],[-124,-82],[87,-43],[80,30],[122,-63],[23,-71],[59,2],[-16,-70],[67,-89],[-30,-31],[-130,-4],[24,-41],[109,28],[48,-25],[122,1],[60,-16],[96,74],[71,-72],[-104,-54],[7,-60],[-46,-90],[169,50],[115,-12],[36,-27],[87,23],[-5,48],[113,8],[152,-102],[117,-119],[12,-45],[-118,-35],[32,-112],[-111,-19],[-57,-29],[-110,66],[-122,-105],[141,-66],[84,-62],[-183,-26],[47,-92],[-78,-22],[-31,-80],[-75,-42],[-42,33],[-100,0],[-80,-69],[-90,-4],[68,-60],[-28,-40],[35,-208],[-95,-71],[-88,104],[-113,55],[-107,19],[-29,-60],[-75,31],[15,51],[-80,24],[12,92],[-78,-25],[-16,71],[-69,35],[-3,43],[-58,30],[-19,54],[58,92],[170,55],[-20,44],[-165,-57],[-194,-18],[-23,99],[-72,16],[-124,126],[-99,19],[-45,133],[-43,-30],[-160,4],[90,-66],[-2,-39],[-60,-60],[-44,16],[-59,70],[-107,-4],[58,-75],[-20,-22],[177,-90],[-4,-71],[50,-39],[-245,-33],[-82,71],[-97,14],[-21,-52],[76,-4],[16,-80],[65,-25],[-1,-85],[181,37],[69,-21],[-61,-87],[144,-31],[-43,-115],[28,-40],[62,8],[-12,-80],[59,-15],[62,-56],[169,-47],[75,-88],[44,-13],[28,93],[93,-78],[-2,-66],[-48,-29],[-5,-54],[102,-18],[145,-5],[-6,-37],[-67,-75],[-14,-63],[89,-70],[-45,-37],[202,3],[6,-32],[-94,-48],[-37,-43],[23,-31],[97,-23],[66,-60],[-22,-50],[30,-171],[-57,-28],[-54,55],[-26,97],[-35,52],[-63,-13],[15,-60],[57,-103],[-45,-22],[79,-67],[21,-54],[-23,-55],[75,-34],[-99,-26],[-81,56],[-40,-40],[93,-143],[-79,-58],[-70,86],[29,49],[-125,23],[-25,53],[-84,13],[-64,42],[-53,-30],[-87,35],[-38,43],[-68,-24],[-44,79],[-73,37],[-4,37],[-87,21],[-99,76],[-13,48],[-60,69],[-69,-104],[-96,86],[-108,37],[-36,48],[-165,13],[64,-128],[136,-110],[99,-133],[33,3],[100,-48],[64,9],[39,-64],[127,-76],[83,-107],[164,-88],[96,-130],[121,-67],[21,-27],[-75,-69],[8,-40],[59,-77],[-123,-24],[-109,30],[-82,67],[-173,52],[-67,31],[-105,5],[-118,33],[-219,24],[-155,85],[-26,-5],[-160,108],[-54,64],[34,54],[-49,28],[-169,-27],[-66,4],[-97,69],[-128,19],[-70,63],[-7,50],[-131,-19],[-48,46],[-73,31],[-30,68],[7,61],[-127,14],[17,30],[133,-17],[157,87],[-117,16],[6,60],[-99,56],[-40,-57],[-148,-6],[-1,64],[-107,53],[-105,141],[-12,44],[-68,20],[-18,58],[-98,-7],[-37,76],[33,53],[-21,63],[-168,-23],[-40,-139],[-46,7],[43,150],[-30,36],[-179,-6],[-60,67],[-35,-24],[125,-86],[-67,-18],[42,-63],[-67,-31],[-82,32],[-120,13],[-46,35],[-133,43],[-16,-75],[-43,-50],[-190,-19],[15,-41],[-157,10],[15,-65],[-170,67],[-83,-36],[-12,45],[-107,39],[-36,-22],[-98,53],[15,23],[-82,75],[0,103],[43,39],[-26,86],[68,60],[128,59],[121,32],[-77,78],[31,83],[76,9],[56,-36],[157,-3],[353,-123],[6,-33],[110,-50],[15,-60],[-71,-68],[86,-22],[-12,140],[-60,66],[-90,50],[32,36],[191,-34],[91,78],[40,12],[142,-34],[123,115],[115,3],[79,-46],[68,21],[-71,106],[-14,67],[-113,50],[-156,141],[-19,40],[48,48],[101,46],[240,154],[47,71],[124,72],[78,163],[173,46],[60,97],[-68,34],[-25,124],[-33,66],[-56,40],[19,57],[-91,41],[-33,44],[17,56],[-34,92],[-81,64],[-83,-2],[-119,26],[-83,61],[70,60],[16,65],[-64,61],[-80,-12],[81,-86],[-187,-8],[-63,76],[-131,99],[76,33],[-7,36],[-191,-25],[-114,23],[-167,-67],[-150,-78],[-114,-10],[-19,51],[54,71],[-46,31],[6,52],[82,28],[166,-31],[68,45],[73,4],[19,42],[-45,80],[-104,53],[-99,27],[-66,-7],[-91,88],[-157,36],[63,51],[1,81],[-106,-1],[-131,27],[-73,-23],[0,222],[-79,49],[-101,-37],[-91,8],[-105,85],[-31,64],[-75,-7],[-83,33],[-90,-21],[-66,-46],[167,-49],[60,10],[78,-84],[39,-110],[-13,-50],[-73,-24],[-208,-6],[-95,-22],[-59,66],[-141,35],[-62,-11],[-71,33],[-175,9],[-24,23],[-188,6],[62,-61],[79,-5],[158,-153],[-64,-11],[-249,149],[-59,-2],[-139,88],[-278,87],[11,-30],[218,-60],[141,-87],[7,-66],[-103,-29],[-121,16],[-178,69],[-55,34],[-238,-39],[-154,25],[-236,13],[-100,36],[-159,27],[9,-48],[-167,-23],[-187,73],[-107,76],[-34,56],[-84,0],[-66,87],[-64,-50],[86,-21],[-12,-44],[-159,21],[-165,-48],[-40,60],[-71,38],[-211,42],[-81,50],[-65,95],[-85,49],[-59,80],[125,76],[185,15],[103,-28],[18,-32],[166,-14],[78,16],[127,-7],[49,37],[-199,81],[-66,80],[-55,-35],[-211,15],[-458,56],[-57,53],[-6,151],[69,66],[-118,93],[43,97],[89,34],[-77,80],[49,92],[31,127],[166,168],[3,102],[99,127],[72,33],[68,72],[104,63],[248,119],[242,53],[221,33]],[[30684,80223],[234,-96],[429,48],[201,47],[119,-21],[117,-76],[-15,-69],[-258,-86],[193,-23],[-51,-51],[-203,-55],[-16,-26],[-184,-119],[263,-5],[156,-45],[-14,-54],[138,-123],[85,23],[97,-44],[58,-133],[-159,-79],[63,-22],[26,-84],[-3,-132],[-25,-47],[-153,-21],[-48,-64],[-143,-52],[-196,27],[-155,-6],[128,-75],[-66,-75],[-126,-72],[-108,5],[-47,45],[-110,-15],[-68,122],[-72,59],[-41,81],[-60,53],[-64,4],[-158,120],[-73,80],[-111,10],[-105,77],[-78,-31],[-167,29],[-49,106],[-247,101],[-56,95],[105,140],[141,30],[135,-44],[-21,-29],[107,-51],[93,-105],[161,-14],[47,33],[123,-6],[48,84],[93,16],[-18,81],[-137,106],[31,84],[-180,-47],[-165,60],[-106,67],[129,86],[135,7],[-84,76],[80,55],[223,18],[116,55],[66,-33]],[[31520,80332],[-63,-58],[-127,-63],[-262,-28],[-202,21],[-14,36],[244,68],[85,0],[137,39],[170,16],[32,-31]],[[33394,80340],[122,-13],[120,-50],[115,29],[314,-15],[305,-64],[-120,-126],[-254,-213],[-124,-157],[-137,-156],[-119,-73],[-83,-12],[-390,53],[-288,-15],[139,-48],[3,-40],[86,-39],[36,-63],[-84,-80],[-47,-12],[-107,-155],[-98,-24],[-155,-6],[-152,-31],[23,83],[-49,60],[30,165],[-68,89],[-106,56],[-30,64],[18,79],[-37,50],[52,93],[-7,140],[-32,46],[28,83],[-43,28],[106,82],[77,-10],[86,-54],[69,13],[-183,124],[27,73],[202,56],[133,19],[233,2],[37,23],[151,4],[180,-30],[21,-28]],[[22359,80631],[172,-28],[75,-54],[298,-89],[189,-34],[198,-9],[29,-73],[104,23],[27,56],[252,38],[249,-30],[211,-89],[361,-222],[106,-33],[124,-104],[-52,-48],[-113,-45],[-270,-59],[-289,-121],[-67,-7],[-250,-104],[-259,-86],[-170,-73],[-68,-175],[-165,-72],[-162,-8],[-1,-81],[-90,-75],[20,-164],[-51,-96],[-46,-33],[-302,-69],[-105,54],[-175,-128],[-182,-53],[-63,-54],[-117,-2],[-128,102],[-71,131],[-171,148],[-229,64],[-218,85],[-15,25],[-198,-20],[14,123],[174,212],[91,46],[45,85],[-37,81],[210,57],[-141,102],[72,58],[86,146],[145,73],[5,76],[107,64],[-42,46],[-99,7],[-123,139],[-31,117],[-80,52],[557,63],[260,8],[194,21],[205,36]],[[31661,80661],[-39,-57],[-145,4],[97,64],[87,-11]],[[32393,80652],[5,-58],[-199,53],[117,37],[77,-32]],[[29184,81084],[61,-69],[-107,-70],[-140,-28],[-182,31],[-76,34],[87,138],[105,52],[104,2],[120,-42],[28,-48]],[[32764,81278],[342,-207],[-31,-39],[44,-53],[-21,-49],[43,-93],[-19,-106],[-57,-39],[-427,-14],[-139,35],[-84,72],[-227,13],[-75,50],[-119,19],[-76,78],[51,80],[115,58],[50,72],[94,59],[194,64],[148,26],[194,-26]],[[32040,81308],[144,-56],[-125,-59],[-169,-18],[-107,-32],[-38,71],[244,59],[51,35]],[[29826,81506],[-122,-51],[-45,-55],[-149,-30],[-165,0],[107,95],[318,53],[56,-12]],[[32794,81378],[-131,-11],[-63,39],[-33,79],[172,17],[55,-124]],[[29726,81564],[-11,-33],[-510,-77],[-13,56],[490,70],[44,-16]],[[23859,81601],[76,-22],[-113,-113],[-67,-103],[-260,-147],[-305,60],[302,199],[183,41],[20,29],[164,56]],[[38651,81603],[80,-27],[-131,-65],[-53,-64],[-166,4],[270,152]],[[29607,81691],[42,-70],[-118,-47],[-155,-21],[-217,-9],[-213,27],[-42,40],[63,43],[607,64],[33,-27]],[[29112,81908],[135,-58],[214,-70],[-120,-52],[-399,-4],[-7,89],[-67,15],[-31,67],[115,39],[160,-26]],[[31227,81936],[128,-83],[157,-29],[-48,-101],[111,-102],[-58,-127],[31,-54],[-125,-79],[181,-23],[0,-112],[-115,32],[-76,-32],[-76,-93],[2,-44],[137,-36],[28,-43],[-133,-89],[-274,-22],[-79,12],[-265,-21],[-261,24],[-26,92],[55,62],[-161,45],[41,57],[202,18],[-93,43],[222,42],[-46,38],[-153,7],[-321,-32],[-149,-6],[-235,-36],[-273,-2],[35,83],[161,118],[258,33],[-122,102],[63,60],[-138,22],[27,118],[85,30],[153,-14],[126,-59],[-17,-51],[258,-97],[119,-91],[58,52],[-186,120],[13,31],[172,9],[-125,56],[-134,-6],[-112,62],[91,51],[175,54],[160,-24],[100,11],[127,-98],[136,96],[111,-9],[78,35]],[[30491,81965],[-385,-94],[140,107],[133,15],[112,-28]],[[34555,81846],[-135,-22],[-192,142],[15,47],[210,31],[108,-55],[-62,-85],[56,-58]],[[27300,82033],[83,-57],[-90,-80],[27,-111],[106,-13],[99,-71],[-144,-114],[39,-29],[191,7],[79,-59],[231,-52],[168,108],[103,0],[222,-45],[94,-62],[46,-142],[-39,-58],[-75,-24],[11,-106],[-89,-59],[21,-48],[-80,-36],[15,-41],[-288,-34],[-93,-48],[-195,11],[-66,24],[-279,-40],[-91,85],[-65,11],[-96,-51],[-109,-27],[-85,-54],[-117,8],[-174,-47],[-253,-111],[-157,-28],[-94,-42],[-299,-54],[-224,-12],[-256,30],[-184,76],[-102,72],[79,45],[185,48],[99,4],[146,62],[120,27],[476,17],[201,102],[30,46],[-112,9],[-49,-49],[-118,-24],[-256,-17],[-132,32],[-62,-39],[-395,-31],[-20,76],[59,98],[-99,16],[-152,-185],[-198,-60],[-91,20],[9,59],[-88,3],[-120,-82],[-172,43],[-145,89],[-86,-38],[-283,48],[-63,58],[180,116],[445,1],[173,64],[-42,37],[-160,-43],[-414,-1],[-12,37],[131,95],[769,49],[7,26],[-514,-26],[-193,19],[1,98],[69,63],[138,28],[124,-12],[-13,110],[138,58],[407,27],[93,-18],[26,-92],[67,-81],[234,46],[137,5],[214,-64],[-31,-38],[57,-47],[196,-49],[28,-33],[-155,-32],[266,-21],[50,-61],[-19,-62],[52,-55],[291,28],[619,-49],[-37,46],[60,34],[-102,79],[-225,35],[-139,55],[238,67],[19,53],[-61,62],[-323,68],[-5,59],[150,56],[173,89],[23,57],[119,61],[197,2]],[[25361,82070],[108,-69],[-145,-29],[-226,3],[-170,20],[10,28],[156,47],[267,0]],[[32440,82150],[280,-26],[151,-52],[159,21],[286,-180],[99,-21],[206,14],[56,28],[217,18],[165,-22],[168,-58],[47,-95],[441,-68],[-33,-71],[-411,-5],[-270,13],[-31,-21],[403,-59],[192,-102],[187,-66],[-22,-100],[59,-91],[133,-4],[-56,78],[123,32],[128,-112],[189,63],[148,22],[97,-13],[128,-73],[222,-38],[72,74],[271,24],[97,51],[289,36],[143,62],[152,-10],[164,-36],[291,64],[466,-40],[-67,-71],[105,-17],[195,16],[162,-48],[33,-38],[133,-34],[56,-47],[-48,-132],[-131,-51],[-182,-35],[95,-50],[159,45],[72,-7],[75,-89],[-211,-36],[-113,-38],[31,-83],[-145,-36],[-220,9],[-78,-10],[-180,-64],[-166,32],[-147,1],[-119,25],[-81,95],[-77,46],[-62,-126],[-292,-44],[-160,11],[-251,-17],[-486,-15],[-399,-8],[-334,27],[-19,38],[59,120],[-257,-24],[-24,-69],[-110,-34],[-197,-12],[-289,70],[-73,70],[-129,-13],[51,-68],[-159,10],[-41,41],[-153,40],[-16,115],[-53,74],[72,12],[-188,71],[16,99],[62,84],[112,54],[-64,95],[-4,87],[-87,20],[-83,58],[-6,62],[-108,72],[-76,82],[-178,-44],[-481,-18],[-70,40],[-303,40],[-110,62],[-12,52],[-137,70],[71,69],[-205,51],[0,25],[203,57],[210,33],[203,-39]],[[24446,82434],[134,-27],[143,-68],[-201,-67],[-123,-10],[10,-95],[150,-42],[-80,-90],[57,-80],[-166,-72],[-168,-5],[-118,-29],[53,-106],[-160,-59],[-178,41],[-73,47],[31,171],[63,48],[-221,9],[15,-126],[-247,-27],[115,-57],[-2,-86],[-106,-24],[11,-50],[-132,-36],[-86,101],[-82,-114],[74,-35],[-142,-110],[-240,-7],[38,77],[-126,33],[10,83],[-114,3],[10,-94],[-181,-42],[-157,63],[-108,-13],[-113,-57],[-117,28],[90,102],[-140,24],[84,51],[18,55],[82,34],[316,17],[134,150],[109,10],[211,74],[106,118],[101,58],[168,57],[37,61],[180,44],[245,-1],[126,19],[238,-64],[141,20],[-51,50],[31,46],[193,54],[108,-55]],[[34329,82530],[225,-105],[22,-83],[-167,-74],[-318,64],[-105,62],[13,129],[109,25],[221,-18]],[[28698,82398],[85,5],[143,-71],[-11,-97],[-117,-25],[-187,58],[-112,62],[-87,100],[-56,186],[155,-28],[195,-115],[-8,-75]],[[32377,82624],[175,7],[339,-11],[174,4],[152,-35],[-103,-102],[0,-44],[-126,-30],[-200,23],[-634,1],[-120,71],[25,70],[129,34],[189,12]],[[30262,82602],[-241,-9],[-89,-33],[-252,35],[20,96],[288,1],[166,-31],[108,-59]],[[25139,82768],[221,-69],[6,-82],[-222,-35],[-213,91],[-99,62],[168,45],[139,-12]],[[26943,82805],[-32,-63],[-206,-45],[-237,-18],[47,-64],[226,9],[28,-92],[-68,-79],[-247,-57],[-153,12],[-317,-65],[-138,28],[-50,51],[-230,45],[-47,174],[32,60],[370,68],[223,11],[62,21],[313,23],[388,-3],[36,-16]],[[26638,83225],[207,-54],[196,-80],[3,-112],[-186,-37],[-194,-5],[-195,18],[-121,45],[-106,-71],[-132,-2],[-151,66],[-340,-64],[-105,39],[46,42],[408,94],[127,-5],[207,75],[215,51],[121,0]],[[31808,83194],[133,-10],[104,-93],[140,-30],[79,24],[222,-44],[112,-57],[-208,-72],[184,-84],[-65,-86],[-122,0],[-165,-43],[-213,-24],[-102,9],[-88,-55],[-92,12],[42,72],[-287,72],[32,35],[277,-10],[26,34],[-344,69],[-116,97],[-111,29],[1,52],[126,21],[-111,47],[-15,79],[80,27],[267,-13],[214,-58]],[[29218,83589],[205,-32],[197,-132],[-22,-56],[388,59],[254,-92],[-84,-68],[116,-30],[147,31],[204,-54],[-28,-61],[193,-24],[-94,-180],[290,-140],[10,-116],[-63,-31],[-235,-15],[-54,-23],[-257,51],[-85,93],[10,51],[-89,63],[-431,54],[-145,-27],[-86,19],[8,66],[-350,-37],[-109,-48],[-199,19],[-136,54],[-76,101],[144,37],[231,-39],[207,-9],[43,166],[-321,8],[141,57],[-85,65],[-145,-17],[-46,-60],[-174,-22],[134,115],[-104,26],[-234,-17],[-24,86],[68,64],[112,19],[549,40],[25,-14]],[[30830,84064],[220,-17],[64,-72],[21,-108],[-49,-52],[-200,32],[-4,55],[-104,31],[-186,-13],[-48,95],[158,74],[128,-25]],[[33384,84810],[206,-38],[156,-58],[45,-76],[216,-140],[167,-68],[26,-83],[310,-24],[194,4],[102,-43],[-77,-101],[83,-67],[168,-48],[174,-13],[-214,120],[91,92],[294,-16],[48,-144],[-171,-26],[34,-44],[265,2],[103,-116],[-83,-158],[337,13],[102,-48],[182,6],[66,-78],[182,-98],[-226,-80],[-381,-60],[-42,-58],[-266,-102],[-88,-85],[-122,13],[-70,-133],[-195,-28],[-84,-152],[-107,-3],[-115,97],[-167,37],[28,-107],[-237,69],[-8,-119],[-203,0],[-472,51],[-68,47],[-252,83],[28,43],[438,32],[-352,33],[-265,-2],[-177,98],[-25,41],[-151,83],[23,25],[236,34],[61,57],[227,-6],[368,11],[-286,50],[18,87],[-350,-15],[-111,-50],[-144,11],[-87,45],[-219,-50],[-85,42],[-177,23],[-47,49],[61,52],[158,55],[-252,3],[-165,96],[-99,25],[-6,62],[-82,77],[157,42],[132,-43],[324,-24],[125,7],[114,71],[-327,-20],[-351,84],[25,69],[200,26],[-125,41],[12,64],[632,20],[-123,72],[-307,45],[5,60],[97,69],[142,30],[281,-30],[-11,50],[322,-6],[37,78],[-214,-4],[-237,33],[79,65],[542,-30]],[[42219,85923],[79,-44],[722,-47],[472,-47],[-339,-77],[-452,-53],[377,-15],[609,113],[276,35],[145,-42],[499,-3],[-78,-67],[264,-77],[-40,-35],[569,-30],[170,-66],[7,-76],[-74,-39],[-362,-107],[-809,-184],[-379,5],[-190,-65],[-695,-21],[388,-39],[2,-19],[-532,-79],[-152,-38],[-353,-43],[-45,-35],[648,81],[786,110],[455,35],[43,-43],[-99,-55],[-271,-76],[-225,-26],[-261,-115],[-615,-174],[-328,-139],[-92,-84],[-112,-27],[-301,-6],[190,-51],[-96,-45],[-206,11],[99,-90],[-83,-43],[-256,-31],[177,-31],[-88,-63],[-418,-79],[-263,29],[-54,62],[-446,53],[-236,-27],[558,-59],[99,-122],[-72,-31],[-273,-36],[-255,0],[-127,-47],[-376,38],[37,-54],[-373,3],[-87,64],[-110,-2],[68,-80],[-54,-26],[543,-28],[565,-6],[-119,-41],[126,-51],[-242,-29],[-257,33],[-128,74],[-753,-15],[736,-35],[-392,-32],[528,-55],[13,-54],[372,-38],[-90,-182],[-428,-24],[18,-22],[372,-56],[-198,-107],[-374,33],[-84,-42],[242,-32],[232,-13],[-121,-91],[-127,33],[-249,-71],[-104,27],[-277,-4],[-117,14],[-94,-33],[171,-59],[-26,-51],[121,-83],[-96,-32],[-13,-46],[-103,-59],[-205,4],[-119,-57],[-196,19],[-125,-26],[-310,35],[-222,86],[-144,-26],[206,-68],[-249,-21],[88,-55],[197,54],[367,-49],[273,18],[154,-51],[1,-41],[-133,-101],[194,-1],[298,60],[69,-34],[7,-60],[68,-30],[-21,-97],[-93,-17],[-49,-67],[-137,-42],[-106,73],[-89,-95],[-131,-80],[-77,13],[-209,-55],[-219,-39],[-164,34],[125,124],[-182,81],[-60,-42],[-204,8],[-132,-60],[-198,-6],[-117,47],[-67,-37],[-159,15],[-135,77],[-71,-67],[-185,6],[-86,-21],[203,-69],[-303,-16],[-18,19],[-370,37],[-143,66],[-50,-83],[-142,21],[-22,41],[-184,-69],[-296,36],[18,60],[-311,-42],[-187,88],[91,75],[-45,104],[313,99],[163,75],[313,-16],[132,63],[-83,75],[-127,12],[12,82],[-207,95],[3,100],[379,63],[131,-9],[242,-59],[93,-50],[74,-129],[145,-64],[300,-10],[313,28],[170,60],[182,125],[140,143],[-161,-49],[-103,-105],[-182,-109],[-155,-16],[-258,7],[-29,44],[-171,42],[36,86],[-182,93],[229,70],[44,112],[-205,-77],[-285,-35],[2,65],[-117,24],[-91,-53],[-276,5],[2,200],[125,61],[82,101],[128,59],[325,13],[196,54],[207,-29],[367,-20],[224,-70],[143,-20],[-74,100],[221,-17],[242,23],[28,71],[-320,-59],[-165,36],[-269,-5],[-234,14],[-181,51],[162,95],[-60,136],[-150,46],[-55,80],[-115,38],[-207,12],[-224,36],[0,112],[-74,134],[78,103],[208,11],[222,-43],[264,7],[320,-18],[258,-109],[361,-127],[224,-166],[270,33],[-286,71],[-12,86],[78,29],[-273,39],[-296,140],[-83,56],[448,42],[626,43],[115,34],[388,14],[97,41],[-452,-3],[219,54],[332,50],[391,33],[-188,44],[-326,-30],[-15,96],[401,168],[414,93],[-36,14],[-512,-94],[-188,-69],[-20,-49],[-160,-6],[-177,-171],[-614,-123],[-648,-55],[-99,30],[226,95],[-276,-26],[-195,24],[3,-110],[-228,-31],[-277,-4],[-381,20],[-241,42],[75,70],[288,141],[231,49],[-76,22],[-274,-41],[-365,-160],[-81,-63],[-317,30],[-491,122],[45,46],[328,29],[303,-11],[353,15],[261,48],[186,65],[263,44],[-154,23],[-241,-35],[-248,-72],[-331,-34],[-180,6],[-753,-41],[-137,36],[-65,64],[142,46],[22,57],[261,44],[-104,46],[-320,-69],[-185,55],[352,82],[-295,49],[-123,-42],[-361,14],[92,63],[266,68],[295,36],[229,-23],[370,120],[261,29],[394,-33],[92,53],[-47,52],[450,15],[124,28],[-158,109],[798,-73],[488,-63],[312,-79],[599,-94],[60,36],[-409,48],[-680,172],[245,181],[562,-72],[-373,144],[39,25],[603,-41],[-174,62],[75,45],[312,23],[135,-60],[219,-4],[218,33],[273,-37],[222,-117],[254,-49],[-297,175],[-276,67],[480,40],[412,-7],[329,-25],[209,-46],[260,90],[146,18],[1111,10]],[[72534,63759],[-14,-53],[37,-74]],[[72891,63512],[-15,-40],[1,-9],[3,-9],[1,-8]],[[72881,63446],[-5,-8],[-6,-5]],[[72870,63433],[-2,-21],[-8,-12],[-2,-5]],[[72858,63395],[4,-12],[6,-9],[16,-2],[8,-7],[3,-12],[0,-17],[-3,-15],[-2,-4],[-3,-5],[-7,-2],[-27,8],[-14,-2],[-8,4],[-24,14],[-2,7],[2,13],[-1,7],[-5,5],[-10,0],[-37,-11],[-24,-47]],[[72730,63308],[-1,-36]],[[72729,63272],[2,-2],[4,-3],[-8,-13],[7,-8],[10,-6],[17,-3],[8,-3]],[[72769,63234],[2,-6],[-2,-14]],[[72769,63214],[-3,-5],[-8,-7],[-4,-6],[-2,-8],[0,-6],[2,-5],[4,-7],[15,-18],[5,-11],[-5,-12],[-39,-14],[-30,83],[-25,10],[-50,-20],[-15,7],[-4,1],[-4,-6],[-13,-31],[-44,0],[-41,49],[-6,74],[-10,-1],[-6,-12],[-4,-2],[-3,1],[-17,21],[-26,-11],[-6,-15],[-4,-15],[9,-12],[4,-45],[1,-8],[-2,-13],[-17,-48],[-59,-70]],[[72362,63052],[-5,-36],[-22,-14]],[[72335,63002],[-2,-6],[8,-22]],[[72341,62974],[-6,-35]],[[72335,62939],[4,-6],[3,-2],[12,-4],[3,-21],[-9,-21],[-13,-17],[-24,8],[-26,70]],[[72285,62946],[-39,22]],[[72246,62968],[0,1],[2,3],[7,17],[10,16],[7,15],[-10,14],[-35,11],[-44,10]],[[72183,63055],[-68,79]],[[72115,63134],[-1,15],[1,16],[6,32],[2,18],[0,18],[-2,14],[-16,11],[-22,-6],[-10,-6],[-10,-34],[-37,-43],[-33,-14],[-8,-9],[-3,-5],[0,-8],[9,-8],[11,-25],[0,-23],[-8,-20],[-16,-15],[-19,-14],[-12,-50],[-60,-52],[-52,9],[-59,33],[-68,-46],[-30,3],[-15,-9],[-24,-11],[-12,-3],[-11,0],[-21,9]],[[71595,62911],[-58,98]],[[71537,63009],[-9,3],[-3,-1],[-3,-3],[-2,-2],[-4,0],[-3,3]],[[71513,63009],[0,1],[0,3]],[[71513,63013],[0,5],[0,1],[0,6],[0,6]],[[71513,63031],[-1,0],[1,4]],[[71513,63035],[6,8],[1,6],[-7,6],[-30,8],[-3,10],[4,21],[6,21],[14,31],[-9,16],[-14,16],[-7,14],[2,7],[11,13]],[[71487,63212],[1,22]],[[71488,63234],[-3,6],[-7,3],[-57,17],[-50,-4],[-33,-26],[-25,-3],[-11,-5],[-12,-12],[-12,-16],[-7,-12],[-2,-8],[1,-7],[4,-11],[0,-1],[4,-10],[15,-4],[2,-14],[-10,-12],[-25,-18],[-19,-25],[-13,-8],[-12,7],[-19,0],[-17,-5]],[[71180,63066],[-9,-6],[8,19],[1,5]],[[71180,63084],[-9,26]],[[71171,63110],[9,6],[22,13],[19,2]],[[71221,63131],[5,38],[7,15],[6,16]],[[71239,63200],[0,8],[-11,15],[-19,13],[-1,2],[4,4],[1,4],[-1,4],[0,7],[-1,3],[-1,2],[0,4],[2,4],[4,4],[13,27],[14,19],[-9,12],[-1,8],[4,7],[51,52],[63,50],[5,114],[18,11],[42,15],[25,21],[31,51],[36,40],[7,13],[12,13],[26,21],[-2,15],[3,13],[12,9],[6,8],[3,4],[5,1],[3,3],[3,6],[-3,7],[-12,11],[-7,-4],[-45,-5],[2,8],[10,18],[9,6],[1,11],[10,3],[12,9],[2,6],[-1,7],[-4,8],[-1,7]],[[71559,63899],[7,2],[4,3]],[[71570,63904],[20,-4],[19,4],[19,-6],[10,0],[-7,-17],[3,-10],[28,-15],[15,6],[10,3],[27,-2],[11,4],[6,9],[1,2],[2,7],[-1,2],[-3,5],[-2,4],[0,3],[4,2],[22,-1]],[[71754,63900],[26,52]],[[71780,63952],[33,12]],[[71813,63964],[9,1],[-5,-15],[-5,-4],[-9,0],[-1,0],[15,-8],[5,-4],[9,-1],[52,31],[30,-4],[1,-3],[4,-14],[67,5],[14,14],[8,6],[7,2],[6,7],[28,4],[40,-25],[36,2],[4,13],[12,9],[11,1],[7,-6],[8,-15],[5,2],[1,2],[2,4]],[[72174,63968],[-1,20]],[[72173,63988],[1,3],[1,1],[4,1],[1,-1],[0,-3],[3,-1],[2,14],[-4,0],[-6,3],[-6,1],[-19,-4],[-23,-11],[-18,14],[-2,0],[-6,3],[3,6],[-1,6],[-2,4],[1,5],[4,4],[9,6],[4,5],[3,12],[7,13],[28,7]],[[72157,64076],[2,12]],[[72159,64088],[6,4],[92,-50],[15,-25],[7,-6],[11,-9],[8,-2],[43,16],[63,-5],[6,-9],[15,0],[14,-4],[105,-71]],[[43031,48],[-24,-32],[-96,-16],[-13,30],[133,18]],[[43287,341],[-61,4],[26,61],[44,-1],[-9,-64]],[[42733,548],[4,-40],[-75,-29],[-13,-50],[70,5],[55,-68],[-74,-4],[74,-62],[99,-122],[-35,-74],[-75,61],[6,58],[-135,38],[-99,-26],[-40,46],[43,108],[-119,9],[-40,17],[-47,-46],[72,-92],[-36,-32],[-52,-1],[-6,50],[-60,27],[-94,93],[-68,39],[55,54],[176,20],[42,24],[185,7],[38,20],[112,6],[37,-36]],[[42939,600],[193,-10],[45,-23],[48,-64],[-10,-73],[-71,-73],[-54,9],[-4,47],[-70,18],[-16,-45],[-59,-2],[-32,53],[-75,-34],[-28,23],[-12,134],[-54,-7],[-6,43],[50,8],[155,-4]],[[41907,578],[36,-63],[-40,-34],[-44,19],[-33,-28],[-106,55],[2,52],[73,-18],[112,17]],[[42288,603],[105,-14],[10,-23],[-251,-43],[-33,53],[8,34],[98,20],[63,-27]],[[41236,1103],[-18,-93],[-47,-2],[-34,32],[99,63]],[[41517,1175],[24,27],[61,-31],[33,-99],[77,30],[9,-101],[-48,-70],[-69,38],[-78,66],[-58,-13],[-19,40],[26,54],[-10,60],[52,-1]],[[41385,1236],[53,-8],[6,-154],[-47,-9],[-39,-52],[-111,116],[-12,70],[150,37]],[[41939,1245],[32,-84],[-39,-34],[-66,70],[27,-168],[-55,20],[-52,46],[-24,54],[1,114],[69,34],[-5,53],[93,84],[-2,-62],[21,-127]],[[40738,1533],[64,-77],[-35,-26],[-43,50],[14,53]],[[40948,1481],[52,-28],[84,-1],[99,-60],[-34,-26],[95,-34],[19,-29],[-54,-39],[-22,-87],[-60,-74],[-44,30],[-61,-46],[-45,42],[74,102],[-125,38],[-52,-97],[-60,170],[-98,38],[12,44],[38,-4],[56,25],[-18,53],[98,-17],[-12,48],[49,13],[9,-61]],[[40311,1956],[103,-120],[202,-55],[25,-35],[58,2],[87,-51],[57,-77],[-105,-37],[-18,71],[-87,62],[-18,32],[-78,-30],[-69,10],[-54,37],[-7,35],[-66,31],[10,43],[-69,61],[29,21]],[[42620,682],[0,-10],[-5,-55],[-158,-38],[-168,53],[-111,47],[-109,-38],[-60,-6],[-143,48],[-56,-37],[-22,56],[-182,45],[10,67],[-52,7],[-29,-74],[-107,52],[-26,-39],[-53,6],[-15,45],[24,39],[81,65],[42,-60],[40,43],[124,3],[68,-14],[58,82],[165,-74],[-57,101],[-111,17],[-26,82],[234,-130],[48,2],[48,44],[38,-29],[43,10],[64,-23],[40,-51],[35,36],[123,-83],[30,18],[-69,77],[-129,62],[-103,37],[-66,47],[-48,170],[18,45],[98,49],[87,14],[111,71],[17,44],[-13,58],[-125,-2],[-104,-24],[-28,-23],[-89,-15],[-84,93],[21,184],[68,-31],[41,31],[18,62],[-64,26],[-6,84],[55,1],[49,-68],[34,-4],[67,46],[56,82],[2,81],[80,25],[57,-104],[33,-28],[84,27],[67,51],[45,-51]],[[40674,2151],[18,-42],[-40,-56],[-5,-76],[-43,19],[-84,-6],[-22,49],[52,14],[28,41],[-20,41],[116,16]],[[40250,2267],[94,3],[20,-37],[-22,-76],[-85,28],[-7,82]],[[40564,2303],[89,-72],[-17,-43],[-68,55],[-4,60]],[[40478,2334],[110,-122],[-66,-55],[-25,18],[-19,159]],[[40294,2349],[5,36],[62,65],[20,-44],[-87,-57]],[[40562,2449],[89,-84],[30,-62],[-146,92],[27,54]],[[40635,2493],[42,2],[5,-78],[-39,-3],[-8,79]],[[40427,2544],[106,-66],[-57,-39],[-73,59],[24,46]],[[40241,2625],[35,-90],[-27,-101],[-55,-66],[-32,37],[10,45],[40,41],[29,134]],[[40557,2648],[9,-63],[-16,-56],[-70,54],[77,65]],[[40505,2842],[22,-87],[-50,11],[-6,74],[34,2]],[[40128,2794],[8,-104],[-28,-43],[-41,42],[34,28],[27,77]],[[40311,2895],[48,-51],[-17,-71],[-48,52],[-31,-73],[-63,64],[48,33],[18,39],[45,7]],[[40395,2992],[23,-48],[-11,-52],[-58,32],[-12,47],[58,21]],[[40468,2870],[-26,130],[21,5],[31,-95],[-26,-40]],[[40388,3143],[30,-43],[4,-68],[-95,-37],[2,-29],[-102,24],[5,99],[98,-24],[-7,48],[65,30]],[[40284,3201],[33,-73],[-13,-41],[-96,32],[-6,69],[82,13]],[[40048,3336],[98,-5],[-70,-92],[4,-78],[-60,19],[-18,41],[20,98],[26,17]],[[40382,3345],[41,11],[53,-159],[-10,-46],[-40,-25],[-54,60],[-25,60],[42,69],[-7,30]],[[40196,3369],[-26,-26],[-49,9],[19,49],[57,60],[-1,-92]],[[40076,3619],[51,5],[9,-38],[69,-16],[44,-67],[-86,-49],[-45,-52],[-34,34],[-74,-16],[24,112],[76,-52],[28,52],[-68,28],[6,59]],[[40000,3906],[51,-27],[55,-114],[13,-55],[-62,14],[-18,70],[-60,-38],[-33,32],[31,103],[23,15]],[[40417,3873],[-25,69],[35,34],[30,-64],[-40,-39]],[[40156,4233],[72,-36],[-12,-110],[-64,71],[-53,25],[57,50]],[[40047,4231],[29,-28],[-79,-110],[-53,21],[10,48],[93,69]],[[40022,4331],[62,-18],[-17,-36],[-88,-12],[-40,11],[0,47],[40,36],[43,-28]],[[40152,4308],[-59,-6],[13,69],[46,-63]],[[40309,4424],[59,3],[-2,-89],[22,-49],[-13,-57],[17,-50],[6,-125],[-34,-114],[44,-114],[-25,-163],[-66,-59],[-80,21],[-18,62],[13,74],[-31,7],[-65,-46],[-32,99],[-29,37],[-5,48],[-63,141],[15,33],[65,9],[28,-19],[70,17],[28,-29],[48,131],[-57,60],[0,55],[-37,37],[25,60],[87,51],[30,-31]],[[40141,4369],[-42,40],[64,33],[-22,-73]],[[40056,4465],[-52,-66],[-31,30],[83,36]],[[40040,4592],[17,-98],[-58,7],[-52,-17],[-19,30],[26,88],[32,-20],[54,10]],[[40453,4649],[12,-61],[-72,48],[44,63],[16,-50]],[[40294,4737],[51,-113],[-5,-98],[41,-48],[-49,-32],[-50,39],[-76,6],[-32,71],[33,54],[48,8],[8,86],[31,27]],[[40397,4757],[18,-62],[-44,-28],[-33,61],[17,71],[42,-42]],[[40140,4810],[40,12],[72,-38],[-3,-123],[-75,-61],[-47,81],[-38,150],[51,-21]],[[40053,4837],[31,-66],[25,-105],[40,-80],[5,-91],[-46,-53],[-38,75],[-6,52],[20,46],[-37,21],[-37,-20],[-36,24],[13,90],[-25,90],[43,38],[48,-21]],[[40250,4991],[25,-47],[-17,-32],[33,-103],[-118,45],[-26,26],[-55,-32],[16,76],[45,32],[55,-11],[42,46]],[[40579,4961],[60,-5],[-5,-53],[-110,4],[-77,-22],[-70,39],[40,50],[58,20],[104,-33]],[[40157,5059],[-21,-86],[-86,64],[92,35],[15,-13]],[[40523,5474],[56,-11],[-66,-77],[-32,42],[42,46]],[[40649,6083],[41,-38],[-23,-50],[-75,73],[57,15]],[[40294,6228],[-19,-111],[-58,-71],[-59,6],[-14,128],[85,3],[65,45]],[[40681,6194],[-31,-7],[-25,-57],[-33,36],[76,72],[13,-44]],[[40336,6264],[-34,15],[15,77],[46,14],[-4,-57],[-23,-49]],[[40587,6287],[-34,-1],[-27,79],[32,33],[46,-35],[-17,-76]],[[40458,6344],[10,-39],[-79,-55],[-7,103],[26,94],[49,-15],[27,-76],[-26,-12]],[[40713,6345],[4,-58],[-26,-24],[-52,68],[18,80],[39,47],[32,-27],[-15,-86]],[[40437,6480],[-55,29],[38,45],[17,-74]],[[40558,6572],[78,-9],[-1,-50],[-71,-3],[-44,18],[38,44]],[[40628,6728],[50,-71],[3,-42],[-47,-37],[-68,6],[-28,57],[-39,-18],[-26,37],[17,41],[138,27]],[[40600,6755],[-55,-25],[-112,-10],[64,89],[85,-21],[18,-33]],[[40639,6831],[21,-59],[-29,-18],[-32,40],[40,37]],[[40154,6776],[-44,66],[34,30],[30,-84],[-20,-12]],[[40443,6822],[-54,13],[-21,45],[38,22],[37,-80]],[[40395,6929],[-70,-10],[6,42],[64,-32]],[[40598,6957],[18,-40],[-51,-14],[-103,-54],[-48,68],[2,42],[51,14],[93,0],[38,-16]],[[40692,7010],[33,-101],[-61,-22],[-33,48],[16,69],[45,6]],[[40501,7035],[9,-34],[-73,-9],[20,46],[44,-3]],[[40484,7057],[-115,-36],[-9,31],[91,51],[33,-46]],[[40977,7067],[64,-9],[18,-38],[-45,-113],[-118,-124],[-43,-18],[-57,73],[-23,111],[65,22],[14,81],[99,71],[26,-56]],[[40556,7247],[34,-49],[-57,-27],[-13,52],[36,24]],[[40886,7331],[-39,20],[1,46],[50,10],[-12,-76]],[[40624,7492],[36,-76],[-144,-2],[36,58],[30,-20],[42,40]],[[40321,7623],[27,-50],[-76,-25],[-19,70],[68,5]],[[40791,8241],[-20,33],[-59,35],[32,41],[48,-86],[-1,-23]],[[40587,8700],[34,-50],[66,51],[59,-19],[1,-78],[34,-59],[-17,-52],[40,-31],[5,-38],[-53,-43],[-65,-26],[-10,-104],[-39,-44],[68,-81],[44,-30],[8,-49],[-59,-10],[61,-134],[-88,-25],[-9,-53],[27,-32],[-3,-64],[-75,-25],[-159,64],[-41,37],[24,98],[41,48],[-1,66],[24,21],[-1,72],[17,58],[-24,149],[18,69],[-2,63],[37,54],[-1,115],[16,23],[-19,62],[42,-3]],[[42693,2188],[-101,24],[-70,2],[-90,58],[-39,4],[-95,-54],[-6,-58],[-67,-91],[-66,28],[-182,-94],[-76,-52],[-24,31],[-88,-92],[-2,-106],[-54,-143],[-13,-98],[20,-130],[-13,-101],[-23,-33],[-75,-40],[-40,-3],[-55,30],[-63,4],[-85,56],[-71,16],[-89,79],[-65,106],[12,47],[54,55],[70,-16],[45,28],[56,-18],[141,74],[32,5],[49,67],[33,125],[-31,17],[-107,-50],[-145,-88],[-40,-67],[-28,-10],[-77,65],[-16,-119],[-53,-38],[-7,-78],[46,-78],[-61,-5],[-75,51],[-8,38],[-52,11],[-123,87],[22,33],[61,18],[34,64],[-27,142],[135,52],[19,-58],[94,52],[59,62],[119,-27],[84,7],[58,23],[-36,52],[-71,-4],[-126,29],[-92,-2],[-33,-77],[-92,79],[-48,-14],[-7,-44],[45,-29],[-42,-55],[-83,-51],[20,-37],[0,-80],[-62,-45],[-81,15],[-24,55],[40,49],[-97,77],[94,-3],[10,68],[-69,24],[-68,-68],[-24,90],[60,88],[-52,20],[40,63],[-7,70],[-62,89],[18,24],[64,-104],[38,26],[38,-41],[42,25],[52,59],[72,15],[36,75],[105,-11],[29,26],[-5,77],[-21,47],[-73,80],[4,-71],[53,-16],[-5,-44],[-56,-27],[-41,44],[-57,-1],[22,-55],[-86,-50],[-12,-88],[-53,-52],[-86,68],[-54,177],[-85,97],[-12,132],[83,26],[-26,82],[-131,22],[-8,85],[-35,14],[-6,55],[58,42],[88,-11],[33,57],[2,68],[57,42],[-35,37],[-38,-74],[6,-38],[-52,-55],[-70,41],[-42,98],[15,28],[-38,48],[65,36],[-132,49],[-7,51],[-73,32],[42,69],[123,10],[-43,56],[37,37],[-22,38],[10,47],[-9,100],[33,41],[70,16],[-28,73],[17,89],[40,66],[-22,16],[-43,-76],[-27,-159],[-79,95],[11,33],[-7,124],[-18,61],[23,27],[-20,89],[31,69],[-8,75],[75,77],[55,-47],[22,84],[-103,48],[-20,77],[-48,18],[-70,110],[42,28],[38,-16],[137,-10],[64,-13],[114,-73],[0,61],[-24,67],[29,82],[-50,15],[-81,-41],[-58,43],[-212,4],[-42,39],[39,35],[9,49],[73,2],[-41,88],[47,49],[31,76],[70,-2],[71,101],[-24,51],[-39,-7],[-47,76],[-9,52],[-67,8],[-32,-21],[-48,9],[-11,-59],[-46,50],[-22,-7],[-61,58],[-26,50],[-44,6],[-91,-13],[33,-155],[-77,-29],[-59,99],[1,93],[26,40],[45,12],[49,47],[0,31],[115,131],[50,1],[94,141],[9,89],[93,21],[98,9],[49,-106],[31,-40],[-1,-77],[40,7],[42,-56],[-9,-80],[-75,-122],[61,-11],[34,97],[61,68],[-26,72],[11,57],[-15,78],[40,61],[25,93],[-33,3],[23,161],[72,75],[46,24],[18,-40],[56,-49],[59,-13],[1,48],[-48,-8],[-105,94],[-27,-21],[-50,10],[9,47],[50,28],[-38,73],[22,43],[88,7],[45,53],[32,9],[41,49],[31,5],[16,167],[-95,77],[3,27],[-82,69],[-55,23],[3,39],[55,38],[-3,40],[61,138],[-25,20],[28,66],[-53,99],[11,90],[65,50],[-9,84],[27,49],[41,6],[5,62],[-37,45],[-9,133],[16,73],[56,0],[-32,76],[-18,85],[72,36],[55,-76],[-4,151],[-95,31],[-49,67],[84,113],[-41,107],[-79,41],[-59,-63],[20,-69],[-54,-55],[-62,7],[-58,-18],[-56,28],[-13,102],[-40,16],[-21,89],[5,56],[-30,111],[-10,111],[35,35],[-15,33],[20,121],[43,76],[-20,67],[17,161],[29,40],[-9,104],[64,34],[45,51],[-2,68],[63,128],[8,90],[-25,165],[-29,99],[-28,141],[-20,31],[-22,134],[31,203],[-16,98],[-63,132],[-3,87],[28,42],[-3,61],[-23,31],[10,100],[14,28],[54,-50],[70,14],[43,85],[10,149],[-5,62],[60,13],[65,251],[-2,79],[22,140],[69,89],[0,73],[-17,77],[43,47],[19,78],[45,96],[51,58],[17,142],[50,141],[3,157],[21,20],[0,98],[-13,30],[64,156],[20,83],[46,35],[12,39],[5,97],[-25,41],[14,47],[-19,117],[29,93],[29,11],[26,144],[22,77],[-12,67],[24,101],[-50,110],[15,133],[-13,87],[10,38],[-23,113],[-36,273],[4,109],[-20,121],[-2,102],[14,167],[14,56],[48,-16],[27,72],[24,10],[-12,95],[49,51],[-14,76],[0,81],[13,32],[-18,49],[11,64],[-26,86],[-46,55],[3,97],[-13,60],[13,59],[37,28],[34,76],[-4,58],[16,59],[37,78],[13,256],[16,44],[22,129],[49,27],[8,80],[-22,74],[5,47],[-10,84],[35,27],[31,75],[-12,68],[34,84],[15,128],[-6,31],[25,110],[-11,95],[15,94],[-29,107],[6,90],[22,41],[-6,52],[46,51],[6,44],[26,25],[4,94],[-24,55],[10,80],[-19,34],[-21,117],[9,78],[-11,49],[31,265],[-9,63],[10,130],[35,83],[-2,86],[-66,55],[-6,111],[12,26],[2,87],[22,31],[21,-54],[30,29],[29,82],[-6,79],[13,59],[30,427],[20,87],[-1,122],[18,35],[17,109],[-13,54],[5,69],[-31,120],[13,65],[-29,122],[0,130],[15,49],[-10,51],[23,62],[-11,28],[14,91],[-14,158],[3,60],[-24,76],[-5,116],[-24,68],[6,118],[-32,207],[2,85],[18,118],[-34,68]],[[41949,23211],[99,11],[63,42],[41,65],[31,101],[-29,153],[15,46],[52,2],[18,18],[49,75]],[[42501,22888],[1,-19],[-4,-12],[-11,-23]],[[42653,22271],[1,-23],[2,-8],[2,-4],[0,-4]],[[42670,21811],[11,-15],[0,-11]],[[42681,21785],[-35,-61]],[[42786,21387],[4,-177]],[[42790,21210],[26,-88],[8,-47]],[[42907,20641],[12,-34],[0,-12]],[[42907,20503],[5,-72]],[[111252,47001],[10,-47],[30,-40],[56,-10],[26,-169],[-15,-53],[-34,-59],[-21,9],[-24,-76],[-22,-9],[-42,-149],[-17,-16],[7,-58],[-37,-108],[1,-64],[-16,-60],[-60,-8],[-64,-80],[-20,-92],[-52,16],[-30,-21],[-34,8],[-27,-92],[-43,-33],[-48,60],[-84,10],[-22,-11],[-27,50],[-36,-1],[-78,73],[-38,12],[0,133],[-25,71],[10,53],[-16,113],[19,32],[-12,81],[24,58],[29,8],[65,75],[29,54],[54,29],[4,97],[52,72],[62,-54],[23,18],[0,54],[26,26],[49,11],[33,-37],[29,21],[50,-17],[29,13],[26,54],[39,-21],[48,31],[75,-63],[-4,62],[43,44]],[[111140,47585],[7,-31],[45,22],[-2,-68],[-106,34],[56,43]],[[112085,48001],[-48,-87],[-9,46],[25,43],[32,-2]],[[112385,48515],[-59,65],[13,24],[43,-55],[3,-34]],[[112325,48695],[33,-38],[-6,-45],[-60,77],[33,6]],[[114733,50381],[14,-46],[-9,-51],[-38,29],[33,68]],[[115310,51916],[-38,-36],[-23,37],[39,72],[22,-73]],[[115649,53153],[44,-22],[14,-35],[-13,-48],[-41,38],[-65,23],[-15,72],[43,0],[33,-28]],[[115665,53242],[-46,39],[44,22],[2,-61]],[[115549,53989],[-23,-11],[-206,135],[-53,79],[35,36],[79,-44],[72,-74],[70,-28],[52,-41],[-26,-52]],[[114780,54376],[-43,24],[15,81],[28,-105]],[[114300,58679],[-52,-76],[-16,31],[68,45]],[[115335,58949],[34,-12],[-15,-56],[-41,13],[22,55]],[[118848,60834],[-38,19],[-72,112],[-1,99],[-38,4],[-7,45],[-55,-9],[-38,18],[-45,-155],[-22,-187],[-71,-33],[-61,35],[-45,-42],[-12,-98],[-35,-44],[-59,-37],[-9,-33],[-84,8],[-84,-32],[-92,23],[-87,-24],[1,-72],[46,-103],[56,-79],[-45,-111],[-48,-10],[-45,51],[-36,-24],[-81,-1],[-63,42],[-78,4],[-85,101],[-5,39],[-57,33],[-38,-55],[-64,-18],[-45,-143],[-92,-181],[-44,-31],[-52,-119],[-95,-9],[-78,-65],[-10,-36],[-64,-47],[-129,-69],[0,-47],[-51,16],[-70,-108],[-27,-10],[-103,-120]],[[116491,59331],[-7,-61],[-58,-75],[-83,-42],[-140,37],[-12,-54],[-69,8],[-61,-29],[-29,-52],[-64,10],[-52,-46],[-90,-61],[-18,-26],[-74,-34],[-108,-130],[6,-36],[-121,-105],[-16,31],[-47,-18],[2,-84],[-39,0],[-25,-29],[-54,3],[-74,-54],[-24,106],[224,116],[-28,83],[68,93],[-88,-7],[-21,17],[-22,74],[-49,-5],[0,60],[54,11],[22,49],[-19,34],[30,69],[65,40],[26,-4],[85,126],[-1,40],[37,24],[7,51],[39,45],[35,75],[-63,75],[-34,75],[-75,53],[-106,7],[-82,60],[-23,-25],[-48,14],[-70,-56],[-20,-87],[-44,-10],[-10,-47],[-68,-76],[-46,-93],[1,-47],[-26,-34],[-186,-85],[-14,-36],[-145,-67],[-74,-108],[-30,-111],[16,-64],[-46,-48],[-94,-132],[-30,42],[-24,-35],[-68,6],[-105,-81],[-42,14],[-36,75],[-36,28],[-62,-11],[-64,-68],[-4,-69],[-47,-104],[-7,-124],[57,-144],[46,-67],[40,-23],[56,-58],[49,3],[89,-22],[36,-25],[44,47],[71,5],[59,-117],[94,-120],[-10,-58],[-36,39],[-33,-10],[-22,-69],[-13,-144],[11,-59],[66,-63],[114,-36],[125,19],[49,60],[-15,68],[77,49],[91,99],[4,41],[59,51],[37,8],[69,45],[71,-9],[41,-67],[40,-6],[-1,-56],[23,-22],[72,-5],[36,-61],[44,-27],[26,30],[122,-1],[55,57],[4,-49],[62,-41],[63,0],[76,-21],[-41,-45],[21,-62],[-59,-39],[0,-56],[29,-70],[-35,-45],[-45,-29],[-45,12],[4,46],[-65,41],[-98,-57],[-18,-32],[-68,-45],[-58,-8],[-97,-52],[-51,-54],[-38,-18],[10,-59],[-76,0],[-38,-78],[18,-116],[-55,-19],[-77,-45],[-23,16],[26,77],[-33,26],[-65,-20],[-1,-65],[54,-75],[-78,-81],[-13,-72],[-40,5],[2,-68],[-37,14],[-62,-39],[-36,-127],[-49,-41],[-25,-133],[-58,-30],[-3,-164],[57,-1],[44,-31],[-2,-29],[70,-84],[71,-49],[44,-7],[68,-61],[53,-30],[43,-170],[13,-109],[35,-67],[6,-59],[45,-110],[13,-87],[29,-37],[-3,-45],[29,-41],[10,-70],[24,-7],[4,-106],[-17,-75],[19,-56],[80,-77],[90,-56],[25,-102],[9,-85],[80,-32],[65,-67],[38,-122],[-40,-41],[-55,21],[-148,104],[-67,-58],[-52,11],[-12,43],[-52,85],[-67,34],[-56,3],[-49,-35],[-36,-48],[-52,-3],[-53,45],[-31,77],[4,35],[-40,73],[-48,3],[0,-52],[37,-23],[-2,-53],[27,-16],[59,-85],[85,-25],[110,68],[89,-26],[29,-92],[27,-40],[45,-12],[50,-37],[68,-111],[86,-85],[68,-53],[59,-113],[38,-113],[-27,-36],[-106,-13],[-84,-43],[-29,-39],[-50,-24],[-29,-40],[-58,-35],[-14,-75],[-59,-80],[-34,62],[-18,-21],[33,-78],[60,-39],[38,26],[60,70],[40,14],[48,-14],[49,-65],[64,-136],[92,-51],[26,-58],[-107,-156],[-94,-28],[3,-65],[94,73],[25,-43],[21,36],[-14,45],[47,25],[19,-24],[-24,-196],[14,-47],[-38,-30],[-38,25],[-49,3],[-10,53],[-45,-62],[10,-53],[48,5],[22,-54],[-4,-124],[-24,-62],[-37,-42],[37,-110],[-8,-22],[26,-64],[-94,-22],[-17,-48],[-28,-28],[-20,77],[-36,23],[-10,-77],[-42,-71],[-16,-72],[-51,-19],[-9,-75],[-54,-129],[-27,-35],[30,-46],[-20,-71],[-30,14],[-11,-125],[-65,30],[-27,41],[-20,-29],[75,-72],[-24,-34],[-28,9],[-17,-48],[-1,-66],[-43,0],[-38,-55],[39,-26],[-18,-93],[-51,93],[-23,-67],[-59,46],[-57,19],[-12,-28],[1,-82],[45,2],[33,-41],[23,-61],[-49,4],[-14,-65],[35,-17],[30,62],[21,-40],[-37,-41],[-42,-10],[-82,-184],[-102,65],[20,-75],[40,-16],[36,13],[47,55],[51,-49],[-31,-49],[-9,-123],[-23,8],[-28,-45],[37,-43],[34,-107],[-62,-13],[8,64],[-53,29],[-24,53],[-26,-78],[-49,-46],[69,-50],[22,-51],[-22,-33],[-44,-8],[-12,27],[-60,1],[-41,-112],[39,-18],[6,-36],[-107,-68],[12,-76],[-68,-94],[-55,38],[-29,-30],[-84,24],[-32,-27],[-19,-80],[-70,15],[22,-46],[45,-1],[39,-33],[13,-50],[-52,-42],[-18,12],[-20,-114],[-38,-16],[-80,-71],[-17,19],[-28,-81],[-66,-15],[-11,-66],[-71,-57],[-21,59],[-40,-13],[-24,-69],[4,-48],[-44,-75],[-8,-43],[-76,-92],[12,-56],[-26,-50],[-44,-6],[-31,22],[-49,-61],[-37,2],[-45,-39],[-56,2],[-60,53],[-26,-8],[-24,-86],[-58,-30],[-16,59],[-33,29],[-68,-24],[-76,-121],[-48,5],[4,87],[-14,25],[-59,-35],[-15,-30],[6,-73],[30,-33],[-39,-38],[-13,58],[-32,42],[-64,-36]],[[112609,48487],[-57,-16]],[[112552,48471],[-50,-4],[-23,-44],[-45,135],[-11,56],[-31,23],[-17,56],[-2,65],[-29,42],[-25,-89],[-40,-23],[48,-66],[-20,-21],[61,-102],[-20,-85],[16,-124],[-41,-51],[-22,19],[-47,-2],[-27,-86],[-28,-11],[-18,45],[-32,28],[1,-113],[-27,-53],[-31,-1],[-20,58],[-69,-73],[-15,-46],[-63,33],[-30,-58],[-46,-18],[-28,67],[-69,-31],[-83,-79],[-32,-19],[-22,-46],[-75,3],[-52,-21],[-35,20],[-131,-93],[-29,12],[-44,-57],[-15,-49],[-59,-9],[-24,99],[-21,-55],[11,-77],[-48,-45],[-42,-65],[0,-84],[88,-14],[9,-46],[-29,-16],[29,-87],[26,-11],[21,-55],[-51,-109],[-47,-30],[-58,-3],[-39,33],[-4,72],[-74,60],[-7,62],[-21,8],[10,119],[-33,9],[-11,57],[19,80],[-15,41],[40,56],[13,87],[37,21],[5,62],[-81,-3],[-52,60],[-15,-56],[-36,-23],[-46,2],[-39,-25],[-64,12],[37,46],[-3,58],[-28,20],[-36,-19],[-44,49],[-40,-22],[-68,100],[-7,58],[-34,-27],[16,-106],[-22,-20],[-44,24],[-3,-41],[-74,-30],[-54,-59]],[[110222,47826],[-52,71],[-43,34],[-50,-32],[-101,-3],[-29,73],[-38,-2],[-42,50],[-17,60],[-38,15],[-21,32],[-55,24],[-19,53],[-3,80],[-18,62],[-23,6],[-12,59],[17,90],[42,4],[22,71],[-2,65],[-24,42],[-70,35],[-11,-23],[-55,-21],[-30,6],[-13,52],[-77,17],[-57,-43],[-62,85],[-52,10],[-14,68],[-33,61],[-38,31],[-38,1],[-6,-34],[-60,-20],[-44,-45],[-29,3],[-27,-49],[11,-81],[-37,-71],[-25,-17],[-44,16],[-39,-57],[-41,-37],[-35,27],[-14,59],[-54,-25],[-18,-40],[-16,-119],[-45,30],[-84,139],[-21,-19],[-16,-80],[-29,-30],[-27,90],[-36,31],[-22,-68],[-43,-44],[1,-43],[-58,-61],[-37,30],[-19,60],[-58,53],[-60,16],[-36,44],[-25,-93],[-47,-74],[-13,-52],[-38,-8]],[[107975,48390],[-9,15]],[[107966,48405],[-3,4],[-5,1],[-24,10],[-16,-1],[-8,-6],[-16,0],[-7,-4],[-4,-10],[-1,-13],[-4,-8],[-10,2],[-9,15],[-12,40],[-12,15],[-2,0],[-2,0],[-12,-3],[-23,-27],[-3,-14],[0,-37]],[[107793,48369],[-14,-50]],[[107779,48319],[-2,-5],[-6,-3],[-9,3],[-5,0],[-4,-3]],[[107753,48311],[-8,-26]],[[107745,48285],[12,-22],[5,-11],[1,-17],[-4,-36]],[[107759,48199],[14,-39],[6,-36]],[[107779,48124],[3,-9],[8,-7],[15,-7]],[[107805,48101],[2,-5],[2,-15]],[[107809,48081],[15,-38]],[[107824,48043],[9,-14],[1,-5]],[[107834,48024],[-9,-55]],[[107825,47969],[25,-80],[-22,-21],[-5,-155],[5,-7],[20,-11]],[[107848,47695],[13,-25]],[[107861,47670],[-7,-18]],[[107854,47652],[-12,2],[-5,-7],[2,-8],[2,-8],[-1,-13],[-4,-4],[-15,-6],[-5,1],[-6,7],[-20,27],[-15,-10],[-5,1],[-2,6],[2,24],[-34,12],[-85,-43],[-5,4],[-8,8]],[[107638,47645],[-13,32]],[[107625,47677],[4,23],[0,9],[-5,11]],[[107624,47720],[6,12],[5,18]],[[107635,47750],[-1,5],[-2,-1],[-7,8],[-14,12]],[[107611,47774],[-1,13],[7,51],[0,19],[-5,10],[-6,1]],[[107606,47868],[-2,9],[1,11],[7,16],[-41,92],[-104,-84],[-36,-67],[-30,-30],[-64,-9],[-28,46],[-21,-3],[-53,-60],[-38,64],[10,61],[-14,35],[-50,22],[-11,81],[17,69],[-8,50],[-47,-16],[-32,30],[-114,35],[-29,-16],[-75,21],[0,45],[44,128],[28,52],[-1,69],[-18,69],[41,85],[6,50],[40,7],[-21,72],[-49,34],[-52,-40],[-53,28],[-18,37],[-66,11],[21,73],[-15,92],[-36,54],[30,44],[-30,102],[-44,17],[0,107],[73,71],[5,36],[-58,-13],[-50,-29],[-31,29],[-66,-14],[-57,12],[-112,-60],[-96,-98],[-47,50],[74,112],[4,94],[-30,101],[-47,-6],[6,194],[50,53],[33,-2],[-18,82],[13,80],[32,107],[26,-35],[59,66],[24,47],[-3,64],[19,76],[50,-38],[21,9],[49,140],[18,28],[39,-24],[31,48],[-42,65],[-14,76],[61,43],[-18,84],[22,61],[2,80],[13,53],[-2,90],[-14,57],[-1,81],[-15,112],[13,80],[-12,51],[2,117],[-44,16],[-63,46],[-6,-75],[-33,-12],[-36,119],[-11,105],[-26,46],[4,105],[-84,131],[-38,-6],[-22,23],[-15,66],[-34,-4],[-33,30],[-31,-92],[-4,-59],[-43,-43]],[[106138,51987],[-79,92],[-58,-22],[-26,15],[-4,45],[-72,100],[-32,13],[-33,-47],[-38,-9],[2,57],[63,61],[-8,60],[-46,116],[-35,26],[-6,37],[-59,-43],[-8,50],[54,39],[19,44],[-62,9],[-24,69],[-72,-6],[-35,-21],[-44,10],[-12,-76],[-48,19],[-28,-25],[-2,-48],[-78,3],[-44,-24],[-78,35],[-81,8],[-28,74],[-28,21],[-39,-56],[-51,-15],[-42,-36],[-6,-30],[29,-46],[-37,-56],[-85,-42],[-154,-120],[-69,0],[-111,-108],[-24,-81],[-92,-107],[-27,2],[-48,-55],[18,-42],[-28,-76],[-73,-58],[-52,-22],[-26,21],[-63,-16],[-36,-42],[-77,23],[-54,-3]],[[102912,51430],[-45,57],[-12,85],[24,68],[19,116],[-15,93],[-80,70],[-41,-49],[-46,-28],[-96,-20],[-12,-28],[8,-27]],[[102616,51767],[-34,20]],[[102582,51787],[-24,-7],[-54,15],[-27,-53],[-21,-10],[-16,10],[-9,2],[-5,-2],[-12,-10]],[[102414,51732],[-10,4]],[[102404,51736],[-5,13],[-7,3],[-57,-20]],[[102335,51732],[-6,9],[6,19]],[[102335,51760],[-9,3],[-10,-5],[-18,-19],[-51,6],[-47,70],[-53,10],[-48,35],[-41,60],[-14,-15],[-21,15],[-6,-2],[-4,-8],[-11,-50],[1,-25],[-3,-12],[-5,-8],[-22,-18],[-61,46],[-16,3],[-7,3],[-1,0],[-5,5],[-3,7],[-2,19],[-8,18],[7,22],[-13,30],[-33,-50]],[[101831,51900],[1,-5],[5,-15],[-2,-27]],[[101835,51853],[13,-46],[-3,-2],[-11,-17],[-9,-4],[-10,0],[-17,-2],[-7,3],[-5,16],[2,37],[-18,29],[-23,85],[-35,27],[-31,63],[-24,-34],[-70,28],[-66,-18],[-68,32],[1,7],[1,19],[0,12],[-3,34]],[[101452,52122],[3,7],[9,9]],[[101464,52138],[3,8],[0,11],[1,4],[1,4],[8,4],[2,3],[7,41],[-43,35],[-52,-64],[-4,1],[-11,4],[-30,2],[-8,8],[-10,16],[-7,6],[-17,1],[-5,4],[-27,59],[-21,4],[-20,14],[-9,-1],[-9,4],[-6,12],[-5,29],[-27,39],[-25,7],[-21,17],[-3,8],[-7,16],[8,53],[-37,72],[-13,64],[-46,11],[-1,8],[-3,6],[-8,3],[-5,0],[-7,0],[-12,-5],[-2,-4],[-4,-8],[-28,-18],[-28,-1]],[[100933,52615],[-9,-5],[-8,-11],[-7,-29]],[[100909,52570],[-54,19],[-73,182],[-63,86]],[[100719,52857],[-49,-3]],[[100670,52854],[-23,27],[-4,1],[-9,-2],[-4,1],[-12,16],[-7,-5],[-9,-10],[-7,-3]],[[100595,52879],[-34,49],[-22,26]],[[100539,52954],[-4,10],[1,8],[2,6],[0,5]],[[100538,52983],[-4,4],[-4,0]],[[100530,52987],[-8,-3],[-5,0],[-6,6],[-29,51],[-26,14],[-13,13],[-12,18],[-5,4],[-19,1],[-4,3],[-7,15],[-24,4],[-17,16],[-7,-2],[-7,-4],[-8,2],[-3,6],[-4,14],[-2,13],[-1,8],[9,24],[1,12],[-5,7],[-10,6],[-7,6],[-3,72],[-45,-1],[-48,27],[-25,-9],[-8,3],[-48,30],[-16,2]],[[100118,53345],[-6,-15]],[[100112,53330],[-5,-3],[-8,-2],[-2,-2],[-2,-5],[-5,-24],[-3,-2],[-11,2],[-7,6],[-15,19],[-7,4],[-7,-3],[-1,-8],[1,-10],[-6,-17],[2,-47]],[[100036,53238],[-8,-42]],[[100028,53196],[-2,-10],[-5,-8],[-6,-5],[-17,-2],[-4,-8],[3,-10],[0,-4],[-1,-11],[-2,-5],[0,-2],[-4,-3],[-6,-3],[-6,-5],[-11,-29],[-18,12],[-9,0],[-10,-3],[-7,5],[0,1],[-3,27]],[[99920,53133],[-17,51]],[[99903,53184],[-5,12],[-4,10],[-5,5]],[[99889,53211],[-7,35],[-74,42],[-23,43],[-55,46],[-20,-5],[-104,67],[-33,59],[25,39],[-24,37],[-41,0],[-61,65],[-27,45],[-37,11],[-79,-16],[-44,41],[-16,46],[-29,18],[-37,124],[-53,68],[-33,-71],[-43,-18],[-49,28],[10,67],[-24,40],[46,60],[-34,38],[-24,64],[29,119],[-37,45],[-53,106],[-20,14],[-4,121],[-26,62],[25,25],[71,7],[31,36],[24,-108],[65,-71],[57,27],[8,50],[64,11],[76,97],[9,62],[-33,86],[-31,45],[18,104],[-156,113],[-56,94],[-18,56],[6,118],[-29,155],[4,52],[66,48],[28,38],[3,43],[-24,53],[-45,26],[-20,35],[-56,45],[-88,21],[-40,50],[-24,117],[-24,58],[-6,70],[-49,132],[20,114],[-27,25],[-39,-39],[-33,40]],[[98665,56486],[-52,-23],[-95,7],[-62,38],[-56,5],[-25,28],[-55,3],[-45,35]],[[98275,56579],[-80,64],[-1,72],[-52,-3],[-45,-32],[-56,-2],[-20,84],[-20,31],[-54,25],[-11,40],[47,82],[-18,45],[2,99],[-38,96],[-32,44],[-84,48],[-29,-28],[-32,16],[-23,103],[-96,49],[-73,-20],[-95,57],[-46,-20]],[[97419,57429],[-25,38]],[[97352,57507],[34,19]],[[97554,57559],[66,50],[37,54],[-104,124],[-2,33],[31,70],[-32,47],[4,93],[-40,54],[-7,131],[26,54],[-24,81],[-170,96],[-73,1],[-41,-43],[-2,-44],[-37,1],[-52,45],[-43,156],[50,86],[-45,52],[-36,98],[15,61],[1,23],[-5,34],[0,12]],[[97071,58928],[72,13],[40,78],[-8,33],[-2,26],[-2,13]],[[97171,59091],[-6,11],[-18,12],[-3,36]],[[97144,59150],[47,102],[1,14],[1,9],[3,8],[3,8],[4,6],[10,11],[64,28],[77,-1],[127,139],[50,-6],[11,3],[-3,21],[-23,29],[-2,10],[12,44],[6,11],[78,-43],[37,14],[7,-3],[15,-11],[26,24],[84,82],[30,12],[41,-112],[-11,-51],[10,-39],[6,-9],[9,1],[17,9],[66,0],[60,52],[29,-14],[12,10],[23,35]],[[98071,59543],[11,-4],[4,-11],[6,-37]],[[98092,59491],[6,-10],[6,5],[45,41],[67,131],[2,62],[18,43],[12,12],[16,11],[5,8],[4,12],[-6,36],[4,12],[20,21],[6,9],[10,12],[15,8],[41,11],[42,-20],[83,6],[54,-24],[72,11],[51,33],[12,6],[15,1],[50,-9],[15,-9],[8,-1],[6,3],[39,41],[29,60],[9,17],[6,7],[26,29],[-1,11],[-7,24],[8,20],[57,48],[43,14],[20,38],[117,64],[43,38],[32,12],[51,40],[24,-9],[17,3],[29,25],[26,12],[21,18],[52,7],[14,16],[11,45],[7,10],[5,6],[14,7],[20,6],[95,-1],[19,7],[11,19],[-1,12]],[[99607,60558],[-17,65]],[[99590,60623],[21,30],[-48,238],[33,103],[96,46],[-42,101],[80,57],[75,-5],[-14,110],[-36,23],[27,82],[-90,279],[-51,120],[11,102],[-16,91],[19,115],[-2,42],[39,39],[-100,51],[-86,-14],[-47,34],[-4,34],[77,72],[116,14],[23,30],[104,32],[61,-11],[111,49],[151,55],[48,34],[29,-6],[26,-93],[54,-28],[93,49],[38,3],[70,-69],[43,37],[18,102],[-7,59],[-98,28],[-26,32],[31,124],[45,103],[30,183],[41,83],[62,248],[56,131],[12,155],[52,10],[142,-89],[147,-57],[63,-6],[34,18],[193,-6],[26,-23],[2,-82],[68,22],[96,89],[15,24],[112,12],[23,78],[39,17],[4,111],[-35,85],[7,62],[-32,184],[28,137],[50,134],[25,30],[85,13],[72,-7],[54,44],[88,23],[68,110],[17,84],[-27,45],[4,50],[62,71],[87,14],[79,-27]],[[102311,64887],[189,49]],[[102500,64936],[1,-7],[6,-18],[0,-15],[-7,-31],[2,-13]],[[102502,64852],[20,-37]],[[102522,64815],[-44,-30],[-6,-10],[-2,-11],[0,-11]],[[102470,64753],[26,-42]],[[102496,64711],[6,-8],[8,-6],[25,-12],[17,1],[8,-3],[23,-17],[11,-29],[-3,-6],[-17,-12]],[[102574,64619],[-25,-33]],[[102549,64586],[2,-15],[13,-15],[12,-8],[14,2],[44,-30],[20,1],[7,-2],[37,-24]],[[102698,64495],[19,-28],[13,-9]],[[102730,64458],[23,4],[9,-5],[24,-30],[3,-11],[-5,-23],[1,-12],[8,-34],[86,-67]],[[102879,64280],[32,3],[16,-9]],[[102927,64274],[43,-63],[76,-9],[35,32],[80,-1],[79,-126],[53,0],[12,4],[5,7],[1,9],[1,8],[3,8],[6,3],[16,-5],[17,-1],[5,-6],[2,-11],[-5,-25],[12,-33],[93,-84],[43,-80],[3,-55],[15,-15],[1,-10],[-2,-11]],[[103521,63810],[-6,-13]],[[103515,63797],[-1,-5],[1,-5],[93,-181],[45,-20],[15,-13],[7,-10]],[[103675,63563],[10,-33],[2,-5],[3,-3],[3,-3]],[[103693,63519],[1,-7],[0,-4],[-6,-15],[2,-12],[5,-9],[14,-15],[11,-21],[4,-23],[-1,-25],[-5,-26],[-1,-16],[6,-5],[8,-4],[6,-8],[-1,-9],[-4,-14],[-38,-115],[-11,-16],[-4,-9],[1,-13],[19,-70],[10,-17],[8,-16],[3,-30],[0,-28],[-7,-18],[-26,-27],[-79,-121],[-5,-14],[-18,-146],[8,-11],[25,-21],[21,-64],[0,-21],[2,-7],[22,-13],[5,-12],[-4,-24],[6,-17],[13,-1],[26,18],[61,-11],[4,-6],[9,-15],[6,-5],[25,-16],[37,-9],[8,0]],[[103859,62431],[19,19],[8,1],[8,-5]],[[103894,62446],[24,-38],[54,-11],[32,8],[66,-4],[35,6]],[[104105,62407],[38,-11],[32,-26]],[[104175,62370],[35,3],[17,-8],[25,4],[31,-10],[38,10],[25,1],[44,14],[72,-20],[42,-1],[9,0],[24,4],[10,-2],[138,-34],[62,-38],[10,-10],[62,-99],[38,-34],[84,-3],[32,-40],[6,-11],[10,-27],[6,-9],[11,-6],[24,1],[13,-7],[48,-37],[27,-29],[6,-9],[4,-10],[6,-8],[129,-55],[132,20],[7,-5],[-4,-12]],[[105398,61903],[-16,-28]],[[105382,61875],[-10,-41],[3,-88],[36,-11],[19,-1],[14,-5],[10,-13],[20,-54],[40,-147],[54,-138],[9,-77],[7,-23],[13,-21],[147,-173],[9,-14],[8,-27],[5,-79],[3,-10],[9,-1],[36,7],[136,16],[137,18],[2,0],[125,-20],[126,-20],[311,-49],[155,-24],[155,-25],[58,21],[132,48],[18,0],[307,-60],[153,-30],[74,9],[44,-5],[43,-13],[38,-33],[57,-114],[33,-43],[24,-15],[397,-111],[237,-151],[12,-3],[149,35],[149,36],[-1,-126],[2,-5],[37,-8],[112,0],[46,-30],[71,90],[30,8],[48,34],[27,19],[151,95],[172,90],[172,90],[164,31],[164,31],[163,33],[48,9],[55,-13],[84,2],[99,-23],[76,32],[99,-15],[88,15],[2,1],[2,2],[1,5],[3,1],[2,0],[3,2],[57,50],[94,49],[29,5],[21,0],[6,1],[6,3]],[[111019,60904],[24,24]],[[111043,60928],[104,53],[6,10],[10,33],[9,11],[36,34],[15,21],[12,27],[10,30],[6,13]],[[111251,61160],[97,142]],[[111348,61302],[62,49],[93,44],[23,23],[11,5],[40,4],[13,7],[11,13],[61,88],[35,2],[18,10],[7,2],[9,6],[4,17],[1,20],[-2,19],[-40,94],[-22,29],[-43,34],[-13,16],[-44,75],[-18,68]],[[111554,61927],[-30,29]],[[111524,61956],[5,43]],[[111529,61999],[28,57]],[[111557,62056],[10,25],[8,14]],[[111575,62095],[6,19],[0,10],[-2,21],[1,10],[3,16],[73,169],[40,45],[64,30],[37,-13],[104,2],[13,-2],[10,-9],[32,-37],[16,-30],[19,-22],[51,-26],[136,-45],[141,-15],[6,-2],[11,-10],[6,-3],[28,-4],[12,5],[14,13],[24,30],[39,33],[20,24],[63,20],[41,61],[99,100],[44,114],[51,23],[26,2],[64,-30],[14,-2],[151,12],[53,12],[63,19],[50,53],[81,80],[8,10],[4,3],[61,18],[23,37],[8,21]],[[113383,62857],[-15,65]],[[113368,62922],[55,122],[94,126],[78,45],[189,-20],[21,18]],[[113805,63213],[20,82],[2,18],[-7,19]],[[113820,63332],[31,8],[13,-4],[18,15],[10,-6]],[[113892,63345],[16,-35]],[[113908,63310],[27,-15],[40,6],[30,46],[49,19],[30,26],[7,3],[21,1],[31,25],[76,-15],[44,-3],[6,2],[11,8],[5,2],[43,-18],[13,9],[23,41],[29,-28],[11,2],[18,15],[36,-49],[98,-30],[52,9],[87,-21]],[[114695,63345],[28,20],[11,19],[5,2],[14,-5]],[[114753,63381],[15,14]],[[114768,63395],[7,13],[3,4],[3,5],[-1,82],[-51,94],[-27,102],[-144,153],[-15,6]],[[114543,63854],[14,28]],[[114557,63882],[-4,9],[-7,6],[-16,4],[-36,16],[-28,88],[-120,60],[-87,129],[-100,19],[-9,3],[-19,13],[-9,3],[-169,-31],[-82,-118],[-35,-34],[-13,-29],[-15,-21],[-18,2],[-94,96],[-9,7],[-28,11],[-46,21],[-39,2],[-97,-24],[-26,-1],[-71,17],[-24,-8],[-37,-26],[-43,-62],[-23,-15],[-23,14],[-111,140],[-18,117],[0,5],[9,12],[88,47],[12,11],[4,19],[-9,123],[2,25],[3,10],[87,148],[7,20],[-5,33],[2,11],[81,192],[86,207],[79,190]],[[113547,65343],[144,-94],[74,-31],[86,-4],[108,-63],[51,21],[106,76],[86,93],[96,83],[172,20],[44,17],[42,48],[14,156],[-81,20],[38,42],[20,95],[78,86],[8,103],[88,111],[4,71],[61,81],[72,207],[18,-1],[129,132],[61,22],[21,92],[29,34],[-8,74],[-50,69],[36,120],[-113,58],[-97,-32],[-45,10],[-8,99],[94,65],[64,88],[78,72],[85,97],[126,-3],[59,29],[59,4],[49,33],[95,29],[74,0],[97,38],[53,-17],[148,7],[113,24],[37,34],[89,-26],[58,16],[37,-30],[92,-31],[57,-63],[42,18],[69,-90],[103,-23],[15,-31],[116,39],[40,-3],[151,-102],[39,12],[82,-95],[12,-36],[63,-75],[-23,-60],[91,-60],[51,-88],[-11,-46],[40,-18],[-39,-54],[82,-30],[-7,-67],[-26,-38],[106,-214],[-19,-29],[51,-33],[-3,-72],[40,-11],[20,-45],[-19,-101],[10,-62],[82,-100],[53,-94],[30,-121],[-29,-55],[27,-32],[-10,-53],[95,-66],[-3,-57],[-33,-65],[19,-63],[-11,-62],[53,-34],[29,-73],[42,-34],[62,3],[37,-35],[98,4],[14,19],[108,19],[50,-23],[33,-57],[51,-31],[14,-32],[55,7],[63,-26],[17,51],[38,-11],[26,-83],[53,-3],[17,-55],[60,-89],[130,-109],[52,19],[68,-25],[42,10],[-54,-146],[70,-85],[40,-134],[-61,-103],[8,-41],[87,-102],[12,-103],[32,-22],[151,38],[60,-46],[49,16],[72,-15],[104,12],[64,30],[74,-20],[52,102],[6,49],[56,-4],[103,101],[36,11],[107,-22],[36,14],[61,83],[101,24],[29,26],[125,34],[61,-15],[60,-59],[-7,-79],[-44,-58],[78,-205],[-34,-75],[-76,-97],[-74,-13],[-41,-50],[-12,-44],[29,-87],[-39,-29],[-40,-146],[9,-38],[-21,-91],[-34,-31],[-20,-59],[28,-43],[-23,-44],[15,-49],[-82,-72],[12,-40],[-23,-89],[-55,-34],[-10,-119],[-28,-70],[-82,-39],[-23,-46],[-17,-120],[7,-74],[-62,-61],[-43,22],[-334,108],[-57,62],[-37,-74],[-36,-10],[-7,-68],[-73,-80],[-35,6],[-65,-41],[-41,5],[-44,-43],[50,-98],[75,-387],[-36,-170],[9,-120],[-10,-41],[36,-35],[7,-51],[-43,-124],[9,-26],[-40,-59],[7,-82],[-42,-38],[-85,11],[-15,-25],[-56,-5],[-68,-51],[36,-36],[31,-67],[-20,-24]],[[66514,41121],[2,-6],[-2,-7],[-11,-12]],[[66503,41096],[-7,-37]],[[66496,41059],[-1,-6],[0,-9],[8,-1],[6,-11],[10,0],[2,-2],[2,-6],[-1,-4],[-3,-11],[-1,-5],[1,-6],[6,-12],[-5,-19],[-2,-12],[6,-7],[-10,-17],[0,-2],[1,-4],[1,-3],[-1,-4],[-3,-2],[-5,6],[-5,-9],[-1,-9],[2,-23],[5,2],[17,-23],[64,-17],[42,98],[38,41],[80,25],[9,-2],[8,-9],[11,-7]],[[66783,40984],[41,-72]],[[67862,40410],[4,-10]],[[67866,40400],[7,-123]],[[67873,40277],[0,-12],[-5,-11],[-12,-10],[-21,-53]],[[67835,40191],[-6,-49]],[[67829,40142],[3,-3],[7,-8]],[[67839,40131],[34,-13],[15,-57]],[[67888,40061],[43,-442]],[[67931,39619],[-3,-9],[-21,-19],[-13,5],[-5,-12],[-2,-10],[1,-8],[5,-18],[3,-14],[-1,-11],[-4,-8],[-30,-19],[-30,-48],[-10,-44]],[[67821,39404],[-17,-26]],[[67804,39378],[0,-2],[1,-9],[-1,-2],[0,-5],[-6,-11],[-34,-120],[-18,-190],[0,-6],[3,-10],[2,-4],[1,-6],[0,-8],[-3,-12]],[[67749,38993],[-17,-35],[-7,-42]],[[67725,38916],[-19,-10],[-1,-1],[-5,-5],[-44,-121],[-6,-24],[-1,-22],[7,-16],[5,-16],[1,-4],[-7,-35],[-9,-10],[-3,-6],[-1,-11],[31,-219],[24,-62],[11,-102],[21,-65],[5,-23],[0,-23],[-3,-70]],[[67731,38071],[25,3],[-2,-54]],[[67754,38020],[35,10],[37,-36],[8,-78],[10,-39],[2,-11],[-1,-11],[-4,-7],[-5,-2],[-13,4],[-2,-39],[1,-8],[5,-12],[2,-7],[0,-5],[-2,-13],[1,-6],[6,-9],[2,-3],[-4,-12],[-5,-7]],[[67827,37729],[-25,17],[-40,0],[-11,-39],[-33,26],[-29,-9],[-25,47],[26,92],[-35,-6],[-32,-147],[-25,2],[-132,44],[-46,4],[-56,42],[-52,24],[-135,-10],[14,-41],[98,34],[72,-30],[-238,-31],[-64,-23],[-180,-14],[-103,-14],[-40,-21],[-84,-22],[-111,-71],[-169,-96],[-17,-21],[-111,-42],[-54,-73],[-44,-13],[-72,-63],[-37,-45],[-32,6],[-13,14]],[[65992,37250],[-2,8],[0,5],[5,12],[1,6],[-1,6],[-3,12]],[[65992,37299],[1,16],[-1,6],[-1,6],[0,5]],[[65991,37332],[2,133],[-2,32],[-10,18],[-1,7]],[[65980,37522],[0,6]],[[65980,37528],[2,12],[0,8],[-2,19],[0,5],[11,15],[10,-5],[0,9],[-2,12],[-6,18]],[[65993,37621],[0,12],[-3,37]],[[65990,37670],[1,11],[5,11],[19,1],[9,30],[8,82],[21,-5]],[[66053,37800],[3,15],[6,17]],[[66062,37832],[1,7],[-2,12],[-2,11],[-16,13],[-3,21],[-1,10],[5,-4],[2,6],[0,25],[3,9]],[[66049,37942],[6,11],[-5,6],[3,0],[8,1]],[[66061,37960],[-2,38]],[[66059,37998],[-12,42],[-7,48],[0,23],[2,26],[-1,21],[-13,8],[-31,-11],[-45,63],[-15,-25],[-31,46],[-3,53],[-17,7],[-3,5],[-2,13],[1,14],[2,12],[5,24],[-1,8],[-6,12],[-27,34],[-50,19],[-42,-17],[-82,51],[-6,49],[-26,27],[-17,-26],[-20,33],[-10,-1]],[[65602,38556],[-4,2],[-6,1]],[[65592,38559],[9,19],[7,2],[3,4],[2,10]],[[65613,38594],[40,51]],[[65653,38645],[41,76],[14,50],[1,9],[0,8],[-6,7],[-2,5],[5,16],[1,10],[-1,10],[1,11],[2,6],[10,15],[1,15]],[[65720,38883],[-7,75]],[[65713,38958],[-32,108],[-22,138],[-15,13]],[[65644,39217],[17,26],[10,8],[9,-17],[33,3],[29,-28],[38,104],[5,39],[6,9],[1,6],[-2,7],[-9,12],[-2,6],[0,25]],[[65779,39417],[23,91]],[[65802,39508],[22,5],[12,-12],[7,-1],[-2,7],[-1,6]],[[65840,39513],[-19,50]],[[65821,39563],[-62,45],[-32,34],[0,6],[9,18]],[[65736,39666],[-1,23],[4,36]],[[65739,39725],[-1,13],[-6,21],[0,7],[2,5],[19,24],[87,2],[28,-43],[49,-24],[20,-12],[21,4]],[[65958,39722],[-10,40]],[[65948,39762],[-1,103],[-43,88],[-60,20],[-4,20],[9,53],[1,31],[2,14],[4,15],[5,10],[34,28],[24,3],[7,7],[0,1],[-5,9]],[[65921,40164],[-28,32]],[[65893,40196],[-36,27],[-1,21],[13,54]],[[65869,40298],[2,14],[10,49]],[[65881,40361],[-2,6],[-24,-3],[-39,-18],[-20,19],[-26,60],[-3,25],[0,14],[1,6],[13,160],[-2,13],[-7,-1],[-2,29],[-6,2],[-1,5],[-1,6],[0,6]],[[65762,40690],[10,43]],[[65772,40733],[16,27],[27,19],[17,48]],[[65832,40827],[8,-5],[9,0],[46,35],[46,118],[24,24],[68,-7],[8,-59],[30,-3],[7,-50],[94,-26],[25,-41],[18,5],[8,10],[4,13],[-1,16],[-12,17],[-1,8],[9,50],[64,23],[40,-18],[12,12],[3,24],[6,14],[0,7],[-2,4],[-13,8],[-4,11],[-1,11]],[[66327,41028],[2,62]],[[66329,41090],[10,39],[56,-54],[21,-6],[18,1],[7,8],[1,14],[-3,7],[-9,7],[-2,9],[0,24],[3,11],[7,5],[26,-2],[23,20]],[[66487,41173],[14,-10],[13,-42]],[[75089,35927],[-35,-27],[-15,-133],[27,-82],[8,-69],[-33,-50],[-17,61],[-52,26],[-47,71],[-109,41],[-51,-32],[-44,67],[-31,5],[-23,-34],[-49,16],[-36,56],[-17,-18],[-46,21],[-55,64],[-9,-29],[-45,-17],[-38,22],[-22,-12],[-371,5]],[[73979,35879],[0,17],[2,18],[-2,9],[-4,8],[-16,19],[-41,8],[-20,-22],[-16,-5],[-12,10],[-5,1],[-28,3],[-8,-8],[-11,4],[-2,-9],[-8,4],[-16,9],[-4,-3],[-10,-12],[-7,-3],[-104,37],[-36,-5],[-7,2],[-13,12],[-4,3],[-4,-1],[-8,-7],[-34,-14],[-39,6],[-133,-4],[-32,24]],[[73357,35980],[-19,-7],[-103,-6]],[[73235,35967],[0,-5],[2,-8],[0,-8],[-2,-9],[-3,-7],[-2,-8]],[[73230,35922],[-2,-25],[-1,-8],[-2,-7]],[[73225,35882],[-230,0],[-281,0],[-45,29],[-24,34],[-1,13],[1,13],[0,12],[-5,10]],[[72640,35993],[5,7],[2,15],[2,114],[21,119],[1,78],[30,125],[-20,117],[-48,102],[-53,63],[-7,130],[-13,37],[29,81],[-33,45],[-39,-14],[-25,-55],[-61,37],[-16,29],[-33,5],[-58,52],[7,72],[-27,63],[-10,87],[13,43],[-21,45],[-66,-62],[-48,-7],[-27,37],[6,66],[17,24],[5,67],[7,6]],[[72180,37521],[6,11]],[[72186,37532],[-1,8],[-1,10]],[[72184,37550],[-1,12],[3,9],[10,13],[3,11],[24,63]],[[72223,37658],[19,61]],[[72242,37719],[16,16],[19,168],[1,51],[5,12],[7,11],[6,12],[2,15],[-4,16],[-23,35],[-6,16],[4,9],[6,7],[7,14],[1,15],[-2,11],[-5,9],[-1,13],[5,10],[25,37],[25,20],[56,95],[53,68]],[[72439,38379],[10,22],[11,37]],[[72460,38438],[37,26],[11,36],[36,28],[16,36],[40,19],[29,149],[41,9],[93,127],[45,-75],[100,1],[40,113],[88,-69],[17,-79],[48,-30],[20,-41],[2,-80],[13,-76],[18,-12],[70,4],[27,23],[9,60],[36,25],[9,20],[11,43],[3,16],[1,17],[-2,11],[-9,15],[-2,9],[2,17],[7,15],[23,35],[45,40],[27,46],[21,2],[3,2],[4,15],[-5,16],[-15,26],[-19,44],[-5,8],[-10,3],[-3,2],[3,6],[7,9],[9,11],[24,56],[46,74],[10,25],[11,14],[2,12],[-6,36],[-1,13],[1,14],[3,12],[13,40],[39,85],[14,25],[2,9]],[[73559,39475],[-1,10],[-2,16],[-2,23],[2,39]],[[73556,39563],[18,61],[-6,50],[-1,28],[3,27],[9,20],[36,9],[8,21],[11,13],[5,5],[-1,17],[-2,9],[-9,35],[-2,9],[9,-6],[12,-1],[23,15],[28,-11],[40,34]],[[73737,39898],[22,60]],[[73759,39958],[20,2],[13,44]],[[73792,40004],[6,164],[26,81],[3,22],[0,24],[-6,31],[-11,2],[-1,2],[2,12],[2,3]],[[73813,40345],[22,17],[24,39]],[[73859,40401],[82,41],[11,45],[2,40],[5,41],[4,16],[3,10],[1,10],[-4,14],[-15,28],[0,14],[2,12],[9,22],[2,15],[0,67],[43,12],[29,33],[3,57],[9,38],[13,117],[14,78],[11,35],[68,155],[5,53],[24,33],[21,60],[41,69],[70,-24],[44,39],[34,50],[86,70],[9,26],[3,15],[2,14],[-1,15],[-2,13],[-15,33],[-11,3],[-4,8],[-1,5],[2,6]],[[74458,41789],[15,29],[2,11]],[[74475,41829],[13,82],[1,20],[0,4],[0,8]],[[74489,41943],[-8,26],[0,13]],[[74481,41982],[12,58]],[[74493,42040],[2,7],[2,4],[1,3],[8,12],[-1,6],[-2,7],[-4,3],[-18,7],[-22,23],[-13,50],[-34,18],[-80,5],[-15,15],[-1,100],[-21,164],[-21,165]],[[74274,42629],[136,2],[32,-69],[-5,-51],[44,-79],[34,-23],[28,-56],[24,-9],[29,-179],[-2,-113],[53,-54],[1,-96],[26,-73],[-16,-51],[26,-106],[-28,-70],[-2,-76],[-14,-70],[6,-115],[16,-60],[-5,-65],[33,-105],[-5,-63],[31,-21],[31,-108],[90,-142],[55,-56],[-114,-39],[-64,35],[-58,-23],[-63,8],[-64,-23],[-111,45],[-100,-10],[-23,-80],[-43,-69],[-23,-62],[34,-43],[109,-201],[11,-46],[169,-219],[20,-2],[72,-95],[58,-111],[62,-212],[36,-184],[47,-28],[-6,-99],[-26,-67]],[[79393,37680],[1,-8],[-3,-29],[44,-69],[34,-5],[18,-58],[30,-38],[3,-88],[24,-22],[68,-6],[-2,-31],[64,-93],[48,3],[39,-46],[30,50],[25,7],[41,51],[16,49],[22,13],[23,-47],[66,11],[72,-91],[49,25],[73,173],[48,-16],[61,-74],[-1,-73],[41,-38],[16,-53],[51,-83],[24,-14],[32,-93],[52,-13],[76,-54],[13,-149],[46,19],[55,-43],[-4,-32],[5,-12]],[[80693,36703],[9,5],[7,10],[6,3],[6,-15],[-3,-23],[3,-41],[-42,-91],[-22,-129],[29,-40],[14,-49],[-46,-178],[-5,-101],[27,0],[30,-67],[11,8],[5,20],[7,17],[14,0],[6,-7],[27,-64],[47,8],[4,-51],[30,-30],[4,-11],[0,-2],[-2,-31],[-12,-32],[-22,-46],[-25,-50],[-9,-18],[-26,-54],[-132,-173],[-33,-66],[-16,-36],[-29,-59],[-8,-11],[-4,-6],[-31,-6],[-16,-28],[-14,11],[-4,-1],[-2,-3],[-12,-19],[-7,-74],[-22,-59],[-4,-9],[-4,-3],[-40,-15],[-42,-57],[-1,-7],[2,-32],[-5,-64],[8,-75]],[[80349,34852],[-41,-100]],[[80308,34752],[-12,-101],[-2,-5],[-3,-3],[-10,8],[-19,-46],[-3,-16],[-1,-11],[5,-38],[-8,-35],[-15,-146],[-1,-11],[-8,-78],[1,-11],[6,-26],[2,-38],[-1,-9]],[[80239,34186],[-4,-3],[-7,-2]],[[80228,34181],[-8,-97],[4,-74],[-22,-34],[4,-109],[-4,-54],[7,-19],[3,-13],[0,-5],[-5,-16],[0,-6],[8,-20],[0,-11],[-4,-37]],[[80211,33686],[-16,-8],[-15,-18]],[[80180,33660],[-13,-22]],[[80167,33638],[-12,-25]],[[80155,33613],[-28,-1],[-7,-6],[-4,-9],[-11,-35],[-4,-8],[-17,-25],[-6,-10],[-8,-24],[-9,-26],[-14,-36],[-7,-28],[-2,-22],[1,-22],[10,-98],[0,-22],[-2,-26]],[[80047,33215],[-15,-53]],[[80032,33162],[-14,-17],[-35,-14],[-2,-12],[-2,-9],[-5,-12],[-5,-9],[-8,-7],[-18,-9],[-6,-7],[-2,-17],[0,-12],[2,-13],[4,-11],[2,-7],[-8,-10],[0,-16],[12,-14],[3,-14],[-3,-47],[3,-5],[14,-15],[18,-5],[7,-7],[7,-10]],[[80000,32849],[-7,-3],[-5,-7]],[[80144,31794],[1,-9],[1,-23],[-3,-53],[-31,-155],[1,-51],[21,-103],[29,-89],[16,-100],[38,-141],[4,-100],[-42,-96],[-8,-39],[19,-168],[43,-108],[18,-83],[21,-43],[51,-63],[54,-44],[30,-41],[55,-103],[51,-156],[28,-176],[82,-206],[37,-165]],[[80660,29479],[-342,-83],[-362,-88],[-10,-7],[2,-13],[16,-54],[-2,-55],[-14,-53],[-48,-104],[-64,-100],[-86,-85],[-8,-23],[6,-23]],[[79748,28791],[35,-17],[22,-27]],[[79805,28747],[40,-167],[8,-54],[10,-9],[1,-9],[10,-16],[-1,-3],[-7,-5],[-4,-10],[-17,-80],[-1,-119],[-6,-19],[-9,-17],[-4,-12]],[[79825,28227],[13,-17],[10,-29]],[[79848,28181],[1,-138],[15,-29]],[[79864,28014],[10,-49]],[[79874,27965],[-2,-12],[-5,-12],[-18,-16],[-27,-63],[-5,-56],[-28,-109],[-1,-91],[-14,-40],[-2,-12],[3,-23]],[[79775,27531],[-2,-2],[-9,-12],[-1,-3],[-19,-45]],[[79744,27469],[-1,-11],[0,-33],[9,-33],[10,-21],[18,-109],[17,-47],[129,-144],[43,-71],[32,-105],[31,-11],[55,17],[15,-22],[26,-4],[26,-20],[11,0],[7,-9],[8,1],[6,6],[3,9],[0,23],[-29,35],[3,25],[5,24],[3,8],[5,7],[17,9],[13,15],[26,-15],[63,40],[0,-142],[0,-103],[0,-93],[-1,-448],[-5,-20],[-6,-1],[-24,0],[-30,17],[-3,6],[-2,7],[-4,14],[0,8]],[[80220,26278],[13,35],[12,16]],[[80245,26329],[-37,41]],[[80208,26370],[-47,-47],[-54,-32]],[[80107,26291],[-22,-23],[-14,-11]],[[80071,26257],[-7,-15],[-4,-3],[-6,1],[-18,32],[-48,-7],[-25,53],[-11,90],[-19,16],[-20,84],[-51,95],[-32,-25],[-12,-4],[-4,6],[0,32],[-23,44],[-3,16],[4,8],[6,8],[5,10],[0,16],[-4,11],[-13,22],[-5,15],[-7,30],[-5,13],[-32,44],[-81,13],[-16,32],[-49,6],[-10,39],[-38,27],[-17,-22],[-58,2],[-45,71],[-20,110],[-18,48],[-71,70],[-21,148],[-44,-16],[-17,1],[-4,-10],[0,-11],[4,-26],[0,-16],[-10,-19],[-6,-13],[-4,-26],[-1,-50],[-35,-58],[-44,-2],[-24,-30],[-20,20],[-60,14],[-27,30],[-46,-18],[-50,25],[-66,-2],[-55,68],[-48,-4],[-40,45],[-41,-30],[-12,39],[-50,42],[-19,69]],[[78574,27415],[5,32],[-13,53]],[[78566,27500],[0,15],[2,8],[5,5],[3,12],[-2,5],[-4,5],[-3,5],[5,6],[11,9],[0,35],[0,13],[-17,4],[-61,-36],[-69,-7],[-44,-30],[-58,-14],[-42,-64],[-46,-12]],[[78246,27459],[-29,33],[-23,1]],[[78194,27493],[-6,5],[-3,11],[5,7],[16,8],[19,49],[2,12],[1,13],[-1,13],[-2,11],[-9,15],[-2,6],[1,9],[5,11],[2,7],[-5,13],[-10,14],[-19,17],[-65,4],[-3,78],[-26,22],[-17,6],[-13,1]],[[73937,30925],[-58,-1],[-42,26],[-38,-9],[-41,-63],[2,-29],[-104,-46],[3,44],[-32,15],[-42,66],[-21,53]],[[73895,31680],[-1,21],[6,12],[10,2],[22,-61],[71,-73],[14,-57],[38,53],[29,9],[17,30],[7,8],[5,-1],[8,-4],[10,26],[3,-1],[3,-1],[3,6],[-6,26],[2,14],[5,24],[2,12],[-4,59],[2,8],[4,3],[24,14],[33,-41],[22,-5],[4,0],[4,5],[25,47],[15,9],[33,6],[86,70],[6,-37],[16,-39],[14,-14],[2,-4],[-1,-11],[-21,-42],[-14,-9],[-7,-9],[-2,-9],[0,-4]],[[74384,31722],[5,-38]],[[74389,31684],[6,-12],[6,-8],[4,-10],[2,-16],[-1,-5],[-3,-11],[-1,-5],[1,-8],[3,-12],[1,-6],[-6,-48],[2,-20],[14,5],[4,4],[8,12],[19,8],[3,-8],[2,-1],[11,0],[5,-11],[23,-19],[75,54],[38,105],[64,91],[41,100],[97,77],[12,23],[11,61],[6,11],[5,8],[7,5],[122,58],[64,200],[24,48],[35,112]],[[75093,32466],[-5,76]],[[75088,32542],[-6,221]],[[75082,32763],[1,8],[0,9],[9,44],[9,92],[-13,148],[-1,29],[-4,18],[-2,11],[1,10]],[[75082,33132],[3,50]],[[75085,33182],[18,46],[21,26],[21,33],[16,20],[34,55],[2,2],[5,4],[9,10],[3,16],[32,66],[4,16],[2,39],[1,7],[2,10],[3,10],[21,60],[13,28],[14,45],[30,89],[72,104],[103,46],[4,3],[8,18],[11,8],[20,34],[53,99],[21,43],[8,10],[5,9],[4,5],[1,2],[1,3],[1,8],[3,10],[25,37]],[[75676,34203],[5,12],[3,6]],[[75684,34221],[-3,109],[-10,63],[-1,15],[1,16],[16,115],[7,22],[30,133],[32,74],[3,10],[2,59],[-1,11],[-2,12],[-10,15],[-7,31],[-3,14],[0,18],[6,47],[1,17],[-12,79]],[[75733,35081],[-4,92]],[[75729,35173],[2,14],[7,23],[9,16],[18,55],[19,143],[23,79]],[[75807,35503],[0,13],[-2,177]],[[75805,35693],[1,11],[3,20],[1,11],[0,10]],[[75810,35745],[0,87]],[[75810,35832],[-1,19],[-2,19],[0,9],[15,67],[25,43],[27,113],[27,40],[29,81],[52,217],[32,39],[7,31],[5,89],[-7,95]],[[77499,37125],[18,65],[10,33],[18,19]],[[77637,37457],[4,18],[9,10],[3,6]],[[78587,37777],[3,27],[8,24]],[[79379,37687],[4,-1],[10,-6]],[[75810,35832],[-2,-58],[2,-29]],[[75805,35693],[2,-190]],[[75729,35173],[4,-44],[0,-48]],[[75684,34221],[-8,-18]],[[75085,33182],[2,-23],[-5,-27]],[[75082,32763],[2,-36],[2,-23],[2,-162]],[[75088,32542],[13,-31],[-8,-45]],[[74389,31684],[-3,24],[-2,14]],[[73627,31690],[-1,-41]],[[73487,31441],[-10,20],[-33,65],[-18,81],[-26,44],[10,64],[-44,70],[-111,150],[-17,68],[-33,42],[-39,41],[-12,15],[-11,10]],[[73143,32111],[6,18],[26,111],[6,19],[48,55],[30,13],[27,49],[33,-22],[30,-80],[15,-16],[20,5],[8,-2],[23,-10],[30,27]],[[73445,32278],[0,27]],[[73445,32305],[-16,12],[-8,7],[-4,13],[1,15],[22,82],[5,16],[16,19],[6,14],[-5,20],[-46,29]],[[73416,32532],[-52,52]],[[73364,32584],[-1,3],[1,2],[0,44],[2,11],[5,16]],[[73371,32660],[22,41]],[[73393,32701],[-48,92],[-34,-19]],[[73311,32774],[-9,13],[4,28]],[[73306,32815],[28,74]],[[73334,32889],[4,56]],[[73338,32945],[-14,40]],[[73324,32985],[-10,106]],[[73314,33091],[4,14],[14,-1],[20,-10],[5,-5],[33,-38],[7,7],[13,19],[50,28],[47,-54],[153,54],[4,107],[9,26],[2,11],[-14,11],[-8,19],[-4,26],[-3,67],[1,8],[5,-1],[4,-8],[7,-12],[12,1],[32,55],[35,-10],[50,-46],[26,-92],[12,-80],[15,8],[14,-31],[3,-22],[3,-4],[2,0],[2,0],[1,-7],[-3,-6],[-2,-4],[-3,-18],[-7,-16],[-2,-6],[1,-3],[5,0],[11,18],[16,0],[32,-21],[5,1],[7,7],[8,-1],[66,-39],[7,-2],[8,4],[17,-1],[57,63],[40,74]],[[74133,33181],[18,67]],[[74151,33248],[6,-5],[4,-8],[21,-79],[4,-12],[7,-11],[3,-6],[1,-17]],[[74197,33110],[-6,-63]],[[74191,33047],[-1,-28],[15,-13]],[[74205,33006],[75,-7]],[[74280,32999],[19,40]],[[74299,33039],[0,16],[2,6]],[[74301,33061],[3,6],[7,10],[7,6],[19,7],[2,-1],[-4,20],[-29,39],[0,21],[5,7],[13,8],[2,24],[1,7],[2,2],[6,4],[5,13],[2,33],[2,11],[1,7],[-2,4],[-5,8]],[[74338,33297],[0,3],[2,6]],[[74340,33306],[1,13]],[[74341,33319],[1,4],[3,5],[46,29],[11,45]],[[74402,33402],[3,70],[13,34],[-15,5]],[[74403,33511],[-4,26],[-7,6],[-3,5],[4,4]],[[74393,33552],[15,12],[19,32],[-10,20]],[[74417,33616],[5,17],[0,16],[2,5]],[[74424,33654],[12,20]],[[74436,33674],[-2,12],[-14,15],[-5,9],[-3,12],[1,6]],[[74413,33728],[9,14],[4,12]],[[74426,33754],[1,14],[1,20],[-1,5],[-3,7],[-6,11],[-2,2],[0,29],[-5,20],[-12,50],[1,9],[3,13],[2,27],[2,14],[13,27],[4,13]],[[74424,34015],[-2,19],[-2,16],[2,30]],[[74422,34080],[16,54],[2,21],[-3,18],[-9,30],[-68,71],[-50,-11],[-4,48],[-4,25],[-6,21],[-11,17],[-13,11],[-53,12],[-17,-13],[-17,33],[0,18],[4,15],[30,61]],[[74219,34511],[4,41]],[[74223,34552],[0,6],[-3,7],[-9,2],[-2,4],[-2,44],[-2,17],[-3,19],[-2,15],[2,15],[13,31],[13,49],[9,14],[27,25],[8,13],[1,13],[-2,12],[-5,13],[12,27],[19,4],[40,-2],[39,48],[3,45],[11,26],[18,24],[12,26],[-2,28],[-1,7],[3,6],[4,4],[4,6],[1,8],[-3,6],[-10,7],[-13,24],[-9,27],[-7,32],[-5,13],[-19,13],[-6,13],[-3,16]],[[74354,35259],[-1,62]],[[74353,35321],[-8,45],[-12,12],[-1,8],[-4,2],[-5,7],[-4,3],[-15,7],[-7,1],[-29,-10],[-25,24],[-72,11],[-5,-2],[-9,-33],[-45,-13],[-24,-21],[-9,-19],[-5,-6],[-49,8],[-63,-46],[-4,129],[-18,59],[-3,7],[-5,6],[-2,-5],[-7,16],[-7,18]],[[73916,35529],[7,12],[-1,43]],[[73922,35584],[7,50],[7,18],[4,23],[0,10],[-1,7],[-2,5],[-4,11],[-4,11],[2,3],[4,1]],[[73935,35723],[12,30]],[[73947,35753],[1,7]],[[73948,35760],[-2,16]],[[73946,35776],[5,5],[9,15]],[[73960,35796],[14,12],[4,15],[1,20],[0,36]],[[38960,36206],[23,-8],[18,-63],[-23,-34],[-22,50],[4,55]],[[39286,37182],[-11,-20],[-63,0],[50,54],[24,-34]],[[41592,41870],[-47,-34],[-199,-82],[-14,-23],[-97,-284],[-85,-21],[-36,-108],[-50,-90],[-18,-85],[-59,-136],[-11,-172],[-20,-109],[4,-100],[-56,-172],[-20,-23],[-76,-220],[77,15],[63,65],[12,-90],[16,-32],[41,26],[19,-50],[40,-253],[8,-20],[102,-172],[-3,-52],[23,-93],[-58,-96],[14,-72],[-13,-114],[1,-87],[12,-42],[49,-31],[44,-5],[17,-33],[4,-84],[28,-78],[33,-34],[62,-15],[22,25],[45,16],[143,-21],[37,-35],[86,28],[22,33],[77,23],[48,-8],[21,-44],[77,-47],[62,25],[24,-22],[250,-508],[50,15],[25,-41],[70,85],[90,-18],[74,-32],[71,36],[56,-11],[60,29],[49,-7],[36,13],[33,47],[101,-27],[38,-54],[-6,-40],[24,-46],[-22,-59],[-44,-76],[-19,-102],[14,-63],[-13,-43],[-63,-65],[-12,-50],[19,-144],[-13,-120],[6,-19],[-16,-164],[27,-146],[-9,-43],[25,-94],[18,-116],[25,-103],[36,-17],[25,-35],[26,-107],[37,-49],[-35,-99],[-21,-14],[-148,-221],[81,-44],[20,-76],[34,-18],[61,-116],[49,-45],[9,-40],[-17,-32],[18,-91],[19,-13],[-5,-71],[27,-68],[32,-141],[19,-102],[0,-47],[19,-61],[3,-64]],[[42113,31926],[-36,79],[-49,49],[-11,65],[-37,59],[-25,6],[-23,-30],[-41,1],[-72,52],[103,259],[159,401],[-71,55],[-48,85],[-37,-3],[-46,54],[-27,-29],[-23,77],[-30,13],[-33,47],[-46,20],[-57,-40],[-30,-49],[-37,4],[-27,-22],[-27,72],[-119,69],[-28,-29],[-47,-85],[-47,-2],[-28,-47],[-90,-25],[-17,26],[-47,13],[-31,30],[-28,-53],[-33,26],[-53,-26],[-11,40],[-33,35],[-39,4],[-13,66],[31,70],[-22,70],[-7,99],[-30,17],[-28,-13],[-74,73],[18,63],[-5,59],[-53,137],[-93,40],[-15,47],[-77,59],[-46,21],[-18,26],[-9,88],[-26,40],[6,38],[-19,63],[-87,144],[-17,-9],[-54,114],[-41,-23],[-45,45],[-35,57],[-30,6],[-24,-45]],[[40078,34479],[-53,27],[-86,91],[-55,-1],[-52,61],[-49,112],[-65,26],[-34,32],[-39,-38],[3,-87],[-68,-20],[-58,31],[-61,-17],[-84,69],[-34,-15],[-85,46],[-16,151],[-29,3],[-39,37],[-10,64],[-22,14],[-45,-21],[-23,34],[-81,36],[-51,61],[-46,34],[-36,63],[-41,11],[-36,44],[-62,104]],[[38721,35431],[-10,67],[-55,40],[9,42],[48,90],[34,6],[72,-29],[11,47],[-21,42],[5,45],[-32,19],[-13,99],[45,132],[16,15],[43,98],[38,38],[21,-65],[17,32],[18,-50],[38,-2],[-3,87],[55,15],[18,-59],[49,-2],[9,32],[-22,75],[10,28],[54,64],[-2,108],[54,75],[1,54],[18,46],[35,28],[21,92],[41,44],[20,110],[-38,26],[-24,41],[48,98],[-27,20],[-24,-29],[-9,-75],[-31,45],[-3,93],[33,43],[4,29],[-20,48],[26,122],[0,101],[-17,178],[2,186],[-19,104],[-20,22],[-11,58],[52,7],[37,58],[5,53],[-41,148],[-50,100],[26,31],[15,61],[-8,37],[20,91],[-27,56],[1,37],[-45,12],[-16,55],[-49,72],[18,35],[-51,107],[-41,53]],[[39079,39017],[28,149],[35,34],[-16,85],[35,2],[38,-88],[91,110],[-15,41],[23,66],[46,64],[-10,71],[-37,100],[-16,7],[-22,115],[-22,43],[41,84]],[[39278,39900],[25,-46],[13,-58],[54,-53],[31,-83],[29,-13],[55,-72],[-38,-106],[30,-33],[37,6],[10,97],[-16,110],[0,87],[-26,63],[-41,28],[21,46],[84,37],[18,44],[25,16],[117,143],[0,38],[26,50],[7,60],[35,60],[65,51],[37,-22],[73,38],[17,105],[-31,51],[26,159],[6,69],[-28,74],[49,77],[9,73],[-6,93],[43,59],[35,16],[15,53],[88,76],[6,36],[68,83],[131,-83],[18,-141],[36,17],[30,133],[24,55],[-9,74],[21,73],[71,24],[68,-48],[46,-6],[116,6],[42,11],[90,123],[47,38],[67,88],[117,57],[73,59],[48,136],[-12,79],[62,17],[15,-67],[24,34],[10,85],[29,-14],[43,44],[13,44],[49,-11],[109,-74],[49,-144],[-9,-49],[-61,-59],[-11,-43]],[[85670,26897],[-61,9],[-20,65],[38,-7],[43,-67]],[[85915,27075],[17,-92],[0,-75],[-75,72],[32,74],[26,21]],[[85525,27169],[-36,44],[-41,27],[-19,57],[12,32],[4,130],[8,51],[31,13],[16,-37],[-8,-115],[27,-115],[20,-51],[-14,-36]],[[59577,43712],[-43,4],[-31,55],[16,40],[32,29],[29,-5],[12,-61],[-15,-62]],[[59805,44014],[59,-97],[28,-30],[26,-63],[-19,-57],[-70,10],[-37,63],[-4,84],[17,90]],[[60021,44014],[21,-13],[4,-61],[-27,-50],[-30,34],[4,60],[28,30]],[[60144,44563],[23,15],[42,-39],[1,-66],[-48,-47],[-53,21],[12,65],[23,51]],[[59593,44832],[77,-13],[-9,-38],[-45,27],[-38,-68],[-34,104],[49,-12]],[[60127,44874],[-32,7],[-4,58],[37,8],[-1,-73]],[[59350,45002],[21,-57],[-46,-24],[-37,37],[46,47],[16,-3]],[[59288,45173],[46,-53],[-17,-37],[-67,-75],[-42,-6],[-7,117],[87,54]],[[36877,41299],[69,-267],[27,-74],[73,-151],[45,-79],[26,-25],[95,-186],[52,-16],[23,-37]],[[37287,40464],[-17,-55],[-80,72],[-20,-28],[7,-46],[-31,-28],[2,-234],[11,7],[62,-60],[10,-32],[-55,-52],[-23,-60],[29,-69],[5,-62],[-13,-56],[-32,-22],[-39,-55],[43,-41],[22,-89],[-5,-42]],[[37163,39512],[-1,43],[-26,72],[-70,92],[20,38],[-17,73],[-92,117],[-37,-17],[29,-76],[45,-44],[5,-71],[-27,-9],[-45,34],[-43,1],[-63,111],[42,67],[16,63],[-16,123],[-60,103],[-50,58],[-71,51],[-65,65],[-71,26],[-25,-3],[-36,37],[-23,71],[16,55],[-48,120],[-34,-7],[-92,128],[-33,-4],[-24,-31],[37,-72],[70,-33],[37,-76],[-37,-60],[-71,-70],[-50,104],[-21,28],[-53,14],[-65,35],[-54,108],[-25,93],[-6,72],[20,91],[68,79],[-14,96],[-92,68],[12,36],[52,-4],[-2,50],[17,37]],[[36090,41394],[27,71],[267,-156],[19,3],[80,76],[98,-71],[24,24],[17,-46],[40,-37],[7,-49],[44,-11],[19,15],[35,-43],[103,56],[7,73]],[[37178,48103],[65,-32],[-1,-37],[38,-58],[-9,-40],[28,-42],[-20,-34],[-92,-60],[-93,15],[-36,62],[57,-12],[21,26],[-40,104],[-1,51],[33,66],[50,-9]],[[39081,48191],[31,14],[69,-35],[-26,-59],[-48,22],[-26,58]],[[39043,48289],[36,-9],[-7,-48],[-33,2],[4,55]],[[38963,48414],[47,-52],[-37,-26],[-23,43],[13,35]],[[38904,48479],[27,-53],[-57,-24],[-81,46],[25,23],[86,8]],[[40150,46844],[-6,99],[-46,-98],[-58,-10],[-85,6],[-45,40],[-65,9],[-33,-12],[-103,23],[-105,-28],[-132,-4],[-35,-29],[-50,-3],[-38,17],[-52,-8],[-14,-23],[-96,-11],[-48,6],[45,102],[83,109],[84,61],[27,45],[12,60],[-12,29],[-48,31],[17,45],[-47,45],[-68,-19],[-30,13],[-78,2],[-38,19],[-26,-21],[-47,8],[-79,117],[-50,35],[-34,55],[-28,208],[-32,98],[-33,15],[-13,45],[-185,-53],[-44,29],[-33,-2],[-65,37],[-7,20],[-67,14],[-32,30],[-41,-24],[-24,59],[-77,44],[-64,95],[-30,10],[-182,-2],[-44,25],[-35,72],[-36,-71],[-32,5],[-8,41],[-98,25],[-66,-14],[-22,44],[-79,51],[-12,55],[106,0],[61,20],[16,67],[-91,66],[-84,-16],[-39,19],[-166,-2],[-56,9],[-7,-45],[-111,-98],[-30,-76],[-46,-13],[-49,-83],[-76,6],[-62,-15],[-57,0],[-29,-70],[3,-65],[-19,-21],[-37,14],[-64,-34],[-61,-71],[-22,9],[19,74],[-24,22],[-47,-18],[-54,-50],[-57,17],[140,93],[100,24],[-6,51],[-35,44],[15,94],[37,82],[25,10],[79,108],[57,46],[121,53],[6,22],[66,13],[15,35],[47,32],[55,11],[38,-30],[18,37],[78,2],[52,12],[65,58],[72,28],[71,5],[74,-26],[99,0],[39,-37],[79,26],[33,-56],[42,32],[45,-28],[76,24],[52,-4],[25,-52],[49,-34],[58,-24],[97,21],[14,-38],[111,-84],[72,-133],[21,-3],[44,-71],[75,-22],[62,17],[77,-9],[83,-43],[33,-38],[39,-9],[30,-51],[52,-14],[38,-33],[66,-131],[20,16],[31,-54],[37,-20],[55,19],[5,31],[140,-134],[-5,-56],[-36,34],[-3,-82],[40,12],[32,62],[41,-76],[59,-52],[57,-24],[1,-35],[103,-6],[95,-72],[8,-47],[93,7],[20,21],[71,-37],[22,-40],[-48,-114],[-25,5],[-6,-55],[29,-34],[37,17],[44,-16],[39,28],[94,-34],[58,11],[56,-42],[38,-9],[6,-32],[50,-50],[43,-82],[36,-29],[71,3],[28,-43],[-1,-37],[-47,-71],[-48,9],[-72,-21],[-89,-7],[-63,-70],[-45,-16]],[[42567,42023],[-5,-35],[-58,40],[-52,61],[-32,63],[35,21],[11,-52],[32,-34],[47,-19],[22,-45]],[[81908,56220],[-52,7],[-42,-27],[-111,15],[0,23],[-30,64],[-33,-22],[-47,17],[-36,-12],[-93,-56],[-22,29],[27,18],[24,48],[-4,101],[195,-43],[89,19],[145,71],[55,50],[53,20],[99,64],[-3,-29],[-165,-141],[-30,-57],[-35,-1],[-24,-49],[-3,-48],[43,-61]],[[81911,56215],[-3,-44],[-46,-18],[-23,27],[18,45],[54,-10]],[[81789,56171],[-38,-102],[-137,-76],[-55,0],[-29,-29],[-54,10],[-84,-9],[-96,62],[-33,82],[-16,131],[33,-35],[29,11],[40,74],[97,-52],[4,-19],[40,5],[48,40],[48,16],[49,-30],[45,29],[15,-36],[-4,-63],[19,16],[79,-25]],[[74559,65982],[66,1],[5,91],[88,-18],[47,-120],[36,10],[125,-34],[30,-42],[92,-18],[94,-1],[32,-37],[-13,-45],[-74,-55],[56,-32],[76,-101],[19,-51],[45,-20],[44,57],[55,29],[-17,122],[103,-33],[57,-66],[104,-7],[50,-34],[-58,-36],[52,-40],[45,-67],[97,28],[82,-67],[24,14],[72,-15],[4,-64],[27,-65],[52,-15],[23,-101]],[[76099,65150],[-39,-19],[-76,0],[-80,-105],[-51,-21],[-28,-46],[-7,-68],[-34,-45],[-38,-6],[-20,-54],[-124,-68],[-62,5],[-79,24],[-54,-71],[-31,-88]],[[74179,64690],[-35,62]],[[74144,64752],[-5,3],[-16,2],[-7,4],[-17,39],[-27,14],[-6,2],[-3,0],[-5,-3],[-7,-18],[-38,35],[-32,62],[-12,8],[-23,1],[-11,6],[-12,23],[-35,51],[-5,3],[-13,15],[-1,6],[-1,6],[-2,5],[-77,21],[-59,63],[-8,49],[-2,3],[-5,-1],[-4,1],[-15,43],[-16,17],[-4,5]],[[73676,65217],[1,1],[2,5],[-4,2],[-1,0]],[[73674,65225],[0,22]],[[73674,65247],[-18,10],[-6,4],[-6,5],[-8,12],[-4,9],[-2,6],[4,9],[18,6],[5,9],[2,10],[0,13],[2,8],[8,-2],[2,9],[9,17],[3,10],[2,11]],[[73685,65393],[-22,41]],[[73663,65434],[-85,46],[-1,4],[-1,12],[-3,6],[-12,8],[-5,6],[-4,9],[0,9],[3,14],[-1,9],[-17,26],[-19,12],[-4,7]],[[73514,65602],[11,30]],[[73525,65632],[48,-20],[2,-1]],[[73575,65611],[1,-5]],[[73576,65606],[-2,-4],[-1,0],[-1,-1],[-1,-2],[1,-1],[1,-2],[6,-7],[2,-2],[1,-5],[9,-30],[21,60],[67,81],[44,6],[20,-4],[30,26],[5,0],[7,-1],[15,5],[35,-22],[35,54],[58,2],[28,52],[56,28],[25,-19],[20,22]],[[74057,65842],[9,20]],[[74066,65862],[2,8],[-5,10]],[[74063,65880],[16,9],[18,4],[35,0],[21,6],[8,1],[18,-2],[7,2],[22,35],[55,13],[75,48],[13,2],[31,-2],[12,10],[1,15],[-9,6],[-15,4],[-13,23],[-14,2]],[[74344,66056],[15,37]],[[74359,66093],[79,-12],[31,-27],[1,-5],[0,-10],[-4,-7],[-4,-9],[-2,-7],[4,-4],[21,9],[5,0],[2,-7]],[[74492,66014],[-9,-39]],[[74483,65975],[34,-19],[14,-3],[9,0],[5,2]],[[74545,65955],[14,27]],[[74329,67887],[-6,-17]],[[74323,67870],[-8,-3]],[[74315,67867],[8,-8],[2,-11]],[[74325,67848],[-123,-21],[21,36],[-12,43],[58,22],[-25,41],[79,-78],[6,-4]],[[73199,68221],[-27,-33],[-71,26],[45,41],[53,-34]],[[74016,68326],[29,-45],[66,5],[-24,-70],[9,-74],[-39,-4],[-58,-67],[-88,63],[52,30],[-32,100],[134,-16],[-57,55],[8,23]],[[72502,68425],[45,23],[160,-52],[23,-69],[-4,-65],[70,-52],[218,-91],[61,41],[54,-23],[-4,-99],[-120,-87],[52,-49],[110,34],[26,-45],[84,-18],[12,53],[64,87],[172,24],[89,76],[62,104],[73,-25],[69,-42],[52,45],[41,-98],[66,-28],[73,-67],[78,26],[48,-39],[-19,-46],[50,-72],[-27,-23],[63,-64],[46,-19],[61,6],[-1,-59],[16,-91]],[[74365,67621],[10,-14],[12,-27],[19,-105],[-25,-139],[-12,-12],[-23,-18],[-23,-12],[-19,-12],[0,-5],[2,-5],[5,-22]],[[74311,67250],[1,-9],[-2,-11]],[[74310,67230],[22,-36]],[[74332,67194],[63,-49],[7,-7],[12,-25],[12,-8],[11,-15],[23,-9]],[[74460,67081],[36,-37]],[[74496,67044],[-11,-22],[-3,-14],[9,-13]],[[74491,66995],[-16,-29],[-20,-17],[3,-24],[23,-66],[13,-6],[22,-8],[6,-12],[0,-12],[-8,-9],[0,-5],[5,-8],[-1,-9],[-4,-11],[-2,-16],[4,-9],[24,-18]],[[74540,66736],[-24,-90]],[[74516,66646],[-39,-54],[-4,-12],[0,-13],[18,-22],[2,-16],[4,-16],[9,-10],[19,-15],[4,-99],[83,-41],[3,-59],[2,-12],[1,-4],[7,-13],[9,-10],[5,-12],[-1,-18],[-12,-50],[-1,-15],[-1,-9],[-2,-4],[-3,-3],[-2,-4],[-1,-18],[-1,-7],[-38,-92],[-18,-24]],[[74559,65994],[-14,-39]],[[74483,65975],[0,15],[7,16],[2,8]],[[74359,66093],[-9,-10],[-6,-18],[0,-9]],[[74063,65880],[3,-18]],[[74066,65862],[-11,-12],[2,-8]],[[73576,65606],[0,3],[-1,2]],[[73525,65632],[0,-17],[-6,-5],[-5,-8]],[[73663,65434],[-2,-24],[16,-10],[5,-2],[3,-5]],[[73674,65247],[4,-14],[-4,-8]],[[73674,65225],[2,-8]],[[74144,64752],[27,-54],[8,-8]],[[74173,64650],[1,-57]],[[73769,64289],[5,-35]],[[73840,64169],[22,-49]],[[73882,63957],[-5,-26]],[[73844,63887],[-40,39],[-22,13]],[[73241,63887],[5,-1],[4,-3]],[[73083,63850],[1,3]],[[73084,63853],[0,12]],[[73043,63901],[13,9],[2,5],[-12,10]],[[72882,63932],[-5,-31]],[[72877,63901],[6,-3],[3,-3],[4,-14],[0,-13]],[[72809,63768],[-31,-4],[10,15]],[[72790,63832],[-92,88]],[[72159,64088],[4,-9],[-6,-3]],[[72173,63988],[1,-3],[1,-3],[-1,-14]],[[71813,63964],[-20,-6]],[[71793,63958],[-24,53],[2,70],[35,135],[-17,57],[68,161],[-5,32],[27,130],[62,88],[51,40],[32,89],[-99,43],[-107,0],[-99,83],[-48,-39],[-43,5],[-55,41],[-63,18],[-45,-34],[-59,127],[-31,46],[-56,13]],[[71319,65116],[2,68],[26,45],[0,18],[27,19],[-1,2],[-2,3],[2,3],[1,1],[4,-1],[-3,3],[-2,5],[0,5],[0,6],[3,3]],[[71376,65296],[0,2],[-1,3]],[[71375,65301],[0,5],[2,13],[1,1],[0,5],[1,1],[-2,3],[-2,0],[-11,3],[-19,0],[-73,50],[-26,40],[-6,17],[-6,11],[-2,5]],[[71232,65455],[-8,27]],[[71224,65482],[3,7]],[[71227,65489],[-2,2]],[[71225,65491],[2,17]],[[71227,65508],[5,18]],[[71184,65915],[27,98],[-31,103],[58,40],[-26,57],[45,65],[3,107],[-40,53],[5,30],[-62,54],[-4,46],[45,26],[69,10],[60,-22],[56,30],[72,14],[34,52],[-51,31],[36,46],[99,76],[9,83],[-57,41],[-78,27],[2,89],[128,17],[17,128],[39,69],[5,173],[22,45],[-68,12],[-20,70],[24,84],[53,49],[107,8],[172,26],[83,-104],[-42,-31],[55,-57],[44,61],[11,64],[83,-40],[-31,84],[34,106],[43,21],[67,-36],[97,21],[-76,45],[-31,61],[62,-4],[9,42],[-78,50],[28,78],[-90,-19],[-8,70],[87,17],[58,56],[-123,142],[-11,99]],[[72205,68478],[62,6],[142,-34],[12,-28],[81,3]],[[85318,41343],[-58,-1],[-16,42],[-44,16],[-51,-19],[-34,-33],[-124,-15],[-44,-24],[-59,17],[-3,179],[-16,171],[23,124],[49,56],[61,150],[73,155],[36,89]],[[85111,42250],[19,34],[34,-14],[61,-85],[43,43],[2,17],[-5,37]],[[85265,42282],[26,59]],[[85291,42341],[6,9],[12,-7],[84,57]],[[85393,42400],[75,-142],[37,-146],[3,-92],[-16,-55],[-66,-29],[-62,-98],[-56,-11],[-55,-45],[-27,-78],[-59,0],[5,-49],[40,-9],[19,36],[69,23],[95,-1],[45,-59],[-122,-302]],[[45406,43941],[-24,132],[-26,75],[8,60],[62,-34],[17,-44],[3,-137],[-40,-52]],[[73199,68514],[43,-45],[78,-20],[58,15],[48,-62],[-31,-78],[-61,12],[-60,-23],[-102,65],[-61,17],[22,113],[66,6]],[[73689,68544],[-12,-34],[-74,2],[8,51],[78,-19]],[[72638,68592],[89,-75],[-22,-61],[-72,35],[5,101]],[[73038,68504],[-37,-114],[-39,56],[76,58]],[[74589,68687],[93,-54],[-22,-96],[-112,37],[-32,24],[3,84],[18,45],[52,-40]],[[72847,68920],[57,-40],[6,-52],[75,-13],[49,-83],[-36,-145],[-74,-27],[-87,21],[-76,75],[-87,43],[0,59],[-29,57],[30,42],[123,57],[49,6]],[[73609,69239],[113,-51],[-42,-77],[34,-76],[0,-54],[-52,-64],[-84,-37],[-8,-69],[84,-53],[-20,-57],[-80,-18],[-52,-53],[38,-92],[-72,-28],[80,-68],[-79,-89],[-81,111],[51,63],[-30,60],[-60,68],[-86,25],[-69,-5],[-31,65],[19,59],[-55,162],[19,36],[52,-4],[148,133],[46,-121],[42,34],[60,86],[-61,19],[114,81],[62,14]],[[72300,69751],[-28,-53],[12,-48],[-38,-58],[-45,-11],[-38,55],[38,75],[99,40]],[[73173,69980],[-48,-21],[-15,-55],[-66,39],[66,34],[63,3]],[[72205,68478],[-7,78],[18,74],[-27,183],[-68,15],[-58,75],[-37,-35],[-38,23],[38,153],[59,35],[15,36],[-40,92],[-67,28],[10,52],[-4,215],[30,54],[42,-38],[48,1],[64,-49],[105,163],[87,22],[17,-100],[68,19],[-56,71],[-8,69],[50,63],[56,17],[57,-17],[34,51],[-156,-48],[-60,22],[-165,-53],[-72,-137],[36,-31],[-18,-54],[-63,53],[-40,102],[121,162],[76,-1],[75,35],[96,-13],[69,17],[62,47],[82,133],[69,82],[88,7],[105,71],[28,-11],[-44,-80],[45,-83],[-3,-123],[-36,-32],[-69,-171],[36,-215],[73,-28],[91,13],[67,-54],[-20,-71],[-61,-73],[-47,14],[-31,-37],[-66,15],[-59,-34],[14,-30],[-5,-114],[-36,-48],[-44,-12],[-21,-67],[-105,-106],[-46,-68],[47,-111],[-8,-26],[-74,-28],[28,-70],[65,-42],[2,-70],[-76,8],[-41,-43]],[[41420,45695],[4,113],[21,57],[-77,72],[1,40],[-35,53],[17,24],[44,-1],[37,58],[10,44],[-25,131],[46,76],[9,58],[-29,22],[-24,49],[28,55],[-19,182]],[[41428,46728],[4,65],[37,51],[55,8],[57,-37],[55,-8],[40,19],[40,43],[66,-22],[17,-30],[62,-55],[73,6],[50,-72],[66,-22],[34,34],[36,0],[19,-26],[-3,-64],[15,-66],[51,-86],[74,33],[78,-29],[68,-5],[-36,-62],[-63,4],[-71,23],[-2,-83],[72,11],[24,-36],[120,-42],[25,30],[91,-43],[61,-94],[86,-96],[8,-49],[-42,-98],[-4,-37],[-46,11],[-31,-103],[-33,-3],[-41,105],[-28,22],[-63,-10],[-57,34],[-110,-25],[-30,29],[-108,9],[-51,-37],[-54,-104],[-92,-3],[-59,-20],[-15,46],[-3,81],[-40,11],[-21,-50],[-32,-3],[-35,-50],[-44,29],[-20,-41],[15,-63],[-54,-142],[-40,-58],[-41,-132],[-37,82],[-46,50],[-11,85],[-44,52]],[[72534,53231],[-89,-69],[100,-195],[45,-120],[60,-297],[10,-212],[-29,-320],[6,-35],[56,-212],[-28,-154],[-27,-31],[10,-39],[-24,-51],[-13,-80],[39,-230],[33,-48],[-5,-118],[-24,-92],[-135,-94],[-39,-113],[9,-34],[217,-445],[20,-78],[4,-255],[61,-67],[26,-106],[50,-60],[22,-2],[104,47],[302,-148],[23,-29],[154,-464]],[[73472,49080],[-340,-322],[-260,-247],[-260,-248],[-182,-174],[-235,-222],[-287,-273],[-154,-147],[-177,-234],[-158,-218],[-295,-410],[-33,-27],[-256,-80],[-326,-101]],[[70509,46377],[-303,-91],[-50,-8],[-57,62],[-21,44],[59,158],[-22,90],[6,148],[-55,59],[-48,32],[-172,48],[-36,23],[-47,100],[-38,38],[-48,-40],[-34,24],[-29,-14],[-13,40],[-30,5],[-49,67],[-2,68],[-48,58],[-60,26],[-25,47],[-49,0],[-9,38],[13,123],[-12,66],[-244,258],[-200,209],[-365,386],[-331,350],[-265,279],[-354,375],[-275,290],[-251,260]],[[67045,49995],[-66,65],[-133,133],[-67,66],[-239,228],[-63,61],[-76,72],[-151,143],[-151,145],[-304,288],[-76,71],[-75,72],[-76,72]],[[65568,51411],[0,174],[0,59]],[[65568,51644],[0,37],[0,147],[0,437]],[[65568,52265],[1,16],[4,12],[7,8],[51,38],[17,19],[21,22],[14,33],[5,7],[20,13],[51,60],[43,27],[12,13],[36,46],[41,40],[84,93],[102,-4],[36,52],[42,26],[73,0],[66,-39],[32,43],[164,38],[104,0],[93,22],[14,-55],[32,-18],[37,18],[40,73],[62,151],[38,56],[39,39],[76,87],[97,65],[53,60],[42,78],[82,47],[60,4],[64,22],[72,51],[-3,40],[-2,38],[18,26],[22,48]],[[67530,53680],[-32,87]],[[67498,53767],[-43,52],[-5,-5],[-11,-14],[-13,-4],[-5,5],[-1,11],[2,12],[8,19],[1,14],[-2,48],[1,11],[6,9],[20,21],[28,2],[6,159],[168,43],[84,36],[67,12],[-17,61],[-26,96],[21,17],[72,8],[68,26],[53,-2],[51,-4],[130,-8],[251,-17],[15,5],[8,22],[-8,22]],[[68427,54424],[-30,-5]],[[68397,54419],[-8,10],[10,14],[10,80]],[[68409,54523],[6,23],[3,11],[6,11],[22,7],[14,8],[13,14],[22,34],[-6,14],[-106,113],[-37,26],[-52,118],[17,16],[7,16]],[[68318,54934],[1,34],[-2,12]],[[68317,54980],[-68,110],[-3,21],[0,61],[16,66],[6,11],[5,17],[-2,20],[-17,56],[-30,25]],[[68224,55367],[-1,20]],[[68223,55387],[12,18],[4,9],[0,6],[-4,20],[-4,30],[1,29],[18,99],[1,12]],[[68251,55610],[-1,8],[-1,9]],[[68249,55627],[-27,115]],[[68222,55742],[-25,50]],[[68197,55792],[42,65],[-5,4],[-13,6],[-47,64],[4,10],[19,42],[9,27],[0,19],[-155,152],[-6,13],[-4,17],[-1,24]],[[68040,56235],[9,4],[5,-5],[12,9],[39,-17],[111,34],[97,102],[43,8],[50,50],[29,110],[60,71],[51,18],[29,35],[54,-31],[61,38],[18,50],[48,30],[35,-57],[52,-18],[61,48],[35,115],[205,175],[77,27],[69,68],[333,51],[56,0],[96,37],[56,-25],[67,10],[70,65],[45,61],[31,1],[64,-42],[21,43],[85,-23],[73,30],[68,54],[106,-17],[129,17],[24,-14],[109,4],[121,-70],[6,-51],[70,-36],[62,15],[42,59],[70,45],[43,-6],[125,48],[54,104],[48,16],[45,-66],[93,-23],[33,-36],[126,48],[13,61],[42,8],[42,-18],[36,-41],[48,-16],[23,-44],[51,-25],[55,17],[70,50],[22,-20],[79,-13],[41,21]],[[72183,57378],[2,-30],[13,-26],[0,-7],[-7,-6],[-27,-14],[-14,-4],[-28,-1],[-12,-8],[-3,-9],[14,-9],[7,-13],[-3,-22],[-9,-21],[-8,-14],[-91,-72],[0,-21],[-1,0],[16,-8],[33,-5],[21,-13]],[[72086,57075],[3,-11],[-1,-49]],[[72088,57015],[-18,-66],[-2,-27],[2,-12],[2,-11],[1,-11],[-3,-12],[-5,-10],[-8,-46],[-1,-34],[-2,-7],[-8,-38],[-1,-49],[1,-28],[5,-21],[18,-40],[7,-20]],[[72076,56583],[4,-70],[0,-19]],[[72080,56494],[-13,-43],[-4,-23]],[[72063,56428],[0,-22],[1,-26]],[[72064,56380],[9,-22],[15,-9],[16,-7],[12,-13],[-3,-13],[-23,-46],[-19,-26],[-11,-69],[-9,-33],[-4,-24],[1,-22],[7,-62],[-1,-9],[-3,-5],[0,-1],[-13,-17],[-4,-9],[-1,-10],[10,-21],[-4,-7],[-13,-11],[-6,-17],[-1,-4],[-3,-4],[-28,-31],[-36,-21],[-64,-50],[-23,-94],[-54,-38],[-19,-32],[-17,-22],[-8,-11],[-14,-124],[28,-146],[54,-126],[5,-24],[0,-2],[1,-83],[15,-43],[47,-15],[43,-41],[7,-5],[8,-4],[24,-6],[36,-76],[39,-83],[5,-19],[9,-151],[5,-21],[10,-16],[47,-42],[206,-203],[9,-21],[30,-186],[11,-69],[11,-67],[10,-68],[23,-137],[33,-204],[11,-68],[11,-67],[21,-137],[11,-68],[11,-67]],[[38228,32692],[-34,-23],[-23,10],[1,109],[19,72],[58,39],[44,-28],[-65,-179]],[[34265,33792],[39,-30],[-11,-37],[-48,12],[20,55]],[[34710,34121],[21,-21],[-44,-69],[-26,-61],[-45,-15],[-30,22],[54,67],[30,58],[40,19]],[[34353,34231],[23,-25],[-7,-82],[-53,-60],[-35,8],[-44,52],[2,53],[20,42],[77,20],[17,-8]],[[33888,34385],[22,-32],[-1,-89],[-40,-23],[-52,54],[-10,73],[81,17]],[[34148,34453],[55,-33],[32,-47],[-14,-54],[-59,6],[-35,19],[-2,88],[23,21]],[[33932,34640],[22,-76],[29,-26],[9,-124],[24,-55],[45,-46],[16,-42],[2,-102],[25,-11],[36,-84],[-50,-129],[-32,1],[-57,-38],[-92,7],[-39,75],[25,73],[79,72],[25,-12],[28,70],[-44,52],[-10,60],[-45,49],[-28,173],[-47,-12],[-22,30],[50,59],[51,36]],[[40078,34479],[-23,-27],[-43,-7],[-27,23],[-20,-36],[36,-40],[19,-97],[63,-76],[6,-60],[-16,-77],[27,-137],[-47,-3],[-25,31],[-56,-357],[-35,-71],[-168,-317],[-204,-253],[-23,-21],[-180,-102],[-265,-150],[-36,-45],[-98,-192],[12,-70],[-23,-18],[-17,66],[-35,-5],[0,-49],[-24,-125],[4,-51],[-21,-36],[-12,-76],[-26,-27],[-3,-64],[-41,-140],[17,-67],[-13,-71],[-70,-63],[-29,-59],[11,-60],[-31,-18],[-10,-53],[-36,-13],[-78,12],[-56,93],[-30,119],[8,53],[-57,57],[-52,-28],[-42,53],[-31,6],[-37,50],[-47,7],[-13,-44],[-65,-68],[-32,50],[52,110],[-44,5],[-17,79],[12,52],[68,-4],[54,72],[-21,74],[1,85],[-21,91],[3,37],[-29,20]],[[38142,32447],[31,27],[47,13],[25,68],[45,12],[45,242],[43,147],[-45,119],[-32,-121],[-23,-20],[-32,28],[-41,-17],[-40,-38],[-15,-37],[-57,56],[-72,125],[-63,30],[-35,30],[-14,51],[30,21],[48,62],[-7,79],[11,44],[-19,103],[-25,74],[11,73],[19,14],[11,82],[-34,69],[-33,103],[39,73],[76,4],[26,32],[13,90],[19,78],[17,11],[-29,135],[25,25],[23,73],[53,51],[64,118],[11,78],[-5,87],[23,30],[-18,44],[8,75],[-29,58],[-6,53],[12,48],[81,36],[38,50],[58,25],[16,-7],[44,55],[79,4],[40,19],[28,61],[44,-29],[11,50],[37,85],[2,33]],[[81980,53902],[19,-64]],[[81999,53838],[31,-134],[57,-212],[21,-156],[25,-34],[52,-209],[3,-41],[31,-122],[10,-107],[14,-49]],[[82243,52774],[-57,-114],[-3,-66],[-21,-58],[4,-72],[-15,-13],[-6,-122],[-46,-143],[-40,-143],[19,-86],[-11,-115],[-71,-116],[-62,4],[-35,53],[-86,84],[-77,169],[-49,43],[-80,126],[-13,65],[13,55],[-18,33],[-13,133],[-72,105],[-27,24],[-27,107],[-30,26],[-23,88],[4,84],[-48,147],[-37,-35],[9,-38],[-37,-74],[-21,-84],[19,-45],[78,-109],[26,-161],[-14,-72],[21,-56],[55,-83],[18,-104],[51,-55],[47,-125],[81,-125],[67,-79],[25,-66],[-21,-61],[-1,-72],[15,-62],[28,-25],[23,-95],[52,-50],[4,-87],[64,-167],[-23,-19],[-1,-102],[27,-26],[125,-377],[79,-171],[33,-96],[20,-89],[118,-323],[2,-46],[25,-41],[18,-74],[48,-151],[61,-73],[39,-107],[35,-21],[7,-34],[43,-16],[-13,-52],[-65,42],[-15,-111],[14,-26],[-8,-161],[20,-53],[12,-122],[31,-86],[16,-87],[22,-7],[12,-54],[38,-60],[38,-27],[82,-26],[29,-37],[15,-62],[44,-40],[4,-43],[47,-37],[58,-79],[17,5],[53,-69],[-4,-43]],[[83008,48141],[-180,0],[-355,0],[-446,-1],[-438,0],[-399,0],[-269,0],[22,95],[-34,47],[-17,-23],[-42,-119],[-312,0],[-374,0],[-447,0],[-372,0],[-372,0],[-298,0],[-224,0]],[[78451,48140],[0,361],[0,361],[0,361]],[[78451,49223],[0,541],[0,361],[0,542],[0,360],[0,621],[0,509],[0,426],[-2,36],[-7,33],[-32,108],[-2,105],[-24,73],[-2,26],[6,32],[0,11],[-2,15],[-32,115],[-15,42],[0,24],[33,91],[10,18],[11,17],[30,69],[3,21],[2,12],[11,43],[4,33],[11,46],[2,21],[-5,25],[-17,51],[-5,31],[-12,38],[-12,79],[-1,50],[-4,52],[0,23],[5,20],[63,70],[13,52]],[[78481,54065],[35,43],[16,-72],[80,-17],[163,68],[53,1],[151,-59],[150,-27],[43,-25],[39,9],[58,-37],[78,-6],[23,-71],[37,-33],[69,-20],[78,33],[14,-74],[97,-13],[64,-21],[32,16],[158,-83],[5,-22],[76,-55],[73,7],[108,74],[130,121],[77,103],[46,-64],[41,25],[36,155],[50,-30],[94,-33],[22,25],[44,-14],[33,18],[14,42],[71,36],[117,-79],[27,-4],[92,50],[13,-71],[-31,-41],[14,-44],[41,-53],[36,1],[10,-67],[75,16],[13,18],[7,90],[34,-34],[45,-74],[35,-28],[50,-14],[58,34],[33,-5],[50,64],[34,-78],[119,41],[57,-8],[80,29],[74,41],[58,53]],[[84210,44362],[43,-55],[9,-93],[26,-10],[21,46],[46,-39],[-46,-41],[-30,17],[-56,-5],[7,43],[-16,36],[-43,36],[42,30],[-3,35]],[[82870,43362],[-27,361],[-12,163],[38,84],[21,90],[20,32],[-5,53],[21,120],[34,70],[48,214],[22,42],[-4,102],[-21,67],[9,80],[32,68],[6,190],[51,-35],[68,25],[35,-17],[38,102],[1,76],[82,41],[30,58],[29,-25],[54,64],[56,10],[70,61],[44,145],[55,71]],[[83665,45674],[36,-122],[36,-86],[53,-167],[48,-225],[28,-148],[14,-103],[13,-203],[15,-118],[29,-133],[43,-45],[-1,-32],[23,-95],[-10,-56],[49,4],[30,-120],[20,-45],[-7,-87],[44,-27],[16,58],[-28,76],[-2,58],[38,71],[50,-76],[26,-19],[-18,-71],[43,-110],[8,-47],[54,-40],[28,43],[69,2],[69,-107],[-5,-37],[33,-34],[133,-37],[58,-94],[11,-55],[65,-116],[13,-54],[31,-39],[22,-77],[49,-6],[13,-30],[54,-27],[5,-33],[40,-81],[72,-48],[21,-97],[15,-121],[36,-18],[17,26],[52,-101],[31,-33],[14,-96],[73,-33],[14,57],[33,-51],[12,-69]],[[85291,42341],[-9,-34],[-17,-25]],[[85111,42250],[-18,31],[-33,67],[-25,68],[-18,24],[-72,64],[-20,45],[-30,101],[-12,32],[-28,51],[-70,91],[-129,137],[-57,159],[-81,144],[-49,42],[-45,13],[-62,48],[-56,82],[-67,37],[-47,-5],[-26,-21],[-55,51],[-107,12],[-46,-26],[-38,2],[-23,-29],[-7,23],[-12,52],[-5,13],[-7,13],[-20,22],[-11,3],[-14,3],[-1,2],[-4,-7],[-1,-10],[1,-12],[-2,-11],[-5,-12]],[[83809,43549],[-24,-19],[-19,-26]],[[83766,43504],[-99,-36],[-70,-12],[-39,55],[-36,107],[-43,1],[-42,28]],[[83437,43647],[-6,20],[-4,4],[-4,1]],[[83423,43672],[-4,23]],[[83419,43695],[-8,5],[-11,32],[-7,10]],[[83393,43742],[-16,-59],[-25,-94]],[[83352,43589],[-48,-183],[-23,-83],[-13,-52],[-5,-7],[-10,15],[-4,32],[-15,11],[-32,93],[-37,66],[-68,-22],[-5,-14],[-3,-12],[-2,-40],[-4,-10],[-4,-8],[-26,-14],[-22,26],[-75,17],[-14,-9],[-24,-2]],[[82918,43393],[-33,-14]],[[82885,43379],[-5,-5],[-3,-13],[-7,1]],[[62045,51728],[-41,-96],[-24,70],[46,60],[19,-34]],[[62990,51941],[19,-79],[-4,-100],[-76,-73],[-42,18],[-39,49],[-11,94],[35,39],[7,68],[111,-16]],[[62305,51869],[-52,44],[13,68],[37,-1],[43,-64],[-41,-47]],[[62722,52207],[-92,-119],[-1,-41],[-27,-101],[-44,-79],[-50,-16],[-62,132],[-30,89],[30,22],[26,-15],[101,36],[37,59],[42,29],[70,4]],[[63439,51933],[-49,-48],[-25,30],[64,47],[21,36],[26,116],[42,102],[14,80],[38,22],[25,-23],[2,-101],[-7,-96],[-46,-105],[-40,-9],[-65,-51]],[[62052,52372],[26,6],[30,-73],[-10,-68],[-32,-102],[-66,181],[13,39],[39,17]],[[63739,52562],[-9,-91],[-52,-44],[-35,-8],[-25,-48],[-32,14],[10,87],[31,49],[86,43],[26,-2]],[[69494,58717],[18,-47],[-44,-61],[-64,-42],[-49,26],[30,79],[25,27],[84,18]],[[70108,59251],[-22,-98],[65,-38],[23,21],[43,-27],[-23,-91],[-32,-42],[-39,-101],[-61,-57],[-39,58],[-52,0],[-24,23],[-3,63],[-37,39],[-62,-59],[-42,38],[-10,51],[81,62],[51,62],[88,62],[95,34]],[[70465,59307],[54,-38],[20,-55],[-22,-57],[-90,67],[-56,-1],[-18,77],[112,7]],[[68204,61363],[18,-58],[41,-22],[31,17],[60,-25],[-12,-129],[61,7],[111,-55],[86,-7],[11,-42],[65,-65],[97,37],[55,-35],[48,-56],[79,25],[41,-35],[127,12],[23,16],[-5,77],[60,-4],[42,-30],[56,-6],[26,-36],[70,-2],[16,-16],[15,-27],[6,-21],[5,-9]],[[69433,60859],[3,-3],[0,-2]],[[69429,60807],[15,-31]],[[69544,60817],[1,0],[1,-2],[0,-3],[7,-4],[23,-3],[30,-22],[22,-7],[14,-43],[33,-10],[33,41],[54,8],[72,-56],[67,20],[112,61],[95,-23]],[[70108,60774],[-2,-43],[54,-26],[-21,-51],[-42,11],[-12,-72],[36,-44],[8,-65],[-33,-74],[-143,-123],[-125,-68],[-58,-43],[-64,-100],[-27,-18],[-200,-54],[-122,-52],[-14,-25],[-73,-15],[-106,-138],[60,-67],[-104,-58],[-19,-25],[-76,-178],[-56,-70],[-152,-282],[-51,-124],[9,-119],[33,-86],[2,-65],[34,-78],[42,-50],[63,-24],[31,-46],[-95,-83],[-29,-55],[-92,-40],[-32,-65],[-40,-40],[5,-57],[-40,-18],[-17,-116],[-24,-29],[-52,-136],[57,-64],[-84,-40],[-56,17],[-37,-24],[-60,11],[-56,-48],[-7,-31],[-71,-44],[-53,-96],[-33,-160],[-40,-38],[-26,-69],[-50,-23],[-61,61],[-83,-16],[-30,-72],[-38,-9],[-68,45],[-21,-9],[-91,11],[-72,-37],[-72,28],[-49,-10],[-42,17],[-46,-16],[-36,13],[-66,-22],[-79,-1],[-35,-81],[-75,-54],[-70,8],[-35,-30],[-74,-28],[-55,-139],[-41,-16],[-3,-64],[-63,-31],[-71,48],[-46,61],[-45,3],[-48,72],[-22,61],[-7,106],[-61,38],[-14,71],[28,22],[-54,107],[-94,88],[-109,64],[-147,-8]],[[66053,57535],[-23,187],[-21,45],[40,113],[35,37],[26,86],[54,56],[39,-11],[29,107],[-68,-3],[-16,50],[-74,108],[35,180],[81,72],[-3,31],[35,67],[-25,59],[-49,3],[-29,51],[-3,47],[-30,43],[7,72],[-35,22],[-43,63],[-17,53],[83,-6],[117,11],[14,69],[29,43],[17,86],[-63,106],[56,46],[39,63],[-23,52],[16,126],[-9,121],[-41,108],[48,23],[66,133],[58,17],[66,77],[44,92],[-61,58],[-72,8],[-9,40],[21,78],[-50,40],[-188,35],[-40,-78],[-129,-23],[-51,45],[-126,-50],[-49,-4],[-21,47],[48,78],[-32,31],[-12,56],[-48,-32],[-108,-31],[-46,-52]],[[65542,60486],[-50,-37],[-7,120],[40,97],[-28,97],[17,96],[-31,34],[-29,-46],[-34,28],[35,120],[-51,-16],[-11,97],[-33,12],[-10,47],[13,85],[64,25],[30,57],[50,32],[56,-28],[73,23],[24,28],[87,30],[-46,28],[10,47],[85,68],[10,33],[110,20],[89,-6],[66,-32],[53,-70],[175,0],[48,7],[52,-19],[110,29],[58,-16],[63,11],[22,48],[53,-60],[109,-4],[95,-44],[130,-25],[40,-20],[115,-9],[94,2],[138,57],[42,-9],[62,21],[33,-39],[136,-62],[70,52],[67,7],[104,-49],[44,-34],[104,-6],[116,50]],[[77556,70760],[99,21],[72,-32],[26,-57],[-27,-52],[-44,-21],[-82,-73],[-85,7],[-81,-29],[-51,-138],[-70,6],[31,56],[-26,93],[-59,20],[48,74],[-34,52],[81,18],[79,54],[123,1]],[[77826,70783],[21,-43],[-67,-12],[-64,42],[36,44],[74,-31]],[[77587,71022],[81,-17],[41,-88],[-116,-22],[-31,-64],[-39,-9],[-88,129],[52,46],[53,73],[47,-48]],[[79613,71313],[65,-66],[-42,-43],[-67,-9],[-23,-81],[-56,-114],[-84,-62],[-25,-75],[55,-222],[-23,-108],[51,-81],[18,-110],[48,-32],[-101,-30],[-11,-60],[-38,-15],[-21,-101]],[[79359,70104],[-111,18]],[[79248,70122],[-45,37],[-19,0],[-9,7],[-8,-2],[-5,-8],[-9,-18],[-7,-6],[-7,-2],[-30,1],[-12,-4],[-25,-15],[-39,-15],[-92,66],[-35,51],[-13,13],[-42,31],[-8,43],[-81,7],[-9,7],[-6,13],[-4,13],[-12,8],[-43,-7],[-78,70],[-15,6],[-14,4],[-7,15],[-15,7],[-4,-5],[0,-11],[10,-16],[2,-10],[-7,-8],[-12,-7],[-6,0],[-6,6],[-5,12],[-3,16],[-6,13],[-178,-66],[-5,-4],[-24,-2],[-35,0],[-51,-48]],[[78229,70314],[-36,1],[60,127],[3,109],[22,62],[-64,30],[-29,-50],[-66,-47],[-51,47],[-92,15],[-22,98],[-42,32],[-30,74],[33,74],[-60,72],[4,59],[33,75],[-18,54],[108,44],[130,19],[-5,51],[86,14],[35,37],[87,-25],[28,32],[190,19],[82,-19],[34,49],[68,-2],[3,39],[122,3],[34,-31],[72,1],[69,-25],[79,3],[62,-45],[111,-22],[111,6],[178,-27],[55,46]],[[85318,41343],[-12,-48],[-28,-29],[-45,-133],[-20,-16],[18,-67],[31,-61],[23,-134],[47,-57],[42,-120],[45,-24],[19,-118],[51,-92],[19,-81],[49,-47],[29,1],[138,-204],[16,-14],[199,-105],[371,-197],[224,-122],[315,-169],[22,-18],[382,0]],[[87253,39488],[-130,-203],[-19,-29],[-18,-28],[-55,-88],[-168,-261],[-205,-318],[-116,-194],[-25,-38],[-23,-38],[-23,-39],[-122,-218],[-37,-64],[-4,-8],[-83,-145],[-134,-236],[-11,-8],[-362,34],[-47,-25],[-122,-44],[-156,-120],[-60,-81],[-3,-6],[-2,-6],[-7,-21],[-7,-43],[-5,-20],[-11,-20],[-1,-1],[-14,-15],[-16,-10],[-189,-53],[-62,-1],[-80,-80],[-3,-12],[1,-19],[-3,-7],[-4,-7],[-6,-12]],[[84921,37004],[-19,-18],[-17,6],[-35,24],[-104,-30],[-81,-7],[-39,16],[-42,76],[-45,43],[-47,81],[-24,-26],[-123,-77],[-2,-2],[-1,-10],[-3,-4],[-68,-38],[-129,-102],[-7,-15],[-8,-33],[-10,-46],[-7,-19],[-8,-15],[-65,-101],[-8,-40],[-7,-17],[-12,-1],[-7,7],[-2,8],[-2,9],[-4,6],[-11,6],[-97,9],[-44,31],[-67,-8],[-65,29],[-7,6]],[[83704,36752],[-6,10],[-10,22]],[[83688,36784],[0,-4],[-1,-9],[1,-4],[-23,2],[-21,8],[-19,9],[-41,-18],[-82,15],[-29,-5],[-47,71],[-331,344],[-37,54],[-66,38],[-86,6],[-131,-3],[-89,4],[-43,49],[-5,59]],[[82638,37400],[-52,90],[-13,56],[2,130],[2,8],[15,29],[3,25],[-11,38],[-1,13],[2,13],[9,30],[-56,42],[-23,-11],[-34,34],[-30,2],[-42,-48],[-26,48],[3,54],[-62,67],[-4,12],[-3,36],[-6,16],[-31,71],[-5,97],[-1,7],[-3,33],[-4,12],[-6,13],[-13,23],[-21,67],[-4,66],[-19,54],[-3,36],[-9,34],[-3,26],[-4,24]],[[82185,38647],[-3,3],[-4,8]],[[82178,38658],[-5,19],[-27,28],[-42,15],[-8,84],[-24,28],[-54,21],[-39,58],[0,15],[0,26],[-2,13],[-4,11],[-5,5],[-14,-8],[-38,57],[-10,95],[-48,79],[-27,15],[-37,59],[-55,17],[-41,40],[-41,-19],[-45,39],[-72,12],[-24,72],[83,199],[-8,15],[-3,7],[-3,5],[-2,5],[-1,8],[0,4],[3,12],[1,8],[-1,3],[-2,4],[1,23],[1,4],[1,5],[31,33],[41,-15],[92,18],[36,-56],[50,29],[41,5],[7,3],[8,7],[39,55],[7,14],[6,14],[1,14],[2,15],[-5,179],[-7,179],[-4,154]],[[81931,40389],[-1,47],[12,92],[46,215],[23,33],[9,21],[8,95],[-19,136],[-1,26],[3,22],[60,141],[57,53],[63,-85],[33,-9],[6,11],[2,11],[0,7],[1,8],[8,11],[20,25],[-7,73],[25,118],[-12,75],[47,169],[-10,62],[1,75],[4,15],[5,15],[5,12],[50,35],[39,79],[4,15],[3,34],[7,27],[3,7],[4,5],[8,7],[4,5],[3,8],[6,42],[72,191],[22,18],[4,28],[0,4],[1,2],[6,4],[10,5],[152,29],[7,69],[-2,24],[-9,25],[0,14],[5,11],[5,9],[4,13],[-6,28],[37,203],[57,129],[6,66],[23,88],[-8,106],[34,169]],[[82885,43379],[8,3],[12,2],[13,9]],[[83352,43589],[41,153]],[[83419,43695],[0,-9],[2,-11],[2,-3]],[[83423,43672],[14,-25]],[[83766,43504],[43,45]],[[77630,71752],[4,-50],[-44,-40],[-100,-31],[-1,116],[134,26],[7,-21]],[[76958,73664],[132,-24],[-70,-60],[-62,84]],[[79972,77213],[-191,-79],[132,-40],[-32,-66],[-103,-132],[82,-193],[24,-19],[219,-56],[136,-160],[136,-85],[-35,-109],[-152,-130],[-160,-190],[-5,-95],[89,-97],[77,-117],[27,-90],[118,-147],[66,-176],[15,-69],[-156,-50],[52,-40],[-36,-33],[-10,-114],[-53,-57],[96,-19],[-5,-69],[-58,-10],[-30,-53],[73,-121],[108,-7],[41,-63],[-13,-41],[-65,-22],[39,-68],[9,-67],[88,-28],[91,-60],[10,-84],[-29,-57],[-118,-123],[-85,-31],[101,-99],[94,-74],[127,-53],[60,-55],[95,-57],[10,-50],[122,-129],[-50,-72],[-83,-185],[-120,-122],[-105,-66],[-112,-120],[-216,-246],[-91,-67],[-129,-149],[-156,-91],[-70,-83],[-50,-17],[-128,-110],[-129,-126]],[[79534,71975],[-40,-42],[-96,-13],[-153,51],[-22,-36],[-118,-44],[-77,16],[-63,-38],[-87,25],[-139,-109],[-79,50],[-9,-50],[-117,-1],[-7,-38],[-87,-25],[-68,0],[-63,-25],[-55,-66],[-65,48],[-201,-65],[-80,6],[-124,-49],[-13,94],[-55,-6],[-74,89],[54,57],[-25,24],[-79,-48],[-109,4],[68,81],[-129,4],[-87,33],[-111,104],[-43,-23],[-73,26],[-18,93],[-37,46],[25,65],[-22,41],[49,60],[31,75],[-13,183],[44,16],[-59,133],[6,32],[-44,78],[-52,28],[20,85],[39,54],[-28,25],[9,65],[-52,3],[-34,84],[30,66],[-31,111],[43,48],[60,10],[31,47],[-8,54],[66,102],[97,34],[13,-51],[115,39],[65,50],[-67,69],[28,51],[60,-16],[26,83],[70,49],[58,-35],[36,97],[171,89],[5,63],[84,-13],[46,113],[42,11],[63,94],[132,93],[30,90],[48,55],[87,62],[114,31],[72,-61],[70,93],[-61,139],[26,181],[-102,74],[-101,36],[-57,-11],[-58,94],[-44,-18],[-93,34]],[[78138,75232],[-54,140],[-50,68],[-64,30],[-32,141],[93,78],[4,116],[42,39],[-123,147],[-38,63],[15,72],[43,12],[12,81],[-127,41],[46,63],[-27,92],[7,90],[61,31],[-106,73],[-20,48],[-69,1],[1,54],[-39,51],[-169,77],[-118,32],[-88,0],[-59,57],[-173,74],[-151,112],[-52,60],[-120,43]],[[76783,77218],[47,43],[110,-40],[47,29],[-46,58],[107,68],[133,-17],[138,-157],[133,-115],[22,-70],[65,9],[98,-31],[64,8],[68,-44],[205,61],[75,62],[154,-66],[127,-26],[75,-64],[98,46],[33,108],[71,39],[100,5],[59,79],[-27,111],[55,110],[4,94],[55,108],[64,12],[116,126],[139,12],[91,-22],[80,16],[115,82],[98,9],[114,-112],[91,-57],[279,-80],[81,-129],[-44,-54],[-140,-100],[-14,-67],[49,-49]],[[137162,22847],[39,-25],[5,-29],[-60,-21],[-13,31],[-51,-49],[-26,-48],[-38,-2],[22,62],[21,-9],[27,57],[74,33]],[[137518,23451],[18,-49],[-19,-39],[-23,86],[24,2]],[[137120,23819],[2,-33],[36,-52],[88,-99],[-13,-65],[26,-66],[-15,-39],[39,-58],[-5,-32],[-82,-44],[-27,25],[-47,-28],[-42,-63],[-118,-11],[-12,20],[-90,41],[-45,6],[-53,32],[-32,95],[11,63],[34,17],[24,49],[-17,63],[88,116],[82,54],[36,-24],[44,31],[41,5],[15,29],[32,-32]],[[137558,23805],[-15,77],[27,0],[-12,-77]],[[137759,24036],[-18,39],[27,49],[13,45],[0,-109],[-22,-24]],[[49,24120],[-43,-42],[-6,-19],[0,109],[32,58],[23,1],[13,-55],[-19,-52]],[[137744,24512],[-63,-142],[-54,-49],[-10,-53],[-32,-51],[23,-36],[117,159],[38,6],[-24,-70],[5,-65],[-99,-18],[-18,-26],[-115,-11],[20,47],[-32,26],[-36,-21],[-19,-42],[-30,-21],[-7,-61],[-54,41],[-24,-28],[-8,-46],[-36,-14],[-40,135],[-35,-21],[-10,34],[34,90],[41,-32],[64,75],[26,46],[53,10],[71,35],[34,-7],[50,54],[117,87],[90,20],[0,-13],[-37,-38]],[[90131,21643],[58,-16],[20,-32],[17,-70],[41,-59],[-13,-104],[-44,-26],[-58,3],[-76,54],[-50,141],[30,89],[40,25],[35,-5]],[[86148,26717],[48,-44],[-2,-72],[-30,-85],[-17,30],[10,48],[-9,123]],[[47988,35984],[6,11],[6,2],[13,-6],[7,1],[5,5],[10,42],[26,12],[19,29],[7,15],[15,62],[12,44],[28,61],[4,9],[5,28]],[[48151,36299],[7,9]],[[48158,36308],[-4,8],[-3,3],[-1,5],[1,6],[1,7],[6,16],[3,19],[0,8],[-2,1],[-4,8],[-2,9],[5,4],[1,5],[-1,8],[-1,15],[-1,2]],[[48156,36432],[-5,4]],[[48151,36436],[1,4],[5,5]],[[48157,36445],[0,27]],[[48157,36472],[-14,6],[8,32]],[[48151,36510],[29,66],[13,14],[4,11],[3,12],[1,11],[1,8],[15,25],[5,25],[6,95],[-11,19]],[[48217,36796],[-13,0]],[[48204,36796],[-16,65],[-4,7],[-9,19],[-23,15],[-47,112],[-13,19],[-4,10],[0,16],[2,10],[5,21],[0,21],[-17,11],[-10,14],[-2,10],[4,12],[3,11],[-1,16],[-2,26],[-12,39],[-7,67],[1,15],[8,23],[1,10],[0,26],[0,7],[-5,21],[-1,16],[2,11],[0,10],[-5,11],[-10,10],[-2,8],[0,75],[-2,10],[-1,6],[2,5],[12,15],[1,9],[-4,25],[1,11],[3,10],[7,18]],[[48059,37669],[62,133]],[[48121,37802],[30,35],[7,14]],[[48158,37851],[13,7],[12,13],[38,110],[6,63],[18,52],[64,-19],[100,-82],[81,-28],[20,8],[66,-47],[33,-10],[81,-86],[11,-31],[81,-116],[54,-66],[38,-17],[23,-55],[56,-60],[62,-105],[14,47],[36,-33],[33,-172],[25,-89],[-13,-93]],[[45552,43683],[17,-59],[32,-57],[15,-83],[-74,8],[-15,56],[-44,63],[-26,95],[21,34],[27,-7],[47,-50]],[[45452,44362],[-35,31],[25,48],[27,-62],[-17,-17]],[[45312,44609],[18,-121],[-15,-56],[-37,-29],[-28,86],[-11,101],[10,61],[59,-23],[4,-19]],[[45409,44645],[63,-47],[-105,-38],[-31,27],[17,66],[-14,60],[29,38],[23,-38],[18,-68]],[[72507,60928],[2,-47],[28,-26],[1,-118],[11,-49],[-3,-111],[-57,-100],[0,-152],[-74,-165],[-105,30],[-60,64],[46,64],[-77,21],[41,110],[-22,15],[-51,-20],[20,71],[28,19],[-67,80],[8,43],[36,17],[-25,49],[21,98],[56,56],[78,31],[34,46],[90,15],[-14,57],[45,109],[23,-114],[-13,-93]],[[71106,65166],[13,-16],[6,-7],[10,-5],[24,-6],[13,-25],[67,34],[80,-25]],[[71793,63958],[-13,-6]],[[71780,63952],[-9,-5],[-17,-15],[0,-32]],[[71570,63904],[-11,-5]],[[71239,63200],[-18,-69]],[[71171,63110],[-2,-7],[3,-9],[8,-10]],[[71180,63084],[0,-18]],[[71488,63234],[1,-12],[-2,-10]],[[71513,63035],[0,-4]],[[71513,63013],[0,-4]],[[71537,63009],[41,-77]],[[71578,62932],[-21,-34],[-63,-26],[-3,-67],[65,-49],[7,-80],[67,-62],[-37,-119],[-39,-5],[-44,-49],[-41,16],[-52,-32],[47,-56],[2,-52],[52,-46],[45,-5],[13,-67],[-68,-146],[30,-41],[-20,-40],[64,-79],[133,-74],[94,35],[25,-59],[-24,-57],[-58,-79],[10,-45]],[[71762,61614],[-25,-30]],[[71737,61584],[-12,13],[-12,-11]],[[71713,61586],[-16,-37],[-70,-20],[-24,-54],[-43,-13],[-31,-73],[-62,-13],[-24,-80],[3,-48],[-249,-76],[-96,33],[-91,47],[-73,6],[-4,73],[-104,-3],[-3,57],[59,22],[-72,58],[2,-83],[-38,14],[-41,-57],[-98,15],[-21,52],[-116,3],[-40,56],[-63,-11],[-76,-74],[-45,-24],[-41,-58],[-50,2],[-54,-40],[-50,-70],[-28,-101],[4,-240],[33,-18],[17,-57]],[[69550,60846],[7,7],[10,2],[-6,8]],[[68204,61363],[51,8],[71,112],[49,271],[38,301],[23,99],[47,31],[-39,39],[-26,-45],[14,256],[15,98],[7,131],[30,22],[57,-47],[57,-77],[4,61],[-33,55],[-136,122],[-13,51],[59,68],[10,83],[-50,119],[-124,117],[-37,3],[-78,50],[-21,81],[-73,96],[-26,17],[6,69],[42,75],[-110,120],[-48,24],[-58,61],[31,20],[-10,68],[-91,16],[-7,53],[-121,-38],[-103,89],[-44,-9],[-25,42],[-125,17],[-17,34],[-76,12],[-51,-45],[-46,37],[-34,70],[-95,56],[123,30],[23,51],[-60,32],[52,70],[-40,25],[-72,-34],[-64,18],[8,88],[76,68],[84,31],[142,33],[9,-39],[84,31],[44,-23],[38,99],[56,-12],[107,30],[5,-27],[96,-106],[5,-36],[68,-38],[22,29],[101,63],[36,-51],[93,54],[51,13],[2,-55],[99,13],[10,64],[-6,78],[10,98],[-21,5],[-5,109],[-40,76],[-40,36],[-24,83],[5,81],[22,17],[82,-23],[79,37],[46,-8],[15,-36],[-29,-51],[70,-132],[20,32],[96,-22],[157,-11],[74,-40],[111,50],[71,65],[-59,18],[-9,30],[35,92],[25,24],[167,90],[34,0],[158,53],[83,70],[49,87],[20,142],[-4,145],[18,68],[-11,48],[58,47],[92,39],[61,8],[149,42]],[[128143,35115],[-2,-3],[-4,0],[-1,4],[1,2],[2,0],[3,-1],[1,-2]],[[128111,35142],[-3,-3],[-4,0],[0,3],[2,2],[5,-2]],[[128135,35142],[-2,-2],[-3,0],[-2,4],[0,3],[2,1],[4,-2],[1,-4]],[[128172,36871],[-5,-7],[-1,10],[5,7],[1,-10]],[[128133,36879],[-7,-6],[-1,9],[7,7],[1,-10]],[[127707,37814],[-4,-2],[2,7],[5,8],[6,4],[3,-1],[-1,-6],[-5,-5],[-6,-5]],[[131291,37828],[-6,-20],[-3,-4],[-5,-2],[-5,2],[-4,3],[-6,2],[-8,-1],[-6,2],[-5,3],[-2,10],[5,11],[18,25],[7,8],[8,3],[6,-7],[0,-3],[0,-10],[0,-4],[1,-3],[3,-1],[2,-2],[1,-5],[-1,-7]],[[129040,38115],[0,-1],[0,1],[-1,1],[0,1],[1,0],[1,0],[0,-1],[-1,-1]],[[126039,38688],[-2,-4],[1,5],[0,3],[1,4],[1,2],[1,-4],[0,-3],[-2,-3]],[[129340,38700],[-3,-3],[1,6],[1,2],[2,1],[0,-4],[-1,-2]],[[129438,38853],[3,-3],[3,4],[3,-1],[3,-2],[4,-1],[9,1],[4,-1],[0,-1],[7,-7],[1,0],[2,-6],[-1,-1],[-4,-2],[2,-6],[4,-2],[3,1],[4,3],[5,-32],[1,-6],[-3,-2],[-9,1],[-1,-1],[0,-7],[4,-11],[1,-8],[-2,-10],[-3,-5],[-5,-3],[-18,-4],[-8,1],[-4,7],[-8,-5],[-5,6],[-4,9],[-4,6],[2,9],[1,7],[-2,8],[-3,6],[1,2],[1,7],[-10,1],[-3,9],[3,21],[3,6],[8,1],[6,2],[1,15],[8,-6]],[[127012,39074],[-2,-7],[-1,23],[0,10],[3,-5],[1,-7],[0,-7],[-1,-7]],[[125988,39104],[0,-3],[-2,6],[2,1],[1,-2],[-1,-2]],[[126926,39111],[5,-11],[0,-9],[-2,-12],[-4,-5],[-5,9],[-2,0],[-4,-4],[-4,1],[-5,2],[-6,1],[2,3],[1,1],[3,0],[3,3],[10,4],[2,4],[-1,6],[-9,-2],[-3,7],[13,5],[6,-3]],[[127015,39158],[3,-3],[2,3],[3,0],[5,-2],[5,-1],[-4,-7],[-6,-7],[-7,-6],[-6,-1],[-1,8],[1,6],[2,11],[2,0],[1,-1]],[[126456,39848],[-1,-2],[-1,6],[2,-1],[0,-1],[0,-2]],[[126175,39849],[-3,-4],[-1,8],[1,10],[3,8],[5,0],[0,-6],[-2,-8],[-3,-8]],[[126346,40094],[-2,-1],[3,6],[1,1],[2,-1],[-1,-3],[-1,-1],[-2,-1]],[[121777,40444],[5,-3],[8,6],[-2,-7],[-4,-10],[-5,-9],[-4,-4],[-6,3],[-3,13],[-4,-3],[-4,-6],[-21,-53],[-4,-8],[-2,15],[3,21],[7,19],[6,8],[3,4],[3,21],[2,7],[6,5],[2,-4],[1,-17],[1,6],[1,7],[1,5],[2,4],[4,4],[4,4],[4,0],[-1,-8],[-4,-11],[1,-9]],[[122673,40580],[-4,-2],[0,5],[3,4],[3,0],[1,-2],[-3,-5]],[[72342,34077],[-19,11],[-7,59],[31,5],[-5,-75]],[[72642,35162],[41,-40],[24,3],[22,40],[270,-1],[231,-2],[-2,487],[-1,210],[-2,23]],[[73225,35882],[5,40]],[[73235,35967],[122,13]],[[73960,35796],[-14,-20]],[[73946,35776],[0,-4],[2,-12]],[[73947,35753],[-7,-12],[-5,-18]],[[73922,35584],[-6,-55]],[[74353,35321],[1,-16],[0,-46]],[[74223,34552],[-7,-18],[3,-23]],[[74422,34080],[2,-65]],[[74426,33754],[-13,-26]],[[74436,33674],[-3,-8],[-9,-12]],[[74417,33616],[-24,-64]],[[74403,33511],[-1,-109]],[[74341,33319],[-1,-6],[0,-7]],[[74340,33306],[-2,-9]],[[74301,33061],[-2,-22]],[[74299,33039],[-2,-5],[-8,-10],[-9,-25]],[[74205,33006],[-14,41]],[[74191,33047],[22,38],[-16,25]],[[74151,33248],[-13,-34],[-5,-33]],[[73314,33091],[8,-35],[2,-14],[0,-57]],[[73338,32945],[1,-28],[-5,-28]],[[73306,32815],[5,-41]],[[73393,32701],[6,-28],[-28,-13]],[[73364,32584],[27,-24],[25,-28]],[[73445,32305],[3,-13],[-3,-14]],[[73143,32111],[-35,49],[-14,88],[-68,94],[-61,69],[-4,85],[-71,112],[-108,142],[-101,126],[-69,134],[44,-12],[77,-69],[41,22],[-4,31],[-87,35],[-35,29],[-26,-29],[-21,53],[-38,20],[-12,99],[-75,121],[-3,52],[-44,79],[-3,101],[-85,189],[25,-17],[29,-77],[42,-42],[3,-77],[66,35],[-26,25],[-30,-9],[-6,100],[-50,13],[-48,59],[-5,79],[-53,123],[-60,193],[26,2],[4,-47],[49,29],[29,-73],[32,72],[5,55],[65,116],[14,49],[0,80],[19,135],[-18,187],[27,-7],[17,-61],[110,-45],[-12,54],[-42,47],[-28,-5],[-33,110],[-40,47],[1,43],[81,43],[40,-28],[-3,103],[-21,98],[40,59],[30,0],[22,-37]],[[68395,65930],[89,-49],[-41,-56],[-56,-9],[-72,74],[80,40]],[[67281,67491],[42,-30],[-38,-19],[-14,-23],[-43,-31],[-58,31],[-29,58],[7,76],[49,17],[57,-17],[27,-62]],[[66491,67985],[-132,-37],[-9,80],[-71,39],[-21,69],[-65,43],[-61,-72],[-38,-112],[-51,20],[-64,-4],[-37,37],[-50,2],[-23,57],[-99,89],[58,64],[45,-7],[52,40],[-59,40],[22,44],[42,-15],[70,29],[32,56],[25,98],[61,40]],[[66118,68585],[87,1],[27,77],[73,-11],[107,44],[84,-23],[60,1],[25,-27],[-11,-60],[102,-140],[36,-13],[-17,-89],[81,-15],[39,-118],[-45,-62],[-24,-68],[-95,-16],[-19,-85],[-48,-34],[-89,38]],[[66932,68814],[-87,26],[-17,68],[14,61],[74,-8],[25,-68],[-9,-79]],[[66555,69056],[31,-92],[-74,-34],[-41,65],[-65,4],[32,77],[110,41],[7,-61]],[[66678,69173],[-69,-134],[-39,4],[-5,66],[36,57],[90,82],[-13,-75]],[[66583,69543],[30,-58],[39,0],[77,-48],[-27,-58],[-75,-11],[-89,-32],[-69,-5],[-3,42],[50,23],[30,58],[-62,35],[0,48],[64,28],[35,-22]],[[66076,70030],[60,-72],[-27,-88],[-47,-12],[-25,67],[39,105]],[[66139,70184],[22,-73],[-58,-19],[-100,53],[26,43],[110,-4]],[[66476,70213],[59,-69],[1,-107],[17,-59],[80,-49],[97,14],[-17,-47],[-87,-87],[-40,91],[-114,-22],[-62,94],[-90,39],[4,83],[55,29],[72,-16],[-16,71],[41,35]],[[66520,70616],[-47,-54],[-30,-102],[17,-39],[-71,-73],[-116,-67],[-54,-48],[-38,48],[70,75],[-53,16],[-34,102],[26,62],[61,-33],[37,19],[-7,50],[181,112],[68,-28],[-10,-40]],[[67610,70800],[125,-8],[-42,-78],[16,-61],[-51,-68],[-83,-43],[-30,-41],[-196,-134],[16,-27],[-59,-38],[87,-24],[-28,-69],[-50,-64],[32,-23],[75,23],[133,74],[79,5],[78,-31],[62,20],[100,-3],[86,-18],[124,23],[67,-14],[39,-43],[27,-87],[-84,-94],[-24,-58],[-2,-68],[-41,-60],[-25,-91],[-85,-86],[-34,-95],[-89,-64],[-22,-62],[93,-57],[-78,-57],[-70,8],[-63,-51],[-66,-89],[138,-5],[53,59],[65,-5],[124,-75],[62,-12],[124,-173],[73,-32],[18,-63],[6,-121],[35,-125],[41,-68],[36,-139],[66,-78],[122,-39],[85,-51],[51,-80],[12,-50],[63,-67],[47,-18],[-41,-66],[26,-76],[108,-160],[-68,-44],[101,-94],[48,-119],[-4,-86],[-119,-108],[57,-31],[28,-41],[52,-2],[41,87],[32,22],[152,3],[117,-28],[142,-94],[39,-94],[9,-85],[-53,-134],[-19,-116],[-31,-13],[-64,-75],[-17,-48],[-59,-50],[-55,29],[-41,-29],[25,-64],[-11,-55],[-140,-110],[80,-29],[82,-9],[47,14],[124,12],[-18,-53],[13,-52],[-21,-56],[-126,-55],[-32,-82],[-55,18],[-67,-49],[-97,-25],[-39,-44],[-57,9],[-112,42],[-152,-18],[-93,-41],[-49,67],[-45,-37],[-99,10],[-136,-36],[-107,-16],[-12,-74],[-174,26],[-18,-29],[-80,64],[-66,24],[-151,-36],[-79,-56],[-8,-107],[-56,-61],[-5,-53],[-69,5],[-47,52],[-31,-15],[-71,75],[-14,-36],[-50,6],[-43,-24],[-98,1],[-19,-62],[-84,-23],[-32,-61],[3,-49],[-43,-29],[-44,75],[-58,25],[-39,-46],[-49,-2],[8,67],[67,37],[27,-16],[112,100],[36,44],[10,60],[89,44],[94,133],[8,127],[72,-12],[40,36],[9,73],[22,24],[147,22],[129,-23],[18,-14],[125,12],[38,103],[55,63],[46,23],[1,51],[-158,-60],[-30,-63],[-137,1],[-67,50],[-53,90],[-46,-38],[-114,-5],[-8,73],[-33,34],[-101,2],[-25,-50],[-53,-3],[-35,-30],[-43,37],[16,31],[-44,93],[-62,37],[64,26],[19,42],[42,-12],[70,36],[54,44],[47,-2],[121,90],[40,67],[16,95],[-26,53],[28,59],[-30,34],[-2,69],[-38,18],[-68,-16],[-36,-41],[-97,-11],[61,73],[90,63],[7,53],[41,31],[31,40],[33,0],[114,55],[79,-15],[145,51],[48,35],[-16,86],[56,84],[-36,38],[11,101],[52,15],[-14,48],[48,56],[-21,36],[-81,-14],[-69,-31],[-63,103],[-26,72],[-62,74],[96,229],[42,36],[-68,24],[-50,-8],[-6,-56],[-93,-7],[-46,-59],[-61,1],[-45,43],[-41,-22],[0,-66],[-60,3],[-35,44],[-101,56],[-37,-35],[-66,24],[-16,98],[47,5],[15,78],[48,48],[19,69],[83,101],[-21,56],[-96,77],[23,29],[-12,84],[41,40],[-43,28],[-33,-82],[-71,41],[-63,-24],[8,72],[-52,-2],[17,-89],[34,-52],[-45,-38],[-9,-79],[-40,-107],[18,-28],[-48,-44],[-50,-1],[-8,59],[30,31],[-3,72],[54,120],[-25,18],[-19,80],[41,59],[25,95],[-29,57],[34,89],[45,39],[-8,54],[28,87],[-125,-120],[-129,74],[19,43],[-103,4],[16,37],[102,6],[69,81],[-44,8],[7,55],[89,175],[-80,46],[-24,90],[42,83],[-17,129],[73,52],[49,-44],[74,76],[7,108],[-13,55],[81,21],[-29,47],[46,62],[25,108],[99,-31],[97,-7],[35,-26],[84,24],[135,6],[58,30],[114,-13],[6,32]],[[67648,70951],[34,-68],[-54,-5],[-50,60],[70,13]],[[67682,71103],[56,-77],[117,-53],[-51,-30],[-52,44],[-88,-24],[-61,62],[16,69],[63,9]],[[68396,72003],[81,-151],[-74,-292],[-39,16],[43,128],[-36,80],[-37,-54],[-83,51],[5,41],[100,10],[-16,86],[-42,49],[98,36]],[[68477,72087],[33,-2],[-18,-110],[-53,44],[38,68]],[[85516,59953],[-45,54],[-35,-12],[-41,87],[-63,76],[-74,42],[13,46],[-89,-8],[-49,-84],[-108,43],[-79,4],[-57,-50],[-40,39],[-68,16]],[[84781,60206],[61,91],[37,99],[-7,115],[-35,66],[-27,145],[-15,24],[-22,156],[-44,71],[-88,24],[-50,121],[-34,-4],[-30,49],[-105,16],[-69,45],[-26,-13],[-44,111],[-88,43]],[[84195,61365],[27,89],[67,26],[95,-41],[65,18],[86,-51],[52,-49],[65,-1],[76,-25],[65,-66],[201,-27],[42,26],[91,3],[66,-56],[59,23],[96,-49],[-4,-28],[78,-78],[124,-41],[55,-50],[53,-21],[-28,-56],[10,-35],[71,-28],[44,39],[55,8],[29,45],[109,32],[46,-19],[31,-64],[39,86],[72,-45],[52,-7],[65,-95],[48,13],[84,-21],[14,-37],[-44,-138],[124,-124],[71,-24],[36,6],[79,-65]],[[67917,65100],[-43,18],[52,34],[-9,-52]],[[68827,41427],[24,-29],[45,-16],[-18,-153],[-19,-35],[-2,-76],[41,-28],[40,-60],[20,-57],[41,-1],[32,-58],[-6,-169],[8,-52],[-18,-115],[11,-116],[-48,2],[1,-97],[39,37],[37,7],[41,-70],[-12,-117],[-28,-99],[28,-100],[-12,-44],[-41,-12],[30,-104],[65,-72],[27,-66],[7,-63],[-50,-48],[15,-312],[-43,-84],[0,-67],[18,-45],[29,9],[9,-45],[-18,-102],[0,-79],[-40,-36],[19,-46],[-10,-40],[44,-75],[-2,-42],[33,-37],[1,-59],[18,-43],[54,-58],[30,0],[11,-50],[66,-89]],[[69344,38316],[-33,-33],[-33,-75],[-7,-53],[-31,-39],[-73,-13],[-153,14],[-64,-34],[-46,-59],[-49,-32],[-107,-51],[-52,-78],[-50,-17],[-61,-77],[-97,-10],[-70,-61],[-32,-3],[-95,-48],[-54,-50],[-16,-37],[-62,-35],[-27,-42],[-41,-9],[-103,112],[-64,21],[-63,35],[-105,22],[13,47],[58,18]],[[67754,38020],[-23,51]],[[67725,38916],[24,77]],[[67804,39378],[3,6],[9,8],[5,12]],[[67931,39619],[-17,174],[-18,173],[-8,95]],[[67839,40131],[-10,11]],[[67829,40142],[3,8],[2,10],[1,31]],[[67873,40277],[-6,5],[-7,3],[-8,15],[14,28],[0,72]],[[64531,42212],[-24,-32],[3,-39],[-24,-60],[60,-93],[28,-28],[34,11],[54,117],[53,-2],[41,-64],[-1,-46],[37,-82],[126,180],[43,23],[79,-43],[73,-59],[57,-18],[36,91],[79,54],[23,-8],[20,62],[-39,68],[34,26],[67,-20],[58,-48],[13,-39],[-13,-39],[31,-56],[-5,-66],[41,-32],[9,-62],[-19,-157],[51,-11],[13,-68],[59,-66],[38,-15],[8,-76],[-30,5],[-55,-100],[-27,-78],[6,-27],[55,19],[13,43],[52,1],[22,-33],[3,-77],[-14,-71],[11,-16],[6,-122],[26,-71],[35,3],[8,-43],[38,-13],[19,-49],[-2,-30],[-8,-29]],[[65772,40733],[5,-26],[-7,-12],[-8,-5]],[[65881,40361],[-12,-63]],[[65893,40196],[12,-17],[16,-15]],[[65948,39762],[2,-14],[8,-26]],[[65739,39725],[-3,-59]],[[65821,39563],[2,-19],[7,-6],[10,-25]],[[65802,39508],[-4,-44],[-19,-47]],[[65644,39217],[-24,26],[-7,54],[-47,4],[-20,-79],[4,-36],[-52,-100],[2,-45],[-25,-15],[-74,-7],[-33,37],[-12,51],[-38,24],[-39,1],[32,125],[-1,73],[-32,77],[6,93],[-33,151],[-26,79],[-40,61],[-47,12],[-60,-17],[-30,-32],[-19,52],[-35,5],[-38,-21]],[[64956,39790],[-41,3],[-51,-95],[-24,-18],[-16,14],[-24,-4],[-7,-13],[-3,-20],[-8,11],[4,20],[22,49],[11,75],[28,56],[24,12],[6,12],[3,13],[-17,36],[-9,13],[-20,42],[-3,152],[-53,12],[-2,22],[3,28],[7,19],[12,11],[3,28],[1,8],[2,7],[2,7],[-1,7]],[[64805,40297],[-16,23],[-9,8],[-9,18]],[[64771,40346],[-18,14],[-16,30],[-2,10],[2,15],[1,9]],[[64738,40424],[-4,4],[-3,4],[-3,5],[-2,17]],[[64726,40454],[-33,59],[-15,55]],[[64678,40568],[-59,79]],[[64619,40647],[-2,7],[-6,41],[-7,20],[-29,10],[-244,-3],[-4,-44],[-84,-29],[-43,33],[-66,-20],[-32,-22],[-10,-89],[-39,-78],[-24,-105],[-51,-85],[-47,-7],[-27,-109],[-34,-32],[-35,20],[-27,-11],[-9,-10]],[[63799,40134],[-8,26],[19,24],[-16,37],[-3,101],[-32,-36],[-10,52],[-49,84],[-24,86],[0,46],[-47,29],[2,37],[-39,20],[-39,65],[-79,56],[-78,105],[-42,-1],[0,65],[-46,94],[-27,-1],[10,85],[-62,78],[17,45],[-36,93],[-22,17],[-28,-107],[-23,-19],[-19,54],[47,97]],[[63165,41366],[37,114],[13,71],[54,109],[64,1],[69,60],[24,35],[101,-18],[53,36],[22,-5],[18,1],[9,6],[6,7],[2,8],[2,27],[0,11],[-6,73],[1,25],[4,25],[-1,12],[-7,13],[-25,13],[-13,30]],[[63592,42020],[-47,34]],[[63545,42054],[-1,9],[0,13],[1,6],[8,16],[40,36],[12,-13],[26,0],[11,7],[6,16],[5,28],[0,37],[8,27],[1,11],[-1,10],[-5,13],[-19,38],[-4,16],[-1,14],[4,40]],[[63636,42378],[124,-6],[77,-19],[48,2],[-2,-74],[39,-30],[26,43],[53,-63],[49,-6],[28,-39],[25,17],[39,-20],[18,-32],[64,26],[43,37],[55,5],[69,-20],[92,29],[48,-16]],[[62479,42621],[-13,15],[-4,90],[-12,64],[57,97],[24,-11],[10,-86],[17,-29],[48,-23],[62,44],[-101,21],[-15,140]],[[62552,42943],[399,-3],[19,79],[29,39],[48,-19],[65,48],[70,-16],[27,-25],[16,-63],[28,-20],[55,26],[24,-22],[20,-64],[53,-40],[92,60],[47,13],[26,-21],[31,-69],[-13,-58],[-78,-24],[-55,-42],[-75,8],[-75,69],[-53,4],[-18,31],[-91,52],[-46,59],[-31,-47],[-4,-54],[-19,-28],[-39,-11],[-53,15],[-67,-17],[-49,-25],[-5,-101],[-321,5],[-30,-61]],[[62742,41451],[-4,-84],[-43,2],[-24,40],[71,42]],[[62896,41520],[-28,-65],[-15,34],[19,40],[24,-9]],[[62794,41702],[12,-78],[-53,-20],[-18,29],[32,62],[27,7]],[[62772,41893],[-16,-73],[-49,23],[-3,40],[68,10]],[[63545,42054],[18,-6],[29,-28]],[[63165,41366],[-49,-67],[-5,81],[-21,18],[-29,-57],[-15,28],[24,53],[-58,12],[-19,27],[-2,91],[-35,14],[42,107],[-28,45],[-12,64],[-19,16],[43,94],[85,14],[-55,33],[-52,-15],[-35,-53],[-94,-64],[-53,13],[17,76],[-21,18],[-59,-20],[-30,15],[-46,56],[-12,117],[-41,-4],[-40,59],[-13,-1],[-19,31],[-10,4],[-13,-9],[-2,5]],[[62489,42167],[8,10],[14,6],[52,-6],[57,16],[57,50],[56,6],[44,-17],[112,3],[98,71],[87,77],[290,-3],[137,-1],[135,-1]],[[72642,35162],[-19,66],[-29,0],[-36,-39],[-30,59],[-38,-20],[-17,25],[18,84],[33,90],[27,46],[22,71],[-2,33],[35,57],[34,86],[3,46],[-16,67],[8,102],[-7,38],[12,20]],[[72246,36864],[59,-1],[13,-66],[-37,-81],[-33,-121],[-29,-67],[-95,40],[-10,41],[19,77],[34,-3],[23,61],[3,56],[28,70],[25,-6]],[[78039,56505],[54,1],[14,39],[39,-3],[1,-83],[59,-64],[146,49],[46,-15],[49,13],[32,-43],[123,-8],[41,-28],[60,30],[49,-6],[-21,-94],[45,-38],[26,39],[65,30],[33,-22],[40,53],[20,-62],[-27,-89],[-36,-24],[-61,24],[-68,-22],[-80,7],[-35,-19],[-78,0],[-80,-29],[-137,-4],[8,68],[-19,34],[-55,6],[-63,52],[-41,-4],[-80,13],[-99,30],[-91,-9],[-26,42],[20,80],[26,45],[30,3],[-3,83],[22,4],[19,-74],[33,-5]],[[79312,56679],[-27,-121],[28,-66],[-43,-8],[-2,93],[44,102]],[[77714,56923],[-40,-23],[-16,24],[-3,77],[21,34],[57,-92],[-19,-20]],[[79698,57065],[-1,-37],[-41,-117],[-133,-181],[-26,38],[17,81],[-22,50],[77,109],[83,54],[46,3]],[[78248,57264],[38,-40],[-87,-15],[12,55],[37,0]],[[79297,57300],[-23,-32],[-27,49],[78,39],[23,-34],[-51,-22]],[[78566,57493],[-29,-84],[-40,14],[19,62],[50,8]],[[78686,57477],[-16,-81],[-40,-27],[-40,95],[72,76],[24,-63]],[[78490,57818],[63,-17],[-12,-55],[-38,16],[-13,56]],[[78963,57808],[-34,-39],[-66,-32],[-29,18],[36,55],[93,-2]],[[77883,57838],[-27,53],[46,3],[-19,-56]],[[79206,57883],[37,-18],[-73,-52],[-28,3],[-49,89],[70,10],[43,-32]],[[76833,57944],[51,-26],[4,-49],[-31,-50],[-42,53],[-33,78],[26,41],[25,-47]],[[78400,57982],[36,-46],[20,-54],[-14,-30],[-100,136],[23,44],[35,-50]],[[76764,58327],[39,-123],[48,-89],[-31,-40],[-40,33],[-40,-6],[-14,44],[-51,11],[23,83],[34,-12],[32,99]],[[78867,58394],[33,-72],[4,-101],[-20,-50],[-52,-35],[-41,58],[36,27],[10,48],[-22,52],[-33,32],[2,40],[55,14],[28,-13]],[[76813,58456],[-7,-49],[-53,-6],[23,117],[32,42],[16,-74],[-11,-30]],[[77862,58589],[15,-37],[53,-44],[32,-1],[60,-51],[82,-2],[54,-87],[-12,-81],[54,-137],[59,-29],[42,12],[3,-60],[-17,-52],[-70,-3],[-123,261],[-157,12],[0,71],[-51,42],[-22,49],[-93,95],[-89,36],[63,74],[63,21],[32,-25],[22,-64]],[[77923,58781],[73,-55],[-48,-18],[-25,73]],[[78999,58850],[77,-168],[-72,-50],[-99,34],[2,106],[-49,-63],[-59,33],[-12,70],[117,40],[0,34],[68,2],[27,-38]],[[76517,59141],[-29,-50],[31,-143],[57,-20],[10,-51],[-92,64],[-10,52],[-57,76],[-6,74],[67,18],[29,-20]],[[78626,59284],[-54,-133],[-22,68],[-26,-43],[-40,6],[-8,79],[69,15],[23,-30],[58,38]],[[78715,59572],[-31,-56],[-47,36],[42,36],[36,-16]],[[78375,59653],[-54,-30],[-49,59],[49,85],[52,-35],[2,-79]],[[78968,60329],[102,-71],[15,-136],[-37,-16],[-56,-58],[-25,-3],[-3,-103],[14,-75],[-38,-28],[-47,-95],[-35,-18]],[[78858,59726],[-12,54],[-36,17],[-146,11],[-90,50],[-64,8],[-30,28],[-26,-41],[-72,-55],[-65,3],[-24,57],[-59,-3],[-39,-41],[11,-30],[-88,-64],[-47,2],[-69,30],[-44,-53],[40,-66],[31,-17],[-20,-61],[16,-29],[122,-41],[75,-104],[-32,-32],[-50,91],[-46,16],[-47,43],[-86,-28],[29,-75],[83,-52],[11,-63],[-18,-34],[-58,37],[-11,44],[-45,77],[-106,36],[-23,-43],[62,-102],[64,-34],[-20,-40],[-91,55],[-27,57],[-3,82],[-104,55],[-50,48],[-25,52],[57,41],[-27,56],[-76,-82],[-41,-18],[22,-69],[-43,-126],[7,-70],[54,-59],[12,-52],[45,-62],[26,-108],[67,-63],[66,-107],[26,-81],[-50,-15],[-23,72],[-50,20],[-68,-17],[-6,-42],[51,-63],[23,-69],[-14,-33],[-53,-18],[-28,-86],[54,-7],[56,-29],[11,-49],[44,21],[45,-25],[-10,-39],[47,-47],[70,-18],[-3,-29],[44,-56],[28,5],[66,-33],[45,-54],[-31,-50],[16,-71],[-8,-72],[22,-17],[1,-108],[-46,-8],[-18,65],[-54,21],[-31,81],[-88,46],[-16,-28],[-70,-1],[-51,-39],[33,-64],[-5,-119],[60,-48],[20,11],[57,-60],[-30,-27],[-83,-19],[-10,-51],[-50,33],[23,58],[-47,12],[-18,33],[-91,13],[13,-89],[58,-133],[-6,-30],[40,-63],[5,-58],[31,-81],[-27,-57],[22,-85],[-41,-36],[-79,176],[-55,0],[-35,-59],[-24,-158],[-44,36],[6,101],[-30,90],[-26,47],[-33,12],[7,64],[-41,9],[-43,-34],[4,-117],[-92,17],[-2,86],[-39,55],[-12,69],[44,78],[-3,69],[-48,103],[-56,57],[-40,11],[-2,62],[-65,40],[3,68],[29,0],[46,46],[19,113],[87,-33],[27,17],[34,73],[33,28],[41,-3],[71,-55],[32,-38],[40,-5],[134,-69],[71,-78],[29,88],[48,-14],[58,27],[-42,66],[-82,19],[-78,50],[-17,42],[-40,-54],[-31,77],[-36,-52],[-90,19],[-55,23],[-86,-50],[-63,13],[-24,-23],[-63,58],[-83,-64],[-6,58],[-44,130],[-45,55],[-9,51],[-58,14],[13,55],[80,34],[42,-51],[29,82],[-33,28],[-27,-17],[-41,38],[-80,-2],[-76,89],[-16,45],[-59,27],[-26,63],[15,45],[-46,19],[12,24],[3,29],[7,10]],[[76622,59048],[1,3],[0,4],[0,5]],[[76660,59102],[-9,20],[8,27]],[[76661,59258],[-2,4],[4,2]],[[76915,59795],[125,8],[34,23],[77,-21],[2,3],[14,15],[2,1],[5,-1],[2,1],[2,3],[1,10],[31,1],[60,83],[0,5],[1,2],[0,10],[4,10],[105,38],[76,-17],[11,-9],[5,-1],[29,4],[19,-2],[8,0],[8,3],[0,1],[26,34],[7,-15],[7,-7],[4,-3],[9,17],[9,92],[29,16],[34,-3]],[[78383,60112],[0,19]],[[78860,60315],[22,23]],[[45303,41990],[-25,-26],[-23,53],[32,91],[26,-33],[-10,-85]],[[52163,71573],[-33,-53],[-100,-7],[-19,44],[55,62],[97,-46]],[[52048,71627],[-104,-69],[-36,24],[66,67],[74,-22]],[[51959,71692],[14,-25],[-75,-63],[-37,35],[29,87],[69,-34]],[[52195,71710],[180,-32],[-14,-48],[-111,36],[-43,-81],[-118,42],[-81,75],[15,40],[172,-32]],[[51558,71871],[57,-15],[-18,-54],[-82,-51],[17,113],[26,7]],[[50553,72139],[54,-4],[-49,-81],[-53,9],[-76,64],[124,12]],[[51218,72191],[-111,-58],[-7,50],[108,38],[10,-30]],[[52682,73371],[131,-19],[-5,-41],[-113,-6],[-43,13],[30,53]],[[52994,73744],[34,-40],[63,0],[51,-42],[-4,-40],[-107,14],[-163,143],[63,17],[63,-52]],[[53306,74247],[-113,-17],[25,59],[99,-4],[-11,-38]],[[49324,74294],[-4,48],[43,107],[60,1],[17,-46],[-116,-110]],[[49271,74352],[-73,5],[72,96],[66,4],[-65,-105]],[[53405,74554],[33,-67],[88,-81],[-102,-13],[-34,23],[-30,115],[-74,70],[-37,64],[58,16],[83,-63],[15,-64]],[[48609,75069],[-70,45],[91,16],[-21,-61]],[[54729,75092],[-83,55],[61,28],[57,-50],[-35,-33]],[[54577,75232],[-30,-40],[62,-49],[-162,-68],[-82,34],[-2,107],[52,46],[70,21],[92,-51]],[[49371,77765],[128,-57],[-116,-67],[7,-99],[-113,-13],[-36,126],[130,110]],[[48710,77770],[160,-53],[119,-24],[15,-70],[48,-36],[-118,-97],[-259,-77],[-148,-23],[-145,-46],[-99,15],[-30,36],[-86,9],[-21,71],[154,-16],[45,31],[-76,53],[-94,-6],[-234,23],[-97,70],[87,166],[-25,142],[144,70],[211,-15],[244,-54],[89,-52],[116,-117]],[[58360,78363],[56,-43],[-117,-50],[-30,83],[91,10]],[[49155,78358],[-37,-21],[-191,28],[85,51],[143,-58]],[[59139,78291],[60,-6],[8,-65],[-201,-35],[-52,-36],[-122,26],[-113,-37],[-570,-58],[54,128],[94,10],[234,148],[155,2],[367,117],[11,-68],[101,-32],[20,-75],[-46,-19]],[[48411,78455],[-60,-4],[-122,53],[12,34],[132,93],[83,-103],[-45,-73]],[[48736,78537],[-113,-9],[-63,36],[-19,82],[77,25],[215,-20],[31,-35],[-90,-28],[-38,-51]],[[48577,78840],[-14,-73],[-112,3],[-28,67],[154,3]],[[47626,78939],[-87,49],[87,21],[58,-25],[-58,-45]],[[47822,79248],[-110,-88],[-114,35],[166,63],[58,-10]],[[47850,79549],[-211,-155],[-46,61],[16,66],[155,54],[86,-26]],[[59731,79596],[114,-27],[187,2],[39,-49],[125,-79],[76,-13],[217,-77],[-4,-60],[-260,46],[-13,-64],[241,-56],[-78,-94],[-105,10],[-163,63],[-44,44],[-322,97],[-73,50],[-97,28],[-51,146],[32,20],[179,13]],[[59407,79608],[-62,-75],[-132,34],[52,33],[142,8]],[[47642,79701],[138,-33],[-139,-28],[1,61]],[[59996,79715],[377,-59],[136,-39],[-99,-68],[107,-51],[-298,-16],[-62,75],[-131,37],[-173,-4],[-83,22],[-267,-4],[-3,56],[290,15],[206,36]],[[59702,79892],[298,-67],[96,-90],[-569,-44],[-228,50],[-141,3],[-106,40],[151,83],[26,56],[301,8],[172,-39]],[[60875,80554],[152,-13],[33,-63],[114,-87],[-330,-44],[-347,69],[35,87],[227,67],[116,-16]],[[61168,80846],[167,-14],[-57,-67],[-95,-46],[-113,22],[-95,54],[47,43],[-20,58],[161,36],[88,-27],[-83,-59]],[[62077,81099],[-152,-44],[148,-95],[85,39],[105,-10],[-70,-85],[-230,25],[-133,-33],[-184,38],[49,179],[110,23],[272,-37]],[[61749,81914],[-24,-74],[27,-205],[-84,8],[-9,60],[-81,114],[46,93],[125,4]],[[41256,82418],[317,-55],[-126,-26],[-163,4],[-153,42],[125,35]],[[41757,82435],[206,-35],[-277,-25],[-84,46],[155,14]],[[62049,82539],[-135,-4],[90,84],[136,5],[-91,-85]],[[61252,82749],[81,-54],[149,2],[19,-59],[-446,90],[197,21]],[[62212,83406],[-195,-22],[120,109],[86,-31],[-11,-56]],[[62264,83982],[-200,-145],[-248,-35],[-233,57],[-101,57],[299,90],[319,46],[164,-70]],[[61720,84081],[-352,-71],[20,75],[151,41],[181,-45]],[[62256,84986],[-152,-4],[-184,60],[160,33],[176,-89]],[[61760,85121],[-159,3],[-211,103],[193,31],[177,-137]],[[49281,85224],[-332,5],[-416,72],[-57,91],[212,37],[124,-73],[471,-115],[-2,-17]],[[51290,85628],[418,-88],[181,-70],[-249,-100],[130,-77],[-136,-22],[-128,75],[-556,108],[-116,94],[-198,83],[654,-3]],[[50698,85716],[-305,6],[16,64],[299,-42],[-10,-28]],[[53764,85854],[-302,45],[130,50],[256,-39],[-84,-56]],[[56563,86229],[221,-14],[378,7],[1912,-188],[-163,-55],[-1783,-44],[-60,-20],[-487,-27],[235,-43],[557,83],[1039,-40],[318,15],[507,51],[146,-34],[33,-71],[-129,-53],[394,-6],[154,-40],[420,-25],[476,-119],[-32,-31],[-346,-79],[-49,-53],[-556,-39],[-1521,-57],[-761,-30],[-35,-32],[-701,-77],[-385,-74],[25,-93],[231,27],[165,62],[336,19],[674,83],[489,38],[1203,-46],[-34,-127],[-614,-102],[-69,-63],[41,-53],[294,82],[417,52],[467,91],[43,141],[691,39],[103,-66],[36,-128],[-88,-156],[-213,-128],[-106,-27],[-69,-72],[-111,-19],[-360,-228],[217,39],[-15,41],[388,88],[228,110],[158,21],[98,77],[323,114],[-10,48],[188,8],[54,-49],[-83,-112],[308,79],[578,-55],[128,77],[-10,54],[147,9],[-12,68],[489,41],[492,-2],[331,-60],[393,-49],[133,-81],[110,-27],[-93,-44],[-202,-37],[-143,-88],[-439,-115],[-332,-7],[135,-47],[-35,-80],[-393,-43],[-39,-41],[-318,-7],[-311,16],[-296,-21],[-86,-32],[-203,-2],[-336,57],[-358,-80],[71,-25],[281,86],[549,-90],[285,13],[157,45],[172,-65],[252,-46],[-252,-114],[-258,-23],[-63,22],[-224,-35],[-303,24],[-197,41],[-113,-4],[-188,-110],[-174,-150],[117,-10],[53,-77],[187,46],[107,-41],[-137,-199],[61,-61],[179,-16],[-7,-70],[-228,-21],[-137,-59],[49,-54],[-54,-64],[-277,1],[-127,-39],[45,-38],[-11,-86],[-60,-37],[-96,-145],[-10,-120],[-117,-48],[33,-54],[-90,-37],[-73,-108],[243,0],[-16,62],[158,119],[77,0],[307,-110],[232,-36],[143,-73],[-166,-45],[-231,93],[-290,-48],[165,-38],[-74,-47],[118,-65],[192,-20],[133,-76],[104,-2],[10,65],[176,-15],[114,-54],[22,-178],[-90,-106],[-97,7],[-117,48],[-126,-4],[-193,59],[-236,12],[-203,-94],[-103,0],[-71,-61],[-123,0],[-51,49],[-304,-47],[202,-42],[109,-5],[99,-58],[41,-89],[-52,-79],[309,32],[155,-52],[212,21],[102,-81],[-229,-84],[199,-64],[102,-92],[-43,-43],[82,-79],[15,-86],[-33,-108],[-62,-53],[-111,4],[-66,49],[40,32],[-85,38],[-190,-29],[-204,79],[-44,-36],[129,-30],[160,-74],[-51,-43],[0,-147],[-26,-35],[92,-91],[171,-13],[136,-47],[103,60],[69,-22],[0,-78],[112,-23],[-152,-135],[-97,-18],[-220,26],[-60,103],[-343,17],[-198,-21],[-108,-74],[5,-43],[-77,-43],[5,-49],[91,-63],[154,36],[344,-106],[124,5],[30,-60],[-75,-24],[-14,-116],[52,-22],[-61,-53],[-282,4],[-100,21],[-12,-59],[-284,-88],[-305,63],[-335,151],[-28,137],[-134,-57],[-23,-44],[37,-61],[-132,-41],[-220,-12],[-78,-43],[17,-35],[-96,-46],[-170,-19],[164,-64],[256,-34],[26,-35],[-130,-82],[-142,6],[-113,-65],[-105,-7],[-129,48],[-38,-19],[151,-64],[161,7],[138,62],[123,-47],[136,-26],[60,-106],[-76,-51],[-204,-39],[92,-25],[126,41],[127,-10],[68,-52],[223,-54],[70,-60],[179,-49],[40,-35],[192,-70],[-213,-116],[18,-43],[141,21],[85,-30],[45,43],[111,-14],[-166,-58],[-31,-73],[21,-123],[45,4],[27,99],[59,37],[76,-3],[102,-52],[-24,-42],[26,-89],[-47,-64],[81,-81],[-70,-54],[53,-76],[-43,-102],[97,-21],[-82,-71],[-127,42],[-145,-21],[-27,124],[-72,-140],[-262,1],[-225,107],[-96,118],[-31,171],[-155,118],[-172,24],[-175,129],[-192,42],[-270,-25],[-143,75],[-25,48],[-150,74],[-102,70],[-183,19],[-38,-44],[187,-42],[244,-94],[-18,-38],[131,-78],[134,-31],[92,18],[275,-22],[121,-74],[-6,-49],[-66,-65],[-154,-67],[-88,-11],[-74,-43],[-154,-24],[-259,4],[-109,49],[-150,-29],[99,-57],[-34,-88],[-115,-108],[-329,-58],[23,-47],[124,46],[194,26],[-27,-48],[46,-38],[570,69],[81,-6],[80,-58],[-144,-56],[-104,25],[-125,-50],[-53,-45],[-180,-52],[-77,31],[-80,-4],[137,-78],[139,31],[46,-62],[72,20],[38,108],[130,58],[199,-39],[161,69],[230,65],[-8,-84],[103,52],[220,-72],[353,-83],[454,2],[113,9],[-116,-97],[-78,-20],[-114,14],[-141,-67],[55,-52],[-228,-32],[33,-62],[-76,-65],[-108,13],[-199,-157],[-155,-34],[-6,-57],[-171,-106],[-69,-56],[-48,11],[-59,-60],[-111,0],[-19,-59],[-52,-23],[-292,-31],[-50,-45],[-230,-15],[-67,-42],[-160,-19],[-191,-40],[-70,-52],[-123,-27],[-184,99],[-59,-89],[53,-69],[-137,-11],[-209,-38],[-191,44],[-108,-11],[-18,62],[-95,38],[-33,66],[-98,53],[-29,-46],[75,-19],[83,-159],[-50,-25],[11,-89],[-69,-27],[-93,6],[-67,-69],[-89,-44],[-99,-81],[-66,-15],[30,-72],[-54,-49],[22,-56],[-59,-29],[-90,-132],[-75,-38],[-55,-127],[-64,-85],[-107,-51],[-40,-75],[-127,-55],[-93,50],[0,-80],[-90,33],[-78,-13],[26,-101],[-83,-22],[-103,-86],[-49,-1],[-71,50],[-168,-59],[-21,-31],[-126,-59],[-165,94],[-60,76],[96,43],[-3,30],[130,110],[-154,-10],[-71,29],[-113,11],[-17,-32],[148,-29],[-81,-110],[-7,-103],[-76,13],[-33,-41],[61,-83],[-42,-77],[-146,2],[-25,-37],[-203,2],[-95,-28],[-72,81],[-55,-31],[19,-39],[-56,-37],[-60,46],[-53,-38],[15,-36],[94,-15],[11,-124],[-102,-43],[-23,-77],[-100,3],[-79,60],[-42,-37],[-122,-9],[25,-68],[-16,-51],[164,-114],[26,-109],[-29,-31],[90,-30],[17,-36],[-183,14],[-94,-43],[-170,9],[53,-91],[114,-18],[144,6],[58,-33],[-21,-184],[39,-52],[-140,-42],[45,-58],[-15,-38],[-96,1],[7,-62],[-53,-7],[-137,26],[-53,47],[-39,0],[-52,-28],[18,-38],[67,-30],[81,-79],[-29,-107],[-78,-129],[-89,2],[-13,-32],[-116,13],[4,36],[-49,20],[5,-57],[-108,-76],[37,-39],[87,-35],[50,-83],[0,-46],[-120,40],[-9,-58],[68,9],[56,-63],[-18,-89],[-40,-56],[115,-4],[-28,-85],[-88,-104],[36,-47],[-77,-56],[11,-106],[-79,-44],[-4,-87],[-80,-28],[96,-50],[-20,-57],[-115,-30],[-154,40],[-19,-18],[228,-46],[37,-61],[-15,-83],[-58,-40],[-86,4],[-44,-72],[87,-110],[-18,-110],[-240,55],[-87,13],[-115,-15],[-52,-6],[-21,-20],[-41,-84],[-148,32],[-31,74],[-50,32],[36,43],[64,28],[-5,97],[-105,-28],[-68,48],[-85,3],[-141,37],[83,44],[17,53],[-107,39],[-5,-42],[-74,9],[67,103],[-49,52],[-82,54],[-15,-45],[-83,-13],[-3,-48],[-86,-71],[-75,39],[55,43],[-44,26],[-157,-91],[-188,9],[-38,46],[-17,106],[-208,77],[41,56],[-12,49],[-119,13],[124,87],[-176,-52],[-71,50],[-25,41],[70,24],[-24,103],[-55,-53],[-65,75],[18,61],[87,15],[89,64],[-87,12],[-5,-45],[-55,-15],[-101,47],[30,49],[-76,71],[-122,33],[-112,105],[49,171],[-36,52],[-49,3],[-5,56],[-57,21],[-18,72],[81,57],[-75,26],[-112,-51],[-64,22],[-12,103],[-32,19],[17,71],[-104,48],[28,24],[-83,44],[52,80],[-1,71],[-66,71],[176,29],[91,3],[26,52],[-239,-60],[-74,20],[-38,59],[121,6],[57,-25],[50,18],[90,122],[105,37],[-61,85],[18,29],[99,39],[67,-24],[59,-117],[191,-93],[-12,54],[-51,10],[-95,57],[-6,113],[-75,26],[-100,9],[-46,32],[-97,-84],[-60,-12],[-72,58],[-64,-92],[-32,-86],[-65,-71],[5,-30],[-65,-51],[-119,-2],[-14,137],[33,103],[-24,42],[68,36],[40,54],[132,28],[-77,55],[-57,-75],[-106,16],[43,57],[-90,76],[31,127],[-93,-10],[-48,29],[113,82],[-199,54],[14,85],[-167,2],[-18,39],[64,45],[-74,67],[-73,25],[28,73],[148,58],[98,56],[22,43],[123,67],[118,29],[68,96],[-37,12],[-65,-90],[-221,-104],[-110,-91],[-133,-56],[-118,17],[38,67],[-50,69],[27,93],[86,11],[-11,74],[54,30],[89,-13],[147,12],[-115,102],[184,-3],[-44,36],[-75,-12],[-113,25],[-211,-13],[5,52],[-70,20],[-57,47],[47,44],[165,13],[37,32],[92,4],[354,73],[0,20],[-370,-77],[-151,-5],[-98,-41],[-42,18],[26,113],[165,71],[98,62],[28,38],[189,46],[56,0],[207,-82],[285,16],[-59,124],[77,28],[-65,38],[-86,-64],[55,-26],[-45,-48],[-99,-29],[-60,33],[-143,10],[-42,32],[-185,-16],[-91,-37],[-102,-86],[-94,-47],[-61,57],[75,66],[-57,57],[187,97],[-23,34],[47,53],[-6,56],[99,-27],[119,21],[147,-61],[102,-27],[273,14],[235,-99],[55,28],[-179,60],[-116,66],[3,72],[-162,0],[-304,-58],[-71,37],[-68,-13],[-108,61],[119,64],[93,29],[-32,34],[250,39],[2,-31],[149,-9],[161,38],[84,55],[-34,49],[-89,-2],[57,72],[-13,110],[22,55],[110,-2],[120,-66],[115,3],[-112,112],[0,58],[-161,-79],[-86,23],[78,78],[25,178],[96,101],[132,-9],[-32,71],[-100,23],[36,70],[-168,-47],[-191,1],[-71,30],[-147,3],[-122,21],[-109,101],[-238,84],[-232,17],[-68,21],[-218,166],[100,71],[132,20],[209,-48],[92,12],[155,-9],[130,-35],[231,-120],[113,-47],[54,3],[131,-42],[155,-25],[-43,58],[-83,3],[-136,90],[136,26],[43,30],[-199,22],[81,117],[-103,13],[-176,70],[33,30],[237,-67],[4,35],[-246,75],[-70,-25],[-83,23],[271,109],[-82,29],[-115,-69],[-143,-59],[-51,16],[119,72],[-4,44],[-281,34],[111,65],[170,33],[-156,63],[-230,18],[158,96],[-316,-76],[-23,-56],[-135,-4],[92,-61],[-39,-68],[-258,-53],[-72,3],[-63,49],[-118,-34],[-87,42],[-57,92],[30,31],[-100,46],[183,64],[38,63],[-104,36],[-4,34],[186,106],[70,25],[1,74],[-131,-5],[-164,55],[53,39],[208,2],[-11,33],[87,58],[45,112],[-84,104],[-41,-10],[-186,46],[3,115],[72,79],[-86,48],[-66,75],[-111,23],[44,38],[-40,109],[-149,115],[52,46],[-22,72],[-134,5],[39,75],[-42,53],[143,28],[-244,132],[12,62],[-91,70],[-80,-10],[-321,123],[-43,64],[-159,103],[189,75],[-100,41],[-50,55],[42,48],[-228,-19],[-88,110],[-155,11],[-14,40],[-158,43],[-270,1],[-16,77],[-233,8],[-141,20],[-159,54],[-50,-29],[-296,72],[-117,11],[-94,-119],[-118,-30],[-74,76],[-60,0],[-262,-75],[-113,-1],[3,-69],[-118,9],[-88,39],[59,108],[-184,-32],[-75,-86],[-242,111],[-100,-63],[105,-61],[208,-73],[-743,82],[-34,55],[-86,10],[-136,60],[-204,62],[22,34],[257,53],[66,39],[268,-2],[17,62],[-353,-12],[-386,53],[-71,31],[-213,0],[-262,118],[1,49],[169,74],[703,41],[266,74],[357,5],[254,-17],[41,38],[178,4],[56,42],[-87,77],[-127,35],[-203,-1],[-41,-60],[-130,-31],[-401,-10],[-224,-34],[-394,64],[143,44],[-72,28],[-233,3],[233,111],[-119,3],[-115,-51],[-242,-6],[-36,30],[-191,43],[-336,135],[-45,40],[85,50],[-66,39],[80,45],[20,83],[248,22],[149,52],[285,-16],[23,48],[291,36],[30,31],[180,4],[180,54],[-26,51],[381,61],[521,41],[214,-26],[164,66],[105,79],[101,25],[112,80],[-58,93],[26,78],[-70,42],[77,137],[-146,13],[-214,-51],[-116,38],[-337,-8],[-158,77],[3,98],[256,74],[10,54],[235,36],[35,36],[356,70],[141,134],[315,38],[40,34],[326,70],[298,-17],[266,-56],[215,47],[-136,115],[194,86],[-255,145],[67,44],[464,82],[470,-53],[60,-111],[208,-11],[-133,133],[-375,76],[327,63],[605,52],[411,52],[263,-14],[8,44],[309,32],[135,-33],[204,-126],[18,-127],[-98,-103],[-10,-116],[330,191],[-35,88],[816,-80],[-56,48],[462,-53],[139,48],[-427,127],[-201,220],[802,-34],[105,-59],[576,-117],[468,-82],[32,-56],[294,-97],[327,16],[-84,75],[-140,26],[187,78],[-146,47],[30,47],[331,52],[41,41],[-270,53],[-60,42],[-410,102],[269,26],[1202,-10],[215,-24],[240,-86],[255,-22],[4,96],[-391,50],[-713,25],[-1423,48],[-111,51],[160,54],[501,-16],[-140,46],[127,32],[809,30],[143,43],[353,-54],[403,-129],[479,-15],[251,67],[442,52],[-472,63],[66,104],[241,7],[181,45],[295,-45],[29,64],[572,0],[1055,59],[107,-13]],[[34812,44374],[67,-26],[30,0],[62,-65],[68,65],[40,-29],[17,-22],[16,-22],[14,-10]],[[35126,44265],[-5,-2],[-1,-13],[-30,-17],[-32,-63],[-220,-267],[-52,-30],[-24,-30],[-6,-28],[7,-11],[0,-17],[-11,-33],[-10,-12],[-2,-8],[-1,-12],[2,-8],[32,-77],[1,-11],[-2,-5]],[[34772,43621],[-5,-11]],[[34767,43610],[0,-52],[-33,-5],[-29,-53],[-13,-8],[-2,-8],[0,-10],[0,-19]],[[34690,43455],[-18,16]],[[34672,43471],[-62,-18]],[[34610,43453],[-3,-36],[-2,-7],[-4,-3],[-2,-6]],[[34599,43401],[3,-8],[7,-2],[9,-14],[2,-17],[7,-8],[0,-10],[-2,-4],[-41,-15],[-27,-32],[-21,-74],[-45,8],[-55,-66]],[[34436,43159],[-9,-26],[-16,-15],[-4,-7]],[[34407,43111],[-3,-8],[-2,-10],[-1,-10],[0,-10],[9,-41]],[[34410,43032],[-118,79],[-68,34],[-50,10],[-78,-11],[-96,9],[-59,18],[-89,62],[-81,77],[-57,64],[-54,76],[-74,86],[14,16]],[[33600,43552],[16,60],[2,9],[0,12],[-7,30]],[[33611,43663],[-4,38]],[[33607,43701],[0,13],[1,8],[8,14],[5,20],[-2,39],[2,20],[4,7],[15,6],[4,7],[7,27],[-49,101],[-3,10],[0,11],[2,11]],[[33601,43995],[83,223],[91,245]],[[33775,44463],[11,14],[70,0],[52,0],[54,0],[105,1],[193,0],[7,2],[7,3],[1,4],[3,8],[2,6]],[[34280,44501],[-3,-2],[-1,0],[-1,-1],[-1,-2],[-3,0]],[[34271,44496],[-1,10],[9,13]],[[34279,44519],[-5,7],[0,5]],[[34274,44531],[8,5],[-2,6]],[[34280,44542],[-10,53]],[[34270,44595],[4,7],[2,-2],[1,-1],[5,-1],[-2,3],[-2,7]],[[34278,44608],[2,7],[5,3],[-5,3],[-5,5]],[[34275,44626],[3,2],[7,3],[5,9],[3,10],[-4,8],[-2,0]],[[34287,44658],[0,-5],[-3,0],[2,8]],[[34286,44661],[3,4]],[[34289,44665],[7,8]],[[34296,44673],[-2,20],[-31,8],[-2,15],[-2,4],[-4,4],[-4,1],[-9,-6],[-3,5],[-2,13],[-3,0],[-12,-5],[-8,3],[-6,0]],[[34208,44735],[3,13]],[[34211,44748],[0,7],[-4,4],[-7,0],[-3,3],[3,10],[-1,10],[2,10],[2,9]],[[34203,44801],[-6,5],[-3,-6],[-4,2],[4,15],[-5,22]],[[34189,44839],[-25,57],[-37,37],[-26,12],[-64,57],[-2,13],[-1,6],[-17,44],[-19,5],[-47,100],[-29,0],[-2,14],[-7,6],[-11,4],[-9,6],[2,9],[2,1],[169,-2],[0,341],[11,9],[100,0],[85,0],[84,0],[421,-1]],[[45644,37761],[-246,435],[44,124],[55,49],[4,41],[-18,56],[8,51],[-25,105],[29,75],[74,10],[54,38],[28,-21],[38,53],[28,10],[48,49],[42,61],[8,41],[-31,41],[-39,10],[-28,-39],[-36,59],[15,67],[-48,121],[48,67],[8,63],[30,52],[49,2],[55,87],[39,40],[43,19],[10,67],[54,36],[13,38],[-78,167]],[[45919,39835],[34,-40],[47,-85],[20,34],[116,-105],[110,-113],[55,-78],[93,-166],[44,-48],[77,-169],[-8,-187],[-26,-39],[-17,-86],[-6,-75],[17,-31],[41,115],[24,38],[47,-2],[37,-38],[42,1],[68,-76],[112,-167],[19,-74],[32,19],[67,-65],[47,-92],[11,-125],[-18,-93],[9,-58],[-33,-90],[-3,-17]],[[46977,37923],[-4,-39],[-22,-39],[-3,-7],[-2,-6],[2,-6],[9,4],[7,-4],[1,-43],[19,18],[17,-40],[3,-12],[-2,-9],[-5,-7],[-11,-9],[-22,18]],[[46964,37742],[-11,-47]],[[46953,37695],[-1,-8],[0,-8],[1,-6],[15,-21],[-5,-4],[-9,4],[-25,-13],[-41,-9],[-89,-1],[-16,-33],[-33,-8],[-26,-58],[-3,-20],[3,-9],[12,-12],[15,-46],[4,-11],[-1,-11]],[[46754,37421],[-10,-28],[-22,-96]],[[46722,37297],[-12,-26],[-4,-78],[-33,-56],[-6,-14],[-1,-12]],[[46666,37111],[6,-27],[8,-74]],[[46680,37010],[35,-51],[33,-86],[9,-65],[25,-18],[14,-15],[2,-5],[2,-11],[3,-13],[9,-5],[0,-2],[1,-1],[8,-7],[7,-12],[0,-11],[-7,-18],[1,-47],[36,-27],[77,9],[22,18],[9,-32]],[[46966,36611],[1,-29]],[[46967,36582],[-4,-12]],[[46963,36570],[1,-5],[2,-5],[2,-7],[-1,-7],[-2,-13],[0,-7],[0,-8]],[[46965,36518],[5,-14],[0,-21]],[[46970,36483],[8,1],[5,7]],[[46983,36491],[3,-4]],[[46986,36487],[-7,-18],[4,-11],[6,-10],[4,-14],[1,-4],[2,-8],[0,-5],[-1,-2],[-7,-2],[0,-7],[2,-5],[0,-7],[-2,-5],[-3,-9]],[[46985,36380],[5,-4],[13,-2],[1,-9],[-13,-22]],[[46991,36343],[17,-56],[56,-105],[12,-89],[14,-13],[2,-13],[7,-10],[2,-6],[18,-81],[2,-6],[4,-3],[11,-6],[6,-12],[9,-60],[37,-84],[47,-8],[34,-33],[3,-6],[1,-8]],[[112541,48347],[-13,-41],[-35,-32],[-13,51],[61,22]],[[112609,48487],[41,-67],[-22,-35],[0,-75],[-37,16],[-28,43],[-35,-9],[-40,16],[32,69],[32,26]],[[37074,43816],[-50,-10],[-49,30],[-26,-30],[-158,-127],[-59,-12],[-61,-28],[-19,26],[-21,-54],[-20,5],[-54,-34],[-17,25],[-66,9],[-27,80],[-51,7],[-39,-46],[-10,-94],[-46,-64],[-21,-49],[6,-60],[-51,-17],[-41,-92],[-103,-106],[-19,-46],[-29,-24],[-104,120],[-72,-121],[-11,-43],[-37,-18],[-50,21],[-86,-22],[-3,-57],[28,-210],[-44,-14],[-37,-32],[-14,-105],[-38,-55],[-14,9],[-87,-9]],[[35474,42569],[7,18],[-48,62],[-6,49],[-44,102],[-28,42],[-37,-39],[-37,29]],[[35281,42832],[29,22],[-19,55],[29,166],[-46,72],[-34,-22],[-38,6],[-24,56],[-58,7],[-19,-54],[-77,-24],[-3,67],[-96,47],[-35,31],[-17,52],[-29,1],[-26,77],[-76,44],[-31,15],[-21,5]],[[34767,43610],[1,4],[4,7]],[[35126,44265],[2,0],[26,-25],[45,66],[37,17],[10,30],[71,34],[40,-18],[41,-58],[25,-4],[38,35],[75,-33],[104,-20],[42,27],[27,-11],[87,9],[50,-14],[50,57],[82,16],[35,51],[34,13],[42,-16],[36,-43],[47,-24],[89,9],[69,63],[28,1],[124,-68],[7,-63],[69,2],[6,32],[64,-12],[134,-181],[-30,11],[-38,-65],[16,-43],[36,-5],[31,19],[50,-61],[2,-41],[53,23],[4,24],[82,-18],[59,-136],[47,-29]],[[75947,60852],[-9,-51],[-67,51],[-8,38],[-157,118],[-30,-7],[-111,46],[-90,68],[14,24],[57,-29],[50,-42],[51,-10]],[[75230,61267],[36,-9],[13,-55],[-94,27],[45,37]],[[75323,61336],[14,-42],[-82,-7],[-79,34],[28,39],[73,-2],[46,-22]],[[74572,62113],[157,-160],[-60,0],[-97,160]],[[74429,62332],[-7,-64],[-46,-10],[-12,68],[43,8],[-52,105],[34,18],[9,-73],[31,-52]],[[74464,62514],[40,-54],[0,-45],[56,-68],[-41,-19],[-44,47],[-63,40],[34,25],[18,74]],[[76125,62936],[2,-9],[-13,-13],[-10,-50],[46,-91],[-21,-30],[74,-67],[-42,-22],[64,-117],[76,-24],[11,-48],[-95,-5],[-23,-47],[19,-81],[-45,-54]],[[75620,61089],[-25,10],[-77,104],[-93,70],[-73,102],[-98,27],[-74,62],[-36,0],[-92,-43],[-44,25],[-25,45],[5,52],[-178,151],[-123,169],[5,52],[48,4],[10,42],[-156,208],[-8,106],[16,60],[-36,96],[-66,51],[-55,64],[-69,34],[-24,-39],[-14,-88],[-60,-102],[-40,-98],[-43,-1],[-32,87],[-50,65],[-51,226],[-2,46],[31,-13]],[[74091,62663],[15,-18],[52,2],[49,-24],[12,15],[18,8],[95,21],[60,-12],[15,11],[22,20],[33,80],[14,-25],[9,-13],[13,-12],[2,-2],[3,-1],[2,-23],[81,-39],[8,15],[0,12],[8,0],[52,-21],[3,-3],[28,-28],[17,-2],[38,15],[12,0],[4,2],[4,3]],[[74760,62644],[9,14]],[[74769,62658],[-18,15],[-6,11],[-5,29],[-6,14],[0,5]],[[74734,62732],[8,6]],[[74742,62738],[1,4],[2,5],[22,9]],[[74767,62756],[8,0],[-9,17]],[[74766,62773],[-6,10],[-2,1],[-10,-8],[-5,2],[-3,3],[-2,3],[-4,8],[-3,5],[-4,2],[0,2],[0,1],[2,6],[4,4],[15,10],[11,4],[36,14],[9,24],[27,8],[10,-2],[16,-3],[15,0],[7,3],[8,5],[4,6],[0,9],[-5,12],[-2,8],[2,7],[5,15]],[[74891,62932],[-1,42]],[[74890,62974],[3,13],[5,7],[1,6],[-2,4],[-3,6],[-5,4],[-15,7],[-11,14],[-5,14],[0,15],[6,18],[21,30],[7,0],[26,-3],[8,6],[8,14],[36,10],[13,8],[12,8],[34,14]],[[75029,63169],[7,43]],[[75036,63212],[29,9],[4,1],[4,-2],[14,-13],[18,76],[11,15],[25,12],[4,5],[1,2],[24,-4],[3,-3],[6,-7],[24,-6],[9,-8]],[[75212,63289],[2,-2],[17,-12],[4,-6],[3,0],[28,-4],[8,-9],[13,-23],[48,-18],[53,-106],[53,-54],[32,-1],[19,-26],[37,-77],[95,-12],[25,-56],[89,-32],[32,0],[40,-13],[8,2],[7,5],[5,1],[31,0],[77,-26],[61,45],[18,32],[2,4],[1,7],[2,4],[15,11],[19,-7],[15,-10]],[[76071,62906],[22,14]],[[76093,62920],[4,0],[7,6],[11,4],[4,6],[6,0]],[[41021,46104],[-14,17],[-69,20],[-69,47],[-28,41],[34,40],[135,-87],[11,-78]],[[41420,45695],[-58,90],[-55,33],[-141,-8],[-66,-24],[-54,-7],[-51,-21],[-38,23],[-53,8],[-96,42],[-78,-26],[-28,23],[-60,-59],[-25,-82],[-35,71],[-83,94],[-57,-4],[-44,37],[-16,51],[24,112],[65,37],[37,-6],[134,-73],[79,-28],[29,16],[138,-25],[26,-17],[43,10],[89,-26],[25,19],[24,58],[104,-15],[10,88],[-85,70],[-26,64],[-35,35],[-39,67],[37,31],[-34,79],[29,120],[-33,50],[-78,58],[-77,30],[-25,-14],[-47,6],[-23,55],[47,68],[76,53],[64,-4],[78,19],[79,-39],[66,-46],[25,-34],[73,-4],[43,-29],[23,20],[81,-13]],[[77361,64465],[10,-2],[4,5],[12,5],[27,-9],[33,-98],[29,-5],[14,5],[2,0],[2,-1],[47,-88],[2,-3],[1,0],[5,3],[27,0],[20,9],[33,-27],[9,-16],[2,-11]],[[77640,64232],[-8,-38],[15,-12]],[[77647,64182],[-50,-75],[-71,-42],[-115,-26],[-43,-84],[-61,-54],[4,-61],[-54,-60],[-13,-69],[-74,-100],[6,-49],[-56,-86],[-7,-74],[-64,-42],[-53,-144],[-5,-40],[-44,-51],[-88,21],[-60,-82],[-145,4],[-16,-22]],[[76638,63046],[-20,20]],[[76618,63066],[-100,14],[-53,-21],[-7,2],[-23,16],[-8,6],[-54,-2],[-19,-35],[-91,-79],[-44,1]],[[76219,62968],[-71,-34],[-23,2]],[[76093,62920],[-12,-12],[-10,-2]],[[75212,63289],[-6,26],[-47,52],[-40,145],[-69,-1]],[[75454,64218],[72,-4],[51,-68],[79,-61],[57,-24],[157,2],[121,24],[53,-9],[30,28],[-6,79],[33,54],[99,19],[47,-6],[80,15],[28,65],[46,24],[99,-62],[83,43],[14,31],[52,3],[38,50],[42,90],[0,29],[117,27],[123,-50],[122,45],[115,-136],[155,39]],[[116107,28010],[19,-29],[-67,-73],[-14,-47],[-85,-32],[-6,-25],[-50,-9],[-10,87],[89,41],[44,49],[25,55],[42,34],[13,-51]],[[115560,28098],[20,-57],[-51,-51],[-49,3],[49,98],[31,7]],[[116141,28231],[-13,-52],[-33,-24],[-8,43],[33,67],[21,-34]],[[114822,28760],[23,-51],[65,-42],[4,-65],[30,-34],[40,23],[56,-65],[34,-92],[46,-46],[14,-81],[-44,-72],[-56,-12],[-45,-52],[-22,30],[-90,25],[-27,37],[-42,106],[-107,85],[-9,32],[-75,32],[-27,-25],[-46,30],[-42,0],[-54,41],[-36,65],[32,82],[54,32],[112,17],[27,-11],[38,21],[20,-18],[54,-5],[48,57],[25,-44]],[[116755,28681],[-22,-31],[-13,-78],[-48,-54],[-43,-93],[-73,-84],[-15,-46],[-32,-33],[-114,-6],[-33,-64],[-38,-11],[-41,-42],[-82,-2],[-39,19],[-8,56],[20,35],[78,56],[-1,29],[-66,23],[6,52],[23,25],[14,172],[69,76],[49,86],[14,4]],[[116360,28770],[35,-53],[29,33],[43,-71],[15,70],[33,53],[7,69]],[[116522,28871],[43,5],[48,64],[87,65]],[[116700,29005],[11,-72],[41,27],[42,-16],[-8,-79],[-26,-14],[-39,12],[0,-69],[18,-22],[16,-91]],[[113123,29184],[20,-60],[-14,-23],[-44,52],[38,31]],[[114614,29304],[41,-18],[-51,-106],[-25,65],[35,59]],[[116076,29447],[16,-5],[-4,-80],[-107,-16],[-2,48],[58,61],[39,-8]],[[113571,29358],[-23,-55],[-1,-47],[-70,-153],[26,-56],[-98,-6],[-40,-11],[-53,41],[-25,-26],[-66,66],[24,22],[50,4],[14,21],[5,84],[-17,83],[27,22],[66,99],[41,29],[98,-45],[27,-26],[15,-46]],[[117965,29470],[-6,-45],[-40,5],[0,38],[46,2]],[[116326,29449],[-7,-20],[-56,-18],[-18,-54],[-28,-7],[-33,-55],[-66,-58],[-29,31],[-37,6],[50,72],[61,45],[33,-17],[15,56],[61,58],[54,-39]],[[116437,29364],[-26,-91],[-30,-17],[-38,135],[28,20],[15,-44],[61,120],[19,-24],[-3,-60],[-26,-39]],[[118276,29463],[-45,-21],[-11,47],[56,-26]],[[122052,29383],[-4,-33],[-74,6],[-54,17],[3,37],[35,40],[12,37],[54,-2],[5,-57],[23,-45]],[[113881,29365],[-26,23],[4,102],[64,18],[-42,-143]],[[114472,29444],[-29,11],[7,53],[34,-11],[-12,-53]],[[116567,29518],[36,-23],[165,4],[17,-43],[-6,-74],[-137,-35],[-44,3],[-40,-27],[-49,-10],[-33,31],[31,67],[-6,52],[21,45],[45,10]],[[117816,29539],[108,-51],[-47,-44],[-73,46],[12,49]],[[114040,29537],[69,-21],[11,-60],[48,-84],[24,15],[29,53],[24,6],[55,-25],[18,-50],[45,46],[67,-8],[24,-99],[-4,-100],[38,4],[19,-47],[-15,-26],[-61,-8],[-36,41],[-50,-14],[-7,-40],[-109,-55],[-19,7],[-28,100],[-15,-40],[-54,-69],[-31,15],[-72,-58],[-59,17],[-68,-57],[-86,-36],[-41,22],[-38,-41],[-45,-10],[-94,57],[-11,88],[33,53],[-27,74],[15,51],[74,55],[81,86],[61,-55],[36,23],[42,3],[27,-33],[7,-59],[48,-32],[12,-72],[31,13],[31,-30],[40,57],[46,-1],[38,32],[-89,96],[-20,-14],[-71,74],[-43,76],[9,44],[62,42],[29,-6]],[[119057,29511],[-33,-56],[-26,21],[44,72],[15,-37]],[[115958,29500],[14,-107],[-43,-18],[0,-52],[-37,-23],[15,-42],[-15,-36],[-93,-36],[-61,-44],[-59,-6],[-53,11],[-41,-43],[-82,-50],[-39,20],[-112,35],[-22,-77],[-67,15],[-38,-30],[-55,10],[-34,68],[-26,-30],[-47,13],[-18,30],[-82,0],[-53,-17],[-43,32],[-59,-26],[-58,21],[-8,112],[6,31],[39,54],[32,14],[8,33],[32,-4],[40,61],[24,14],[69,-3],[76,8],[34,-42],[88,-5],[22,-34],[99,-52],[34,-59],[50,-19],[65,56],[60,24],[22,-12],[52,38],[-2,-43],[44,-25],[57,-58],[81,36],[-2,64],[40,48],[61,22],[47,46],[-2,62],[-33,-28],[2,74],[25,26],[46,-57]],[[113096,29493],[81,-125],[-41,-79],[-109,-75],[-26,-56],[-7,-65],[-39,-19],[20,79],[-12,37],[-87,121],[-51,39],[-60,3],[-34,40],[-30,72],[-9,59],[94,-8],[64,-36],[62,13],[43,62],[31,8],[110,-70]],[[118556,29715],[29,-14],[6,-59],[-32,-76],[-31,10],[-38,70],[-2,55],[17,25],[51,-11]],[[119078,29832],[-33,-56],[-17,35],[50,21]],[[117390,29805],[30,3],[15,-48],[-48,-4],[-59,-45],[-36,-90],[-16,21],[-56,12],[-33,-7],[-44,24],[-58,-17],[-43,-59],[-1,89],[24,30],[29,84],[98,-22],[48,11],[67,66],[49,15],[34,-63]],[[117646,29817],[-6,88],[42,-16],[2,-29],[-38,-43]],[[122048,29574],[-56,-68],[-32,-11],[-23,-53],[-60,-77],[-59,-24],[-44,21],[-125,4],[-66,-29],[-16,22],[47,196],[16,19],[36,139],[27,47],[24,81],[83,95],[58,31],[86,25],[70,-6],[52,-103],[41,-12],[-22,-110],[-2,-56],[-39,-63],[4,-68]],[[119278,30115],[-5,-54],[22,-99],[-22,-114],[-32,-68],[-63,-86],[-12,-61],[-31,6],[-19,-41],[-44,2],[-12,79],[30,38],[-17,47],[24,53],[28,109],[36,20],[39,80],[30,87],[42,37],[6,-35]],[[119378,30154],[23,-43],[-78,5],[-6,34],[61,4]],[[118138,30107],[-14,-24],[-40,41],[32,54],[26,-20],[-4,-51]],[[112673,30136],[-40,-7],[12,58],[28,-51]],[[115102,30172],[-28,-48],[-19,27],[1,67],[46,-46]],[[112517,30292],[39,-33],[-16,-49],[-54,-22],[-29,-52],[-64,14],[-32,-27],[-12,-50],[-108,10],[-54,-8],[-118,43],[-30,0],[-19,63],[59,83],[28,20],[88,-2],[113,8],[31,-9],[178,11]],[[113049,30321],[32,-6],[36,-61],[-67,18],[-44,-44],[-18,49],[21,43],[40,1]],[[121992,30301],[-24,10],[-7,62],[31,-12],[0,-60]],[[120408,30575],[-37,-57],[-18,56],[-41,28],[31,57],[53,-54],[12,-30]],[[120342,30560],[21,-40],[3,-79],[-38,-50],[-34,-87],[-47,-36],[-43,57],[-7,32],[11,82],[17,196],[-11,62],[10,33],[64,-78],[-2,-27],[56,-65]],[[120235,30832],[27,-15],[3,-62],[63,-95],[-27,-14],[-36,42],[-17,54],[-26,18],[13,72]],[[109521,30830],[37,42],[91,-59],[22,19],[64,-16],[28,-45],[76,16],[20,102],[40,-36],[51,11],[28,-13],[44,-105],[58,-27],[21,-31],[52,31],[108,-85],[18,2],[29,52],[54,-4],[5,-58],[33,-64],[32,-28],[25,-169],[54,-31],[34,15],[33,-35],[30,34],[55,-42],[80,-12],[68,26],[75,-19],[65,-33],[33,-3],[82,20],[61,-51],[45,16],[37,70],[28,90],[7,76],[26,66],[74,34],[49,-33],[26,-119],[15,-26],[70,-12],[33,8],[25,46],[44,-25],[51,-72],[54,-17],[36,15],[35,-68],[47,-7],[66,21],[53,-25],[38,4],[-8,-52],[46,-163],[31,30],[16,-36],[-7,-89],[-18,-76],[33,-38],[74,-39],[36,-45],[41,-9],[23,-29],[87,54],[106,-13],[19,28],[35,-1],[27,38],[47,-52],[47,0],[46,-33],[33,-47],[-8,-112],[-16,-91],[-18,-154],[40,-130],[48,-28],[4,-68],[-80,16],[-2,52],[-31,32],[-40,-21],[-182,73],[-31,44],[-87,42],[-26,40],[-57,29],[-80,-28],[-33,-49],[-27,17],[-61,-45],[-58,35],[-30,0],[-29,30],[-168,25],[-52,28],[-28,-22],[-17,-47],[-89,57],[-60,16],[-43,-21],[-21,26],[-45,-5],[-59,30],[-59,15],[-81,40],[-171,141],[-144,63],[-88,5],[-22,37],[-103,16],[-33,-27],[-48,33],[-6,43],[-43,-52],[-84,0],[-33,-77],[-49,0],[-143,48],[-34,-3],[-22,36],[-46,16],[-37,56],[-68,46],[-76,6],[-41,19],[-224,28],[-56,62],[8,64],[56,94],[-3,44],[-32,17],[-18,-22],[-46,5],[-31,42],[-56,49],[-36,12],[-72,-21],[-27,10],[-57,-14],[-93,29],[-20,27],[41,63],[34,-89],[66,119],[6,82],[26,-32],[27,14],[16,49],[3,126],[21,98],[64,117],[21,-18],[20,-61]],[[115004,30544],[-9,55],[-6,150],[-1,183],[16,48],[26,-131],[-13,-221],[-13,-84]],[[112029,30999],[7,-57],[-49,-12],[-9,33],[25,38],[26,-2]],[[119680,31073],[31,-102],[8,-50],[-25,-55],[-28,39],[6,86],[-16,65],[24,17]],[[120399,31191],[44,-67],[23,-85],[-12,-25],[15,-110],[-16,-17],[1,-69],[17,-38],[-8,-80],[-19,-63],[-36,-30],[-41,44],[-64,47],[-22,85],[17,74],[-12,26],[27,45],[1,43],[-37,9],[-3,54],[36,-22],[20,45],[34,120],[35,14]],[[119811,31053],[-27,-50],[-11,-89],[-35,-71],[28,179],[29,31],[7,63],[33,146],[28,0],[-27,-176],[-25,-33]],[[108076,31166],[-33,-4],[-76,85],[28,33],[85,-59],[-4,-55]],[[116208,31227],[-29,10],[-7,65],[31,-13],[5,-62]],[[115552,31395],[55,-58],[-4,-150],[-32,-22],[-33,47],[-29,81],[18,98],[25,4]],[[115880,31485],[-51,-79],[-14,-98],[19,-54],[-19,-55],[-24,-10],[-54,46],[-40,-20],[-10,37],[26,135],[24,29],[-29,139],[29,62],[36,7],[61,62],[30,-12],[6,-124],[10,-65]],[[116046,31653],[-64,-46],[-11,-110],[-20,-39],[7,-59],[80,-99],[9,-33],[-26,-51],[-31,-21],[-34,15],[-38,-40],[16,-42],[-35,-93],[-40,30],[-32,-21],[-28,97],[76,183],[35,242],[-3,105],[23,107],[43,52],[65,-108],[8,-69]],[[115997,32071],[47,5],[18,-60],[-32,-81],[-31,-8],[-43,66],[-10,50],[25,40],[26,-12]],[[117589,32128],[-26,0],[-13,39],[37,15],[2,-54]],[[118045,32302],[-9,53],[46,6],[13,-37],[-50,-22]],[[118004,32337],[4,-25],[-37,-68],[-43,-17],[-33,19],[-21,-33],[-26,48],[45,65],[47,2],[50,51],[14,-42]],[[113437,32299],[-26,62],[15,64],[26,12],[-15,-138]],[[113335,32053],[-30,6],[16,60],[-7,76],[-20,47],[-3,45],[15,107],[29,99],[54,62],[-2,-115],[16,-194],[2,-99],[-70,-94]],[[117795,32539],[-38,-4],[10,58],[28,-54]],[[117449,32622],[84,-56],[-18,-65],[18,-35],[25,16],[39,-21],[-7,-146],[-14,-33],[-32,4],[-68,-69],[-78,-58],[-58,26],[-160,132],[-10,49],[-35,48],[-18,53],[-6,69],[10,48],[28,37],[36,-43],[44,47],[46,22],[114,6],[46,-8],[14,-23]],[[109791,32673],[-55,38],[34,45],[40,-36],[-19,-47]],[[110031,32766],[-32,-43],[-15,25],[21,44],[26,-26]],[[118470,32826],[192,-131],[115,8],[55,-67],[34,-22],[17,-56],[4,-77],[12,-40],[38,-2],[42,-104],[-16,-74],[-4,-108],[-82,56],[-72,87],[-111,65],[-56,45],[-8,47],[-27,31],[-132,21],[-17,-21],[24,-65],[-30,-15],[-49,33],[-47,5],[-47,32],[-58,-4],[-3,84],[-28,11],[-72,-91],[-6,-51],[-73,-19],[-32,33],[-45,116],[-40,18],[8,50],[-25,23],[-27,-77],[-16,-104],[-36,27],[-20,70],[11,38],[40,47],[36,4],[1,56],[27,73],[79,-2],[51,16],[32,-13],[102,-4],[72,35],[4,-56],[22,-38],[90,62],[6,31],[65,17]],[[107342,32649],[-1,-40],[-49,-57],[3,60],[-59,99],[0,107],[25,0],[81,-137],[0,-32]],[[110167,32968],[83,-27],[51,-51],[26,-51],[9,-67],[-33,-85],[-6,-81],[-37,-17],[-7,-39],[-30,-10],[-10,57],[-30,39],[-53,-69],[-57,-19],[14,67],[-22,68],[11,58],[-6,81],[18,23],[11,116],[68,7]],[[107241,32838],[-26,-37],[-49,0],[-5,112],[-13,53],[9,42],[83,-118],[1,-52]],[[107051,33229],[57,-142],[-54,28],[-71,97],[7,58],[18,28],[37,-32],[6,-37]],[[117143,33022],[-42,37],[-8,82],[-15,24],[-16,90],[6,42],[29,29],[17,-28],[-8,-101],[33,-114],[4,-61]],[[116893,33435],[108,-15],[110,21],[114,-17],[-6,-33],[-112,-22],[-208,-19],[-6,85]],[[118782,33497],[30,-96],[-36,-50],[-33,-72],[-49,-12],[-24,27],[-54,12],[-69,56],[1,31],[101,70],[81,8],[52,26]],[[116551,33533],[40,3],[150,-57],[62,12],[37,-16],[15,-82],[-81,-20],[-37,-31],[-62,30],[-118,-68],[-52,1],[-28,73],[-2,37],[22,98],[54,20]],[[120741,33561],[41,-14],[120,-21],[112,-4],[76,-45],[121,-2],[54,-21],[10,-34],[-55,-4],[-32,-31],[-43,5],[-30,-17],[-45,21],[-25,-30],[-34,33],[-40,10],[-138,84],[-89,18],[-3,52]],[[110594,33571],[-12,-41],[-39,-13],[-9,60],[36,19],[24,-25]],[[109411,33624],[62,-54],[0,-63],[53,-124],[-4,-80],[14,-105],[24,-108],[35,-68],[126,-43],[22,-50],[-25,-53],[-24,-106],[1,-45],[50,-47],[-14,-46],[-41,14],[-27,-21],[-33,77],[-36,12],[-19,30],[-79,44],[-41,12],[-25,66],[-8,54],[16,80],[-45,64],[-12,138],[-18,22],[-54,13],[-15,30],[-44,-35],[-56,-7],[-29,40],[-32,-7],[-9,47],[12,42],[85,71],[7,52],[-17,55],[42,53],[58,13],[15,-102],[24,-41],[17,80],[-15,73],[59,23]],[[116183,33555],[17,-15],[-15,-59],[-34,13],[-3,84],[35,-23]],[[117815,33660],[26,3],[56,-75],[33,-17],[7,-59],[-38,-27],[-45,19],[-88,-5],[-20,-21],[-44,-4],[-61,61],[10,88],[86,100],[53,-25],[25,-38]],[[116043,33830],[17,-42],[-17,-51],[20,-43],[37,90],[21,6],[50,-32],[-4,-99],[-45,-53],[-32,60],[-26,-27],[-12,-80],[-18,-18],[-25,41],[27,44],[-8,107],[-26,-21],[-40,-100],[-45,-47],[-24,88],[10,104],[23,55],[117,18]],[[110840,33942],[19,-17],[17,11],[23,-29],[8,-63],[-32,-36],[-85,-66],[-23,26],[11,53],[3,103],[59,18]],[[120530,33882],[-13,-40],[-35,67],[30,57],[29,-40],[-11,-44]],[[106749,33963],[-6,-31],[100,-261],[18,-100],[23,-17],[-11,-109],[-55,-12],[-83,74],[-23,43],[-5,49],[-82,204],[18,66],[6,80],[42,4],[44,27],[14,-17]],[[119003,33972],[38,7],[14,-100],[-13,-93],[-21,-75],[-49,11],[-39,66],[-28,165],[81,41],[17,-22]],[[118967,34070],[19,-41],[-27,-22],[-106,-28],[-9,46],[42,21],[39,-13],[42,37]],[[120721,34140],[68,-27],[29,8],[37,-40],[28,32],[83,-107],[50,-121],[38,8],[30,-24],[-31,-57],[-57,-24],[-58,33],[-32,-12],[-30,50],[2,37],[-21,109],[-15,33],[-39,-39],[-59,77],[-35,21],[12,43]],[[117618,34061],[-62,6],[23,98],[29,-51],[10,-53]],[[118907,34258],[-17,-40],[-47,6],[44,66],[20,-32]],[[115527,34296],[10,-68],[-60,18],[6,33],[44,17]],[[122845,32937],[-1,-402],[0,-340],[1,-492],[1,-634],[0,-440],[-12,-108],[-34,-62],[-3,-57],[26,-100],[23,-21],[0,-658],[0,-707]],[[122846,28916],[-47,35],[-89,150],[-44,104],[-97,142],[-85,100],[-38,85],[-115,-10],[-45,-34],[-61,-12],[-28,17],[-31,47],[-42,-23],[-68,-98],[-29,95],[26,59],[2,74],[32,36],[6,68],[32,121],[-52,33],[-28,89],[-75,105],[82,-5],[-54,53],[-72,106],[3,32],[60,-5],[32,58],[-57,68],[2,57],[-81,124],[-28,104],[-10,88],[-35,90],[-2,37],[-43,70],[-33,27],[-5,95],[19,26],[-47,40],[-28,51],[-34,15],[-44,86],[-50,26],[-81,83],[-38,29],[-120,48],[-51,-4],[-178,155],[-34,1],[-88,56],[-25,41],[-69,21],[-26,-7],[-113,40],[-60,-17],[-32,7],[-87,81],[-13,25],[-39,10],[-63,78],[13,136],[-61,-67],[-40,71],[-27,-11],[-17,-59],[-47,49],[-7,95],[-31,-22],[-51,-9],[-17,67],[-28,57],[-16,-33],[-35,50],[-25,92],[20,21],[-5,120],[63,91],[13,76],[-81,-98],[-2,-149],[-36,-74],[6,-53],[-67,-95],[18,-77],[-72,-128],[-22,-15],[-51,11],[-42,-32],[-23,14],[-45,101],[-2,82],[-20,68],[9,34],[47,-9],[20,55],[-38,57],[-8,110],[-31,-2],[-15,-32],[-35,59],[-18,84],[-87,99],[-52,19],[-44,-26],[-29,27],[14,75],[33,59],[31,14],[146,-26],[37,-53],[22,-5],[37,47],[76,158],[52,35],[35,3],[23,-46],[63,-15],[24,-27],[22,17],[38,-40],[11,49],[72,81],[11,59],[-34,46],[31,68],[-89,-42],[-62,-43],[-96,25],[-49,-8],[-87,-41],[-48,24],[-45,-37],[-23,17],[-31,57],[-80,-52],[-26,12],[-26,51],[-53,38],[-40,87],[-17,98],[0,61],[-40,67],[-95,74],[-55,-11],[-22,64],[-19,-47],[-45,-34],[-30,44],[-47,-2],[10,112],[58,35],[28,86],[14,101],[-19,60],[95,44],[39,-6],[112,48],[82,130],[66,52],[64,24],[104,-8],[75,-58],[95,-48],[91,-119],[63,-13],[18,11],[54,-15],[89,17],[48,-55],[-25,-89],[35,-119],[29,-39],[30,-85],[-20,-53],[-9,-86],[-46,-67],[26,-220],[-13,-59],[12,-25],[4,-83],[12,-44],[52,-88],[27,-136],[24,-70],[27,13],[-23,157],[32,72],[39,-61],[3,-163],[13,-82],[27,-12],[20,-44],[21,-120],[40,-53],[48,-20],[82,-14],[57,13],[35,46],[28,68],[31,20],[48,84],[26,16],[21,129],[22,43],[67,52],[26,39],[9,67],[22,61],[-3,40],[24,43],[30,5],[77,-29],[29,5],[74,66],[78,19],[28,23],[-8,77],[-40,39],[15,62],[79,47],[70,70],[101,70],[50,0],[57,-78],[59,-24],[49,-38],[118,-49],[52,-80],[117,-58],[67,-67],[152,-105],[40,-39],[31,-11],[74,11],[17,22],[41,-52],[47,-32],[22,35],[42,-24],[41,-1],[47,-32],[2,-89],[92,21]],[[108904,34298],[17,-52],[-27,-70],[-71,33],[-31,41],[26,69],[23,-23],[33,43],[30,-41]],[[115599,34337],[-6,-45],[-58,8],[-1,38],[65,-1]],[[117739,34288],[20,-29],[-30,-104],[18,-48],[52,12],[42,-49],[-29,-60],[-29,-13],[-36,36],[-10,46],[-61,-40],[-11,62],[11,47],[-26,13],[-37,67],[5,106],[17,8],[38,-50],[28,63],[38,-67]],[[117579,34390],[24,-77],[-10,-76],[-28,-17],[-28,53],[2,93],[40,24]],[[106583,34228],[-36,-41],[-28,27],[18,57],[2,57],[31,57],[21,-66],[-8,-91]],[[108601,34330],[-54,-26],[-59,34],[24,56],[40,6],[49,-42],[0,-28]],[[118961,34541],[125,-50],[55,-45],[16,-72],[-39,-71],[-30,35],[-51,-21],[-27,13],[-28,57],[-31,9],[-5,38],[-35,61],[-27,-28],[72,-120],[29,14],[23,-44],[-31,-38],[-51,-8],[-21,63],[-39,4],[-47,39],[-53,7],[-14,95],[34,-10],[50,37],[47,6],[78,29]],[[106611,34373],[-18,-26],[-40,93],[-24,77],[24,23],[35,-119],[23,-48]],[[108919,34549],[34,-38],[35,-83],[31,30],[31,-60],[3,-59],[-33,19],[-44,54],[-25,2],[-50,-37],[-40,56],[31,56],[8,68],[19,-8]],[[106636,34653],[81,-21],[3,-36],[-59,-8],[-58,12],[-5,35],[38,18]],[[108381,34862],[-16,16],[7,78],[20,26],[32,-51],[-5,-55],[-38,-14]],[[108487,34951],[-16,0],[-28,65],[6,68],[17,4],[41,-85],[-20,-52]],[[108175,35161],[47,8],[98,-103],[12,-41],[-18,-52],[-29,48],[-30,17],[-66,4],[-47,-16],[-58,58],[36,62],[-11,58],[33,37],[33,-80]],[[108326,35190],[52,-101],[-33,-26],[-69,81],[-44,38],[-60,6],[30,70],[34,5],[90,-73]],[[108753,35249],[-8,-56],[-32,-40],[-38,18],[-18,48],[77,61],[19,-31]],[[108921,35285],[24,-63],[3,-99],[-25,-63],[-44,15],[-13,51],[1,73],[-52,-34],[-26,8],[-6,47],[64,67],[29,-15],[45,13]],[[108107,35140],[-25,-23],[-25,23],[-39,84],[4,75],[-16,47],[7,70],[28,-3],[69,-101],[-10,-87],[7,-85]],[[106158,35483],[42,-26],[80,-180],[38,-26],[17,-45],[39,-52],[-14,-50],[-7,-162],[-22,-49],[-46,5],[-36,155],[-49,56],[-37,24],[0,41],[-31,97],[-28,63],[-58,94],[59,-8],[53,63]],[[108020,35515],[43,-10],[54,-40],[8,-120],[-30,2],[-39,72],[-76,25],[-50,80],[26,23],[64,-32]],[[116756,35579],[45,-4],[-5,-52],[31,-61],[-40,-39],[-18,-45],[-24,-107],[-53,-124],[-28,-21],[-61,-84],[-61,-168],[4,-19],[-75,-64],[-96,-30],[-124,-24],[-44,-28],[-24,23],[-69,-3],[-57,16],[-64,118],[-37,-20],[-56,5],[-84,-7],[-17,10],[-93,0],[-60,-17],[-49,8],[-20,-20],[-71,-14],[-42,59],[-62,9],[-8,-32],[-132,-17],[-17,-28],[-50,22],[-36,-15],[-82,66],[-68,-1],[-48,-32],[-40,-61],[-55,-121],[-17,-109],[-23,-48],[-10,-84],[8,-96],[27,-182],[59,-142],[32,-32],[33,21],[33,-43],[32,-81],[-6,-68],[42,-110],[49,32],[33,-33],[37,9],[33,-25],[35,61],[13,73],[26,34],[89,179],[61,29],[21,-75],[82,-13],[27,21],[41,-3],[19,78],[20,21],[155,8],[40,-25],[74,18],[-10,41],[-40,8],[16,45],[78,8],[20,26],[62,-8],[63,-45],[19,-72],[-21,-84],[-6,-66],[-27,-31],[-28,17],[-69,89],[-95,-27],[-34,-115],[-28,-31],[-65,-136],[-43,-68],[-70,-76],[-56,0],[-32,-31],[-60,-33],[-17,-72],[-23,-46],[-59,-9],[-37,68],[-50,19],[6,-84],[80,-87],[7,-46],[24,-28],[31,-1],[48,-66],[23,-79],[52,-124],[-1,-48],[62,-71],[5,-36],[46,-38],[-13,-69],[40,-57],[35,-20],[-17,-50],[-27,17],[-42,-98],[16,-47],[-11,-48],[-24,-16],[19,-62],[40,-45],[34,-2],[33,-83],[49,-15],[-12,-38],[19,-106],[54,-9],[21,27],[14,-63],[-3,-120],[-50,-55],[-34,-2],[-31,52],[-39,-23],[-27,11],[-71,-30],[-51,-33],[-23,-66],[-2,-50],[25,-53],[-44,-39],[-65,26],[-46,-14],[-57,58],[-27,54],[-1,46],[15,87],[6,130],[19,-4],[16,92],[-28,40],[-76,34],[-43,99],[-32,7],[-21,41],[-81,119],[-9,57],[42,110],[33,45],[-7,80],[13,53],[-6,140],[-23,57],[-88,28],[-73,-41],[-16,-41],[-119,-125],[20,-132],[39,-32],[13,-32],[-10,-72],[10,-175],[9,-38],[-35,-125],[0,-105],[11,-41],[2,-101],[-10,-36],[16,-52],[-1,-63],[17,-32],[-22,-126],[-30,-26],[0,-75],[-17,-97],[44,-116],[31,-163],[-17,-9],[-35,66],[-85,-53],[-71,17],[-42,-78],[-61,9],[-5,39],[-33,-10],[-12,46],[-30,23],[-33,102],[11,102],[31,73],[25,117],[-14,81],[39,116],[13,155],[-10,44],[12,168],[-18,1],[-48,157],[20,84],[-5,52],[-76,42],[-35,-38],[-69,-13],[-39,-36],[-33,135],[5,33],[-15,82],[-19,45],[34,23],[11,119],[-41,-1],[-6,53],[25,96],[35,-16],[38,44],[13,39],[36,44],[-3,148],[30,119],[54,46],[5,66],[-22,83],[9,74],[-13,115],[11,107],[48,74],[12,82],[20,70],[55,70],[21,59],[28,-119],[22,28],[-29,112],[-12,85],[12,225],[-23,-10],[-35,44],[14,49],[39,-65],[19,-8],[23,99],[-36,79],[29,55],[-7,34],[24,81],[46,26],[-3,94],[14,46],[48,26],[19,29],[16,101],[26,-19],[-3,-56],[49,-47],[39,-9],[44,130],[19,-8],[27,55],[9,89],[-3,60],[57,22],[72,-27],[42,-45],[44,17],[18,-15],[20,-69],[57,-36],[114,22],[17,-42],[44,19],[56,-32],[84,8],[66,-34],[85,-92],[27,25],[19,65],[49,-22],[104,-1],[75,-37],[104,-21],[44,4],[23,36],[55,29],[62,58],[30,91],[78,6],[-18,103],[27,34],[27,-9],[61,54],[-5,61],[76,90],[11,-37]],[[107823,35816],[20,-68],[-23,-104],[-52,-44],[-45,35],[-26,103],[18,82],[35,-5],[45,44],[28,-43]],[[117901,35899],[-3,-28],[-40,-102],[-30,-32],[-5,-64],[34,-15],[28,-52],[-8,-56],[16,-55],[-24,-149],[-30,-87],[-23,-8],[-75,-88],[7,-69],[53,-56],[49,44],[5,86],[46,69],[39,7],[15,39],[-21,65],[18,46],[67,79],[37,27],[71,20],[28,-5],[-13,-77],[21,-25],[-16,-145],[0,-61],[-21,-10],[-78,-77],[-48,-19],[-6,-48],[-32,-31],[37,-64],[48,-19],[18,-24],[76,-36],[7,-129],[47,-13],[14,-42],[-123,51],[-25,37],[-80,3],[-43,39],[-74,18],[-19,-29],[-11,-83],[16,-96],[-15,-50],[3,-52],[48,-182],[9,-63],[72,-183],[68,-112],[-59,16],[-1,42],[-77,52],[-75,215],[-55,48],[-13,37],[10,170],[-8,72],[14,71],[-55,89],[-17,86],[11,110],[27,58],[-46,33],[-6,105],[-25,44],[-8,63],[52,153],[-9,35],[20,75],[5,60],[41,107],[87,153],[53,12]],[[106088,35910],[21,13],[28,-33],[-5,-75],[-44,95]],[[118107,36158],[38,-105],[-20,-110],[-29,-95],[-28,-34],[-56,-9],[-38,41],[-5,87],[-13,13],[47,119],[55,85],[49,8]],[[105598,36341],[27,-71],[41,-20],[60,-97],[76,-68],[14,-79],[-27,-12],[-40,19],[-26,45],[-66,82],[-52,11],[-89,112],[46,88],[36,-10]],[[110548,36307],[-26,23],[47,59],[-4,-59],[-17,-23]],[[109375,36385],[12,-45],[-44,-12],[11,57],[21,0]],[[113922,36558],[-34,35],[-14,40],[12,38],[44,-14],[-8,-99]],[[114011,36690],[-42,43],[24,23],[18,-66]],[[113863,36710],[-3,-28],[-48,25],[-46,7],[6,53],[48,-17],[43,-40]],[[116972,36720],[15,-48],[-16,-27],[-46,52],[6,59],[-31,38],[27,43],[45,-117]],[[113939,37010],[-42,47],[26,53],[33,-43],[-17,-57]],[[113939,37119],[77,-5]],[[114016,37114],[11,-59],[-37,-13],[-51,77]],[[110342,37071],[32,-55],[6,-76],[-34,-118],[-54,-20],[-31,27],[33,75],[-45,25],[-30,96],[71,103],[52,-57]],[[113887,37116],[-24,-22],[6,-46],[97,-155],[19,-59],[-29,-41],[-38,-6],[-39,23],[-20,-34],[-24,16],[-82,7],[-7,-56],[47,-73],[47,-1],[-2,-39],[-27,-42],[-6,-75],[39,-7],[9,-43],[52,-10],[15,-55],[-8,-114],[57,-34],[16,-93],[59,-88],[33,-61],[10,-65],[-45,-44],[-44,-95],[4,-70],[20,-65],[34,-21],[44,-81],[114,-104],[38,-69],[34,-15],[64,-92],[30,-88],[29,11],[28,-24],[-1,-47],[-78,-97],[-43,25],[-47,-26],[-52,22],[-92,22],[-82,67],[22,-77],[-14,-43],[-32,31],[-39,-17],[-26,-44],[-6,-54],[-41,-94],[0,-48],[-39,-82],[-15,-144],[20,-56],[-17,-36],[-19,-106],[20,-78],[-5,-75],[46,54],[-8,-128],[-13,-41],[29,-56],[-49,-8],[-13,-41],[-34,-8],[-25,39],[-19,-58],[-34,-45],[-53,-137],[-25,-22],[-53,-13],[-21,-64],[-59,-35],[-27,-37],[7,-78],[-89,-60],[54,-125],[-2,-70],[-39,-46],[13,-60],[52,14],[28,-34],[-24,-179],[-88,-2],[31,-45],[-10,-39],[2,-107],[-13,-62],[-35,-52],[-11,44],[-39,5],[30,-82],[28,-45],[-39,-23],[2,-57],[-31,-26],[-30,-89],[-16,-97],[-50,-16],[-30,-39],[-66,-51],[-201,-128],[-70,-52],[-63,-62],[-41,24],[9,74],[-9,97],[1,106],[-27,75],[-6,54],[-42,-6],[-56,54],[-61,31],[-25,-5],[-60,-46],[-65,-26],[-31,10],[4,97],[-9,70],[-60,1],[-9,-34],[-37,-5],[-40,43],[-22,62],[-55,52],[-34,-57],[28,-48],[-155,-161],[-35,-8],[-51,60],[-34,16],[-39,-10],[-33,-33],[-80,-117],[-32,18],[8,112],[-11,106],[7,80],[-28,95],[-68,-63],[-52,50],[-57,-5],[-90,-77],[-60,-13],[-58,44],[-36,-42],[-17,104],[-41,22],[-94,-79],[-22,66],[15,68],[-15,90],[6,67],[-24,59],[-7,92],[-17,56],[13,79],[-21,92],[-46,29],[-12,65],[27,24],[15,52],[13,132],[-15,90],[-37,39],[-3,74],[-33,11],[-39,82],[-22,-19],[-31,22],[-6,33],[-55,30],[-12,-40],[-51,36],[-10,96],[44,29],[-7,42],[-31,-6],[-53,58],[-12,130],[10,53],[23,-5],[3,79],[-11,63],[55,-5],[-51,63],[-25,81],[-70,60],[10,64],[-14,53],[7,68],[-20,46],[-7,73],[32,31],[15,70],[-20,90],[51,150],[0,71],[14,38],[59,66],[37,88],[-3,78],[84,33],[32,58]],[[110854,35832],[-44,-120],[6,-46],[39,-33],[-2,-77],[14,-40],[47,-65],[16,-39],[34,-15],[18,-57],[44,-59],[29,-11],[33,-83],[36,-32],[29,-49],[49,-36],[24,26],[64,9],[26,56],[133,49],[58,-39],[72,-10],[45,21],[41,-24],[24,10],[33,65],[71,25],[33,133],[-2,49],[112,73],[114,-10],[32,20],[66,-29],[-20,-75],[45,10],[26,-26],[63,-24],[28,-35],[41,12],[56,-50],[61,66],[38,64],[56,14],[40,-25],[75,47],[56,-40],[25,21],[-2,41],[41,97],[1,79],[14,25],[48,26],[5,74],[-26,8],[-10,61],[10,69],[55,31],[78,113],[26,8],[-12,62],[-40,11],[3,136],[68,132],[37,-33],[48,26],[20,78],[-13,30],[14,93],[31,53],[-20,101],[1,63],[14,93],[-19,25],[32,87],[10,79],[64,71],[24,44],[40,-20],[14,-31],[41,67],[39,-14],[32,17],[30,-55],[40,19],[71,9],[48,-6],[137,2],[20,13],[75,-96],[60,-25]],[[117449,37323],[-7,-78],[25,-52],[-44,-79],[0,-74],[-18,-26],[-36,24],[21,39],[27,90],[-31,15],[-2,97],[11,70],[31,6],[23,-32]],[[105441,38009],[28,17],[72,-34],[48,-39],[16,-61],[75,-82],[63,-14],[28,-21],[110,-6],[68,40],[55,-4],[114,-73],[87,59],[10,-5],[54,-104],[94,-114],[20,-62],[16,-97],[18,-49],[59,-35],[28,-45],[-7,-153],[17,-60],[66,-21],[11,-26],[65,-55],[13,-69],[33,-48],[62,-34],[85,-77],[72,-86],[46,-44],[39,-67],[61,-29],[13,-37],[75,-106],[14,-134],[43,-31],[29,18],[40,-88],[28,-132],[20,-50],[48,-74],[40,-14],[73,-83],[12,23],[-32,77],[3,56],[37,31],[55,-5],[6,-45],[90,-108],[30,-168],[18,-41],[64,-33],[46,10],[25,-16],[92,-128],[38,-31],[12,-87],[20,-41],[-2,-71],[17,-51],[71,-110],[48,-41],[44,7],[81,-15],[29,-31],[39,-72],[7,-73],[-138,-113],[20,-18],[53,24],[65,71],[35,15],[22,50],[54,29],[68,-62],[18,-36],[46,-40],[19,-44],[15,-128],[-2,-29],[-47,-3],[-67,-62],[-10,-40],[10,-43],[-36,-82],[31,7],[42,-32],[-7,-31],[-59,-26],[-17,-79],[1,-51],[33,-18],[72,-114],[72,-56],[44,35],[98,-59],[63,25],[8,-99],[18,-71],[4,-139],[42,-202],[29,-39],[10,-69],[42,21],[38,-51],[0,-52],[-50,-109],[10,-55],[44,90],[89,-60],[32,21],[41,-14],[120,-20],[-5,-93],[24,-67],[41,-18],[5,-106],[33,-55],[53,-11],[15,-47],[3,-137],[-51,-61],[-19,-53],[-24,-136],[12,-44],[40,-56],[-6,-47],[-26,-59],[-22,-145],[2,-37],[34,-105],[-14,-235],[16,-58],[-17,-60],[-1,-134],[-13,-78],[-1,-168],[-18,-107],[-69,11],[-21,94],[-23,-1],[-67,120],[-23,4],[-5,-67],[-22,-7],[7,-62],[-31,-64],[-17,22],[-108,85],[-31,52],[-34,22],[-34,-43],[60,-154],[4,-75],[-53,1],[-8,54],[-60,91],[-32,31],[-16,64],[-56,59],[-45,82],[4,30],[-40,27],[4,50],[-78,113],[-59,29],[-16,24],[-37,0],[-8,34],[-84,123],[-48,45],[-49,31],[-16,45],[-68,93],[-148,171],[-11,39],[8,53],[-16,32],[-15,93],[-62,57],[-163,185],[-28,54],[-56,146],[-35,116],[-85,94],[-70,156],[-34,120],[20,64],[-11,90],[-29,48],[-52,136],[-6,53],[-23,41],[-1,69],[-62,41],[8,44],[-23,26],[18,70],[-23,37],[-20,100],[-55,92],[-60,130],[-72,100],[-20,78],[-5,86],[-52,78],[-47,37],[-31,5],[-35,49],[-28,-17],[-39,36],[-3,85],[-16,130],[-20,18],[1,77],[-23,34],[-2,55],[-22,122],[-50,184],[-22,62],[33,64],[-23,89],[-38,0],[-47,108],[-35,33],[-34,8],[-78,94],[-65,55],[-90,23],[-33,81],[-6,159],[-16,122],[-69,38],[-34,65],[-23,112],[-34,19],[-63,172],[-38,51],[-14,47],[-47,41],[-77,-2],[-49,50],[-92,185],[-30,14],[-39,48],[-41,74],[-110,174],[-21,12],[-51,112],[-30,129],[-20,50],[-2,46],[-35,63],[20,63],[-21,94],[82,63],[34,-28]],[[105353,38173],[42,-18],[-17,-38],[-25,56]],[[67126,67960],[-62,24],[25,76],[102,114],[49,-73],[-30,-57],[-84,-84]],[[104811,39004],[28,-125],[-14,-129],[-31,3],[-36,114],[-26,13],[10,105],[53,37],[16,-18]],[[104730,39032],[-10,67],[31,19],[11,-38],[-32,-48]],[[104650,39462],[-25,-47],[-24,45],[33,40],[16,-38]],[[104419,40197],[-38,-8],[-8,45],[20,38],[27,-38],[-1,-37]],[[104324,41215],[6,-70],[-8,-60],[-25,-45],[-42,42],[-11,122],[21,49],[38,27],[21,-65]],[[104509,41900],[-46,56],[26,30],[20,-86]],[[104367,42458],[-4,99],[20,0],[-16,-99]],[[104490,42931],[19,-19],[-7,-110],[12,-62],[-23,-138],[-44,-32],[23,-72],[10,-103],[0,-112],[-19,-49],[-36,-4],[26,-62],[-8,-73],[-48,-80],[-12,-77],[23,-59],[-14,-97],[2,-55],[-15,-70],[-35,47],[-12,85],[-16,14],[-9,94],[40,89],[0,61],[58,44],[-6,63],[-23,32],[1,147],[15,31],[-9,97],[25,32],[2,100],[18,77],[-2,124],[36,118],[28,19]],[[102624,47915],[-34,7],[14,102],[31,-26],[-11,-83]],[[99889,53211],[-2,0],[-26,-13],[-7,3],[-7,18],[-6,-6],[-6,-11],[-6,-8],[-2,-32],[-24,-26],[-16,-33],[-28,-33],[-4,-3],[-7,-4],[-20,-7],[-36,-87],[-10,-9],[-22,-9],[-10,-11],[-6,-17],[0,-16],[12,-62],[-65,-116],[25,-92],[-18,-80],[-38,-18],[-8,-24],[-5,-58],[-25,-37],[1,-51],[75,-63],[22,-27],[10,-30],[5,-8],[8,-5],[28,-2]],[[99671,52234],[17,-28],[12,61]],[[99700,52267],[7,6],[7,0],[8,0],[1,-4],[0,-5],[0,-6],[2,-5],[7,-5],[7,-4],[13,-3],[6,-5]],[[99758,52236],[7,-21],[4,-7],[39,-37]],[[99808,52171],[83,-74],[18,-4],[39,-10],[62,-153],[33,22],[24,-51],[5,-7],[35,-26],[8,-7],[4,-12],[7,-8],[29,-11],[8,-10],[16,-23],[41,-36],[18,7],[16,26],[11,8],[29,-8],[8,-10],[6,-10],[24,-15],[97,-105],[47,-2],[48,18],[21,-44],[17,-85],[47,-5],[52,-27],[47,1],[66,-70],[13,16],[9,17],[2,8],[1,8],[-4,32],[45,4],[43,-8],[98,-65],[3,-3],[3,5],[6,5],[-3,17],[-10,17],[-4,10],[8,4],[17,2],[9,4],[21,-7],[11,1],[8,8],[20,35],[32,-24]],[[101102,51526],[4,-5],[4,-15]],[[101110,51506],[4,-2],[12,3],[5,-5]],[[101131,51502],[11,-27]],[[101142,51475],[9,-7],[109,-29],[31,-79],[-1,-48],[-9,-28],[-4,-13]],[[101277,51271],[3,-14],[5,-5]],[[101285,51252],[45,-18],[16,9],[6,-2],[4,-10],[9,-7]],[[101365,51224],[29,-16]],[[101394,51208],[11,-36],[9,-7],[9,-3],[7,-4]],[[101430,51158],[10,-20]],[[101440,51138],[29,14],[16,-9],[1,-18],[0,-23],[11,-17],[35,-13],[120,73],[34,-26],[9,-98],[42,-51]],[[101737,50970],[50,43]],[[101787,51013],[9,2],[13,7],[12,-7],[31,-27],[17,-2],[2,-3],[2,-3],[4,-2],[6,0],[9,8],[22,9],[7,-2],[2,-4]],[[101923,50989],[0,-9],[6,-5]],[[101929,50975],[8,2],[3,0],[12,-7],[23,-18],[25,-13],[78,-65],[4,4],[2,8],[3,5],[22,-7],[11,4],[10,9],[7,12],[4,14],[62,52],[2,-22],[5,-30],[3,-18],[6,-21],[9,-17],[11,-6],[21,4],[11,4],[4,-5]],[[102275,50864],[6,-19]],[[102281,50845],[6,-4],[16,-11],[10,4],[21,42],[25,6],[13,-3],[40,-29],[36,29],[12,-11],[6,-2],[6,5],[2,9],[3,13],[5,4],[14,-10],[6,0],[19,15],[52,-58],[14,24],[11,29]],[[102598,50897],[12,80]],[[102610,50977],[17,48],[6,28],[2,11],[1,12],[-6,64],[-1,10],[-3,10],[-9,19],[-9,31],[-8,20],[-8,16],[-6,6],[-6,5],[-6,6],[-7,22],[-7,8],[-1,5],[0,6],[0,4],[6,18],[1,44],[18,64],[-5,107],[34,89],[19,83],[-2,26],[5,11],[-1,7],[-4,4],[-4,2]],[[102626,51763],[-10,4]],[[106138,51987],[-6,-90],[18,-30],[-8,-80],[-42,4],[-62,-92],[-27,-15],[-47,-67],[14,-130],[89,-173],[-42,-23],[-63,50],[-1,43],[-39,62],[-65,7],[-29,-37],[-40,3],[-102,-24],[-49,-43],[-48,-100],[-42,-21],[-27,-53],[-45,-51],[-38,-9],[-38,-74],[-50,-27],[-21,12],[-33,-38],[-31,-80],[9,-51],[-7,-90],[20,-32],[-4,-57],[21,-45],[-54,-68],[3,-114],[-18,-11],[-42,-97],[-33,-45],[-27,-10],[-33,-50],[-22,-91],[11,-45],[42,-22],[8,-69],[-46,-174],[-28,-25],[-16,-67],[-25,-31],[-46,-142],[-38,-198],[-34,-95],[-39,46],[-75,12],[-24,37],[-49,8],[-20,-26],[-39,-4],[-34,73],[-25,-23],[20,-84],[8,-103],[21,-56],[-18,-207],[-3,-113],[-29,-70],[-40,23],[-23,-30],[14,-76],[-36,-68],[8,-161],[25,-78],[1,-87],[-30,-30],[-47,-83],[-43,-23],[-55,75],[-23,-79],[-28,-26]],[[102976,48223],[-9,-27],[10,-90],[-26,-16],[34,-183],[-32,-8],[-45,41],[-45,-71],[-31,87],[7,70],[-5,84],[-24,6],[-23,-65],[-1,-49],[23,-38],[-17,-86],[-71,19],[-55,-27],[-26,79],[8,74],[-19,52],[-4,106],[-36,-47],[-30,-92],[-52,-66],[-50,-46],[-89,-27],[-50,-30],[-54,-6],[-52,-48],[-55,-91],[-31,-94],[3,-58],[41,-144],[19,-118],[-31,-23],[-72,-98],[-13,-109],[-79,-63],[-11,-55],[-35,-80],[-40,-34],[-201,-90],[-74,-46],[8,115],[-42,16],[-92,-103],[-45,-137],[30,-24],[-43,-64],[-76,-94],[-50,-118],[-42,-70],[-34,-86],[-45,-86],[-54,-69],[-54,-93],[-25,-64],[-115,-82],[-62,-58],[-70,-118],[-5,-30],[-68,-132],[-57,-38],[-75,-74],[-68,-39],[-93,-88],[-68,-108],[-18,-64],[7,-37],[36,-35],[-21,-142],[-120,-107],[-51,-20],[-37,-33],[-103,24],[-30,-13],[-38,16],[-26,-29],[-36,-174],[0,-32],[-60,-86],[-34,4],[-30,-65],[-21,84],[-32,10],[-85,-40],[-43,-37],[-37,-63],[-34,-146],[-31,-83],[-14,-178],[21,-192],[33,-86],[-8,-137],[-20,-63],[16,-157],[28,-91],[2,-52],[-18,-70],[-40,10],[-13,-40],[24,-58],[38,-8],[41,-36],[8,-50],[-6,-93],[-18,-81],[-9,-144],[-13,-98],[-28,-124],[-112,-280],[-30,-156],[-12,-119],[12,-93],[16,-22],[12,-143],[-6,-129],[9,-354],[-4,-59],[-36,-15],[-87,39],[-52,1],[-35,-35],[-26,-62],[17,-80],[-31,-42],[-41,-103],[-43,-83],[-26,-120],[8,-35],[58,-101],[-49,13],[-43,-19],[-87,-65],[-66,-14],[-80,-93],[-23,-64],[-1,-60],[-15,-59],[-3,-112],[-25,-70],[-99,-91],[-20,-34],[-42,-11],[-51,-49],[-74,32],[-35,35],[-87,114],[-115,229],[-59,107],[-11,55],[-58,200],[-19,103],[10,129],[21,-13],[-13,145],[-31,40],[-12,76],[-26,43],[-48,212],[-51,155],[-34,205],[-52,200],[-31,33],[-32,136],[-93,177],[-36,26],[-24,115],[-68,204],[-28,116],[-5,64],[-19,21],[-40,289],[-38,312],[-42,108],[-14,106],[-15,36],[-13,105],[-32,68],[-18,112],[-58,48],[6,41],[-36,47],[-1,46],[-46,52],[13,50],[-21,113],[-2,57],[-46,38],[-30,133],[-38,118],[-55,102],[-1,59],[-25,104],[3,42],[-25,67],[1,114],[-18,96],[5,84],[-20,196],[-26,70],[5,40],[-19,37],[-2,113],[-41,143],[-14,78],[-1,133],[-33,91],[11,70],[-25,78],[-1,55],[28,35],[-13,101],[-26,39],[-20,131],[5,49],[-15,77],[19,35],[-30,50],[-2,86],[-24,60],[6,68],[16,37],[15,166],[51,143],[3,66],[22,93],[-62,167],[6,56],[-74,84],[-12,76],[18,61],[50,48],[18,66],[-70,8],[-32,17],[12,78],[-21,76],[13,120],[35,33],[43,-29],[16,33],[-49,35],[-41,5],[-28,-30],[-104,25],[42,-55],[-4,-65],[-18,-41],[-51,-18],[16,-56],[-1,-62],[19,-49],[31,-36],[-21,-107],[-53,-103],[0,-68],[-43,-42],[-25,-4],[-62,-62],[-17,0],[-99,-90],[-54,-22],[-129,-86],[-54,-5],[-114,66],[-78,73],[-108,137],[-92,176],[-130,198],[-106,140],[-79,138],[-19,58],[11,67],[89,-4],[3,-78],[57,36],[47,10],[15,28],[34,-22],[50,72],[18,-31],[65,69],[83,17],[55,134],[21,77],[58,73],[-23,67],[-26,-38],[0,-76],[-50,7],[-166,-61],[-45,-68],[-50,8],[-95,45],[-38,5],[-75,67],[-68,43],[-67,68],[-53,80],[4,64],[-52,50],[-7,110],[51,38],[50,82],[-100,-72],[-32,-70],[-56,5],[23,49],[-30,52],[7,52]],[[94985,49282],[27,38],[69,40],[112,-1],[0,199],[28,24],[35,-5],[34,-39],[27,18],[39,-18],[50,17],[108,-5],[42,-54],[37,-16],[78,2],[30,23],[22,63],[51,15],[67,45],[56,14],[-1,-85],[23,-29],[51,-6],[62,81],[31,-2],[29,49],[-36,17],[-9,74],[42,60],[-67,197],[-12,85],[-52,92],[-30,89],[5,127],[-25,46],[-44,-21],[-82,14],[-19,55],[-38,58],[-19,62],[5,73],[21,51],[10,116],[0,100],[-40,35],[-91,-5],[-60,60],[-60,36],[-15,45],[16,150],[26,85],[105,138],[65,117],[28,119],[96,134],[44,19],[39,-26],[29,-42],[2,-47],[26,-70],[47,-24],[31,10],[92,64],[61,24],[96,5],[114,50],[12,91],[36,81],[62,77],[20,58],[23,123],[47,85],[199,148],[57,126],[69,192],[53,241],[72,53],[69,22],[79,86],[-4,45],[-32,69],[34,33],[45,103],[41,45],[64,144],[26,-3],[45,44],[32,57],[-36,73],[10,79],[29,85],[-20,106],[-26,61],[29,81],[50,67],[34,-4],[18,51],[48,4],[32,40],[24,-11],[73,43],[25,71],[-62,83],[-67,43],[-44,-14],[-26,18],[-44,-8],[-24,23],[-13,56],[9,83],[-89,38],[-33,40],[-4,77],[-64,42],[-59,84],[0,57],[40,47],[20,92],[-5,34],[-64,61],[0,68],[22,44],[42,10],[37,35],[-5,68],[-108,-2],[-24,46],[44,70],[-23,67],[-32,2],[-30,39],[33,90],[24,29],[14,65],[62,14],[63,48],[48,-2],[96,-48],[135,-36],[75,10],[51,-55],[101,-37],[64,4],[75,74],[19,34],[38,-10],[54,14],[52,40],[58,-15],[40,14],[34,44],[15,69],[53,-7],[35,40],[13,78]],[[98378,56248],[287,238]],[[65080,67934],[8,-76],[-46,13],[-3,68],[41,-5]],[[66491,67985],[61,-60],[-91,2],[-11,-54],[51,-32],[8,-135],[49,-43],[-6,-113],[-40,-23],[45,-45],[26,-106],[-9,-64],[22,-28],[-52,-91],[-32,-93],[2,-75],[-60,-94],[-31,-23],[49,-72],[-19,-37],[-87,0],[-72,19],[-43,-37],[-206,-15],[-46,-40],[-13,-43],[-92,-24],[-23,-44],[-93,-48],[-29,50],[-53,5],[18,-83],[-75,-41],[-16,-27],[-121,-33],[-13,-24],[-84,-4],[-93,-46],[-29,51],[-145,-69],[14,90],[-41,40],[-58,-37],[18,83],[-50,8],[-47,66],[-12,85],[128,51],[-37,42],[-92,-2],[-56,-22],[-13,54],[67,51],[41,-22],[46,22],[80,-10],[-4,108],[64,41],[40,47],[116,3],[108,30],[22,40],[-14,51],[-68,-92],[-54,-20],[-101,30],[-103,-27],[92,92],[32,6],[26,76],[-3,55],[63,112],[44,-21],[74,24],[12,39],[-34,38],[-188,-29],[-88,53],[-60,8],[-48,35],[-49,99],[84,34],[9,100],[132,21],[-19,64],[-54,1],[-31,39],[-58,153],[78,79],[221,-45],[60,14],[68,-16],[148,15],[-49,55],[89,57],[36,7],[63,103],[-118,-4],[-64,-14],[-75,50],[116,96],[36,62],[-22,25],[73,103],[40,-13],[53,31],[80,8],[108,-43],[6,88],[55,21],[14,39],[73,-49],[77,-33],[-83,-55],[-33,-51]],[[90388,51178],[-34,-76],[-51,-55],[-27,28],[-40,-33],[-26,4],[-78,-62],[-78,-31],[21,64],[147,83],[19,39],[-11,68],[54,-29],[55,42],[50,16],[-1,-58]],[[87596,58302],[-4,-72],[16,-145],[42,-213],[45,-71],[118,-79],[147,-27],[42,0],[82,-30],[28,-46],[37,-108],[60,-74],[87,-72],[147,-111],[107,-28],[208,-68],[70,12],[62,31],[201,55],[128,50],[144,41],[64,-7],[15,-38],[73,-14],[48,17],[8,79],[-43,191],[-3,52]],[[89525,57627],[104,-11],[67,24],[66,48],[31,-5],[64,53],[2,83],[26,67],[57,50],[48,69],[35,11],[77,65],[109,26],[103,-32],[55,12],[70,-4],[-2,53],[54,55],[57,-13],[58,22],[34,-27],[81,-24],[48,56],[21,-8],[47,-113],[4,-70],[55,-27],[75,-2],[187,-91],[11,-59],[62,-29],[55,37],[72,-29],[61,15],[70,-30],[64,-63],[52,-15],[8,-108],[54,-80],[110,-47],[38,-40],[46,-14],[44,-94],[80,-147],[281,6],[42,-43],[-13,-105],[27,-179],[-18,-68],[27,-80],[-6,-127],[15,-33]],[[92222,56009],[-1,-15],[2,-16],[-2,-15],[-4,-7]],[[92195,55759],[-28,-3],[-39,-3]],[[92546,53633],[-2,-21],[-6,-10]],[[92178,53002],[30,-52],[21,-33],[115,-194],[21,-20],[2,-75],[27,-65],[30,-42],[30,-130],[33,-71],[91,-131],[61,-35],[119,-43],[39,-42],[43,-75],[63,19],[11,-30],[-12,-134],[17,-101],[13,-207],[-23,-91],[17,-75],[46,-7],[94,27],[32,-25],[-8,-102],[13,-100],[-32,-38],[-2,-90],[-13,-37],[-148,12],[-61,-39],[-63,-10],[-53,-39],[-18,-93],[-45,13],[-12,-36],[-91,-45],[-18,-46],[-19,-204],[-38,-42],[-16,-299],[-12,-52]],[[92462,50123],[-67,-89],[-87,39],[-6,27],[-53,28],[-153,40],[-11,80],[-20,26],[-47,-17],[-25,-55],[-35,30],[-23,-36],[-50,28],[-68,-22],[-49,36],[-90,7],[-33,38],[-99,-25],[-29,-17],[-47,16],[-27,58],[-43,31],[-102,20],[-85,-8],[-59,-24],[-37,12],[-43,81],[-66,-35],[-6,58],[-97,8],[-74,21],[-28,112],[-20,24],[-14,61],[19,43],[-30,61],[-22,114],[5,105],[-25,144],[-19,73],[-45,48],[-19,57],[-86,8],[-88,30],[-89,-25],[-71,-82],[-97,-15],[-29,-31],[-21,-88],[-60,-31],[-49,19],[-24,-41],[-39,-15],[-67,-80],[-49,-45],[-69,6],[-23,47],[-65,13],[-32,67],[-60,-4],[-60,23],[-66,-27],[-40,4],[-87,91],[-30,86],[-130,63],[-85,74],[-45,53],[-50,32],[0,82],[-12,34],[-57,66],[-68,22],[-89,93],[-57,8],[-53,-13],[-53,15],[-78,87],[-44,105],[0,68],[-48,80],[-27,102],[-5,105],[-30,51],[-39,9],[-24,52],[31,37],[9,58],[-29,43],[-76,2],[5,190],[-100,126],[-58,131],[-38,44],[-6,114],[-21,46],[-62,5],[-119,-107],[-26,-5],[-21,83],[-49,12],[-40,-12],[-93,94],[-20,57],[43,4],[43,-22],[31,31],[-35,54],[-70,4],[-46,-106],[23,-58],[5,-106],[-22,-34],[-91,8],[-12,-50],[-30,3]],[[87464,53065],[-30,24],[-27,97],[6,39],[-48,64],[-27,0],[-17,63],[-55,23],[1,318],[-6,12],[-125,0],[2,254],[59,219],[-63,154],[-103,201],[-22,76],[-35,16],[-49,-15],[-24,21],[-132,161],[-90,84],[-78,42],[-68,-3],[28,132],[-5,57],[-47,67],[-57,163],[-63,5],[-23,26],[-67,158],[-26,35],[45,82],[9,114],[-43,31],[-12,51],[35,31],[-2,60],[77,-25],[-5,63],[-24,42],[19,60],[60,44],[9,82],[22,40],[36,-15],[47,43],[14,36],[-26,37],[9,42],[-32,39],[-29,70],[27,122],[78,14],[-20,51],[-49,38],[-93,-30],[-37,12],[-27,64],[-75,49],[-36,-21],[-4,67],[-42,196],[-48,0],[-46,81],[20,72],[-18,56],[-64,32],[21,58],[-1,85],[-45,34],[0,39]],[[86023,57504],[13,93],[-89,95],[8,85],[-17,30],[20,52],[-55,31],[-28,54],[-60,12],[1,59],[43,81],[14,91],[33,47],[-13,33],[-51,3],[3,148],[-19,62],[10,75],[-33,29],[-20,64],[18,94],[-41,34],[-6,123],[80,-11],[52,32],[20,164],[41,41],[92,-77]],[[87464,53065],[-4,-20],[-71,20],[-48,39],[-65,7],[-35,-26]],[[87241,53085],[-105,66],[-121,-5],[-62,-36],[-33,-45],[-57,-211],[-40,-109],[-55,-105],[-68,-110]],[[86700,52530],[-68,-20],[-353,45],[-274,35],[-10,6],[-307,349],[-253,289],[-141,161],[-300,362],[-203,166],[-234,193],[-195,160],[-151,46],[-333,78],[-5,-2]],[[83873,54398],[0,5]],[[83873,54403],[46,55],[10,19],[-8,41],[-5,19],[-8,6],[-73,-27],[-5,3],[-2,10],[-19,88],[0,2],[29,13],[-107,542]],[[83731,55174],[423,341],[310,251],[94,34],[20,26],[80,210],[4,32],[-6,224],[27,193],[38,100],[-7,125],[-39,114],[14,193],[52,106],[144,39],[20,17],[167,233],[38,43],[-7,29]],[[85103,57484],[77,23],[54,110],[26,30],[64,-34],[56,30],[69,-35],[28,5],[54,-47],[158,-11],[38,54],[37,-1],[53,-35],[6,-59],[-24,-44],[21,-65],[75,51],[56,62],[72,-14]],[[62758,75673],[37,-70],[84,-17],[-26,-65],[136,-73],[45,60],[130,17],[0,-69],[-83,-46],[39,-38],[153,4],[27,-57],[-21,-49],[-62,-42],[49,-41],[113,-12],[221,-117],[82,-17],[-31,-128],[14,-54],[51,-29],[-3,-72],[-131,-162],[-69,-4],[0,-42],[-170,-38],[-7,-133],[-77,-18],[-108,-93],[-140,45],[-39,-52],[-103,-44],[-99,-21],[-138,-112],[-100,-59],[-109,-38],[-368,-43],[14,-44],[-54,-90],[-65,-26],[-229,-51],[-212,25],[-185,60],[-160,6],[-98,78],[-193,96],[-84,30],[-188,-26],[-51,24],[-105,-22],[-104,17],[-75,-26],[-70,4],[12,72],[186,47],[90,38],[57,97],[-57,36],[-49,108],[-41,-1],[-73,103],[28,72],[-82,34],[-97,-10],[-153,7],[-24,16],[-224,-64],[-44,21],[-43,80],[81,25],[81,-20],[48,30],[109,2],[7,42],[204,-6],[113,32],[86,-20],[126,6],[34,76],[-114,-28],[-200,34],[26,40],[111,51],[116,81],[-41,35],[-75,-44],[-149,63],[-75,-16],[-54,40],[-124,-55],[-47,8],[-201,-57],[-27,37],[-87,22],[-108,-7],[77,90],[73,9],[-13,56],[27,39],[162,-61],[-92,106],[29,120],[126,83],[167,-60],[65,-49],[155,29],[-159,51],[-88,100],[94,91],[106,-1],[75,-20],[62,-88],[90,-10],[89,-55],[10,-64],[66,10],[15,-50],[73,-18],[16,-81],[-54,-58],[-10,-74],[56,-52],[-28,-44],[67,-49],[37,23],[69,96],[97,55],[35,-96],[94,58],[25,71],[-70,177],[8,33],[92,29],[59,-29],[58,-110],[65,-21],[23,-66],[88,-7],[5,66],[-35,73],[52,68],[77,6],[83,56],[97,-12],[56,-53],[2,-68],[118,-21],[-38,102],[12,46],[148,-17],[91,-90],[98,-7],[77,123],[85,4],[28,-47],[166,40],[25,61],[-36,50],[-11,86],[200,18]],[[82576,54785],[-6,-2],[-22,-18],[-19,-20]],[[82529,54745],[-9,2],[-18,-23]],[[82502,54724],[-1,-3],[0,-4],[5,-38],[-4,-34],[7,-12]],[[82509,54633],[-8,-70]],[[82501,54563],[-31,11],[-9,3],[-19,5],[-5,49],[-71,29],[-56,-48],[-44,-176],[11,-143],[26,-65],[52,-23],[-21,-44],[-58,-64],[-40,-144],[22,-32],[113,22],[65,66],[26,2]],[[82462,54011],[-1,-35],[0,-7]],[[82461,53969],[-2,-13],[-21,-90],[16,-95],[-18,-49],[-2,-37],[-19,-31],[-5,-15],[-4,-48],[-42,-120],[-24,-116],[7,-51],[-7,-21],[-4,-32],[-2,-11],[0,-17],[8,-38],[-23,-75],[-14,-118],[-18,-68],[-4,-51],[-9,-26],[-3,-14],[-2,-16]],[[82269,52817],[-2,-9],[-24,-34]],[[81999,53838],[39,47],[6,65],[62,79],[-18,39]],[[82088,54068],[48,113],[41,114],[47,204],[40,274],[3,55],[30,8],[20,49],[10,114]],[[82327,54999],[30,-4],[2,2],[3,4],[3,1],[8,-2],[3,0],[13,6],[6,0],[19,-27],[27,7]],[[82441,54986],[18,10],[11,2]],[[82470,54998],[13,36]],[[82483,55034],[2,47],[69,62],[6,2],[5,1],[6,1],[16,17],[13,31]],[[82600,55195],[1,-3],[-3,-3],[0,-11],[-2,-12],[-17,-17],[14,-13],[-12,-24],[13,-16],[21,-158],[10,-29],[-19,-72],[-20,-31],[-10,-21]],[[74878,58196],[-167,-318],[-17,-111],[-25,-45],[5,-108],[41,-22],[-13,-48],[56,-111],[-59,-52],[-31,-89],[15,-69],[-23,-18],[-74,44],[-38,-19],[-47,34],[-65,24],[-35,93],[-46,62],[-72,46],[-74,-11],[-81,55],[-44,52],[-45,16],[-66,58],[-40,58],[-46,9],[-43,42],[-93,-4],[-80,74],[-24,70],[30,133],[28,37],[56,34],[67,-61],[49,21],[29,79],[40,-8],[39,26],[31,-71],[46,4],[53,-67],[54,-17],[88,46],[96,-21],[92,18],[47,23],[38,47],[65,19],[70,-37],[61,55],[59,9],[43,41],[50,-22]],[[72426,60043],[117,-81],[17,-76],[-6,-56],[41,-25],[-8,-34],[32,-81],[3,-46],[28,-53],[-29,-88],[-47,-71],[11,-73],[29,-37],[-14,-56],[1,-88],[-18,-131],[-2,-97],[-30,-150],[-3,-61],[-40,-10],[-77,63],[-33,-24],[-33,15],[-23,-40],[0,-94],[-68,-71],[-47,32],[-29,-26],[-104,211],[21,32],[-15,115],[29,67],[-7,111],[24,-12],[18,70],[-23,38],[-37,-5],[2,90],[33,33],[-10,130],[-30,24],[4,45],[-32,94],[-36,-4],[-29,34],[-3,63],[38,113],[30,-37],[79,-14],[48,43],[47,10],[99,133],[50,25],[32,50]],[[71578,62932],[17,-21]],[[72115,63134],[32,-27],[36,-52]],[[72246,62968],[7,0],[5,-3],[27,-19]],[[72335,62939],[-7,22],[13,13]],[[72335,63002],[27,50]],[[72769,63214],[0,20]],[[72729,63272],[-2,11],[2,8],[1,17]],[[72858,63395],[12,38]],[[72881,63446],[8,46],[14,9]],[[73589,63494],[-1,-4],[-1,-5],[-2,-7]],[[74049,63327],[74,-27],[-27,-48]],[[74096,63252],[-68,-60]],[[74028,63192],[-22,-34]],[[74006,63158],[3,-6],[2,-7],[2,-16]],[[74013,63129],[10,-22],[11,11],[11,-1],[6,-3],[11,-3],[18,-18],[9,-2],[12,2],[9,-2]],[[74110,63091],[3,-12]],[[74113,63079],[-11,-23],[-36,-31],[-6,-6]],[[74060,63019],[1,-61]],[[74061,62958],[11,1],[13,7],[12,3],[8,-11],[-4,-13],[-3,-12],[-14,-38],[-2,-21],[4,-7],[2,-6],[77,-40]],[[74165,62821],[-20,-25],[-68,55],[-16,-49],[-144,34],[-18,-79],[-55,-8],[-61,-46],[-113,-60],[-17,45],[-65,-41],[-40,-125],[49,-22],[30,-116],[59,-58],[-32,-77],[-73,-43],[11,-162],[33,-147],[42,-68],[89,-97],[90,-53],[118,-120],[83,-57],[55,-49],[84,-250],[42,-204],[50,-122],[55,-80],[65,-61],[66,-90],[60,-41],[9,-46],[97,-45],[49,-49],[123,-16],[64,13],[62,-5],[96,15],[44,-16],[20,-79],[-63,-69],[-39,-24],[-6,-85],[42,-47],[219,-136],[178,-77],[83,-63],[77,-92],[105,-53],[36,-32],[62,-27],[12,-57],[77,-61],[76,-118],[31,-95],[-32,-57],[-19,-129],[-66,15],[-54,45],[-25,47],[-3,83],[-58,104],[-128,9],[-115,64],[14,59],[-76,10],[-53,-46],[-50,-89],[-17,-56],[-50,-77],[10,-73],[-53,-101],[9,-71],[41,-39],[48,-4],[36,-41],[121,-91],[-14,-42],[9,-79],[-8,-75],[18,-52],[-17,-47],[-111,-6],[-87,-63],[-27,-58],[14,-120],[-3,-61],[-39,-51],[-48,-29],[-66,-97],[-31,-120],[-125,-15],[-36,26],[-14,86],[8,83],[52,23],[45,121],[-2,64],[-21,51],[60,41],[45,-3],[36,57],[3,53],[-53,108],[-19,167],[-14,58],[-49,78],[-23,81],[-10,106],[-21,61],[-44,66],[-30,3],[-48,-51],[-48,22],[-59,86],[-35,3],[-49,41],[8,57],[26,40],[-42,108],[-52,64],[-80,-39],[-63,12],[36,59],[-69,69],[-35,-24],[-57,23],[-12,52],[-64,139],[-50,66],[-80,-14],[-72,40],[-46,-7],[-61,-35],[-58,106],[-105,36],[-66,107],[-80,65],[-35,103],[-88,84],[-34,-3],[-65,152],[-108,79],[-82,20],[9,50],[-76,117],[-99,58],[18,56],[-36,34],[-70,-5],[18,127],[-11,74],[-32,75],[-42,55],[-12,56],[-12,149],[-21,69],[-39,59],[-55,18],[-46,40],[-27,-18],[-58,42],[-52,59],[-97,68],[-179,48],[-114,-79],[-22,-68],[-67,-55],[-33,-94],[-71,-61],[-101,-39],[-74,1]],[[39703,45678],[29,-59],[-46,-28],[-82,-6],[-35,8],[-17,34],[-74,39],[-23,-80],[-17,-17],[-52,42],[-18,-13],[-29,-102],[-41,60],[-46,32],[-108,-7],[-44,59],[-2,42],[-44,9],[-44,103],[-59,-4],[-43,19],[4,89],[52,54],[81,-8],[31,47],[241,-36],[52,-31],[92,0],[50,-84],[81,-42],[77,-31],[34,-89]],[[68093,64995],[23,-55],[-55,4],[-29,43],[61,8]],[[83873,54403],[-57,-73]],[[83816,54330],[-229,-94]],[[83587,54236],[-361,-147],[-96,-39]],[[83130,54050],[-79,-33],[-15,-7]],[[83036,54010],[100,-149]],[[83136,53861],[99,-149],[131,-215],[43,-68],[19,-31],[-1,-1],[-2,-2],[-117,-91],[-9,-10],[-4,-12]],[[83295,53282],[-38,-128],[-17,-58]],[[83240,53096],[-8,-10],[-274,-80],[-19,-21],[-88,-209],[-155,-182],[-10,-6],[-10,0],[-208,52],[-114,27],[-44,11],[-43,11]],[[82267,52689],[5,4],[3,57],[10,51],[-8,11],[-5,0],[0,4],[-1,1],[-2,0]],[[82461,53969],[1,42]],[[82462,54011],[0,2],[2,46]],[[82464,54059],[6,44],[9,28],[9,31],[13,19],[-8,33],[0,4],[3,8],[-9,49],[-1,86],[19,111],[-5,56],[0,19],[-2,5]],[[82498,54552],[0,5],[4,1]],[[82502,54558],[-1,5]],[[82501,54563],[-1,4],[-3,5],[-2,6],[14,55]],[[82502,54724],[27,21]],[[82576,54785],[3,2],[2,1],[3,-3],[4,-5],[41,-14],[43,-65],[4,-10],[17,-36]],[[82693,54655],[3,-10]],[[82696,54645],[5,-1],[5,0],[15,2],[1,0],[7,-2],[8,7],[75,-87],[13,-7],[21,-4],[6,-5],[15,-2],[53,-9],[62,-16],[228,205],[246,214],[275,234]],[[116270,49633],[54,-42],[-24,-53],[-48,45],[18,50]],[[116448,49655],[-7,-50],[-39,-14],[7,62],[39,2]],[[116869,49863],[-39,-31],[7,77],[32,-46]],[[117999,51052],[-26,-44],[-27,-6],[-89,-108],[-62,-133],[7,-58],[-56,-34],[-6,66],[41,79],[-4,75],[79,57],[-20,54],[30,47],[19,-38],[81,103],[41,8],[-8,-68]],[[118247,51659],[-25,26],[0,100],[27,2],[22,-85],[-24,-43]],[[118539,52121],[-40,-21],[-24,-44],[-52,-49],[-19,-51],[-49,29],[-6,56],[66,41],[87,69],[37,-30]],[[118836,53378],[67,-58],[-11,-52],[-27,-33],[-53,2],[-19,61],[43,80]],[[119041,53434],[-27,-63],[6,-35],[-35,-35],[-14,79],[30,44],[3,81],[41,101],[13,-85],[-17,-87]],[[118792,54640],[-10,-59],[-44,-11],[-9,37],[63,33]],[[118718,54647],[6,-112],[-75,-91],[2,63],[-15,38],[21,102],[61,0]],[[118202,54794],[22,-71],[-91,-25],[-8,98],[77,-2]],[[118300,54966],[-20,-79],[-25,32],[45,47]],[[118475,55198],[3,-29],[-44,-103],[-41,-12],[82,144]],[[118554,55452],[8,-53],[-48,3],[11,73],[29,-23]],[[119025,55499],[6,-95],[28,-69],[129,-32],[39,58],[56,-6],[24,-53],[2,-59],[-15,-48],[-71,-83],[76,-2],[62,-43],[-24,-45],[46,-36],[-10,-53],[31,-58],[-21,-69],[-49,-60],[-45,-90],[-34,-143],[-56,-264],[11,-71],[-10,-68],[-40,-158],[-31,-9],[-21,45],[-53,-2],[-22,-54],[34,-21],[-16,-65],[-20,-3],[-32,-66],[-76,-40],[27,184],[-36,70],[-3,53],[-22,48],[62,-7],[2,47],[-46,24],[-27,-27],[-33,-105],[-3,-49],[20,-73],[34,-35],[-9,-45],[-44,-11],[-27,50],[-87,-2],[-12,44],[39,79],[16,112],[-63,102],[19,85],[-18,55],[3,47],[57,22],[56,136],[32,48],[30,112],[-25,56],[7,73],[-61,76],[-4,89],[-22,36],[-56,11],[-33,-35],[35,-79],[8,-62],[36,-12],[14,-66],[-13,-50],[-61,-46],[-20,30],[30,57],[-44,37],[-54,-30],[-23,-51],[-46,93],[-28,16],[-25,87],[18,70],[54,-70],[-11,-66],[73,-7],[-20,41],[5,54],[-24,29],[-52,2],[-7,35],[-67,64],[11,90],[86,-15],[23,31],[-30,36],[25,47],[77,-22],[40,18],[0,65],[50,-35],[38,19],[-1,45],[31,41],[-5,40],[35,45],[52,33],[56,3],[32,-30],[31,5]],[[118348,55743],[35,-22],[-15,-80],[-40,11],[20,91]],[[120238,55785],[36,-42],[70,-53],[59,15],[14,-34],[-11,-104],[37,-35],[-14,-47],[27,-31],[-132,-125],[-44,-71],[-22,-81],[-9,-81],[-102,153],[-71,27],[-51,-14],[-53,-38],[-20,-37],[-56,-30],[-5,-78],[-61,-106],[-30,-14],[-39,-153],[-40,-23],[-72,36],[33,68],[-91,15],[-8,74],[32,118],[-44,37],[-15,100],[46,99],[68,56],[14,116],[21,57],[57,45],[9,44],[70,-127],[76,34],[72,-15],[42,49],[19,111],[105,94],[21,-15],[62,6]],[[120319,55878],[-11,-51],[-32,-5],[-22,55],[57,27],[8,-26]],[[120526,55771],[16,-42],[-87,-49],[-28,60],[25,25],[29,72],[70,97],[19,-15],[-49,-99],[5,-49]],[[118441,55995],[9,-40],[-16,-76],[-34,-67],[-34,-18],[20,168],[55,33]],[[119938,56926],[-19,-31],[-54,36],[8,51],[32,27],[34,-52],[-1,-31]],[[121874,58073],[52,-17],[-34,-89],[-85,-58],[9,68],[22,37],[-43,25],[30,98],[80,88],[-31,-152]],[[122960,60107],[69,14],[-25,-134],[5,-212],[12,-91],[31,-81],[23,3],[65,-98],[50,-152],[-8,-52],[36,-36],[22,-151],[-12,-64],[35,-66],[-37,-61],[-26,-70],[2,-137],[-39,-49],[-64,-27],[-1,-59],[-40,-67],[16,-39],[-41,-93],[31,-31],[-30,-51],[-5,-65],[-47,49],[-90,-23],[-49,-125],[-17,-75],[3,-98],[34,-101],[7,-216],[-12,-150],[-18,-105],[-61,-49],[-41,-166],[-27,-69],[-3,-104],[-21,-33],[6,-76],[26,-91],[74,-167],[-68,-34],[-68,-76],[-37,-114],[10,-49],[-7,-65],[-28,-41],[-72,-5],[-55,-63],[-25,-70],[-31,-4],[-24,33],[33,37],[-16,115],[0,79],[28,60],[41,31],[28,80],[-49,42],[-20,-36],[-35,15],[-10,-84],[-47,-78],[-4,-48],[34,-21],[-29,-53],[-52,76],[-42,11],[-69,-21],[-34,-31],[-22,-77],[-1,-70],[22,-79],[-21,-17],[-57,-111],[-40,-40],[-35,82],[22,242],[-40,10],[-55,-26],[-15,-72],[-55,-39],[-10,-56],[-49,-70],[-10,-69],[-54,33],[-60,8],[-38,-17],[-42,19],[-98,-2],[-109,-49],[-8,31],[72,54],[-4,45],[-147,-14],[-33,59],[-2,51],[22,56],[-59,-10],[-26,-27],[-16,-81],[-31,-54],[-5,-52],[18,-52],[25,-4],[107,-97],[-26,-78],[-97,-28],[-27,7],[-86,-74],[-21,-56],[11,-57],[-64,-50],[-14,-27],[-41,-157],[-29,-39],[-46,-30],[-49,9],[-73,34],[-45,74],[24,26],[-74,64],[-17,37],[-34,6],[11,112],[36,42],[-31,113],[40,15],[42,53],[36,80],[-4,63],[-24,31],[-50,-33],[-64,-19],[-32,12],[-83,75],[-87,-4],[-72,-34],[-31,8],[-27,-64],[-73,-53],[-18,-48],[-45,7],[-47,40],[-87,-63],[-49,-47],[-37,48],[-31,-83],[-33,15],[-93,-3],[-21,-43],[-47,-26],[-38,12],[-24,88],[-43,2],[-61,-77],[-4,-155],[-59,-58],[-122,99],[-98,-15],[-49,-26],[-32,-39],[-91,75],[-39,-63],[-8,67],[-19,36],[23,44],[-20,59],[22,43],[56,47],[61,-26],[69,26],[16,58],[25,20],[29,68],[23,-4],[77,37],[5,28],[74,91],[97,97],[34,69],[47,50],[42,23],[12,38],[-13,54],[88,42],[39,4],[52,50],[51,-21],[10,-42],[59,-23],[62,47],[58,-19],[117,10],[77,16],[21,25],[94,53],[99,-4],[49,-15],[61,60],[54,21],[30,-52],[-23,-40],[7,-40],[72,8],[10,-30],[64,-26],[23,50],[58,10],[48,40],[-10,52],[55,30],[-40,68],[-14,54],[68,155],[112,129],[81,142],[46,129],[3,67],[-37,105],[30,129],[70,26],[70,54],[69,28],[21,-54],[-37,-10],[-9,-85],[-46,-6],[-37,-60],[-32,23],[-21,-94],[68,7],[0,-71],[-19,-81],[60,-46],[66,1],[20,23],[16,76],[180,83],[76,71],[57,7],[74,86],[44,34],[81,159],[35,119],[78,74],[59,27],[35,32],[48,78],[12,128],[52,169],[68,104],[45,196],[15,95],[24,24],[20,109],[4,139],[-12,59],[-57,42],[-45,-21],[-24,81],[48,-17],[31,36],[28,65],[18,143],[-30,39],[-1,77],[-32,41],[71,98],[23,-15],[64,43],[21,132],[-10,52],[12,78],[58,-33],[25,26],[36,-34],[-5,-49],[16,-121],[48,-35],[28,47],[40,14],[52,-40],[28,24],[20,64],[13,105],[-25,49],[-56,-50],[-31,8],[-69,-43],[-13,43],[27,137],[28,51],[76,-23],[65,-68]],[[122957,62423],[-45,28],[20,63],[50,-57],[-25,-34]],[[123244,62642],[15,-33],[64,-63],[121,-174],[35,-83],[134,-184],[52,-55],[89,-73],[21,-39],[106,-83],[38,-50],[57,-1],[26,22],[83,-15],[40,-75],[42,-30],[119,-17],[35,17],[83,113],[58,51],[55,85],[2,-82],[-35,-87],[-53,-95],[-18,-101],[46,-83],[45,-156],[4,-55],[57,-15],[18,-49],[-83,-1],[-67,-33],[-10,-47],[-37,-35],[-94,20],[-5,-58],[-56,15],[-39,-10],[-66,43],[-108,-47],[-59,-51],[-95,-113],[-72,-128],[-39,-84],[-4,-104],[-33,-129],[-112,102],[-77,32],[-114,70],[-68,59],[-43,58],[-41,6],[-52,54],[-77,37],[-67,-10],[-48,-23],[-127,-107],[-29,-46],[-109,153],[-79,10],[-55,-47],[-36,-95],[2,-56],[98,-95],[63,16],[100,-136],[79,-58],[-53,-58],[-31,-1],[-123,57],[-14,-49],[-58,-34],[-20,-104],[-48,-19],[-26,-50],[-65,25],[-20,73],[13,85],[42,78],[6,98],[-45,77],[-38,20],[-54,67],[-7,39],[32,99],[-7,73],[16,46],[69,19],[55,75],[24,-34],[44,83],[58,75],[-34,73],[-39,47],[9,72],[49,29],[122,-112],[70,22],[12,-33],[56,-21],[77,68],[27,69],[-27,84],[8,50],[-21,83],[18,48],[56,31],[43,60],[11,80],[-6,130],[35,90],[17,108],[-2,104],[-24,117],[-52,129],[0,53],[41,94],[49,13],[53,54],[22,-34]],[[89061,62611],[-57,45],[39,27],[18,-72]],[[99590,60623],[-17,12],[-22,40],[-12,20],[-61,74],[-86,22],[-83,-4]],[[99309,60787],[-30,27],[-18,49]],[[99261,60863],[-42,32],[-13,16],[-6,12],[-5,11]],[[99195,60934],[-13,60]],[[99182,60994],[-44,-21],[-29,8],[-25,2],[-31,14],[-47,6],[-20,18],[-15,11],[-39,15],[-178,-12],[-47,23],[-107,9],[-27,-11],[-58,19],[-29,-14],[-64,16],[-10,18],[-5,4],[-13,6],[-43,8],[-8,5],[-22,-9],[-17,0],[-7,-2],[-8,-7],[-8,-11],[-40,-20],[-70,3],[-39,-15],[-5,9],[-3,3],[-5,-1],[-12,-4],[-33,12],[-34,0],[-28,8],[-9,0],[-27,-10],[-53,14],[-24,-3],[-5,-2],[-5,-5],[-47,-73],[-10,0],[-24,11],[-23,0],[-87,13],[-26,0],[-10,3],[-43,33],[-22,8],[-11,6],[-11,11],[-33,20],[-57,14],[-40,37],[-19,34],[-115,63],[-24,-13],[-61,-9],[-27,23]],[[97199,61259],[-25,-54]],[[97174,61205],[-14,-9],[-16,0],[-6,-1],[-66,-33],[-29,-27],[-25,-76],[4,-63],[-36,-126]],[[96986,60870],[37,-104]],[[97023,60766],[0,-11],[-11,-1],[-58,18],[-4,40],[-5,8],[-9,4],[-34,4],[-29,19],[-66,-9],[-12,0],[-14,5],[-12,6],[-45,61],[-54,15],[-41,3],[-70,48],[-50,3],[-23,-9],[-56,33],[-24,8],[-6,4],[-12,7],[-59,-14],[-41,-33],[-7,-2],[-6,3]],[[96275,60976],[-15,16],[-3,2]],[[96257,60994],[-11,-4],[-18,7],[-10,0],[-54,-25],[-20,-30],[-5,-5],[-15,-5],[-3,-7],[-1,-13],[0,-24],[-2,-9],[-5,-8],[-33,-6],[-15,-10],[4,-24],[4,-5],[13,-15]],[[96086,60811],[-12,-23]],[[96074,60788],[-18,14]],[[96056,60802],[-15,-57]],[[96041,60745],[-2,-7],[-14,-18],[-13,-16]],[[96012,60704],[-5,-9],[2,-9]],[[96009,60686],[35,-26]],[[96044,60660],[-14,-13],[-12,-13],[-30,-11],[-26,6],[-47,-105],[-29,-2],[-30,43],[-54,-37],[-69,-116],[-101,-91],[-95,-19],[-88,-78],[-1,-45],[-66,-7],[-66,-50],[-2,-98],[-113,-96],[-21,-61],[-34,-22],[-20,-59],[6,-64],[24,-40],[-13,-42],[-50,-9],[-91,58],[-61,69],[24,149],[-41,17],[-32,89],[-39,-29],[-33,19],[-358,-28],[-48,37],[-57,334],[-13,157],[-187,2],[-1,250],[15,24],[18,340],[-117,-71],[-107,260],[-93,74],[-121,174],[-39,9],[-164,-103],[-467,51],[-451,-91],[-16,7],[-229,309],[-86,109],[-48,131],[-223,172],[-298,229],[-419,320],[-19,7],[-403,-137],[-216,-80],[-360,-132],[0,-426],[0,-426],[1,-567],[0,-568],[0,-283]],[[90314,60087],[-38,2],[-94,-37],[-78,16],[-27,60],[-50,52],[-48,106],[-59,93],[-16,85],[-64,72],[-208,166],[-57,18],[-243,-54],[-166,-81],[-82,-82],[-125,-152]],[[88959,60351],[19,119],[-33,94],[77,155],[55,193],[-12,46],[-53,41],[-78,22],[-38,-22],[-40,56],[-89,-32],[-31,36],[-78,183],[-108,-22],[-38,20],[17,77],[3,81],[-18,71],[-51,48],[-45,103],[-16,72],[-49,75],[-3,93],[-57,46],[-135,28],[-44,50],[-1,109],[28,54],[76,-18],[134,4],[71,-72],[41,-19],[61,43],[8,27],[-46,88],[-88,66],[4,88],[37,9],[64,60],[0,37],[58,106],[75,8],[76,38],[64,-21],[170,22],[63,-5],[131,-54],[75,-8],[15,52],[-156,88],[3,69],[66,98],[64,138],[28,156],[0,42],[-29,58],[5,83],[36,92],[-33,12],[-8,72],[-63,65],[-115,-5],[-62,31],[-83,-120],[-48,3],[-43,49],[-91,16],[-99,90],[-122,34],[-32,-22],[-93,-25],[-96,-107],[-74,8],[-12,-39],[-82,-43],[-51,-70],[-84,-58],[-69,22],[-10,-31],[-53,22],[-64,-59],[-30,-86]],[[87730,63181],[-125,95],[-30,-2],[-44,45],[-51,5],[-45,63],[39,62],[47,-2],[33,-46],[58,12],[34,41],[-117,205],[-67,191],[-63,51],[-70,136],[-51,36],[-150,-3],[-82,43],[-31,-94],[-70,55],[-7,65],[-40,60],[48,47],[-28,31],[-9,108],[-230,83],[106,312],[67,57],[34,57],[4,64],[-97,81],[47,302],[23,40],[83,39],[50,59],[-17,88],[12,55],[101,110],[26,-7],[140,-161],[40,-64],[18,-70],[37,-61],[68,-33],[141,75],[38,54],[-70,194],[-10,150],[59,11],[70,54],[50,61],[86,28],[22,34],[-30,51],[29,86],[136,0],[80,78],[129,46],[21,73],[53,23],[2,66],[23,43],[79,-24],[-16,70],[42,15],[26,-34],[118,4],[52,-35],[1,-35],[-50,-18],[53,-47],[91,32],[62,-16],[-7,61],[42,50],[84,-8],[21,34],[72,29],[16,-63],[50,-112],[60,-9],[48,26],[65,-30],[74,34],[97,-17],[78,-60],[-6,-62],[30,-42],[101,-21],[67,-55],[24,-80],[48,-45],[69,-26],[-39,-144],[22,-45],[60,-3],[32,38],[-14,64],[-1,110],[-51,27],[8,38],[43,24],[67,-36],[31,-36],[59,-18],[15,-53],[84,-82],[71,-11],[65,-73],[160,121],[36,113],[64,-7],[65,106],[34,-52],[37,50],[65,-7],[117,25],[70,-129],[69,15],[60,-8],[18,25],[13,113],[72,-26],[45,13],[43,-20],[46,52],[34,-53],[76,-25],[-16,-61],[42,-84],[101,-68],[103,-10],[36,-29],[56,9],[33,-97],[38,31],[58,5],[56,98],[0,45],[38,56],[45,-6],[15,-63],[48,-36],[159,-19],[39,6],[211,73],[28,58],[27,176],[30,73],[-46,91],[-45,21],[-127,17],[-33,76],[-162,5],[-53,27],[29,89],[-67,17],[-52,35],[-39,-11],[-14,75],[77,0],[56,59],[60,38],[63,-4],[43,47],[98,72],[-36,88],[-43,21],[-11,70],[-49,24],[7,44],[52,23],[138,148],[60,-17],[50,16],[37,-34],[93,13],[40,-24],[66,34],[-17,82],[-109,27],[-47,46],[-63,-18],[-52,34],[-54,4],[-25,60],[32,74],[62,-36],[67,44],[-20,51],[-86,-28],[-53,12],[-51,46],[74,113],[-52,36],[49,87],[86,23],[23,-32],[114,-3],[23,-29],[63,-12],[0,52],[157,6],[-8,-53],[41,-40],[34,58],[-14,35],[101,42],[104,-6],[14,55],[81,-8],[143,55],[57,-30],[58,16],[-10,48],[229,50],[54,-32],[73,42],[66,-57],[49,21],[-12,65],[13,49],[81,15],[20,50],[89,-22],[44,46],[48,13],[10,-51],[179,62],[97,5],[32,24],[165,25],[27,34],[129,0],[75,61],[133,2],[55,72],[-45,33],[27,42],[132,1],[44,97],[97,-4],[57,32],[24,-44],[57,36],[130,-31],[90,-76],[109,-48],[68,42],[33,53],[78,14],[121,-144],[-12,-117],[22,-70],[67,-29],[32,-55],[-45,-29],[17,-169],[-80,5],[24,-87],[53,-52],[53,61],[46,-10],[13,-46],[90,14],[20,71],[116,-15],[32,90],[70,-89],[-13,-29],[71,-26],[-49,-33],[38,-108],[76,84],[-12,57],[128,-11],[40,-86],[114,-24],[61,11],[4,33],[80,30],[-16,-97],[-24,-29],[-56,11],[-61,-61],[-38,-69],[0,-56],[62,-32],[12,-54],[84,81],[88,42],[131,-21],[21,-51],[53,-23],[19,56],[-2,72],[62,-3],[60,92],[98,-14],[156,111],[-29,45],[54,27],[54,-3],[207,94],[20,60],[75,-19],[80,31],[49,-1],[27,-42],[-66,-101],[-73,18],[-39,-10],[58,-115],[417,-320],[97,-106],[233,-392],[217,-398],[164,-310],[199,-435],[23,39],[149,66],[11,42],[-22,49],[26,64],[47,0],[31,58],[179,-102],[-35,-118],[131,7],[25,-77],[-2,-63],[82,3],[35,29],[86,-14],[31,-28],[129,20],[25,-20],[86,59],[25,59],[80,-15],[52,68],[123,0],[149,-77],[50,-53],[10,-59],[47,-35],[37,-84],[-8,-33],[28,-111],[46,-30],[104,-17],[75,-64],[54,-4],[-8,-104],[29,-12],[88,-188],[46,20],[170,-46],[40,-29],[68,16],[25,-34],[38,73],[45,26],[83,106],[53,-7],[11,-56],[-41,-18],[-30,-48],[90,-48],[2,-47],[29,-51],[65,-71],[54,-5],[40,-88]],[[92931,63016],[0,-102],[33,-91],[43,-55],[75,-47],[90,-10],[44,10],[75,47],[43,55],[35,91],[0,102],[-35,92],[-43,54],[-75,46],[-44,11],[-90,-11],[-75,-46],[-43,-54],[-33,-92]],[[84645,33252],[-68,-47],[-1,43],[32,38],[37,-34]],[[83688,36784],[16,-32]],[[84921,37004],[-32,-74],[-65,-149],[-111,-257],[-139,-222],[-5,-17],[1,-440],[0,-375],[0,-386],[0,-542],[4,-536],[208,-434],[5,-76]],[[84787,33496],[-88,-161],[-41,8],[-64,-62],[-49,-23],[8,-84],[-33,-17],[-19,-51],[16,-30],[-81,-110],[-36,18],[-51,-22],[-57,-60],[-26,-65],[-4,-106],[23,-37],[-23,-45],[-17,-72],[4,-43],[-62,-91],[-44,-140],[6,-43],[-31,-137],[-45,-106],[-33,-117],[-12,-77],[-72,-143],[-38,17],[-28,-44]],[[83890,31653],[-261,304],[-282,328],[-19,72],[-47,16],[-3,68],[41,54],[-21,167],[-359,324],[-330,297],[-163,148],[-329,296],[-193,175],[-21,23],[-37,0]],[[81866,33925],[-1,125],[-2,85],[22,314],[0,24],[-11,63],[-12,64],[1,12]],[[81863,34612],[56,121]],[[81919,34733],[15,17],[3,21],[-4,34]],[[81933,34805],[12,30],[9,63]],[[81954,34898],[8,20],[10,12],[28,19],[9,16],[6,26],[2,15],[1,7],[3,6],[25,20],[6,9],[5,26],[11,22],[10,41],[3,12],[0,28],[2,13],[3,12],[4,11],[8,13],[12,-8],[8,2]],[[82118,35220],[4,11]],[[82122,35231],[1,14],[3,12]],[[82126,35257],[40,35]],[[82166,35292],[31,5],[12,8],[6,26],[-13,72],[22,30],[8,49],[9,21],[17,9],[3,6],[3,7],[11,41],[3,14],[0,121],[2,7],[7,14],[0,14],[-17,43],[4,64],[-39,153],[-3,25],[4,15]],[[82236,36036],[22,41]],[[82258,36077],[-4,10],[-11,17],[-4,44],[-22,3],[-34,157],[-35,5],[-25,53],[-11,94],[-42,52],[-4,76],[-5,24]],[[82061,36612],[-11,28]],[[82050,36640],[-1,48],[0,6],[2,6],[4,3],[4,1],[4,3],[7,18],[4,25],[1,49],[-3,13],[-6,6],[-14,10],[-20,25],[-21,-15],[-19,45],[-20,8],[7,33],[-12,23],[-22,-10],[-9,6],[1,10],[5,14],[4,16],[-1,10],[-18,30],[4,49],[-4,7],[-4,6],[-4,7],[0,9],[1,19],[-5,13],[-9,11],[-12,9]],[[81894,37153],[155,248],[110,90],[221,133],[7,-21],[57,51],[-6,-64],[67,-13],[-19,-77],[34,-99],[35,-19],[30,19],[29,-1],[24,0]],[[99182,60994],[13,-9],[-2,-23],[0,-15],[2,-13]],[[99261,60863],[48,-76]],[[99590,60623],[2,-9],[3,-30],[12,-26]],[[98092,59491],[-21,52]],[[97144,59150],[27,-59]],[[97071,58928],[-45,12],[-56,-14],[-16,-32],[-60,-22]],[[96894,58872],[-13,-2],[-13,5],[-7,4],[-4,2]],[[96857,58881],[-6,-1],[-18,-13],[-44,9],[-17,-3],[-6,-1],[-71,24],[-13,-3],[-11,-16],[-4,-3],[-7,1],[-31,-10],[-6,-1],[-7,1],[-18,4],[-30,-14],[-29,-85],[-4,0],[-5,6],[-3,11],[-2,14],[-42,22],[-7,37],[-4,14],[-6,6],[-21,-11],[-14,-4],[-7,-3],[-37,-34],[-15,-7],[-13,-2],[-14,9],[2,100],[-52,-3],[-43,32],[13,47],[-26,27],[-85,-62],[-66,-11],[-7,-17],[-14,-37],[-11,-8],[-30,16],[-62,-21],[-45,110],[-62,21],[-49,-15],[-35,-32],[-7,-3],[-7,5]],[[95759,58977],[-70,27]],[[95689,59004],[-16,-21],[-56,1],[-15,6],[-17,11],[-30,9],[-34,-3],[-33,-26],[-32,-4],[-8,3],[-9,12],[-2,2]],[[95437,58994],[-4,-2],[-2,-9],[-3,-4]],[[95428,58979],[-15,-9],[-5,16],[2,74],[-25,56],[6,48],[17,66],[8,21],[1,6],[0,4],[2,1],[5,-1],[11,-16],[19,-39],[36,15],[-1,9],[-9,21],[-5,35]],[[95475,59286],[3,16],[6,13],[8,15]],[[95492,59330],[1,4],[2,11],[2,2],[2,-1],[7,-12],[12,0],[152,67],[13,-2],[54,-44],[36,-3],[9,-5],[17,-24],[83,-32],[-1,-25],[-18,-14],[-10,-32],[3,-8],[8,-3],[13,28],[32,10],[12,20],[4,56],[11,11],[24,11],[6,4],[14,16],[3,3],[1,2],[5,-4],[15,10]],[[96004,59376],[46,11],[34,52]],[[96084,59439],[57,-6],[63,18],[42,-44],[46,-14]],[[96292,59393],[30,-31]],[[96322,59362],[7,-5],[6,2],[19,15],[7,7],[4,8],[7,20],[12,15],[14,1],[15,-5],[15,-2],[4,2],[2,1],[-4,44],[43,34],[11,34],[26,18],[6,3],[19,0],[2,0],[52,-45],[17,15],[4,30],[-4,12],[-17,15],[-3,5],[0,1],[0,7],[3,10],[0,11],[-9,17],[13,16],[25,-32],[52,-31],[31,42],[32,-1],[4,41],[9,17],[42,15],[33,25],[54,30],[-44,54],[-46,-31],[-5,27],[-16,5],[-50,-5],[-16,2],[-14,9],[-12,15],[-17,31],[-16,5],[-7,4]],[[96632,59870],[-3,26]],[[96629,59896],[-39,12],[-80,-20],[7,25],[0,12],[-4,33],[0,17],[-2,18],[-4,11],[-19,6],[-17,-17],[-12,-9],[-6,6],[-15,19],[-41,0],[-3,72]],[[96394,60081],[-41,83],[-23,1],[-9,-6],[7,34],[-2,25]],[[96326,60218],[-26,-1]],[[96300,60217],[-8,-24],[16,-38],[-7,-33],[-13,-34],[-10,-13],[-14,-3],[-16,8],[-19,21],[-5,2],[-2,-8],[3,-107]],[[96225,59988],[-37,-3]],[[96188,59985],[-10,-15],[-3,-12],[-5,0],[-34,9],[-3,-12],[-7,5],[-8,20],[-7,5],[-14,3],[-14,13],[-9,5],[-44,2],[-7,8],[-5,8],[-6,9]],[[96012,60033],[-14,10]],[[95998,60043],[-9,-1],[-7,-5],[-6,-1],[-5,9],[-1,10],[6,38],[-1,13],[-4,12],[-20,45],[-27,14],[-60,-39],[-51,55],[-54,8],[-15,9],[-6,19],[8,17],[62,44],[23,22],[13,7],[11,9],[20,46],[16,24],[50,47],[38,5],[17,16],[8,59],[16,5],[19,-1],[17,5],[53,48],[32,11],[14,13]],[[96155,60606],[6,23],[-14,5]],[[96147,60634],[-53,46],[-24,4],[-17,-15],[-9,-9]],[[96044,60660],[-12,2],[-8,6],[-15,18]],[[96012,60704],[29,41]],[[96041,60745],[-3,17],[18,40]],[[96074,60788],[15,9],[1,8],[-4,6]],[[96257,60994],[18,-18]],[[97023,60766],[0,1],[-29,64],[-8,39]],[[97174,61205],[13,42],[12,12]],[[96067,59367],[-11,-8],[-9,-40],[61,-127],[30,6],[6,3],[4,8],[0,20],[-16,22],[-1,16],[6,7],[17,16],[-4,16],[-10,-3],[-2,-1],[-4,-5],[-5,0],[-3,2],[-21,12],[-17,18],[-5,16],[-7,16],[-9,6]],[[95873,59197],[31,-72],[43,31],[-74,41]],[[108867,40986],[-63,74],[-166,29],[-40,-48],[-48,-5],[-44,83],[23,56],[40,19],[19,85],[-24,83],[-48,83],[-22,-19],[-28,-153],[-49,30],[-36,-42],[-33,43],[7,140],[-13,70],[13,113],[-32,53],[-20,-9],[5,90],[-30,-17]],[[108278,41744],[1,74],[-28,62],[-20,84],[-34,85],[5,125],[20,45],[-79,134],[-28,18],[7,86],[-15,79],[3,48],[-34,81],[-21,86],[1,178],[69,2],[23,79],[48,42],[29,107],[37,52],[19,103],[63,67],[72,35],[70,13],[36,30],[122,-49],[52,2],[93,34],[81,-27],[32,2],[20,30],[52,0],[16,19],[77,-36],[1,-49],[27,-54],[20,10],[32,71]],[[109147,43412],[0,-19],[2,-15],[26,-66],[35,-48],[39,8],[32,29],[32,-39],[48,-10],[49,-93],[69,-12],[37,96],[-52,95]],[[109464,43338],[-2,39],[-14,27]],[[109448,43404],[0,14],[2,7],[8,-3],[16,-9],[10,16],[35,-3],[31,72],[32,-25],[38,14],[35,77],[36,-77],[40,-24],[32,-65],[58,0],[33,70],[18,-22],[52,58],[28,65],[25,-23],[24,-12],[5,7],[1,5],[0,10],[0,5],[1,5],[3,6],[2,3],[2,14],[3,5],[5,4],[13,29],[5,7]],[[110041,43634],[5,-17],[-11,-46],[1,-37],[-19,-67],[-27,-8],[-13,-61],[2,-52],[-14,-73],[9,-62],[33,-22],[5,-124],[27,-56],[32,-98],[3,-102],[-55,-215],[12,-100],[17,-37],[10,-120],[-2,-82],[-17,-80],[-37,-55],[-37,45],[-65,-31],[-66,-111],[-24,-19],[-64,-9],[-18,-51],[-117,0],[17,-66],[-16,-72],[-43,-45],[-50,45],[-53,15],[-31,-79],[-51,-11],[19,-49],[7,-82],[-10,-68],[22,-52],[28,-18],[34,-60],[37,-25],[-11,-52],[9,-114],[-52,23],[-33,46],[-28,-34],[-41,108],[-107,-46],[-23,13],[-33,-70],[-28,22],[-86,18],[-6,-40],[20,-64],[-9,-34],[-38,-31],[-34,-67],[-30,-10],[-58,11],[-27,-9],[-39,-61]],[[8640,35793],[40,-30],[-10,-68],[23,-69],[-63,32],[-15,30],[52,60],[-27,45]],[[44895,45258],[-24,-24],[-40,44],[17,32],[47,-52]],[[117429,55289],[35,-32],[10,-47],[-39,-75],[-141,-51],[-52,7],[-18,-24],[-45,43],[14,66],[40,55],[67,34],[129,24]],[[117235,55894],[25,-25],[-13,-54],[-53,-31],[-36,47],[31,41],[46,22]],[[117860,56071],[46,-5],[-3,-66],[-74,8],[-14,90],[45,-27]],[[118156,56151],[-14,-90],[-26,-51],[-49,88],[78,72],[11,-19]],[[117335,57727],[-51,-52],[-34,29],[56,40],[29,-17]],[[117317,57802],[-45,-14],[-16,113],[21,24],[37,-45],[3,-78]],[[117370,57927],[-1,69],[36,25],[103,170],[49,33],[84,7],[36,-14],[109,19],[17,-20],[91,6],[52,32],[36,60],[3,73],[34,32]],[[118019,58419],[76,-207],[26,-89],[113,-211],[53,-77],[32,-107],[70,-138],[31,-157],[23,-158],[-19,-97],[8,-128],[-23,-53],[0,-75],[18,-126],[44,42],[17,-30],[-20,-48],[-15,-119],[-21,-68],[4,-76],[-37,-38],[1,-61],[-35,-23],[-28,-100],[-29,-3],[-47,-45],[-180,17],[-11,-58],[-22,-28],[-2,-75],[-81,58],[-6,-29],[-56,23],[-17,44],[-71,-34],[-33,10],[-39,-38],[50,-43],[-9,-57],[-43,-24],[-49,115],[-48,-76],[44,-91],[-71,-105],[-35,63],[26,108],[-54,-18],[-52,-48],[-7,-45],[-43,-74],[-29,18],[-68,-38],[-36,-60],[-21,35],[4,99],[-63,37],[-21,46],[8,66],[28,-1],[17,60],[-13,107],[29,30],[-33,75],[-1,50],[57,190],[-17,39],[50,45],[52,107],[-48,28],[32,42],[-60,136],[14,54],[-28,71],[-28,114],[-85,63],[-28,38],[38,65],[41,-30],[88,102],[57,1],[31,-23],[42,-82],[15,44],[-73,95],[-37,128],[29,32],[-52,82],[2,69],[-17,35],[-10,91],[59,11],[-7,34]],[[77143,60659],[-79,-19],[-45,-73],[-54,61],[-36,-34],[-91,-48],[-5,-97],[-27,-39],[-44,18]],[[76570,60844],[15,66],[-31,43],[21,31],[41,-20],[10,31],[20,17],[31,6]],[[76677,61018],[32,8],[18,10],[9,13],[-2,6],[-2,7],[-8,6],[-7,9],[4,17],[6,10],[23,8],[10,18],[8,-1],[5,0],[18,28]],[[76791,61157],[10,35],[-15,4]],[[76786,61196],[-1,5],[-3,5],[-3,14],[-4,12],[-1,6],[2,8],[3,3],[13,0],[8,5],[30,27],[10,5],[9,1],[17,-58],[64,-44],[33,-5]],[[76963,61180],[18,-52]],[[76981,61128],[3,-8],[7,-5],[22,-7],[14,-53],[34,-17],[12,-2],[8,-1],[3,-5]],[[77084,61030],[0,-16]],[[77084,61014],[-2,-11],[-4,-21],[-2,-9],[-1,-3],[-2,-2],[0,-2],[4,-3],[6,-2],[14,0],[38,-7],[9,-3],[6,-6],[12,-18],[12,-6],[17,10],[8,0],[12,-3]],[[77211,60928],[-8,-81]],[[77203,60847],[-20,-38],[-15,-18],[-3,-6],[-1,-10],[2,-20],[-2,-11],[-8,-8],[-22,-9],[-8,-10],[-1,-15],[15,-27],[3,-16]],[[87334,53079],[59,-119],[3,-50],[-47,-69],[-26,18],[-44,107],[43,49],[12,64]],[[87426,52187],[-292,-4],[-27,46],[-39,183],[-23,56],[-345,62]],[[87241,53085],[29,-131],[22,-23],[38,-113],[-82,9],[-45,-46],[-47,-86],[67,-16],[32,35],[45,-26],[-3,-39],[25,-167],[65,-160],[39,-135]],[[107966,48405],[2,-5],[0,-6],[3,-4],[4,0]],[[107975,48390],[14,-58],[26,-47],[63,-69],[4,-5],[2,-7],[4,-15],[3,-8],[7,-8],[10,-9],[5,-7]],[[108113,48157],[-3,-8],[0,-1],[-2,-5],[-1,-3],[4,-22]],[[108111,48118],[15,-12],[17,-9],[11,-14],[14,-46],[3,-25],[-1,-36],[8,-44],[28,2],[11,12],[14,36],[29,-21],[27,19],[3,2],[2,-1],[10,-100],[-30,-49],[-3,-166],[25,-98],[23,-18],[38,-106],[96,-50],[24,21],[5,-4],[6,-6],[17,-35],[7,-2],[23,-8],[7,-6],[15,-24],[9,-12],[0,-2],[2,-2],[5,0],[8,2],[3,4],[3,3],[0,5],[-4,12],[0,5],[1,9]],[[108582,47354],[2,2],[8,3]],[[108592,47359],[10,12]],[[108602,47371],[-3,18],[2,10],[3,13],[4,11],[32,22],[28,14],[8,4],[3,2],[5,0],[15,4],[17,31],[14,1],[39,-20],[39,-30],[35,-67],[80,-68],[-21,-78],[-9,-10],[-9,-5],[-20,15],[-8,-25],[-21,-23],[-3,-11],[12,-11],[16,-7],[54,2],[14,-23],[6,-6],[15,-9],[7,-7],[1,-4],[0,-8],[1,-7],[0,-5],[-2,-9],[-3,-1],[-4,0],[-2,-3],[-2,-8],[-1,-13],[1,-14],[1,-8],[13,-10],[49,15],[34,-28]],[[109042,47015],[0,-4],[-2,-7],[1,-14],[20,-26]],[[109061,46964],[-6,-19],[1,-6],[1,-11],[1,-8],[1,-7]],[[109059,46913],[-1,-8],[-5,-8],[-17,1],[-7,-2]],[[109029,46896],[-2,-2],[0,-6],[-4,-8],[-9,-10],[-21,-19],[-7,-14],[-3,-12],[2,-3],[12,-1],[10,-8],[-5,-35],[-26,-28],[-17,-7],[-6,-6],[-4,-8],[-4,-9],[-13,-49],[-3,-6],[-4,-1],[-6,6],[-4,1],[-3,-2]],[[108912,46669],[-9,-8]],[[108903,46661],[-9,-2],[-7,3]],[[108887,46662],[-34,29],[-9,17],[-4,4]],[[108840,46712],[-8,2],[-7,-3],[-17,-17]],[[108808,46694],[-26,31]],[[108782,46725],[-53,-33],[-26,18],[-4,2],[-3,-3],[-3,-9],[1,-8],[8,-32],[3,-9],[17,-16],[7,-47],[-19,-44],[-7,2],[-9,-5],[-10,-8],[-8,-3],[-5,-6]],[[108671,46524],[-7,-17],[-6,-7],[-14,-9],[-5,-6]],[[108639,46485],[-3,-11],[4,-3],[13,-1],[5,-14],[2,-5],[2,-3],[22,-20],[25,3],[42,-29],[127,-127],[24,-44],[69,-70],[15,-4],[21,-8],[21,3],[10,-5],[5,-15],[3,-6],[7,-3],[67,-20],[21,-42]],[[109141,46061],[-15,-20]],[[109126,46041],[-11,-30],[-8,-59],[5,-17],[9,-13],[11,-14],[7,-11],[0,-7],[-3,-8],[1,-13]],[[109137,45869],[54,-77]],[[109191,45792],[3,-10],[7,-6],[18,-13],[9,28],[22,-1],[5,-8],[3,-5],[1,-28],[30,-49],[20,-51],[-4,-47],[53,-139],[43,-40],[66,-126],[64,-85],[8,-8],[5,0],[15,27]],[[109559,45231],[9,-3],[9,-32]],[[109577,45196],[1,-2],[0,-7],[-3,-9],[1,-16],[31,-56],[13,-59],[43,-10],[0,-179],[42,-61],[6,-72],[37,-25],[17,31],[2,10],[8,22],[9,-1],[6,-16],[-2,-57],[41,-69],[58,-28],[14,-55]],[[109901,44537],[34,-22]],[[109935,44515],[13,-29],[9,-12],[11,-5],[32,11],[7,0],[2,-3]],[[110009,44477],[-1,-7],[0,-12],[5,-17]],[[110013,44441],[-5,-9],[-5,-8],[-11,-29],[-32,-23],[-27,-26],[-23,-5],[-7,-55],[23,-19],[12,-61],[26,-25],[20,-58],[29,7],[18,-53],[31,-6],[9,-49],[17,-21],[5,-10],[3,-9],[0,-10],[-3,-29],[-29,-97],[-51,-13],[0,-8],[2,-10],[-1,-10]],[[110014,43805],[2,-8],[3,-7]],[[110019,43790],[36,-50]],[[110055,43740],[-6,-12],[-16,-24],[-3,-9],[1,-9],[4,-9],[2,-9],[-4,-9],[2,-5],[4,-6],[3,-5],[-1,-9]],[[109448,43404],[16,-66]],[[109147,43412],[5,0],[28,12]],[[109180,43424],[3,5],[4,12],[19,-4],[30,26]],[[109236,43463],[31,68],[5,34]],[[109272,43565],[-5,42],[4,47],[-7,30]],[[109264,43684],[17,92]],[[109281,43776],[4,12],[15,15],[4,8],[-10,4],[-5,5],[-11,26],[-20,27],[-11,26],[1,13],[3,13],[3,8],[16,27]],[[109270,43960],[23,25]],[[109293,43985],[0,17],[-3,16],[-27,6],[-3,11],[3,14],[8,7],[18,10],[13,13],[2,2],[4,7],[3,11],[0,27],[2,13],[13,70],[-4,29],[-10,25],[-64,27],[-29,72],[-4,23],[1,22]],[[109216,44407],[9,15],[12,9],[1,10],[-2,3],[-4,2]],[[109232,44446],[-44,17],[-21,3],[-49,28],[-11,6],[-8,9],[-6,14],[-4,14],[-1,17],[0,27],[-5,25],[-41,47],[-8,31],[-3,11],[-4,10],[-5,10],[-6,9],[-22,18],[-11,19],[9,117],[-8,50],[-4,141],[24,90],[3,125],[-39,88],[-90,76],[-22,38],[-7,24],[-6,10],[-8,29],[-6,11],[-25,22]],[[108804,45582],[-12,37]],[[108792,45619],[-17,57]],[[108775,45676],[-2,7],[-3,3]],[[108770,45686],[-23,34],[-10,21],[-16,63],[-19,52],[-7,12],[-10,7],[-10,2],[-8,-4],[-7,-7],[-7,-11],[-2,-3],[0,-3],[-5,-3],[-6,2],[-6,14],[-4,8],[-86,48],[-41,15],[-4,1],[-7,-2],[-28,12],[-4,0],[-31,-10],[-18,-16],[-47,-144],[-10,-16],[-8,-4],[-4,0],[-3,-61],[-2,-6],[-3,-4],[-8,-18],[-13,-1],[-11,11],[-8,3],[-6,-2],[-32,-23],[-31,-30],[-13,-20],[-6,-5],[-15,-5],[-5,-5],[-2,-9],[2,-11],[3,-9],[0,-5],[-8,2],[-19,14],[-6,9],[-11,74],[-32,0],[-13,4],[-14,10],[-39,36],[-20,26],[-9,18],[-15,18],[-15,36],[-17,1],[-12,1],[-3,-3],[-6,-10],[-58,-96],[-8,-4],[-15,13],[-20,13]],[[107849,45716],[-9,-21],[-4,-25],[-9,-41],[-2,-12]],[[107825,45617],[-57,-27]],[[107768,45590],[-8,-47]],[[107760,45543],[-21,-17],[-13,-29],[-4,12],[0,5],[-1,3]],[[107721,45517],[-1,0],[-2,-3],[-7,-8],[-6,0],[-5,0],[0,-11]],[[107700,45495],[0,-6],[-8,-13]],[[107692,45476],[-10,-3],[-43,-54],[-43,-80],[-58,53],[-30,8],[-6,7],[0,14],[18,36],[12,90],[1,3],[2,3],[8,6],[2,8],[-1,21],[2,12],[3,6],[59,98],[-1,9],[-6,23],[-2,11],[7,51],[-11,25],[0,22],[0,7]],[[107595,45852],[8,15]],[[107603,45867],[1,4],[-3,8],[-24,17]],[[107577,45896],[-12,18],[-8,21]],[[107557,45935],[13,31],[3,11],[1,6],[1,4],[25,20],[4,8]],[[107604,46015],[2,6],[-1,14],[5,11],[27,42]],[[107637,46088],[-2,9],[-9,15],[-2,11],[1,10],[5,20],[2,10],[-2,36],[1,12],[3,12],[11,16],[3,9],[4,21],[3,8],[16,25],[-4,19],[-10,17],[-18,23],[-6,17]],[[107633,46378],[-14,192]],[[107619,46570],[20,72],[-46,-4],[-58,30],[-33,-1],[-3,1],[-1,0],[-4,-3],[-2,-3],[-4,-13],[-16,-28],[-25,-32],[-11,17],[-32,19],[-10,-1],[-8,-10],[-3,-10],[-4,-9],[-39,26],[-31,139],[19,48],[5,8],[8,5],[3,3],[4,10],[2,10],[1,21],[10,40],[9,43],[3,25]],[[107373,46973],[-8,27]],[[107365,47000],[-13,9],[-3,8],[-7,4],[-3,4],[-1,3],[-3,9],[-2,5],[-9,21],[-22,73],[-21,19],[-15,-6],[-11,-12],[-8,-14],[-21,-35],[1,-24],[-20,-3]],[[107207,47061],[-7,22],[1,21]],[[107201,47104],[-1,19],[1,8],[8,16]],[[107209,47147],[5,44],[5,55],[9,37],[0,9],[4,9]],[[107232,47301],[12,37]],[[107244,47338],[4,8],[10,14],[10,18],[6,9],[35,34],[59,-14]],[[107368,47407],[24,15],[9,34],[-34,-8],[-8,7]],[[107359,47455],[1,12],[4,25],[1,13],[2,4],[7,7],[2,9],[-6,17],[7,4],[17,6],[8,6],[4,11],[20,55],[12,75],[0,7],[0,7],[2,5],[5,2],[3,0],[4,-1],[6,-6],[7,-4],[82,67],[53,67],[6,25]],[[107611,47774],[24,-24]],[[107624,47720],[1,-43]],[[107625,47677],[4,-8],[9,-24]],[[107854,47652],[5,6],[2,12]],[[107861,47670],[-4,15],[-9,10]],[[107825,47969],[1,20],[8,35]],[[107834,48024],[-10,19]],[[107809,48081],[-4,20]],[[107779,48124],[-20,75]],[[107745,48285],[-1,10],[9,16]],[[107779,48319],[5,27],[1,12],[8,11]],[[82816,55903],[-18,-15],[-7,-9],[4,-10],[1,-2],[12,2],[26,-2],[37,-50],[-5,-32],[25,-46]],[[82891,55739],[-7,-15],[5,-20],[9,-13],[2,-5],[1,-1]],[[82901,55685],[-11,-17],[-10,-20]],[[82880,55648],[-24,-32]],[[82856,55616],[-4,-16],[-1,-5],[-7,-5],[-5,0],[-8,4],[-5,1],[-8,-6],[-12,-22],[-16,-18],[-6,-9],[-4,-11],[-8,-23]],[[82772,55506],[2,-8],[3,-4]],[[82777,55494],[11,-12],[15,-3],[6,-5],[1,-13],[-11,-10],[-15,5],[-20,13],[-32,-12],[-3,3],[-7,10],[-13,-12],[-7,-4],[-14,-5],[-21,-36],[-5,-10],[-2,-7],[-8,-9],[-2,-6],[-1,-5],[-10,-37],[35,-20],[-36,-89],[-12,-14],[-7,-6]],[[82619,55210],[-10,-8],[-9,-7]],[[82483,55034],[-11,-27],[-2,-9]],[[82470,54998],[-29,-12]],[[82327,54999],[0,1],[0,2],[-2,0],[-1,4],[10,19],[19,24],[36,178],[31,35],[49,178],[-2,62],[41,8],[26,125],[-7,51],[67,159],[38,12],[31,37],[-1,63],[22,-6]],[[82684,55951],[9,-1],[10,1],[44,-3],[22,2],[4,1],[3,6],[2,5],[0,12],[1,6],[8,7],[6,-5]],[[82793,55982],[25,-35],[-2,-44]],[[65713,38958],[1,-16],[6,-59]],[[65653,38645],[-28,-35],[-5,-10],[-1,0],[-6,-6]],[[65592,38559],[10,-3]],[[66059,37998],[-5,-16],[2,-12],[5,-10]],[[66061,37960],[-12,-18]],[[66062,37832],[-9,-32]],[[65990,37670],[3,-49]],[[65980,37528],[0,-5],[0,-1]],[[65991,37332],[1,-33]],[[65992,37250],[-7,-17],[-46,8],[-46,56],[-103,63],[-60,16],[-16,29],[-53,31],[-65,68],[-53,32],[-39,46],[-63,41],[-102,103],[-73,107],[-10,43],[-35,26],[-3,36],[-38,36],[-132,190],[-2,26],[-133,173],[-102,31],[-49,42],[-13,88],[-28,39],[-60,52],[-116,73],[-6,68],[-41,66]],[[64498,38822],[26,47],[13,90],[21,45],[39,25],[36,70],[56,72],[40,29],[55,108]],[[64784,39308],[44,39]],[[64828,39347],[-1,150],[1,7],[1,6],[17,19]],[[64846,39529],[15,38]],[[64861,39567],[17,9],[46,6],[8,6],[10,15],[0,12]],[[64942,39615],[-3,12],[-3,17]],[[64936,39644],[1,14],[7,23],[12,77],[0,32]],[[78069,46596],[-283,227],[-379,301],[-237,189],[-189,150],[-236,188],[-237,189],[-283,225],[-377,303],[-285,226],[-283,225],[-271,217],[-8,-1],[-377,-277]],[[74624,48758],[-287,-233],[-11,3],[-230,308],[-45,37],[-242,87],[-337,120]],[[72534,53231],[85,63],[49,15],[88,177],[35,55],[23,68],[7,25],[0,21]],[[72821,53655],[-10,43],[0,58]],[[72811,53756],[-12,34],[-12,66],[-28,106],[-1,11],[4,40],[56,114],[20,22],[43,-1],[33,28],[12,30],[15,21],[9,70],[29,2],[46,46],[26,65],[120,78],[100,65],[26,24],[6,6],[7,10],[7,20],[-2,25],[-9,23],[-25,35],[-8,23],[0,35],[5,65],[-2,64]],[[73276,54883],[7,42],[1,45]],[[73284,54970],[10,58]],[[73294,55028],[132,-33],[104,-100],[87,-55],[146,-21],[36,4],[97,38],[34,28],[71,-5],[84,-62],[82,-2],[79,-35],[70,-16],[113,-124],[61,-14],[37,-27],[70,-4],[110,-34],[33,-45],[33,-97],[0,-143],[46,-163],[52,-103],[52,-68],[108,-70],[121,-30],[140,-2],[83,-25],[84,-40],[78,-19],[38,-35],[146,-65],[31,-44],[95,-42],[57,-79],[93,-97],[32,-49],[105,-80],[50,-16],[108,20],[107,76],[50,55],[109,190],[44,141],[0,105],[-49,112],[-26,100],[-13,97],[8,149],[51,136],[73,100],[114,135],[90,53],[53,49],[62,36],[73,-6],[64,25],[58,73],[42,12],[62,-29],[83,13],[42,-22],[67,-11],[51,-49],[115,-41],[20,-19],[84,-29],[7,-81],[17,-23],[-21,-96],[38,-19],[20,-44],[62,-18],[100,-5],[66,-21],[61,-35],[35,-54],[175,-9],[46,25],[120,-40],[15,-69],[52,-119],[-38,-52]],[[78451,49223],[0,-541],[0,-362],[0,-565]],[[78451,47755],[0,-153],[0,-78],[0,-76]],[[78451,47448],[0,-232],[0,-117]],[[78451,47099],[0,-118]],[[78451,46981],[0,-73],[-5,-4],[-38,0],[-56,0],[-47,0],[-99,1],[-76,0],[-61,0]],[[78069,46905],[0,-309]],[[45587,43205],[-2,-110],[-19,-68],[-40,28],[-11,76],[54,137],[18,-63]],[[99688,40468],[106,-138],[18,-66],[16,-8],[37,-135],[62,-105],[54,-124],[-7,-110],[58,6],[31,-219],[27,-79],[18,-8],[16,-96],[34,-49],[6,-63],[24,-51],[-6,-39],[17,-49],[21,-9],[9,-52],[-2,-146],[5,-44],[-21,-157],[-22,-96],[-37,-91],[-122,-147],[-95,-65],[-116,-52],[-36,-47],[-48,-21],[-132,52],[-55,73],[-26,85],[-25,166],[-40,169],[-1,126],[-19,105],[9,32],[-20,221],[7,43],[-16,128],[1,76],[26,91],[-1,80],[18,168],[26,64],[-6,99],[8,91],[39,47],[25,129],[1,44],[-24,53],[83,70],[5,-32],[53,29],[-60,69],[-36,23],[-33,-18],[-53,46],[-14,46],[30,34],[91,3],[69,-130],[23,-22]],[[80041,16088],[1,-15]],[[80042,16073],[4,-12],[1,-5],[-2,-6]],[[80045,16050],[-110,-90]],[[79935,15960],[-25,-15],[-25,-7],[-34,-18],[-44,9],[-61,-27],[-31,-55],[-11,-1],[-7,-4],[-8,-7],[-6,-9],[-1,-12],[4,-8],[11,-10]],[[79697,15796],[-7,-35]],[[79690,15761],[-33,-36],[-2,-7],[1,-5],[4,-11]],[[79660,15702],[0,-11]],[[79660,15691],[-6,-29],[-14,-18],[-12,-46],[-71,28],[-49,3],[-10,11],[-22,33],[-23,25],[-3,4],[-2,17],[-48,86],[-4,3],[-5,0],[-8,-4],[-19,4],[-39,172],[-18,22],[-7,12],[-10,35],[-32,106],[-3,9],[-11,24]],[[79244,16188],[-6,6],[-5,4],[-5,6],[-4,3]],[[79224,16207],[5,15],[0,10],[23,16],[1,-3],[1,-4],[5,0],[13,18],[44,20],[21,15],[8,23],[2,2],[9,-1],[2,3],[2,11],[4,10],[20,32],[0,7],[-1,6],[-2,4],[-2,3],[1,4],[4,4],[10,11],[1,6],[1,14],[1,6],[25,14],[4,4]],[[79426,16457],[-3,22]],[[79423,16479],[0,6],[3,5],[11,7],[21,39],[8,22],[0,4],[-2,11],[3,5],[3,-5],[2,2],[3,2],[3,1],[-4,6],[-4,6],[-2,7]],[[79468,16597],[11,4]],[[79479,16601],[31,74],[43,-4],[11,7],[9,26],[40,3],[52,95],[29,2],[17,-6],[9,1],[8,5]],[[79728,16804],[18,35]],[[79746,16839],[7,10],[8,5],[53,5],[30,24]],[[79844,16883],[18,-16]],[[79862,16867],[5,-22],[3,-26],[4,-8],[17,-1],[17,-36],[3,-4],[18,-6],[16,-20],[16,-39],[21,-30],[56,-52],[31,-47],[13,-6],[15,-1],[12,-6],[1,-36],[5,-7],[11,-14],[30,-99],[-9,-23],[0,-19],[-2,-7],[-3,-6],[-5,-4],[-21,-11],[-11,-8],[-8,-11],[-3,-13],[0,-13],[0,-3],[2,-50],[-4,-7],[-30,-13],[-11,-13],[-18,-51],[-3,-32],[0,-14],[10,-18],[1,-3]],[[77605,68145],[-24,38],[-10,21],[17,168],[42,34],[-10,71],[-67,39],[-20,61],[-127,9],[-57,-25],[-134,61],[-55,39],[-39,2],[-38,48],[-54,-15]],[[77029,68696],[-17,167],[-31,105],[-25,35],[-11,79],[3,123]],[[76948,69205],[14,4],[23,0],[16,4],[14,48],[141,89],[34,2],[108,46],[49,21],[46,-16],[113,2],[65,-27],[79,35],[50,-53],[36,-8],[23,30],[45,10],[9,-2],[64,-26],[50,16],[44,-17],[11,-2],[40,6],[96,-46],[21,0],[47,22],[61,-22],[36,17],[7,7],[31,38],[15,11],[13,6],[35,13],[12,-2],[4,1],[2,4],[2,14],[13,2],[35,-93],[48,-65],[133,-21],[26,4],[48,-8],[7,-7],[8,-20],[8,-11],[179,-143],[39,-66],[121,-47]],[[78735,68407],[-5,-65]],[[78730,68342],[-1,-8],[2,-12]],[[78741,68300],[2,-12],[-2,-13]],[[78705,68246],[-44,-107]],[[78760,68074],[1,-4],[-1,-3]],[[78760,68067],[-6,-36]],[[77939,67862],[-46,22],[-14,4]],[[77879,67888],[2,3],[0,3],[-1,4],[-3,2],[-7,8]],[[77870,67908],[-2,5],[1,6]],[[77869,67919],[8,10],[7,9],[-1,14],[-6,29],[-2,13],[-16,35],[-176,128],[-4,3],[-4,1],[-13,-1],[-22,11],[-18,-2],[-10,-19],[-7,-5]],[[71232,65526],[-3,-9],[-2,-9]],[[71225,65491],[4,0],[-2,-2]],[[71224,65482],[4,-3],[3,-4],[1,-20]],[[71375,65301],[1,-5]],[[71124,65181],[19,51]],[[71079,65344],[-2,35]],[[76948,69205],[-32,112],[16,213],[18,56],[2,98],[60,38],[70,79],[8,156],[105,165],[115,28],[185,88],[67,-97],[143,-119],[38,-14],[46,-159],[35,-34],[135,-57],[99,29],[98,68],[65,66],[10,71],[-19,211],[-26,98],[43,13]],[[79248,70122],[98,-25],[80,8]],[[79426,70105],[-2,-23],[1,-14],[-5,-13],[0,-10],[9,-9],[40,-17]],[[79469,70019],[26,-25],[50,-36]],[[79545,69958],[-5,-82]],[[79540,69876],[-12,-9],[-36,-16],[-7,-9],[6,-11],[9,-4],[9,-7],[2,-15]],[[79511,69805],[-13,-53]],[[79498,69752],[-26,-47],[4,-25],[33,15],[17,4],[16,-4],[32,-27],[2,-9],[-7,-14],[-9,-14],[-5,-12],[6,-10],[38,-24],[5,-11],[1,-40]],[[79605,69534],[50,-35]],[[79655,69499],[2,-7],[-2,-6]],[[79655,69486],[-10,-8],[-3,-7],[1,-6],[4,-6],[19,-23],[3,-4],[2,-8],[-2,-21],[1,-13],[3,-13],[16,-43],[1,-6],[-1,-10],[-6,-9],[-3,-6],[-6,-29],[-3,-14],[-7,-12]],[[112352,48244],[4,-24],[-8,-11],[-4,34],[8,1]],[[68197,55792],[16,-23],[9,-27]],[[68249,55627],[2,-17]],[[68223,55387],[-1,-10],[2,-10]],[[68317,54980],[1,-46]],[[68409,54523],[-12,-104]],[[68397,54419],[15,8],[15,-3]],[[67498,53767],[11,-40],[21,-47]],[[65568,52265],[0,-621]],[[65568,51644],[-27,0],[-24,0],[16,-125],[-11,-61],[19,-106],[-16,-43],[-79,-19],[-78,6],[-79,-7],[-29,-24],[-94,-116],[-64,-7],[-51,37],[-83,-30],[-115,80],[-79,18],[-63,-6],[-181,-78],[29,-87],[-8,-68],[-51,-69],[-63,-140],[-31,-118],[-120,-45],[-53,-241],[-54,-329],[-47,-173],[-107,-125],[-106,-98],[-27,-43],[-66,-192],[-30,-67],[-176,-118],[-46,-62],[-49,-173],[-31,-192],[-27,-210],[-8,-192],[-10,-86],[-35,-74],[-51,-68],[-72,-137],[8,-67],[-24,-93],[-30,-61],[-34,-31],[-120,-7],[-117,7],[-112,25],[-111,6],[-57,-12],[-149,0],[-57,-7],[-110,-32],[17,108],[1,116],[18,93],[40,123],[43,89],[70,25],[21,39],[14,82],[27,45],[7,92],[19,104],[46,44],[14,132],[28,98],[31,62],[5,42],[52,107],[23,63],[1,107],[57,41],[67,121],[56,76],[48,92],[60,42],[42,76],[28,144],[-6,184],[26,143],[25,49],[36,160],[39,86],[15,102],[-5,27],[32,79],[43,26],[54,83],[42,6],[47,35],[117,116],[45,105],[38,196],[38,92],[50,223],[42,35],[37,106],[48,35],[69,16],[56,-2],[69,33],[104,27],[21,21],[200,124],[60,117],[23,23],[85,130],[109,79],[72,62],[47,63],[40,84],[32,35],[47,89],[33,105],[90,149],[62,178],[17,171],[-34,86],[-71,89],[26,65],[-6,218],[9,138],[-13,22],[60,143],[8,60],[115,182],[37,124],[-9,76],[17,75],[-5,65],[58,66],[44,70],[49,52],[90,152],[40,87],[30,-3],[79,88],[52,16],[91,59],[143,76],[102,94],[50,24],[66,64],[39,58],[60,150],[43,85],[101,286],[32,151],[71,233],[37,171],[55,7],[26,25],[44,-6],[77,64],[22,-48],[7,-83],[28,-79],[70,-104],[112,-109],[152,-54],[159,60],[22,-22],[53,3],[34,43],[32,-34],[69,-22],[83,25],[57,47],[37,9],[14,-33],[2,-63],[131,-48],[56,33],[75,-37]],[[71737,61584],[-13,-15],[-11,17]],[[79682,62646],[-9,14]],[[79673,62660],[-3,6]],[[79670,62666],[0,20],[-10,21]],[[79660,62707],[11,44]],[[79671,62751],[-3,8],[1,10]],[[79669,62769],[-4,63],[-16,39]],[[79649,62871],[7,28]],[[79656,62899],[0,3],[-4,7],[-1,5],[1,4],[2,6],[0,4]],[[79654,62928],[-1,5],[-3,4],[-1,4],[-1,6],[-9,32]],[[79639,62979],[0,14],[6,36]],[[79645,63029],[10,34],[2,15],[5,14]],[[79662,63092],[-2,5],[-12,21]],[[79648,63118],[0,6],[5,1],[3,2],[2,19],[12,5],[4,5],[6,12],[0,3],[0,7],[-2,13],[1,5],[4,2],[2,1],[3,20]],[[79688,63219],[12,24]],[[79700,63243],[0,29]],[[79700,63272],[-10,19]],[[79690,63291],[10,64]],[[79700,63355],[0,8],[0,9]],[[79700,63372],[-4,16],[-22,60],[-15,29],[-6,17],[-3,38],[-7,4]],[[79643,63536],[3,21]],[[79646,63557],[-25,50],[-28,17],[-25,23],[-12,14],[-4,3],[-3,2],[-2,2],[-14,18],[-32,86],[-58,57]],[[79443,63829],[3,19],[-8,7]],[[79438,63855],[2,7],[1,6]],[[79441,63868],[3,5],[2,3]],[[79446,63876],[-2,5],[-5,6],[-35,14],[-10,27],[-1,1],[-1,2],[0,6],[0,2],[-1,4],[-4,13],[-11,4],[-11,12],[-24,36],[-9,16],[-4,14]],[[79328,64038],[9,2],[-3,22]],[[79334,64062],[-26,38],[-2,47],[-59,104],[-7,12],[-2,14],[0,4],[5,5],[0,3],[0,1],[-2,3],[-3,3],[-5,2],[-5,-4],[-7,2],[-10,8],[-11,38],[-51,33],[-53,10],[-18,-10]],[[79078,64375],[0,5],[2,9],[5,8],[24,19],[55,42],[38,-26],[32,28],[57,-21],[64,45],[61,22],[96,-12],[66,-69],[50,-12],[54,-67],[36,15],[56,-53],[138,-24],[13,-54],[46,-56],[66,26],[44,-135],[-47,-138],[93,-112],[75,-18],[-10,-124],[29,-47],[-18,-62],[109,-58],[34,-31],[8,-48],[-14,-127],[30,-13],[33,-78],[-62,0],[-27,-20],[-47,71],[-48,-57],[-48,43],[-104,-47],[1,91],[-17,22],[-82,-52],[-6,-121],[33,-47],[-26,-48],[-8,-70],[-66,-19],[-7,-77],[-62,-46],[-39,-65],[24,-49],[-21,-47],[-82,12],[-19,-17],[-8,-20]],[[87385,26354],[12,-38],[-10,-64],[-47,21],[-3,81],[48,0]],[[87779,27072],[0,-35],[-41,-21],[40,-74],[16,43],[27,-80],[30,-11],[18,-65],[-9,-83],[63,-75],[51,-87],[1,-39],[30,-57],[-3,-83],[15,-101],[22,-17],[4,-85],[38,-177],[12,-169],[-5,-89],[20,-54],[-8,-104],[7,-98],[28,-163],[27,-95],[47,-100],[10,-75],[-28,-176],[-34,-101],[-1,-29],[-37,-91],[-28,-17],[-49,78],[-24,79],[0,64],[-28,40],[-2,87],[-58,-8],[-42,-68],[36,-223],[-19,-92],[8,-37],[54,-60],[-5,-122],[6,-88],[-47,-97],[20,-91],[-58,-18],[-37,-97],[-37,-150],[28,-234],[-2,-82],[-33,-168],[-20,-220],[-45,-144],[-20,-116],[-44,-136],[-35,-195],[-48,-189],[-13,-134],[-16,-84],[-31,-100],[-54,-233],[-38,-220],[-3,-51],[-29,-131],[-19,-117],[-49,-236],[-97,-341],[-18,-82],[-26,-260],[-26,-129],[-10,-89],[-45,-207],[-20,-163],[-27,-100],[-16,-15],[-46,-176],[-10,-100],[-44,-181],[-26,-41],[4,-40],[-65,-97],[-16,12],[-59,-66],[-46,-18],[-101,12],[-57,-21],[-77,-50],[-100,-81],[-39,-53],[-69,-48],[-137,-7],[-6,33],[-52,36],[-58,79],[-40,26],[-137,28],[-71,118],[-60,41],[-10,84],[-28,56],[0,74],[-33,91],[-52,62],[-12,45],[-6,92],[2,196],[-10,54],[1,87],[42,43],[3,71],[-49,71],[-17,163],[-38,46],[-50,107],[-27,149],[-3,101],[-21,104],[28,55],[-18,26],[0,55],[34,165],[29,58],[23,2],[0,165],[10,44],[34,36],[56,-4],[30,35],[20,93],[14,119],[24,72],[27,26],[21,58],[13,82],[50,76],[3,42],[36,105],[31,51],[16,89],[-42,85],[16,44],[-2,57],[29,55],[-9,65],[-88,224],[11,154],[-28,121],[-52,113],[-3,141],[-15,161],[13,104],[-40,104],[4,90],[91,223],[23,77],[74,167],[-6,94],[17,39],[-23,69],[20,115],[32,7],[83,-13],[39,-17],[71,66],[38,79],[48,41],[23,-115],[30,34],[-10,50],[100,19],[-7,57],[27,42],[51,-19],[23,22],[49,-8],[51,54],[39,-33],[-15,-38],[32,-76],[28,-14],[6,80],[-29,87],[10,39],[49,76],[10,-3],[150,177],[35,17],[10,-51],[30,-26],[-41,-105],[101,38],[-46,78],[-20,55],[13,50],[43,56],[33,76],[-1,47],[61,108],[18,-25],[3,-83],[-31,-74],[-4,-76],[28,5],[78,235],[25,62],[-20,95],[3,48],[40,95],[42,-20],[12,39],[35,21],[1,41],[-42,49],[29,32],[-38,34],[-15,71],[10,111],[50,53],[42,-48],[15,-93],[33,-37],[23,17],[2,73],[35,84],[41,7],[24,43],[58,20],[35,93],[-8,32],[10,78],[38,95],[4,73],[-33,107],[7,46],[-44,67],[32,26],[38,-35],[12,84],[51,56],[32,60],[0,60],[22,65],[25,-35],[11,-55]],[[96989,36542],[-8,-1],[-6,11],[1,14],[7,11],[10,2],[5,-10],[-2,-16],[-7,-11]],[[97025,37118],[-5,-5],[-7,3],[-1,7],[2,10],[6,14],[2,16],[6,7],[4,-1],[0,-10],[-3,-12],[-1,-14],[-3,-15]],[[26437,46121],[-55,25],[25,61],[18,-15],[12,-71]],[[35690,47258],[-69,-156],[-35,11],[4,64],[27,68],[73,13]],[[28075,47956],[43,-25],[-6,-58],[-32,24],[-5,59]],[[26036,49700],[41,1],[66,-89],[-7,-36],[-100,124]],[[25964,49990],[-24,-123],[-21,32],[27,109],[18,-18]],[[26386,50661],[-48,-105],[2,88],[46,17]],[[24808,51912],[-18,-42],[-41,61],[36,66],[30,17],[-7,-102]],[[23642,52419],[-49,94],[27,42],[21,-46],[1,-90]],[[25917,52610],[3,-54],[31,-72],[-32,-157],[-40,4],[-77,63],[37,59],[-5,64],[23,79],[60,14]],[[25452,52802],[39,-47],[18,-46],[-8,-46],[72,-12],[3,-100],[28,-47],[-6,-42],[-90,115],[-91,147],[15,76],[20,2]],[[31713,50595],[-10,-149],[-59,-208],[-53,-129],[-74,-411],[-25,-313],[-2,-167],[-18,-296],[10,-178],[-20,-101],[-36,-113],[26,-119],[18,-111],[5,-98],[58,-160],[40,-70],[62,-73],[10,-27],[-11,-89],[-33,-46],[-15,58],[37,42],[-2,31],[-40,51],[-53,97],[-33,20],[19,-117],[32,-83],[34,-13],[-4,-50],[61,-214],[54,-151],[18,-101],[44,-82],[137,-221],[85,-178],[18,-78],[19,-127],[31,-138],[46,-55],[44,-98],[25,-5],[47,-211],[48,25],[89,-31],[110,1],[61,-59],[18,-36],[74,-20],[34,-91],[34,-55],[19,-59],[43,-30],[100,30],[132,72],[69,30],[34,-7],[5,44],[52,16],[193,2],[33,13],[66,97],[27,0],[79,30],[132,19],[42,-6],[-17,-47],[1,-48],[44,-1],[19,-37],[55,-17],[53,-1],[15,39],[66,38],[26,101],[-40,22],[-24,67],[104,85],[31,43],[55,47],[51,74],[28,57],[8,193],[17,58],[71,87],[-7,89],[9,211],[-6,78],[15,129],[34,159],[11,20],[89,82],[120,74],[254,49],[162,58],[36,48],[60,25],[63,-12],[58,37],[65,-9],[131,-50],[56,-32],[90,-16],[42,48],[-2,62],[52,-33],[28,-75],[36,-8],[7,-141],[28,-25],[-33,-90],[-20,-101],[-73,-146],[-64,-79],[-80,-186],[-10,-76],[0,-113],[-10,-33],[-40,-37],[-10,-39],[-41,-16],[1,-51],[25,-29],[94,4],[-4,-41],[-36,-54],[-50,-20],[-12,-82],[19,-12],[27,59],[27,6],[-20,-119],[-22,-70],[-21,-157],[-23,-53],[-19,-170],[-28,-89],[-34,112],[-55,34],[29,119],[-13,114],[-27,-45],[-68,-192],[-8,-7]],[[34189,44839],[14,-38]],[[34211,44748],[-2,-4],[-4,-5],[3,-4]],[[34296,44673],[4,-12],[-11,4]],[[34286,44661],[1,-3]],[[34275,44626],[3,-18]],[[34270,44595],[-1,-43],[11,-10]],[[34274,44531],[5,-12]],[[34271,44496],[9,5]],[[33775,44463],[-174,-468]],[[33607,43701],[4,-20],[0,-18]],[[33600,43552],[-37,27],[-151,237],[-48,84],[0,23],[-60,58],[-95,146],[-162,209],[-112,106],[18,47],[-55,23],[-32,59],[-37,-10],[-53,51],[-29,-62],[-100,6],[43,53],[-26,51],[-42,-43],[-34,83],[-80,-100],[61,-12],[3,-22],[-130,-33],[-76,-113],[-53,-12],[-34,-28],[-114,-52],[-106,-89],[-75,7],[-48,-23],[-48,31],[-62,16],[-69,46],[-52,59],[-41,20],[-73,5],[-27,15],[-94,7],[-119,115],[-14,28],[-124,42],[-47,28],[-80,143],[-29,-17],[-198,87],[-90,9],[-51,29],[-96,110],[-390,213],[-66,100],[-106,69],[-15,55],[-57,32],[-11,45],[-27,33],[-26,60],[-86,62],[-59,-46],[-38,28],[-117,54],[-57,11],[-107,75],[-34,3],[-96,46],[-52,41],[-29,98],[-51,68],[3,33],[-36,53],[-70,83],[-78,59],[-57,32],[-9,55],[-37,-5],[-71,35],[-37,42],[-28,1],[-80,86],[-21,49],[-6,70],[-63,64],[-68,139],[-37,88],[-11,104],[-39,70],[-16,57],[47,51],[94,16],[37,75],[-50,79],[-19,-18],[-39,23],[42,97],[36,62],[30,21],[7,88],[-10,84],[21,63],[-29,44],[-59,54],[-83,220],[-9,55],[1,129],[-30,154],[-26,82],[-55,90],[-34,30],[-72,136],[-80,111],[-35,109],[-35,38],[-53,93],[-16,8],[-41,133],[-52,83],[-131,139],[-10,29],[-53,58],[25,33],[-16,68],[-40,-31],[-44,30],[-32,53],[-66,33],[-16,85],[-45,60],[-12,64],[30,25],[0,56],[-43,35],[-44,-7],[-45,67],[-40,23],[-38,52],[-28,8],[-24,82],[-36,-30],[-88,30],[-22,70],[-102,89],[8,63],[-5,79],[35,69],[27,28],[17,95],[-12,102],[-66,107],[-46,34],[-55,-30],[-29,17],[-34,59],[-20,93],[-3,67],[-24,33],[-42,-7],[-75,28],[-45,61],[-37,91],[-21,-6],[-27,138],[14,71],[1,72],[-32,37],[-52,18],[-22,-32],[-53,54],[-22,-16],[-73,72],[-71,158],[-14,44],[-91,50],[-19,76],[-61,83],[10,38],[-52,51],[-46,62],[-29,140],[6,39],[-21,48],[-35,-6],[-24,34],[16,68],[-50,81],[-11,45],[-58,135],[-24,10],[-1,163],[-36,62],[-9,86],[-45,66],[-35,85],[-19,87],[11,104],[17,32],[3,77],[-26,37],[-166,49],[-23,35],[-19,90],[-83,61],[-58,-65],[-49,2],[-129,112],[-34,53],[-62,30],[-33,-12],[20,-83],[-29,-81],[0,-84],[-13,-140],[21,-96],[44,-41],[12,-122],[-4,-66],[18,-50],[8,-82],[-11,-148],[48,-134],[40,-37],[14,-77],[46,-7],[87,-109],[24,-17],[57,-82],[24,-16],[55,-97],[-12,-21],[69,-168],[38,-28],[10,-62],[35,24],[26,-59],[34,-148],[39,-30],[38,12],[20,-58],[-8,-61],[30,-57],[-3,-108],[16,-12],[-5,-82],[26,-68],[40,-62],[87,-56],[15,-29],[17,-93],[51,-126],[55,-28],[16,-30],[-18,-56],[56,-92],[-14,-59],[65,-120],[23,27],[-45,66],[-22,118],[12,10],[66,-93],[34,-32],[-4,-73],[49,-36],[-7,-72],[26,-44],[-2,-49],[30,-109],[-16,-69],[21,-114],[31,-33],[13,-68],[62,-98],[48,-195],[34,-68],[22,-13],[38,-126],[-25,-79],[-6,-78],[20,-54],[1,-65],[46,-92],[61,-23],[40,26],[-12,68],[38,10],[23,-56],[58,-52],[12,-76],[61,11],[-5,-68],[55,-96],[7,-93],[78,-54],[19,-63],[0,-100],[-14,-63],[-26,-55],[-69,-47],[-8,-26],[-62,-71],[-23,-1],[-40,49],[-15,41],[-26,188],[-54,136],[-38,42],[-65,45],[-92,140],[-86,121],[-72,70],[-82,65],[-66,93],[-24,70],[-51,-49],[-14,90],[-45,78],[-46,-3],[-14,62],[8,41],[-15,89],[25,108],[5,227],[-4,54],[-47,176],[-37,32],[-20,80],[-37,51],[-22,-17],[-87,84],[-128,142],[2,32],[-34,65],[-26,22],[-27,-26],[-30,27],[-54,-1],[-16,-45],[-36,4],[-33,47],[-35,91],[-55,30],[-17,-12],[-41,79],[-68,25],[-76,57],[-7,104],[-34,44],[-53,26],[-18,50],[-41,59],[-43,13],[-20,65],[49,9],[122,-39],[41,0],[66,62],[16,-85],[52,-41],[75,-9],[-15,59],[-43,-27],[-27,74],[52,123],[-28,59],[21,53],[-26,30],[32,126],[-47,116],[-41,7],[-50,125],[-49,40],[-38,104],[-35,15],[-96,160],[-82,32],[-38,62],[-82,51],[-76,89],[5,47],[-16,63],[-32,21],[10,78],[-5,90],[-15,66],[-36,33],[-28,-25],[-17,74],[7,91],[-14,115],[-42,30],[-28,60],[-33,0],[10,118],[-12,43],[-72,137],[-56,70],[22,136],[0,53],[-52,32],[-34,47],[-41,162],[-28,18],[-36,109],[-3,48]],[[24064,54654],[228,28],[282,34],[409,50],[-30,-73],[-8,-58],[330,-165],[312,-157],[313,-156],[315,-156],[167,-87],[23,-4],[398,0],[278,0],[393,0],[0,278],[406,-2],[244,0],[61,-36],[27,-84],[46,-82],[61,-31],[56,-68],[35,-66],[68,-68],[14,-42],[72,-95],[52,-24],[85,-83],[46,-76],[14,-71],[38,-107],[26,-45],[-6,-100],[7,-55],[42,-95],[16,-75],[70,-80],[30,-6],[80,-116],[50,-29],[51,-9],[47,-65],[50,-15],[24,-41],[69,-49],[58,-11],[61,118],[35,27],[4,76],[40,154],[38,94],[64,25],[42,-4],[39,69],[74,-54],[53,10],[130,-26],[29,13],[57,-20],[17,-54],[56,-42],[21,-67],[48,-26],[9,-42],[76,-74],[21,-61],[35,-35],[17,-118],[41,-75],[10,-59],[36,-71],[43,-184],[34,-55],[47,-32],[28,-84],[47,-73],[6,-60],[47,-51],[15,-38],[38,-8],[36,-46],[14,-90],[-10,-55],[25,-81],[-12,-93],[82,-142],[32,-177],[19,-9],[11,-73],[111,-25],[59,-78],[23,13],[81,-42],[26,-51],[31,-22],[107,-12],[54,5],[46,-19],[98,-111],[66,66],[43,2]],[[133815,38149],[-7,-20],[-10,2],[8,14],[6,20],[9,55],[18,20],[14,23],[-3,-24],[-20,-24],[-15,-66]],[[134558,38901],[14,-13],[29,2],[26,-35],[-10,2],[-15,14],[-12,7],[-18,-2],[-8,5],[-6,20]],[[134376,38958],[48,-33],[64,16],[-11,-10],[-23,-9],[-17,-8],[-11,0],[-12,2],[-41,24],[-23,28],[7,10],[19,-20]],[[133506,39062],[-6,-8],[-38,6],[-16,11],[1,8],[30,-8],[29,-9]],[[132762,41439],[-9,-4],[-7,4],[5,7],[11,2],[4,-2],[-4,-7]],[[77143,60659],[24,-3],[13,-5],[6,0],[12,13],[5,4],[37,26],[48,18],[59,-17],[53,27]],[[77400,60722],[42,-22]],[[70509,46377],[1,-612],[1,-305],[0,-410],[-14,-30],[-5,-85],[0,-243],[-48,-72],[-34,-132],[4,-63],[-30,-60],[-12,-107],[-24,-30],[-44,-21],[-64,-84],[-7,-88],[-167,46],[-23,-6],[-5,-49],[-351,-19],[-287,-15],[-23,-15],[-114,-165],[-79,-14],[-37,-18],[-60,33],[-61,-18],[-51,20],[-2,-52]],[[66496,41059],[9,13],[-2,24]],[[66514,41121],[-15,17],[-12,35]],[[66329,41090],[4,-14],[-3,-28],[-3,-20]],[[64531,42212],[4,48],[-23,48],[-8,61],[22,46],[-18,212],[-32,22],[-9,97],[-22,57],[-54,25],[-28,-57],[-27,46],[3,51],[-41,49],[-38,99],[33,29],[19,49],[0,48],[-25,73],[11,87],[-45,116],[-40,22],[-5,80],[26,66],[-37,92]],[[64197,43678],[14,-8]],[[64211,43670],[33,13]],[[64244,43683],[34,-11],[29,8]],[[64307,43680],[52,70],[6,4],[0,5],[-3,9],[0,4],[2,22],[4,21],[1,11],[-1,9],[-7,12],[-7,-4],[-4,4]],[[64350,43847],[1,3],[1,18],[4,26],[0,33]],[[64356,43927],[46,224],[32,-9],[45,46],[44,1],[35,-81],[7,-12],[99,-113],[50,-103],[33,114],[31,34],[4,50],[77,12],[87,-4],[67,-39],[114,-1],[44,31],[18,6],[95,6],[-4,34],[-7,39],[0,19],[6,16],[23,43],[17,2],[1,-20],[-5,-42],[-3,-57],[67,0],[60,0],[7,0],[35,0],[223,0],[58,0],[60,0],[192,0],[132,0],[64,0],[64,-1],[63,0],[60,0],[58,0],[105,0],[222,1],[29,253],[22,175],[7,58],[3,19],[-1,3],[0,5],[-4,5],[-15,18],[-17,16],[-15,17],[-46,49],[-6,20],[-6,81],[-3,56],[-12,167],[-4,56],[-4,55],[-7,112],[-16,222],[-7,112],[-3,56],[-5,58],[-3,57],[-20,287],[-40,593],[-27,386],[-12,154],[-6,67],[-2,36],[-12,159]],[[66550,47475],[-39,559]],[[66511,48034],[-22,299],[-5,74],[-6,75],[-5,74],[-11,149],[-11,150],[-47,653],[-14,191],[-11,148],[-7,98],[-4,49],[84,0],[85,0],[85,0],[84,0],[85,0],[85,1],[84,0],[85,0]],[[74466,56703],[-15,-29],[-70,50],[-8,57],[71,-27],[22,-51]],[[106494,40766],[16,-28],[-67,-97],[3,60],[48,65]],[[106506,41659],[-38,15],[20,95],[34,28],[-16,-138]],[[106605,41838],[3,-109],[-42,-36],[-22,86],[0,45],[61,14]],[[106596,41967],[21,-47],[-36,-26],[-15,77],[30,-4]],[[106434,42188],[-33,-34],[-27,34],[58,35],[2,-35]],[[106551,42316],[25,7],[-1,-63],[-27,-74],[-35,-15],[12,109],[-12,53],[12,44],[28,-20],[-2,-41]],[[105023,44336],[-8,99],[38,36],[47,101],[22,-31],[-33,-99],[-39,-28],[-27,-78]],[[106233,44573],[-43,48],[10,39],[-12,53],[26,37],[32,-16],[-13,-161]],[[104745,46208],[22,2],[7,-72],[-18,-48],[-25,2],[-57,99],[48,42],[23,-25]],[[104791,46591],[30,-6],[34,-38],[-1,-34],[-42,-52],[-33,13],[-50,120],[18,41],[44,-44]],[[107359,47455],[9,-48]],[[107244,47338],[-2,-10],[-2,-7],[-8,-20]],[[107209,47147],[-8,-43]],[[107201,47104],[-17,16],[-8,18],[-19,9],[-16,34],[-41,-16],[-26,-55],[-45,-13],[-57,24],[-6,-62],[15,-31],[-33,-59],[-55,-23],[-45,36],[-23,-3],[-38,-47],[-4,-119],[-13,-37],[-35,-26],[-29,37],[-63,-37],[-42,-43],[-121,20],[-40,42],[-36,8],[-4,-93],[-64,-51],[3,-39],[-31,-60],[15,-59],[2,-116],[-31,-47],[-27,-69],[23,-37],[15,-150],[-2,-26],[-53,-18],[-41,-37],[-27,-2],[6,-96],[41,-3],[48,-113],[26,-109],[-26,-54],[32,-125],[81,-108],[45,-126],[46,-62],[37,-92],[47,-25],[33,-100],[-26,-79],[35,-63],[32,-97],[10,-100],[50,45],[43,-6],[-7,-65],[-30,-92],[-56,3],[-29,-85],[-3,-87],[-12,-62],[9,-175],[-3,-61],[-32,18],[-27,-14],[-7,-65],[-39,20],[-46,-101],[30,-198],[22,-52],[45,-69],[50,-143],[79,-109],[73,-82],[27,-81],[30,-45],[6,-62],[16,-31],[0,-82],[14,-96],[1,-122],[-34,-35],[-3,-83],[22,-27],[7,-94],[16,-67],[70,-89],[-3,-77],[27,-129],[3,-81],[31,4],[-11,-66],[22,-31],[-7,-50],[28,-48],[-9,-56],[-29,-58],[-35,-22],[-5,-61],[-70,-186],[-12,-55],[-80,-92],[-10,-82],[-28,-7],[-53,-78],[-7,-41],[17,-63],[-17,-105]],[[106683,40943],[-20,-79],[-40,-111],[-26,-8],[-12,107],[15,99],[-14,56],[1,63],[-13,98],[44,34],[22,89],[29,7],[-1,106],[19,107],[-23,73],[27,231],[-32,-48],[-28,30],[41,143],[-6,52],[-58,143],[48,22],[9,30],[-36,41],[6,80],[26,93],[-40,196],[-3,99],[-37,60],[-18,120],[-51,120],[-22,26],[4,52],[-21,43],[-14,-109],[-23,6],[0,108],[-15,83],[18,76],[-44,122],[-7,69],[-50,182],[-19,88],[8,50],[-8,61],[4,72],[-30,102],[26,42],[-20,122],[-6,147],[-14,42],[-42,61],[27,169],[-10,95],[10,43],[-40,19],[-55,-13],[-25,72],[-32,40],[-27,138],[6,48],[-38,84],[-11,72],[-80,95],[18,-74],[-24,-45],[24,-115],[-42,-178],[-28,-42],[-43,-94],[-68,-25],[-65,74],[-8,-26],[34,-72],[-19,-45],[-84,-34],[-33,-54],[-36,-8],[-49,-40],[-26,-61],[-10,-61],[-54,-89],[-48,-55],[-41,16],[-2,60],[-42,-38],[-22,72],[-55,-80],[-45,12],[-7,110],[-19,0],[-26,-64],[-23,-2],[-37,66],[31,52],[15,102],[-15,45],[-49,2],[-3,-60],[-32,-72],[-33,-48],[-38,-12],[-11,42],[2,71],[22,234],[22,-6],[12,108],[15,53],[-9,61],[34,38],[-3,63],[21,73],[0,66],[23,22],[-7,144],[16,45],[-20,81],[-16,24],[-22,115],[14,75],[-33,123],[-3,43],[-42,72],[-25,163],[-31,64],[-30,-3],[-5,96],[10,29],[-12,100],[-30,-48],[6,-127],[-16,-39],[-70,68],[-96,213],[-5,48],[48,7],[21,-60],[50,-43],[52,39],[22,54],[-1,48],[-27,6],[-67,89],[-18,66],[-35,36],[40,83],[-54,0],[-58,38],[-14,68],[-40,-25],[-31,10],[-17,-43],[-38,0],[-28,57],[17,39],[-32,38],[-29,-54],[-33,47],[10,37],[39,30],[-23,50],[-4,55],[-68,-37],[-44,67],[-33,88],[-27,19],[-45,224]],[[76302,60415],[-75,53],[-11,65],[-86,110],[-17,42],[-34,-11],[-34,63],[-29,-4],[-66,69],[-3,50]],[[75966,60870],[7,6],[5,3]],[[75953,61120],[71,17]],[[76024,61137],[-7,46],[3,37]],[[76127,61427],[2,11]],[[76237,61454],[-8,-32]],[[76229,61422],[17,-27],[52,-27],[46,-62],[5,-8],[6,-18],[3,-6],[42,-46],[36,-2],[35,-46],[12,-1],[13,1],[22,14],[12,-22],[22,-19],[38,-43],[10,-3],[20,-3],[54,-37],[6,-9],[1,-16],[-4,-24]],[[108017,66057],[-5,-26],[9,-15]],[[108021,66016],[-14,-51]],[[108007,65965],[5,-19],[11,-12],[24,-20],[8,-18]],[[108055,65896],[-21,-42]],[[108034,65854],[20,-65],[56,-13],[15,-13],[29,-55],[11,-9],[56,-15],[81,-49],[87,1],[19,-51],[60,-11],[74,-40],[25,-1],[45,34],[72,-23],[57,-1],[109,95],[26,8],[52,0],[24,21],[9,4],[36,-1],[55,25],[44,-6],[21,4],[10,5],[41,37],[35,12],[119,-34],[53,4],[28,-12],[20,-3],[32,-3],[20,-17]],[[109475,65682],[2,-16]],[[109477,65666],[2,-5],[2,-3]],[[109481,65658],[72,-26],[75,22],[83,0],[34,-11],[16,-10],[57,-52],[14,-7],[4,-7],[5,-23]],[[109841,65544],[20,-40]],[[109861,65504],[3,-7],[5,-4],[17,-10],[19,-19],[24,-14],[53,-13],[139,-3],[22,-14],[8,-3],[13,2],[5,0]],[[110169,65419],[36,-8]],[[110205,65411],[4,-7],[-2,-15],[-9,-28],[10,-67],[30,-96],[82,-41],[11,-25],[22,-28],[53,-50],[26,-18],[148,13],[40,-12],[10,0],[39,10],[49,-4],[10,-4],[9,-5],[28,-13],[15,2],[4,-4]],[[110784,65019],[2,-3],[2,-11],[2,-5],[15,-8]],[[110805,64992],[82,6],[22,-9],[12,-15],[139,-40],[73,49],[88,-60],[49,-4],[42,15],[47,28],[144,96],[63,-10],[61,31],[140,10],[155,72],[115,-22],[51,23],[22,22],[8,6]],[[112118,65190],[37,8]],[[112155,65198],[7,5],[4,12],[3,32],[51,95],[141,123],[65,35],[8,2],[16,-3],[14,3],[46,48],[56,41],[32,20],[33,12],[71,-26],[107,2],[94,-58],[25,-42],[56,-65],[60,-46],[81,-2],[40,-9],[13,0],[13,5],[115,69],[64,10],[31,-14],[105,-44],[41,-60]],[[114557,63882],[-12,-20],[-2,-8]],[[114768,63395],[-7,-9],[-8,-5]],[[114753,63381],[-58,-36]],[[113908,63310],[-6,9],[-10,26]],[[113820,63332],[-15,-119]],[[113368,62922],[-2,-17],[6,-20],[8,-13],[3,-15]],[[111575,62095],[-18,-39]],[[111557,62056],[-13,-19],[-15,-38]],[[111524,61956],[6,-12],[24,-17]],[[111348,61302],[-52,-86],[-45,-56]],[[111043,60928],[-12,-10],[-5,-6],[-3,-4],[-4,-4]],[[105382,61875],[5,11],[11,17]],[[104175,62370],[-70,37]],[[103894,62446],[-35,-15]],[[103693,63519],[-18,44]],[[103515,63797],[3,5],[3,8]],[[102927,64274],[-48,6]],[[102730,64458],[-32,37]],[[102549,64586],[11,11],[6,4],[8,18]],[[102496,64711],[-1,5],[-1,13],[-2,5],[-15,11],[-7,8]],[[102522,64815],[0,22],[-7,7],[-7,3],[-6,5]],[[102500,64936],[8,-3],[7,0],[38,5]],[[102553,64938],[7,5],[21,24],[45,34],[-11,53],[18,46]],[[102633,65100],[14,15]],[[102647,65115],[69,13],[61,-6],[35,16],[24,-28],[10,-2],[58,-4],[-6,23],[1,24],[1,9],[3,6],[8,3],[7,-4],[4,-8],[4,-9],[13,-28],[75,25],[14,11],[7,15],[-5,15],[-9,18],[28,19]],[[103049,65223],[33,-30]],[[103082,65193],[14,1],[10,10],[8,16],[8,12],[13,0],[18,12],[36,13],[25,14]],[[103214,65271],[12,16],[-4,12],[-29,22]],[[103193,65321],[-5,33],[0,8],[3,24],[1,6]],[[103192,65392],[4,3],[13,12]],[[103209,65407],[20,8],[55,2],[40,15],[32,72],[50,11],[15,7],[46,37],[31,8],[20,18],[80,1]],[[103598,65586],[13,40]],[[103611,65626],[4,7],[13,8],[30,10],[13,11],[28,35],[24,18],[45,1],[13,3],[36,21],[60,-3],[14,35],[10,11],[37,16],[11,10],[19,39],[37,27],[57,14],[100,-11],[32,19],[20,44],[3,32],[5,8],[7,5],[10,2],[9,-1],[6,-10],[7,-23],[9,-16],[80,-69],[26,11],[7,8],[4,10],[5,30],[14,11],[23,5],[24,-2],[16,-9],[5,-22],[-1,-29],[7,-25],[5,-12],[2,-7],[36,-17],[122,8],[44,-16],[269,-12],[34,-99],[2,-64],[4,-32],[4,-15],[5,-13],[9,-12],[39,-20],[51,-85],[113,19],[12,-3],[10,-10],[37,-49],[107,2],[17,-6],[18,-15],[6,-7],[5,-5],[2,-2],[7,-3],[8,2],[25,29],[52,13],[56,35],[10,-14],[12,-29],[45,33],[17,-4],[57,-26],[53,-39],[10,3],[19,14],[10,4],[10,1],[15,-12],[5,-14],[5,-11],[7,-3],[16,10],[29,25],[101,-17],[15,-13],[14,-26],[6,-6],[23,-12],[4,-12],[9,-15],[21,-11],[21,-5],[15,0],[34,15],[32,25],[26,21],[14,34],[-6,19],[1,5],[29,8],[35,17],[44,-17],[98,82],[60,137]],[[106497,65628],[2,72],[11,72]],[[106510,65772],[-61,32]],[[106449,65804],[-29,25],[-8,9],[-6,11],[-18,50],[-12,32],[1,13],[16,24],[-2,8],[-12,9],[-13,22],[-18,11],[-13,15],[-11,18],[-1,19],[24,54],[7,20],[5,31],[11,28],[-5,53],[3,11],[4,8],[10,15],[6,8],[17,42],[7,13],[4,6],[7,2],[17,9],[41,-6],[4,11],[1,15],[-2,41]],[[106484,66431],[19,44]],[[106503,66475],[22,39],[35,17],[74,21],[35,41],[52,119],[3,42],[12,14],[17,0],[4,-3],[9,-7]],[[106766,66758],[5,-20],[7,-14]],[[106778,66724],[91,-39],[35,-38],[136,-27],[91,-87],[34,-11],[193,-2],[214,-107],[66,-24],[15,-15],[13,-17],[28,-8],[37,14],[100,-18],[117,-38],[9,-6],[7,-6],[35,-25],[4,-11],[-6,-12],[-16,-29],[-1,-5],[3,-6],[3,-11],[-2,-42],[2,-23],[31,-74]],[[84163,24401],[-27,12],[-4,45],[46,25],[-15,-82]],[[81480,17950],[-208,-9],[-49,12],[-30,-3],[-12,4]],[[81181,17954],[1,159],[-22,104],[-3,17],[-5,63],[14,67],[2,17],[-9,67],[-41,51]],[[81118,18499],[-14,106],[30,84],[-10,105],[8,66],[-1,588],[-44,159],[-5,136],[-44,67],[-37,154],[-37,59],[-9,47],[5,161],[-99,458],[4,11]],[[80865,20700],[56,58],[200,336],[173,289],[14,-14],[0,3],[-1,3],[-39,106],[29,58],[19,38],[11,50],[-4,65],[-6,66],[0,25],[5,27],[11,23],[17,4],[18,-4],[16,4]],[[81384,21837],[10,16],[13,38],[12,35]],[[81419,21926],[25,48],[17,32],[3,7],[2,9],[3,19],[-3,23],[10,54]],[[81476,22118],[16,11]],[[81492,22129],[3,8],[3,19],[4,8],[21,-2]],[[81523,22162],[-2,66]],[[81521,22228],[12,88],[-53,61],[-25,-1],[-5,21],[1,7],[3,4],[1,7],[-1,13],[0,7],[2,45],[0,11],[-2,13],[-6,4],[-7,-2],[-7,1],[-4,7],[2,38],[-1,18],[1,5],[14,26],[6,14],[2,10],[2,26],[12,77],[-3,21],[-3,6],[-4,5],[-3,4],[-1,8],[-2,11],[-51,9],[0,111],[38,26],[37,2],[7,8],[4,14],[2,18],[-1,36],[-17,80],[4,9],[14,7],[23,19],[7,7],[2,13],[-6,16]],[[81515,23158],[19,36]],[[81534,23194],[-1,19],[-31,61],[7,52],[-13,63],[5,78],[-5,29],[3,25],[5,11],[6,3],[10,10],[1,23],[1,51],[6,23],[-5,35],[-19,65],[25,72],[-19,38],[-3,43],[-4,38],[-49,144],[41,74],[11,64],[2,19],[-4,-1],[-7,-4],[-17,-15],[-76,17],[-10,54],[-45,28],[-61,38],[-39,25],[-30,6],[-77,-2],[-39,10],[-9,13],[-3,24],[-7,16]],[[81084,24443],[-66,84]],[[81018,24527],[-64,7]],[[80954,24534],[-45,21]],[[80909,24555],[-1,2],[1,5],[-8,1]],[[80901,24563],[-2,4],[-2,6],[-1,6],[-4,3],[-7,7],[-17,40],[-14,12],[-38,13],[-17,2],[-10,-9],[-3,-8],[-4,0]],[[80782,24639],[-2,3],[-4,2]],[[80776,24644],[-5,-4],[-7,-13],[-5,-6],[-8,-6],[-6,2],[-44,39],[-104,-2],[-28,0],[-43,0],[0,42],[-1,75],[-1,109]],[[80524,24880],[6,4],[-6,24],[-12,17]],[[80512,24925],[9,44],[-8,72]],[[80513,25041],[-12,44],[-7,3],[-11,13]],[[80483,25101],[-10,29],[-14,76],[-2,28],[0,28],[-3,18],[0,4],[0,1],[6,3],[34,5],[28,23],[36,27],[126,73],[99,34],[40,15],[49,19],[40,15],[95,71],[218,111],[197,108],[67,34],[47,27]],[[81536,25850],[61,33]],[[81597,25883],[30,-30],[4,-59],[24,-42],[34,-97],[62,-88],[44,22],[22,-26],[44,27],[63,-5],[10,25],[101,42],[60,-116],[2,-79],[30,-174],[-14,-47],[8,-131],[-34,-87],[-27,-43],[-2,-102],[-24,-52],[-36,-39],[-5,-59],[59,-92],[-1,-91],[24,-67],[29,-5],[49,-116],[31,-24],[104,-177],[35,-1],[6,-89],[-28,-46],[17,-55],[58,-8],[28,21],[-13,92],[1,156],[-39,47],[-17,55],[32,33],[20,78],[-3,53],[45,81],[59,0],[64,21],[37,63],[17,364],[-21,136],[3,30],[43,161],[-16,6],[-3,129],[-127,250],[-25,79],[-142,267],[-73,104],[-38,22],[-60,5],[-36,103],[2,103],[-22,291],[-52,301],[9,61],[70,167],[16,62],[0,87],[18,13],[120,-2]],[[82273,27391],[204,-5],[30,-15],[30,17],[16,52],[49,50],[44,-13],[31,-45],[56,-44],[13,-76],[112,13],[26,-31],[41,11],[30,29],[28,57],[86,-13],[23,-40],[47,-22],[40,9],[37,-26],[28,31],[55,22],[52,47],[36,149],[75,39],[70,-12],[35,-51],[56,-34],[62,85],[40,8],[52,58],[89,18],[33,-21],[28,12],[75,95],[107,36],[94,81],[58,66],[34,57],[40,31],[32,54]],[[84367,28070],[37,-21],[14,-117],[-32,-40],[45,-35],[-41,-85],[21,-73],[-17,-70],[-61,-79],[47,-63],[-18,-89],[2,-49],[41,-220],[-14,-80],[-3,-77],[16,-86],[-20,-58],[31,-28],[-1,-43],[34,-97],[-34,-35],[-8,-50],[19,-40],[-11,-87],[3,-166],[-15,-89],[21,-47],[-16,-44],[42,-230],[-16,-66],[33,-27],[19,-56],[-47,-135],[53,54],[31,-38],[-12,-92],[14,-57],[-5,-60],[-18,-12],[-16,-62],[-28,-33],[15,-61],[-68,-29],[18,-51],[39,-18],[-40,-136],[-2,-33],[-56,-68],[-25,-61],[-75,-125],[-24,-91],[-42,-98],[-68,-33],[-5,-57],[-40,-101],[-63,-64],[-125,-112],[-29,-44],[-16,-59],[-46,-8],[-36,-30],[-60,-9],[-46,-21],[-143,-93],[-70,-52],[-50,-17],[-71,-70],[-13,1],[-126,-113],[-57,-59],[-48,-76],[-77,-198],[-19,-18],[-78,-136],[-31,-30],[-52,-125],[0,-54],[-46,-3],[-19,-63],[-38,-11],[-14,58],[-30,-62],[-21,-11],[-121,-128],[-32,-83],[-91,-157],[-81,-114],[-23,-13],[-71,-85],[-22,47],[-25,-51],[-4,-97],[11,-67],[-37,-130],[25,-126],[29,-31],[12,-44],[54,-37],[3,-59],[45,-87],[-23,-107],[5,-81],[15,-13],[15,-101],[45,-119],[-1,-79],[17,-64],[10,-131],[-11,-158],[20,-60],[26,23],[-14,52],[11,94],[29,17],[18,-165],[-19,-97],[-1,-77],[11,-135],[31,-22],[-47,-144],[2,-88],[-22,-100],[-7,-134],[-15,-12],[11,-78],[56,-12],[-22,-107],[4,-47],[-73,-163],[-76,-138],[-175,-132],[-64,-24],[-289,-157],[-100,-66],[-121,-95],[-106,-110],[-40,-85],[-32,-127],[-36,-51],[33,-136],[73,-19],[10,66],[23,5],[-10,-100],[-4,-171],[-9,-69],[0,-118]],[[64356,43927],[-6,-80]],[[64307,43680],[-63,3]],[[64211,43670],[-60,51]],[[64151,43721],[-25,45],[-9,50],[-58,64],[-26,-6],[-34,33],[-1,37],[-28,9],[-13,19],[-2,7],[4,4],[20,0],[2,9],[-3,10],[-5,9],[-22,24],[-22,96],[-49,-7],[-13,66],[-11,5],[-7,8],[-3,2],[-5,0],[-18,-3],[-3,15],[-1,5],[1,6],[1,5],[6,14]],[[63827,44247],[0,9],[-6,16]],[[63821,44272],[-11,14],[-5,7],[0,5]],[[63805,44298],[-10,89]],[[63795,44387],[-22,39],[-5,20],[-5,25],[-34,60],[-73,-30],[-27,47],[-25,-38],[-59,68],[-5,66],[-11,7],[-3,4],[-44,59],[-14,24],[-20,30],[-48,61],[-24,14],[-7,0],[-22,-16],[-44,-3],[-127,9],[-17,29],[-58,-66],[-41,-10],[-98,-2],[-23,-31],[-24,3],[-12,-16],[-5,-5],[-7,-3],[-23,10],[-13,1],[-17,9],[-92,-11],[-30,37],[-46,-18],[-29,-32],[-21,-140],[-10,-20],[-14,-5],[-8,-20],[-2,-43],[-14,-59],[-1,-67],[-4,-34],[-8,-23]],[[62559,44317],[6,104],[-5,179],[28,139],[3,94],[44,183],[25,63],[41,136],[47,250],[10,181],[-17,324],[-25,90],[-12,133],[-15,85],[-31,92],[-32,56],[-42,31],[5,67],[40,23],[28,69],[-38,28],[58,136],[-24,80],[32,67],[-19,63],[24,50],[-36,72],[-37,147],[-34,66],[-28,-62],[-42,59],[-32,122],[-21,42],[-51,133],[-32,-75],[5,-61],[-29,-35],[47,283],[263,0],[226,0],[259,0],[378,0],[384,0],[-19,409],[-13,310],[-27,159],[17,81],[42,82],[150,157],[103,32],[83,59],[39,16],[6,32],[0,330],[0,701],[0,515],[310,0],[270,0],[385,0],[302,1],[11,11],[-1,406],[0,379]],[[66511,48034],[27,-373],[12,-186]],[[90979,22123],[32,-78],[-7,-60],[-40,-100],[-66,-22],[-39,11],[-16,44],[5,103],[46,74],[15,71],[53,20],[17,-63]],[[81597,25883],[-6,12],[-12,35]],[[81579,25930],[-5,7],[-5,-3],[-6,-21],[-24,-20],[-12,-30],[-7,-3],[-9,18],[-2,9],[1,31],[1,8],[-45,84],[-12,7],[-13,4],[-12,8],[17,48],[-33,78],[36,27],[23,53],[17,92],[17,43]],[[81506,26370],[11,5],[1,16]],[[81518,26391],[-11,46],[6,68],[11,38],[1,18],[-3,14],[-9,14],[-11,10],[-2,7],[-2,45],[32,97],[9,17],[3,2],[3,-1],[2,-4],[2,-5],[2,-4],[3,2]],[[81554,26755],[7,8]],[[81561,26763],[6,3],[3,1],[6,-6],[5,-15],[1,-3],[10,11],[2,3],[1,2],[2,3],[5,2],[5,6],[6,21],[5,8],[45,8]],[[81663,26807],[34,63],[10,17],[11,10]],[[81718,26897],[4,11],[-1,12],[-4,2],[-7,0],[-14,8],[-29,-13],[-21,25],[-11,64],[-18,36],[-1,20],[1,21],[15,55],[7,51],[-3,179],[-35,29],[7,90]],[[81608,27487],[16,29],[37,91]],[[81661,27607],[8,36],[-33,80],[-9,76]],[[81627,27799],[-6,7],[-10,0]],[[81611,27806],[-2,11]],[[81609,27817],[3,11],[4,2],[8,-2],[6,6],[12,24],[45,6],[12,15],[5,1],[8,8],[4,11],[7,24],[18,34],[31,35],[6,14],[-3,22],[0,18],[-11,1],[-13,39],[-17,28],[-9,37],[-2,15],[2,35],[0,19],[-52,71],[-32,22]],[[81641,28313],[-3,43]],[[81638,28356],[21,70],[-11,46],[-23,19]],[[81625,28491],[-8,24],[-5,7],[-10,10]],[[81602,28532],[0,36]],[[81602,28568],[-15,42],[-33,-26],[-21,16],[-13,-10],[-5,3],[-5,17],[7,44],[0,18],[-28,57]],[[81489,28729],[28,10],[42,-59],[27,-15],[49,12],[40,-69],[29,-12],[30,19],[35,-11],[32,16],[51,-52],[32,-2],[-2,75],[26,45],[36,-32],[70,-110],[74,-147],[21,-60],[-5,-32],[23,-127],[-8,-68],[7,-80],[36,-124],[-12,-107],[-20,-64],[11,-64],[37,-51],[17,-83],[48,-24],[28,-76],[2,-46]],[[111531,36021],[-17,-17],[-23,57],[-3,155],[31,-3],[0,-108],[12,-84]],[[113939,37119],[-24,32],[23,33],[31,-13],[47,-57]],[[107281,37914],[13,-20],[-21,-96],[-36,6],[0,79],[16,41],[28,-10]],[[107112,38520],[19,-61],[-43,-9],[-33,22],[-19,46],[76,2]],[[107956,38413],[36,-38],[14,22],[43,-26],[26,-35],[45,-145],[75,-115],[69,-87],[32,-18],[61,-100],[127,-362],[8,-152],[-7,-37],[16,-94],[-15,-95],[-23,-41],[16,-88],[-38,-134],[26,-98],[29,-54],[-20,-90],[10,-100],[-8,-150],[15,-69],[63,-110],[49,-29],[28,-62],[-1,-38],[42,-76],[11,-93],[56,-146],[-1,-40],[29,-56],[23,-101],[15,-117],[-7,-49],[-22,-14],[-43,19],[-37,45],[-14,-18],[-51,35],[-60,-21],[-32,-56],[-37,-39],[-21,43],[-31,111],[-62,45],[-64,65],[-40,19],[-49,70],[-31,-8],[-28,58],[-62,93],[-115,78],[-77,110],[-49,16],[-29,96],[-92,54],[-55,96],[-43,20],[-1,38],[34,57],[-19,74],[-10,93],[-39,52],[-35,72],[-25,91],[-43,46],[-80,106],[-1,76],[22,59],[-38,49],[-17,-7],[-25,103],[25,131],[-20,199],[-48,34],[-34,108],[17,27],[8,108],[-17,46],[0,76],[-15,105],[12,86],[-10,126],[-39,128],[-29,44],[-19,93]],[[107210,38527],[16,157],[45,-5],[13,-69],[27,-34],[100,-45],[24,28],[36,-48],[7,-97],[33,-15],[24,23],[42,-16],[-11,-69],[15,-30],[-8,-102],[-22,-14],[-18,-73],[53,-88],[45,38],[9,54],[111,75],[17,0],[28,-78],[34,0],[22,-26],[43,73],[18,95],[39,51],[4,101]],[[110854,35832],[4,-90],[30,-61],[59,-49],[16,-42],[91,6],[17,-12],[60,21],[138,-104],[43,11],[48,-39],[28,108],[38,3],[-16,57],[44,185],[-10,44],[9,152],[17,19],[43,-48],[31,19],[-16,68],[13,123],[34,49],[54,51],[74,23],[58,2],[215,93],[58,20],[95,48],[33,46],[3,37],[80,127],[11,47],[32,54],[16,65],[117,153],[79,169],[17,130],[3,72]],[[112897,37567],[18,-42]],[[112960,37579],[20,26],[61,-29],[47,76],[29,25],[2,87],[-27,10],[-51,59],[17,64],[56,73],[14,47],[34,-54],[34,-4],[32,23],[28,115],[49,59],[6,55],[53,177],[45,60],[10,41],[59,71],[55,138],[9,97],[31,83],[32,-23],[11,-95],[-32,-119],[18,-27],[57,78],[30,76],[-9,48],[19,51],[25,7],[39,-33],[-6,-69],[30,-130],[23,-2],[29,-45],[25,30],[19,-38],[31,-11],[40,-81],[-8,-84],[-19,3],[-26,-48],[22,-63],[-3,-74],[38,-32],[10,27],[39,2],[52,65],[41,-122],[-25,-34],[-48,4],[11,-79],[35,20],[27,-16],[19,69],[33,14],[57,-20],[70,-70],[55,-82],[89,-75],[44,-11],[46,20],[27,-50],[-3,-99],[-43,-58],[-181,-100],[-38,16],[-29,-25],[-30,54],[-28,12],[-25,-37],[-28,-8],[-30,-51],[31,-77],[43,-65],[43,-24],[58,-58],[19,-47],[-40,-52],[-80,-13],[-74,-24],[-51,-41],[-44,15],[-32,47],[-29,13],[-23,44],[-25,-27],[18,-59],[-32,-79]],[[113769,38997],[-75,-47],[0,90],[36,43],[33,9],[14,-29],[-8,-66]],[[77840,23640],[320,101],[71,3],[72,-34],[35,23],[105,-38],[115,-149]],[[76538,19244],[0,-181]],[[76538,19063],[0,-138]],[[76538,18925],[0,-105]],[[76538,18820],[0,-69],[0,-69]],[[76538,18682],[0,-173],[0,-416]],[[76538,18093],[0,-347]],[[76538,17746],[0,-34],[0,-35],[0,-139],[0,-242],[1,-175]],[[76539,17121],[0,-127]],[[76539,16994],[-1,-18],[-59,-33],[-12,-5],[-18,-3],[-23,-17],[-46,-9],[-32,-91],[-19,-22],[-32,-12],[-5,-3],[-5,1],[-14,10],[-4,-6],[-5,-9],[-7,-17],[-1,-14],[3,-12],[13,-36],[0,-7],[-4,-4],[-13,-2],[-2,-2],[-7,-14],[-22,-17],[-15,-7],[-16,-1],[-6,12],[-2,3],[-19,5],[-5,7],[-10,22],[-6,8],[-80,16],[-102,-22],[-16,-4],[-5,-3],[-3,-3],[-7,-3],[-10,1],[-16,9],[-8,1],[-33,-7],[-22,-6],[-97,74],[-63,20],[-32,-15],[-13,6],[-8,4],[-4,41],[-5,6],[-56,-18],[-14,3]],[[75551,16801],[7,70]],[[75558,16871],[-4,13],[-15,8],[-2,10],[-2,13],[-11,20]],[[75524,16935],[-2,20]],[[75522,16955],[12,14],[6,3],[6,6],[4,14],[1,17],[-1,13],[-2,7],[-6,12],[-3,7],[-2,20],[-4,7],[-2,6],[-1,8],[-1,7],[-59,11],[0,57],[-3,11],[-10,5],[-7,5],[-16,32],[-78,-32],[-2,-48],[-3,-6],[-4,2],[-7,0],[-2,2],[-2,1],[-1,-3],[-1,-3],[1,-4],[8,-13],[0,-4]],[[75343,17109],[-16,-2],[-3,-8]],[[75324,17099],[4,-11],[2,-8],[-1,-7],[-3,-4],[-4,2],[-7,6],[-6,-5],[-2,-11],[1,-12],[2,-10],[9,-18],[2,-11]],[[75321,17010],[-3,-4],[-6,-6],[-3,-36]],[[75309,16964],[-12,-24],[-7,-10],[-6,2],[-12,21],[-29,-41],[-15,-7],[-10,-8],[-10,-9],[-7,-5]],[[75201,16883],[-7,-8],[-9,-16],[-10,2],[-97,131],[-47,86],[-51,54],[-86,136],[-15,69],[-39,56],[-10,70],[-86,192],[-23,220],[-21,29],[-36,139],[32,57],[-14,90],[-62,76],[4,171],[-28,88],[1,43],[-26,50],[0,71],[14,45],[-30,195],[21,122],[-23,87],[-5,74],[-23,62],[-45,87],[3,73],[-53,176],[-5,93],[14,52],[-1,215],[-23,100],[23,66],[-24,128],[-8,81],[43,29],[5,43],[-10,189],[-47,169],[-37,87],[-59,116],[-70,101],[2,48],[-31,70],[-17,84],[-88,185],[-82,211],[-15,107],[-33,99],[-18,131],[-23,73],[-32,25],[-26,111],[-115,324],[-9,59],[-43,132],[-37,64],[-8,57],[-63,129],[-43,43],[-54,75],[-36,169],[-34,55],[-19,115],[-32,254],[15,173],[5,8]],[[74055,24022],[10,-61]],[[74065,23961],[33,-28],[35,-43]],[[74205,23827],[5,-6],[18,-36]],[[74624,48758],[74,-619],[3,-300],[46,-66],[119,-279],[-27,-36],[0,-57],[157,-262],[4,-34],[-74,-209],[-12,-48],[-32,-590],[-24,-423],[-28,-507],[-18,-327],[-8,-25],[-162,-274],[-251,-422],[-206,-451],[-27,-96],[1,-90],[-45,-43],[-9,-78],[-54,-25],[-13,-64],[13,-74],[20,-147],[17,-117],[5,-40],[3,-19],[2,-20]],[[74098,43016],[-94,6],[-36,-48],[-3,-26],[-11,-29],[-30,-15],[-36,15],[-66,-32],[-26,-54],[-51,-73],[-47,-30],[-10,-60],[-23,-50],[-75,13],[-29,25],[-56,-5],[-78,78],[-43,29],[-115,46],[-187,-2],[-106,9],[-197,-67],[-88,-76],[-112,-200],[-19,-12],[-80,14],[-42,-9],[-125,23],[-101,47],[-56,88],[-52,6],[-58,84],[-64,61],[-98,22],[-26,-11],[-138,-133],[-76,3],[-41,-69],[-69,1],[-49,76],[-42,119],[-115,188],[-53,33],[-33,-25],[-9,8]],[[71233,42984],[-217,136]],[[71016,43120],[-12,5],[-58,-16],[-37,-63],[-134,-12],[-26,25],[-134,-48],[-38,-34],[-60,-91],[-48,-13],[-1,-148],[-13,-147],[-61,-152]],[[70394,42426],[-24,-38],[-84,-98]],[[70286,42290],[-2,-7],[4,-154],[-10,-81],[0,-27],[9,-46],[2,-21],[-6,-20],[-11,-20],[-2,-10],[2,-35],[15,-31],[5,-12],[2,-12],[-3,-14],[-4,-7],[-20,-18]],[[71668,37325],[19,-45],[-49,-26],[-12,21],[42,50]],[[74098,43016],[176,-387]],[[74493,42040],[-7,-45],[-5,-13]],[[74481,41982],[8,-39]],[[74475,41829],[-17,-40]],[[73859,40401],[-46,-56]],[[73792,40004],[-33,-46]],[[73759,39958],[-7,-12],[-15,-48]],[[73556,39563],[3,-88]],[[72460,38438],[-21,-59]],[[72242,37719],[-11,-24],[-8,-37]],[[72184,37550],[2,-18]],[[72180,37521],[-4,7],[-7,-1],[-19,-74],[-61,57],[-10,-48],[10,-59],[-23,-43],[-101,2],[-103,-23],[-11,-13],[-67,16],[-81,34],[-69,16],[3,-64],[-51,-40],[-29,-39],[-41,26],[-5,-42],[-50,4],[-1,94],[-24,3],[17,-101],[-90,-12],[-73,-22],[-66,-9],[-59,35],[-62,74],[-71,112],[-42,123],[-20,108],[-27,100],[-9,106],[13,34],[-43,23],[-25,42],[-73,213],[-45,98],[-66,96],[-79,94],[-39,28],[-108,32],[-98,13],[-163,-13],[38,27],[-35,79],[-19,-19],[-6,-95],[-116,-10],[-58,5],[-87,-13]],[[69933,38749],[5,39],[-3,25],[-4,24],[-2,22]],[[69920,39397],[-4,17],[-3,7]],[[70217,41618],[15,70]],[[70286,42290],[108,136]],[[71016,43120],[108,-67],[109,-69]],[[37074,43816],[-68,-54],[-40,-52],[29,-60],[15,25],[22,-152],[18,-85],[-10,-84],[-50,-125],[-31,-57],[-24,-135],[-10,-128],[-15,-71],[-3,-79],[23,-238],[-13,-199],[21,-67],[-2,-46],[-42,8],[-13,39],[5,59],[22,13],[7,127],[-39,-7],[23,-95],[-33,-38],[-36,-14],[23,-131],[17,-49],[-19,-128],[-18,-64],[-29,-46],[19,-36],[33,23],[17,-148],[-40,-34],[-14,-69],[-27,-43],[11,-144],[33,-99],[41,-34]],[[36090,41394],[-32,19],[-14,50],[-40,74],[-90,106],[-32,54],[-35,25],[-61,92],[-74,163],[-41,121],[-105,104],[-20,46],[-84,97],[-42,77],[-75,80],[-7,68],[32,46],[43,-46],[14,-37],[47,36]],[[70508,66308],[-20,-49],[-105,-61],[-122,48],[-42,-26],[-47,83],[93,14],[112,-28],[49,25],[82,-6]],[[70508,66308],[-85,36],[-70,-22],[-90,29],[-53,54],[38,30],[75,4],[129,-28],[40,36],[-91,124],[52,114],[49,39],[103,156],[32,82],[43,227],[34,80],[48,-19],[65,32],[114,84],[67,106],[130,66],[73,20],[288,21],[58,-71],[88,-28],[-3,-174],[-68,-226],[-101,0],[-21,-65],[22,-41],[83,-11],[26,-39],[-23,-110],[-86,-65],[21,-73],[-24,-42],[-148,-54],[-72,34],[-63,-28],[-21,-44],[93,-169],[0,-49],[-43,-116],[20,-46],[-91,-102],[60,-48],[-22,-96],[-114,15],[-21,43],[37,53],[34,121],[-83,45],[-38,46],[-76,-8],[-81,53],[-15,66],[-82,-30],[-35,54],[-46,-42],[-50,32],[-106,-56]],[[70911,71196],[7,-77],[-51,16],[44,61]],[[70995,71512],[-73,-6],[-22,70],[65,19],[30,-83]],[[71057,71674],[-34,-89],[-70,27],[47,58],[57,4]],[[71063,71926],[-73,-19],[-62,64],[140,80],[-5,-125]],[[70786,72806],[103,-31],[-117,-41],[14,72]],[[71074,73053],[28,-56],[-88,-9],[6,61],[54,4]],[[71212,73084],[-74,-57],[-27,66],[53,40],[48,-49]],[[71830,73500],[-59,-46],[-51,21],[11,50],[99,-25]],[[71991,73699],[-113,18],[-11,25],[87,37],[67,-51],[-30,-29]],[[72321,73892],[55,-75],[-149,-30],[-83,-31],[-71,48],[87,56],[161,32]],[[73635,75037],[19,-85],[-76,-56],[-19,121],[76,20]],[[73904,76613],[13,-65],[-46,-44],[-65,0],[52,96],[46,13]],[[74237,76744],[-96,-118],[-89,17],[5,84],[53,33],[127,-16]],[[74691,76848],[-150,-110],[-217,-67],[41,100],[134,72],[192,5]],[[75170,76843],[-120,-19],[37,72],[59,14],[24,-67]],[[74979,77169],[-17,-107],[26,-61],[103,47],[-36,47],[81,21],[72,-42],[20,-91],[-30,-67],[-148,-9],[-72,-101],[-81,-16],[-182,-5],[8,141],[105,45],[-21,99],[84,102],[88,-3]],[[74706,77155],[38,-17],[38,-108],[-22,-49],[-104,-46],[-95,37],[134,40],[-37,29],[-173,-77],[-76,-4],[8,86],[108,3],[126,56],[55,50]],[[74944,77210],[-70,-23],[-67,16],[42,58],[86,35],[27,54],[110,26],[-34,-90],[-94,-76]],[[75678,77537],[40,25],[91,-104],[-59,-57],[14,-94],[-168,-13],[-267,-65],[36,163],[61,42],[76,5],[-4,53],[180,45]],[[76102,77738],[84,-56],[-99,-65],[8,-56],[-215,-37],[-102,38],[113,28],[25,95],[67,-7],[119,60]],[[76248,77860],[121,-76],[-50,-70],[-110,-31],[-134,104],[40,42],[133,31]],[[76840,77885],[-70,-43],[-60,14],[-6,64],[65,39],[92,-25],[-21,-49]],[[76431,77968],[92,-34],[44,-57],[-91,-26],[-71,98],[26,19]],[[77577,78052],[99,-36],[17,-49],[-212,27],[15,58],[81,0]],[[77885,78195],[61,-91],[-26,-34],[-145,-82],[-101,49],[-20,55],[86,43],[73,-1],[72,61]],[[78006,78253],[82,-14],[27,-62],[-90,-46],[-65,36],[-22,80],[68,6]],[[77845,78335],[24,-32],[-107,-64],[-35,-63],[-67,-26],[-103,13],[-193,-51],[49,119],[104,27],[89,-43],[239,120]],[[80694,77693],[33,-82],[-28,-89],[-131,5],[-83,52],[-66,-111],[-85,-51],[-217,-50],[-36,-100],[-109,-54]],[[76783,77218],[-198,-9],[91,-69],[5,-65],[-45,-90],[-105,-73],[108,-39],[-121,-78],[-341,95],[-151,-2],[-79,44],[-101,-23],[-14,-87],[12,-147],[-105,-116],[-220,83],[-38,-40],[-158,-79],[-75,-164],[-49,-54],[-108,-31],[-28,-53],[119,-137],[-9,-92],[-144,-102],[-141,-179],[-93,-66],[21,-134],[-163,-75],[-197,-18],[40,-173],[-32,-89],[-19,-146],[1,-90],[-57,-64],[-22,-80],[-255,-309],[181,-89],[18,-145],[-85,-122],[-270,50],[-97,-19],[-114,-63],[-149,-186],[-48,-36],[14,-89],[-81,-103],[88,-177],[-46,-48],[20,-118],[-24,-90],[74,-155],[12,-63],[-59,-314],[98,-90],[75,-21],[100,-108],[-22,-103],[-52,-102],[-66,6],[-97,-42],[45,-141],[85,-148],[-1,-74],[-41,-62],[9,-109],[-24,-41],[-116,-95],[-113,-16],[21,-63],[-29,-68],[-52,-24],[-6,-39],[52,-191],[-57,-203],[-81,-15],[-6,59]],[[73268,71010],[-26,67],[-107,17],[-93,32],[-44,38],[-35,83],[18,65],[-12,70],[-67,-49],[-15,-103],[-62,-154],[-167,-88],[-70,2],[-89,-41],[9,-37],[-43,-51],[-117,-97],[-35,-42],[-165,-144],[-61,-30],[-88,-88],[-44,26],[-36,-39],[-100,-10],[-15,-26],[-85,-3],[-91,20],[-59,-12],[-47,64],[-128,-16],[31,84],[-85,17],[-99,41],[-63,48],[-19,42],[-85,22],[-51,67],[-36,78],[20,71],[36,35],[98,21],[-4,78],[53,39],[40,78],[-32,62],[-75,87],[-33,-43],[43,-59],[-82,-11],[-65,-33],[-105,93],[-7,50],[98,122],[117,-20],[33,59],[-45,37],[22,61],[67,41],[59,59],[17,76],[79,94],[-61,9],[-33,-85],[-53,-17],[-44,-49],[1,-71],[-66,11],[18,57],[-164,36],[-50,54],[36,67],[-10,64],[146,-46],[34,35],[11,143],[-81,-11],[1,-35],[-87,-42],[-78,54],[-25,57],[79,47],[-73,16],[-16,107],[24,35],[141,-29],[35,30],[140,29],[79,0],[108,-46],[70,45],[85,19],[81,-36],[117,23],[-29,33],[-84,-33],[-174,58],[-46,-67],[-189,34],[-147,-20],[-51,-36],[-115,40],[-61,75],[51,26],[-37,43],[22,41],[89,22],[15,50],[-38,42],[-91,1],[-7,68],[103,48],[45,55],[-47,34],[23,65],[-87,61],[43,30],[168,-29],[117,21],[38,65],[181,58],[-74,36],[5,93],[116,-11],[59,37],[120,1],[105,-37],[21,26],[-42,67],[-130,-10],[17,71],[-40,55],[137,52],[89,-64],[94,20],[96,92],[95,-51],[32,-80],[57,17],[-47,63],[-51,15],[6,72],[149,-13],[-43,109],[86,19],[20,59],[143,-18],[31,69],[65,6],[39,50],[69,24],[41,-80],[59,-53],[130,24],[106,-22],[77,34],[-9,85],[106,59],[166,51],[-19,30],[-123,25],[-70,-100],[-103,-33],[-87,-60],[-128,-44],[-62,5],[-46,108],[-81,-12],[-16,64],[172,95],[8,117],[171,110],[-5,33],[64,62],[105,15],[70,30],[112,-68],[61,65],[-46,91],[83,110],[-105,-24],[-39,33],[61,40],[144,34],[77,57],[52,-12],[136,25],[13,34],[-63,97],[100,81],[-2,35],[-73,28],[-22,64],[120,106],[8,72],[90,17],[12,51],[-90,3],[59,57],[137,32],[0,69],[-87,38],[66,33],[-34,53],[77,102],[75,8],[80,98],[-38,64],[126,-5],[116,32],[54,110],[160,34],[120,0],[16,59],[-177,-57],[-102,37],[75,61],[75,28],[-28,42],[102,51],[105,-29],[-27,74],[-60,20],[9,101],[91,31],[187,38],[69,35],[-99,47],[150,47],[-23,-80],[89,-34],[34,34],[-17,58],[-57,48],[0,72],[139,73],[-27,45],[63,80],[231,73],[177,83],[-100,13],[20,50],[74,61],[153,47],[-29,72],[114,125],[211,40],[94,114],[75,29],[187,13],[86,-22],[41,67],[77,54],[75,-120],[105,19],[42,32],[105,13],[31,80],[118,-8],[8,-39],[123,-64],[14,100],[-39,66],[-57,-17],[-183,89],[88,37],[146,-1],[64,35],[236,-65],[139,-7],[12,-77],[138,20],[-32,68],[81,6],[10,81],[155,89],[132,59],[33,52],[-31,92],[116,-24],[36,110],[74,-30],[113,-5],[72,20],[138,-36],[47,-42],[-181,-136],[-41,-49],[-17,-136],[-85,-49],[-15,-78],[120,-1],[100,110],[-29,40],[219,175],[23,54],[115,96],[92,50],[50,-78],[-89,-243],[58,-2],[119,62],[60,61],[4,71],[55,2],[41,82],[-103,27],[50,65],[85,-13],[35,57],[119,-37],[120,30],[0,-50],[135,-16],[-23,-56],[-136,-94],[65,-22],[-26,-53],[-146,-82],[110,-21],[100,62],[49,107],[102,93],[164,-11],[61,-53],[315,-54],[97,-74],[232,-120],[-49,-65],[-149,-9],[-87,-81],[-71,-27],[-347,29],[-181,29],[-8,-50],[155,-17],[210,-54],[34,-82],[-71,-72],[154,29],[65,68],[111,-43],[149,-3]],[[78717,78531],[99,-65],[13,-48],[-167,-28],[-91,69],[146,72]],[[65843,78540],[-17,-88],[-151,-43],[-114,-16],[-122,-81],[-37,43],[233,90],[69,79],[139,16]],[[76224,80612],[52,-27],[-85,-83],[-109,81],[142,29]],[[77819,82884],[54,-30],[-153,-53],[19,-51],[195,-71],[120,-11],[138,37],[46,-53],[-164,-137],[-39,-59],[-206,-82],[-46,-70],[-203,-16],[-106,16],[4,109],[92,33],[-89,52],[-97,-45],[-486,-38],[-18,78],[120,20],[27,82],[154,114],[-299,102],[43,34],[270,45],[267,-6],[218,34],[139,-34]],[[77110,83123],[121,7],[170,-69],[13,-136],[-463,-41],[-103,45],[-50,72],[-183,64],[264,39],[116,41],[115,-22]],[[79126,83152],[-132,87],[83,21],[128,-93],[-79,-15]],[[73211,83101],[180,-66],[-245,-4],[-79,106],[-149,110],[122,55],[131,-89],[-48,-25],[88,-87]],[[80003,83323],[-457,-42],[221,76],[236,-34]],[[76626,83454],[238,-42],[-164,-36],[-103,40],[29,38]],[[75327,83919],[57,53],[229,-39],[204,-106],[-138,-99],[234,39],[145,-54],[59,-63],[24,-175],[322,5],[46,-94],[208,-41],[411,-58],[-5,-66],[-181,-63],[-313,1],[-244,-40],[38,-41],[-263,-30],[28,-55],[-56,-123],[54,-58],[-184,-19],[-96,-92],[44,-92],[-96,-164],[-146,1],[-127,-114],[-61,-203],[-145,-123],[95,-52],[-146,-80],[-180,30],[-20,57],[-132,33],[-139,98],[196,66],[-285,-11],[-117,78],[-254,39],[-20,51],[-140,89],[-18,68],[203,32],[127,-24],[413,-10],[-3,29],[-336,28],[57,50],[672,67],[-73,32],[-342,-18],[-89,28],[-178,-55],[-242,-20],[-283,5],[-50,178],[107,26],[448,13],[98,64],[101,11],[91,63],[437,7],[-202,49],[33,70],[127,79],[-143,3],[-52,-68],[-121,-53],[-215,-16],[-88,124],[-157,-8],[-159,-89],[111,-39],[-149,-31],[-1,-51],[-163,-56],[-362,21],[-20,69],[-190,79],[-5,67],[-125,12],[-146,81],[83,67],[-112,20],[1,61],[261,-53],[-187,115],[136,108],[-200,7],[41,-65],[-161,-42],[-45,72],[-123,96],[22,61],[-74,57],[188,98],[240,77],[146,-4],[215,-40],[112,34],[283,33],[66,-66],[-88,-43],[-280,-21],[-139,-48],[318,-5],[155,-27],[255,166],[118,-23],[155,-96],[89,-178],[242,-168],[9,108],[-73,47],[-35,148],[-70,94],[-12,93],[172,5],[-32,96],[200,20],[105,-106]],[[81765,84133],[-310,-56],[-466,-36],[-44,26],[552,57],[268,9]],[[77747,84232],[64,-57],[-97,-26],[209,-65],[60,83],[236,34],[198,-43],[402,-47],[331,-7],[166,-49],[-52,-75],[17,-73],[-88,-9],[-162,-74],[-256,-60],[53,-61],[-123,-79],[-176,-38],[-158,21],[-185,-38],[-90,-75],[-431,21],[-195,116],[-270,-23],[-81,16],[-261,-12],[-33,49],[-205,7],[-195,52],[-20,35],[322,47],[526,12],[14,73],[-656,-23],[-262,-43],[-269,3],[-116,40],[-128,80],[252,41],[-165,35],[-141,94],[216,-4],[316,-29],[-112,75],[163,80],[-23,47],[128,17],[149,-44],[264,-129],[368,37],[-31,-77],[233,-23],[73,124],[-68,72],[289,-28]],[[100530,52987],[8,-4]],[[100539,52954],[56,-75]],[[100670,52854],[8,-21],[15,18],[26,6]],[[100909,52570],[24,45]],[[101464,52138],[-12,-16]],[[101835,51853],[-4,47]],[[102335,51760],[0,-28]],[[102404,51736],[4,-4],[6,0]],[[102582,51787],[26,-17],[18,-7]],[[102610,50977],[-9,-40],[-3,-40]],[[102281,50845],[-3,9],[-3,10]],[[101929,50975],[-6,14]],[[101787,51013],[-33,-38],[-17,-5]],[[101440,51138],[-10,2],[-1,8],[1,10]],[[101394,51208],[-10,7],[-19,9]],[[101285,51252],[-8,19]],[[101142,51475],[-7,15],[-4,12]],[[101110,51506],[-8,20]],[[99808,52171],[-50,65]],[[99700,52267],[-29,-33]],[[99903,53184],[5,-21],[12,-30]],[[100028,53196],[2,19],[6,23]],[[100112,53330],[2,6],[1,5],[3,4]],[[132782,34241],[7,-16],[-16,-19],[-1,29],[10,6]],[[133176,5677],[80,-101],[6,-145],[-112,-56],[-98,-10],[2,98],[63,92],[-10,123],[69,-1]],[[135066,9505],[-55,-7],[-27,-133],[64,-67],[78,-26],[-11,-163],[69,-93],[137,143],[245,42],[19,-73],[-79,-189],[65,-184],[-11,-94],[-73,-97],[-45,-130],[-126,-155],[-104,-284],[-182,-135],[-30,-151],[28,-121],[95,-26],[19,-110],[-87,-44],[-146,112],[-49,-92],[-117,-54],[-274,-201],[-57,-177],[3,-210],[-86,-154],[-27,-153],[-81,-170],[36,-114],[-175,-74],[-38,-106],[-142,-139],[-87,-123],[-230,-65],[-74,76],[-97,-34],[-87,47],[-57,114],[-139,-26],[-59,129],[-91,25],[-21,-64],[-246,19],[-112,146],[7,110],[118,51],[-35,111],[67,163],[123,204],[83,67],[353,449],[27,54],[128,12],[173,156],[206,119],[63,106],[130,96],[106,142],[72,34],[160,222],[70,186],[10,91],[62,195],[158,139],[64,118],[16,102],[-2,225],[205,232],[100,1]],[[135132,13273],[-65,-79],[55,-38],[27,-129],[136,-111],[157,-10],[96,-194],[74,20],[90,-190],[-19,-78],[23,-79],[-32,-86],[100,-158],[-12,-216],[36,-143],[163,-72],[47,-164],[88,-3],[-26,154],[-10,191],[109,-79],[36,-89],[44,-436],[201,-82],[76,-71],[163,-89],[157,67],[69,147],[112,78],[95,-5],[110,-99],[-83,-175],[-20,-333],[-127,-137],[-30,-199],[-190,4],[-124,-76],[-61,-153],[50,-190],[-76,-263],[-51,-68],[-137,-251],[-48,-147],[-97,-192],[-244,-226],[-57,119],[-121,-1],[-98,80],[128,196],[76,185],[36,209],[-32,155],[-71,105],[-153,55],[-95,131],[-127,45],[-78,92],[26,160],[138,99],[59,-2],[81,85],[49,444],[55,220],[-60,269],[5,96],[67,61],[-18,82],[-133,-44],[-49,237],[42,29],[-10,110],[-58,53],[-80,-49],[-86,206],[-289,524],[38,100],[-21,80],[-132,232],[-22,75],[128,11]],[[91338,47012],[-3,115],[41,52],[51,150],[27,-100],[-41,-51],[-22,-94],[-53,-72]],[[89209,44832],[-110,386],[-27,20],[-94,343],[-115,417],[-79,288]],[[88784,46286],[304,164],[327,176],[262,141],[254,138],[125,602],[127,623],[-3,29],[-168,419]],[[90471,49984],[42,-172],[45,-126],[72,-119],[53,-116],[82,-100],[66,-43],[122,-58],[58,-5],[45,-40],[49,4],[72,-27],[20,-30],[50,-10],[30,25],[43,-11],[11,-33],[58,-45],[8,-56],[43,-53],[64,-173],[47,-53],[34,-110],[44,-76],[48,-53],[92,-26],[26,-59],[-7,-103],[-13,-51],[-40,-71],[-16,-97],[-16,-9],[-40,-96],[-20,-81],[-43,-116],[-64,-46],[-95,-134],[-44,-96],[-5,-38],[-43,-62],[-14,-84],[-15,-18],[-33,-152],[-19,-29],[-93,16],[15,118],[-11,17],[-51,-25],[-11,-58],[-45,-50],[4,-42],[-42,-43],[-13,-38],[9,-55],[-32,-165],[-24,-56],[2,-127],[27,-87],[-9,-86],[23,-69],[11,-87],[-50,-45],[-80,6],[-113,-27],[-112,-61],[-49,-50],[-48,-82],[-37,-277],[-38,-40],[-45,-90],[-62,11],[-60,-8],[-46,-23],[-98,-7],[-80,-33],[-34,-99],[-35,-46],[-15,-56],[29,-61],[-18,-117],[-86,-134],[-84,-36],[-27,3],[-24,39],[-32,11],[-77,1],[-141,-34],[-16,-48],[-87,-25],[-32,-51],[-34,-21],[-93,-10],[-95,-57]],[[90352,50655],[39,114],[48,-26],[8,65],[56,-64],[-32,-66],[6,-67],[-14,-113],[-28,-40],[-5,-72]],[[98275,56579],[103,-331]],[[94985,49282],[-30,-67],[-91,82],[-23,-33],[-67,-6],[-42,63],[-30,102],[-33,0],[-21,72],[-3,72],[-17,102],[-37,103],[10,77],[-44,14],[-37,38],[-71,5],[-38,-13],[14,248],[-64,83],[14,37],[-21,58],[-37,49],[-38,-28],[9,-55],[-41,5],[-150,-34],[-73,-44],[-105,28],[-62,-13],[-30,-46],[-133,20],[-34,-9],[-21,-52],[-56,28],[-39,-21],[-21,26],[-112,39],[-47,-7],[-54,24],[-89,-6],[-33,-49],[6,-56],[-73,16],[-50,23],[-58,-23],[-98,26],[-113,-2],[-43,-49],[-42,20],[-66,-9],[-2,-60],[-75,1],[-17,-40],[-44,-1],[22,79],[-73,24]],[[94256,53018],[10,19],[8,19]],[[94290,53660],[10,14]],[[95106,54156],[9,24]],[[95093,54179],[-15,7],[6,13]],[[95437,54677],[26,61]],[[95457,54774],[-14,17]],[[95460,54823],[9,19],[10,10],[1,2]],[[95795,55140],[2,20],[-6,20]],[[95791,55180],[-51,77]],[[96011,55540],[7,18],[5,9]],[[96047,55564],[9,14],[8,4],[18,5]],[[96142,56024],[19,38],[7,21],[7,19]],[[96307,56306],[-41,60]],[[96248,56567],[12,24],[2,11]],[[37606,39271],[14,-57],[-16,-127],[-37,51],[4,91],[35,42]],[[38707,39771],[11,-69],[-9,-30],[-42,7],[-2,86],[42,6]],[[39079,39017],[-46,66],[2,26],[-52,70],[-35,94],[-35,120],[-25,46],[-14,99],[55,2],[19,46],[-26,61],[46,27],[11,60],[-56,37],[-56,-38],[-16,50],[-6,99],[-42,22],[-55,99],[-27,-10],[-18,48],[-50,42],[-65,32],[-82,4],[-36,-12],[-45,-66],[-39,-17],[-21,-41],[-6,-135],[-35,-17],[-41,-67],[-97,-88],[-59,5],[-35,-54],[6,-114],[41,-30],[18,-65],[60,-81],[35,-71],[22,-83],[-9,-29],[-45,-20],[-43,3],[-41,-29],[-8,-43],[-38,-36],[-91,-23],[-61,-3],[-21,28],[12,43],[-19,142],[-28,58],[-24,89],[-39,18],[-5,-114],[-126,45],[-18,30],[3,55],[-22,24],[6,61],[-24,12],[-15,77],[-25,-5],[-42,31],[-86,37],[-34,-19],[-31,87],[-47,-34],[-43,-8],[-55,29],[-58,-17],[-26,-47],[11,-92],[-19,-21]],[[37287,40464],[86,-107],[-15,-71],[15,-50],[36,-14],[4,-105],[40,-16],[13,-33],[77,22],[43,-24],[11,82],[86,-155],[89,-20],[85,17],[78,47],[22,4],[37,66],[34,32],[88,57],[44,6],[73,44],[38,61],[35,-8],[84,115],[10,55],[44,28],[46,-24],[90,-31],[54,-5],[-1,-46],[59,-22],[47,14],[68,-17],[16,13],[48,-21],[87,-71],[70,-39],[53,-92],[11,20],[44,-90],[9,-44],[57,-61],[10,-50],[26,-27],[40,-4]],[[42262,27774],[1,-3],[2,-5],[1,-3],[7,-20],[39,-111],[119,-335]],[[42562,26743],[0,-10],[3,-5]],[[42537,26668],[-18,-38],[-29,-39]],[[42490,26591],[3,-111]],[[42473,26132],[0,-8],[0,-8]],[[42473,26116],[-22,-36]],[[42476,25727],[-1,-11],[1,-24]],[[42327,24027],[-4,-10],[2,-3],[2,-2],[2,-4]],[[42245,23921],[-12,-47],[-6,-16]],[[42227,23858],[28,-7]],[[42287,23790],[1,-21],[0,-45]],[[41949,23211],[-111,108],[-87,132],[-67,49],[-51,72],[-63,40],[10,33],[-16,144],[-43,71],[-50,33],[-63,25],[-54,74],[-38,28],[-57,68],[-37,22],[-26,74],[-86,63],[-40,0],[-76,65],[-65,37],[-51,54],[-34,11],[-53,60],[-107,44],[-55,46],[-72,83],[-5,32],[-152,101],[-8,44],[-148,99],[-119,107],[-2,50],[-27,21],[-2,45],[-45,38],[-73,160],[-110,98],[-35,47],[-19,117],[-43,54],[-23,93],[-50,51],[2,121],[-45,22],[12,67],[38,-37],[32,199],[-16,113],[-100,197],[-13,104],[-43,73],[-21,81],[-49,85],[8,63],[-24,48],[-71,61],[-5,56],[-47,26],[12,86],[-31,188],[-37,83],[-124,125],[20,78],[-29,148],[-36,102],[-32,54],[-29,89],[-18,22],[-33,91],[-19,90],[-23,36],[-5,63],[-21,54],[1,99],[-53,110],[-22,121],[-21,54],[-6,88],[-28,53],[-43,138],[-32,66],[2,103],[-24,49],[-45,58],[14,36],[-31,98],[-53,95],[-69,78],[-62,137],[11,25],[-56,131],[3,47],[-15,74],[-31,56],[-5,44],[-86,138],[-13,59],[-59,85],[-68,65],[-188,152],[-25,37],[-95,103],[-19,60],[0,57],[44,41],[37,-21],[30,66],[3,58],[-29,116],[-54,88],[-23,12],[-25,56],[9,76],[35,5],[8,35],[-62,133],[-44,80],[12,21],[-9,103],[19,49],[-5,50],[15,48],[70,88],[31,77],[47,61],[6,41],[31,60],[60,58],[30,69],[64,24],[11,45]],[[114901,37802],[-11,-44],[-40,-29],[-23,6],[-27,-52],[-52,-10],[3,46],[53,54],[46,23],[43,56],[8,-50]],[[115215,38314],[146,-68],[0,-24],[-53,-56],[-21,52],[-56,-32],[-28,22],[-29,-24],[-23,46],[12,33],[52,51]],[[115605,38510],[-37,-6],[-31,61],[-16,102],[39,5],[48,40],[100,-79],[-36,-27],[-17,-74],[-50,-22]],[[117031,38821],[-25,83],[-16,11],[13,76],[30,-49],[-2,-121]],[[115950,39118],[-4,-26],[-51,-38],[-9,55],[13,29],[51,-20]],[[113700,39509],[-5,-112],[-25,-16],[-18,64],[2,84],[46,-20]],[[116647,40157],[-41,28],[-10,59],[39,12],[23,-51],[-11,-48]],[[116233,40244],[1,-57],[-54,-8],[-32,35],[68,73],[17,-43]],[[116979,40486],[110,-74],[29,-122],[25,-34],[55,41],[-16,-132],[52,-84],[13,-64],[-17,-52],[-63,-71],[-11,-29],[19,-49],[23,18],[53,-14],[12,-150],[29,-38],[-12,-114],[8,-40],[-22,-28],[4,-63],[31,-53],[36,-18],[-5,-56],[15,-101],[-15,-101],[16,-26],[-51,-119],[-5,-39],[-43,-2],[-19,-66],[-34,25],[-18,-31],[34,-72],[-11,-93],[0,-92],[-20,-64],[-30,93],[0,130],[-7,73],[-39,59],[4,42],[-32,58],[-37,155],[-57,-70],[1,-67],[-33,-56],[-25,-15],[-10,-63],[-35,-89],[2,-105],[26,-3],[42,-48],[52,-227],[-16,-123],[-107,-233],[-33,12],[0,49],[-46,78],[31,94],[-4,89],[-32,11],[-37,-155],[-52,1],[-130,84],[-66,69],[-68,47],[-73,155],[-1,143],[-33,94],[4,89],[20,94],[59,68],[24,110],[-40,35],[-29,88],[-59,59],[-44,7],[-28,53],[-53,26],[-55,-23],[16,-84],[-50,-57],[37,-75],[-12,-49],[-74,89],[-33,-1],[-4,36],[22,33],[-30,66],[-23,-48],[-20,-117],[-64,52],[-14,75],[9,44],[-43,28],[-41,-16],[-58,-94],[16,-19],[-54,-79],[13,-37],[-44,-88],[-8,-93],[-34,-106],[-44,-6],[-39,38],[-15,48],[13,100],[43,51],[0,87],[26,100],[6,131],[62,120],[56,36],[81,30],[42,0],[63,21],[34,51],[-19,25],[11,77],[24,66],[60,23],[46,3],[12,47],[44,45],[43,-63],[9,35],[57,-26],[32,-96],[9,-54],[3,-161],[62,52],[74,14],[34,187],[34,58],[51,-29],[38,-52],[43,14],[8,59],[-8,60],[13,25],[-3,134],[16,40],[35,-12],[78,-101],[28,28],[-4,75],[19,50],[32,-52],[57,-6],[25,25],[6,101],[-30,135],[-25,169],[22,81],[43,-34],[30,-90]],[[117169,40633],[-9,-55],[-39,13],[-13,74],[37,96],[24,-128]],[[116483,40819],[91,-78],[-15,-100],[29,-37],[-15,-43],[-32,22],[-34,-67],[-46,-32],[-87,-8],[-49,14],[-49,76],[0,38],[30,69],[62,41],[9,42],[42,60],[64,3]],[[116843,40678],[-56,92],[36,20],[20,-112]],[[116994,40974],[-10,-86],[19,-119],[-10,-69],[-28,5],[-10,42],[-33,43],[15,70],[-6,62],[13,33],[50,19]],[[114813,41070],[-28,-46],[-42,-22],[-11,56],[28,66],[53,-54]],[[115859,41088],[-34,-87],[-39,-13],[-1,103],[54,106],[26,-42],[-6,-67]],[[116069,41330],[96,-35],[20,-58],[-34,-171],[-37,-70],[-17,-55],[-1,-54],[-19,-102],[-51,-141],[8,-170],[7,-65],[47,-89],[-9,-78],[-26,-68],[-76,-45],[-38,53],[-24,125],[-103,69],[-39,79],[-40,170],[31,85],[89,8],[66,81],[-9,68],[5,76],[-17,113],[32,40],[24,76],[-2,96],[95,74],[22,-12]],[[116349,41392],[19,-21],[7,-95],[-18,-88],[11,-74],[-4,-88],[-25,-98],[-63,-56],[-35,-49],[-30,-72],[0,-50],[-51,-188],[-8,-54],[-46,-88],[-20,50],[19,172],[15,58],[-8,40],[15,59],[32,52],[34,120],[42,90],[24,109],[32,70],[26,117],[0,54],[32,30]],[[116254,41432],[-18,47],[22,38],[21,-82],[-25,-3]],[[114635,41555],[17,-48],[-18,-77],[15,-49],[-21,-54],[5,-82],[29,-1],[-1,-102],[16,-13],[29,-97],[-56,-76],[-35,4],[-44,-31],[-47,-92],[-15,-76],[-47,-29],[-76,-24],[-37,-23],[-9,-29],[12,-61],[-22,-96],[-22,-38],[-66,-159],[-62,-83],[-77,-33],[-46,-147],[-39,-35],[-53,-80],[-41,-24],[-38,-1],[-20,-95],[-16,3],[-59,-37],[-46,-72],[9,101],[27,87],[32,66],[29,28],[27,66],[38,57],[13,41],[43,17],[11,49],[41,60],[39,-17],[47,64],[34,86],[23,26],[26,73],[70,85],[35,87],[40,75],[38,98],[48,15],[47,107],[30,4],[50,67],[25,133],[-48,80],[39,92],[32,30],[-3,68],[8,86],[40,26]],[[116519,41621],[23,-2],[48,-86],[44,15],[38,64],[54,-31],[-8,-54],[25,-74],[9,-128],[-18,-107],[9,-33],[36,-30],[27,-56],[2,-104],[26,-41],[-14,-71],[-27,18],[-61,-51],[16,-94],[-10,-13],[-52,66],[-39,11],[6,93],[-22,58],[2,61],[21,101],[-8,102],[-59,111],[-44,-79],[-42,49],[7,41],[-4,174],[-36,102],[6,55],[45,-67]],[[116514,41774],[48,-21],[26,-79],[-6,-29],[-57,5],[-18,32],[-17,82],[24,10]],[[115697,41815],[33,-21],[91,-135],[41,51],[48,-1],[17,-94],[83,68],[23,-50],[-24,-124],[7,-53],[-35,-11],[-10,-44],[-67,-46],[-23,-37],[7,-50],[-14,-41],[-50,-23],[-16,-46],[-52,-7],[-87,-28],[-47,-44],[-24,-64],[-42,0],[21,97],[-18,93],[15,81],[26,69],[3,134],[21,262],[-9,41],[-84,24],[13,80],[25,25],[59,-68],[69,-38]],[[114804,41925],[34,-42],[5,-80],[-20,-36],[-57,137],[38,21]],[[114793,42138],[33,-19],[66,-87],[22,19],[35,-55],[-41,-41],[-39,-9],[-57,31],[-46,129],[27,32]],[[115822,42136],[-43,60],[-32,20],[20,52],[64,-13],[15,-44],[-24,-75]],[[116700,42310],[56,-19],[39,29],[41,-49],[29,-62],[-16,-35],[21,-36],[53,-22],[-16,-87],[25,-38],[-28,-51],[3,-77],[16,-85],[-12,-62],[34,-109],[31,-35],[-28,-62],[55,-56],[-38,-34],[-14,18],[-52,-34],[-46,32],[-40,-11],[-5,61],[-25,33],[-50,5],[1,79],[-69,56],[67,72],[13,63],[-41,9],[-51,71],[-44,107],[-42,13],[-29,29],[-39,77],[-19,100],[-26,92],[33,8],[122,-19],[72,10],[19,19]],[[116101,42301],[73,-53],[18,-42],[43,-45],[25,-66],[44,-1],[60,-139],[12,-151],[-56,71],[-83,59],[4,25],[-41,53],[-28,70],[-44,5],[-27,-66],[-66,-102],[11,115],[25,30],[-22,62],[21,98],[-12,26],[0,81],[43,-30]],[[115642,42353],[-28,-196],[-32,-65],[-29,57],[5,48],[23,39],[-1,80],[10,25],[52,12]],[[116212,42369],[32,-35],[25,-119],[-23,-2],[-58,135],[24,21]],[[116043,42523],[-7,-30],[-58,90],[-32,24],[-2,42],[36,10],[63,-136]],[[115191,42906],[25,-70],[68,-5],[80,-112],[7,-52],[39,-31],[-23,-32],[-1,-167],[23,-76],[-20,-59],[-21,-17],[-5,-86],[-59,-70],[-10,-34],[-45,17],[-81,168],[-2,74],[-22,51],[-21,8],[-15,170],[-45,111],[-63,73],[-15,77],[-27,-26],[-23,37],[18,46],[81,-4],[72,-28],[85,37]],[[115540,42923],[39,-15],[47,-40],[3,-66],[-48,-97],[-50,52],[-18,35],[-1,67],[28,64]],[[116439,43241],[15,-70],[55,-51],[-10,-99],[-38,-67],[-47,-47],[-56,88],[37,68],[6,78],[-5,88],[43,12]],[[115651,43203],[-81,84],[-8,56],[87,-112],[2,-28]],[[115571,43846],[19,-33],[-18,-54],[20,-105],[-8,-39],[-36,-1],[9,57],[-19,73],[-25,40],[10,61],[48,1]],[[115165,46021],[75,48],[123,-103],[71,-72],[93,-45],[46,-1],[52,66],[16,77],[26,3],[36,-90],[-3,-77],[-49,-81],[1,-84],[-16,-115],[6,-112],[36,-160],[44,-4],[26,-37],[-9,-72],[46,-53],[-21,-62],[-3,-60],[-47,-155],[-40,-86],[-13,-50],[-1,-98],[-95,-77],[-78,-39],[-66,-89],[-9,-64],[31,-65],[-28,-82],[-28,-43],[-4,-41],[-38,-91],[42,-89],[7,-62],[20,-45],[13,-81],[50,-86],[-36,-11],[-8,-56],[20,-121],[23,-44],[14,-61],[-11,-36],[79,-120],[58,-35],[55,-19],[-12,54],[35,17],[-46,73],[74,75],[42,52],[50,-27],[56,19],[39,-33],[61,-107],[26,-73],[4,-54],[-16,-77],[23,-33],[61,17],[18,44],[-13,71],[-24,35],[13,47],[29,0],[57,-73],[78,-41],[11,30],[37,-59],[51,-33],[-53,-59],[-82,26],[-23,-64],[30,-68],[23,-19],[25,-76],[26,-33],[-17,-96],[26,-51],[19,43],[42,-27],[39,-55],[23,-131],[-18,-148],[-43,-6],[-39,60],[-23,115],[70,31],[8,46],[-50,12],[-27,-60],[-37,-21],[-24,50],[-26,-17],[-60,87],[-50,-16],[-12,67],[8,71],[-41,77],[-9,55],[-76,49],[-59,77],[17,27],[-47,75],[-84,71],[-25,-17],[22,-53],[-5,-104],[48,-61],[-9,-27],[28,-80],[7,-94],[-39,-34],[-32,41],[-2,80],[-70,139],[-42,12],[-34,86],[-51,38],[-101,96],[-12,-26],[-79,-46],[-19,-34],[12,-62],[-34,-19],[-37,-44],[-47,27],[-47,2],[7,50],[-55,51],[-5,63],[-58,16],[-8,-48],[-39,-5],[-7,75],[7,84],[-13,60],[16,43],[33,17],[62,98],[35,28],[-13,102],[-40,59],[-72,15],[-37,30],[-2,-82],[15,-26],[8,-95],[-14,-41],[-63,9],[-12,103],[-32,20],[-37,75],[-37,12],[-15,84],[1,82],[-18,126],[-46,100],[30,53],[-23,51],[6,57],[-17,139],[-46,18],[8,120],[-8,41],[21,100],[44,-13],[-9,-58],[72,-60],[5,-53],[31,-22],[56,16],[26,66],[-25,79],[-10,156],[-12,41],[19,62],[-6,40],[44,115],[-9,160],[15,91],[-16,92],[-26,24],[8,75],[28,148],[19,54],[-3,53],[46,169],[-10,65],[19,43],[61,14],[31,48],[22,-45]],[[115373,46526],[24,6],[11,-64],[-18,-19],[-35,24],[18,53]],[[120428,39238],[-25,-106],[-28,-37],[-13,67],[32,90],[34,-14]],[[127547,27527],[58,-35],[52,-46],[57,-23],[20,-56],[-53,0],[-67,21],[-17,45],[-45,32],[-5,62]],[[127916,27551],[31,-45],[-80,-26],[-25,43],[23,24],[51,4]],[[126701,28403],[-6,-30],[36,-35],[19,53],[27,20],[20,-28],[-34,-136],[-20,26],[-77,26],[-29,124],[13,45],[51,-65]],[[126551,28714],[34,9],[32,-23],[23,-41],[16,-80],[-34,-28],[-38,28],[-33,-5],[-41,23],[-46,126],[29,49],[58,-58]],[[126439,28756],[-11,-66],[-63,22],[-24,46],[13,71],[27,25],[46,-46],[12,-52]],[[127246,29012],[17,-28],[106,-5],[21,-35],[38,-21],[-2,-50],[-19,-46],[-32,-3],[-81,115],[-35,18],[-13,55]],[[126732,29338],[-8,-57],[12,-46],[-14,-111],[-22,23],[29,92],[-47,39],[17,48],[33,12]],[[123866,29151],[-14,23],[-75,57],[-53,79],[78,-35],[64,-84],[0,-40]],[[123759,29372],[80,-3],[15,-55],[-31,-14],[-58,37],[-6,35]],[[125469,31152],[84,-72],[7,-88],[-16,-59],[-49,45],[-50,98],[-1,56],[25,20]],[[128141,31155],[34,-38],[65,-4],[47,-133],[4,-53],[29,-20],[48,-74],[17,-83],[101,-87],[39,-52],[39,-95],[1,-48],[18,-82],[-58,-33],[-37,-57],[-74,22],[-64,57],[-65,118],[14,33],[4,86],[-21,44],[-37,18],[-40,43],[-7,38],[-79,113],[-3,70],[-18,42],[16,108],[27,67]],[[125236,31191],[-36,-11],[-44,67],[2,56],[44,33],[29,-41],[14,-61],[-9,-43]],[[128096,31387],[12,-83],[-14,-115],[-22,-19],[-22,103],[4,94],[-17,23],[32,56],[27,-59]],[[124753,31606],[-33,42],[12,59],[35,35],[20,-31],[-7,-84],[-27,-21]],[[127154,31954],[-24,-18],[3,-47],[91,-40],[-19,-69],[18,-131],[-10,-65],[-37,-91],[-22,-29],[-37,-10],[-55,17],[-9,-21],[7,-97],[51,-80],[11,-48],[-20,-53],[-48,-48],[-71,-31],[-18,31],[-99,3],[-14,-25],[8,-72],[-42,-91],[-56,-68],[-126,-69],[-31,-41],[-80,-36],[-47,-58],[-74,-13],[-42,22],[-42,1],[-54,-23],[-108,-3],[-64,121],[-60,27],[-44,-22],[-19,-30],[-50,71],[-60,30],[-32,66],[-57,40],[-26,-17],[-65,38],[-23,78],[7,72],[33,54],[50,-59],[36,37],[69,-33],[55,43],[86,-62],[9,-21],[63,7],[86,46],[40,-34],[31,38],[28,-13],[41,55],[-24,55],[37,63],[8,131],[47,9],[9,-50],[-45,-49],[7,-53],[-9,-48],[32,-117],[63,-17],[44,65],[35,3],[31,-22],[16,-43],[32,14],[34,56],[25,-31],[57,63],[3,81],[20,60],[66,105],[51,48],[85,-31],[19,20],[14,70],[-13,33],[1,74],[-22,121],[-21,33],[-18,105],[13,31],[72,-25],[34,3],[25,-56],[31,-16],[28,45],[38,32],[37,9]],[[127315,32557],[-42,53],[12,55],[29,-3],[1,-105]],[[127063,32812],[-30,-26],[-1,86],[36,-23],[-5,-37]],[[122845,32937],[26,7],[89,-32],[23,-37],[92,-58],[86,-65],[39,-42],[37,7],[70,-76],[81,-40],[41,-33],[202,-98],[37,4],[135,-43],[24,-18],[29,-59],[77,-48],[14,-37],[35,-25],[19,-44],[80,-28],[57,25],[61,-12],[14,-93],[21,-25],[49,-11],[52,-45],[70,-150],[50,-31],[63,0],[131,-233],[46,-58],[-10,-66],[10,-60],[-10,-108],[-13,-31],[-8,-81],[11,-34],[76,1],[126,-66],[68,-10],[75,-93],[50,-31],[10,-24],[46,-3],[41,-59],[78,-17],[17,21],[61,-18],[67,-90],[39,-103],[39,-39],[15,-87],[-5,-132],[-30,-17],[-67,-6],[-13,-16],[-49,13],[-93,-4],[-24,17],[-59,-18],[-13,-58],[5,-74],[39,-62],[4,-57],[27,-41],[8,-110],[26,-60],[49,-17],[50,-62],[10,-45],[26,-10],[9,-69],[30,4],[16,-75],[58,-3],[35,-31],[12,-42],[44,0],[37,-155],[10,-164],[76,-59],[19,-50],[3,-84],[26,-93],[23,-31],[53,-13],[50,33],[68,10],[68,23],[27,-16],[-3,-58],[-48,-155],[17,-73],[41,-19],[47,-48],[62,-16],[42,14],[61,-25],[47,-2],[17,-45],[-37,-26],[-88,-33],[-2,-24],[83,-132],[72,-26],[26,6],[39,-53],[61,-11],[50,-29],[10,-62],[-83,28],[-20,-40],[115,-69],[18,-50],[-55,-40],[-24,0],[-28,-38],[-37,13],[-41,-24],[-20,33],[-34,5],[-23,46],[-5,80],[-21,-3],[-74,63],[-110,-8],[-35,46],[-16,-21],[-65,42],[-35,5],[-34,-26],[-40,24],[-51,5],[-14,52],[-24,-26],[-38,9],[-53,-17],[-65,59],[-82,-11],[-15,-27],[-39,71],[-44,-4],[-54,43],[-40,68],[-9,68],[-70,143],[-29,0],[-69,48],[-33,112],[-19,12],[-1,83],[-52,42],[-58,21],[-27,50],[7,74],[-54,131],[-27,31],[-33,78],[-22,107],[-40,38],[-6,61],[-40,33],[-45,4],[-62,50],[-40,18],[-57,-9],[-55,52],[-84,27],[-40,1],[-45,21],[-4,47],[-37,15],[-28,41],[-27,-25],[-29,30],[-46,-2],[7,-89],[-32,7],[-5,35],[-43,-24],[-10,-43],[-112,62],[-31,-16],[5,-54],[39,-101],[-23,-35],[-49,-7],[-45,37],[-40,-31],[31,-97],[-13,-34],[-98,-4],[-137,-53],[-53,29],[-27,-26],[50,-51],[88,-45],[50,-67],[52,-117],[3,-111],[-35,-39],[-54,-12],[-46,-31],[-43,-52],[-110,-95],[-29,5],[-43,52],[-92,48],[-88,-16],[-48,-19],[-33,12],[-57,-19],[-48,10],[-33,40],[-43,-1],[-30,-38],[-45,-3],[-52,69]],[[126699,32870],[49,-48],[17,-51],[84,-25],[96,-97],[54,-77],[37,-5],[49,-30],[63,-129],[57,-53],[23,-71],[26,9],[32,-109],[77,-48],[17,15],[18,-74],[33,-5],[42,-118],[27,-48],[0,-66],[-31,-48],[8,-92],[-36,-97],[-42,-18],[-54,85],[-24,123],[13,100],[-6,78],[-64,191],[-18,13],[-43,86],[-28,76],[-45,51],[-71,19],[-67,60],[-76,120],[-52,31],[-17,39],[-129,136],[-69,42],[-29,-9],[-16,32],[53,49],[42,-37]],[[126387,33070],[84,-62],[9,-38],[-7,-68],[-34,-15],[-68,2],[-73,130],[28,31],[61,20]],[[125111,33338],[82,-8],[15,-25],[34,4],[37,-21],[-45,-93],[-33,13],[-67,-20],[-58,16],[-59,0],[-43,-21],[-6,40],[38,19],[-16,54],[29,34],[49,-11],[43,19]],[[126142,33708],[52,-46],[23,-82],[-45,-10],[-48,70],[18,68]],[[77925,66390],[1,-4]],[[77926,66386],[2,-8],[6,-4],[7,-3],[5,-4],[-5,-12],[0,-4],[16,-24],[3,-7],[-5,-2],[-2,-5]],[[77953,66313],[-6,-17]],[[77947,66296],[-6,-7],[-5,-10],[-2,-8],[2,-12],[6,-4],[7,0],[7,-5],[21,-46],[28,-23],[20,-19],[3,-7],[-6,-4],[-1,-6],[5,-11],[10,-17],[4,-8],[2,-35],[26,-43],[58,-42]],[[78126,65989],[0,-19]],[[78126,65970],[-12,-2],[-12,0],[-8,-3],[-10,5],[-19,-8],[-5,-11],[0,-11],[7,-8]],[[78067,65932],[9,-5],[10,-1]],[[78086,65926],[0,-24]],[[78086,65902],[18,-23],[4,-13]],[[78108,65866],[9,-24],[1,0]],[[78118,65842],[-1,-57]],[[78117,65785],[-37,-28],[0,-20],[-1,-8],[-2,-6],[-8,-21],[-90,-9],[-69,-81],[-12,-10],[-38,-30],[-88,-99],[-11,-18],[-29,-30],[-41,-63],[-16,-17],[-2,-5],[-4,-12],[-5,-9],[-10,-5],[-4,-5],[-23,-44],[-6,-8],[-5,-1],[-8,-1],[-42,-71],[-10,-23]],[[77556,65161],[10,-31]],[[77566,65130],[3,-27],[1,-6],[1,-4],[17,-33],[5,-56],[-2,-9],[-6,-19],[-5,-22],[-6,-13],[-3,-8],[3,-2],[2,1],[4,6],[28,-29],[7,-7],[17,-10],[5,-5],[0,-6],[-4,-11],[0,-10],[2,-5]],[[77635,64855],[7,-15],[-4,-10]],[[77638,64830],[-27,18],[-15,14],[-39,-2],[-24,24],[-8,3],[-8,-8]],[[77517,64879],[-58,12],[-72,49],[-71,24],[-7,41],[-68,63],[-23,-19],[-60,49],[-67,-10],[-59,22],[-38,-30],[-46,10],[-42,-74],[-63,22],[-33,44],[-65,-16],[-73,11],[-18,-34],[-59,-22],[-23,-74],[-63,25],[-59,-3],[7,109],[-55,5],[-70,122],[-75,-52],[-29,-70],[-80,-8],[-11,71],[-38,4]],[[74559,65982],[0,12]],[[74516,66646],[0,38],[14,37],[3,6],[7,9]],[[74491,66995],[5,49]],[[74496,67044],[-12,10],[-24,27]],[[74332,67194],[-35,20],[13,16]],[[74310,67230],[1,20]],[[74365,67621],[-15,118],[58,-11],[49,14],[13,93],[-52,9],[-64,-25],[-19,26],[-10,3]],[[74315,67867],[4,1],[4,2]],[[74329,67887],[22,-10],[39,-3],[158,72],[88,22],[106,42],[145,36],[74,32],[138,17],[40,77],[93,97],[142,30],[37,38],[115,51],[145,25],[65,21],[165,8],[43,-34],[54,-144],[7,-72],[49,-32],[110,-22],[142,20],[117,36]],[[76423,68194],[478,-24],[137,-6],[166,-9],[374,-18],[27,8]],[[77869,67919],[1,-11]],[[118848,60834],[48,-91],[17,-54]],[[118913,60689],[-33,-15],[-52,42],[-105,-102],[-1,-45],[-49,-14],[-42,-112],[-73,-85],[-31,-68],[-13,-115],[54,-59],[-33,-153],[15,-130],[-13,-47],[-56,3],[-140,-101],[-13,-66],[-36,-59],[-39,-9],[-44,-53],[-79,-33],[4,-73],[-115,-65],[-23,-39],[-53,-9],[-61,16],[-44,-51],[-6,-44],[-96,-37],[-40,-52],[-3,-61],[24,-33],[-36,-98],[-40,-40],[-2,-81],[30,-46],[60,-9],[62,-27],[32,-66],[62,-89],[29,-9],[46,-71],[28,17],[31,-82]],[[117370,57927],[-35,-31],[-69,71],[-128,-55],[-64,38],[-35,78],[-32,-23],[-43,-91],[-51,-46],[-48,4],[-18,97],[-24,22],[-30,-39],[-56,25],[49,117],[-49,-22],[-42,39],[-42,-17],[29,99],[5,61],[39,59],[28,72],[77,62],[-46,83],[23,113],[35,73],[-2,31],[56,91],[-33,98],[-46,82],[-67,8],[-71,68],[-73,-57],[-34,62],[-12,58],[-45,9],[-25,67],[0,98]],[[62357,54828],[57,17],[66,-68],[-22,-46],[-66,-5],[-63,35],[-41,68],[19,33],[50,-34]],[[59316,57397],[-58,-15],[-1,43],[40,4],[19,-32]],[[59062,57936],[85,-8],[45,20],[69,-6],[-13,-69],[-119,-21],[-76,23],[-47,44],[24,60],[32,-43]],[[58157,58301],[-75,-33],[-20,21],[-64,-4],[-34,48],[24,45],[43,-4],[65,-49],[61,-24]],[[57936,58357],[-39,-5],[-44,53],[46,27],[42,-29],[-5,-46]],[[58537,58438],[-67,-8],[-39,16],[-24,57],[36,27],[58,-4],[40,-32],[-4,-56]],[[56955,58958],[21,-45],[-18,-41],[-40,25],[11,68],[26,-7]],[[66053,57535],[-38,-13],[-104,-93],[-75,-13],[-75,55],[-100,-4],[-73,24],[-96,-47],[-40,11],[39,104],[33,160],[-11,68],[11,150],[-27,81],[36,131],[-8,107],[-42,95],[-55,-45],[-58,-17],[7,85],[-28,71],[78,17],[41,56],[-26,80],[-36,-61],[-2,-61],[-81,-29],[-65,25],[0,69],[26,69],[-5,60],[33,104],[-1,105],[43,32],[58,100],[7,62],[78,274],[-15,47],[16,46],[37,190],[48,69],[-22,53],[17,132],[-4,86],[-27,73],[-18,88],[4,47],[-21,111],[-20,55],[5,75],[45,67]],[[46633,22042],[-3,-10],[2,-11]],[[46729,21763],[16,-32]],[[46745,21731],[1,-5],[-7,-8]],[[46719,21283],[-7,-47],[4,-59]],[[46698,20923],[17,-52]],[[47604,20537],[-3,-20],[4,-15],[0,-5]],[[47637,19997],[0,-22],[1,-21]],[[48104,19565],[12,-26]],[[48116,19539],[3,-15],[5,-19]],[[48101,19422],[-5,-39]],[[48046,19068],[0,-22],[13,-35]],[[47991,18824],[0,-34]],[[47996,18752],[-2,-15],[-1,-12]],[[48000,18693],[-23,-26]],[[47792,17939],[-2,-10],[5,-24]],[[47344,17558],[-27,-62]],[[46462,17703],[-19,29],[-3,8],[2,19]],[[46497,17817],[17,52]],[[46514,17869],[-7,7],[0,9],[9,15]],[[46566,17926],[-9,33]],[[46586,17979],[-1,6],[-3,6],[0,7]],[[46744,18518],[5,18]],[[46740,18541],[-1,4],[1,5]],[[46740,18550],[20,60]],[[46791,18645],[-4,2],[-3,2]],[[46830,18860],[-12,52]],[[45741,19723],[-19,19],[-16,1],[-6,21]],[[45700,19764],[-11,10]],[[45509,19893],[-7,17],[-3,6]],[[45502,19952],[-27,31]],[[45355,20072],[-13,24]],[[44922,20787],[3,0],[-2,5]],[[81980,53902],[108,166]],[[82502,54558],[0,-6],[-1,0],[0,5],[-3,-5]],[[82464,54059],[-2,-48]],[[88445,49726],[-21,0],[-23,4],[-19,12],[-18,31],[-28,67]],[[88336,49840],[7,1],[10,15],[-1,74],[-29,124],[-8,203],[9,67],[38,65],[10,98],[56,163],[78,66],[36,-34],[16,-86],[47,-13],[25,-41],[-10,-139],[-30,-82],[18,-60],[-3,-73],[30,-14],[10,-92],[-11,-113],[-33,-61],[-22,-109],[-23,-27],[-64,-5],[-47,-41]],[[77576,61883],[-1,1],[-2,9],[2,30]],[[77575,61923],[-4,8],[-37,14],[-31,47],[-2,23],[-7,10],[-2,4],[0,9],[1,8],[2,5],[28,14],[1,11],[2,10],[23,8],[0,42],[-27,20],[-27,34],[-63,-24],[-5,-5],[-2,-9],[-44,-91],[-13,-9],[-9,1],[-8,5],[-11,25],[-4,4],[-8,7],[-16,51],[-15,7],[-36,21],[-6,1],[-38,-13],[-20,0],[-18,6],[-23,49],[-7,7],[-7,3],[-56,1],[-17,51],[32,2],[11,2],[16,5]],[[77128,62287],[6,17],[-8,16]],[[77126,62320],[-42,15]],[[77084,62335],[6,45]],[[77090,62380],[8,25]],[[77098,62405],[0,8],[0,4],[0,1]],[[77098,62418],[2,5],[3,3],[9,3],[5,5],[1,8],[-1,8],[-34,34],[-77,28],[-85,55],[-6,5],[-15,22],[-25,26],[-18,26],[-6,4],[-6,3],[-6,3],[-2,10]],[[76837,62666],[-18,148]],[[76819,62814],[-55,95],[-35,16],[-20,21],[-22,12],[-12,16]],[[76675,62974],[-37,72]],[[77647,64182],[23,36],[47,2]],[[77717,64220],[14,39],[7,12],[8,4],[8,-2],[28,-10],[7,-4],[16,-21],[27,-27],[37,-14],[8,1],[13,16],[19,4],[55,-13],[27,2],[7,-4],[31,-29],[39,17],[44,-14],[14,-15],[7,-1],[22,-10],[9,0],[76,34],[21,-5],[30,-2],[4,-2],[14,-9],[15,-17],[6,-25],[18,-18],[32,-12],[32,-54],[7,-6],[46,9],[23,12],[16,17],[55,79],[187,22],[26,11],[38,10],[97,16],[43,81],[7,55],[3,-2],[7,-1],[7,3],[12,6],[8,2],[17,1]],[[79011,64356],[55,13],[12,6]],[[79334,64062],[-6,-24]],[[79446,63876],[-5,-8]],[[79438,63855],[5,-26]],[[79646,63557],[1,-11],[-4,-10]],[[79700,63372],[0,-17]],[[79700,63355],[-6,-15],[-2,-9],[-2,-40]],[[79700,63272],[0,-5],[0,-24]],[[79700,63243],[-5,-16],[-2,-4],[-2,-2],[-3,-2]],[[79648,63118],[14,-26]],[[79645,63029],[-6,-50]],[[79654,62928],[2,-29]],[[79656,62899],[0,-3],[-8,-8],[1,-17]],[[79669,62769],[2,-18]],[[79671,62751],[-6,-3],[-12,1],[-23,-21],[30,-21]],[[79660,62707],[10,-41]],[[79673,62660],[15,-21]],[[79688,62639],[1,0],[8,1],[11,-7],[8,-11],[-2,-13],[12,-33],[8,-15],[28,-18],[34,-10],[32,-20],[50,-13],[14,2],[12,1],[5,3],[4,5],[-11,6],[-2,2],[-2,5],[-1,6],[1,5],[11,6],[9,21],[59,-3],[79,42],[20,22],[21,-1],[4,2],[2,1],[9,9],[94,-30]],[[80206,62604],[33,-29],[10,-125],[-25,-183],[-40,-18],[-157,-28],[-21,57],[0,85],[-63,-31],[1,-52],[27,-27],[-11,-42],[-51,-32],[-7,-95],[27,-36],[-77,-103],[9,-79],[-13,-28],[16,-94],[-36,-161]],[[125104,61660],[15,-39],[-101,-56],[-19,59],[105,36]],[[124896,62007],[52,0],[-54,-84],[-72,-17],[-81,-88],[-53,-108],[-81,-70],[-2,-64],[-50,-4],[-12,64],[27,41],[94,93],[28,71],[67,82],[55,133],[28,0],[54,-49]],[[125846,62567],[-98,-16],[-46,-37],[-85,-33],[-86,-117],[-86,-38],[-26,39],[-55,-114],[-64,-54],[-63,-95],[-42,-7],[-46,-56],[-45,7],[122,138],[27,96],[37,20],[51,63],[3,46],[64,9],[42,64],[41,14],[-6,100],[30,31],[21,-92],[25,-20],[93,16],[118,137],[68,13],[6,-114]],[[126518,63122],[-79,-93],[-45,-28],[-40,-85],[-46,-46],[-28,-1],[-120,-131],[-41,-17],[-18,53],[27,26],[44,88],[56,17],[80,118],[49,15],[23,52],[71,32],[67,0]],[[127141,63685],[-16,-77],[-52,-72],[-84,-84],[-21,59],[48,6],[125,168]],[[127853,64678],[34,103],[27,-26],[-61,-77]],[[128162,65225],[3,-55],[-30,-53],[14,-66],[-43,-52],[-45,22],[2,45],[82,167],[17,-8]],[[128641,65759],[-24,-7],[-66,-143],[-42,-42],[-80,-12],[-70,-80],[-61,44],[10,67],[61,88],[86,15],[33,25],[54,118],[11,47],[70,56],[34,-115],[-16,-61]],[[128751,65857],[-56,-3],[-34,53],[86,81],[33,-7],[11,-56],[-40,-68]],[[128470,65954],[-57,1],[-19,66],[61,-5],[15,-62]],[[123560,68097],[61,-89],[-36,-138],[12,-100],[34,-130],[35,-13],[-4,-58],[38,-38],[31,-131],[14,-133],[4,-143],[-13,-145],[-29,30],[-42,-112],[23,-14],[-31,-131],[23,-66],[2,-75],[56,-75],[-33,-137],[92,-38],[-7,-64],[36,-79],[19,-142],[35,-169],[42,-264],[81,-183],[48,-165],[5,-66],[32,-66],[0,-58],[23,-117],[60,-145],[-61,39],[-13,33],[-93,85],[-115,23],[-77,26],[-38,33],[-53,-26],[40,-38],[-74,-33],[-41,-37],[-35,-86],[5,-80],[-75,-219],[-94,-336],[-2,-156],[18,-78],[64,-129],[59,-41],[40,-70],[6,-113],[33,-121],[-13,-38],[34,-65],[31,4],[62,52],[37,-17],[5,-114],[21,-104],[17,-27],[-39,-85],[-39,-9],[-32,115],[1,96],[-70,22],[-148,6],[-18,82],[-75,-36],[-27,-33],[-67,-187],[-31,-184],[-62,-65],[-41,68],[-12,151],[-24,84],[-6,116],[90,279],[0,71],[-32,79],[-9,114],[6,81],[54,163],[33,56],[-21,217],[-16,49],[-68,132],[-23,102],[42,54],[41,208],[-5,72],[24,92],[13,133],[-13,136],[19,116],[-10,160],[-40,113],[32,227],[54,111],[-34,148],[-39,98],[-81,86],[-19,38],[-2,82],[-52,67],[-11,105],[6,185],[46,52],[23,76],[9,167],[23,99],[-35,92],[-9,104],[-17,21],[72,52],[105,40],[3,-63],[27,-32],[56,8],[47,75],[-32,84],[44,44],[42,123],[-4,26],[-92,121],[-22,53],[82,60],[41,58],[43,-88]],[[133229,68235],[-65,57],[-167,118],[89,-14],[143,-161]],[[121394,68599],[-46,-56],[-54,-27],[-89,-2],[110,82],[79,3]],[[121625,68628],[55,10],[36,-61],[61,0],[-76,-107],[0,-52],[-106,-108],[-25,23],[-61,135],[-73,-51],[-7,63],[71,78],[12,59],[43,49],[70,-38]],[[76423,68194],[-21,20],[78,80],[50,108],[-16,72],[44,36],[127,-1],[102,63],[112,145],[25,-5],[-63,-81],[-113,-110],[90,-11],[36,-22],[84,-7],[57,23],[-18,158],[32,34]],[[132406,68767],[126,-37],[-23,-33],[9,-60],[88,-130],[65,-60],[1,-99],[-113,95],[-64,71],[-41,65],[-34,101],[-73,31],[59,56]],[[131879,71127],[59,-98],[-39,-97],[-86,0],[-110,-53],[-204,-138],[26,82],[47,75],[-5,38],[78,96],[120,53],[43,43],[71,-1]],[[84216,74539],[71,-1],[15,-27],[63,-27],[-91,-24],[-58,79]],[[84352,74495],[-56,43],[-77,43],[108,1],[25,-87]],[[2954,74547],[-84,-7],[-29,35],[95,44],[109,-49],[-91,-23]],[[82598,74819],[17,-92],[-98,21],[-30,64],[111,7]],[[95406,75833],[308,-65],[-16,-117],[-79,-7],[-113,63],[12,29],[-57,80],[-55,17]],[[109,77145],[78,2],[59,-58],[196,-46],[79,-71],[-24,-59],[252,-71],[29,-60],[137,-83],[57,32],[77,-23],[207,-114],[-25,-36],[109,-49],[99,5],[73,-27],[-96,-80],[12,-34],[136,-50],[77,-5],[-80,103],[38,40],[204,-89],[50,-204],[94,47],[40,-30],[-31,-95],[-7,-107],[56,-80],[28,-90],[-109,-60],[206,-84],[0,-107],[53,-1],[50,56],[57,16],[34,-80],[85,18],[5,42],[-53,41],[-88,14],[-52,37],[102,49],[-5,89],[-32,92],[-98,54],[-73,-18],[-39,36],[393,9],[111,-43],[101,-65],[126,-20],[116,30],[179,23],[101,-38],[-16,-36],[131,-65],[-13,-43],[192,-102],[113,-97],[157,-64],[27,-50],[147,-25],[-7,-76],[-65,23],[-97,-24],[-149,-94],[-14,-56],[31,-56],[-68,-45],[-184,60],[-45,-25],[108,-39],[-22,-77],[-81,34],[-213,-20],[-197,82],[12,27],[-150,23],[4,-49],[108,-26],[1,-92],[86,-7],[-16,-60],[-132,-73],[133,6],[41,-102],[-88,-64],[-144,-44],[-21,-88],[-53,-42],[30,-33],[135,-33],[29,-94],[-77,-23],[-95,52],[5,-83],[-107,-48],[-102,27],[-6,68],[-82,-40],[-150,50],[-31,85],[-222,108],[24,58],[-118,-12],[-60,-24],[-153,23],[-67,76],[-54,12],[12,114],[-55,83],[-9,90],[-409,126],[-104,-42],[-64,-61],[-332,3],[-94,41],[44,105],[-82,29],[-93,102],[-8,51],[64,9],[16,68],[71,23],[1,45],[-49,52],[-62,-79],[-76,-6],[-72,82],[-52,-103],[-177,-13],[-22,-104],[40,-95],[170,-93],[7,-61],[-91,-83],[-10,-100],[-53,-58],[-129,-46],[0,2],[0,307],[0,309],[0,307],[0,310],[0,307],[0,309],[0,307],[0,261],[109,-39]],[[88132,77315],[-122,-72],[-91,-115],[-181,-68],[-172,-31],[-79,1],[-142,110],[1,101],[32,126],[54,58],[138,76],[177,9],[342,-153],[43,-42]],[[130653,77534],[-32,-82],[32,-73],[-22,-33],[65,-134],[-133,38],[11,147],[-34,41],[14,54],[99,42]],[[94621,77463],[-74,41],[59,45],[59,-30],[-44,-56]],[[130666,77453],[-5,109],[91,-14],[-8,-74],[-78,-21]],[[133729,77672],[-85,-121],[-120,-4],[-270,78],[-43,43],[-103,27],[12,45],[170,89],[142,-23],[74,-28],[228,-43],[-5,-63]],[[91606,78032],[165,-137],[87,-17],[178,-113],[28,-66],[-28,-57],[-105,-22],[-243,18],[14,63],[-66,45],[-144,9],[-137,61],[-47,46],[15,39],[-60,33],[26,85],[80,53],[112,39],[125,-79]],[[100732,78049],[-30,62],[12,104],[41,95],[82,-40],[-63,-58],[2,-124],[-44,-39]],[[89075,78683],[122,-103],[53,-8],[-28,-87],[-124,4],[-10,47],[-82,50],[-116,15],[0,46],[185,36]],[[137781,78764],[0,-300],[0,-37],[-128,-73],[-204,3],[-115,-43],[-80,141],[108,124],[107,41],[145,91],[167,53]],[[121657,78790],[36,-42],[-75,-50],[-163,-2],[-115,52],[68,41],[187,12],[62,-11]],[[484,78785],[131,-18],[259,-146],[104,-42],[-74,-75],[-113,-47],[-360,-37],[-179,-45],[-124,36],[-128,16],[0,37],[0,300],[100,31],[157,-19],[96,27],[131,-18]],[[98655,79240],[-70,-13],[-257,5],[-2,50],[121,53],[33,53],[114,55],[237,-40],[62,-48],[-157,-63],[-81,-52]],[[118228,79447],[-49,-59],[-170,9],[-79,52],[199,20],[99,-22]],[[118390,79530],[-49,-7],[-340,31],[39,34],[121,9],[100,30],[154,-41],[-25,-56]],[[99333,79623],[12,-114],[-67,-23],[-186,23],[-122,76],[210,143],[88,-38],[65,-67]],[[97536,79727],[-146,-120],[-143,79],[46,54],[100,11],[143,-24]],[[114741,79693],[-55,43],[140,36],[98,-41],[-19,-38],[-164,0]],[[90056,79879],[71,-12],[103,5],[23,-23],[237,-37],[43,-68],[-124,-69],[-2,-112],[-32,-28],[-152,1],[10,-67],[-31,-63],[-84,-85],[-34,-83],[76,-63],[-89,-83],[5,-77],[53,-26],[13,-72],[56,-107],[135,-149],[30,-69],[368,-245],[159,-45],[61,-36],[-77,-62],[-102,-11],[-309,21],[-90,-32],[-120,11],[-143,81],[-81,-48],[14,-51],[-195,59],[-26,55],[-76,10],[-186,-17],[-58,40],[-118,-6],[52,59],[-5,60],[-69,41],[225,17],[-192,62],[-82,83],[-42,76],[-147,-34],[-98,41],[-14,68],[-122,-24],[-44,-34],[-106,-17],[-127,68],[-41,105],[-9,82],[80,139],[133,14],[143,-28],[59,64],[-33,30],[103,52],[11,119],[83,61],[-46,52],[-153,22],[85,91],[202,61],[4,116],[64,44],[81,6],[84,42],[167,-17],[131,65],[154,30],[141,-53]],[[96045,79989],[61,-49],[13,-103],[120,48],[81,-75],[-67,-48],[-319,-30],[-155,-40],[-123,59],[51,78],[-33,92],[187,57],[184,11]],[[97925,79979],[-24,-29],[-169,9],[100,52],[93,-32]],[[123342,80204],[118,-24],[171,-104],[145,-72],[61,-191],[-150,-34],[-161,27],[-83,-4],[-393,53],[-277,67],[-109,-3],[-205,-48],[-76,57],[53,32],[125,-11],[99,20],[64,58],[79,124],[101,63],[91,-11],[87,26],[172,6],[88,-31]],[[100894,80344],[-205,-3],[38,42],[167,-39]],[[120844,80392],[107,-45],[90,-67],[-83,-31],[-120,64],[6,79]],[[122680,80235],[-83,14],[-62,82],[21,92],[50,21],[207,14],[84,-68],[-28,-100],[-189,-55]],[[112278,80503],[-79,-77],[-73,-19],[-74,-65],[-234,31],[-86,48],[-137,27],[-43,52],[198,32],[48,96],[244,-34],[216,-10],[20,-81]],[[101800,80644],[48,-56],[-173,-9],[50,60],[75,5]],[[100324,81188],[62,-76],[-96,2],[-135,-37],[-75,53],[171,19],[73,39]],[[125048,81207],[26,-75],[136,-19],[85,65],[177,-14],[218,1],[67,-24],[-53,-58],[64,-45],[197,34],[384,-26],[52,-39],[141,-30],[-9,-138],[-311,-54],[-31,-25],[-194,-5],[-397,29],[-195,93],[-220,32],[-168,75],[-166,30],[-55,40],[81,100],[41,112],[105,-18],[25,-41]],[[120882,81142],[-151,-4],[54,118],[4,122],[82,10],[44,-65],[87,-29],[-64,-63],[16,-51],[-72,-38]],[[122131,81584],[307,-99],[-46,-27],[137,-57],[152,-29],[-41,-64],[90,-18],[148,18],[-76,54],[18,151],[123,46],[61,53],[119,-13],[169,-69],[154,-91],[197,-35],[201,39],[138,-21],[331,-118],[138,-23],[75,-42],[-244,-67],[-25,-55],[8,-113],[-136,-70],[-127,-13],[-95,35],[-129,-9],[-207,55],[-144,136],[15,62],[183,77],[-5,66],[-131,16],[-128,-13],[-92,-116],[45,-109],[80,-51],[84,-105],[314,-56],[98,-36],[-92,-29],[-246,-15],[-178,-32],[-197,108],[-181,-49],[-98,-2],[-291,-47],[-109,-8],[-83,85],[-137,-12],[26,-62],[-83,-98],[-126,-19],[-77,35],[-249,38],[-103,45],[-38,79],[-247,98],[-110,142],[197,-8],[21,24],[-95,92],[37,32],[-80,84],[49,39],[149,-10],[-59,112],[227,48],[42,54],[151,42],[164,13],[57,-68]],[[105740,81715],[46,-95],[-196,-1],[-85,27],[-136,2],[0,46],[288,2],[83,19]],[[111954,81904],[38,-96],[-190,55],[-59,50],[139,17],[72,-26]],[[126015,81915],[-308,-6],[159,67],[152,-13],[-3,-48]],[[94976,82122],[117,0],[178,-154],[-70,-128],[-154,-101],[-21,-42],[-144,-13],[-292,-95],[-177,-28],[-194,-61],[-368,-67],[-347,-81],[-174,-33],[-94,8],[-117,-58],[-105,-1],[-290,-91],[-86,6],[-253,-92],[-107,-64],[-105,-28],[-105,-176],[-108,-73],[-131,-15],[-23,-59],[-104,-19],[-146,11],[-49,-75],[-199,-66],[59,-93],[-84,-13],[-46,-47],[-112,-49],[5,-47],[-88,-32],[26,-78],[-135,-63],[-8,-60],[-93,-22],[-29,-72],[-132,-87],[-126,-33],[-176,17],[-134,37],[-129,-10],[-158,68],[-209,-33],[-76,16],[-28,55],[129,66],[-52,19],[-126,-21],[-171,93],[92,12],[147,85],[181,39],[-19,55],[130,65],[232,11],[-37,96],[-112,18],[183,91],[-70,82],[141,3],[189,38],[30,48],[-203,-12],[-21,42],[254,48],[-261,49],[31,43],[-52,51],[216,19],[92,-50],[102,73],[-46,39],[110,68],[266,-42],[-67,117],[237,43],[28,65],[336,106],[99,45],[135,-5],[114,38],[85,73],[218,9],[92,96],[214,20],[175,-36],[262,11],[68,-39],[292,87],[121,-21],[302,105],[131,-5],[169,64],[55,63],[251,103],[204,63],[247,39],[218,-28]],[[102949,82135],[-125,56],[181,29],[-56,-85]],[[105815,82192],[-181,-59],[-116,55],[229,52],[68,-48]],[[103239,82243],[-171,-11],[-64,44],[65,56],[115,3],[82,-64],[-27,-28]],[[112155,65198],[-19,-1],[-18,-7]],[[110805,64992],[-21,27]],[[110205,65411],[-18,2],[-18,6]],[[109861,65504],[-4,14],[-2,7],[-14,19]],[[109481,65658],[-4,8]],[[109477,65666],[-1,11],[-1,5]],[[108034,65854],[17,29],[4,13]],[[108007,65965],[11,33],[3,18]],[[108021,66016],[-4,41]],[[106778,66724],[-12,34]],[[106503,66475],[-6,-12],[-13,-32]],[[106449,65804],[34,-8],[27,-24]],[[106510,65772],[-13,-144]],[[103611,65626],[0,-18],[-2,-8],[-11,-14]],[[103209,65407],[-17,-15]],[[103193,65321],[21,-50]],[[103082,65193],[-10,8],[-23,22]],[[102647,65115],[-9,-6],[-5,-9]],[[102553,64938],[-53,-2]],[[87730,63181],[-57,-25],[13,-41],[-86,-61],[-65,5],[10,-128],[-44,-6],[-21,35],[-41,-19],[-75,-98],[-78,-21],[-64,-32],[-103,9],[-8,-44],[-88,-220],[-31,-59],[-37,-134],[-20,-25],[-29,-90],[-39,0],[-96,-80],[-15,-77],[7,-51],[132,-63],[14,-50],[33,-38],[30,5],[17,-73],[26,-45],[56,-148],[-17,-17],[-31,-120],[34,-5],[34,202],[56,-3],[-38,-66],[-42,-187],[-2,-94],[30,-27],[-32,-41],[-7,-112],[89,-94],[8,-106],[13,-37],[44,-32],[61,-119],[27,-27],[48,-107],[32,-45],[42,-117],[63,-43]],[[84195,61365],[-53,74],[-51,36],[-99,126],[-49,77],[-81,79],[-53,77],[-41,16],[-36,53],[-69,44],[-110,21],[-51,25],[-26,57],[-71,72],[-18,46],[-41,-35],[-111,28],[-49,63],[-24,92],[-37,39],[-134,73],[-53,-3],[-42,37],[91,41],[-19,98],[20,33],[125,-72],[104,-2],[27,24],[51,-17],[38,26],[-33,129],[-21,31],[89,73],[43,165],[38,22],[36,-41],[13,81],[32,13],[74,-67],[45,0],[-1,52],[-99,63],[-11,34],[-57,64],[-50,15],[-63,45],[-35,125],[45,-33],[71,4],[92,60],[36,1],[11,57],[154,45],[104,86],[71,-15],[1,156],[-68,15],[-55,-21],[-2,-38],[-119,-34],[-76,-1],[-81,-19]],[[83517,63660],[-6,116],[22,64],[1,61],[35,70],[81,13],[65,31],[15,65],[40,49],[82,-18],[88,9],[27,-14],[141,6],[32,176],[57,96],[-67,21],[41,42],[-44,129],[-69,2],[28,98],[75,83],[-53,10],[-31,78],[92,17],[12,47],[73,74],[7,54],[-46,77],[29,83],[-54,7],[-66,-37],[-69,44],[-20,62],[-49,22],[-44,-15],[-34,25],[-20,58],[-95,-34],[-33,39],[-62,29],[-9,30],[-64,-9],[-59,27],[-17,42],[-48,0],[-3,-74],[-65,-12],[-31,51],[-72,46],[-53,85],[4,47],[-46,31],[-17,52],[-57,-7],[-34,-32],[-109,-14],[-88,-49],[-108,29],[-50,-16],[-62,86],[-103,2],[-54,-49],[-49,20],[-18,51],[-36,25],[-18,76],[25,40],[-40,141],[-25,47],[-58,62],[-10,57],[-52,19],[-82,-31],[-48,37],[-82,18],[-48,-17],[-1,83],[-23,41],[1,54],[-36,102],[95,18],[3,67],[-59,49],[-62,84],[-4,85],[-97,114],[-46,1],[-59,-41],[-20,42],[-109,8],[-103,-76],[-78,3],[-74,40],[-73,-18],[-12,-91],[-81,-62],[-78,-3],[-49,40]],[[80972,66881],[5,5],[5,6]],[[80975,67012],[-4,8],[-2,2],[5,0]],[[80890,67357],[5,10]],[[80990,67436],[23,-9],[24,-1]],[[81037,67426],[16,-40]],[[81217,67377],[1,1],[1,4]],[[81272,67418],[21,8]],[[81411,67513],[-4,20],[5,44]],[[81412,67577],[-23,10],[-6,8],[1,8],[2,5]],[[81290,67700],[3,1],[28,15]],[[81088,67786],[-44,27]],[[81044,67813],[20,38],[15,68]],[[80878,68065],[-5,10],[-4,18]],[[80730,68525],[27,43]],[[80744,68605],[3,9]],[[80748,68624],[-1,2],[-1,4],[-1,0],[-6,2],[0,11]],[[80712,68669],[-12,30],[-24,20]],[[80676,68719],[19,40]],[[80695,68759],[24,16],[5,19]],[[80721,68896],[-9,18]],[[80600,68953],[-5,10],[4,16]],[[80165,68967],[-45,61]],[[80120,69028],[19,63],[-5,41]],[[79655,69486],[0,13]],[[79655,69499],[-7,5],[-30,13],[-13,17]],[[79498,69752],[3,26],[8,20],[2,7]],[[79540,69876],[6,34],[-1,48]],[[79545,69958],[-76,61]],[[79426,70105],[-67,-1]],[[79613,71313],[21,59],[-30,77],[35,60],[52,-67],[60,-15],[19,91],[60,13],[100,-28],[50,26],[15,60],[56,45],[246,-39],[118,-42],[30,6],[6,74],[-99,18],[-38,85],[-56,21],[-109,-19],[-124,5],[-117,101],[-69,29],[19,47],[0,81],[25,77],[-122,-34],[-72,-73],[-69,-13],[-86,17]],[[80694,77693],[160,-26],[57,-29],[111,18],[21,68],[114,68],[181,-100],[151,-14],[80,-34],[-3,-40],[-94,-48],[-143,32],[-31,-81],[102,0],[321,-47],[-58,-74],[13,-61],[65,-6],[17,79],[89,7],[218,-17],[91,-38],[231,-21],[26,38],[244,-61],[107,-41],[465,-229],[83,-17],[102,-70],[46,-57],[96,-38],[45,-56],[88,14],[327,-187],[130,-12],[192,-95],[-16,-35],[98,-22],[86,-52],[82,-18],[15,-49],[-22,-93],[58,-28],[-15,-104],[88,-52],[8,-97],[-70,-126],[-166,-132],[-9,-34],[-105,-84],[-138,-71],[-283,-96],[-302,-50],[-240,21],[-146,34],[-104,54],[-149,34],[-183,6],[-244,40],[-148,36],[-190,111],[-124,-34],[-49,2],[-57,78],[-174,15],[-94,76],[-40,-55],[-146,79],[-98,73],[3,61],[-84,36],[-96,16],[-26,-61],[92,-45],[-30,-48],[87,-70],[72,-10],[54,-117],[61,-8],[61,-61],[135,-23],[-32,-83],[134,-35],[74,-41],[127,-43],[142,-147],[-36,-64],[2,-110],[-56,-67],[-100,-59],[38,-64],[56,-21],[4,-51],[73,-80],[-14,-47],[62,-68],[-55,-63],[69,-88],[-50,-32],[41,-68],[124,-46],[50,-55],[80,33],[74,1],[63,-89],[99,-46],[22,-70],[158,-53],[96,1],[81,-20],[48,-47],[121,-1],[2,40],[81,13],[68,33],[31,64],[-15,55],[-50,45],[34,59],[-122,71],[-132,-56],[-84,33],[-144,178],[-71,22],[-46,123],[49,-9],[92,34],[36,120],[40,14],[150,-44],[118,-52],[34,-61],[97,-41],[118,-1],[-70,-84],[129,44],[157,-33],[147,-54],[100,-63],[65,7],[125,41],[45,-39],[133,12],[-43,109],[-15,103],[-40,62],[-61,33],[-154,202],[14,92],[31,34],[173,76],[73,52],[63,74],[61,36],[209,44],[198,145],[100,128],[31,17],[170,-49],[39,-36],[193,26],[59,-64],[96,-29],[22,-62],[47,0],[80,-65],[29,145],[48,86],[47,42],[45,96],[-47,65],[52,86],[-112,126],[-171,59],[13,75],[79,144],[50,141],[-17,24],[61,256],[-33,49],[-320,172],[58,35],[194,-74],[506,-4],[244,-60],[33,-76],[193,-118],[4,-55],[67,-122],[-22,-25],[-110,7],[-142,-31],[-250,-24],[-14,-84],[-109,-37],[-42,-57],[13,-74],[136,-68],[110,-33],[98,-168],[72,-34],[171,30],[36,-40],[132,19],[186,52],[69,-7],[51,51],[9,74],[-20,52],[28,83],[68,65],[-47,72],[70,56],[95,19],[104,-9],[153,13],[-46,53],[14,56],[111,-1],[200,73],[297,147],[140,98],[59,-23],[147,38],[86,50],[191,37],[104,-31],[-66,-58],[92,-38],[127,84],[-89,90],[117,93],[242,92],[255,51],[96,-25],[-285,-29],[133,-23],[-46,-100],[-46,-36],[76,-103],[6,-61],[-118,-33],[-116,7],[-31,-59],[218,-1],[165,-25],[87,58],[71,-68],[80,-7],[28,133],[67,52],[108,50],[151,19],[63,37],[96,-22],[165,14],[83,-43],[94,-15],[90,11],[106,109],[124,6],[19,63],[345,92],[205,-145],[-82,-37],[-56,-55],[21,-132],[216,-43],[69,29],[42,52],[-73,125],[52,32],[66,-20],[147,22],[89,56],[92,91],[-2,73],[-34,49],[-101,-6],[-24,113],[-145,152],[36,54],[160,4],[45,109],[60,12],[185,-48],[287,-27],[180,-3],[298,-44],[275,-74],[161,-62],[118,-95],[81,-18],[134,-55],[152,-21],[13,-50],[101,-17],[82,-45],[134,-42],[119,-12],[25,-58],[106,-52],[219,-140],[88,-30],[48,-54],[-29,-58],[76,-8],[82,56],[-10,40],[135,156],[72,150],[-44,53],[-79,-31],[-115,34],[-139,156],[-41,69],[33,39],[-51,59],[-132,61],[-119,25],[-81,38],[-96,-35],[-32,64],[40,158],[42,-15],[103,31],[29,53],[-90,70],[70,161],[-22,42],[38,146],[-68,35],[-173,-44],[-31,68],[83,74],[-68,49],[63,51],[44,84],[147,33],[244,109],[203,190],[63,124],[86,308],[46,107],[110,84],[120,24],[223,12],[185,-6],[348,16],[42,-19],[314,-60],[117,-76],[-27,-30],[52,-213],[-103,-128],[-29,-90],[-65,-35],[5,-79],[-59,-75],[-142,-51],[0,-63],[101,-86],[179,-81],[38,-33],[-15,-60],[76,-76],[-21,-119],[-33,-38],[31,-128],[-118,-74],[62,-90],[-50,-73],[76,-127],[-72,-117],[47,-84],[8,-136],[-61,-57],[34,-160],[105,-88],[86,-31],[178,-104],[40,-48],[-74,-36],[-13,-42],[-125,-100],[-4,-59],[46,-88],[1,-68],[-50,-32],[-21,-56],[-87,-60],[-69,0],[-22,-55],[-56,-36],[-1,-94],[-132,-12],[67,-85],[-93,-29],[6,-29],[-109,-100],[-87,7],[-2,-71],[34,-94],[-189,-17],[-39,-60],[-113,-13],[-105,30],[-44,47],[147,48],[-41,28],[-98,-50],[-56,17],[-91,96],[-129,-46],[-76,26],[-102,0],[-8,-131],[105,-66],[132,-18],[66,-42],[177,-50],[298,19],[205,-25],[58,-55],[60,-3],[138,47],[7,102],[48,91],[172,24],[24,51],[187,51],[63,73],[82,40],[30,139],[-20,40],[76,85],[242,157],[37,157],[-49,148],[-140,128],[52,92],[-6,98],[67,50],[215,62],[165,15],[76,27],[213,31],[89,-18],[34,-66],[-13,-59],[195,-103],[56,-41],[-8,-91],[-51,-61],[74,-31],[-50,-73],[-14,-81],[44,-45],[-72,-89],[213,-93],[143,-46],[71,26],[109,-16],[-14,66],[-141,-5],[-74,43],[-116,4],[-60,32],[4,130],[25,82],[82,62],[135,13],[-4,68],[-51,24],[0,60],[-94,78],[9,72],[-21,91],[-104,25],[-69,39],[-115,13],[-67,71],[-125,13],[-147,58],[-205,14],[-160,-80],[-144,-29],[-78,29],[-100,6],[-110,-36],[-80,61],[56,143],[-16,43],[-130,162],[55,69],[41,147],[-12,52],[103,78],[119,132],[1,91],[-141,105],[-16,71],[-61,53],[-73,135],[-200,115],[171,130],[17,105],[158,57],[150,26],[228,89],[57,69],[13,84],[-43,203],[-96,83],[90,42],[128,-35],[82,-49],[-38,-30],[103,-90],[-50,-49],[58,-135],[-78,-59],[-28,-101],[-61,-19],[-25,-93],[16,-41],[88,-49],[-38,-29],[54,-46],[-118,-86],[44,-43],[260,-60],[674,-59],[85,-111],[173,-42],[61,42],[-45,94],[-100,-4],[16,93],[-97,12],[-58,38],[-78,-33],[-168,46],[-61,41],[-137,22],[-71,50],[-77,11],[-114,223],[125,48],[226,29],[245,-133],[201,30],[36,75],[-102,73],[-143,-30],[-28,65],[95,26],[133,88],[157,30],[200,-19],[144,6],[236,-111],[178,-34],[137,-42],[-71,-30],[230,-110],[36,-58],[151,-41],[175,6],[257,48],[173,-64],[-128,-137],[-63,-43],[-201,-64],[22,-119],[-58,-49],[80,-140],[-67,-58],[-30,-77],[111,21],[13,123],[80,97],[171,-48],[0,-73],[-55,-120],[8,-89],[-134,-103],[4,-59],[80,-47],[88,-12],[27,43],[-88,116],[203,5],[112,88],[-151,343],[-89,131],[91,85],[-2,51],[61,19],[33,72],[-80,84],[-22,57],[-76,27],[-143,13],[-231,118],[43,26],[-38,90],[-235,43],[-143,3],[-144,73],[-50,44],[-27,116],[54,46],[26,71],[-35,71],[-93,26],[9,126],[-99,17],[30,45],[99,41],[-13,84],[98,-9],[267,48],[164,9],[584,-4],[94,24],[245,9],[162,34],[82,-34],[160,1],[69,68],[157,27],[294,23],[114,-19],[-27,-58],[-188,-65],[-121,-72],[368,34],[55,44],[46,85],[-72,25],[-93,117],[-101,49],[26,34],[-113,44],[-187,5],[53,58],[122,63],[6,67],[-114,33],[-173,10],[76,56],[268,-19],[169,46],[6,56],[110,51],[-12,61],[-174,28],[48,46],[216,-12],[123,-27],[154,49],[5,35],[109,68],[200,66],[226,-1],[128,42],[-40,36],[246,21],[103,36],[163,-25],[134,16],[38,50],[102,-6],[590,79],[-12,58],[-196,-3],[79,62],[219,-2],[-38,57],[403,-10],[198,5],[51,25],[276,-33],[-51,-48],[38,-45],[154,34],[134,-62],[142,48],[247,-1],[-17,64],[139,51],[157,33],[229,-12],[33,-51],[190,-49],[46,29],[-122,112],[-188,46],[-74,105],[243,-33],[277,15],[238,30],[71,-13],[75,152],[-141,44],[21,86],[109,6],[0,70],[224,104],[141,83],[280,89],[118,70],[151,-18],[166,64],[250,-14],[116,-75],[135,-30],[205,17],[44,-80],[-202,-124],[-221,-44],[-3,-48],[354,14],[-52,-81],[193,46],[128,-21],[126,20],[161,-29],[84,-62],[-149,-61],[-179,-153],[162,-33],[212,-1],[98,18],[53,54],[-14,71],[282,-13],[248,26],[279,-41],[114,39],[457,-44],[246,-130],[181,-69],[26,-59],[90,-26],[110,26],[76,-73],[23,-135],[142,-47],[-104,-122],[-137,23],[-269,98],[-15,-49],[117,-21],[20,-56],[127,2],[49,-73],[143,-43],[-40,-110],[-227,-135],[-51,-46],[-281,-71],[-73,-91],[-80,-42],[-107,21],[-194,-91],[-175,-44],[-111,-66],[-81,1],[-42,-109],[-156,-73],[-186,-39],[-142,-89],[-50,-61],[-153,-68],[-122,-28],[-241,0],[-5,-55],[-96,-53],[-89,-84],[-159,9],[-65,-30],[-21,-74],[-53,-24],[-15,-70],[-69,-55],[-138,-69],[74,-20],[102,55],[148,33],[45,34],[-30,79],[70,63],[160,-34],[99,27],[112,-16],[150,5],[142,50],[108,-9],[7,53],[318,42],[79,41],[108,0],[273,96],[181,48],[7,49],[-97,14],[-144,-50],[-186,-1],[-103,44],[10,35],[109,37],[69,75],[214,-13],[163,-50],[73,41],[91,-103],[140,-42],[218,-23],[172,25],[111,90],[109,-128],[-101,-146],[138,-68],[0,105],[162,16],[73,40],[217,-4],[282,72],[292,-21],[164,-1],[322,-52],[385,0],[131,-22],[79,-40],[-111,-29],[-84,26],[-52,-125],[41,-45],[175,-57],[331,-62],[334,-25],[153,-28],[127,27],[221,-7],[30,-45],[145,-10],[-24,46],[97,51],[201,-71],[77,40],[14,107],[68,39],[-85,82],[17,27],[-49,93],[120,61],[159,-10],[-27,50],[120,10],[45,50],[150,-60],[186,-36],[59,-51],[109,-27],[220,19],[68,-27],[-6,-61],[198,27],[-3,51],[108,0],[126,-27],[183,-15],[173,-145],[50,19],[123,-30],[66,-56],[146,-61],[-33,-55],[-165,25],[-244,-44],[-24,-55],[49,-15],[364,-49],[-42,-38],[-205,34],[-102,-23],[-167,-7],[88,-58],[161,-52],[194,-1],[143,-78],[12,-66],[-144,-92],[-126,22],[-123,42],[13,34],[-291,80],[55,-61],[108,-38],[164,-164],[15,-63],[102,-77],[-20,-87],[92,11],[50,-40],[55,-126],[100,-53],[42,-69],[152,-60],[54,-69],[122,-45],[65,64],[35,-122],[132,-14],[123,84],[153,251],[121,240],[105,125],[106,-32],[-32,-39],[98,-30],[62,-87],[191,-88],[199,-41],[123,4],[111,31],[97,70],[110,-6],[39,39],[216,25],[301,-69],[44,-38],[179,-54],[30,-61],[128,-66],[92,106],[-69,33],[76,56],[4,47],[275,52],[111,-46],[55,-96],[96,49],[106,-22],[108,41],[-101,92],[-9,122],[-53,39],[53,40],[1,54],[61,58],[-121,33],[-66,-43],[-75,1],[-21,87],[155,120],[204,-12],[193,11],[114,26],[53,94],[-134,74],[23,54],[254,-33],[63,-43],[260,-46],[119,10],[209,-17],[152,6],[84,-20],[229,-15],[101,-20],[322,-33],[116,-37],[157,-16],[261,-71],[-4,-16],[-423,21],[-137,-5],[-149,51],[-89,-40],[-62,-73],[-95,25],[-40,-42],[84,-33],[251,55],[712,30],[-166,-152],[-97,-50],[-96,28],[128,68],[-183,13],[-87,-50],[65,-32],[-17,-75],[-204,-41],[-117,-89],[168,-21],[86,47],[61,-7],[163,56],[81,52],[117,114],[200,149],[211,6],[251,-17],[215,-37],[248,-63],[175,-142],[-18,-44],[-120,-47],[-115,76],[-141,-81],[55,-47],[225,-26],[70,14],[51,-55],[-45,-28],[268,-43],[-59,-74],[42,-30],[89,47],[242,-25],[234,-175],[-51,-65],[93,-40],[154,-28],[144,0],[360,36],[119,44],[648,83],[632,-16],[153,-16],[205,-48],[273,-86],[174,-99],[128,-155],[31,-97],[-98,-128],[7,-31],[-68,-71],[42,-52],[223,-81],[50,8],[157,-28],[31,-40],[-32,-72],[39,-110],[-23,-110],[125,-38],[40,-62],[65,43],[-63,129],[14,98],[63,29],[38,43],[125,34],[70,64],[158,16],[56,-17],[152,41],[119,-20],[113,4],[97,48],[158,-94],[151,-32],[167,19],[154,-2],[155,-45],[211,7],[119,-20],[218,119],[63,48],[101,-31],[-5,-42],[122,-59],[-20,-110],[38,-85],[215,-34],[218,-102],[12,-110],[67,-42],[278,31],[207,103],[51,37],[-51,81],[8,73],[-63,54],[-63,130],[-114,-13],[-21,67],[138,47],[-26,109],[33,109],[270,-27],[259,-50],[305,-18],[27,-36],[195,-72],[42,29],[-87,52],[80,18],[178,-64],[55,26],[389,-26],[158,17],[164,-60],[220,-13],[88,-49],[164,-36],[75,1],[326,-109],[59,28],[156,-45],[-45,-61],[35,-20],[124,9],[111,-46],[245,-151],[0,-260],[0,-307],[0,-309],[0,-307],[0,-310],[0,-307],[0,-309],[0,-307],[0,-2],[-84,-30],[-116,-122],[-87,-7],[-129,-58],[-60,-46],[-72,23],[-113,-6],[-203,23],[-72,46],[-44,88],[-103,13],[49,-66],[-105,-39],[-67,47],[-245,14],[41,-65],[103,-58],[55,-58],[98,81],[136,43],[58,-8],[-48,-126],[34,-89],[82,-71],[127,-58],[107,88],[45,-68],[33,-107],[-6,-48],[86,-51],[26,-166],[-52,-31],[-98,24],[-43,-30],[43,-37],[54,35],[63,-9],[17,-54],[-47,-40],[122,-53],[83,-55],[77,-25],[32,-50],[-64,-81],[37,-56],[74,-29],[26,-87],[-20,-51],[-47,-5],[-19,-58],[-90,-17],[1,-95],[-253,59],[-164,65],[-146,21],[-142,4],[10,66],[-112,49],[-42,-46],[31,-88],[-160,-41],[-121,-104],[-247,-78],[-176,-105],[-137,-45],[-47,-53],[-78,-30],[-134,19],[-56,-80],[-73,-14],[-98,35],[-27,-66],[9,-44],[-80,-32],[-2,-34],[-60,-42],[-88,47],[-70,-26],[83,-48],[-62,-41],[-48,-60],[-99,23],[35,-106],[-90,-21],[-90,-103],[-131,-23],[-25,-50],[-74,8],[-13,-65],[-73,-52],[-141,-29],[-8,-38],[-81,-12],[32,-56],[-62,-42],[-38,-191],[-52,-27],[-57,61],[-62,25],[-79,138],[-16,71],[-137,83],[-70,21],[-208,-6],[-54,26],[-149,-17],[-345,-134],[-55,-17],[-292,-298],[-68,-11],[25,182],[43,64],[-14,97],[56,61],[-131,-16],[-127,-114],[-79,-32],[-147,-83],[26,-49],[-72,-97],[-78,-36],[-32,102],[-90,97],[-64,-14],[7,-61],[-68,-17],[-55,45],[-140,10],[17,-91],[-74,-4],[-48,-52],[5,-112],[-54,-29],[-31,-47],[52,-48],[4,-89],[-90,-10],[-26,-69],[-48,-30],[73,-64],[-4,-25],[-96,-49],[-30,-41],[-127,-104],[-90,-153],[-67,-197],[12,-99],[72,-65],[91,-24],[30,94],[69,18],[111,-79],[84,-15],[42,-64],[-33,-70],[-65,-84],[-92,-47],[-17,-36],[-1,-112],[28,-58],[-27,-80],[-2,-98],[70,-37],[38,24],[82,-33],[-15,-59],[38,-146],[9,-109],[-97,-48],[-24,-60],[-87,31],[-70,102],[44,78],[71,22],[67,73],[-48,20],[-31,-66],[-64,33],[-93,-27],[-37,-40],[74,-64],[-41,-31],[-132,-55],[-38,-51],[-9,-71],[-93,-199],[-11,-144],[25,-122],[131,-203],[-9,-48],[-145,-157],[-108,-2],[-60,-16],[-40,50],[-55,16],[-124,-38],[-123,-96],[-77,-85],[-63,-41],[-59,-120],[-21,-114],[8,-64],[40,-76],[-19,-178],[37,-11],[-1,-92],[-146,87],[-59,-16],[-37,-42],[-36,7],[-109,-59],[-112,-115],[-15,63],[-44,47],[-54,-48],[78,-41],[3,-43],[-43,-68],[31,-34],[-20,-38],[-10,-95],[12,-111],[-60,-44],[13,-26],[-53,-93],[0,-41],[-100,-118],[-33,-64],[-69,-80],[-85,-35],[-34,-86],[-23,2],[-48,-70],[-83,-71],[-125,-147],[16,120],[-15,72],[-71,57],[-22,142],[8,159],[-23,273],[-26,116],[23,74],[-63,46],[-60,208],[-27,269],[-40,306],[-25,128],[-55,220],[-44,288],[-23,241],[28,220],[24,247],[26,41],[65,296],[76,153],[100,50],[104,100],[67,86],[65,130],[-27,145],[-50,71],[69,52],[27,-33],[73,-21],[88,21],[44,90],[52,47],[85,-27],[85,24],[64,42],[122,111],[142,91],[145,162],[36,23],[97,130],[-8,52],[51,81],[115,95],[56,32],[52,67],[19,60],[119,32],[88,92],[95,73],[20,46],[75,76],[46,14],[94,70],[16,131],[101,76],[76,14],[37,37],[97,16],[52,64],[117,33],[58,-3],[74,36],[61,-2],[28,40],[-109,52],[105,114],[66,29],[36,69],[-29,55],[-75,27],[42,103],[69,24],[18,148],[-6,102],[19,107],[44,41],[66,16],[47,60],[77,5],[95,-35],[70,34],[-155,62],[-64,72],[-86,11],[-122,-22],[-74,-32],[-90,-9],[-137,-41],[-14,-132],[-54,-52],[23,-117],[-66,-140],[140,-64],[-7,-31],[-82,-26],[-26,-61],[-52,39],[9,59],[-63,19],[-55,-29],[-79,11],[-34,-53],[-130,-134],[-150,-73],[-54,-73],[-104,-90],[-102,-56],[-33,-91],[-74,-24],[-98,-9],[-37,-56],[-47,19],[35,81],[-31,32],[96,99],[-84,33],[-97,-59],[-38,26],[58,75],[-36,95],[23,74],[53,32],[3,43],[65,33],[-9,44],[59,87],[-9,72],[-37,36],[-98,-57],[-27,-54],[-149,-67],[-20,90],[-55,10],[-8,49],[-169,6],[-26,-47],[-226,0],[-69,-57],[-110,29],[-126,0],[-42,-41],[-125,-40],[-39,-61],[-94,-17],[-12,-121],[-40,-74],[-65,-37],[-141,-123],[-34,-55],[1,-66],[-75,-61],[-58,-18],[-36,-57],[-53,-5],[-77,-71],[-71,-27],[-149,-169],[-60,-19],[31,-103],[-103,-16],[22,-136],[-77,-88],[73,-44],[62,68],[83,-2],[53,-45],[69,16],[94,-94],[-20,-29],[15,-76],[-147,12],[-52,-31],[-67,45],[-60,-24],[5,-42],[-118,-36],[-55,21],[-39,53],[-166,44],[-13,-95],[-94,-4],[-57,-46],[-10,-57],[-137,21],[-58,46],[-92,-25],[-3,-36],[-52,-31],[-116,-16],[-137,5],[-103,151],[48,-6],[84,48],[127,-23],[131,14],[77,45],[-67,43],[-67,-19],[-77,20],[-47,113],[-47,16],[-34,55],[-39,-26],[-99,15],[-50,-15],[-35,-66],[-124,67],[-23,34],[-111,25],[-63,30],[-156,35],[-83,-20],[-95,-52],[-19,-50],[47,-22],[-90,-45],[9,-59],[-78,-74],[-135,17],[-16,72],[-66,18],[-117,-12],[-124,-53],[-18,-41],[-104,58],[-212,31],[-9,26],[-98,22],[-46,-36],[-3,-75],[-100,-87],[-80,95],[51,65],[-116,16],[-122,-19],[-48,9],[-87,-24],[-209,4],[-235,16],[-133,-51],[-70,26],[-59,-4],[-220,-79],[-122,-63],[-121,-113],[-63,-110],[-75,-90],[-153,-100],[-108,-46],[-91,-118],[-57,-161],[-9,-54],[-81,-50],[-115,-46],[-74,-127],[-87,-33],[-55,-81],[-85,-16],[-101,-86],[-4,-47],[-99,-49],[-151,-217],[-46,-14],[-12,-47],[41,-64],[-119,-40],[-30,-84],[-53,-61],[-48,-5],[-201,-185],[-85,-64],[-19,-33],[-79,-23],[-96,-85],[-37,-81],[-134,-111],[-128,-55],[-120,-119],[-17,-45],[35,-61],[148,-35],[36,-59],[88,7],[103,23],[110,-15],[86,31],[47,-33],[-55,-109],[31,-61],[-22,-27],[17,-61],[-11,-68],[-34,-32],[-12,-53],[10,-74],[34,-22],[70,52],[59,-30],[29,27],[40,115],[-50,4],[-38,63],[91,78],[59,29],[89,-26],[-77,-102],[-67,4],[4,-42],[45,-7],[42,-40],[87,-19],[-69,-74],[-16,-67],[-28,-30],[-62,-8],[-40,-41],[47,-35],[131,13],[92,22],[89,53],[56,51],[38,107],[62,39],[12,-70],[-20,-57],[-60,-63],[-51,-93],[61,-14],[37,21],[58,116],[11,87],[29,63],[-8,211],[162,-69],[81,-6],[162,63],[7,-51],[71,-56],[91,-41],[36,-53],[-30,-50],[39,-63],[60,-34],[10,-39],[157,-112],[34,-50],[81,-60],[49,-1],[21,-100],[-93,-100],[-98,27],[13,-53],[44,-38],[68,-23],[-23,-42],[31,-34],[0,-90],[-62,-79],[19,-52],[132,-120],[-43,-20],[-35,-63],[45,-58],[-87,-74],[-35,-90],[-77,-39],[-4,-115],[-26,-53],[-47,-5],[-15,-125],[16,-36],[-20,-85],[-44,-37],[-28,-116],[17,-44],[-26,-45],[38,-125],[-8,-119],[52,-58],[-63,-45],[-30,-74],[48,-67],[-13,-40],[20,-71],[-40,-96],[-8,-71],[-34,-54],[12,-47],[-30,-100],[21,-44],[-33,-30],[-31,-131],[-8,-124],[-47,-71],[-35,-19],[-82,-87],[-20,-43],[-73,-86],[-39,-31],[-50,-72],[-21,-77],[-58,-114],[-37,-103],[-26,-5],[-136,-196],[-19,-80],[-52,-120],[-1,-71],[-55,-59],[-40,-139],[-121,-175],[-43,-93],[-105,-106],[-96,-153],[-122,-106],[-25,-72],[-39,-34],[-40,-85],[-73,-64],[-11,-48],[-42,-51],[1,-38],[-40,-58],[-89,-47],[-40,-88],[-50,-55],[-12,-80],[-31,-22],[-21,-106],[-50,-70],[-50,-22],[-34,-109],[-63,-30],[-148,-141],[-95,-68],[-55,-26],[-33,-52],[-69,-69],[-34,9],[-42,-32],[-48,1],[-61,-43],[-55,-9],[-55,-46],[-62,71],[-32,10],[-36,-40],[-16,74],[-76,-21],[-28,52],[-38,11],[-44,-37],[6,111],[19,138],[-98,-66],[-56,-66],[-40,17],[56,108],[-14,20],[-74,-9],[-5,-41],[-63,-109],[-26,-25],[-18,-83],[-76,-61],[-33,-134],[-23,54],[-107,9],[-48,24],[-25,-22],[78,-87],[-28,-38],[-33,-103]],[[110088,82862],[-167,-51],[-310,30],[193,30],[284,-9]],[[108285,83548],[-112,-162],[194,28],[78,35],[245,10],[32,-78],[119,-10],[44,-78],[259,-33],[89,-150],[-19,-37],[-218,-105],[-230,-7],[-182,-43],[-324,-23],[-635,-16],[-74,-38],[-375,-105],[-200,-11],[-94,60],[97,77],[202,109],[-18,47],[110,108],[-12,45],[202,141],[93,85],[0,57],[109,71],[250,33],[130,88],[226,-32],[14,-66]],[[98083,83776],[78,-1],[426,-67],[-4,-24],[-339,-11],[-200,57],[39,46]],[[103681,84041],[266,-22],[316,-5],[86,-28],[411,-36],[-20,-58],[-236,-73],[-164,-26],[-269,4],[137,58],[-69,23],[-393,26],[72,32],[-56,90],[-81,15]],[[88493,83992],[-256,-4],[173,71],[83,-67]],[[91754,83971],[-117,-16],[-243,68],[281,47],[97,-16],[54,-62],[-72,-21]],[[106311,84076],[108,-61],[-110,-53],[185,-44],[124,67],[238,41],[315,-139],[-120,-157],[15,-126],[-67,-59],[-195,6],[290,-111],[48,-80],[-207,-92],[-182,-9],[-447,1],[-190,27],[-179,84],[-331,3],[-195,69],[-156,-41],[-147,55],[-103,67],[-20,150],[-215,40],[-178,6],[192,64],[148,73],[199,25],[-155,51],[248,107],[154,-27],[63,51],[330,-8],[470,49],[70,-29]],[[88043,84032],[-196,63],[140,45],[127,-4],[-71,-104]],[[90744,84209],[15,-141],[-69,-32],[-387,7],[16,161],[425,5]],[[89305,84242],[95,-96],[-38,-44],[-323,1],[-29,72],[111,71],[184,-4]],[[91572,84208],[-257,-4],[-152,-28],[-107,-66],[-187,-35],[-78,70],[20,93],[-125,55],[576,-9],[171,-24],[139,-52]],[[89660,84360],[76,-67],[-87,-38],[-169,33],[180,72]],[[90584,84462],[95,-56],[-229,-24],[-189,5],[-156,51],[135,28],[287,16],[57,-20]],[[87209,84498],[157,11],[145,-47],[43,-58],[-268,2],[-193,53],[-218,-122],[-348,-70],[-4,80],[-223,-28],[-150,79],[699,61],[235,66],[125,-27]],[[92718,84485],[-83,-77],[-165,-85],[-114,-12],[-102,-65],[-282,56],[-257,-39],[-151,60],[-5,71],[178,119],[333,-9],[576,35],[72,-54]],[[91467,84493],[-217,-34],[-220,46],[344,49],[93,-61]],[[90081,84528],[236,-35],[-424,-52],[-180,81],[264,32],[104,-26]],[[88026,84530],[278,19],[123,-27],[250,-108],[-201,-36],[-86,-51],[-317,-6],[-151,-20],[34,-58],[-124,-22],[-250,14],[-71,-44],[174,-78],[-213,-18],[-41,-37],[-310,10],[112,80],[-182,-4],[-133,-43],[-170,65],[164,59],[130,-30],[296,58],[-72,80],[153,15],[159,-45],[308,88],[-165,34],[-76,50],[381,55]],[[99556,84587],[78,-60],[-460,-33],[-53,34],[96,57],[339,2]],[[91304,84586],[-260,47],[72,50],[223,-42],[-35,-55]],[[92349,84600],[-116,-34],[-247,16],[-109,37],[211,52],[409,13],[-148,-84]],[[90388,84689],[205,-5],[360,-55],[41,-32],[203,-29],[-170,-45],[-232,33],[-166,75],[-241,58]],[[90138,84619],[192,22],[243,-63],[395,-77],[-46,-42],[-193,-36],[-150,73],[-333,28],[-151,63],[-377,32],[87,71],[333,-71]],[[93655,84741],[201,-42],[84,-70],[-2,-65],[-170,-69],[-220,-41],[-496,-35],[-230,98],[234,80],[343,10],[92,112],[164,22]],[[103846,84664],[-57,-14],[-455,29],[29,67],[530,-13],[-47,-69]],[[90975,84699],[-270,18],[341,48],[-71,-66]],[[105620,84741],[224,-79],[160,-107],[313,-54],[70,-60],[-89,-31],[-210,-15],[-65,-75],[71,-104],[-8,-76],[-824,-59],[-220,-27],[-293,-60],[-455,100],[-152,81],[-220,0],[-23,37],[240,33],[-69,40],[314,28],[57,104],[-78,45],[13,83],[148,20],[-20,46],[703,92],[83,78],[257,11],[73,-51]],[[90622,84852],[348,-34],[47,-34],[-293,-14],[-235,-48],[-75,32],[-254,-9],[100,70],[272,-44],[-79,81],[169,0]],[[91011,84945],[231,-38],[-36,-59],[-194,0],[-138,37],[-262,7],[100,54],[299,-1]],[[92913,85050],[349,-7],[-80,-65],[-297,16],[28,56]],[[91473,85071],[-426,-20],[101,77],[405,17],[54,-66],[-134,-8]],[[80553,33885],[31,-156]],[[80584,33729],[30,-30],[25,-15],[7,-1],[8,-8],[2,-16],[-1,-16],[-1,-8],[-2,-2],[2,-9],[13,-27],[8,-37],[14,-1],[0,-227],[-5,-35],[15,-4],[5,-9],[5,-9],[4,-18],[-14,-69],[-5,-26],[2,-42],[-2,-13],[-3,-13],[-5,-5]],[[80686,33089],[-12,-10]],[[80674,33079],[-6,-3],[-2,-2],[-4,-2],[-23,17],[-4,2],[-5,-1]],[[80630,33090],[-14,-28],[-25,6]],[[80591,33068],[-7,-8]],[[80032,33162],[9,24],[6,29]],[[80155,33613],[1,0],[2,3],[9,22]],[[80180,33660],[31,26]],[[80211,33686],[30,3],[69,34],[23,-87],[23,3],[72,74],[5,34],[37,44],[37,98],[46,-4]],[[84927,44900],[42,-9],[36,33],[31,-53],[-12,-74],[-26,66],[-43,-18],[-28,55]],[[84944,45016],[-3,-73],[-39,42],[42,31]],[[87426,52187],[24,-25],[16,-125],[31,-50],[-4,-56],[54,-103],[51,-76],[-29,-13],[-7,-44],[34,-82],[36,4],[45,-42],[58,-3],[-30,-73],[56,-63],[13,-84],[26,-36],[42,35],[70,-141],[65,-60],[28,-2],[48,-81],[-32,-13],[17,-131],[62,-57],[9,-116],[-21,-70],[-70,23],[22,-66],[25,-26],[7,-76],[44,-156],[43,-84],[44,-21],[24,-95],[14,-148],[39,-45],[25,-61],[4,-62],[27,-23]],[[88445,49726],[68,40],[24,-58],[30,58],[17,-19],[-24,-66],[-33,-50],[-10,-64],[51,12],[59,-41]],[[88784,46286],[-367,-79],[-184,-41],[-307,-65],[-233,-51],[-35,-21],[-335,-266],[-219,-423],[-50,-206],[-12,-24],[-90,-82],[-85,-1],[-86,183],[-14,13],[-147,-32],[-342,55],[-80,65],[-22,7],[-199,2],[-32,-17],[-60,9],[-73,-17],[-42,-25],[-134,-3],[-51,70],[-45,34],[-43,-1],[-33,-33],[-53,-83],[32,-46],[-35,-25],[-15,-77],[-3,-99],[14,-56],[23,-39],[-17,-68],[-29,6],[-19,-85],[-46,-31],[-17,-52],[-32,-18]],[[85267,44664],[0,62],[-25,60],[5,63],[-39,90],[-35,38],[0,79],[-40,37],[-14,61],[-24,6],[-14,173],[-57,75],[-24,47],[-85,105],[-57,55],[-17,61],[-32,54],[-55,161],[-4,66],[-31,65],[-35,21],[-21,60],[15,83],[-29,23],[-14,53],[15,69],[-41,36],[-23,110],[-21,24],[-4,101],[-61,55],[2,73],[-25,47],[-37,2],[-40,111],[-49,57],[-49,37],[-76,100],[-56,-13],[-61,54],[-45,67],[-59,152],[6,25],[-80,112],[-23,84],[-24,28],[-2,51],[-35,76],[36,54],[-19,71],[-17,116],[-38,96],[-18,91],[28,-3],[15,79],[-2,65],[41,96],[-25,28],[0,69],[-47,140],[2,60],[-27,58],[-30,11],[-3,67],[-36,89],[-43,206],[-40,47],[-17,86],[-33,53],[-68,66],[-41,58],[-62,49],[-19,0],[-74,87],[-34,-27],[-24,13],[-36,62],[11,46],[-119,253],[42,12],[9,58],[-19,142],[-48,78],[-65,202],[-45,70],[-35,-3],[-24,62],[16,55],[-3,49],[-62,37],[-58,155],[-59,180],[-50,80],[-47,119],[-56,90],[-7,61],[-43,83],[-53,80],[-26,110],[-65,150],[-55,79],[14,32],[-63,40],[-57,-23],[-47,8],[-59,40],[69,227],[-10,85],[21,94],[-3,52],[10,89],[37,190]],[[83240,53096],[55,186]],[[83136,53861],[-50,75],[-50,74]],[[83036,54010],[94,40]],[[83587,54236],[215,86],[14,8]],[[83816,54330],[57,68]],[[83008,48141],[-5,-112],[9,-85],[33,-131],[50,-116],[13,-66],[-23,-70],[23,-72],[8,-120],[24,-113],[-19,-63],[-3,-70],[21,-143],[-13,-85],[25,-99],[-8,-102],[18,-111],[19,-195],[10,-19],[28,-165],[44,-94],[48,19],[25,-19],[27,-58],[44,-20],[43,-76],[27,-21],[-13,-49],[29,-61],[36,-3],[50,-32],[28,-38],[37,-8],[22,-70]],[[81931,40389],[-66,1],[-9,53],[11,104],[24,79],[0,130],[-26,89],[-166,217],[-37,67],[-85,49],[13,69],[-39,459],[19,63],[6,153],[21,119],[3,51],[-183,4],[5,-132],[-254,-2],[102,-179],[5,-85],[-5,-99],[7,-106],[27,-83],[-8,-34],[-181,-244],[-30,-114],[-76,-159],[-165,-261],[-27,-18],[-158,-17],[-102,145],[-180,185],[-119,-95],[-33,-35],[-1,-90],[-50,-94],[-88,-32],[-93,-65],[-37,-47],[-32,-63],[5,-63],[-305,4],[-19,33],[-38,130],[-49,-7],[-49,12],[-115,6],[-99,-3],[-148,-82],[-53,28],[-144,271],[-30,18],[-32,79],[-45,46],[-2,96],[-19,45],[-83,-21],[-57,-26],[-152,-31],[-25,-77],[4,-40],[-20,-85],[-23,-46],[-47,-58],[1,-164],[-43,-99],[-8,-116],[-36,-104],[-3,-80],[-69,-26],[-75,-79],[-5,-17]],[[78141,39916],[-95,14]],[[77883,39991],[22,45]],[[77935,40280],[-4,38],[9,49]],[[77640,41295],[15,87]],[[77655,41382],[3,5],[6,11]],[[77664,41398],[1,6],[0,13],[1,12],[9,33],[1,12]],[[77676,41474],[-1,26]],[[77675,41500],[-15,90],[-50,1],[-15,42],[-43,26],[-27,47],[-7,30],[-2,30],[22,190],[-3,51],[-41,-17],[0,82],[-28,137],[-12,32],[-1,8],[9,21],[19,70],[-6,8],[-38,23],[-48,51],[-23,-45],[-32,-21],[-49,2],[-20,22],[-16,45],[-10,21],[-1,7],[1,4],[5,19],[10,46],[31,95],[32,50],[47,32],[49,89],[3,25],[-4,14],[-14,27],[-7,26],[-5,59],[-25,36]],[[77361,42975],[-7,57],[-6,12],[-9,13]],[[77339,43057],[0,6],[10,24],[35,70],[20,26],[109,91],[1,61],[-35,18],[-6,136],[-15,24],[-9,22],[8,22],[31,30],[78,33],[4,5],[1,8],[0,5]],[[77571,43638],[-8,31]],[[77563,43669],[-3,34],[0,16],[3,9],[22,26],[9,51],[63,82],[20,54],[3,14],[4,72],[0,21],[-4,19],[-22,47],[-3,18],[3,19],[7,14],[29,29],[25,47],[10,11],[9,2],[18,3],[60,-20],[104,43],[90,-11],[45,-25],[15,19],[0,610],[-1,431],[0,287],[0,143],[0,144],[0,143],[0,144],[0,144]],[[78069,46309],[0,364],[0,154],[0,78]],[[78451,46981],[0,59],[0,59]],[[78451,47448],[0,307]],[[78451,47755],[0,385]],[[82178,38658],[7,-11]],[[81894,37153],[-30,-50],[-32,-51],[-44,-68],[-36,-60],[-28,-46],[-2,-2],[-14,-14],[-17,-2],[-62,4],[-35,3],[-11,4],[-8,7],[-49,64],[-98,-68],[-131,-16],[-17,-7],[-70,-69],[-5,-8],[-1,-8],[2,-22],[0,-9],[-1,-10],[-1,-3],[-2,-6],[-5,0],[-24,8],[-25,38],[-2,0],[-31,3],[-5,4],[-3,11],[-2,40],[-52,83],[-1,-2],[-31,-56],[-11,-10],[-39,-9],[-23,-18],[-80,70],[-16,7],[-34,4],[-10,-5],[-13,-17],[-11,-13],[-50,-35],[-30,-80],[-10,-26],[-1,-10]],[[79393,37680],[-22,45]],[[79324,37976],[-1,6],[1,11]],[[78984,38448],[-15,29],[-17,16]],[[78977,38612],[7,18],[2,6]],[[78566,39280],[-6,73]],[[78129,39762],[21,57],[19,23]],[[78159,39917],[-18,-1]],[[62489,42167],[-27,61],[14,175],[-13,77],[14,33],[2,108]],[[62552,42943],[-57,116],[-14,109],[-21,98],[-32,49],[-21,103],[-46,61],[-46,124],[-57,51],[-33,1],[-14,-47],[-33,59],[65,26],[88,80],[99,188],[54,147],[76,188],[2,6],[-1,6],[-2,9]],[[63795,44387],[12,-61],[0,-12],[-1,-11],[-1,-5]],[[63821,44272],[6,-25]],[[64151,43721],[46,-43]],[[108679,35405],[-2,-47],[-43,-30],[-75,25],[14,63],[46,24],[60,-35]],[[132755,27381],[20,-52],[-30,-24],[-29,49],[39,27]],[[130147,27439],[13,1],[76,-76],[41,-25],[65,-72],[-31,-45],[-40,42],[-7,39],[-49,55],[-24,-16],[-60,39],[-19,42],[35,16]],[[132446,27959],[27,-44],[-30,-26],[-45,-5],[-28,-57],[-40,34],[46,96],[70,2]],[[130637,28234],[64,-26],[89,-95],[38,-25],[50,3],[18,-23],[39,13],[41,-107],[22,-31],[-3,-83],[-64,-4],[-120,53],[-16,32],[-85,73],[7,40],[-20,50],[8,34],[-88,34],[20,62]],[[130672,28726],[45,-118],[11,-90],[-67,62],[-1,95],[12,51]],[[130103,28714],[70,0],[94,12],[52,-76],[31,-9],[27,-37],[7,-54],[44,-19],[14,-86],[-68,-43],[-53,30],[-29,0],[-43,45],[-75,-4],[-111,18],[-43,54],[-47,120],[7,134],[35,30],[27,-21],[61,-94]],[[130186,28985],[39,-10],[17,-31],[-17,-37],[-59,37],[20,41]],[[129795,28988],[23,-21],[-36,-58],[-23,30],[36,49]],[[129366,29262],[43,9],[-7,-98],[-36,-46],[-51,51],[3,53],[27,46],[21,-15]],[[129123,29247],[-39,-30],[-29,32],[56,96],[25,-54],[-13,-44]],[[129996,29302],[-46,14],[7,43],[34,-7],[5,-50]],[[130433,29378],[30,-77],[44,-75],[-20,-54],[2,-75],[78,-85],[19,-116],[49,-186],[20,-43],[5,-62],[-32,17],[-27,82],[-104,142],[-38,42],[-40,126],[-6,57],[-21,64],[-15,91],[25,31],[-49,105],[80,16]],[[129222,29482],[42,-24],[35,-66],[25,-102],[-6,-51],[-81,46],[-41,144],[-33,12],[-53,-11],[-18,-38],[-26,12],[-3,57],[37,24],[25,96],[46,43],[29,-28],[22,-114]],[[128827,29481],[-26,76],[27,18],[-1,-94]],[[129048,29533],[-49,-14],[-41,94],[21,63],[35,16],[37,-63],[-3,-96]],[[128830,29866],[27,-59],[48,-35],[-3,-28],[-54,-107],[-16,78],[-39,57],[-5,57],[42,37]],[[129589,29856],[22,15],[62,-64],[22,-43],[45,-42],[36,-63],[122,-48],[11,-30],[157,-183],[-18,-40],[23,-53],[-12,-41],[-76,115],[-106,59],[-192,178],[-61,101],[-42,42],[7,97]],[[128525,30205],[17,-45],[-48,-19],[-22,30],[27,65],[26,-31]],[[128818,30434],[34,-16],[42,-62],[101,-76],[29,-51],[13,-88],[48,-54],[9,-35],[47,-30],[39,4],[0,-38],[-32,-27],[-38,10],[-55,38],[-37,3],[-18,39],[-49,38],[-49,92],[-44,99],[-35,30],[-51,73],[10,80],[36,-29]],[[64069,39251],[31,-11],[5,-58],[-20,-56],[-19,42],[-132,55],[20,27],[105,18],[10,-17]],[[64619,40647],[29,-28],[30,-51]],[[64726,40454],[12,-30]],[[64771,40346],[34,-49]],[[64936,39644],[6,-29]],[[64861,39567],[-6,-12],[-9,-26]],[[64828,39347],[-9,-2],[-2,-1],[-18,-16],[-15,-20]],[[64498,38822],[-22,14],[-63,77],[-55,51],[-181,111],[-74,38],[30,89],[-39,94],[-69,16],[-30,50],[-32,22],[-33,51],[28,17],[-3,87],[-32,100],[-71,-33],[-5,59],[-37,86],[23,44],[26,-38],[51,80],[-37,12],[-24,-34],[-26,90],[0,96],[36,55],[-55,33],[2,30],[-7,10],[0,5]],[[35281,42832],[-22,-26],[29,-61],[-49,-67],[-108,1],[-49,21],[-20,-14],[-31,32],[-22,-15],[-100,28],[-106,80],[-71,62],[-52,13],[-54,0],[-59,25],[-48,-5],[-12,43],[-97,83]],[[34407,43111],[29,48]],[[34599,43401],[11,52]],[[34672,43471],[6,-3],[12,-13]],[[73648,61675],[-17,20],[14,27],[26,-17],[-23,-30]],[[87253,39488],[138,337],[230,562],[0,417],[0,694],[114,32],[62,25],[46,33],[22,41],[41,8],[63,-5],[33,29],[52,-2],[34,33],[41,16],[64,63],[29,50],[25,93],[85,42],[26,-29],[40,-7],[22,-29],[38,-4],[64,-28],[-17,-111],[-50,-92],[-15,-100],[2,-96],[34,-18],[-23,-101],[9,-197],[-14,-112],[33,-30],[1,64],[40,-43],[38,0],[-10,-69],[-36,5],[-12,31],[-58,-12],[-62,-49],[-17,-140],[6,-47],[-36,-247],[14,-105],[-28,-84],[-35,-38],[-11,-92],[-17,-45],[-42,-53],[-28,-58],[-13,-77],[-24,-57],[-13,-95],[-51,-103],[-17,-75],[-21,-42],[-50,-48],[-34,-55],[-14,-85],[6,-54],[-88,-263],[-85,-179],[-46,-132],[-18,-85],[-48,-159],[5,-67],[-19,-101],[-71,-198],[-59,-146],[-20,-66],[-38,-66],[-37,-102],[-46,-79],[-48,-106],[-56,-184],[-42,-96],[-141,-245],[-34,-77],[-183,-305],[-68,-130],[-80,-128],[-53,-72],[-95,-149],[-81,-142],[-77,-79],[-227,-212],[-88,-63],[-125,-142],[-48,-48],[-83,-104],[-42,-71],[-30,-29],[-43,-81],[-38,-55],[-58,-54],[-121,-186],[-69,-127],[-75,-118],[-122,-218],[-47,-62],[-90,-162],[-63,-120],[-22,-57],[-42,-53],[-91,-224],[-3,-23],[-70,-187],[-45,-81]],[[76125,62936],[94,32]],[[76618,63066],[57,-92]],[[76819,62814],[28,12],[-13,-91],[18,-47],[-15,-22]],[[77098,62418],[0,-13]],[[77090,62380],[-23,-9],[17,-36]],[[77126,62320],[2,-33]],[[77575,61923],[1,-40]],[[77576,61883],[-17,-8],[-16,-24]],[[77543,61851],[-3,-28]],[[77459,61593],[0,-4],[-1,-11]],[[77495,61480],[-2,-10]],[[77494,60963],[1,-5],[-1,-3],[-4,-5],[-11,-23]],[[77482,60919],[-8,-60]],[[77473,60707],[-73,15]],[[77203,60847],[6,43],[14,16],[-12,22]],[[77084,61014],[0,12],[0,4]],[[76981,61128],[-6,33],[-12,19]],[[76786,61196],[5,-39]],[[76229,61422],[0,17],[8,15]],[[71422,34593],[-38,-28],[-21,117],[28,78],[41,38],[24,-12],[22,-66],[-8,-41],[-48,-86]],[[71736,35543],[-21,-48],[-19,48],[16,38],[24,-38]],[[48121,37802],[-28,-69],[-34,-64]],[[48204,36796],[0,-4],[13,4]],[[48151,36510],[6,-38]],[[48157,36472],[1,-14],[-1,-13]],[[48151,36436],[1,0],[4,-4]],[[48158,36308],[-4,-3],[-3,-6]],[[46991,36343],[-6,37]],[[46986,36487],[-2,1],[-1,3]],[[46970,36483],[-5,35]],[[46963,36570],[3,8],[1,4]],[[46967,36582],[1,21],[-2,8]],[[46680,37010],[-14,101]],[[46722,37297],[32,124]],[[46953,37695],[6,21],[5,26]],[[46977,37923],[11,27],[24,30],[14,161],[23,82],[42,38],[35,-13],[79,-7],[33,-23],[103,-31],[118,-51],[19,54],[40,49],[80,6],[114,-14],[44,-38],[29,46],[51,11],[92,-5],[115,-27],[167,-62],[19,-60],[-17,-46],[-17,-111],[-17,-30],[-3,-17],[-17,-41]],[[77517,64879],[-8,-49],[-20,-8],[-7,-5],[-48,-169],[-64,-71],[-6,-10],[-1,-13],[5,-25],[-2,-10],[-5,-10],[0,-44]],[[75036,63212],[1,-28],[-8,-15]],[[74890,62974],[1,-13],[1,-18],[-1,-11]],[[74766,62773],[1,-17]],[[74742,62738],[-3,-3],[-5,-3]],[[74769,62658],[-3,-3],[-6,-11]],[[74091,62663],[1,29],[99,30],[4,39],[-30,60]],[[74061,62958],[-18,24],[17,37]],[[74113,63079],[-2,5],[-1,7]],[[74013,63129],[-7,29]],[[74006,63158],[10,7],[12,27]],[[74096,63252],[39,49]],[[75425,69991],[-2,-72],[-70,-192],[-40,-65],[-53,-150],[-28,-137],[-30,-67],[-30,-6],[-5,195],[85,203],[36,12],[66,139],[31,116],[40,24]],[[76080,70298],[81,44],[34,-53],[-105,-72],[-20,-125],[5,-88],[-41,-42],[18,-33],[-107,-56],[-33,-43],[5,-58],[-59,-46],[10,135],[-51,78],[32,74],[-27,81],[135,181],[123,23]],[[76247,70391],[-35,-86],[-36,33],[20,39],[51,14]],[[73383,70433],[-2,-38],[-78,-27],[-1,60],[81,5]],[[73404,70549],[5,-74],[-37,-18],[-115,21],[69,62],[78,9]],[[78138,75232],[-78,-21],[-223,21],[-111,-59],[-95,50],[-183,-29],[-39,-59],[48,-23],[-81,-47],[-88,-86],[-173,-12],[81,-67],[-62,-34],[31,-51],[-92,-117],[-48,-2],[-28,-74],[119,-216],[44,-22],[-140,-89],[-105,-97],[-26,-103],[-80,-114],[-71,15],[-72,-51],[-3,-53],[-89,7],[-123,-88],[-114,-9],[0,-48],[-69,7],[-7,-70],[-39,-8],[-47,-83],[-45,18],[-61,-34],[-55,14],[-55,-96],[17,-75],[-43,-38],[-50,26],[-47,-38],[-85,0],[45,-142],[-69,-57],[-65,-2],[-44,-36],[-54,62],[-36,-26],[1,-58],[87,-123],[-88,-173],[21,-124],[-115,-54],[-5,-40],[36,-52],[-28,-54],[6,-57],[35,-45],[-20,-176],[33,-31],[14,-73],[-17,-52],[67,-37],[62,7],[25,-83],[106,53],[19,-50],[119,-106],[58,0],[-4,-96],[89,-27],[67,-49],[30,-76],[64,-31],[-80,-57],[85,-20],[-116,-43],[-37,-60],[-156,-113],[-50,13],[-40,-28],[50,-44],[56,30],[63,-17],[-79,-53],[44,-54],[-134,-71],[-43,-93],[-69,9],[4,70],[-49,-12],[-15,-93],[-191,-128],[-64,-22],[-265,28],[67,-45],[87,18],[57,-34],[31,-54],[-56,-29],[22,-69],[-19,-36],[35,-37],[-54,-125],[-84,-69],[83,-80],[-25,-50],[30,-131],[-59,-69],[-27,-112],[34,-43],[-43,-58],[11,-41],[-43,-117],[9,-52],[-48,-16],[-17,-63],[-45,-79],[-21,-102],[-71,-104],[-108,73],[-30,-18],[-169,-13],[-37,11],[-103,-15],[31,-72],[-76,15],[-84,-63],[-53,-82],[-5,-59],[64,-125],[-70,-82],[-114,26],[-98,-9],[-94,-45],[-146,33],[-27,112],[51,59],[-54,45],[2,52],[-40,33],[-26,69],[-55,74],[-40,97],[77,-33],[48,28],[-80,95],[35,30],[45,-16],[39,64],[-24,64],[-53,-2],[-44,63],[-7,45],[-87,57],[-15,66],[-49,79],[-56,192],[-59,40],[-22,99],[-54,24],[18,39],[-23,59],[42,97],[28,99],[-26,79],[-92,-47],[-70,64],[-61,10],[13,70],[-3,103],[-28,54],[20,39],[-16,67],[-32,28],[44,85],[52,1],[31,-62]],[[81181,17954],[-16,17]],[[81165,17971],[-31,-16]],[[81134,17955],[-6,-54],[-13,-109],[2,-95],[6,-22],[1,-7],[1,-8],[-34,0],[-37,1],[-55,1],[-42,1],[-142,65],[-30,53],[-39,51]],[[80746,17832],[-6,78]],[[80740,17910],[-31,86],[-17,-20],[-6,-2],[-8,-1],[-6,57],[-1,151],[8,47],[37,64],[27,51],[26,68],[21,72],[6,33],[4,13],[34,44],[39,50],[11,7],[12,6],[22,-5],[41,-38],[41,-39],[74,-70]],[[81074,18484],[11,-4],[33,19]],[[44772,45692],[-5,-9],[-25,10],[4,14],[26,-15]],[[90114,31686],[28,-35],[-4,-43],[-26,45],[2,33]],[[82696,54645],[-1,2],[-2,8]],[[82600,55195],[19,15]],[[82777,55494],[-5,12]],[[82856,55616],[7,12],[17,20]],[[82901,55685],[-10,54]],[[82816,55903],[-23,79]],[[82684,55951],[-26,12],[-41,169],[14,61],[-6,54],[30,55],[-19,56],[-3,85],[-49,72],[-1,82],[24,41],[-10,58],[37,51]],[[82634,56747],[88,-61],[23,82],[60,43],[2,99],[53,28],[63,1],[-28,60],[-21,104],[26,156],[22,50],[116,-45],[19,-70],[88,11],[78,-16],[79,61],[63,18],[142,89],[38,-2],[92,-42],[52,-70],[50,-20],[90,9],[80,-25],[201,49],[163,88],[78,68],[120,66],[72,14],[116,-36],[107,7],[203,62],[64,80],[68,-49],[2,-72]],[[78069,46596],[0,-287]],[[77563,43669],[2,-10],[6,-21]],[[77339,43057],[22,-82]],[[77675,41500],[0,-8],[1,-18]],[[77664,41398],[-9,-16]],[[69511,38385],[-74,-19],[-93,-50]],[[107036,38561],[-26,54],[31,54],[9,-70],[-14,-38]],[[106508,39607],[57,-76],[-16,-69],[16,-43],[-58,-58],[-9,113],[10,133]],[[107195,40464],[-10,-69],[-39,-26],[-12,88],[61,7]],[[108031,42057],[38,-34],[5,-59],[-33,-6],[-10,99]],[[107201,47104],[6,-43]],[[107365,47000],[7,4],[1,-31]],[[107619,46570],[14,-142],[0,-50]],[[107637,46088],[-33,-73]],[[107557,45935],[20,-39]],[[107603,45867],[-6,-12],[-2,-3]],[[107692,45476],[8,19]],[[107721,45517],[39,26]],[[107768,45590],[22,16],[35,11]],[[107825,45617],[24,99]],[[108770,45686],[5,-10]],[[108792,45619],[3,-19],[9,-18]],[[109232,44446],[-16,-39]],[[109293,43985],[-2,-2],[-11,-11],[-10,-12]],[[109281,43776],[7,-19],[-11,-15],[-1,-29],[-12,-29]],[[109272,43565],[-36,-102]],[[109180,43424],[-33,-12]],[[108278,41744],[-2,59],[-50,99],[-10,86],[-45,69],[-24,-38],[-37,36],[-68,25],[-26,82],[-60,103],[-42,30],[-50,83],[-55,18],[-17,-31],[-77,-16],[-136,34],[-62,-38],[-34,55],[32,73],[-20,50],[25,74],[-21,44],[26,63],[-13,58],[26,41],[-12,67],[-115,32],[-119,-24],[-18,15],[-97,-63],[-28,-90],[42,-65],[11,-59],[-44,-166],[-10,-101],[7,-105],[12,-45],[-11,-64],[14,-53],[-25,-74],[-38,-65],[-16,-84],[2,-56],[-25,-20],[-42,-116],[-28,-116],[6,-86],[-36,-50],[7,-131],[-27,-26],[-2,-36],[-73,-165],[1,-56],[-36,-54],[19,-90],[-16,-51],[3,-176],[-9,-35],[14,-89],[32,-110],[23,-46],[-36,-44],[10,-54],[46,-24],[37,5],[18,43],[65,28],[62,-14],[25,-119],[1,-75],[15,-212],[31,-57],[24,-78],[20,-20],[25,38],[20,-81],[12,-122],[52,-397],[-44,86],[-6,87],[-37,15],[-27,-51],[17,-114],[45,-106],[26,-7],[9,-75],[35,-43],[47,32],[58,-130],[35,-13],[55,-65],[75,4],[19,25],[43,-17],[12,18],[70,-44],[78,-206],[52,-61],[63,-89]],[[107210,38527],[-47,77],[-17,60],[-61,97],[-42,35],[2,148],[-41,25],[-24,95],[-21,-19],[-39,35],[-8,81],[-20,95],[-59,76],[-41,-13],[-6,57],[15,20],[-52,126],[-35,-28],[-31,39],[-1,90],[-16,51],[-31,-4],[-9,52],[-58,-32],[6,-66],[-14,-42],[-56,56],[-31,182],[16,72],[-6,52],[39,149],[22,59],[-22,82],[22,70],[23,126],[29,20],[-18,43],[28,52],[3,56],[-16,24],[33,68],[47,174],[10,76]],[[96048,59418],[-44,-42]],[[95492,59330],[-17,-44]],[[95428,58979],[9,15]],[[95689,59004],[43,-12],[29,37],[2,-22],[-4,-22],[0,-8]],[[96857,58881],[37,-9]],[[97554,57559],[-40,62]],[[97353,57661],[-14,14]],[[97135,57557],[-31,-7]],[[97066,57560],[5,39]],[[97071,57599],[23,5],[11,11],[7,10],[2,8]],[[97114,57633],[4,47]],[[96298,57234],[-13,17],[-5,11],[-6,12]],[[96274,57274],[-34,109]],[[96230,57495],[7,40],[-1,14]],[[96195,57968],[-34,35]],[[96147,58236],[-23,31],[-25,21]],[[95972,58308],[-29,-18]],[[95935,58280],[8,-7],[-3,-7]],[[95763,57990],[-16,11]],[[95613,57782],[-3,-3],[-4,-3]],[[95461,57722],[-5,-14]],[[95268,57594],[-2,-5],[-4,-2]],[[95231,57577],[-6,-6],[-19,15]],[[94852,57462],[-18,14]],[[94832,57533],[15,70],[-8,75],[12,64],[96,172],[16,63],[47,26],[43,138],[-10,43],[-57,57],[-33,60],[-16,64],[-6,96],[51,95],[-34,92],[-52,5],[-39,-18],[-60,10],[-5,72],[-22,29],[-92,30],[22,176],[27,42],[99,43],[131,-42],[87,-16],[70,12],[34,73],[3,100],[27,24],[74,21],[-34,58],[53,94],[-92,-23],[-33,40],[160,35],[69,-30],[33,22],[8,91],[-41,111],[44,40],[0,73],[46,46],[28,-16],[58,-85],[63,46],[71,28],[103,74],[33,95],[31,-4],[96,-129],[22,-76],[-153,-146],[6,-57],[50,-9],[31,-80],[48,-13],[96,24]],[[94095,57730],[-20,36]],[[94075,57766],[-3,2],[-7,2],[-7,4],[-2,-26]],[[93487,56891],[-5,2],[-6,4],[-16,3],[-28,-12]],[[93407,56862],[-8,-17]],[[93050,56712],[-15,-22]],[[93035,56690],[6,-16],[4,-19]],[[89525,57627],[-6,78],[-28,171],[-7,178],[19,107],[2,108],[-13,90],[13,95],[44,138],[-41,77],[-47,17],[-29,85],[-40,33],[4,52],[-70,-8],[-68,28],[-18,-55],[-32,68],[35,81],[71,15],[82,-44],[51,48],[-25,39],[-43,14],[-40,81],[52,117],[-49,32],[-56,-37],[-45,34],[-111,-32],[-56,66],[12,63],[-27,73],[15,131],[48,107],[-13,33],[50,188],[56,-149],[86,1],[59,-25],[21,17],[18,79],[26,-16],[-2,-51],[28,-59],[-1,-38],[55,0],[57,20],[61,43],[53,1],[-15,102],[33,14],[45,-66],[63,18],[46,78],[-61,140],[-76,72],[-35,18],[-85,84],[-18,37],[-8,122],[-34,94],[-13,122],[-30,27],[-53,13],[-117,-24],[-30,-16],[-66,6],[-63,-65],[-53,-136],[31,-46],[-2,-77],[-31,-110],[-97,81],[13,71],[-61,71]],[[90314,60087],[313,-21],[83,-21],[55,73],[-51,58],[-23,112],[-3,135],[63,53],[34,74],[68,58],[91,-10],[88,27],[32,109],[-10,39],[34,38],[88,-16],[30,38],[-62,39],[-5,29],[58,31],[81,-27],[45,83],[108,-143],[55,-17],[32,10],[34,-36],[13,-70],[90,-50],[81,15],[67,-3],[62,-65],[-21,-62],[4,-93],[40,-18],[58,-68],[-53,-9],[-20,-25],[41,-92],[-33,-56],[9,-78],[79,-48],[44,-46],[47,-14],[46,19],[78,6],[45,-31],[46,13],[70,-42],[73,87],[69,-29],[86,-78],[36,-67],[4,-81],[24,-106],[56,-133],[62,-42],[33,-160],[4,-100],[54,-74],[339,-301],[88,-130],[158,-143],[83,6],[33,-54],[82,-86],[130,-82],[88,-101],[152,-131],[51,-8],[53,30],[136,-77],[28,-42],[96,-33],[35,-49],[-49,-102],[-10,-160],[21,-45],[-10,-53]],[[116360,28770],[50,28],[11,26],[101,47]],[[116700,29005],[70,114],[17,90],[90,37],[33,-1],[63,32],[40,0],[62,25],[66,-25],[64,16],[67,48],[52,-41],[65,45],[47,13],[49,51],[39,-30],[44,15],[38,-31],[7,-31],[-112,-151],[-63,-47],[-59,-6],[-42,-27],[-28,-65],[-30,-27],[-101,-21],[-84,-85],[-37,1],[-65,-42],[-28,5],[-88,-58],[-69,-90],[-52,-38]],[[116954,29405],[-30,27],[29,56],[25,3],[-24,-86]],[[1793,21488],[25,7],[37,-38],[-21,-27],[-46,26],[5,32]],[[2329,23044],[-19,-35],[-42,18],[32,41],[29,-24]],[[45579,41244],[-48,-95],[7,-92],[-10,-16],[17,-95],[1,-134],[-75,-40],[-135,2],[-36,-12],[-29,66],[39,51],[40,-4],[18,37],[-11,81],[6,101],[-22,38],[-46,20],[18,36],[77,13],[14,22],[72,-3],[9,11],[94,13]],[[45727,41557],[-24,-54],[-84,-70],[3,45],[49,54],[56,25]],[[73073,55498],[50,-59],[-64,-89],[-32,47],[-26,-11],[-2,105],[74,7]],[[73284,54970],[-8,-87]],[[72811,53756],[10,-101]],[[72064,56380],[-1,48]],[[72080,56494],[-4,89]],[[72088,57015],[-2,60]],[[72183,57378],[76,21],[39,30],[32,59],[85,72],[51,1],[123,62],[76,-12],[-35,-63],[17,-38],[90,70],[36,-18],[29,-161],[48,-60],[-28,-39],[17,-41],[45,-13],[40,27],[11,56],[63,20],[106,117],[40,-152],[-36,-31],[-85,-208],[-106,-71],[-17,-74],[0,-85],[16,-61],[35,-77],[32,-43],[57,-13],[0,-42],[64,-25],[18,-105],[-6,-95],[26,-80],[-36,-69],[1,-35],[-39,-49],[-1,-52],[-81,-134],[-29,-14],[-11,-55],[-63,-30],[-21,-45],[-96,-60],[-47,-96],[17,-116],[43,-91],[64,-83],[61,-33],[88,36],[7,-64],[-23,-35],[16,-39],[74,35],[-2,47],[28,17],[49,-58],[-7,-59],[32,-76],[-20,-32],[23,-42],[125,-19],[0,-27]],[[78827,59367],[-75,-37],[-40,18],[36,49],[61,22],[18,-52]],[[78968,60329],[16,64]],[[79613,60489],[-18,-93],[54,-130],[46,-57],[59,-44],[199,-112],[79,-19],[-16,-66],[-33,-79],[-62,-24],[-75,3],[-63,40],[-86,32],[-85,-27],[-28,-43],[-77,26],[-83,-15],[-38,-97],[-52,-79],[-42,-44],[-49,-13],[-140,-96],[-26,-60],[-66,-73],[-27,-54],[-55,-54],[-6,49],[20,69],[-18,45],[145,111],[28,0],[61,57],[-16,37],[-186,-38],[-86,7],[-13,78]],[[82634,56747],[26,62],[-10,43],[-62,143],[96,128],[57,48],[11,33],[-11,89],[-64,77],[-83,-93],[-75,-21],[9,-84],[-45,4],[-63,-42],[-118,94],[-43,19],[-60,55],[-83,-30],[-107,-112],[-37,-70],[-38,-36],[0,-53],[-57,-24],[-23,16],[-27,-53],[-99,-53],[-157,-8],[-18,-30],[-55,12],[-52,-46],[-53,12],[-116,80],[-66,112],[-35,79],[-29,35],[-98,41],[-13,20],[-126,76],[-25,28],[-153,30],[-64,-5],[-34,26],[-44,-68],[0,-157],[-36,-78],[17,-37],[-30,-63],[-72,42],[-42,-33],[-89,-23],[-44,-45],[-49,-1],[-25,39],[-108,26],[-55,57],[-20,49],[-4,82],[-36,23],[29,47],[-53,38],[-37,-21],[-98,25],[-68,59],[-11,-24],[-62,14],[6,-52],[-54,-77],[-27,72],[-116,25],[-24,-64],[-46,18],[-33,-20],[-16,51],[70,18],[14,26],[147,-9],[4,90],[55,0],[47,69],[-82,-18],[-40,8],[-79,-25],[-114,-2],[-17,23],[-67,-41],[-13,63],[28,35],[65,-16],[31,23],[-1,87],[-84,48],[-54,4],[12,75],[-5,74],[-31,56],[46,34],[-4,63],[14,52],[-13,37],[-47,3],[-65,45],[-32,-16],[-40,108],[-47,-8],[-12,-58],[-62,63],[-69,47],[82,50],[13,40],[-41,34],[-21,82],[25,37],[35,-18],[47,-82],[-7,-63],[59,-32],[60,9],[6,34],[-34,101],[-37,12],[-13,65],[38,21],[74,71],[-19,42],[-59,7],[0,52],[29,23],[-55,78],[-26,67],[97,111],[-12,61],[-166,-38],[-38,-26],[-80,-13],[-31,22],[29,81],[2,196],[17,41],[44,6],[32,55],[6,52],[35,12],[90,119],[105,-7],[33,37],[79,4],[13,-54],[44,-31],[129,-1],[30,31],[-70,82],[29,21],[80,-21],[54,-66],[91,5],[110,-24],[51,23],[72,-24],[41,7],[18,56],[-75,4],[-48,50],[75,56],[113,13],[83,39],[23,-23],[74,21],[-33,36],[-118,-12],[-36,66],[-90,69],[40,143],[38,17],[148,-38],[102,-19],[96,-3],[53,42],[162,-56],[51,-26],[100,3],[60,13],[58,61],[1,70],[98,50],[81,66],[101,59],[49,75],[34,5],[99,68],[121,26],[152,85],[211,-28],[50,5],[126,-22],[57,18],[82,-19],[74,40],[23,55],[59,-47],[-2,-69],[48,-92],[28,-29],[89,-49],[34,-2],[105,47],[58,-4],[29,-46],[6,-103],[39,-63],[82,-73],[45,36],[19,47],[84,-15],[56,-35],[21,-69],[37,-22],[49,0],[91,-64],[40,4],[18,41],[49,3],[1,-38],[43,-48],[33,5],[133,-45],[80,6],[38,30],[30,-13],[80,54],[88,22],[45,-17],[60,38],[61,-53],[53,-6],[50,-32],[54,11],[54,-37],[61,28],[63,51],[36,-5],[53,35],[49,62],[73,16],[40,38],[103,58],[49,83]],[[137479,29271],[-5,20],[4,0],[3,-13],[-2,-7]],[[115443,50135],[32,-44],[67,-23],[4,-102],[-31,-58],[-3,-130],[16,-58],[-30,-73],[-3,-77],[-42,-71],[-21,-72],[9,-31],[-42,-227],[-22,-195],[-21,-55],[-3,-67],[-38,-116],[-42,-71],[-19,-63],[-47,-58],[-28,-75],[-27,-146],[1,-145],[-14,-81],[-52,35],[-3,81],[-28,114],[-43,79],[-69,58],[-60,226],[-1,79],[-43,86],[27,129],[-2,99],[25,157],[39,85],[18,68],[58,129],[31,108],[30,49],[20,76],[56,64],[29,107],[52,103],[122,66],[22,52],[39,28],[37,-40]],[[84160,29751],[-27,-98],[-68,-50],[-10,34],[35,79],[70,35]],[[83954,30890],[39,-176],[25,14],[17,-152],[-23,-27],[-51,63],[-22,67],[-21,-30],[-33,89],[14,27],[-9,124],[63,68],[1,-67]],[[84089,31499],[37,-21],[18,-166],[-22,-110],[-59,-4],[10,68],[26,39],[1,49],[-18,36],[-7,63],[14,46]],[[83890,31653],[9,-6],[-2,-114],[-30,-29],[4,-114],[-26,-51],[-29,-172],[-37,-111],[-3,-42],[-23,-65],[-4,-67],[-16,-66],[29,-82],[-2,-114],[43,-78],[29,3],[67,-106],[31,-106],[65,-28],[33,-84],[-1,-76],[-47,-46],[-46,-159],[-11,-91],[8,-58],[55,-88],[-8,-43],[13,-67],[-41,-153],[-25,-32],[9,-121],[22,-65],[-1,-51],[30,-39],[-11,-70],[31,-43],[1,-86],[34,-17],[23,-51],[2,-159],[41,-188],[15,-39],[-5,-72],[51,-64],[28,-67],[53,-18],[16,-54],[24,35],[41,-91],[43,2],[-5,-80]],[[81489,28729],[-61,42],[-18,34],[-75,17],[-21,56],[-30,21],[-65,4],[-30,39],[-40,11],[-11,-10],[-8,-6],[-16,7],[-9,23]],[[81105,28967],[0,30],[8,26]],[[81113,29023],[-57,26],[-44,-14],[-46,65],[-2,26],[0,23],[-3,15],[-7,11],[-16,7],[-20,26],[-16,0],[-13,28],[-35,-22],[-20,26],[-34,-22],[-61,41],[-51,101],[-28,119]],[[80268,31786],[7,5],[1,14],[1,10]],[[80277,31815],[18,33]],[[80591,33068],[39,22]],[[80674,33079],[5,5],[7,5]],[[80584,33729],[-17,91],[1,62],[31,5]],[[80599,33887],[8,-1],[9,-4],[5,6],[13,23],[6,4],[15,8],[13,13],[15,-6],[5,-5],[235,0],[351,0],[350,0]],[[81624,33925],[141,0],[71,0],[30,0]],[[80228,34181],[11,5]],[[80308,34752],[7,25],[34,75]],[[82050,36640],[1,-9],[7,-12],[3,-7]],[[82258,36077],[-8,-26],[-7,-6],[-7,-9]],[[82166,35292],[-22,-29],[-18,-6]],[[82122,35231],[-2,-5],[-2,-6]],[[81954,34898],[-21,-93]],[[81919,34733],[-31,-66],[-3,-7],[-22,-48]],[[81866,33925],[-242,0]],[[80599,33887],[-46,-2]],[[83517,63660],[-33,-17],[-102,16],[-42,-16],[-66,10],[-38,-34],[-56,-96],[-50,33],[-122,-81],[-21,-44],[-51,29],[-67,-12],[-58,-31],[-33,-45],[-36,20],[-111,-10],[-50,-31],[-54,-64],[-45,-27],[-85,-100],[-29,73],[-53,-87],[-90,-39],[-10,-25],[24,-149],[64,-159],[111,-184],[56,-45],[82,20],[37,50],[88,-27],[44,58],[62,7],[121,-40],[-43,-38],[-32,-73],[8,-100],[-62,-13],[-20,-24],[-68,26],[-20,-31],[-57,-4],[-29,45],[-85,34],[-50,-31],[-10,-42],[-91,-62],[-28,-67],[-29,25],[-94,-9],[-111,-55],[-49,-106],[-73,-67],[-74,-42],[-91,10],[-54,61],[-24,-4],[-54,45],[39,26],[26,64],[0,78],[28,60],[-22,99],[-56,56],[-60,-18],[-69,73],[-69,51],[-57,5],[-33,-26],[-58,13],[5,72],[158,126],[125,57],[84,62],[28,-4],[58,38],[-23,43],[-13,103],[-73,-58],[-50,52],[-145,-12],[-47,11],[-110,-37],[-92,33],[-9,42],[-48,12],[-114,82],[58,2],[15,60],[40,40],[64,-26],[22,56],[-164,62],[-19,-21],[-70,16],[-37,-23],[-37,18],[-55,-27],[-58,16],[-74,-16],[-92,-53],[8,-75],[-107,-195],[-89,-114],[-48,-47],[-64,12],[-6,-41],[-58,-21],[24,-41],[-45,-31],[-23,51],[-31,-8],[-6,-82],[61,-59],[3,-87],[-73,44]],[[79688,62639],[-6,7]],[[79078,64375],[-67,-19]],[[77717,64220],[-77,12]],[[77638,64830],[-3,25]],[[77566,65130],[-3,9],[-7,22]],[[78117,65785],[-8,41],[9,16]],[[78118,65842],[-10,24]],[[78086,65902],[-5,10],[5,11],[0,3]],[[78086,65926],[-19,6]],[[78126,65970],[4,11],[-4,8]],[[77947,66296],[7,3],[-1,8],[0,6]],[[77926,66386],[6,3]],[[77932,66389],[2,10],[-1,6]],[[77922,66434],[-2,5],[0,5]],[[79894,66335],[-1,24],[1,10]],[[80050,66443],[24,-84],[29,-59]],[[80600,66364],[-5,11],[1,10],[-9,8],[5,5],[3,7]],[[80576,66412],[-4,6],[0,4]],[[80572,66422],[5,4],[3,0]],[[80585,66456],[5,17]],[[80588,66481],[4,13],[-2,8]],[[80673,66627],[9,11],[0,4],[-3,3],[-1,3],[1,3]],[[80718,66688],[14,-3],[0,15]],[[80732,66700],[7,34]],[[47452,15383],[-2,-28],[0,-15]],[[48432,13721],[17,-34],[-23,-56],[-26,-142],[-65,-84],[-28,-84],[7,-34],[-79,-60],[-59,-76],[-8,-35],[-61,-25],[-242,-162],[-56,53],[-68,-9],[-44,59],[-86,18],[-73,-1],[-37,-18],[-69,-60],[-31,-12],[-63,9],[-42,48],[-11,43],[-47,0],[-85,38],[-41,38],[-83,107],[-32,13],[-128,-8],[-33,15],[-76,-27],[-97,175],[-45,20],[-48,106],[-27,27],[-18,98],[1,159],[18,36],[-10,60],[25,55],[-8,80],[22,29],[53,-3],[37,50],[10,74],[-26,57],[-8,92],[-7,59],[-7,19],[-10,62]],[[46636,14725],[0,55]],[[46697,14985],[3,27],[-2,28]],[[46696,15136],[9,52],[12,15],[11,30]],[[46735,15636],[15,65]],[[47035,15926],[76,7],[29,5]],[[9335,46992],[31,-7],[75,-49],[63,-61],[31,-53],[0,-83],[42,-14],[10,-58],[40,-41],[12,-40],[-65,-87],[-83,-52],[-34,2],[-81,-75],[-45,-113],[-24,-13],[-75,60],[-16,67],[14,120],[-37,170],[-31,75],[9,32],[42,54],[40,93],[-23,53],[-6,69],[12,29],[49,-12],[50,-66]],[[8836,47362],[-26,15],[-4,104],[38,-9],[28,-44],[-5,-49],[-31,-17]],[[8959,47542],[42,-76],[70,30],[21,-7],[48,-65],[45,-22],[0,-70],[-49,-40],[-67,-26],[-40,4],[-21,120],[-60,16],[-29,67],[12,54],[28,15]],[[8707,47662],[135,-35],[37,9],[18,-51],[-45,-27],[-77,29],[-77,-7],[-11,25],[20,57]],[[8461,47895],[22,-39],[-3,-46],[52,-53],[23,-43],[-57,-31],[-42,31],[-73,-7],[-51,118],[-2,62],[44,1],[41,71],[20,2],[26,-66]],[[7579,48010],[-14,55],[42,52],[15,-39],[-33,-29],[-10,-39]],[[7888,48285],[38,-52],[-17,-115],[-40,-56],[-65,20],[-58,48],[-8,49],[26,62],[63,44],[61,0]],[[31698,51638],[-54,-182],[-19,-6],[54,188],[19,0]],[[31755,51774],[45,140],[24,-16],[-69,-124]],[[31993,52066],[-113,-98],[-2,17],[74,76],[41,5]],[[38038,52204],[-18,-81],[-28,67],[46,14]],[[33756,52774],[-15,-4],[-69,52],[34,48],[81,-40],[-31,-56]],[[23501,54966],[91,-129],[-25,-16],[-29,30],[-37,115]],[[23525,55239],[63,-43],[23,-45],[-59,-8],[-27,96]],[[22948,55579],[16,-54],[-42,-29],[-25,17],[-16,55],[67,11]],[[23028,55601],[76,-31],[-32,-34],[-51,6],[7,59]],[[40541,59662],[-12,-49],[-39,3],[13,52],[38,-6]],[[41240,59971],[-64,-43],[17,-43],[82,37],[18,-33],[-114,-86],[-76,-38],[-46,5],[-85,-42],[-110,-17],[-53,-32],[-72,-15],[-56,-34],[-47,41],[-60,-49],[-18,43],[48,93],[56,13],[16,34],[89,50],[101,-23],[42,40],[128,-5],[67,15],[100,92],[37,-3]],[[41873,60180],[33,-68],[-105,-5],[46,63],[26,10]],[[42790,61933],[-84,-30],[-7,25],[30,76],[32,10],[34,-51],[-5,-30]],[[21973,64456],[-2,-114],[18,-117],[33,23],[44,-64],[-37,-22],[-34,32],[-32,67],[6,33],[-56,48],[34,110],[26,4]],[[21870,64653],[43,-27],[-44,-39],[-63,21],[64,45]],[[43180,62471],[45,-152],[32,-73],[-95,-105],[-40,8],[-29,-32],[-51,25],[-14,-57],[-89,13],[-36,-95],[-75,-23],[-5,59],[-60,4],[-114,-54],[15,-65],[-88,25],[-27,90],[-61,-37],[16,-44],[-20,-34],[-47,-156],[-56,-69],[-40,57],[-23,-19],[-18,-69],[-34,38],[-33,-27],[-52,-99],[-27,10],[-49,68],[-47,-35],[-49,-65],[13,-87],[-59,-21],[-10,-82],[-52,-34],[-54,-152],[-18,-18],[-41,-119],[-2,-95],[66,-70],[-82,-35],[9,-30],[-53,-51],[-24,-68],[98,-29],[58,-103],[-9,-85],[34,-1],[13,-86],[36,-36],[64,-26],[78,37],[48,51],[1,-112],[-188,-27],[-28,-43],[-59,-26],[0,125],[-45,-47],[-50,-19],[-8,-41],[-47,1],[-52,-51],[-8,110],[-57,61],[-33,-107],[6,-64],[-27,-63],[-39,1],[-88,-32],[-26,18],[-150,-38],[-56,3],[-28,-20],[-37,17],[-67,-9],[-149,-62],[-151,-94],[-27,-7],[-71,-103],[-40,-21],[-65,-93],[-22,5],[-23,-18],[-28,-85],[34,-34],[63,-12],[23,-59],[-33,-194],[-18,1],[-9,-103],[-24,-64],[8,-28],[-72,-92],[-112,-215],[-36,-91],[-50,-69],[-36,-4],[32,130],[-54,39],[-50,-7],[-34,60],[-43,26],[-66,86],[-21,-10],[58,-91],[15,-55],[0,-105],[33,-79],[55,-82],[31,1],[8,-73],[-24,-55],[26,-23],[-36,-192],[-34,-9],[-18,-72],[-56,-92],[3,-54],[-26,-27],[-123,-233],[-26,-60],[-31,-137],[-18,112],[46,153],[-11,29],[50,72],[-3,42],[35,23],[-31,89],[-37,8],[27,90],[-35,84],[-48,-18],[-73,64],[-37,80],[66,118],[-74,40],[13,57],[35,-9],[22,54],[-35,35],[37,35],[7,68],[-53,21],[36,101],[54,48],[-12,48],[-54,-66],[-83,-25],[14,-32],[-23,-48],[19,-111],[-33,-17],[10,-46],[-35,-85],[11,-31],[4,-122],[44,-84],[-9,-43],[38,-113],[-43,-5],[-69,57],[-54,3],[-64,40],[-38,104],[-70,-60],[-24,80],[32,68],[-17,32],[-38,-127],[30,-74],[89,26],[-5,-39],[28,-61],[28,-21],[103,-16],[32,-77],[108,-75],[-1,-51],[-26,-56],[-15,-130],[43,-44],[-29,-40],[-33,13],[11,-83],[-34,-35],[65,-43],[1,-83],[-52,-22],[-9,33],[-60,56],[-2,49],[-101,43],[62,-74],[22,-66],[35,-9],[36,-74],[60,-15],[18,48],[55,-28],[53,-3],[23,-126],[-17,-63],[23,-19],[-1,-106],[21,-150],[-62,19],[-66,-55],[-82,-12],[-43,-43],[-63,26],[-16,-68],[66,-4],[32,21],[33,-21],[73,34],[56,-7],[-15,-73],[8,-60],[28,-24],[2,98],[52,58],[50,-93],[-12,-136],[-55,-20],[-97,-143],[-46,1],[-65,34],[-60,-6],[38,-51],[2,-50],[-65,-30],[39,-36],[-78,-84],[84,7],[64,-21],[16,-40],[-63,-83],[-26,10],[-35,-37],[-90,10],[-117,-54],[-19,-35],[-109,-78],[-50,-57],[-63,-104],[-30,-155],[-47,-40],[-85,20],[-117,-34],[-79,-56],[-67,-85],[-74,-138],[-27,-139],[-71,-109],[-39,-16],[-36,14],[-8,-61],[-53,-71],[-42,-26],[-13,-44],[-45,-46],[-55,-19],[-69,-60],[-30,-2],[-45,36],[32,-108],[-43,-53],[-32,-8],[-47,58],[-15,-25],[47,-65],[-23,-38],[-57,-52],[20,-41],[-56,-85],[-36,15],[6,-62],[-53,-45],[-40,-90],[-24,-95],[13,-62],[23,-26],[-44,-82],[-15,-72],[-28,-35],[-9,-71],[9,-92],[27,-15],[-8,-107],[22,-76],[-2,-53],[53,-315],[30,-126],[98,-319],[120,-284],[-60,2],[6,68],[-38,41],[42,-257],[138,-437],[13,-94],[65,-226],[38,-108],[15,-101],[1,-138],[-8,-19],[-9,-167],[-19,-247],[-18,-18],[-8,-64],[-42,-84],[-14,-79],[11,-75],[-43,-92],[-60,12],[-49,-60],[-55,26],[-21,-26],[-67,-15],[-35,67],[10,64],[78,-74],[-13,66],[-66,47],[-65,240],[-28,43],[-102,80],[-53,73],[-22,217],[-26,3],[-44,45],[-16,94],[10,115],[-33,47],[-21,-85],[-44,28],[-25,56],[-71,208],[-4,73],[-27,30],[-6,47],[31,17],[14,64],[55,90],[-9,75],[-24,-16],[-42,56],[-32,19],[-16,-53],[44,-28],[-12,-111],[-18,0],[-60,78],[28,172],[-8,53],[48,158],[10,184],[-3,96],[-42,67],[-7,68],[-29,38],[-67,-5],[-24,62],[-28,20],[-22,65],[-72,74],[-1,84],[-45,31],[-60,126],[-67,50],[-64,65],[-94,-8],[-46,-43],[16,-76],[-61,13],[-86,-80],[-59,-38],[-91,-5],[-70,-18],[2,64],[-20,56],[-121,145],[-15,77],[-59,-19],[-77,55],[-115,46],[83,47],[-52,26],[-47,-23],[-30,11],[-74,-35],[-140,-20],[40,41],[-28,41],[-55,-30],[-66,-95],[-175,-51],[4,47],[-53,67],[2,79],[-12,68],[-42,-3],[-23,-125],[-4,-71],[-90,41],[-44,-50],[-33,15],[-71,4],[-71,54],[-32,-40],[-121,-45],[-36,-29],[-8,-42],[-101,-8],[-24,39],[-76,16],[-35,58],[-62,18],[-70,-104],[-10,-47],[35,-48],[66,-26],[50,9],[60,72],[35,-34],[-19,-65],[58,-70],[26,-1],[18,66],[55,44],[-3,-80],[40,-30],[-48,-31],[-69,-130],[-12,-60],[48,-32],[10,-48],[32,7],[36,-36],[53,5],[68,-128],[-63,-72],[-76,36],[-37,94],[-105,63],[-9,31],[-48,52],[-25,-2],[-42,39],[17,-106],[-22,-50],[5,-69],[-56,-53],[-17,49],[8,49],[-54,33],[-65,1],[-56,-112],[-46,34],[-39,-2],[-114,41],[-38,35],[42,68],[-40,57],[-81,23],[-13,69],[-45,67],[-73,4],[12,44],[-53,0],[-58,-46],[11,-85],[-65,-53],[-156,43],[-131,80],[-66,25],[-97,-2],[-110,-20],[-35,-23],[-22,66],[41,30],[8,65],[-36,15],[-26,-74],[-4,-55],[21,-62],[-69,4],[-228,-143],[18,62],[-57,-17],[24,107],[-19,52],[-32,-8],[-19,-64],[-53,35],[-3,-111],[52,-103],[-67,-106],[-37,-32],[0,-66],[-85,-101],[-84,-73],[-83,-19],[-148,-91],[-21,63],[-32,-33],[-83,12],[-9,-46],[68,-90],[-95,-71],[-47,73],[-2,-120],[-38,-57],[-106,-10],[51,-57],[-61,-127],[-32,26],[-45,-30],[11,-55],[36,-38],[-61,-217],[-42,14],[-37,-32],[0,-33],[41,-9],[32,25],[-3,-87],[-13,-67],[-26,-8],[-2,-114],[25,-32],[24,-147],[-9,-72],[37,-41],[-4,-42],[20,-52],[0,-48],[24,-32],[4,-54],[37,-12]],[[24064,54654],[-15,86],[-35,20],[-10,83],[12,29],[-27,139],[-72,139],[-102,121],[-77,65],[-44,59],[-63,21],[-17,-34],[-43,19],[8,59],[-20,71],[-38,54],[-91,-10],[-60,13],[-106,63],[-21,69],[-70,69],[-63,32],[-44,-14],[-55,6],[-52,33],[-46,8],[-129,-14],[-15,43],[-54,40],[17,74],[-14,34],[10,61],[-22,30],[16,103],[-6,41],[-55,24],[-41,44],[10,96],[-51,34],[-63,109],[-38,17],[-26,75],[-48,63],[-11,58],[-28,24],[-25,58],[-102,124],[-20,109],[52,119],[9,76],[-27,75],[-30,31],[-47,-18],[-36,18],[-95,134],[1,102],[-24,85],[-22,22],[9,82],[-7,71],[38,19],[22,-135],[81,-8],[-6,53],[-32,51],[-56,138],[64,54],[30,-21],[67,32],[-32,35],[-25,-45],[-57,9],[-48,48],[-36,-29],[-5,-111],[25,-27],[-35,-41],[-55,57],[-21,-2],[-35,57],[-39,24],[-21,142],[-59,113],[-47,39],[-69,108],[-82,101],[-31,68],[16,42],[-54,197],[21,123],[-11,91],[-21,87],[-100,169],[-96,95],[7,36],[-24,77],[52,158],[24,1],[39,195],[-20,75],[15,28],[23,157],[-37,186],[-39,24],[17,45],[0,98],[-55,66],[-28,133],[15,147],[-7,58],[-39,54],[-13,60],[40,114],[26,192],[39,50],[47,284],[34,450],[-1,132],[12,35],[24,170],[0,184],[19,130],[-22,61],[17,135],[0,63],[26,49],[98,16],[36,31],[-66,42],[-91,-32],[-52,63],[63,53],[-5,177],[-70,10],[31,149],[-60,36],[-15,114],[-41,81],[-13,117],[-28,120],[-23,44],[-60,59],[-18,118],[-18,44],[28,92],[33,31],[67,-46],[66,-22],[68,-50],[135,-8],[44,-19],[129,-13],[51,22],[45,-36],[78,32],[0,-38],[43,-90],[-21,-87],[-40,-8],[-42,-114],[71,44],[12,46],[55,100],[23,1],[23,-92],[-61,-41],[14,-58],[32,-47],[-30,-114],[-38,-23],[-43,-59],[-47,45],[-17,-59],[25,-31],[39,16],[29,-42],[58,74],[46,36],[49,65],[-16,43],[-18,123],[3,85],[32,101],[43,44],[-58,67],[-12,117],[-55,39],[15,96],[20,32],[-34,117],[-45,-3],[-47,76],[8,65]],[[824,66597],[26,-35],[-11,-57],[-57,15],[-98,92],[25,23],[74,7],[41,-45]],[[1098,66521],[-56,-31],[-42,29],[65,57],[16,72],[47,-15],[-32,-55],[2,-57]],[[1316,66664],[-31,-64],[52,-21],[-32,-85],[-112,21],[-12,44],[51,23],[0,67],[84,15]],[[137654,66613],[-65,23],[-5,36],[60,35],[54,-39],[-44,-55]],[[1532,66708],[-18,-42],[-49,25],[1,58],[39,6],[27,-47]],[[136853,66681],[7,84],[35,-12],[-42,-72]],[[2452,66781],[32,-24],[104,-22],[-101,-33],[-27,16],[-101,-3],[-1,47],[94,19]],[[2913,66872],[-54,-28],[-10,62],[44,29],[53,-34],[-33,-29]],[[2248,66936],[51,-54],[-37,-54],[-5,-53],[-49,-28],[-55,10],[-131,-59],[-98,26],[96,41],[45,-13],[17,47],[87,13],[40,42],[-46,60],[85,22]],[[135405,66998],[-71,-64],[-78,0],[83,62],[66,2]],[[3599,67065],[-87,4],[59,53],[28,-57]],[[3910,67240],[39,-21],[-22,-50],[-48,27],[31,44]],[[135066,67307],[84,-4],[67,-42],[0,-41],[-43,-40],[-38,21],[-55,-49],[-69,28],[18,57],[-66,-12],[8,87],[94,-5]],[[4590,67659],[82,-42],[-22,-73],[-109,-69],[-59,-18],[-77,-125],[-100,-50],[-42,28],[35,47],[4,65],[59,54],[94,-2],[-17,85],[12,31],[68,50],[72,19]],[[5325,67828],[-53,-72],[-28,33],[81,39]],[[5073,67909],[54,7],[-12,-69],[69,13],[69,49],[20,-42],[-49,-20],[-28,-43],[58,-73],[-105,-38],[-42,-76],[-40,-33],[-43,21],[-198,-86],[-41,-42],[-64,-21],[-71,42],[50,44],[49,-2],[46,34],[58,-10],[12,37],[50,1],[1,89],[81,58],[-84,86],[54,65],[106,9]],[[5407,68032],[78,-28],[-142,-57],[-31,50],[58,63],[37,-28]],[[5543,68091],[29,-43],[-56,-56],[-36,77],[63,22]],[[6783,68452],[-37,0],[-20,52],[48,30],[28,-40],[-19,-42]],[[18661,68526],[15,-45],[-49,-24],[-47,57],[81,12]],[[6218,68579],[70,-2],[56,-89],[21,-90],[-24,-53],[-72,-43],[-65,16],[-131,-9],[-75,-55],[-29,-60],[-95,-27],[-74,19],[-43,99],[99,58],[58,127],[57,28],[33,-22],[101,49],[51,40],[62,14]],[[6993,68642],[-8,-64],[-60,48],[68,16]],[[18068,68650],[47,-76],[-57,-22],[-20,90],[30,8]],[[17965,68656],[24,-36],[21,-110],[69,-76],[27,-65],[-26,-29],[-106,127],[-10,43],[-58,93],[59,53]],[[18618,68619],[3,-41],[-106,-25],[35,84],[52,39],[16,-57]],[[17879,68739],[29,-29],[-38,-42],[-52,16],[4,53],[57,2]],[[7390,68733],[45,11],[5,-60],[-48,-30],[-62,17],[-3,76],[63,-14]],[[18440,68798],[70,-71],[-41,-96],[-42,97],[13,70]],[[17763,69044],[106,-18],[-88,-54],[-18,72]],[[9350,69026],[-66,31],[71,51],[-5,-82]],[[18674,69127],[91,-151],[1,-172],[-38,-100],[-48,-46],[-121,77],[-59,20],[-56,82],[61,46],[-23,49],[15,129],[35,42],[115,37],[27,-13]],[[17837,69260],[33,-35],[3,-57],[-65,4],[-61,-63],[-63,17],[44,78],[109,56]],[[18185,69281],[48,14],[64,-26],[38,-43],[-28,-33],[17,-66],[-69,-19],[-48,34],[-8,59],[-76,-5],[-23,37],[9,69],[32,5],[31,65],[51,-7],[-2,-59],[-36,-25]],[[17764,69379],[111,-25],[44,12],[48,-61],[-3,-112],[55,9],[69,-43],[106,-136],[0,-68],[44,-15],[23,-65],[-44,-14],[118,-148],[37,-5],[-1,-144],[20,-151],[-23,-60],[-55,3],[-56,29],[12,62],[-60,52],[-59,15],[26,97],[-38,6],[-135,96],[-96,2],[13,66],[62,-22],[-41,93],[23,76],[-73,-24],[-40,19],[-11,58],[92,67],[-35,51],[-18,165],[-54,1],[-71,27],[10,87]],[[18125,69434],[-2,-99],[-85,-24],[-69,74],[48,55],[108,-6]],[[18313,69379],[55,-9],[30,-89],[-56,-46],[-106,97],[5,127],[72,-80]],[[9774,69535],[-106,-128],[-19,20],[34,61],[91,47]],[[9920,69535],[-49,-63],[-50,37],[44,28],[55,-2]],[[18033,69656],[134,-125],[-16,-24],[-83,-39],[-56,13],[17,68],[-12,80],[16,27]],[[17610,69695],[72,-53],[36,-108],[-57,-10],[4,-95],[-44,-46],[-9,-47],[32,-39],[-19,-79],[-96,36],[-32,131],[64,19],[18,52],[-68,52],[-42,71],[-20,103],[89,48],[72,-35]],[[17696,69826],[143,-49],[108,1],[48,-40],[-3,-77],[21,-104],[-81,-111],[-77,9],[-69,-22],[-50,15],[4,79],[-18,41],[0,107],[-124,114],[50,45],[48,-8]],[[10264,69887],[27,-54],[-82,-41],[-33,35],[57,79],[31,-19]],[[17005,69928],[9,-63],[-32,-80],[-81,-13],[30,77],[-30,82],[45,51],[59,-54]],[[17066,70056],[103,13],[89,-81],[-24,-16],[62,-80],[45,-206],[28,-75],[1,-105],[-14,-136],[9,-48],[-47,-27],[-50,69],[-65,129],[-39,128],[-82,53],[28,38],[-22,48],[15,48],[-38,68],[29,58],[-74,-9],[-55,70],[111,126],[39,-27],[-49,-38]],[[10233,70327],[-8,-42],[-98,71],[22,27],[84,-56]],[[10328,70352],[58,4],[52,-63],[34,51],[58,-2],[61,-53],[-51,-36],[-3,-67],[117,-20],[-55,-73],[-9,-39],[-100,3],[-2,-48],[-36,-55],[-103,-16],[-53,-24],[-60,11],[-137,-132],[21,-23],[-107,-87],[-48,-61],[-63,25],[96,117],[-107,-5],[-31,-43],[-112,57],[-2,114],[-26,52],[-79,54],[75,110],[142,92],[71,-11],[46,-75],[17,-79],[31,3],[21,92],[-21,61],[-43,43],[0,50],[76,57],[58,-38],[6,-63],[79,46],[60,-4],[-3,86],[72,-11]],[[16710,70406],[-53,-54],[-32,56],[32,49],[53,-51]],[[16949,70539],[31,0],[94,-55],[177,-70],[-6,-137],[-28,-13],[-137,13],[17,-48],[49,-12],[110,29],[38,-160],[-35,-25],[-58,6],[-219,149],[32,-149],[-62,-62],[-93,59],[1,34],[-75,79],[21,28],[-72,53],[-45,68],[38,78],[-42,75],[69,10],[46,45],[47,-34],[63,66],[39,-27]],[[17460,70564],[-84,-21],[-31,45],[45,21],[70,-45]],[[17254,70627],[41,-26],[45,-100],[194,0],[6,-56],[64,-86],[44,-87],[-47,5],[-50,93],[-65,13],[39,-85],[75,-115],[28,-21],[29,-164],[-101,-55],[-142,-146],[-48,50],[1,74],[61,101],[-73,127],[-24,90],[-2,94],[-30,86],[1,48],[-45,60],[-1,100]],[[10484,70687],[40,-3],[9,-64],[146,3],[50,-20],[-2,-60],[-60,-44],[-67,57],[-10,-57],[-145,-70],[-37,-37],[-80,34],[-83,75],[72,84],[96,-12],[17,103],[54,11]],[[10531,70694],[-61,35],[72,56],[34,-47],[-45,-44]],[[7339,70801],[-28,-52],[-67,-14],[5,95],[77,28],[13,-57]],[[12586,71853],[74,-27],[-35,-49],[-85,-62],[-99,-120],[9,-39],[-67,-8],[-74,-47],[-19,44],[71,86],[123,89],[32,56],[37,7],[33,70]],[[5320,71875],[43,-44],[77,13],[40,-26],[-20,-76],[35,-106],[35,-43],[-164,-37],[-100,-42],[-63,29],[-79,1],[-166,90],[-55,15],[-94,104],[57,28],[158,-18],[32,51],[126,58],[31,-24],[107,27]],[[12805,71923],[73,2],[96,-48],[-89,-27],[-102,-66],[-48,87],[70,52]],[[12366,71945],[29,-42],[-48,-110],[-65,-13],[45,145],[39,20]],[[6743,73872],[-2,-37],[-87,-9],[-24,39],[113,7]],[[3187,73980],[10,-53],[53,-36],[218,-51],[106,63],[139,14],[83,-50],[16,-51],[98,-59],[71,-7],[18,-38],[86,0],[77,-39],[44,31],[114,-24],[-38,-88],[-183,15],[-164,-104],[-38,63],[-113,46],[-47,50],[-80,48],[-158,62],[-87,-10],[-136,-78],[-113,36],[-45,89],[69,171]],[[19129,69103],[-60,-98],[18,-58],[-8,-66],[61,-163],[-34,-31],[-110,-202],[-82,-62],[-136,11],[1,71],[-29,41],[22,41],[-44,44],[3,34],[71,89],[2,129],[-9,101],[-104,140],[-11,46],[-57,-33],[-28,30],[-123,-77],[-35,-135],[-42,-43],[-9,-60],[-81,55],[-34,93],[66,65],[56,100],[-7,92],[56,25],[-56,60],[-4,40],[-73,14],[-16,56],[-105,82],[-1,86],[-74,37],[-72,71],[36,32],[-124,71],[-177,61],[62,94],[-42,86],[2,35],[-62,56],[33,58],[139,-77],[10,21],[-133,78],[-10,109],[-50,-84],[-66,102],[-77,72],[-3,127],[33,23],[-9,58],[-90,-120],[-98,85],[-103,30],[-23,68],[-121,200],[5,37],[-38,143],[-50,-8],[-10,-98],[59,-113],[24,-78],[-22,-21],[49,-104],[18,-83],[-36,-58],[-63,22],[-41,88],[-81,21],[-99,-30],[-7,61],[25,32],[-84,183],[-80,-38],[-140,79],[194,-199],[39,-113],[-19,-26],[-112,-28],[-48,9],[-40,-57],[-145,115],[-60,-4],[-147,101],[-13,35],[-145,112],[-20,73],[-77,65],[-180,84],[-126,70],[-85,28],[-249,139],[76,18],[71,89],[-34,33],[-24,73],[-32,19],[-55,-62],[-181,-73],[-112,4],[-93,23],[-158,64],[4,100],[-47,14],[-133,-44],[-90,40],[-318,52],[-152,-27],[-159,-11],[-117,-33],[-50,51],[-114,75],[-86,-6],[-132,117],[47,52],[-15,38],[-72,1],[-82,-99],[-60,-4],[-70,56],[-139,3],[98,94],[-3,30],[-204,61],[-100,-43],[-31,39],[20,42],[-67,39],[-50,94],[-109,-10],[-101,-77],[-89,-4],[-131,15],[-90,70],[-51,-78],[-107,-41],[123,-43],[23,-87],[46,-9],[54,-100],[-54,-30],[-73,-72],[52,-29],[-9,-51],[-44,-13],[-47,-85],[-62,-21],[-139,9],[-158,32],[-90,-77],[-62,-5],[-27,-106],[-42,0],[-74,-86],[-82,-64],[-87,36],[-39,-68],[-169,-86],[-6,-40],[-109,24],[-66,-52],[-66,-5],[-90,70],[32,82],[93,45],[81,5],[63,41],[62,140],[-138,-93],[-106,30],[-51,63],[67,158],[93,90],[28,106],[33,17],[9,93],[-52,111],[62,36],[70,6],[118,88],[118,67],[46,-1],[42,-60],[69,-12],[85,38],[79,10],[-173,99],[66,47],[38,67],[54,43],[129,43],[-42,21],[-125,-37],[-59,-62],[-28,-66],[-180,4],[-70,29],[-163,-84],[-36,-61],[-79,-32],[-78,-11],[-70,-48],[-35,-103],[-81,-48],[-111,-121],[10,-36],[-39,-75],[-107,-79],[41,-48],[-56,-114],[-109,-12],[8,-54],[-21,-56],[-100,-44],[-98,2],[-4,-47],[-80,-15],[26,-47],[-135,-52],[-24,-62],[-21,-127],[185,-3],[146,-85],[-3,-48],[-39,-76],[-97,-69],[-79,-3],[-38,-144],[-116,-40],[52,-64],[-44,-51],[-62,7],[-54,-73],[-41,26],[-37,-39],[-90,13],[-17,-80],[-102,-43],[-23,-63],[-81,42],[-2,-79],[-78,-58],[-90,-33],[-111,-64],[-20,-61],[18,-85],[-55,-40],[-32,-81],[-74,18],[-108,-82],[-53,-63],[-88,56],[5,-58],[-65,-36],[35,-59],[-69,-6],[-34,39],[-62,-12],[21,-55],[-7,-54],[-74,21],[-37,-33],[-72,8],[-106,-107],[109,16],[11,-93],[-47,-25],[-16,-62],[-144,-12],[-26,-58],[-66,5],[-98,-30],[-46,-29],[-34,-79],[-43,29],[20,38],[-78,24],[-129,-120],[-103,-49],[-16,-52],[-117,-30],[-54,45],[-38,-56],[-98,-45],[-91,17],[49,118],[-19,40],[-70,-15],[-33,-53],[-3,-83],[-69,-94],[-47,-1],[24,-71],[-122,-65],[-56,10],[2,37],[-65,127],[-51,-52],[40,-31],[-12,-105],[-52,-38],[-37,1],[-62,99],[-54,26],[-14,-59],[60,-72],[-99,-70],[-26,27],[41,53],[-21,109],[109,58],[34,-28],[49,37],[69,81],[63,12],[-23,49],[124,148],[153,112],[141,46],[127,5],[117,-138],[49,76],[143,3],[-77,43],[-18,44],[40,65],[35,101],[69,69],[66,36],[104,82],[110,31],[109,84],[87,49],[63,-40],[38,5],[0,145],[29,48],[112,134],[89,50],[54,62],[88,44],[1,100],[26,111],[13,121],[29,93],[-16,39],[26,90],[90,97],[79,64],[-9,100],[-150,-54],[-35,-32],[-224,-83],[-62,20],[-35,77],[-61,31],[30,63],[-33,23],[-84,-88],[-37,-69],[46,-115],[-22,-71],[-86,13],[-127,204],[-130,95],[-71,-84],[-52,68],[-81,17],[1,49],[-37,49],[-121,-76],[-264,-137],[-2,-41],[-76,-35],[-135,18],[19,52],[56,24],[-31,142],[71,59],[-41,22],[-97,9],[-21,62],[31,97],[90,70],[-55,80],[-10,42],[-77,111],[-10,54],[-101,131],[-58,-111],[-86,5],[-22,-39],[-107,-51],[-201,-36],[-101,-1],[-84,21],[-44,75],[4,49],[-81,36],[-28,57],[-103,63],[-89,34],[-125,148],[121,81],[-12,46],[138,84],[0,-60],[152,-24],[21,-60],[99,56],[57,-28],[5,-93],[59,11],[68,46],[15,55],[-130,77],[-93,-17],[-136,6],[-78,-12],[-24,50],[-86,11],[-105,-17],[-27,34],[53,52],[-58,53],[-52,4],[-9,-52],[-95,44],[-1,86],[-79,20],[-35,53],[53,37],[1,35],[-55,28],[-82,-28],[-24,48],[110,69],[-72,72],[189,18],[-51,71],[13,94],[43,38],[122,160],[54,48],[102,14],[21,51],[-27,136],[61,107],[108,11],[-53,67],[82,55],[85,20],[144,-23],[63,-74],[62,-5],[34,-41],[99,17],[81,51],[29,48],[80,36],[137,167],[58,-58],[197,1],[148,31],[151,150],[9,48],[-62,138],[-17,125],[-87,71],[-9,29],[-100,27],[11,40],[161,-8],[89,84],[6,46],[-37,57],[-113,80],[-93,-102],[-112,12],[-140,-45],[-72,-63],[-130,-70],[-13,-69],[-53,-31],[-35,71],[18,25],[-160,93],[-55,-32],[129,-55],[-32,-60],[-154,95],[-108,15],[-59,-13],[-141,13],[-134,-36],[-131,-51],[-157,38],[-285,46],[-70,32],[-43,57],[36,104],[-112,53],[-25,49],[107,79],[83,42],[-21,33],[-241,46],[-177,10],[-123,63],[-138,54],[99,79],[93,0],[8,56],[81,55],[110,-13],[71,43],[57,70],[168,73],[74,-34],[129,-12],[98,29],[-150,56],[48,51],[176,70],[136,14],[89,59],[170,28],[110,7],[68,-27],[20,-40],[-53,-65],[15,-67],[-13,-76],[80,-55],[125,12],[90,-17],[135,21],[42,-41],[103,-1],[80,24],[100,-21],[89,60],[43,74],[176,-31],[44,21],[-52,62],[-145,41],[-89,-2],[-72,93],[-127,103],[-67,5],[-76,104],[119,38],[79,-95],[40,-21],[-25,-66],[81,-83],[100,-48],[103,22],[107,-2],[105,-69],[205,17],[12,80],[-41,46],[-86,-9],[-126,50],[-98,-12],[-68,-73],[-95,19],[-117,87],[-6,67],[59,85],[-40,64],[-230,-40],[-114,36],[-78,-12],[-287,45],[-30,23],[-18,121],[-57,101],[-73,75],[-113,56],[-94,70],[-62,16],[-223,130],[-188,47],[-67,63],[-171,75],[68,50],[51,76],[18,134],[-17,59],[219,-9],[238,12],[96,20],[171,10],[145,45],[132,73],[177,148],[80,266],[157,104],[30,62],[100,65],[70,70],[258,-11],[184,54],[247,144],[113,-21],[-10,56],[106,104],[123,37],[-4,-64],[504,47],[184,71],[127,74],[157,146],[82,29],[67,-55],[73,3],[92,-47],[142,-6],[13,-71],[-189,-88],[64,-63],[144,26],[9,53],[123,54],[34,68],[128,-41],[68,-52],[-44,-59],[67,-48],[156,-22],[90,66],[146,-7],[80,26],[187,-26],[103,0],[126,-42],[-114,-81],[22,-82],[267,7],[-85,-73],[307,0],[255,34],[151,-37],[88,43],[208,-2],[210,-59],[44,4],[115,-67],[47,26],[176,-40],[-3,-33],[261,-43],[105,17],[372,-12],[108,-58],[251,-64],[135,3],[77,38],[441,46],[243,-65],[126,-97],[63,-5],[173,-53],[93,-69],[155,1]],[[96147,60634],[8,-28]],[[95998,60043],[7,-4],[7,-6]],[[96188,59985],[26,-27],[8,9],[3,21]],[[96300,60217],[13,11],[8,-2],[5,-8]],[[96326,60218],[68,-137]],[[96629,59896],[3,-5],[0,-7],[0,-14]],[[96322,59362],[-3,9],[0,26],[-8,25],[-19,-29]],[[96084,59439],[-36,-21]],[[94771,57572],[-12,-3]],[[45480,42670],[-39,26],[-3,39],[25,74],[33,-37],[-16,-102]],[[45547,39847],[-19,-36],[-87,-3],[16,35],[30,-17],[19,36],[41,-15]],[[45649,40034],[15,-56],[-32,-30],[-30,-64],[-94,-3],[-28,41],[15,36],[102,70],[52,6]],[[45518,40002],[51,117],[31,-29],[-31,-54],[-51,-34]],[[43919,41317],[0,-43],[-64,24],[14,25],[50,-6]],[[44475,41345],[-40,-71],[-56,-11],[-51,61],[-18,-17],[-70,17],[15,58],[65,16],[6,-33],[51,-26],[24,73],[35,36],[17,-14],[22,-89]],[[41592,41870],[-19,-57],[-49,-30],[-65,-15],[-110,-59],[-3,-49],[12,-80],[31,-101],[33,-69],[1,-56],[20,-35],[9,-75],[45,-72],[-14,-51],[-7,-114],[-57,-70],[-45,-125],[-33,-31],[-23,-99],[-30,-63],[47,-106],[12,-97],[90,-88],[-10,-146],[27,-36],[67,-7],[91,52],[47,95],[37,47],[-14,118],[19,127],[-12,60],[-34,70],[-17,6],[-23,106],[-37,42],[-42,125],[3,50],[-23,26],[-1,128],[32,27],[9,67],[-14,44],[63,7],[45,29],[118,100],[70,33],[65,3],[86,64],[42,12],[50,89],[39,-1],[50,-58],[26,35],[-17,102],[-22,29],[-128,-57],[-16,17],[9,66],[-36,84],[36,149],[29,10],[42,43],[35,-24],[34,-90],[11,-129],[41,-164],[30,-45],[48,26],[46,-9],[41,25],[79,-51],[78,0],[53,-56],[26,-8],[65,-87],[25,-18],[60,-170],[-27,-59],[34,-142],[44,-56],[71,-13],[147,38],[148,17],[61,34],[49,-1],[131,14],[80,-13],[31,23],[49,-28],[2,-65],[95,-117],[112,-76],[45,-23],[112,-31],[33,-31],[46,31],[56,-8],[25,13],[45,88],[55,-5],[57,76],[0,17],[75,55],[44,-21],[80,1],[52,20],[-62,47],[-47,16],[-72,-6],[-36,-32],[-10,80],[55,-18],[23,17],[61,-11],[60,22],[86,-22],[25,23],[87,11],[26,28],[102,-18],[70,35],[217,-44],[67,29],[7,-51],[-49,-13],[-58,5],[-36,-67],[-125,23],[-75,-22],[10,-77],[36,-18],[23,-53],[61,-67],[42,-161],[45,-118],[18,68],[-5,58],[23,52],[65,-39],[57,-83],[34,4],[75,-30],[3,56],[42,-43],[13,10],[40,-66],[80,-85],[28,5],[33,-50],[41,-28],[29,-73],[-14,-40],[-37,-22],[-25,-43],[-9,-74],[-35,-54],[-11,-90],[-19,-50],[-12,-77],[-120,-9],[34,-72],[33,0],[24,-50],[40,59],[72,11],[3,37],[112,21],[33,-33],[55,-11],[34,62],[67,-6],[68,-41]],[[108696,41006],[30,-51],[1,-75],[-28,-134],[-30,145],[-29,33],[56,82]],[[109790,41027],[-39,1],[-3,49],[12,21],[-12,40],[8,0],[13,-20],[15,-12],[-3,-34],[9,-45]],[[109840,47434],[39,-26],[-16,-54],[-55,59],[32,21]],[[110045,47651],[-23,-66],[-36,-22],[36,133],[23,-45]],[[110222,47826],[-42,30],[-39,-20],[-13,-57],[-37,-21],[-19,-48],[-80,-11],[-1,-60],[-21,-110],[-42,-6],[-25,-40],[-36,20],[-46,-6],[-29,-44],[-43,34],[-3,-82],[15,-46],[-32,-24],[-52,-104],[11,-47],[-10,-134],[-67,-17],[-52,-88],[-58,-59],[-31,21],[-27,-45],[-12,-100],[-22,-27],[-22,-75],[3,-39],[-14,-89],[10,-70],[-24,-26],[-4,-80],[-35,-26],[-11,-51],[13,-56],[51,-90],[17,-94],[58,-120],[47,-68],[65,-53],[51,-61],[46,-97],[-30,-48],[9,-77],[64,-171],[49,-84],[133,-152],[7,-49],[34,-64],[148,-192],[26,-61],[32,-21],[21,-92],[33,-22],[19,48],[45,-61],[33,-25],[-3,-61],[37,-17],[25,-84],[41,-54],[16,-74],[63,-135],[4,-46],[28,-6],[33,-44],[36,-23],[16,-50],[-11,-63],[18,-107],[26,-99],[26,-57],[-2,-93],[41,-169],[33,-238],[16,-27],[-2,-72],[-30,-9],[7,-62],[20,-41],[-24,-73],[0,-41],[29,-32],[0,-129],[60,-136],[-3,-37],[-31,-13],[-66,-115],[0,-60],[36,-43],[15,-43],[-21,-34],[-29,19],[3,-196],[28,-63],[-34,-12],[-28,-52],[26,-22],[19,-56],[-41,-104],[-28,9],[-14,-41],[-3,-100],[-33,-27],[-43,8],[-35,-89],[-58,-1],[-24,-25],[-16,-53],[-43,-26],[-6,-35],[-91,-22],[-16,-31],[-26,-105],[-44,11],[-115,-90],[-20,-35],[-77,-44],[-21,-40],[-37,62],[-81,15],[-8,61],[-24,31],[-20,-13],[-22,35],[-12,-11],[12,-40],[-7,-18],[-7,-33],[20,-79],[-4,-74],[-111,17],[-3,-13],[92,-50],[27,-55],[-46,-49],[-21,-58],[31,-26],[-32,-49],[-83,97],[50,-131],[20,-70],[-36,-63],[-34,-4],[-56,56],[-70,107],[-62,107],[-26,2],[91,-144],[47,-128],[-2,-105],[-66,-34],[-184,-115],[-36,-54],[-42,-125],[-30,-48],[-28,-13],[-32,-66],[-93,-43],[-1,102],[-30,55],[14,73],[-2,67],[11,316],[8,113],[14,69],[29,2],[41,55],[4,34],[-31,59],[-40,3],[-37,67],[-36,9],[-36,-46],[-11,70],[-52,99]],[[110055,43740],[-2,12],[-23,28],[-11,10]],[[110019,43790],[-5,15]],[[110013,44441],[-4,36]],[[109935,44515],[-11,11],[-23,11]],[[109577,45196],[-18,35]],[[109191,45792],[-1,8],[3,14],[-4,14],[-18,-5],[-34,46]],[[109126,46041],[13,0],[2,20]],[[108639,46485],[32,39]],[[108782,46725],[18,-14],[8,-17]],[[108840,46712],[47,-50]],[[108903,46661],[3,3],[6,5]],[[109029,46896],[30,17]],[[109061,46964],[-19,51]],[[108602,47371],[-2,-5],[-8,-7]],[[108592,47359],[-10,-5]],[[108111,48118],[2,39]],[[133893,22029],[-39,24],[7,40],[32,2],[22,-32],[-22,-34]],[[133742,22400],[-34,7],[-53,91],[10,91],[41,8],[5,-86],[52,-36],[-21,-75]],[[133643,22965],[13,-57],[43,-49],[-30,-49],[-102,67],[1,115],[19,38],[43,-5],[13,-60]],[[133315,23697],[46,2],[22,-63],[29,-33],[-17,-58],[-55,-17],[-29,24],[-13,45],[-42,34],[44,73],[15,-7]],[[133258,24299],[25,-71],[24,0],[23,-47],[36,-8],[-5,-43],[-45,38],[-60,-12],[-22,60],[24,83]],[[133311,24458],[-70,-27],[-83,65],[1,23],[55,25],[39,61],[23,-90],[35,-57]],[[132967,24586],[140,-154],[4,-78],[-28,-19],[-39,14],[-40,-52],[-24,7],[-28,123],[-3,104],[-20,53],[-34,-34],[-33,53],[14,119],[16,15],[41,-26],[34,-125]],[[132895,24815],[-56,23],[15,51],[41,-13],[0,-61]],[[133274,24661],[-15,12],[-26,190],[30,32],[27,-151],[0,-58],[-16,-25]],[[133135,24977],[-48,-4],[-20,33],[46,69],[66,26],[-19,-90],[-25,-34]],[[133258,25048],[-19,11],[-2,116],[-15,133],[20,-10],[19,-153],[-3,-97]],[[132733,25174],[41,2],[18,32],[3,78],[33,-14],[11,-87],[20,-3],[20,-98],[-8,-37],[24,-98],[-24,4],[-26,-39],[-61,2],[-58,-49],[-68,168],[13,75],[-30,190],[-18,77],[13,114],[20,8],[29,-90],[20,-31],[28,-204]],[[133006,25802],[31,-28],[-31,-81],[-36,1],[-9,77],[45,31]],[[133025,25986],[-49,-24],[-18,80],[34,30],[33,-86]],[[3225,25929],[39,-19],[2,-52],[-84,10],[-22,-9],[-36,30],[-39,8],[-47,51],[7,38],[63,25],[33,-6],[85,-50],[-1,-26]],[[2954,26204],[30,-61],[8,-68],[-12,-61],[-33,19],[-86,-22],[-28,65],[-59,76],[-6,41],[49,-6],[41,22],[63,14],[33,-19]],[[89394,42397],[31,1],[42,-53],[43,18],[51,-1],[42,33],[19,-21],[72,-39],[43,-36],[-9,-37],[-77,-32],[-40,-51],[-66,-5],[-73,-23],[-79,18],[-25,50],[-66,62],[22,28],[3,59],[39,35],[28,-6]],[[85267,43153],[-37,54],[29,35],[12,-36],[-4,-53]],[[89209,44832],[-40,-9],[-52,-44],[-96,-50],[-69,-65],[-48,-66],[-29,-71],[-24,-102],[27,-85],[1,-143],[-69,-28],[-141,-103],[-9,-43],[-40,-6],[-70,-58],[-114,-50],[-84,-24],[-72,-32],[-42,-6],[-46,-32],[-28,-39],[-68,-56],[-53,-16],[-38,13],[-140,-63],[-78,-54],[-71,-62],[-42,-26],[-20,-44],[-9,-69],[-45,-45],[-12,-52],[-66,-77],[-45,2],[-44,-22],[-43,4],[-56,-30],[-19,38],[-48,16],[-38,-22],[-19,-36],[-76,-46],[-102,-144],[-90,-43],[-97,-32],[-82,-64],[-68,-10],[-79,0],[-30,14],[-48,-18],[-65,-5],[-104,-35],[-66,-92],[-36,-76],[-80,-36],[-64,-106],[-31,-4],[-29,-63],[-68,43],[-57,-3],[-41,-64],[-94,-46],[-14,23],[-35,-27],[-44,-8],[-14,29],[-88,54],[-35,10],[-25,-37],[-24,2],[5,94],[-37,110],[-49,116],[2,195],[12,33],[-2,88],[-18,95],[-28,48],[-25,81],[-7,68],[-31,156],[13,57],[-33,154],[-2,99],[-20,37],[-9,79],[-73,63],[11,46],[39,-42],[2,62],[-13,90],[-21,49],[-7,91],[20,62],[25,36],[9,109],[-20,197]],[[83383,5529],[-95,-9],[-17,31],[34,47],[61,-10],[17,-59]],[[81118,18499],[-44,-15]],[[80740,17910],[-4,-40],[2,-16],[8,-22]],[[81134,17955],[-1,18],[32,-2]],[[81480,17950],[-21,-171],[-63,-246],[-32,-223],[2,-25],[-21,-166],[-46,-119],[-17,-105],[-141,-194],[-46,-36],[-46,2],[-6,-27],[-75,-122],[-26,-29],[-116,-217],[-65,-190],[3,-42],[-40,-51],[-52,-135],[-85,-208],[-65,-169],[-147,-276],[-55,-73],[-30,-14],[-93,-124],[-52,-30],[-6,-32],[-93,-146],[-20,-51],[-87,-144],[-96,-118],[-27,-52],[-129,-132],[-22,-8],[-23,-61],[-74,-94],[-63,-42],[-48,-65],[-27,-14],[-61,-75],[-90,-76],[-16,-29],[-70,-34],[-104,-67],[-51,-41],[-88,-6],[-73,30],[-53,4],[-65,-21],[-41,-31],[-22,-94],[32,-46],[-41,-17],[-71,10],[-51,32],[-69,12],[-56,-15],[-42,-91],[6,-33],[-104,5],[-79,44],[-83,32],[-68,8],[-133,38],[-80,-20],[-7,-60],[-163,21],[-19,-4],[-116,53],[-26,-1],[-59,-41],[-51,4],[-58,-38],[-4,-46],[-74,-32],[-10,-55],[-74,-34],[-70,23],[-64,-42],[-34,0],[-63,31],[-52,9],[-52,-21],[6,-47],[-68,17],[-53,-10],[-119,-134],[-53,-40],[-7,-36],[-40,-9],[-37,37],[-81,-15],[-95,106],[-35,113],[-71,11],[-12,36],[-107,-14],[19,134],[-45,44],[-71,2],[-44,-43],[14,-62],[-27,-35],[-34,168],[21,65],[40,16],[-17,125],[-42,79],[-6,56],[-61,75],[-28,95],[-32,32],[19,63],[-49,1],[-23,134],[21,64],[23,14],[43,-48],[75,84],[23,95],[-7,92],[12,52],[-14,80],[-13,146],[-40,142],[-63,129],[-44,68],[-127,313],[-9,53],[-98,250],[-29,114],[-16,94],[-23,78],[-18,130],[-47,197],[-18,36],[-30,136],[-25,30],[-29,75],[-26,32],[-16,92],[-33,51],[6,16],[1,11],[-1,6]],[[75309,16964],[12,46]],[[75324,17099],[19,10]],[[75522,16955],[-1,-9],[3,-11]],[[75558,16871],[-3,-26],[-4,-26],[0,-18]],[[76539,16994],[0,59],[0,68]],[[76538,17746],[0,104],[0,70],[0,173]],[[76538,18682],[0,138]],[[76538,18925],[0,69],[0,69]],[[76538,19063],[0,173],[53,-75]],[[76799,18742],[4,-16],[-12,-14]],[[76803,18688],[0,-27]],[[76823,18579],[12,5]],[[76834,18302],[-51,-94]],[[76776,18168],[0,-17],[0,-17]],[[77518,18344],[68,139]],[[77586,18483],[2,38],[-1,8],[-5,11]],[[77601,18593],[-6,9]],[[77618,18667],[4,69]],[[78079,18699],[7,-10]],[[78778,19081],[16,81]],[[78794,19187],[-3,60]],[[80116,20826],[18,0],[29,21]],[[80163,20847],[20,-7],[9,-1],[5,6],[2,10],[8,3],[14,-3],[14,10],[7,2],[38,-3],[72,-42],[72,-58],[40,-2],[23,-25],[14,-4],[29,4],[36,17],[48,-13],[78,30],[35,-8],[42,-15],[13,-9],[13,0],[13,9],[5,2],[4,-4],[48,-46]],[[79479,16601],[-5,-2],[-6,-2]],[[79423,16479],[2,-15],[1,-7]],[[79224,16207],[20,-19]],[[79660,15691],[1,5],[-1,6]],[[79690,15761],[8,22],[-1,13]],[[79935,15960],[90,80],[20,10]],[[80042,16073],[-1,9],[0,6]],[[79862,16867],[-5,10],[-8,7],[-5,-1]],[[79746,16839],[-11,-26],[-7,-9]],[[80524,24880],[-74,-11],[-28,18],[-46,-14],[-66,19],[-127,-54],[-38,-7],[-85,-60],[-54,-83],[-43,-11],[-24,-76],[-13,-136],[9,-51],[-14,-50],[-34,-54],[-34,-6],[-140,-86],[-63,-75],[-94,-63],[-34,-44],[-53,-122],[-24,-102],[-59,-87],[-102,-164],[-3,-45],[-38,-64],[-62,-24],[-67,-50],[-116,78],[-32,2],[-47,31],[-86,-70],[-44,17],[-5,41],[-65,58],[-71,-26],[-61,8],[-29,29]],[[77840,23640],[0,25]],[[77304,24871],[0,63],[0,27],[0,57]],[[77304,25018],[0,186]],[[77303,26509],[427,0],[144,0],[94,0],[47,0],[49,0],[13,0]],[[78053,26798],[31,70]],[[78088,26889],[-4,28],[-1,38]],[[78059,27033],[2,87],[2,80]],[[78194,27493],[52,-34]],[[78566,27500],[8,-85]],[[80071,26257],[36,34]],[[80208,26370],[23,-23],[10,1],[4,-19]],[[80245,26329],[-25,-51]],[[79744,27469],[31,62]],[[79874,27965],[-2,5],[-9,11],[-2,5],[3,28]],[[79848,28181],[-23,46]],[[79805,28747],[-57,44]],[[81113,29023],[-8,-56]],[[81602,28568],[-4,-18],[1,-9],[3,-9]],[[81602,28532],[23,-41]],[[81638,28356],[-2,-32],[5,-11]],[[81609,27817],[0,-8],[2,-3]],[[81611,27806],[16,-7]],[[81661,27607],[-53,-120]],[[81718,26897],[-55,-90]],[[81561,26763],[-3,-2],[-4,-6]],[[81518,26391],[-12,-21]],[[81579,25930],[18,-47]],[[81597,25883],[-28,-16],[-33,-17]],[[80483,25101],[30,-60]],[[80512,24925],[12,-45]],[[80776,24644],[6,-5]],[[80901,24563],[8,-8]],[[80909,24555],[7,-2],[9,0],[7,-2],[22,-17]],[[81018,24527],[43,-61],[23,-23]],[[81534,23194],[-10,-13],[-9,-18],[0,-5]],[[81521,22228],[-2,-47],[3,-14],[1,-5]],[[81492,22129],[-6,-4],[-6,0],[-4,-7]],[[81419,21926],[-35,-89]],[[80163,20847],[-40,-18]]];
	var objects = {"countries":{"type":"GeometryCollection","geometries":[{"arcs":[[0]],"type":"Polygon","properties":{"name":"Aruba","ISO3":"ABW","formalName":"Aruba"},"id":"ABW"},{"arcs":[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88]],"type":"Polygon","properties":{"name":"Afghanistan","ISO3":"AFG","formalName":"Islamic State of Afghanistan"},"id":"AFG"},{"arcs":[[[89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109]],[[110,111,112,113,114]]],"type":"MultiPolygon","properties":{"name":"Angola","ISO3":"AGO","formalName":"People's Republic of Angola"},"id":"AGO"},{"arcs":[[115,116,117,118,119,120,121,122,123,124]],"type":"Polygon","properties":{"name":"Albania","ISO3":"ALB","formalName":"Republic of Albania"},"id":"ALB"},{"arcs":[[125]],"type":"Polygon","properties":{"name":"Aland","ISO3":"ALD","formalName":"Åland Islands"},"id":"ALD"},{"arcs":[[126,127,128,129,130,131,132,133]],"type":"Polygon","properties":{"name":"Andorra","ISO3":"AND","formalName":"Principality of Andorra"},"id":"AND"},{"arcs":[[[134]],[[135,136,137,138,139],[140]]],"type":"MultiPolygon","properties":{"name":"United Arab Emirates","ISO3":"ARE","formalName":"United Arab Emirates"},"id":"ARE"},{"arcs":[[[141]],[[142,143]],[[144]],[[145]],[[146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197]]],"type":"MultiPolygon","properties":{"name":"Argentina","ISO3":"ARG","formalName":"Argentine Republic"},"id":"ARG"},{"arcs":[[198,199,200,201,202]],"type":"Polygon","properties":{"name":"Armenia","ISO3":"ARM","formalName":"Republic of Armenia"},"id":"ARM"},{"arcs":[[[203]],[[204]]],"type":"MultiPolygon","properties":{"name":"Antigua and Barbuda","ISO3":"ATG","formalName":"Antigua and Barbuda"},"id":"ATG"},{"arcs":[[[205]],[[206]],[[207]],[[208]],[[209]],[[210]],[[211]],[[212]],[[213]],[[214]],[[215]],[[216]],[[217]],[[218]],[[219]],[[220]],[[221]],[[222]],[[223]],[[224]],[[225]],[[226]],[[227]],[[228]],[[229]],[[230]],[[231]],[[232]],[[233]],[[234]]],"type":"MultiPolygon","properties":{"name":"Australia","ISO3":"AUS","formalName":"Commonwealth of Australia"},"id":"AUS"},{"arcs":[[235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271]],"type":"Polygon","properties":{"name":"Austria","ISO3":"AUT","formalName":"Republic of Austria"},"id":"AUT"},{"arcs":[[[272,273,-201]],[[274,275,276,-199,277]]],"type":"MultiPolygon","properties":{"name":"Azerbaijan","ISO3":"AZE","formalName":"Republic of Azerbaijan"},"id":"AZE"},{"arcs":[[278,279,280,281,282,283,284,285]],"type":"Polygon","properties":{"name":"Burundi","ISO3":"BDI","formalName":"Republic of Burundi"},"id":"BDI"},{"arcs":[[286,287,288,289,290,291,292,293]],"type":"Polygon","properties":{"name":"Belgium","ISO3":"BEL","formalName":"Kingdom of Belgium"},"id":"BEL"},{"arcs":[[294,295,296,297,298,299,300,301,302,303,304]],"type":"Polygon","properties":{"name":"Benin","ISO3":"BEN","formalName":"Republic of Benin"},"id":"BEN"},{"arcs":[[305,-304,306,307,308,309,310,311]],"type":"Polygon","properties":{"name":"Burkina Faso","ISO3":"BFA","formalName":"Burkina Faso"},"id":"BFA"},{"arcs":[[[312]],[[313]],[[314]],[[315]],[[316]],[[317]],[[318,319,320]]],"type":"MultiPolygon","properties":{"name":"Bangladesh","ISO3":"BGD","formalName":"People's Republic of Bangladesh"},"id":"BGD"},{"arcs":[[321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342]],"type":"Polygon","properties":{"name":"Bulgaria","ISO3":"BGR","formalName":"Republic of Bulgaria"},"id":"BGR"},{"arcs":[[343]],"type":"Polygon","properties":{"name":"Bahrain","ISO3":"BHR"},"id":"BHR"},{"arcs":[[[344]],[[345]],[[346]],[[347]],[[348]],[[349]],[[350]],[[351]],[[352]],[[353]],[[354]],[[355]],[[356]]],"type":"MultiPolygon","properties":{"name":"The Bahamas","ISO3":"BHS","formalName":"Commonwealth of the Bahamas"},"id":"BHS"},{"arcs":[[357,358,359,360,361,362,363,364,365,366,367,368]],"type":"Polygon","properties":{"name":"Bosnia and Herzegovina","ISO3":"BIH","formalName":"Bosnia and Herzegovina"},"id":"BIH"},{"arcs":[[369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446]],"type":"Polygon","properties":{"name":"Belarus","ISO3":"BLR","formalName":"Republic of Belarus"},"id":"BLR"},{"arcs":[[447,448,449]],"type":"Polygon","properties":{"name":"Belize","ISO3":"BLZ","formalName":"Belize"},"id":"BLZ"},{"arcs":[[450,-161,451,-159,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518]],"type":"Polygon","properties":{"name":"Bolivia","ISO3":"BOL","formalName":"Plurinational State of Bolivia"},"id":"BOL"},{"arcs":[[[519]],[[520]],[[521]],[[522]],[[523]],[[524]],[[525]],[[526]],[[527]],[[528]],[[529]],[[530]],[[531]],[[532]],[[533]],[[534]],[[535]],[[536]],[[537]],[[538]],[[539]],[[540]],[[541]],[[542]],[[543,544,545,546,547,548,549,550,-147,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,-519,575,-517,576,577,-514,578,-512,579,-510,580,-508,581,-506,582,-504,583,584,-501,585,586,587,-497,588,-495,589,-493,590,-491,591,-489,592,-487,593,594,595,596,597]]],"type":"MultiPolygon","properties":{"name":"Brazil","ISO3":"BRA","formalName":"Federative Republic of Brazil"},"id":"BRA"},{"arcs":[[598]],"type":"Polygon","properties":{"name":"Barbados","ISO3":"BRB","formalName":"Barbados"},"id":"BRB"},{"arcs":[[[599,600]],[[601,602]]],"type":"MultiPolygon","properties":{"name":"Brunei","ISO3":"BRN","formalName":"Negara Brunei Darussalam"},"id":"BRN"},{"arcs":[[603,604]],"type":"Polygon","properties":{"name":"Bhutan","ISO3":"BTN","formalName":"Kingdom of Bhutan"},"id":"BTN"},{"arcs":[[605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632]],"type":"Polygon","properties":{"name":"Botswana","ISO3":"BWA","formalName":"Republic of Botswana"},"id":"BWA"},{"arcs":[[633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661]],"type":"Polygon","properties":{"name":"Central African Republic","ISO3":"CAF","formalName":"Central African Republic"},"id":"CAF"},{"arcs":[[[662]],[[663]],[[664]],[[665]],[[666]],[[667]],[[668]],[[669]],[[670]],[[671,672]],[[673]],[[674]],[[675]],[[676]],[[677]],[[678]],[[679]],[[680]],[[681]],[[682]],[[683]],[[684]],[[685]],[[686]],[[687]],[[688]],[[689]],[[690]],[[691]],[[692]],[[693]],[[694]],[[695]],[[696]],[[697]],[[698]],[[699]],[[700]],[[701]],[[702]],[[703]],[[704]],[[705]],[[706]],[[707]],[[708]],[[709]],[[710]],[[711]],[[712]],[[713]],[[714]],[[715]],[[716]],[[717]],[[718]],[[719]],[[720]],[[721]],[[722]],[[723]],[[724]],[[725]],[[726]],[[727]],[[728]],[[729]],[[730]],[[731]],[[732]],[[733]],[[734]],[[735]],[[736]],[[737]],[[738]],[[739]],[[740]],[[741]],[[742]],[[743]],[[744]],[[745]],[[746]],[[747]],[[748]],[[749]],[[750]],[[751]],[[752]],[[753]],[[754]],[[755]],[[756]],[[757]],[[758]],[[759]],[[760]],[[761]],[[762]],[[763]],[[764]],[[765]],[[766]],[[767]],[[768]],[[769]],[[770]],[[771]],[[772,773,774,775]],[[776]],[[777]],[[778]],[[779]],[[780]],[[781]],[[782]],[[783]],[[784]],[[785]],[[786]],[[787]],[[788]],[[789]],[[790]],[[791]],[[792]],[[793]],[[794]],[[795]],[[796]],[[797]],[[798]],[[799]],[[800]],[[801]],[[802]],[[803]],[[804]],[[805]],[[806]],[[807]],[[808]],[[809]],[[810]],[[811]],[[812]],[[813]],[[814]],[[815]],[[816]],[[817]]],"type":"MultiPolygon","properties":{"name":"Canada","ISO3":"CAN","formalName":"Canada"},"id":"CAN"},{"arcs":[[-246,818,-244,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856]],"type":"Polygon","properties":{"name":"Switzerland","ISO3":"CHE","formalName":"Swiss Confederation"},"id":"CHE"},{"arcs":[[[857]],[[858]],[[859]],[[860]],[[861]],[[862]],[[863]],[[864]],[[865]],[[866]],[[867]],[[868]],[[869]],[[-143,870]],[[871]],[[872]],[[873]],[[874]],[[875]],[[876]],[[877]],[[878]],[[879]],[[880]],[[881]],[[882]],[[883]],[[884]],[[885]],[[886]],[[887]],[[888]],[[889]],[[890]],[[891]],[[892]],[[893]],[[894]],[[895]],[[896]],[[897]],[[898]],[[899]],[[900]],[[901]],[[902]],[[903]],[[904]],[[905]],[[906]],[[907]],[[908]],[[909]],[[910]],[[911]],[[912]],[[913]],[[914]],[[915]],[[916]],[[917]],[[918]],[[919]],[[920]],[[921]],[[922]],[[923]],[[924]],[[925]],[[926]],[[927]],[[928]],[[929]],[[930]],[[931]],[[932]],[[933]],[[934]],[[935]],[[936]],[[-158,937,938,-467,939,-465,940,-463,941,942,-460,943,944,-457,945,-455,946,-453]]],"type":"MultiPolygon","properties":{"name":"Chile","ISO3":"CHL","formalName":"Republic of Chile"},"id":"CHL"},{"arcs":[[[947]],[[948]],[[949]],[[950]],[[951]],[[952]],[[953]],[[954]],[[955]],[[956]],[[957]],[[958]],[[959]],[[960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,-605,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,-22,1017,-20,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068]]],"type":"MultiPolygon","properties":{"name":"China","ISO3":"CHN","formalName":"People's Republic of China"},"id":"CHN"},{"arcs":[[1069,1070,1071,-311,1072,-309,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124]],"type":"Polygon","properties":{"name":"Ivory Coast","ISO3":"CIV","formalName":"Republic of Ivory Coast"},"id":"CIV"},{"arcs":[[-661,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151]],"type":"Polygon","properties":{"name":"Cameroon","ISO3":"CMR","formalName":"Republic of Cameroon"},"id":"CMR"},{"arcs":[[1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,-285,1164,-283,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,-110,1184,-111,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,-659,1201,-657,1202,-655,1203,-653,1204]],"type":"Polygon","properties":{"name":"Democratic Republic of the Congo","ISO3":"COD","formalName":"Democratic Republic of the Congo"},"id":"COD"},{"arcs":[[-1201,1205,-1199,1206,-1197,1207,-1195,1208,-1193,1209,-1191,1210,1211,-1188,1212,-1186,-115,1213,-113,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,-1126,-660]],"type":"Polygon","properties":{"name":"Republic of Congo","ISO3":"COG","formalName":"Republic of Congo"},"id":"COG"},{"arcs":[[[1260]],[[1261]],[[1262,-596,1263,1264,1265,1266,1267]]],"type":"MultiPolygon","properties":{"name":"Colombia","ISO3":"COL","formalName":"Republic of Colombia"},"id":"COL"},{"arcs":[[[1268]],[[1269]],[[1270]]],"type":"MultiPolygon","properties":{"name":"Comoros","ISO3":"COM","formalName":"Union of the Comoros"},"id":"COM"},{"arcs":[[[1271]],[[1272]],[[1273]],[[1274]],[[1275]],[[1276]],[[1277]],[[1278]]],"type":"MultiPolygon","properties":{"name":"Cape Verde","ISO3":"CPV","formalName":"Republic of Cape Verde"},"id":"CPV"},{"arcs":[[1279,1280,1281,1282]],"type":"Polygon","properties":{"name":"Costa Rica","ISO3":"CRI","formalName":"Republic of Costa Rica"},"id":"CRI"},{"arcs":[[[1283]],[[1284]],[[1285]],[[1286]],[[1287]],[[1288]]],"type":"MultiPolygon","properties":{"name":"Cuba","ISO3":"CUB","formalName":"Republic of Cuba"},"id":"CUB"},{"arcs":[[1289]],"type":"Polygon","properties":{"name":"Curaçao","ISO3":"CUW","formalName":"Curaçao"},"id":"CUW"},{"arcs":[[1290]],"type":"Polygon","properties":{"name":"Northern Cyprus","ISO3":"CYN","formalName":"Turkish Republic of Northern Cyprus"},"id":"CYN"},{"arcs":[[[1291]],[[1292]]],"type":"MultiPolygon","properties":{"name":"Cyprus","ISO3":"CYP","formalName":"Republic of Cyprus"},"id":"CYP"},{"arcs":[[1293,1294,-272,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313]],"type":"Polygon","properties":{"name":"Czech Republic","ISO3":"CZE","formalName":"Czech Republic"},"id":"CZE"},{"arcs":[[[1314,1315,1316,1317]],[[1318]],[[1319]],[[1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,-1313,1331,-1311,1332,-1309,1333,1334,-1306,1335,-1304,1336,-1302,1337,-1300,1338,1339,-1297,1340,-271,1341,-269,1342,-267,1343,-265,1344,-263,1345,-261,1346,-259,1347,1348,-256,1349,-254,1350,1351,-251,1352,-249,1353,-247,-857,1354,-855,1355,-853,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,-287,1366,1367]]],"type":"MultiPolygon","properties":{"name":"Germany","ISO3":"DEU","formalName":"Federal Republic of Germany"},"id":"DEU"},{"arcs":[[1368,1369,1370,1371,1372]],"type":"Polygon","properties":{"name":"Djibouti","ISO3":"DJI","formalName":"Republic of Djibouti"},"id":"DJI"},{"arcs":[[1373]],"type":"Polygon","properties":{"name":"Dominica","ISO3":"DMA","formalName":"Commonwealth of Dominica"},"id":"DMA"},{"arcs":[[[1374]],[[1375]],[[1376]],[[1377]],[[1378]],[[1379]],[[1380]],[[1381]],[[1382]],[[-1368,1383]]],"type":"MultiPolygon","properties":{"name":"Denmark","ISO3":"DNK","formalName":"Kingdom of Denmark"},"id":"DNK"},{"arcs":[[1384,1385]],"type":"Polygon","properties":{"name":"Dominican Republic","ISO3":"DOM","formalName":"Dominican Republic"},"id":"DOM"},{"arcs":[[1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413]],"type":"Polygon","properties":{"name":"Algeria","ISO3":"DZA","formalName":"People's Democratic Republic of Algeria"},"id":"DZA"},{"arcs":[[[1414]],[[1415]],[[1416]],[[1417]],[[1418]],[[1419]],[[1420]],[[1421,1422,-1265]]],"type":"MultiPolygon","properties":{"name":"Ecuador","ISO3":"ECU","formalName":"Republic of Ecuador"},"id":"ECU"},{"arcs":[[1423,1424,1425,1426,1427,1428,1429]],"type":"Polygon","properties":{"name":"Egypt","ISO3":"EGY","formalName":"Arab Republic of Egypt"},"id":"EGY"},{"arcs":[[[1430]],[[1431,1432,-1372,1433,-1370,1434,1435,1436,1437,1438,1439,1440,1441,1442,1443]]],"type":"MultiPolygon","properties":{"name":"Eritrea","ISO3":"ERI","formalName":"State of Eritrea"},"id":"ERI"},{"arcs":[[[1444]],[[1445]],[[1446]],[[1447]],[[1448]],[[1449]],[[1450]],[[1451]],[[1452]],[[1453]],[[1454,-131,1455,-129,1456,-127,1457,1458,1459,1460]]],"type":"MultiPolygon","properties":{"name":"Spain","ISO3":"ESP","formalName":"Kingdom of Spain"},"id":"ESP"},{"arcs":[[[1461]],[[1462]],[[1463]],[[1464,1465,1466,1467]]],"type":"MultiPolygon","properties":{"name":"Estonia","ISO3":"EST","formalName":"Republic of Estonia"},"id":"EST"},{"arcs":[[-1369,1468,1469,1470,1471,1472,1473,1474,1475,1476,-1444,1477,-1442,1478,-1440,1479,1480,-1437,1481,-1435]],"type":"Polygon","properties":{"name":"Ethiopia","ISO3":"ETH","formalName":"Federal Democratic Republic of Ethiopia"},"id":"ETH"},{"arcs":[[[1482]],[[1483]],[[1484,1485,1486,1487]]],"type":"MultiPolygon","properties":{"name":"Finland","ISO3":"FIN","formalName":"Republic of Finland"},"id":"FIN"},{"arcs":[[[1488]],[[1489]],[[1490]],[[1491]],[[1492]],[[1493]],[[1494]]],"type":"MultiPolygon","properties":{"name":"Fiji","ISO3":"FJI","formalName":"Republic of Fiji"},"id":"FJI"},{"arcs":[[[1495]],[[1496]],[[-545,1497,1498,1499,1500,1501,1502,1503,1504,1505,1506,1507,1508,1509]],[[1510]],[[1511]],[[1512]],[[1513]],[[1514]],[[1515,-1358,1516,1517,-850,1518,-848,1519,-846,1520,1521,-843,1522,-841,1523,-839,1524,-837,1525,1526,1527,1528,1529,-1458,-134,1530,-132,-1455,1531,-293]]],"type":"MultiPolygon","properties":{"name":"France","ISO3":"FRA","formalName":"French Republic"},"id":"FRA"},{"arcs":[[[1532]],[[1533]],[[1534]],[[1535]],[[1536]],[[1537]],[[1538]],[[1539]],[[1540]],[[1541]],[[1542]],[[1543]],[[1544]],[[1545]],[[1546]],[[1547]],[[1548]],[[1549]],[[1550]],[[1551]]],"type":"MultiPolygon","properties":{"name":"Federated States of Micronesia","ISO3":"FSM","formalName":"Federated States of Micronesia"},"id":"FSM"},{"arcs":[[[1552]],[[1553,1554,-1129,1555,-1127,-1260,1556,1557,-1257,1558,-1255,1559,-1253,1560,-1251,1561,-1249,1562,-1247,1563,-1245,1564,-1243,1565,-1241,1566,-1239,1567,1568,-1236,1569,1570,-1233,1571,1572,-1230,1573,-1228,1574,-1226,1575,-1224,1576,-1222,1577,-1220,1578,-1218,1579,-1216,1580]]],"type":"MultiPolygon","properties":{"name":"Gabon","ISO3":"GAB","formalName":"Gabonese Republic"},"id":"GAB"},{"arcs":[[[1581]],[[1582]],[[1583,1584]],[[1585]],[[1586]],[[1587]],[[1588]],[[1589]],[[1590]],[[1591]],[[1592]],[[1593]],[[1594]],[[1595]],[[1596]],[[1597]]],"type":"MultiPolygon","properties":{"name":"United Kingdom","ISO3":"GBR","formalName":"United Kingdom of Great Britain and Northern Ireland"},"id":"GBR"},{"arcs":[[-278,-203,1598,1599,1600]],"type":"Polygon","properties":{"name":"Georgia","ISO3":"GEO","formalName":"Georgia"},"id":"GEO"},{"arcs":[[1601]],"type":"Polygon","properties":{"name":"Guernsey","ISO3":"GGY","formalName":"Bailiwick of Guernsey"},"id":"GGY"},{"arcs":[[1602,1603,-1087,1604,-1085,1605,-1083,1606,-1081,1607,-1079,1608,1609,-1076,1610,-1074,-308]],"type":"Polygon","properties":{"name":"Ghana","ISO3":"GHA","formalName":"Republic of Ghana"},"id":"GHA"},{"arcs":[[1611,-1121,1612,-1119,1613,-1117,1614,-1115,1615,-1113,1616,-1111,1617,-1109,1618,-1107,1619,1620,1621,1622,1623,1624,1625,1626,1627,1628,1629,1630,1631]],"type":"Polygon","properties":{"name":"Guinea","ISO3":"GIN","formalName":"Republic of Guinea"},"id":"GIN"},{"arcs":[[1632,1633]],"type":"Polygon","properties":{"name":"Gambia","ISO3":"GMB","formalName":"Republic of the Gambia"},"id":"GMB"},{"arcs":[[[1634]],[[1635]],[[1636]],[[1637]],[[1638,-1629,1639,1640,-1631]]],"type":"MultiPolygon","properties":{"name":"Guinea Bissau","ISO3":"GNB","formalName":"Republic of Guinea-Bissau"},"id":"GNB"},{"arcs":[[[-1554,1641,-1131]],[[1642]]],"type":"MultiPolygon","properties":{"name":"Equatorial Guinea","ISO3":"GNQ","formalName":"Republic of Equatorial Guinea"},"id":"GNQ"},{"arcs":[[[1643]],[[1644]],[[1645]],[[1646]],[[1647]],[[1648]],[[1649]],[[1650]],[[1651]],[[1652]],[[1653]],[[1654]],[[1655]],[[1656]],[[1657]],[[1658]],[[1659]],[[1660]],[[1661]],[[1662]],[[1663]],[[1664]],[[1665]],[[1666]],[[1667,1668,1669,-122,1670,-120,1671,-118,1672,-329,1673,-327,1674,-325]]],"type":"MultiPolygon","properties":{"name":"Greece","ISO3":"GRC","formalName":"Hellenic Republic"},"id":"GRC"},{"arcs":[[1675]],"type":"Polygon","properties":{"name":"Grenada","ISO3":"GRD","formalName":"Grenada"},"id":"GRD"},{"arcs":[[[1676]],[[1677]],[[1678]],[[1679]],[[1680]],[[1681]],[[1682]],[[1683]],[[1684]],[[1685]],[[1686]],[[1687]],[[1688]],[[1689]],[[1690]],[[1691]],[[1692]],[[1693]],[[1694]],[[1695]],[[1696]],[[1697]],[[1698]],[[1699]],[[1700]],[[1701]],[[1702]],[[1703]],[[1704]],[[1705]],[[1706]],[[1707]],[[1708]],[[1709]],[[1710]],[[1711]],[[1712]],[[1713]],[[1714]],[[1715]],[[1716]],[[1717]],[[1718]],[[1719]],[[1720]],[[1721]],[[1722]],[[1723]],[[1724]],[[1725]]],"type":"MultiPolygon","properties":{"name":"Greenland","ISO3":"GRL","formalName":"Greenland"},"id":"GRL"},{"arcs":[[-449,1726,1727,1728,1729,1730,1731,1732,1733,1734,1735,1736,1737,1738,1739,1740,1741,1742,1743,1744,1745,1746,1747,1748,1749,1750,1751,1752,1753,1754,1755,1756,1757]],"type":"Polygon","properties":{"name":"Guatemala","ISO3":"GTM","formalName":"Republic of Guatemala"},"id":"GTM"},{"arcs":[[-598,1758,1759,1760,1761,1762,1763,1764,1765,1766,1767,1768,1769,1770,1771,1772,1773,1774,1775]],"type":"Polygon","properties":{"name":"Guyana","ISO3":"GUY","formalName":"Co-operative Republic of Guyana"},"id":"GUY"},{"arcs":[[[1776]],[[1777,-963]]],"type":"MultiPolygon","properties":{"name":"Hong Kong S.A.R.","ISO3":"HKG","formalName":"Hong Kong Special Administrative Region, PRC"},"id":"HKG"},{"arcs":[[1778,1779,1780,-1730,1781,-1728,1782]],"type":"Polygon","properties":{"name":"Honduras","ISO3":"HND","formalName":"Republic of Honduras"},"id":"HND"},{"arcs":[[[-367,1783]],[[1784]],[[1785]],[[1786]],[[1787]],[[1788]],[[1789,-369,1790,1791,1792,1793,1794,1795,1796,1797,1798,1799,1800,1801,1802,1803,1804]]],"type":"MultiPolygon","properties":{"name":"Croatia","ISO3":"HRV","formalName":"Republic of Croatia"},"id":"HRV"},{"arcs":[[[1805]],[[-1385,1806]]],"type":"MultiPolygon","properties":{"name":"Haiti","ISO3":"HTI","formalName":"Republic of Haiti"},"id":"HTI"},{"arcs":[[1807,1808,1809,1810,1811,1812,-1805,1813,-1803,1814,-237,1815]],"type":"Polygon","properties":{"name":"Hungary","ISO3":"HUN","formalName":"Republic of Hungary"},"id":"HUN"},{"arcs":[[[1816]],[[1817]],[[1818]],[[1819]],[[1820,1821,1822,1823]],[[1824]],[[1825]],[[1826]],[[1827]],[[1828]],[[1829]],[[1830]],[[1831]],[[1832]],[[1833]],[[1834]],[[1835]],[[1836]],[[1837]],[[1838]],[[1839]],[[1840]],[[1841]],[[1842]],[[1843]],[[1844]],[[1845]],[[1846]],[[1847]],[[1848]],[[1849]],[[1850]],[[1851]],[[1852]],[[1853]],[[1854]],[[1855]],[[1856]],[[1857]],[[1858]],[[1859]],[[1860]],[[1861]],[[1862]],[[1863]],[[1864]],[[1865]],[[1866]],[[1867]],[[1868]],[[1869]],[[1870]],[[1871]],[[1872]],[[1873]],[[1874]],[[1875]],[[1876]],[[1877]],[[1878]],[[1879]],[[1880]],[[1881]],[[1882]],[[1883]],[[1884]],[[1885]],[[1886]],[[1887]],[[1888]],[[1889]],[[1890]],[[1891]],[[1892]],[[1893]],[[1894]],[[1895]],[[1896]],[[1897]],[[1898]],[[1899]],[[1900]],[[1901]],[[1902,1903]],[[1904]],[[1905]],[[1906]],[[1907]],[[1908]],[[1909]],[[1910]],[[1911]],[[1912]],[[1913]],[[1914]],[[1915]],[[1916]],[[1917]],[[1918]],[[1919]],[[1920]],[[1921]],[[1922]],[[1923]],[[1924]],[[1925]],[[1926]],[[1927]],[[1928]],[[1929]],[[1930]],[[1931]],[[1932]],[[1933]],[[1934]],[[1935]],[[1936,1937]],[[1938]],[[1939,1940]],[[1941]],[[1942]],[[1943]]],"type":"MultiPolygon","properties":{"name":"Indonesia","ISO3":"IDN","formalName":"Republic of Indonesia"},"id":"IDN"},{"arcs":[[1944]],"type":"Polygon","properties":{"name":"Isle of Man","ISO3":"IMN","formalName":""},"id":"IMN"},{"arcs":[[[1945]],[[1946]],[[1947]],[[1948]],[[1949]],[[1950]],[[1951]],[[1952]],[[1953]],[[1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,-989,-604,-988,1978,-321,1979,1980,1981,-1014]]],"type":"MultiPolygon","properties":{"name":"India","ISO3":"IND","formalName":"Republic of India"},"id":"IND"},{"arcs":[[[1982]],[[-1584,1983]]],"type":"MultiPolygon","properties":{"name":"Ireland","ISO3":"IRL","formalName":"Ireland"},"id":"IRL"},{"arcs":[[[1984]],[[-200,-277,1985,1986,-58,1987,-56,1988,-54,1989,-52,1990,1991,1992,1993,-273]]],"type":"MultiPolygon","properties":{"name":"Iran","ISO3":"IRN","formalName":"Islamic Republic of Iran"},"id":"IRN"},{"arcs":[[-1993,1994,1995,1996,1997,1998,1999,2000]],"type":"Polygon","properties":{"name":"Iraq","ISO3":"IRQ","formalName":"Republic of Iraq"},"id":"IRQ"},{"arcs":[[2001]],"type":"Polygon","properties":{"name":"Iceland","ISO3":"ISL","formalName":"Republic of Iceland"},"id":"ISL"},{"arcs":[[2002,2003,2004,2005,2006,2007,2008,2009,-1425,2010,2011,2012,2013,2014,2015,2016]],"type":"Polygon","properties":{"name":"Israel","ISO3":"ISR","formalName":"State of Israel"},"id":"ISR"},{"arcs":[[[2017]],[[2018]],[[-1527,2019,-835,2020,-833,2021,-831,2022,-829,2023,-827,2024,-825,2025,-823,2026,-821,2027,-242,2028,-240,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038]]],"type":"MultiPolygon","properties":{"name":"Italy","ISO3":"ITA","formalName":"Italian Republic"},"id":"ITA"},{"arcs":[[2039]],"type":"Polygon","properties":{"name":"Jamaica","ISO3":"JAM","formalName":"Jamaica"},"id":"JAM"},{"arcs":[[2040]],"type":"Polygon","properties":{"name":"Jersey","ISO3":"JEY","formalName":"Bailiwick of Jersey"},"id":"JEY"},{"arcs":[[2041,2042,2043,2044,2045,2046,2047,2048,2049,-2009,2050,2051,2052,2053,2054,2055,-2005,2056,-2003,2057,2058,2059,-1999]],"type":"Polygon","properties":{"name":"Jordan","ISO3":"JOR","formalName":"Hashemite Kingdom of Jordan"},"id":"JOR"},{"arcs":[[[2060]],[[2061]],[[2062]],[[2063]],[[2064]],[[2065]],[[2066]],[[2067]],[[2068]],[[2069]],[[2070]],[[2071]],[[2072]],[[2073]],[[2074]],[[2075]],[[2076]],[[2077]],[[2078]],[[2079]],[[2080]],[[2081]],[[2082]],[[2083]],[[2084]]],"type":"MultiPolygon","properties":{"name":"Japan","ISO3":"JPN","formalName":"Japan"},"id":"JPN"},{"arcs":[[[2085]],[[-1026,2086,2087,2088,2089,2090,2091,2092,2093,2094,2095,2096,2097,2098,2099,2100,2101,2102,2103,2104,2105,2106],[2107]]],"type":"MultiPolygon","properties":{"name":"Kazakhstan","ISO3":"KAZ","formalName":"Republic of Kazakhstan"},"id":"KAZ"},{"arcs":[[[2108]],[[-1473,2109,-1471,2110,2111,2112,2113,2114,2115,2116,2117,2118,2119,2120,2121,2122,2123,2124,2125,2126]]],"type":"MultiPolygon","properties":{"name":"Kenya","ISO3":"KEN","formalName":"Republic of Kenya"},"id":"KEN"},{"arcs":[[2127,-2089,2128,-2087,2129,-1024,2130,-1022,2131,-1020,2132,2133,2134,2135,2136,2137,2138,2139,2140,2141,2142,2143,2144,2145,2146,2147,2148,2149,2150,2151,2152,2153,2154,2155,2156,-2102,2157,2158,-2099,2159,-2097,2160,-2095,2161,-2093,2162,-2091],[2163],[2164]],"type":"Polygon","properties":{"name":"Kyrgyzstan","ISO3":"KGZ","formalName":"Kyrgyz Republic"},"id":"KGZ"},{"arcs":[[2165,2166,2167,2168,2169,2170]],"type":"Polygon","properties":{"name":"Cambodia","ISO3":"KHM","formalName":"Kingdom of Cambodia"},"id":"KHM"},{"arcs":[[2171]],"type":"Polygon","properties":{"name":"Kiribati","ISO3":"KIR","formalName":"Republic of Kiribati"},"id":"KIR"},{"arcs":[[2172]],"type":"Polygon","properties":{"name":"Saint Kitts and Nevis","ISO3":"KNA","formalName":"Federation of Saint Kitts and Nevis"},"id":"KNA"},{"arcs":[[[2173]],[[2174]],[[2175]],[[2176]],[[2177]],[[2178]],[[2179,2180]]],"type":"MultiPolygon","properties":{"name":"South Korea","ISO3":"KOR","formalName":"Republic of Korea"},"id":"KOR"},{"arcs":[[2181,-116,2182,2183,2184,2185,2186,2187,2188,2189,2190,2191]],"type":"Polygon","properties":{"name":"Kosovo","ISO3":"KOS","formalName":"Republic of Kosovo"},"id":"KOS"},{"arcs":[[[2192]],[[2193,-1996,2194]]],"type":"MultiPolygon","properties":{"name":"Kuwait","ISO3":"KWT","formalName":"State of Kuwait"},"id":"KWT"},{"arcs":[[2195,2196,2197,2198,2199,2200,2201,2202,2203,2204,2205,2206,2207,2208,2209,2210,2211,2212,2213,2214,2215,2216,2217,2218,2219,2220,2221,2222,2223,2224,2225,2226,-2170,2227,-2168,2228,2229,2230,2231,2232,2233,2234,2235,2236,2237,2238,2239,2240,2241,2242,2243,2244,2245,2246,2247,2248,2249,2250,2251,2252,2253,2254,2255,2256,2257,2258,2259,2260,2261,2262,2263,2264,2265,-986,2266,-984,2267,2268,-981,2269,2270,-978,2271,2272,-975,2273,-973,2274,-971,2275,-969,2276,-967]],"type":"Polygon","properties":{"name":"Laos","ISO3":"LAO","formalName":"Lao People's Democratic Republic"},"id":"LAO"},{"arcs":[[2277,2278,2279,2280,2281,2282,2283,2284,-2016,2285,2286,-2013,2287,2288,2289]],"type":"Polygon","properties":{"name":"Lebanon","ISO3":"LBN","formalName":"Lebanese Republic"},"id":"LBN"},{"arcs":[[-1106,2290,-1104,2291,-1102,2292,-1100,2293,2294,-1097,2295,-1095,2296,-1093,2297,-1091,2298,-1089,2299,2300,2301,2302,2303,2304,2305,2306,-1620]],"type":"Polygon","properties":{"name":"Liberia","ISO3":"LBR","formalName":"Republic of Liberia"},"id":"LBR"},{"arcs":[[2307,2308,-1387,2309,2310,2311,2312,2313,2314,-1429,2315,2316,2317,2318,2319,2320]],"type":"Polygon","properties":{"name":"Libya","ISO3":"LBY","formalName":"Libya"},"id":"LBY"},{"arcs":[[2321]],"type":"Polygon","properties":{"name":"Saint Lucia","ISO3":"LCA","formalName":"Saint Lucia"},"id":"LCA"},{"arcs":[[-819,-245]],"type":"Polygon","properties":{"name":"Liechtenstein","ISO3":"LIE","formalName":"Principality of Liechtenstein"},"id":"LIE"},{"arcs":[[2322]],"type":"Polygon","properties":{"name":"Sri Lanka","ISO3":"LKA","formalName":"Democratic Socialist Republic of Sri Lanka"},"id":"LKA"},{"arcs":[[2323,2324,2325,2326,2327,2328,2329,2330,2331,2332,2333,2334,2335,2336,2337,2338,2339,2340]],"type":"Polygon","properties":{"name":"Lesotho","ISO3":"LSO","formalName":"Kingdom of Lesotho"},"id":"LSO"},{"arcs":[[2341,2342,2343,-446,2344,2345,-443,2346,-441,2347,-439,2348,2349,-436,2350,2351,2352,2353]],"type":"Polygon","properties":{"name":"Lithuania","ISO3":"LTU","formalName":"Republic of Lithuania"},"id":"LTU"},{"arcs":[[2354,-1365,2355,-1363,2356,-1361,2357,-1359,-1516,-292,2358,-290,2359,-288]],"type":"Polygon","properties":{"name":"Luxembourg","ISO3":"LUX","formalName":"Grand Duchy of Luxembourg"},"id":"LUX"},{"arcs":[[-447,-2344,2360,-1467,2361,2362,2363,2364,2365,2366,2367,2368,2369,2370]],"type":"Polygon","properties":{"name":"Latvia","ISO3":"LVA","formalName":"Republic of Latvia"},"id":"LVA"},{"arcs":[[2371]],"type":"Polygon","properties":{"name":"Macao S.A.R","ISO3":"MAC","formalName":"Macao Special Administrative Region, PRC"},"id":"MAC"},{"arcs":[[-1406,2372,-1404,2373,-1402,2374,-1400,2375,-1398,2376,2377,-1395,2378,-1393,2379,2380]],"type":"Polygon","properties":{"name":"Morocco","ISO3":"MAR","formalName":"Kingdom of Morocco"},"id":"MAR"},{"arcs":[[2381,-1529]],"type":"Polygon","properties":{"name":"Monaco","ISO3":"MCO","formalName":"Principality of Monaco"},"id":"MCO"},{"arcs":[[2382,2383,2384,2385,2386,2387,2388,2389,2390,2391,2392,2393,2394,2395,2396,2397,2398,2399,2400,2401,2402,2403,2404,2405,2406,2407,2408,2409]],"type":"Polygon","properties":{"name":"Moldova","ISO3":"MDA","formalName":"Republic of Moldova"},"id":"MDA"},{"arcs":[[[2410]],[[2411]]],"type":"MultiPolygon","properties":{"name":"Madagascar","ISO3":"MDG","formalName":"Republic of Madagascar"},"id":"MDG"},{"arcs":[[[2412]],[[2413]]],"type":"MultiPolygon","properties":{"name":"Maldives","ISO3":"MDV"},"id":"MDV"},{"arcs":[[[2414]],[[2415]],[[2416]],[[2417]],[[2418]],[[2419]],[[2420]],[[2421]],[[2422]],[[2423]],[[2424,-450,-1758,2425,-1756,2426,-1754,2427,-1752,2428,-1750,2429,-1748,2430,-1746,2431,-1744,2432,-1742,2433,-1740,2434,-1738,2435,2436]]],"type":"MultiPolygon","properties":{"name":"Mexico","ISO3":"MEX","formalName":"United Mexican States"},"id":"MEX"},{"arcs":[[[2437]],[[2438]],[[2439]],[[2440]],[[2441]]],"type":"MultiPolygon","properties":{"name":"Marshall Islands","ISO3":"MHL"},"id":"MHL"},{"arcs":[[-330,-1673,-117,-2182,2442,2443]],"type":"Polygon","properties":{"name":"Macedonia","ISO3":"MKD","formalName":"Former Yugoslav Republic of Macedonia"},"id":"MKD"},{"arcs":[[2444,-312,-1072,2445,-1070,2446,-1124,2447,-1122,-1612,2448,2449,2450,2451,2452,2453,2454,2455,2456,-1389]],"type":"Polygon","properties":{"name":"Mali","ISO3":"MLI","formalName":"Republic of Mali"},"id":"MLI"},{"arcs":[[2457]],"type":"Polygon","properties":{"name":"Malta","ISO3":"MLT","formalName":"Republic of Malta"},"id":"MLT"},{"arcs":[[[2458]],[[2459]],[[2460]],[[2461]],[[2462]],[[2463]],[[2464]],[[2465]],[[2466]],[[2467]],[[-2266,2468,-2264,2469,-2262,2470,2471,2472,-319,-1979,-987]]],"type":"MultiPolygon","properties":{"name":"Myanmar","ISO3":"MMR","formalName":"Republic of the Union of Myanmar"},"id":"MMR"},{"arcs":[[-2183,-125,2473,-366,2474,-364,2475,2476,-361,2477,-359,2478,2479]],"type":"Polygon","properties":{"name":"Montenegro","ISO3":"MNE","formalName":"Montenegro"},"id":"MNE"},{"arcs":[[2480,2481,2482,2483,2484,2485,2486,2487,2488,2489,2490,2491,2492,2493,2494,2495,-1068,2496,-1066,2497,2498,-1063,2499,-1061,2500,-1059,2501,-1057,2502,2503,-1054,2504,-1052,2505,-1050,2506,-1048,2507,-1046,2508,-1044,2509,-1042,2510,-1040,2511,-1038,2512,-1036,2513,-1034,2514,-1032,2515,-1030,2516,-1028,2517,2518,2519,2520,2521,2522,2523,2524,2525,2526,2527,2528,2529,2530,2531,2532,2533,2534,2535]],"type":"Polygon","properties":{"name":"Mongolia","ISO3":"MNG","formalName":"Mongolia"},"id":"MNG"},{"arcs":[[[2536]],[[2537,2538,2539,2540,2541,2542,2543,2544,2545,2546,2547,2548,2549,2550,2551,2552,2553,2554,2555,2556,2557,2558,2559,2560,2561,2562,2563]]],"type":"MultiPolygon","properties":{"name":"Mozambique","ISO3":"MOZ","formalName":"Republic of Mozambique"},"id":"MOZ"},{"arcs":[[-2455,2564,-2453,2565,-2451,2566,2567,2568,2569,2570,2571,2572,-1390,-2457,2573]],"type":"Polygon","properties":{"name":"Mauritania","ISO3":"MRT","formalName":"Islamic Republic of Mauritania"},"id":"MRT"},{"arcs":[[2574]],"type":"Polygon","properties":{"name":"Mauritius","ISO3":"MUS","formalName":"Republic of Mauritius"},"id":"MUS"},{"arcs":[[-2562,2575,2576,2577,2578,2579,2580,2581,2582,2583,2584,2585,2586,2587,2588,2589,2590,2591,2592,2593]],"type":"Polygon","properties":{"name":"Malawi","ISO3":"MWI","formalName":"Republic of Malawi"},"id":"MWI"},{"arcs":[[[2594]],[[-1937,2595]],[[2596]],[[2597]],[[2598,2599]],[[-1941,2600,-603,2601,-600,2602]],[[2603]]],"type":"MultiPolygon","properties":{"name":"Malaysia","ISO3":"MYS","formalName":"Malaysia"},"id":"MYS"},{"arcs":[[2604,-633,2605,2606,2607,2608,2609,2610,2611,2612,2613,2614,2615,2616,2617,2618,2619,2620,2621,2622,-108,2623,2624,-105,2625,-103]],"type":"Polygon","properties":{"name":"Namibia","ISO3":"NAM","formalName":"Republic of Namibia"},"id":"NAM"},{"arcs":[[2626,2627,2628,2629,2630,2631,-305,-306,-2445,-1388,-2309]],"type":"Polygon","properties":{"name":"Niger","ISO3":"NER","formalName":"Republic of Niger"},"id":"NER"},{"arcs":[[[2632]],[[-2628,2633,-1151,2634,2635,-1148,2636,-1146,2637,-1144,2638,2639,-1141,2640,-1139,2641,-1137,2642,-1135,2643,-1133,2644,-301,2645,-299,2646,-297,2647,-295,-2632,2648,-2630,2649]]],"type":"MultiPolygon","properties":{"name":"Nigeria","ISO3":"NGA","formalName":"Federal Republic of Nigeria"},"id":"NGA"},{"arcs":[[2650,-1283,2651,-1779]],"type":"Polygon","properties":{"name":"Nicaragua","ISO3":"NIC","formalName":"Republic of Nicaragua"},"id":"NIC"},{"arcs":[[[2652]],[[2653]]],"type":"MultiPolygon","properties":{"name":"Netherlands","ISO3":"NLD"},"id":"NLD"},{"arcs":[[[2654]],[[2655]],[[2656]],[[2657]],[[2658]],[[2659]],[[2660]],[[2661]],[[2662]],[[2663]],[[2664]],[[2665]],[[2666]],[[2667]],[[2668]],[[2669]],[[2670]],[[2671]],[[2672]],[[2673]],[[2674]],[[2675]],[[2676]],[[2677]],[[2678]],[[2679]],[[2680]],[[2681,-1488,2682,2683]],[[2684]],[[2685]],[[2686]],[[2687]],[[2688]],[[2689]],[[2690]],[[2691]],[[2692]],[[2693]],[[2694]],[[2695]]],"type":"MultiPolygon","properties":{"name":"Norway","ISO3":"NOR","formalName":"Kingdom of Norway"},"id":"NOR"},{"arcs":[[2696,-1005,2697,-1003,2698,-1001,2699,-999,2700,-997,2701,-995,2702,-993,2703,-991,2704,-1977,2705,-1975,2706,-1973,2707,-1971,2708,-1969,2709,-1967,2710,-1965,2711,-1963,2712,-1961,2713,-1959,2714,-1957,2715,-1955,-1013,2716,-1011,2717,-1009,2718,-1007]],"type":"Polygon","properties":{"name":"Nepal","ISO3":"NPL","formalName":"Nepal"},"id":"NPL"},{"arcs":[[2719]],"type":"Polygon","properties":{"name":"Nauru","ISO3":"NRU","formalName":"Republic of Nauru"},"id":"NRU"},{"arcs":[[[2720]],[[2721]],[[2722]]],"type":"MultiPolygon","properties":{"name":"New Zealand","ISO3":"NZL","formalName":"New Zealand"},"id":"NZL"},{"arcs":[[[2723]],[[2724,2725,-137,2726]],[[-141]],[[-140,2727]]],"type":"MultiPolygon","properties":{"name":"Oman","ISO3":"OMN","formalName":"Sultanate of Oman"},"id":"OMN"},{"arcs":[[2728,-1981,2729,-1991,-51,2730,-49,2731,-47,2732,-45,2733,-43,2734,-41,2735,-39,2736,-37,2737,2738,-34,2739,-32,2740,-30,2741,-28,2742,-26,2743,-24,-1016]],"type":"Polygon","properties":{"name":"Pakistan","ISO3":"PAK","formalName":"Islamic Republic of Pakistan"},"id":"PAK"},{"arcs":[[[2744]],[[2745]],[[-1267,2746,-1281,2747]]],"type":"MultiPolygon","properties":{"name":"Panama","ISO3":"PAN","formalName":"Republic of Panama"},"id":"PAN"},{"arcs":[[-595,2748,-484,2749,-482,2750,2751,-479,2752,2753,-476,2754,-474,2755,-472,2756,2757,-469,2758,-939,2759,-1422,-1264]],"type":"Polygon","properties":{"name":"Peru","ISO3":"PER","formalName":"Republic of Peru"},"id":"PER"},{"arcs":[[[2760]],[[2761]],[[2762]],[[2763]],[[2764]],[[2765]],[[2766]],[[2767]],[[2768]],[[2769]],[[2770]],[[2771]],[[2772]],[[2773]],[[2774]],[[2775]],[[2776]],[[2777]],[[2778]],[[2779]],[[2780]],[[2781]],[[2782]],[[2783]],[[2784]],[[2785]],[[2786]],[[2787]],[[2788]],[[2789]],[[2790]],[[2791]],[[2792]],[[2793]],[[2794]],[[2795]],[[2796]]],"type":"MultiPolygon","properties":{"name":"Philippines","ISO3":"PHL","formalName":"Republic of the Philippines"},"id":"PHL"},{"arcs":[[2797]],"type":"Polygon","properties":{"name":"Palau","ISO3":"PLW","formalName":"Republic of Palau"},"id":"PLW"},{"arcs":[[[2798]],[[2799]],[[2800]],[[2801]],[[2802]],[[2803]],[[2804]],[[2805]],[[2806]],[[2807]],[[2808]],[[2809]],[[2810]],[[2811]],[[2812]],[[2813]],[[2814]],[[-1903,2815]],[[2816]],[[2817]],[[2818]],[[2819]]],"type":"MultiPolygon","properties":{"name":"Papua New Guinea","ISO3":"PNG","formalName":"Independent State of Papua New Guinea"},"id":"PNG"},{"arcs":[[-434,2820,2821,2822,2823,2824,2825,2826,2827,2828,2829,2830,2831,2832,2833,2834,2835,2836,-1294,2837,-1330,2838,-1328,2839,2840,-1325,2841,2842,-1322,2843,-1317,2844,-1315,2845,2846,-2354,2847,-2352]],"type":"Polygon","properties":{"name":"Poland","ISO3":"POL","formalName":"Republic of Poland"},"id":"POL"},{"arcs":[[2848,2849,-2180,2850,-961]],"type":"Polygon","properties":{"name":"North Korea","ISO3":"PRK","formalName":"Democratic People's Republic of Korea"},"id":"PRK"},{"arcs":[[[2851]],[[2852]],[[2853]],[[2854]],[[2855]],[[2856]],[[2857]],[[2858,-1460]]],"type":"MultiPolygon","properties":{"name":"Portugal","ISO3":"PRT","formalName":"Portuguese Republic"},"id":"PRT"},{"arcs":[[-575,2859,-573,2860,2861,-570,2862,-568,2863,-566,2864,-564,2865,-562,2866,2867,-559,2868,-557,2869,-555,2870,-553,2871,-197,2872,-195,2873,-193,2874,-191,2875,-189,2876,2877,-186,2878,-184,2879,-182,2880,-180,2881,2882,-177,2883,-175,2884,-173,2885,2886,-170,2887,-168,2888,-166,2889,-164,2890,-162,-451]],"type":"Polygon","properties":{"name":"Paraguay","ISO3":"PRY","formalName":"Republic of Paraguay"},"id":"PRY"},{"arcs":[[[-1424,2891,-2011]],[[-2055,2892,-2053,2893,-2007]]],"type":"MultiPolygon","properties":{"name":"Palestine","ISO3":"PSE","formalName":"West Bank and Gaza"},"id":"PSE"},{"arcs":[[2894,2895]],"type":"Polygon","properties":{"name":"Qatar","ISO3":"QAT","formalName":"State of Qatar"},"id":"QAT"},{"arcs":[[-343,2896,2897,2898,2899,2900,2901,2902,2903,2904,2905,2906,-1810,2907,2908,2909,-2409,2910,-2407,2911,-2405,2912,-2403,2913,-2401,2914,2915,-2398,2916,2917,-2395,2918,-2393,2919,-2391,2920,2921,-2388,2922,2923,2924,-2384,2925,2926,2927]],"type":"Polygon","properties":{"name":"Romania","ISO3":"ROU","formalName":"Romania"},"id":"ROU"},{"arcs":[[[2928]],[[2929]],[[2930]],[[2931]],[[2932]],[[2933]],[[2934]],[[2935]],[[2936]],[[2937]],[[2938]],[[2939]],[[2940]],[[2941]],[[-2847,2942,-2342]],[[2943]],[[2944]],[[2945]],[[2946]],[[2947]],[[2948]],[[2949]],[[2950]],[[2951]],[[2952]],[[2953]],[[2954]],[[2955]],[[2956]],[[2957]],[[2958]],[[2959]],[[2960]],[[2961]],[[2962]],[[2963]],[[2964]],[[2965]],[[2966]],[[2967]],[[2968]],[[2969]],[[2970]],[[2971]],[[2972]],[[2973]],[[2974]],[[2975]],[[2976]],[[2977]],[[2978]],[[2979]],[[2980]],[[2981]],[[2982]],[[2983]],[[2984]],[[2985]],[[2986]],[[2987]],[[-2849,-1069,-2496,2988,-2494,2989,-2492,2990,-2490,2991,-2488,2992,2993,-2485,2994,-2483,2995,2996,-2536,2997,-2534,2998,-2532,2999,3000,-2529,3001,-2527,3002,-2525,3003,-2523,3004,-2521,3005,-2519,3006,-1027,-2107,3007,-275,-1601,3008,3009,-410,3010,-408,3011,-406,3012,-404,3013,3014,-401,3015,-399,3016,-397,3017,3018,-394,3019,-392,3020,3021,-389,3022,-387,3023,-385,3024,-383,3025,-381,3026,3027,3028,-377,3029,-375,3030,-373,3031,3032,-370,-2371,3033,3034,-2368,3035,-2366,3036,3037,-2363,3038,-1465,3039,-1485,-2682,3040]],[[3041]],[[3042]],[[3043]],[[3044]],[[3045]],[[3046]],[[3047]],[[3048]],[[3049]],[[3050]],[[3051]],[[3052]],[[3053]],[[3054]],[[3055]],[[3056]],[[3057]],[[3058]],[[3059]],[[3060]],[[3061]],[[3062]],[[3063]],[[3064]],[[3065]],[[3066]],[[3067]],[[3068]],[[3069]],[[3070]],[[3071]]],"type":"MultiPolygon","properties":{"name":"Russia","ISO3":"RUS","formalName":"Russian Federation"},"id":"RUS"},{"arcs":[[3072,3073,3074,3075,3076,3077,-286,-1164,3078,-1162,3079,-1160,3080,3081]],"type":"Polygon","properties":{"name":"Rwanda","ISO3":"RWA","formalName":"Republic of Rwanda"},"id":"RWA"},{"arcs":[[[3082]],[[3083]],[[-2194,3084,-2895,3085,-138,-2726,3086,3087,-2049,3088,-2047,3089,3090,-2044,3091,3092,-1997]]],"type":"MultiPolygon","properties":{"name":"Saudi Arabia","ISO3":"SAU","formalName":"Kingdom of Saudi Arabia"},"id":"SAU"},{"arcs":[[3093,-1432,-1477,3094,3095,-638,3096,-636,3097,-634,3098,3099,3100,3101,3102,3103,3104,3105,3106,3107,-2320,3108,-2318,3109,3110,-1427]],"type":"Polygon","properties":{"name":"Sudan","ISO3":"SDN","formalName":"Republic of the Sudan"},"id":"SDN"},{"arcs":[[-1476,3111,-1474,-2127,3112,-1153,3113,-650,3114,-648,3115,-646,3116,-644,3117,-642,3118,-640,3119,-3095]],"type":"Polygon","properties":{"name":"South Sudan","ISO3":"SSD","formalName":"Republic of South Sudan"},"id":"SSD"},{"arcs":[[-2449,-1632,-1641,3120,-1634,3121,-2572,3122,-2570,3123,-2568,3124]],"type":"Polygon","properties":{"name":"Senegal","ISO3":"SEN","formalName":"Republic of Senegal"},"id":"SEN"},{"arcs":[[3125]],"type":"Polygon","properties":{"name":"Singapore","ISO3":"SGP","formalName":"Republic of Singapore"},"id":"SGP"},{"arcs":[[[3126]],[[3127]],[[3128]],[[3129]],[[3130]],[[3131]],[[3132]],[[3133]],[[3134]],[[3135]],[[3136]],[[3137]],[[3138]],[[3139]],[[3140]],[[3141]],[[3142]],[[3143]],[[3144]]],"type":"MultiPolygon","properties":{"name":"Solomon Islands","ISO3":"SLB","formalName":""},"id":"SLB"},{"arcs":[[[3145]],[[3146,-1625,3147,-1623,3148,-1621,-2307,3149,-2305,3150,-2303,3151,-2301,3152,-1627]]],"type":"MultiPolygon","properties":{"name":"Sierra Leone","ISO3":"SLE","formalName":"Republic of Sierra Leone"},"id":"SLE"},{"arcs":[[-1781,3153,-1736,3154,-1734,3155,-1732,3156]],"type":"Polygon","properties":{"name":"El Salvador","ISO3":"SLV","formalName":"Republic of El Salvador"},"id":"SLV"},{"arcs":[[3157]],"type":"Polygon","properties":{"name":"San Marino","ISO3":"SMR","formalName":"Republic of San Marino"},"id":"SMR"},{"arcs":[[-2111,-1470,3158]],"type":"Polygon","properties":{"name":"Somalia","ISO3":"SOM","formalName":"Federal Republic of Somalia"},"id":"SOM"},{"arcs":[[-358,-1790,3159,-1812,3160,-2906,3161,-2904,3162,-2902,3163,-2900,3164,-2898,3165,3166,3167,-340,3168,-338,3169,-336,3170,-334,3171,-332,3172,-2443,-2192,3173,-2190,3174,-2188,3175,-2186,3176,-2184,-2480,3177]],"type":"Polygon","properties":{"name":"Republic of Serbia","ISO3":"SRB","formalName":"Republic of Serbia"},"id":"SRB"},{"arcs":[[[3178]],[[3179]]],"type":"MultiPolygon","properties":{"name":"Sao Tome and Principe","ISO3":"STP","formalName":"Democratic Republic of São Tomé and Principe"},"id":"STP"},{"arcs":[[-1509,3180,-1507,3181,-1505,3182,3183,-1502,3184,-1500,3185,-1498,-544,-1776,3186,-1774,3187,-1772,3188,-1770,3189,3190,-1767,3191,-1765,3192,-1763,3193,-1761,3194]],"type":"Polygon","properties":{"name":"Suriname","ISO3":"SUR","formalName":"Republic of Suriname"},"id":"SUR"},{"arcs":[[3195,-1816,-236,-1295,-2837]],"type":"Polygon","properties":{"name":"Slovakia","ISO3":"SVK","formalName":"Slovak Republic"},"id":"SVK"},{"arcs":[[-1802,3196,-1800,3197,-1798,3198,-1796,3199,-1794,3200,-1792,3201,-2038,3202,-2036,3203,-2034,3204,3205,-2031,3206,-238,-1815]],"type":"Polygon","properties":{"name":"Slovenia","ISO3":"SVN","formalName":"Republic of Slovenia"},"id":"SVN"},{"arcs":[[[3207]],[[3208]],[[3209]],[[3210]],[[3211]],[[3212,-2683,-1487]]],"type":"MultiPolygon","properties":{"name":"Sweden","ISO3":"SWE","formalName":"Kingdom of Sweden"},"id":"SWE"},{"arcs":[[-2539,3213,3214,3215,3216,3217,3218]],"type":"Polygon","properties":{"name":"Swaziland","ISO3":"SWZ","formalName":"Kingdom of Swaziland"},"id":"SWZ"},{"arcs":[[3219]],"type":"Polygon","properties":{"name":"Sint Maarten","ISO3":"SXM","formalName":"Sint Maarten (Dutch part)"},"id":"SXM"},{"arcs":[[3220]],"type":"Polygon","properties":{"name":"Seychelles","ISO3":"SYC","formalName":"Republic of Seychelles"},"id":"SYC"},{"arcs":[[-2000,-2060,3221,-2058,-2017,3222,-2284,3223,-2282,3224,-2280,3225,-2278,3226,-2289,3227,3228]],"type":"Polygon","properties":{"name":"Syria","ISO3":"SYR","formalName":"Syrian Arab Republic"},"id":"SYR"},{"arcs":[[3229,-3107,3230,-3105,3231,-3103,3232,-3101,3233,-3099,-662,-1152,-2634,-2627,-2308]],"type":"Polygon","properties":{"name":"Chad","ISO3":"TCD","formalName":"Republic of Chad"},"id":"TCD"},{"arcs":[[-303,3234,-1603,-307]],"type":"Polygon","properties":{"name":"Togo","ISO3":"TGO","formalName":"Togolese Republic"},"id":"TGO"},{"arcs":[[[3235]],[[3236]],[[3237]],[[3238]],[[3239,-2259,3240,-2257,3241,-2255,3242,-2253,3243,-2251,3244,-2249,3245,-2247,3246,-2245,3247,3248,-2242,3249,-2240,3250,-2238,3251,-2236,3252,-2234,3253,-2232,3254,-2230,3255,-2167,3256,-2600,3257,-2472]]],"type":"MultiPolygon","properties":{"name":"Thailand","ISO3":"THA","formalName":"Kingdom of Thailand"},"id":"THA"},{"arcs":[[3258,-2141,3259,-2139,3260,-2137,3261,-2135,3262,-2133,-1019,3263,-18,3264,-16,3265,-14,3266,3267,3268,-10,3269,3270,-7,3271,-5,3272,-3,3273,-89,3274,-87,3275,-85,3276,-83,3277,-81,3278,-79,3279,-77,3280,-75,3281,-73,3282]],"type":"Polygon","properties":{"name":"Tajikistan","ISO3":"TJK","formalName":"Republic of Tajikistan"},"id":"TJK"},{"arcs":[[-69,3283,3284,-66,3285,-64,3286,-62,3287,3288,-59,-1987,3289,-2105,3290]],"type":"Polygon","properties":{"name":"Turkmenistan","ISO3":"TKM","formalName":"Turkmenistan"},"id":"TKM"},{"arcs":[[[3291,-1822]],[[-1824,3292]],[[3293]]],"type":"MultiPolygon","properties":{"name":"East Timor","ISO3":"TLS","formalName":"Democratic Republic of Timor-Leste"},"id":"TLS"},{"arcs":[[[3294]],[[3295]]],"type":"MultiPolygon","properties":{"name":"Tonga","ISO3":"TON","formalName":"Kingdom of Tonga"},"id":"TON"},{"arcs":[[[3296]],[[3297]]],"type":"MultiPolygon","properties":{"name":"Trinidad and Tobago","ISO3":"TTO","formalName":"Republic of Trinidad and Tobago"},"id":"TTO"},{"arcs":[[[3298]],[[-2314,3299,-2312,3300,-2310,-1414,3301,-1412,3302,-1410,3303,-1408,3304]]],"type":"MultiPolygon","properties":{"name":"Tunisia","ISO3":"TUN","formalName":"Republic of Tunisia"},"id":"TUN"},{"arcs":[[[3305]],[[-1668,3306,-323,3307]],[[-1599,-202,-274,-1994,-2001,-3229,3308]]],"type":"MultiPolygon","properties":{"name":"Turkey","ISO3":"TUR","formalName":"Republic of Turkey"},"id":"TUR"},{"arcs":[[3309]],"type":"Polygon","properties":{"name":"Tuvalu","ISO3":"TUV","formalName":"Tuvalu"},"id":"TUV"},{"arcs":[[3310]],"type":"Polygon","properties":{"name":"Taiwan","ISO3":"TWN","formalName":""},"id":"TWN"},{"arcs":[[[3311]],[[3312]],[[3313]],[[-2113,3314,-2563,-2594,3315,3316,3317,-1166,-282,3318,3319,-279,-3078,3320,-3076,3321,-3074,3322,3323,3324]]],"type":"MultiPolygon","properties":{"name":"United Republic of Tanzania","ISO3":"TZA","formalName":"United Republic of Tanzania"},"id":"TZA"},{"arcs":[[-3082,-1158,3325,-1156,3326,-1154,-3113,-2126,3327,-2124,3328,-2122,3329,-2120,3330,-2118,3331,-2116,3332,-2114,3333,-3324,3334]],"type":"Polygon","properties":{"name":"Uganda","ISO3":"UGA","formalName":"Republic of Uganda"},"id":"UGA"},{"arcs":[[3335,-2927,3336,-2410,3337,-2909,3338,-1808,-3196,-2836,3339,-2834,3340,-2832,3341,3342,-2829,3343,3344,-2826,3345,-2824,3346,-2822,3347,3348,-431,3349,-429,3350,-427,3351,-425,3352,-423,3353,3354,-420,3355,-418,3356,-416,3357,-414,3358,3359,-411,-3010]],"type":"Polygon","properties":{"name":"Ukraine","ISO3":"UKR","formalName":"Ukraine"},"id":"UKR"},{"arcs":[[-549,3360,-547,3361,-156,3362,-154,3363,-152,3364,-150,3365,-148,-551,3366]],"type":"Polygon","properties":{"name":"Uruguay","ISO3":"URY","formalName":"Oriental Republic of Uruguay"},"id":"URY"},{"arcs":[[[3367]],[[3368]],[[3369]],[[3370]],[[3371]],[[3372]],[[3373]],[[3374]],[[3375]],[[3376]],[[3377]],[[3378]],[[3379]],[[3380]],[[3381]],[[3382]],[[3383]],[[3384]],[[3385]],[[3386]],[[3387]],[[3388]],[[-673,3389,-2437,3390,-773]],[[3391]],[[3392]],[[3393]],[[3394]],[[3395]],[[3396]],[[3397]],[[3398]],[[3399]],[[3400]],[[3401]],[[3402]],[[3403]],[[3404]],[[3405]],[[3406]],[[3407]],[[3408]],[[3409]],[[3410]],[[3411]],[[3412]],[[3413]],[[3414]],[[3415]],[[3416]],[[3417]],[[3418]],[[3419]],[[3420]],[[3421]],[[3422]],[[3423]],[[3424]],[[3425]],[[3426]],[[3427]],[[3428]],[[3429]],[[3430]],[[3431]],[[3432]],[[3433]],[[3434]],[[3435]],[[3436]],[[3437]],[[3438]],[[3439]],[[3440]],[[3441]],[[3442]],[[3443]],[[3444]],[[3445]],[[3446]],[[3447]],[[3448]],[[3449]],[[-775,3450]]],"type":"MultiPolygon","properties":{"name":"United States of America","ISO3":"USA","formalName":"United States of America"},"id":"USA"},{"arcs":[[[-2164]],[[-2156,3451,-2154,3452,-2152,3453,-2150,3454,3455,-2147,3456,-2145,3457,-2143,3458,-3283,-72,3459,-70,-3291,-2104]]],"type":"MultiPolygon","properties":{"name":"Uzbekistan","ISO3":"UZB","formalName":"Republic of Uzbekistan"},"id":"UZB"},{"type":null,"properties":{"name":"Vatican","ISO3":"VAT","formalName":"State of the Vatican City"},"id":"VAT"},{"arcs":[[3460]],"type":"Polygon","properties":{"name":"Saint Vincent and the Grenadines","ISO3":"VCT","formalName":"Saint Vincent and the Grenadines"},"id":"VCT"},{"arcs":[[[3461]],[[3462]],[[3463]],[[3464]],[[3465]],[[-1759,-597,-1263,3466]]],"type":"MultiPolygon","properties":{"name":"Venezuela","ISO3":"VEN","formalName":"Bolivarian Republic of Venezuela"},"id":"VEN"},{"arcs":[[[3467]],[[3468]],[[3469]],[[3470]],[[3471,-2171,-2227,3472,3473,-2224,3474,-2222,3475,-2220,3476,-2218,3477,-2216,3478,-2214,3479,-2212,3480,-2210,3481,-2208,3482,-2206,3483,-2204,3484,-2202,3485,3486,-2199,3487,-2197,-965]]],"type":"MultiPolygon","properties":{"name":"Vietnam","ISO3":"VNM","formalName":"Socialist Republic of Vietnam"},"id":"VNM"},{"arcs":[[[3488]],[[3489]],[[3490]],[[3491]],[[3492]],[[3493]],[[3494]],[[3495]],[[3496]],[[3497]],[[3498]],[[3499]],[[3500]],[[3501]]],"type":"MultiPolygon","properties":{"name":"Vanuatu","ISO3":"VUT","formalName":"Republic of Vanuatu"},"id":"VUT"},{"arcs":[[[3502]],[[3503]]],"type":"MultiPolygon","properties":{"name":"Samoa","ISO3":"WSM","formalName":"Independent State of Samoa"},"id":"WSM"},{"arcs":[[[3504]],[[3505]],[[3506,-3087,-2725]]],"type":"MultiPolygon","properties":{"name":"Yemen","ISO3":"YEM","formalName":"Republic of Yemen"},"id":"YEM"},{"arcs":[[[3507]],[[-2540,3508,-3218,3509,-3216,3510,-3214,-2538,3511,-2622,3512,-2620,3513,-2618,3514,-2616,3515,-2614,3516,-2612,3517,-2610,3518,-2608,3519,3520,-631,3521,-629,3522,-627,3523,-625,3524,-623,3525,-621,3526,3527,-618,3528,-616,3529,-614,3530,-612,3531,-610,3532,-608,3533,3534],[-2337,3535,-2335,3536,-2333,3537,-2331,3538,-2329,3539,-2327,3540,-2325,3541,-2341,3542,-2339,3543]]],"type":"MultiPolygon","properties":{"name":"South Africa","ISO3":"ZAF","formalName":"Republic of South Africa"},"id":"ZAF"},{"arcs":[[3544,-2605,3545,-101,3546,3547,-98,3548,-96,3549,-94,3550,-92,3551,-90,-1184,3552,-1182,3553,-1180,3554,-1178,3555,3556,-1175,3557,-1173,3558,-1171,3559,-1169,3560,-1167,-3318,3561,-3316,-2593,3562,3563,-2590,3564,-2588,3565,3566,-2585,3567,-2583,3568,-2581,3569,-2579,3570,-2577,3571,3572,-2560,3573,-2558,3574]],"type":"Polygon","properties":{"name":"Zambia","ISO3":"ZMB","formalName":"Republic of Zambia"},"id":"ZMB"},{"arcs":[[-2556,3575,-2554,3576,3577,-2551,3578,-2549,3579,-2547,3580,-2545,3581,-2543,3582,-2541,-3535,3583,-606,-3545]],"type":"Polygon","properties":{"name":"Zimbabwe","ISO3":"ZWE","formalName":"Republic of Zimbabwe"},"id":"ZWE"}]}};
	var countriesJson = {
		type: type,
		transform: transform,
		arcs: arcs,
		objects: objects
	};

	function identity(x) {
	  return x;
	}

	function transform$1(transform) {
	  if (transform == null) return identity;
	  var x0,
	      y0,
	      kx = transform.scale[0],
	      ky = transform.scale[1],
	      dx = transform.translate[0],
	      dy = transform.translate[1];
	  return function(input, i) {
	    if (!i) x0 = y0 = 0;
	    var j = 2, n = input.length, output = new Array(n);
	    output[0] = (x0 += input[0]) * kx + dx;
	    output[1] = (y0 += input[1]) * ky + dy;
	    while (j < n) output[j] = input[j], ++j;
	    return output;
	  };
	}

	function reverse(array, n) {
	  var t, j = array.length, i = j - n;
	  while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
	}

	function feature(topology, o) {
	  return o.type === "GeometryCollection"
	      ? {type: "FeatureCollection", features: o.geometries.map(function(o) { return feature$1(topology, o); })}
	      : feature$1(topology, o);
	}

	function feature$1(topology, o) {
	  var id = o.id,
	      bbox = o.bbox,
	      properties = o.properties == null ? {} : o.properties,
	      geometry = object(topology, o);
	  return id == null && bbox == null ? {type: "Feature", properties: properties, geometry: geometry}
	      : bbox == null ? {type: "Feature", id: id, properties: properties, geometry: geometry}
	      : {type: "Feature", id: id, bbox: bbox, properties: properties, geometry: geometry};
	}

	function object(topology, o) {
	  var transformPoint = transform$1(topology.transform),
	      arcs = topology.arcs;

	  function arc(i, points) {
	    if (points.length) points.pop();
	    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
	      points.push(transformPoint(a[k], k));
	    }
	    if (i < 0) reverse(points, n);
	  }

	  function point(p) {
	    return transformPoint(p);
	  }

	  function line(arcs) {
	    var points = [];
	    for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
	    if (points.length < 2) points.push(points[0]); // This should never happen per the specification.
	    return points;
	  }

	  function ring(arcs) {
	    var points = line(arcs);
	    while (points.length < 4) points.push(points[0]); // This may happen if an arc has only two points.
	    return points;
	  }

	  function polygon(arcs) {
	    return arcs.map(ring);
	  }

	  function geometry(o) {
	    var type = o.type, coordinates;
	    switch (type) {
	      case "GeometryCollection": return {type: type, geometries: o.geometries.map(geometry)};
	      case "Point": coordinates = point(o.coordinates); break;
	      case "MultiPoint": coordinates = o.coordinates.map(point); break;
	      case "LineString": coordinates = line(o.arcs); break;
	      case "MultiLineString": coordinates = o.arcs.map(line); break;
	      case "Polygon": coordinates = polygon(o.arcs); break;
	      case "MultiPolygon": coordinates = o.arcs.map(polygon); break;
	      default: return null;
	    }
	    return {type: type, coordinates: coordinates};
	  }

	  return geometry(o);
	}

	// Computes the bounding box of the specified hash of GeoJSON objects.

	// TODO if quantized, use simpler Int32 hashing?

	// Given an array of arcs in absolute (but already quantized!) coordinates,

	// Extracts the lines and rings from the specified hash of geometry objects.

	// Given a hash of GeoJSON objects, returns a hash of GeoJSON geometry objects.

	var pi = Math.PI;

	var ColorPalette = {
	  colors: ['#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
	  noDataColor: '#D9D9D9'
	};

	var qdFormatter = function(d3) {
	  var currency = d3.format("$,");
	  var number = d3.format(",");
	  var currency2p = d3.format("$,.2r");
	  var number2p = d3.format(",.2r");

	  var _formatters = {};

	  _formatters.currencyFormat = function(d){
	    var rounded = Math.round(d);
	    if (Math.abs(rounded) < 10) return d3.format("$")(rounded);
	    return currency(rounded);
	  };
	  _formatters.numberFormat = function(d){
	    var rounded = Math.round(d);
	    if (Math.abs(rounded) < 10) return rounded;
	    return number(rounded);
	  };
	  _formatters.bigCurrencyFormat = function(d){
	    var abs = Math.abs(d);
	    if(abs/1e12 >= 1) {
	      return generateBigFormatter(d, "currency") + "t";
	    }
	    else if (abs/1e9 >= 1) {
	     return generateBigFormatter(d, "currency") + "b";
	    }else if(abs/1e6 >= 1){
	     return generateBigFormatter(d, "currency") + "m";
	    }else if(abs/1e3 >= 1){
	     return generateBigFormatter(d, "currency") + "k";
	    }else{
	     return _formatters.currencyFormat(d);
	    }
	  };
	  _formatters.bigNumberFormat = function(d){
	    var abs = Math.abs(d);
	    if(abs/1e12 >= 1) {
	      return generateBigFormatter(d, "number") + "t";
	    }
	    else if (abs/1e9 >= 1) {
	     return generateBigFormatter(d, "number") + "b";
	    }else if(abs/1e6 >= 1){
	     return generateBigFormatter(d, "number") + "m";
	    }else if(abs/1e3 >= 1){
	     return generateBigFormatter(d, "number") + "k";
	    }else{
	     return _formatters.numberFormat(d);
	    }
	  };

	  generateBigFormatter = function(d, type) {
	    var digitLength, absoluteDividedNumber, actualDividedNumber;
	    var abs = Math.abs(d);
	    if(abs/1e12 >= 1) {
	      absoluteDividedNumber = abs/1e12;
	    }
	    else if (abs/1e9 >= 1) {
	     absoluteDividedNumber = abs/1e9;
	    }else if(abs/1e6 >= 1){
	     absoluteDividedNumber = abs/1e6;
	    }else if(abs/1e3 >= 1){
	     absoluteDividedNumber = abs/1e3;
	    }
	    digitLength = String(Math.floor(absoluteDividedNumber)).length;
	    actualDividedNumber = (d < 0) ? -absoluteDividedNumber : absoluteDividedNumber;
	    if(digitLength === 1) digitLength = 2;
	    if(type === "currency")
	      return d3.format("$,." + String(digitLength) + "r")(actualDividedNumber);
	    else if(type === "number")
	      return d3.format(",." + String(digitLength) + "r")(actualDividedNumber);
	  };


	  return _formatters;
	};

	var qdFormatters = qdFormatter;

	function styleInject(css, ref) {
	  if ( ref === void 0 ) ref = {};
	  var insertAt = ref.insertAt;

	  if (!css || typeof document === 'undefined') { return; }

	  var head = document.head || document.getElementsByTagName('head')[0];
	  var style = document.createElement('style');
	  style.type = 'text/css';

	  if (insertAt === 'top') {
	    if (head.firstChild) {
	      head.insertBefore(style, head.firstChild);
	    } else {
	      head.appendChild(style);
	    }
	  } else {
	    head.appendChild(style);
	  }

	  if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	  } else {
	    style.appendChild(document.createTextNode(css));
	  }
	}

	var css = ".d3-choropleth-chart {\n  min-height: 300px;\n  height: auto;\n  margin: auto;\n  width: 100%;\n  background-color: white;\n  overflow: hidden; }\n  .d3-choropleth-chart svg {\n    overflow: visible; }\n    .d3-choropleth-chart svg path.country {\n      stroke: white; }\n  .d3-choropleth-chart .tooltip {\n    opacity: .8;\n    background-color: #0a0a0a;\n    color: #fefefe;\n    font-size: 80%;\n    padding: 12px;\n    padding: .75rem;\n    position: absolute;\n    z-index: 3;\n    max-width: 160px !important;\n    max-width: 10rem !important;\n    border-radius: 3px; }\n    .d3-choropleth-chart .tooltip .tooltip-title {\n      color: white;\n      font-size: 1.7em; }\n    .d3-choropleth-chart .tooltip .tooltip-text {\n      font-size: 1.3em; }\n  .d3-choropleth-chart .tooltip.hidden {\n    display: none; }\n  .d3-choropleth-chart .tooltip:before {\n    content: none; }\n  .d3-choropleth-chart .zoom-controls-container {\n    position: absolute;\n    right: 30px;\n    top: 10px;\n    color: #B60835; }\n    .d3-choropleth-chart .zoom-controls-container .reset-button {\n      float: left;\n      margin-right: 15px;\n      background: white;\n      padding: 0px 4px;\n      cursor: pointer;\n      font-size: .9em;\n      margin-top: 5px;\n      line-height: 1.5em; }\n      .d3-choropleth-chart .zoom-controls-container .reset-button:hover {\n        background: #ededed; }\n    .d3-choropleth-chart .zoom-controls-container .reset-button {\n      text-decoration: underline;\n      background-color: white;\n      opacity: .5; }\n    .d3-choropleth-chart .zoom-controls-container .zoom-buttons {\n      float: right;\n      font-weight: 600;\n      font-size: 1.5em;\n      text-align: center; }\n      .d3-choropleth-chart .zoom-controls-container .zoom-buttons .zoom-button {\n        background: #dce8f8;\n        padding: 0px 10px;\n        line-height: 1.5em;\n        cursor: pointer; }\n        .d3-choropleth-chart .zoom-controls-container .zoom-buttons .zoom-button:hover {\n          background: #d2dce9; }\n      .d3-choropleth-chart .zoom-controls-container .zoom-buttons #zoom-out {\n        border-top: 1px solid white;\n        border-bottom-left-radius: 2px;\n        border-bottom-right-radius: 2px; }\n      .d3-choropleth-chart .zoom-controls-container .zoom-buttons #zoom-in {\n        border-top-left-radius: 2px;\n        border-top-right-radius: 2px; }\n  .d3-choropleth-chart .legend .legend-title {\n    font-size: .8em;\n    font-weight: 600;\n    text-transform: uppercase; }\n  .d3-choropleth-chart .legend .key-text {\n    font-size: .8em; }\n";
	styleInject(css);

	var formatters = qdFormatters(d3$1);
	var countriesTopoJson = feature(countriesJson, countriesJson.objects.countries).features;

	function World (parentId) {

	  var chart = ChoroplethGenerator(parentId).topojson(countriesTopoJson).colorPalette(ColorPalette).numberFormatter(formatters.bigCurrencyFormat);

	  return chart;
	}

	var data = [
	  { "name": "AFG", "value": 20 },
	  { "name": "PAK", "value": 40 },
	  { "name": "IRQ", "value": 80 },
	  { "name": "ALB", "value": 200 },
	  { "name": "MNG", "value": 100 },
	  { "name": "COL", "value": 60 },
	  { "name": "ARG", "value": 150 }
	]
	;

	World('demo-chart').data(data).draw();

})));