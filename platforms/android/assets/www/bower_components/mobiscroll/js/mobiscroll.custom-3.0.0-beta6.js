
var mobiscroll = mobiscroll || {};
(function(e, b, c) {
    var n = {
            "column-count": 1,
			columns: 1,
			"font-weight": 1,
			"line-height": 1,
			opacity: 1,
			"z-index": 1,
			zoom: 1
        },
        p = {
            'readonly': 'readOnly'
        },
        j = [],
        f = Array.prototype.slice;

    function d(a) {
		
        return typeof a === (false ? "" : "function");
    }

    function h(a) {
        return typeof a === (true ? "object" : "");
    }

    function k(a) {
        return typeof a.length == (true ? 'number' : "");
    }

    function l(a) {
        return a.replace(/-+(.)?/g, function(b, a) {
            return a ? a.toUpperCase() : '';
        });
    }

    function m(e, d, f) {
        for (var b in d) {
            if (f && (a.isPlainObject(d[b]) || a.isArray(d[b]))) {
                if (a.isPlainObject(d[b]) && !a.isPlainObject(e[b]) || a.isArray(d[b]) && !a.isArray(e[b])) {
                    e[b] = {};
                }
                m(e[b], d[b], f);
            } else if (d[b] !== c) {
                e[b] = d[b];
            }
        }
    }

    function g(a) {
        return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function o(b, a) {
        return typeof a == "number" && !n[g(b)] ? a + "px" : a;
    }
    var i = function() {
        var i = function(c) {
            var d = this,
                b = 0;
            for (b = 0; b < c.length; b++) {
                d[b] = c[b];
            }
            d.length = c.length;
            return a(this);
        };
        var a = function(c, k) {
            var h = [],
                f = 0;
            if (c && !k) {
                if (c instanceof i) {
                    return c;
                }
            }
            if (d(c)) {
                return a(b).ready(c);
            }
            if (c) {
                if (typeof c === 'string') {
                    var l, m, g;
                    c = g = c.trim();
                    if (g.indexOf('<') >= 0 && g.indexOf('>') >= 0) {
                        var j = 'div';
                        if (g.indexOf('<li') === 0) {
                            j = 'ul';
                        }
                        if (g.indexOf('<tr') === 0) {
                            j = 'tbody';
                        }
                        if (g.indexOf('<td') === 0 || g.indexOf('<th') === 0) {
                            j = 'tr';
                        }
                        if (g.indexOf('<tbody') === 0) {
                            j = 'table';
                        }
                        if (g.indexOf('<option') === 0) {
                            j = 'select';
                        }
                        m = b.createElement(j);
                        m.innerHTML = g;
                        for (f = 0; f < m.childNodes.length; f++) {
                            h.push(m.childNodes[f]);
                        }
                    } else {
                        if (!k && c[0] === '#' && !c.match(/[ .<>:~]/)) {
                            l = [b.getElementById(c.split('#')[1])];
                        } else {
                            if (k instanceof i) {
                                k = k[0];
                            }
                            l = (k || b).querySelectorAll(c);
                        }
                        for (f = 0; f < l.length; f++) {
                            if (l[f]) {
                                h.push(l[f]);
                            }
                        }
                    }
                } else if (c.nodeType || c === e || c === b) {
                    h.push(c);
                } else if (c.length > 0 && c[0].nodeType) {
                    for (f = 0; f < c.length; f++) {
                        h.push(c[f]);
                    }
                } else if (a.isArray(c)) {
                    h = c;
                }
            }
            return new i(h);
        };
        i.prototype = {
            ready: function(c) {
                if (/complete|loaded|interactive/.test(b.readyState) && b.body) {
                    c(a);
                } else {
                    b.addEventListener('DOMContentLoaded', function() {
                        c(a);
                    }, false);
                }
                return this;
            },
            concat: j.concat,
            empty: function() {
                return this.each(function() {
                    this.innerHTML = '';
                });
            },
            map: function(b) {
                return a(a.map(this, function(a, c) {
                    return b.call(a, c, a);
                }));
            },
            slice: function() {
                return a(f.apply(this, arguments));
            },
            addClass: function(d) {
                if (typeof d === 'undefined') {
                    return this;
                }
                var c = d.split(' ');
                for (var a = 0; a < c.length; a++) {
                    for (var b = 0; b < this.length; b++) {
                        if (typeof this[b].classList !== 'undefined' && c[a] !== '') {
                            this[b].classList.add(c[a]);
                        }
                    }
                }
                return this;
            },
            removeClass: function(d) {
                var c = d.split(' ');
                for (var a = 0; a < c.length; a++) {
                    for (var b = 0; b < this.length; b++) {
                        if (typeof this[b].classList !== 'undefined' && c[a] !== '') {
                            this[b].classList.remove(c[a]);
                        }
                    }
                }
                return this;
            },
            hasClass: function(a) {
                return this[0] ? this[0].classList.contains(a) : false;
            },
            toggleClass: function(d) {
                var c = d.split(' ');
                for (var b = 0; b < c.length; b++) {
                    for (var a = 0; a < this.length; a++) {
                        if (typeof this[a].classList !== 'undefined') {
                            this[a].classList.toggle(c[b]);
                        }
                    }
                }
                return this;
            },
            closest: function(d, e) {
                var b = this[0],
                    c = false;
                if (h(d)) {
                    c = a(d);
                }
                while (b && !(c ? c.indexOf(b) >= 0 : a.matches(b, d))) {
                    b = b !== e && b.nodeType !== b.DOCUMENT_NODE && b.parentNode;
                }
                return a(b);
            },
            attr: function(a, f) {
                var e;
                if (arguments.length === 1 && typeof a === 'string' && this.length) {
                    e = this[0].getAttribute(a);
                    return this[0] && (e || e === '') ? e : c;
                } else {
                    for (var b = 0; b < this.length; b++) {
                        if (arguments.length === 2) {
                            this[b].setAttribute(a, f);
                        } else {
                            for (var d in a) {
                                this[b][d] = a[d];
                                this[b].setAttribute(d, a[d]);
                            }
                        }
                    }
                    return this;
                }
            },
            removeAttr: function(b) {
                for (var a = 0; a < this.length; a++) {
                    this[a].removeAttribute(b);
                }
                return this;
            },
            prop: function(a, d) {
                a = p[a] || a;
                if (arguments.length === 1 && typeof a === 'string') {
                    return this[0] ? this[0][a] : c;
                } else {
                    for (var b = 0; b < this.length; b++) {
                        this[b][a] = d;
                    }
                    return this;
                }
            },
            val: function(d) {
                if (typeof d === 'undefined') {
                    if (this.length && this[0].multiple) {
                        return a.map(this.find('option:checked'), function(a) {
                            return a.value;
                        });
                    }
                    return this[0] ? this[0].value : c;
                }
                if (this.length && this[0].multiple) {
                    a.each(this[0].options, function() {
                        this.selected = d.indexOf(this.value) != -1;
                    });
                } else {
                    for (var b = 0; b < this.length; b++) {
                        this[b].value = d;
                    }
                }
                return this;
            },
            on: function(k, g, f, h) {
                var e = k.split(' '),
                    c, b;

                function i(e) {
                    var b, c, d = e.target;
                    if (a(d).is(g)) {
                        f.call(d, e);
                    } else {
                        c = a(d).parents();
                        for (b = 0; b < c.length; b++) {
                            if (a(c[b]).is(g)) {
                                f.call(c[b], e);
                            }
                        }
                    }
                }

                function j(a, e, c, d) {
                    var b = e.split('.');
                    if (!a.DomNameSpaces) {
                        a.DomNameSpaces = [];
                    }
                    a.DomNameSpaces.push({
                        namespace: b[1],
                        event: b[0],
                        listener: c,
                        capture: d
                    });
                    a.addEventListener(b[0], c, d);
                }
                for (c = 0; c < this.length; c++) {
                    if (d(g) || g === false) {
                        if (d(g)) {
                            h = f || false;
                            f = g;
                        }
                        for (b = 0; b < e.length; b++) {
                            if (e[b].indexOf('.') != -1) {
                                j(this[c], e[b], f, h);
                            } else {
                                this[c].addEventListener(e[b], f, h);
                            }
                        }
                    } else {
                        for (b = 0; b < e.length; b++) {
                            if (!this[c].DomLiveListeners) {
                                this[c].DomLiveListeners = [];
                            }
                            this[c].DomLiveListeners.push({
                                listener: f,
                                liveListener: i
                            });
                            if (e[b].indexOf('.') != -1) {
                                j(this[c], e[b], i, h);
                            } else {
                                this[c].addEventListener(e[b], i, h);
                            }
                        }
                    }
                }
                return this;
            },
            off: function(k, h, f, i) {
                var e, c, a, g, b = this;

                function j(h) {
                    var a, c, d, e = h.split('.'),
                        f = e[0],
                        g = e[1];
                    for (a = 0; a < b.length; ++a) {
                        if (b[a].DomNameSpaces) {
                            for (c = 0; c < b[a].DomNameSpaces.length; ++c) {
                                d = b[a].DomNameSpaces[c];
                                if (d.namespace == g && (d.event == f || !f)) {
                                    b[a].removeEventListener(d.event, d.listener, d.capture);
                                    d.removed = true;
                                }
                            }
                            for (c = b[a].DomNameSpaces.length - 1; c >= 0; --c) {
                                if (b[a].DomNameSpaces[c].removed) {
                                    b[a].DomNameSpaces.splice(c, 1);
                                }
                            }
                        }
                    }
                }
                e = k.split(' ');
                for (c = 0; c < e.length; c++) {
                    for (a = 0; a < this.length; a++) {
                        if (d(h) || h === false) {
                            if (d(h)) {
                                i = f || false;
                                f = h;
                            }
                            if (e[c].indexOf('.') === 0) {
                                j(e[c].substr(1), f, i);
                            } else {
                                this[a].removeEventListener(e[c], f, i);
                            }
                        } else {
                            if (this[a].DomLiveListeners) {
                                for (g = 0; g < this[a].DomLiveListeners.length; g++) {
                                    if (this[a].DomLiveListeners[g].listener === f) {
                                        this[a].removeEventListener(e[c], this[a].DomLiveListeners[g].liveListener, i);
                                    }
                                }
                            }
                            if (this[a].DomNameSpaces && this[a].DomNameSpaces.length && e[c]) {
                                j(e[c]);
                            }
                        }
                    }
                }
                return this;
            },
            trigger: function(g, f) {
                var d = g.split(' ');
                for (var c = 0; c < d.length; c++) {
                    for (var e = 0; e < this.length; e++) {
                        var a;
                        try {
                            a = new CustomEvent(d[c], {
                                detail: f,
                                bubbles: true,
                                cancelable: true
                            });
                        } catch (e) {
                            a = b.createEvent('Event');
                            a.initEvent(d[c], true, true);
                            a.detail = f;
                        }
                        this[e].dispatchEvent(a);
                    }
                }
                return this;
            },
            width: function(a) {
                if (a !== c) {
                    return this.css('width', a);
                }
                if (this[0] === e) {
                    return e.innerWidth;
                } else if (this[0] === b) {
                    return b.documentElement.scrollWidth;
                } else {
                    return this.length > 0 ? parseFloat(this.css('width')) : null;
                }
            },
            height: function(f) {
                if (f !== c) {
                    return this.css('height', f);
                }
                if (this[0] === e) {
                    return e.innerHeight;
                } else if (this[0] === b) {
                    var d = b.body,
                        a = b.documentElement;
                    return Math.max(d.scrollHeight, d.offsetHeight, a.clientHeight, a.scrollHeight, a.offsetHeight);
                } else {
                    return this.length > 0 ? parseFloat(this.css('height')) : null;
                }
            },
            innerWidth: function() {
                var b = this;
                if (this.length > 0) {
                    if (this[0].innerWidth) {
                        return this[0].innerWidth;
                    } else {
                        var a = this[0].offsetWidth,
                            c = ['left', 'right'];
                        c.forEach(function(c) {
                            a -= parseInt(b.css(l('border-' + c + '-width')) || 0, 10);
                        });
                        return a;
                    }
                }
            },
            innerHeight: function() {
                var b = this;
                if (this.length > 0) {
                    if (this[0].innerHeight) {
                        return this[0].innerHeight;
                    } else {
                        var a = this[0].offsetHeight,
                            c = ['top', 'bottom'];
                        c.forEach(function(c) {
                            a -= parseInt(b.css(l('border-' + c + '-width')) || 0, 10);
                        });
                        return a;
                    }
                }
            },
            offset: function() {
                if (this.length > 0) {
                    var a = this[0],
                        c = a.getBoundingClientRect(),
                        d = b.body,
                        f = a.clientTop || d.clientTop || 0,
                        g = a.clientLeft || d.clientLeft || 0,
                        h = e.pageYOffset || a.scrollTop,
                        i = e.pageXOffset || a.scrollLeft;
                    return {
                        top: c.top + h - f,
                        left: c.left + i - g
                    };
                }
            },
            hide: function() {
                for (var a = 0; a < this.length; a++) {
                    this[a].style.display = 'none';
                }
                return this;
            },
            show: function() {
                for (var a = 0; a < this.length; a++) {
                    if (this[a].style.display == "none") {
                        this[a].style.display = '';
                    }
                    if (getComputedStyle(this[a], '').getPropertyValue("display") == "none") {
                        this[a].style.display = 'block';
                    }
                }
                return this;
            },
            clone: function() {
                return this.map(function() {
                    return this.cloneNode(true);
                });
            },
            styles: function() {
                return this[0] ? e.getComputedStyle(this[0], null) : c;
            },
            css: function(a, f) {
                var c, b, d = this[0],
                    e = '';
                if (arguments.length < 2) {
                    if (!d) {
                        return;
                    }
                    if (typeof a === 'string') {
                        return d.style[a] || getComputedStyle(d, '').getPropertyValue(a);
                    }
                }
                if (typeof a === 'string') {
                    if (!f && f !== 0) {
                        this.each(function() {
                            this.style.removeProperty(g(a));
                        });
                    } else {
                        e = g(a) + ":" + o(a, f);
                    }
                } else {
                    for (b in a) {
                        if (!a[b] && a[b] !== 0) {
                            for (c = 0; c < this.length; c++) {
                                this[c].style.removeProperty(g(b));
                            }
                        } else {
                            e += g(b) + ':' + o(b, a[b]) + ';';
                        }
                    }
                }
                return this.each(function() {
                    this.style.cssText += ';' + e;
                });
            },
            each: function(b) {
                for (var a = 0; a < this.length; a++) {
                    if (b.apply(this[a], [a, this[a]]) === false) {
                        break;
                    }
                }
                return this;
            },
            filter: function(e) {
                var c = [];
                for (var b = 0; b < this.length; b++) {
                    if (d(e)) {
                        if (e.call(this[b], b, this[b])) {
                            c.push(this[b]);
                        }
                    } else if (a.matches(this[b], e)) {
                        c.push(this[b]);
                    }
                }
                return new i(c);
            },
            html: function(b) {
                if (typeof b === 'undefined') {
                    return this[0] ? this[0].innerHTML : c;
                } else {
                    this.empty();
                    for (var a = 0; a < this.length; a++) {
                        this[a].innerHTML = b;
                    }
                    return this;
                }
            },
            text: function(b) {
                if (typeof b === 'undefined') {
                    return this[0] ? this[0].textContent.trim() : null;
                } else {
                    for (var a = 0; a < this.length; a++) {
                        this[a].textContent = b;
                    }
                    return this;
                }
            },
            is: function(b) {
                return this.length > 0 && a.matches(this[0], b);
            },
            not: function(b) {
                var g = [];
                if (d(b) && b.call !== c) {
                    this.each(function(a) {
                        if (!b.call(this, a)) {
                            g.push(this);
                        }
                    });
                } else {
                    var e = typeof b == 'string' ? this.filter(b) : k(b) && d(b.item) ? f.call(b) : a(b);
                    if (h(e)) {
                        e = a.map(e, function(a) {
                            return a;
                        });
                    }
                    this.each(function(b, a) {
                        if (e.indexOf(a) < 0) {
                            g.push(a);
                        }
                    });
                }
                return a(g);
            },
            indexOf: function(b) {
                for (var a = 0; a < this.length; a++) {
                    if (this[a] === b) {
                        return a;
                    }
                }
            },
            index: function(b) {
                return b ? this.indexOf(a(b)[0]) : this.parent().children().indexOf(this[0]);
            },
            get: function(a) {
                return a === c ? f.call(this) : this[a >= 0 ? a : a + this.length];
            },
            eq: function(a) {
                if (typeof a === 'undefined') {
                    return this;
                }
                var b = this.length,
                    c;
                if (a > b - 1) {
                    return new i([]);
                }
                if (a < 0) {
                    c = b + a;
                    return c < 0 ? new i([]) : new i([this[c]]);
                }
                return new i([this[a]]);
            },
            append: function(a) {
                var c, d;
                for (c = 0; c < this.length; c++) {
                    if (typeof a === 'string') {
                        var e = b.createElement('div');
                        e.innerHTML = a;
                        while (e.firstChild) {
                            this[c].appendChild(e.firstChild);
                        }
                    } else if (a instanceof i) {
                        for (d = 0; d < a.length; d++) {
                            this[c].appendChild(a[d]);
                        }
                    } else {
                        this[c].appendChild(a);
                    }
                }
                return this;
            },
            appendTo: function(b) {
                a(b).append(this);
                return this;
            },
            prepend: function(d) {
                var a, c;
                for (a = 0; a < this.length; a++) {
                    if (typeof d === 'string') {
                        var e = b.createElement('div');
                        e.innerHTML = d;
                        for (c = e.childNodes.length - 1; c >= 0; c--) {
                            this[a].insertBefore(e.childNodes[c], this[a].childNodes[0]);
                        }
                    } else if (d instanceof i) {
                        for (c = 0; c < d.length; c++) {
                            this[a].insertBefore(d[c], this[a].childNodes[0]);
                        }
                    } else {
                        this[a].insertBefore(d, this[a].childNodes[0]);
                    }
                }
                return this;
            },
            prependTo: function(b) {
                a(b).prepend(this);
                return this;
            },
            insertBefore: function(e) {
                var b = a(e);
                for (var c = 0; c < this.length; c++) {
                    if (b.length === 1) {
                        b[0].parentNode.insertBefore(this[c], b[0]);
                    } else if (b.length > 1) {
                        for (var d = 0; d < b.length; d++) {
                            b[d].parentNode.insertBefore(this[c].cloneNode(true), b[d]);
                        }
                    }
                }
                return this;
            },
            insertAfter: function(e) {
                var b = a(e);
                for (var c = 0; c < this.length; c++) {
                    if (b.length === 1) {
                        b[0].parentNode.insertBefore(this[c], b[0].nextSibling);
                    } else if (b.length > 1) {
                        for (var d = 0; d < b.length; d++) {
                            b[d].parentNode.insertBefore(this[c].cloneNode(true), b[d].nextSibling);
                        }
                    }
                }
                return this;
            },
            next: function(b) {
                if (this.length > 0) {
                    if (b) {
                        if (this[0].nextElementSibling && a(this[0].nextElementSibling).is(b)) {
                            return new i([this[0].nextElementSibling]);
                        } else {
                            return new i([]);
                        }
                    } else {
                        if (this[0].nextElementSibling) {
                            return new i([this[0].nextElementSibling]);
                        } else {
                            return new i([]);
                        }
                    }
                } else {
                    return new i([]);
                }
            },
            nextAll: function(e) {
                var d = [],
                    b = this[0];
                if (!b) {
                    return new i([]);
                }
                while (b.nextElementSibling) {
                    var c = b.nextElementSibling;
                    if (e) {
                        if (a(c).is(e)) {
                            d.push(c);
                        }
                    } else {
                        d.push(c);
                    }
                    b = c;
                }
                return new i(d);
            },
            prev: function(b) {
                if (this.length > 0) {
                    if (b) {
                        if (this[0].previousElementSibling && a(this[0].previousElementSibling).is(b)) {
                            return new i([this[0].previousElementSibling]);
                        } else {
                            return new i([]);
                        }
                    } else {
                        if (this[0].previousElementSibling) {
                            return new i([this[0].previousElementSibling]);
                        } else {
                            return new i([]);
                        }
                    }
                } else {
                    return new i([]);
                }
            },
            prevAll: function(e) {
                var d = [];
                var b = this[0];
                if (!b) {
                    return new i([]);
                }
                while (b.previousElementSibling) {
                    var c = b.previousElementSibling;
                    if (e) {
                        if (a(c).is(e)) {
                            d.push(c);
                        }
                    } else {
                        d.push(c);
                    }
                    b = c;
                }
                return new i(d);
            },
            parent: function(d) {
                var c = [];
                for (var b = 0; b < this.length; b++) {
                    if (this[b].parentNode !== null) {
                        if (d) {
                            if (a(this[b].parentNode).is(d)) {
                                c.push(this[b].parentNode);
                            }
                        } else {
                            c.push(this[b].parentNode);
                        }
                    }
                }
                return a(a.unique(c));
            },
            parents: function(e) {
                var c = [];
                for (var d = 0; d < this.length; d++) {
                    var b = this[d].parentNode;
                    while (b) {
                        if (e) {
                            if (a(b).is(e)) {
                                c.push(b);
                            }
                        } else {
                            c.push(b);
                        }
                        b = b.parentNode;
                    }
                }
                return a(a.unique(c));
            },
            find: function(e) {
                var c = [];
                for (var a = 0; a < this.length; a++) {
                    var d = this[a].querySelectorAll(e);
                    for (var b = 0; b < d.length; b++) {
                        c.push(d[b]);
                    }
                }
                return new i(c);
            },
            children: function(f) {
                var d = [];
                for (var e = 0; e < this.length; e++) {
                    var c = this[e].childNodes;
                    for (var b = 0; b < c.length; b++) {
                        if (!f) {
                            if (c[b].nodeType === 1) {
                                d.push(c[b]);
                            }
                        } else {
                            if (c[b].nodeType === 1 && a(c[b]).is(f)) {
                                d.push(c[b]);
                            }
                        }
                    }
                }
                return new i(a.unique(d));
            },
            remove: function() {
                for (var a = 0; a < this.length; a++) {
                    if (this[a].parentNode) {
                        this[a].parentNode.removeChild(this[a]);
                    }
                }
                return this;
            },
            add: function() {
                var b = this;
                var c, d;
                for (c = 0; c < arguments.length; c++) {
                    var e = a(arguments[c]);
                    for (d = 0; d < e.length; d++) {
                        b[b.length] = e[d];
                        b.length++;
                    }
                }
                return b;
            },
            before: function(b) {
                a(b).insertBefore(this);
                return this;
            },
            after: function(b) {
                a(b).insertAfter(this);
                return this;
            },
            scrollTop: function(a) {
                if (!this.length) {
                    return;
                }
                var b = 'scrollTop' in this[0];
                if (a === c) {
                    return b ? this[0].scrollTop : this[0].pageYOffset;
                }
                return this.each(b ? function() {
                    this.scrollTop = a;
                } : function() {
                    this.scrollTo(this.scrollX, a);
                });
            },
            scrollLeft: function(a) {
                if (!this.length) {
                    return;
                }
                var b = 'scrollLeft' in this[0];
                if (a === c) {
                    return b ? this[0].scrollLeft : this[0].pageXOffset;
                }
                return this.each(b ? function() {
                    this.scrollLeft = a;
                } : function() {
                    this.scrollTo(a, this.scrollY);
                });
            },
            contents: function() {
                return this.map(function(b, a) {
                    return f.call(a.childNodes);
                });
            },
            nextUntil: function(d) {
                var b = this,
                    c = [];
                while (b.length && !b.filter(d).length) {
                    c.push(b[0]);
                    b = b.next();
                }
                return a(c);
            },
            prevUntil: function(d) {
                var b = this,
                    c = [];
                while (b.length && !a(b).filter(d).length) {
                    c.push(b[0]);
                    b = b.prev();
                }
                return a(c);
            },
            detach: function() {
                return this.remove();
            }
        };
        a.fn = i.prototype;
        return a;
    }();
    var a = i;
    mobiscroll.$ = i;
    a.inArray = function(a, b, c) {
        return j.indexOf.call(b, a, c);
    };
    a.extend = function(a) {
        var c, b = f.call(arguments, 1);
        if (typeof a == 'boolean') {
            c = a;
            a = b.shift();
        }
        a = a || {};
        b.forEach(function(b) {
            m(a, b, c);
        });
        return a;
    };
    a.isFunction = d;
    a.isArray = function(a) {
        return Object.prototype.toString.apply(a) === '[object Array]';
    };
    a.isPlainObject = function(a) {
        return h(a) && a !== null && a !== a.window && Object.getPrototypeOf(a) == Object.prototype;
    };
    a.each = function(b, e) {
        var c, d;
        if (!h(b) || !e) {
            return;
        }
        if (a.isArray(b) || b instanceof i) {
            for (c = 0; c < b.length; c++) {
                if (e.call(b[c], c, b[c]) === false) {
                    break;
                }
            }
        } else {
            for (d in b) {
                if (b.hasOwnProperty(d) && d !== 'length') {
                    if (e.call(b[d], d, b[d]) === false) {
                        break;
                    }
                }
            }
        }
        return this;
    };
    a.unique = function(c) {
        var b = [];
        for (var a = 0; a < c.length; a++) {
            if (b.indexOf(c[a]) === -1) {
                b.push(c[a]);
            }
        }
        return b;
    };
    a.map = function(d, g) {
        var b, c = [],
            e, f;
        if (k(d)) {
            for (e = 0; e < d.length; e++) {
                b = g(d[e], e);
                if (b !== null) {
                    c.push(b);
                }
            }
        } else {
            for (f in d) {
                b = g(d[f], f);
                if (b !== null) {
                    c.push(b);
                }
            }
        }
        return c.length > 0 ? a.fn.concat.apply([], c) : c;
    };
    a.matches = function(a, b) {
        if (!b || !a || a.nodeType !== 1) {
            return false;
        }
        var c = a.matchesSelector || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector;
        return c.call(a, b);
    };
}(window, document));
(function() {
    return function(v, j, g) {
        function k(a) {
            var b;
            for (b in a) {
                if (o[a[b]] !== g) {
                    return true;
                }
            }
            return false;
        }

        function t() {
            var a = ['Webkit', 'Moz', 'O', 'ms'],
                b;
            for (b in a) {
                if (k([a[b] + 'Transform'])) {
                    return '-' + a[b].toLowerCase() + '-';
                }
            }
            return '';
        }

        function n(c, a, e) {
            var d = c;
            if (typeof a === 'object') {
                return c.each(function() {
                    if (b[this.id]) {
                        b[this.id].destroy();
                    }
                    new mobiscroll.classes[a.component || 'Scroller'](this, a);
                });
            }
            if (typeof a === 'string') {
                c.each(function() {
                    var f, c = b[this.id];
                    if (c && c[a]) {
                        f = c[a].apply(this, Array.prototype.slice.call(e, 1));
                        if (f !== g) {
                            d = f;
                            return false;
                        }
                    }
                });
            }
            return d;
        }
        var d, i, e, a = typeof jQuery == 'undefined' ? mobiscroll.$ : jQuery,
            r = +new Date(),
            b = {},
            c = a.extend,
            m = navigator.userAgent,
            f = m.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i),
            o = j.createElement('modernizr').style,
            p = k(['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective']),
            q = k(['flex', 'msFlex', 'WebkitBoxDirection']),
            l = t(),
            s = l.replace(/^\-/, '').replace(/\-$/, '').replace('moz', 'Moz'),
            h = [];
        if (/Android/i.test(f)) {
            i = 'android';
            e = navigator.userAgent.match(/Android\s+([\d\.]+)/i);
            if (e) {
                h = e[0].replace('Android ', '').split('.');
            }
        } else if (/iPhone|iPad|iPod/i.test(f)) {
            i = 'ios';
            e = navigator.userAgent.match(/OS\s+([\d\_]+)/i);
            if (e) {
                h = e[0].replace(/_/g, '.').replace('OS ', '').split('.');
            }
        } else if (/Windows Phone/i.test(f)) {
            i = 'wp';
        } else if (/Windows|MSIE/i.test(f)) {
            i = 'windows';
        }
        d = mobiscroll = {
            $: a,
            version: '3.0.0-beta6',
            running : true,
			vKMaI : 1,
            util: {
                prefix: l,
                jsPrefix: s,
                has3d: p,
                hasFlex: q,
                preventClick: function() {
                    d.tapped++;
                    setTimeout(function() {
                        d.tapped--;
                    }, 500);
                },
                testTouch: function(c, b) {
                    if (c.type == 'touchstart') {
                        a(b).attr('data-touch', '1');
                    } else if (a(b).attr('data-touch')) {
                        a(b).removeAttr('data-touch');
                        return false;
                    }
                    return true;
                },
                objectToArray: function(b) {
                    var a = [],
                        c;
                    for (c in b) {
                        a.push(b[c]);
                    }
                    return a;
                },
                arrayToObject: function(b) {
                    var c = {},
                        a;
                    if (b) {
                        for (a = 0; a < b.length; a++) {
                            c[b[a]] = b[a];
                        }
                    }
                    return c;
                },
                isNumeric: function(a) {
                    return a - parseFloat(a) >= 0;
                },
                isString: function(a) {
                    return typeof a === 'string';
                },
                getCoord: function(c, d, e) {
                    var a = c.originalEvent || c,
                        b = (e ? 'page' : 'client') + d;
                    if (a.targetTouches && a.targetTouches[0]) {
                        return a.targetTouches[0][b];
                    }
                    if (a.changedTouches && a.changedTouches[0]) {
                        return a.changedTouches[0][b];
                    }
                    return c[b];
                },
                getPosition: function(e, f) {
                    var c = getComputedStyle(e[0]),
                        b, d;
                    a.each(['t', 'webkitT', 'MozT', 'OT', 'msT'], function(d, a) {
                        if (c[a + 'ransform'] !== g) {
                            b = c[a + 'ransform'];
                            return false;
                        }
                    });
                    b = b.split(')')[0].split(', ');
                    d = f ? b[13] || b[5] : b[12] || b[4];
                    return d;
                },
                constrain: function(a, b, c) {
                    return Math.max(b, Math.min(a, c));
                },
                vibrate: function(a) {
                    if ('vibrate' in navigator) {
                        navigator.vibrate(a || 50);
                    }
                },
                throttle: function(c, a) {
                    var b, d;
                    a = a || 100;
                    return function() {
                        var f = this,
                            e = +new Date(),
                            g = arguments;
                        if (b && e < b + a) {
                            clearTimeout(d);
                            d = setTimeout(function() {
                                b = e;
                                c.apply(f, g);
                            }, a);
                        } else {
                            b = e;
                            c.apply(f, g);
                        }
                    };
                }
            },
            tapped: 0,
            autoTheme: 'mobiscroll',
            presets: {
                scroller: {},
                numpad: {},
                listview: {},
                menustrip: {}
            },
            themes: {
                form: {},
                frame: {},
                listview: {},
                menustrip: {},
                progress: {}
            },
            platform: {
                name: i,
                majorVersion: h[0],
                minorVersion: h[1]
            },
            i18n: {},
            instances: b,
            classes: {},
            components: {},
            settings: {},
            setDefaults: function(a) {
                c(this.settings, a);
            },
            presetShort: function(e, f, h) {
                d[e] = function(l, m) {
                    var k, i, c = {},
                        j = m || {};
                    a.extend(j, {
                        preset: h === false ? g : e
                    });
                    a(l).each(function() {
                        if (b[this.id]) {
                            b[this.id].destroy();
                        }
                        k = new d.classes[f || 'Scroller'](this, j);
                        c[this.id] = k;
                    });
                    i = Object.keys(c);
                    return i.length == 1 ? c[i[0]] : c;
                };
                this.components[e] = function(a) {
                    return n(this, c(a, {
                        component: f,
                        preset: h === false ? g : e
                    }), arguments);
                };
            }
        };
        a.mobiscroll = mobiscroll;
        a.fn.mobiscroll = function(a) {
            c(this, mobiscroll.components);
            return n(this, a, arguments);
        };
        mobiscroll.classes.Base = function(i, e) {
            var m, j, f, o, g, l, h = mobiscroll,
                n = h.util,
                k = n.getCoord,
                d = this;
            d.settings = {};
            d._presetLoad = function() {};
            d._init = function(b) {
                var a;
                for (a in d.settings) {
                    delete d.settings[a];
                }
                f = d.settings;
                c(e, b);
                if (d._hasDef) {
                    l = h.settings;
                }
                c(f, d._defaults, l, e);
                if (d._hasTheme) {
                    g = f.theme;
                    if (g == 'auto' || !g) {
                        g = h.autoTheme;
                    }
                    if (g == 'default') {
                        g = 'mobiscroll';
                    }
                    e.theme = g;
                    o = h.themes[d._class] ? h.themes[d._class][g] : {};
                }
                if (d._hasLang) {
                    m = h.i18n[f.lang];
                }
                if (d._hasTheme) {
                    d.trigger('onThemeLoad', {
                        lang: m,
                        settings: e
                    });
                }
                c(f, o, m, l, e);
                if (d._hasPreset) {
                    d._presetLoad(f);
                    j = h.presets[d._class][f.preset];
                    if (j) {
                        j = j.call(i, d);
                        c(f, j, e);
                    }
                }
            };
            d._destroy = function() {
                if (d) {
                    d.trigger('onDestroy', []);
                    delete b[i.id];
                    d = null;
                }
            };
            d.tap = function(i, e, m, b) {
                var g, h, a, c, j;
                b = b || 9;

                function o(b) {
                    if (!a) {
                        if (m) {
                            b.preventDefault();
                        }
                        a = this;
                        g = k(b, 'X');
                        h = k(b, 'Y');
                        c = false;
                        j = new Date();
                    }
                }

                function p(d) {
                    if (a && !c && (Math.abs(k(d, 'X') - g) > b || Math.abs(k(d, 'Y') - h) > b)) {
                        c = true;
                    }
                }

                function q(b) {
                    if (a) {
                        if (new Date() - j < 100 || !c) {
                            b.preventDefault();
                            e.call(a, b, d);
                        }
                        a = false;
                        n.preventClick();
                    }
                }

                function l() {
                    a = false;
                }
                if (f.tap) {
                    i.on('touchstart.mbsc', o).on('touchcancel.mbsc', l).on('touchmove.mbsc', p).on('touchend.mbsc', q);
                }
                i.on('click.mbsc', function(a) {
                    a.preventDefault();
                    e.call(this, a, d);
                });
            };
            d.trigger = function(c, h) {
                var f, a, b, g = [l, o, j, e];
                for (a = 0; a < 4; a++) {
                    b = g[a];
                    if (b && b[c]) {
                        f = b[c].call(i, h || {}, d);
                    }
                }
                return f;
            };
            d.option = function(b, c) {
                var a = {};
                if (typeof b === 'object') {
                    a = b;
                } else {
                    a[b] = c;
                }
                d.init(a);
            };
            d.getInst = function() {
                return d;
            };
            e = e || {};
            a(i).addClass('mbsc-comp');
            if (!i.id) {
                i.id = 'mobiscroll' + ++r;
            }
            b[i.id] = d;
        };

        function u(a) {
            if (d.tapped && !a.tap && !(a.target.nodeName == 'TEXTAREA' && a.type == 'mousedown')) {
                a.stopPropagation();
                a.preventDefault();
                return false;
            }
        }
        if (j.addEventListener) {
            a.each(['mouseover', 'mousedown', 'mouseup', 'click'], function(b, a) {
                j.addEventListener(a, u, true);
            });
        }
    };
}())(window,document);
window.mobiscroll = mobiscroll;
(function() {
    mobiscroll.i18n.ca = {
        setText: 'Acceptar',
        cancelText: 'Cancel·lar',
        clearText: 'Esborrar',
        selectedText: '{count} seleccionat',
        selectedPluralText: '{count} seleccionats',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'],
        dayNamesShort: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
        dayNamesMin: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
        dayText: 'Dia',
        hourText: 'Hores',
        minuteText: 'Minuts',
        monthNames: ['Gener', 'Febrer', 'Mar&ccedil;', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'],
        monthNamesShort: ['Gen', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Des'],
        monthText: 'Mes',
        secText: 'Segons',
        timeFormat: 'HH:ii',
        yearText: 'Any',
        nowText: 'Ara',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Avui',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Temps',
        calendarText: 'Calendari',
        closeText: 'Tancar',
        fromText: 'Iniciar',
        toText: 'Final',
        wholeText: 'Sencer',
        fractionText: 'Fracció',
        unitText: 'Unitat',
        labels: ['Anys', 'Mesos', 'Dies', 'Hores', 'Minuts', 'Segons', ''],
        labelsShort: ['Anys', 'Mesos', 'Dies', 'Hrs', 'Mins', 'Secs', ''],
        startText: 'Iniciar',
        stopText: 'Aturar',
        resetText: 'Reiniciar',
        lapText: 'Volta',
        hideText: 'Amagar',
        backText: 'Tornar',
        undoText: 'Desfer',
        offText: 'No',
        onText: 'Si'
    };
}());
(function() {
    mobiscroll.i18n.cs = {
        setText: 'Zadej',
        cancelText: 'Storno',
        clearText: 'Vymazat',
        selectedText: 'Označený: {count}',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'],
        dayNamesShort: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
        dayNamesMin: ['N', 'P', 'Ú', 'S', 'Č', 'P', 'S'],
        dayText: 'Den',
        hourText: 'Hodiny',
        minuteText: 'Minuty',
        monthNames: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
        monthNamesShort: ['Led', 'Úno', 'Bře', 'Dub', 'Kvě', 'Čer', 'Čvc', 'Spr', 'Zář', 'Říj', 'Lis', 'Pro'],
        monthText: 'Měsíc',
        secText: 'Sekundy',
        timeFormat: 'HH:ii',
        yearText: 'Rok',
        nowText: 'Teď',
        amText: 'am',
        pmText: 'pm',
        todayText: 'Dnes',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Čas',
        calendarText: 'Kalendář',
        closeText: 'Zavřít',
        fromText: 'Začátek',
        toText: 'Konec',
        wholeText: 'Celý',
        fractionText: 'Část',
        unitText: 'Jednotka',
        labels: ['Roky', 'Měsíce', 'Dny', 'Hodiny', 'Minuty', 'Sekundy', ''],
        labelsShort: ['Rok', 'Měs', 'Dny', 'Hod', 'Min', 'Sec', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Resetovat',
        lapText: 'Etapa',
        hideText: 'Schovat',
        backText: 'Zpět',
        undoText: 'Rozlepit',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.da = {
        setText: 'Sæt',
        cancelText: 'Annuller',
        clearText: 'Ryd',
        selectedText: '{count} valgt',
        selectedPluralText: '{count} valgt',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
        dayNamesShort: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
        dayNamesMin: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
        dayText: 'Dag',
        hourText: 'Timer',
        minuteText: 'Minutter',
        monthNames: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
        monthText: 'Måned',
        secText: 'Sekunder',
        amText: 'am',
        pmText: 'pm',
        timeFormat: 'HH.ii',
        yearText: 'År',
        nowText: 'Nu',
        todayText: 'I dag',
        firstDay: 1,
        dateText: 'Dato',
        timeText: 'Tid',
        calendarText: 'Kalender',
        closeText: 'Luk',
        fromText: 'Start',
        toText: 'Slut',
        wholeText: 'Hele',
        fractionText: 'Dele',
        unitText: 'Enhed',
        labels: ['År', 'Måneder', 'Dage', 'Timer', 'Minutter', 'Sekunder', ''],
        labelsShort: ['År', 'Mdr', 'Dg', 'Timer', 'Min', 'Sek', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Nulstil',
        lapText: 'Omgang',
        hideText: 'Skjul',
        offText: 'Fra',
        onText: 'Til',
        backText: 'Tilbage',
        undoText: 'Fortryd'
    };
}());
(function() {
    mobiscroll.i18n.de = {
        setText: 'OK',
        cancelText: 'Abbrechen',
        clearText: 'Löschen',
        selectedText: '{count} ausgewählt',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
        dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        dayNamesMin: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
        dayText: 'Tag',
        delimiter: '.',
        hourText: 'Stunde',
        minuteText: 'Minuten',
        monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        monthText: 'Monat',
        secText: 'Sekunden',
        timeFormat: 'HH:ii',
        yearText: 'Jahr',
        nowText: 'Jetzt',
        pmText: 'nachm.',
        amText: 'vorm.',
        todayText: 'Heute',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Zeit',
        calendarText: 'Kalender',
        closeText: 'Schließen',
        fromText: 'Von',
        toText: 'Um',
        wholeText: 'Ganze Zahl',
        fractionText: 'Bruchzahl',
        unitText: 'Maßeinheit',
        labels: ['Jahre', 'Monate', 'Tage', 'Stunden', 'Minuten', 'Sekunden', ''],
        labelsShort: ['Jahr.', 'Mon.', 'Tag.', 'Std.', 'Min.', 'Sek.', ''],
        startText: 'Starten',
        stopText: 'Stoppen',
        resetText: 'Zurücksetzen',
        lapText: 'Lap',
        hideText: 'Ausblenden',
        backText: 'Zurück',
        undoText: 'Rückgängig machen',
        offText: 'Aus',
        onText: 'Ein',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n['en-GB'] = mobiscroll.i18n['en-UK'] = {
        dateFormat: 'dd/mm/yy',
        timeFormat: 'HH:ii'
    };
}());
(function() {
    mobiscroll.i18n.es = {
        setText: 'Aceptar',
        cancelText: 'Cancelar',
        clearText: 'Borrar',
        selectedText: '{count} seleccionado',
        selectedPluralText: '{count} seleccionados',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Mi&#xE9;rcoles', 'Jueves', 'Viernes', 'S&#xE1;bado'],
        dayNamesShort: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'S&#xE1;'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        dayText: 'D&#237;a',
        hourText: 'Horas',
        minuteText: 'Minutos',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        monthText: 'Mes',
        secText: 'Segundos',
        timeFormat: 'HH:ii',
        yearText: 'A&ntilde;o',
        nowText: 'Ahora',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Hoy',
        firstDay: 1,
        dateText: 'Fecha',
        timeText: 'Tiempo',
        calendarText: 'Calendario',
        closeText: 'Cerrar',
        fromText: 'Iniciar',
        toText: 'Final',
        wholeText: 'Entero',
        fractionText: 'Fracción',
        unitText: 'Unidad',
        labels: ['Años', 'Meses', 'Días', 'Horas', 'Minutos', 'Segundos', ''],
        labelsShort: ['Año', 'Mes', 'Día', 'Hora', 'Min', 'Seg', ''],
        startText: 'Iniciar',
        stopText: 'Deténgase',
        resetText: 'Reinicializar',
        lapText: 'Lap',
        hideText: 'Esconder',
        backText: 'Volver',
        undoText: 'Deshacer',
        offText: 'No',
        onText: 'Sí',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    var a = {
        gDaysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        jDaysInMonth: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]
    };
    a.jalaliToGregorian = function(j, h, i) {
        j = parseInt(j);
        h = parseInt(h);
        i = parseInt(i);
        var c;
        var f = j - 979;
        var l = h - 1;
        var k = i - 1;
        var g = 365 * f + parseInt(f / 33) * 8 + parseInt((f % 33 + 3) / 4);
        for (c = 0; c < l; ++c) {
            g += a.jDaysInMonth[c];
        }
        g += k;
        var b = g + 79;
        var d = 1600 + 400 * parseInt(b / 146097);
        b = b % 146097;
        var e = true;
        if (b >= 36525) {
            b--;
            d += 100 * parseInt(b / 36524);
            b = b % 36524;
            if (b >= 365) {
                b++;
            } else {
                e = false;
            }
        }
        d += 4 * parseInt(b / 1461);
        b %= 1461;
        if (b >= 366) {
            e = false;
            b--;
            d += parseInt(b / 365);
            b = b % 365;
        }
        for (c = 0; b >= a.gDaysInMonth[c] + (c == 1 && e); c++) {
            b -= a.gDaysInMonth[c] + (c == 1 && e);
        }
        var n = c + 1;
        var m = b + 1;
        return [d, n, m];
    };
    a.checkDate = function(c, b, d) {
        return !(c < 0 || c > 32767 || b < 1 || b > 12 || d < 1 || d > a.jDaysInMonth[b - 1] + (b == 12 && (c - 979) % 33 % 4 === 0));
    };
    a.gregorianToJalali = function(i, f, g) {
        i = parseInt(i);
        f = parseInt(f);
        g = parseInt(g);
        var c;
        var d = i - 1600;
        var h = f - 1;
        var k = g - 1;
        var e = 365 * d + parseInt((d + 3) / 4) - parseInt((d + 99) / 100) + parseInt((d + 399) / 400);
        for (c = 0; c < h; ++c) {
            e += a.gDaysInMonth[c];
        }
        if (h > 1 && (d % 4 === 0 && d % 100 !== 0 || d % 400 === 0)) {
            ++e;
        }
        e += k;
        var b = e - 79;
        var l = parseInt(b / 12053);
        b %= 12053;
        var j = 979 + 33 * l + 4 * parseInt(b / 1461);
        b %= 1461;
        if (b >= 366) {
            j += parseInt((b - 1) / 365);
            b = (b - 1) % 365;
        }
        for (c = 0; c < 11 && b >= a.jDaysInMonth[c]; ++c) {
            b -= a.jDaysInMonth[c];
        }
        var n = c + 1;
        var m = b + 1;
        return [j, n, m];
    };
    mobiscroll.i18n.fa = {
        setText: 'تاييد',
        cancelText: 'انصراف',
        clearText: 'واضح ',
        selectedText: '{count} منتخب',
        dateFormat: 'yy/mm/dd',
        dayNames: ['يکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'],
        dayNamesShort: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
        dayNamesMin: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
        dayText: 'روز',
        hourText: 'ساعت',
        minuteText: 'دقيقه',
        monthNames: ['فروردين', 'ارديبهشت', 'خرداد', 'تير', 'مرداد', 'شهريور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        monthNamesShort: ['فروردين', 'ارديبهشت', 'خرداد', 'تير', 'مرداد', 'شهريور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        monthText: 'ماه',
        secText: 'ثانيه',
        timeFormat: 'HH:ii',
        yearText: 'سال',
        nowText: 'اکنون',
        amText: 'ب',
        pmText: 'ص',
        todayText: 'امروز',
        getYear: function(b) {
            return a.gregorianToJalali(b.getFullYear(), b.getMonth() + 1, b.getDate())[0];
        },
        getMonth: function(b) {
            return --a.gregorianToJalali(b.getFullYear(), b.getMonth() + 1, b.getDate())[1];
        },
        getDay: function(b) {
            return a.gregorianToJalali(b.getFullYear(), b.getMonth() + 1, b.getDate())[2];
        },
        getDate: function(d, b, e, f, g, h, i) {
            if (b < 0) {
                d += Math.floor(b / 12);
                b = 12 + b % 12;
            }
            if (b > 11) {
                d += Math.floor(b / 12);
                b = b % 12;
            }
            var c = a.jalaliToGregorian(d, +b + 1, e);
            return new Date(c[0], c[1] - 1, c[2], f || 0, g || 0, h || 0, i || 0);
        },
        getMaxDayOfMonth: function(c, d) {
            var b = 31;
            while (a.checkDate(c, d + 1, b) === false) {
                b--;
            }
            return b;
        },
        firstDay: 6,
        rtl: true,
        dateText: 'تاریخ ',
        timeText: 'زمان ',
        calendarText: 'تقویم',
        closeText: 'نزدیک',
        fromText: 'شروع ',
        toText: 'پایان',
        wholeText: 'تمام',
        fractionText: 'کسر',
        unitText: 'واحد',
        labels: ['سال', 'ماه', 'روز', 'ساعت', 'دقیقه', 'ثانیه', ''],
        labelsShort: ['سال', 'ماه', 'روز', 'ساعت', 'دقیقه', 'ثانیه', ''],
        startText: 'شروع',
        stopText: 'پايان',
        resetText: 'تنظیم مجدد',
        lapText: 'Lap',
        hideText: 'پنهان کردن',
        backText: 'پشت',
        undoText: 'واچیدن'
    };
}());
(function() {
    mobiscroll.i18n.fr = {
        setText: 'Terminer',
        cancelText: 'Annuler',
        clearText: 'Effacer',
        selectedText: '{count} sélectionné',
        selectedPluralText: '{count} sélectionnés',
        dateFormat: 'dd/mm/yy',
        dayNames: ['&#68;imanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        dayNamesShort: ['&#68;im.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
        dayNamesMin: ['&#68;', 'L', 'M', 'M', 'J', 'V', 'S'],
        dayText: 'Jour',
        monthText: 'Mois',
        monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
        hourText: 'Heures',
        minuteText: 'Minutes',
        secText: 'Secondes',
        timeFormat: 'HH:ii',
        yearText: 'Année',
        nowText: 'Maintenant',
        pmText: 'après-midi',
        amText: 'avant-midi',
        todayText: "Aujourd'hui",
        firstDay: 1,
        dateText: 'Date',
        timeText: 'Heure',
        calendarText: 'Calendrier',
        closeText: 'Fermer',
        fromText: 'Démarrer',
        toText: 'Fin',
        wholeText: 'Entier',
        fractionText: 'Fraction',
        unitText: 'Unité',
        labels: ['Ans', 'Mois', 'Jours', 'Heures', 'Minutes', 'Secondes', ''],
        labelsShort: ['Ans', 'Mois', 'Jours', 'Hrs', 'Min', 'Sec', ''],
        startText: 'Démarrer',
        stopText: 'Arrêter',
        resetText: 'Réinitialiser',
        lapText: 'Lap',
        hideText: 'Cachez',
        backText: 'Arrière',
        undoText: 'Défaire',
        offText: 'Non',
        onText: 'Oui',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.he = {
        rtl: true,
        setText: 'שמירה',
        cancelText: 'ביטול',
        clearText: 'נקה',
        selectedText: '{count} נבחר',
        selectedPluralText: '{count} נבחרו',
        dateFormat: 'dd/mm/yy',
        dayNames: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
        dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"],
        dayNamesMin: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
        dayText: 'יום',
        hourText: 'שעות',
        minuteText: 'דקות',
        monthNames: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
        monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
        monthText: 'חודש',
        secText: 'שניות',
        amText: 'am',
        pmText: 'pm',
        timeFormat: 'HH:ii',
        yearText: 'שנה',
        nowText: 'עכשיו',
        firstDay: 0,
        dateText: 'תאריך',
        timeText: 'זמן',
        calendarText: 'תאריכון',
        closeText: 'סגירה',
        todayText: 'היום',
        eventText: 'מִקרֶה',
        eventsText: 'מִקרֶה',
        fromText: 'התחלה',
        toText: 'סיום',
        wholeText: 'כֹּל',
        fractionText: 'שבריר',
        unitText: 'יחידה',
        labels: ['שנים', 'חודשים', 'ימים', 'שעות', 'דקות', 'שניים', ''],
        labelsShort: ['שנים', 'חודשים', 'ימים', 'שעות', 'דקות', 'שניים', ''],
        startText: 'התחל',
        stopText: 'עצור',
        resetText: 'אתחול',
        lapText: 'הקפה',
        hideText: 'הסתר',
        offText: 'כיבוי',
        onText: 'הפעלה',
        backText: 'חזור',
        undoText: 'ביטול פעולה'
    };
}());
(function() {
    mobiscroll.i18n.hu = {
        setText: 'OK',
        cancelText: 'Mégse',
        clearText: 'Törlés',
        selectedText: '{count} kiválasztva',
        dateFormat: 'yy.mm.dd.',
        dayNames: ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
        dayNamesShort: ['Va', 'Hé', 'Ke', 'Sze', 'Csü', 'Pé', 'Szo'],
        dayNamesMin: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
        dayText: 'Nap',
        delimiter: '.',
        hourText: 'Óra',
        minuteText: 'Perc',
        monthNames: ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún', 'Júl', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
        monthText: 'Hónap',
        secText: 'Másodperc',
        timeFormat: 'H:ii',
        yearText: 'Év',
        nowText: 'Most',
        pmText: 'de',
        amText: 'du',
        firstDay: 1,
        dateText: 'Dátum',
        timeText: 'Idő',
        calendarText: 'Naptár',
        todayText: 'Ma',
        prevMonthText: 'Előző hónap',
        nextMonthText: 'Következő hónap',
        prevYearText: 'Előző év',
        nextYearText: 'Következő év',
        closeText: 'Bezár',
        eventText: 'esemény',
        eventsText: 'esemény',
        fromText: 'Eleje',
        toText: 'Vége',
        wholeText: 'Egész',
        fractionText: 'Tört',
        unitText: 'Egység',
        labels: ['Év', 'Hónap', 'Nap', 'Óra', 'Perc', 'Másodperc', ''],
        labelsShort: ['Év', 'Hó.', 'Nap', 'Óra', 'Perc', 'Mp.', ''],
        startText: 'Indít',
        stopText: 'Megállít',
        resetText: 'Visszaállít',
        lapText: 'Lap',
        hideText: 'Elrejt',
        backText: 'Vissza',
        undoText: 'Visszavon',
        offText: 'Ki',
        onText: 'Be',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.it = {
        setText: 'OK',
        cancelText: 'Annulla',
        clearText: 'Chiarire',
        selectedText: '{count} selezionato',
        selectedPluralText: '{count} selezionati',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domenica', 'Lunedì', 'Mertedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
        dayNamesShort: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'G', 'V', 'S'],
        dayText: 'Giorno',
        hourText: 'Ore',
        minuteText: 'Minuti',
        monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
        monthNamesShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
        monthText: 'Mese',
        secText: 'Secondi',
        timeFormat: 'HH:ii',
        yearText: 'Anno',
        nowText: 'Ora',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Oggi',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Volta',
        calendarText: 'Calendario',
        closeText: 'Chiudere',
        fromText: 'Inizio',
        toText: 'Fine',
        wholeText: 'Intero',
        fractionText: 'Frazione',
        unitText: 'Unità',
        labels: ['Anni', 'Mesi', 'Giorni', 'Ore', 'Minuti', 'Secondi', ''],
        labelsShort: ['Anni', 'Mesi', 'Gio', 'Ore', 'Min', 'Sec', ''],
        startText: 'Inizio',
        stopText: 'Arresto',
        resetText: 'Ripristina',
        lapText: 'Lap',
        hideText: 'Nascondi',
        backText: 'Indietro',
        undoText: 'Annulla',
        offText: 'Via',
        onText: 'Su',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.ja = {
        setText: 'セット',
        cancelText: 'キャンセル',
        clearText: 'クリア',
        selectedText: '{count} 選択',
        dateFormat: 'yy年mm月dd日',
        dayNames: ['日', '月', '火', '水', '木', '金', '土'],
        dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
        dayNamesMin: ['日', '月', '火', '水', '木', '金', '土'],
        dayText: '日',
        hourText: '時',
        minuteText: '分',
        monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        monthText: '月',
        secText: '秒',
        timeFormat: 'HH:ii',
        yearText: '年',
        nowText: '今',
        pmText: '午後',
        amText: '午前',
        yearSuffix: '年',
        monthSuffix: '月',
        daySuffix: '日',
        todayText: '今日',
        dateText: '日付',
        timeText: '時間',
        calendarText: 'カレンダー',
        closeText: 'クローズ',
        fromText: '開始',
        toText: '終わり',
        wholeText: '全数',
        fractionText: '分数',
        unitText: '単位',
        labels: ['年間', '月間', '日間', '時間', '分', '秒', ''],
        labelsShort: ['年間', '月間', '日間', '時間', '分', '秒', ''],
        startText: '開始',
        stopText: '停止',
        resetText: 'リセット',
        lapText: 'ラップ',
        hideText: '隠す',
        backText: 'バック',
        undoText: 'アンドゥ'
    };
}());
(function() {
    mobiscroll.i18n.lt = {
        setText: 'OK',
        cancelText: 'Atšaukti',
        clearText: 'Išvalyti',
        selectedText: 'Pasirinktas {count}',
        selectedPluralText: 'Pasirinkti {count}',
        dateFormat: 'yy-mm-dd',
        dayNames: ['Sekmadienis', 'Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis'],
        dayNamesShort: ['S', 'Pr', 'A', 'T', 'K', 'Pn', 'Š'],
        dayNamesMin: ['S', 'Pr', 'A', 'T', 'K', 'Pn', 'Š'],
        dayText: 'Diena',
        hourText: 'Valanda',
        minuteText: 'Minutes',
        monthNames: ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'],
        monthNamesShort: ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rugp', 'Rugs', 'Spa', 'Lap', 'Gruo'],
        monthText: 'Mėnuo',
        secText: 'Sekundes',
        amText: 'am',
        pmText: 'pm',
        timeFormat: 'HH:ii',
        yearText: 'Metai',
        nowText: 'Dabar',
        todayText: 'Šiandien',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Laikas',
        calendarText: 'Kalendorius',
        closeText: 'Uždaryti',
        fromText: 'Nuo',
        toText: 'Iki',
        wholeText: 'Visas',
        fractionText: 'Frakcija',
        unitText: 'Vienetas',
        labels: ['Metai', 'Mėnesiai', 'Dienos', 'Valandos', 'Minutes', 'Sekundes', ''],
        labelsShort: ['m', 'mėn.', 'd', 'h', 'min', 's', ''],
        startText: 'Pradėti',
        stopText: 'Sustabdyti',
        resetText: 'Išnaujo',
        lapText: 'Ratas',
        hideText: 'Slėpti',
        backText: 'Atgal',
        undoText: 'Atšaukti veiksmą',
        offText: 'Išj.',
        onText: 'Įj.',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.nl = {
        setText: 'Instellen',
        cancelText: 'Annuleren',
        clearText: 'Duidelijk',
        selectedText: '{count} gekozen',
        dateFormat: 'dd-mm-yy',
        dayNames: ['zondag', 'maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
        dayNamesShort: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
        dayNamesMin: ['z', 'm', 'd', 'w', 'd', 'v', 'z'],
        dayText: 'Dag',
        hourText: 'Uur',
        minuteText: 'Minuten',
        monthNames: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
        monthNamesShort: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
        monthText: 'Maand',
        secText: 'Seconden',
        timeFormat: 'HH:ii',
        yearText: 'Jaar',
        nowText: 'Nu',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Vandaag',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Tijd',
        calendarText: 'Kalender',
        closeText: 'Sluiten',
        fromText: 'Start',
        toText: 'Einde',
        wholeText: 'geheel',
        fractionText: 'fractie',
        unitText: 'eenheid',
        labels: ['Jaren', 'Maanden', 'Dagen', 'Uren', 'Minuten', 'Seconden', ''],
        labelsShort: ['j', 'm', 'd', 'u', 'min', 'sec', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Reset',
        lapText: 'Ronde',
        hideText: 'Verbergen',
        backText: 'Terug',
        undoText: 'Onged. maken',
        offText: 'Uit',
        onText: 'Aan',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.no = {
        setText: 'OK',
        cancelText: 'Avbryt',
        clearText: 'Tømme',
        selectedText: '{count} valgt',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
        dayNamesShort: ['Sø', 'Ma', 'Ti', 'On', 'To', 'Fr', 'Lø'],
        dayNamesMin: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
        dayText: 'Dag',
        delimiter: '.',
        hourText: 'Time',
        minuteText: 'Minutt',
        monthNames: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
        monthText: 'Måned',
        secText: 'Sekund',
        timeFormat: 'HH:ii',
        yearText: 'År',
        nowText: 'Nå',
        pmText: 'pm',
        amText: 'am',
        todayText: 'I dag',
        firstDay: 1,
        dateText: 'Dato',
        timeText: 'Tid',
        calendarText: 'Kalender',
        closeText: 'Lukk',
        fromText: 'Start',
        toText: 'End',
        wholeText: 'Hele',
        fractionText: 'Fraksjon',
        unitText: 'Enhet',
        labels: ['År', 'Måneder', 'Dager', 'Timer', 'Minutter', 'Sekunder', ''],
        labelsShort: ['År', 'Mån', 'Dag', 'Time', 'Min', 'Sek', ''],
        startText: 'Start',
        stopText: 'Stopp',
        resetText: 'Tilbakestille',
        lapText: 'Runde',
        hideText: 'Skjul',
        backText: 'Tilbake',
        undoText: 'Angre',
        offText: 'Av',
        onText: 'På',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.pl = {
        setText: 'Zestaw',
        cancelText: 'Anuluj',
        clearText: 'Oczyścić',
        selectedText: 'Wybór: {count}',
        dateFormat: 'yy-mm-dd',
        dayNames: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
        dayNamesShort: ['Niedz.', 'Pon.', 'Wt.', 'Śr.', 'Czw.', 'Pt.', 'Sob.'],
        dayNamesMin: ['N', 'P', 'W', 'Ś', 'C', 'P', 'S'],
        dayText: 'Dzień',
        hourText: 'Godziny',
        minuteText: 'Minuty',
        monthNames: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
        monthNamesShort: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
        monthText: 'Miesiąc',
        secText: 'Sekundy',
        timeFormat: 'HH:ii',
        yearText: 'Rok',
        nowText: 'Teraz',
        amText: 'rano',
        pmText: 'po południu',
        todayText: 'Dzisiaj',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Czas',
        calendarText: 'Kalendarz',
        closeText: 'Zakończenie',
        fromText: 'Rozpoczęcie',
        toText: 'Koniec',
        wholeText: 'Cały',
        fractionText: 'Ułamek',
        unitText: 'Jednostka',
        labels: ['Lata', 'Miesiąc', 'Dni', 'Godziny', 'Minuty', 'Sekundy', ''],
        labelsShort: ['R', 'M', 'Dz', 'Godz', 'Min', 'Sek', ''],
        startText: 'Rozpoczęcie',
        stopText: 'Zatrzymać',
        resetText: 'Zresetować',
        lapText: 'Zakładka',
        hideText: 'Ukryć',
        backText: 'Z powrotem',
        undoText: 'Cofnij',
        offText: 'Wył',
        onText: 'Wł',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n['pt-BR'] = {
        setText: 'Selecionar',
        cancelText: 'Cancelar',
        clearText: 'Claro',
        selectedText: '{count} selecionado',
        selectedPluralText: '{count} selecionados',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        dayText: 'Dia',
        hourText: 'Hora',
        minuteText: 'Minutos',
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        monthText: 'Mês',
        secText: 'Segundo',
        timeFormat: 'HH:ii',
        yearText: 'Ano',
        nowText: 'Agora',
        pmText: 'da tarde',
        amText: 'da manhã',
        todayText: 'Hoje',
        dateText: 'Data',
        timeText: 'Tempo',
        calendarText: 'Calendário',
        closeText: 'Fechar',
        fromText: 'In&iacute;cio',
        toText: 'Fim',
        wholeText: 'Inteiro',
        fractionText: 'Fração',
        unitText: 'Unidade',
        labels: ['Anos', 'Meses', 'Dias', 'Horas', 'Minutos', 'Segundos', ''],
        labelsShort: ['Ano', 'M&ecirc;s', 'Dia', 'Hora', 'Min', 'Seg', ''],
        startText: 'Começar',
        stopText: 'Pare',
        resetText: 'Reinicializar',
        lapText: 'Lap',
        hideText: 'Esconder',
        backText: 'De volta',
        undoText: 'Desfazer',
        offText: 'Desl',
        onText: 'Lig',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n['pt-PT'] = {
        setText: 'Seleccionar',
        cancelText: 'Cancelar',
        clearText: 'Claro',
        selectedText: '{count} selecionado',
        selectedPluralText: '{count} selecionados',
        dateFormat: 'dd-mm-yy',
        dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'S&aacute;bado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S&aacute;b'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        dayText: 'Dia',
        hourText: 'Horas',
        minuteText: 'Minutos',
        monthNames: ['Janeiro', 'Fevereiro', 'Mar&ccedil;o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        monthText: 'M&ecirc;s',
        secText: 'Segundo',
        timeFormat: 'HH:ii',
        yearText: 'Ano',
        nowText: 'Actualizar',
        pmText: 'da tarde',
        amText: 'da manhã',
        todayText: 'Hoy',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Tempo',
        calendarText: 'Calend&aacute;rio',
        closeText: 'Fechar',
        fromText: 'In&iacute;cio',
        toText: 'Fim',
        wholeText: 'Inteiro',
        fractionText: 'Frac&ccedil;&atilde;o',
        unitText: 'Unidade',
        labels: ['Anos', 'Meses', 'Dias', 'Horas', 'Minutos', 'Segundos', ''],
        labelsShort: ['Ano', 'M&ecirc;s', 'Dia', 'Hora', 'Min', 'Seg', ''],
        startText: 'Come&ccedil;ar',
        stopText: 'Parar',
        resetText: 'Reinicializar',
        lapText: 'Lap',
        hideText: 'Esconder',
        backText: 'De volta',
        undoText: 'Anular',
        offText: 'Desl',
        onText: 'Lig',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.ro = {
        setText: 'Setare',
        cancelText: 'Anulare',
        clearText: 'Ştergere',
        selectedText: '{count} selectat',
        selectedPluralText: '{count} selectate',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
        dayNamesShort: ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        dayText: ' Ziua',
        delimiter: '.',
        hourText: ' Ore ',
        minuteText: 'Minute',
        monthNames: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
        monthNamesShort: ['Ian.', 'Feb.', 'Mar.', 'Apr.', 'Mai', 'Iun.', 'Iul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
        monthText: 'Luna',
        secText: 'Secunde',
        timeFormat: 'HH:ii',
        yearText: 'Anul',
        nowText: 'Acum',
        amText: 'am',
        pmText: 'pm',
        todayText: 'Astăzi',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Ora',
        calendarText: 'Calendar',
        closeText: 'Închidere',
        fromText: 'Start',
        toText: 'Final',
        wholeText: 'Complet',
        fractionText: 'Parţial',
        unitText: 'Unitate',
        labels: ['Ani', 'Luni', 'Zile', 'Ore', 'Minute', 'Secunde', ''],
        labelsShort: ['Ani', 'Luni', 'Zile', 'Ore', 'Min.', 'Sec.', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Resetare',
        lapText: 'Tură',
        hideText: 'Ascundere',
        backText: 'Înapoi',
        undoText: 'Anulaţi',
        offText: 'Nu',
        onText: 'Da',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n['ru-UA'] = {
        setText: 'Установить',
        cancelText: 'Отменить',
        clearText: 'Очиститьr',
        selectedText: '{count} Вібрать',
        dateFormat: 'dd.mm.yy',
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
        dayNamesMin: ['в', 'п', 'в', 'с', 'ч', 'п', 'с'],
        dayText: 'День',
        delimiter: '.',
        hourText: 'Часы',
        minuteText: 'Минуты',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв.', 'Февр.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.'],
        monthText: 'Месяцы',
        secText: 'Сикунды',
        timeFormat: 'HH:ii',
        yearText: 'Год',
        nowText: 'Сейчас',
        amText: 'До полудня',
        pmText: 'После полудня',
        todayText: 'Cегодня',
        firstDay: 1,
        dateText: 'Дата',
        timeText: 'Время',
        calendarText: 'Календарь',
        closeText: 'Закрыть',
        fromText: 'Начало',
        toText: 'Конец',
        wholeText: 'Весь',
        fractionText: 'Часть',
        unitText: 'Единица',
        labels: ['Годы', ' Месяцы ', ' Дни ', ' Часы ', ' Минуты ', ' Секунды', ''],
        labelsShort: ['Год', 'Мес.', 'Дн.', 'Ч.', 'Мин.', 'Сек.', ''],
        startText: 'Старт',
        stopText: 'Стоп',
        resetText: ' Сброс ',
        lapText: ' Этап ',
        hideText: ' Скрыть ',
        backText: 'назад',
        undoText: 'аннулировать',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n['ru-RU'] = mobiscroll.i18n.ru = {
        setText: 'Установить',
        cancelText: 'Отмена',
        clearText: 'Очистить',
        selectedText: '{count} Выбрать',
        dateFormat: 'dd.mm.yy',
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
        dayNamesMin: ['в', 'п', 'в', 'с', 'ч', 'п', 'с'],
        dayText: 'День',
        delimiter: '.',
        hourText: 'Час',
        minuteText: 'Минут',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        monthText: 'Месяц',
        secText: 'Секунд',
        timeFormat: 'HH:ii',
        yearText: 'Год',
        nowText: 'Сейчас',
        amText: 'До полудня',
        pmText: 'После полудня',
        todayText: 'Cегодня',
        firstDay: 1,
        dateText: 'Дата',
        timeText: 'Время',
        calendarText: 'Календарь',
        closeText: 'Закрыть',
        fromText: 'Начало',
        toText: 'Конец',
        wholeText: 'Целое',
        fractionText: 'Дробное',
        unitText: 'Единица',
        labels: ['Лет', 'Месяцев', 'Дней', 'Часов', 'Минут', 'Секунд', ''],
        labelsShort: ['Лет', 'Мес', 'Дн', 'Час', 'Мин', 'Сек', ''],
        startText: 'Старт',
        stopText: 'Стоп',
        resetText: 'Сбросить',
        lapText: 'Круг',
        hideText: 'Скрыть',
        backText: 'назад',
        undoText: 'аннулировать',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.sk = {
        setText: 'Zadaj',
        cancelText: 'Zrušiť',
        clearText: 'Vymazať',
        selectedText: 'Označený: {count}',
        dateFormat: 'd.m.yy',
        dayNames: ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota'],
        dayNamesShort: ['Ne', 'Po', 'Ut', 'St', 'Št', 'Pi', 'So'],
        dayNamesMin: ['N', 'P', 'U', 'S', 'Š', 'P', 'S'],
        dayText: 'Ďeň',
        hourText: 'Hodiny',
        minuteText: 'Minúty',
        monthNames: ['Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Máj', 'Jún', 'Júl', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
        monthText: 'Mesiac',
        secText: 'Sekundy',
        timeFormat: 'H:ii',
        yearText: 'Rok',
        nowText: 'Teraz',
        amText: 'am',
        pmText: 'pm',
        todayText: 'Dnes',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Čas',
        calendarText: 'Kalendár',
        closeText: 'Zavrieť',
        fromText: 'Začiatok',
        toText: 'Koniec',
        wholeText: 'Celý',
        fractionText: 'Časť',
        unitText: 'Jednotka',
        labels: ['Roky', 'Mesiace', 'Dni', 'Hodiny', 'Minúty', 'Sekundy', ''],
        labelsShort: ['Rok', 'Mes', 'Dni', 'Hod', 'Min', 'Sec', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Resetovať',
        lapText: 'Etapa',
        hideText: 'Schovať',
        backText: 'Späť',
        undoText: 'Späť',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.sv = {
        setText: 'OK',
        cancelText: 'Avbryt',
        clearText: 'Klara',
        selectedText: '{count} vald',
        dateFormat: 'yy-mm-dd',
        dayNames: ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'],
        dayNamesShort: ['Sö', 'Må', 'Ti', 'On', 'To', 'Fr', 'Lö'],
        dayNamesMin: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
        dayText: 'Dag',
        hourText: 'Timme',
        minuteText: 'Minut',
        monthNames: ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
        monthText: 'Månad',
        secText: 'Sekund',
        timeFormat: 'HH:ii',
        yearText: 'År',
        nowText: 'Nu',
        pmText: 'pm',
        amText: 'am',
        todayText: 'I dag',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Tid',
        calendarText: 'Kalender',
        closeText: 'Stäng',
        fromText: 'Start',
        toText: 'Slut',
        wholeText: 'Hela',
        fractionText: 'Bråk',
        unitText: 'Enhet',
        labels: ['År', 'Månader', 'Dagar', 'Timmar', 'Minuter', 'Sekunder', ''],
        labelsShort: ['År', 'Mån', 'Dag', 'Tim', 'Min', 'Sek', ''],
        startText: 'Start',
        stopText: 'Stopp',
        resetText: 'Återställ',
        lapText: 'Varv',
        hideText: 'Dölj',
        backText: 'Tillbaka',
        undoText: 'Ångra',
        offText: 'Av',
        onText: 'På'
    };
}());
(function() {
    mobiscroll.i18n.tr = {
        setText: 'Seç',
        cancelText: 'İptal',
        clearText: 'Temizleyin',
        selectedText: '{count} seçilmiş',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
        dayNamesShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
        dayNamesMin: ['P', 'P', 'S', 'Ç', 'P', 'C', 'C'],
        dayText: 'Gün',
        delimiter: '.',
        hourText: 'Saat',
        minuteText: 'Dakika',
        monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        monthNamesShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
        monthText: 'Ay',
        secText: 'Saniye',
        timeFormat: 'HH:ii',
        yearText: 'Yıl',
        nowText: 'Şimdi',
        pmText: 'akşam',
        amText: 'sabah',
        todayText: 'Bugün',
        firstDay: 1,
        dateText: 'Tarih',
        timeText: 'Zaman',
        calendarText: 'Takvim',
        closeText: 'Kapatmak',
        fromText: 'Başla',
        toText: 'Son',
        wholeText: 'Tam',
        fractionText: 'Kesir',
        unitText: 'Birim',
        labels: ['Yıl', 'Ay', 'Gün', 'Saat', 'Dakika', 'Saniye', ''],
        labelsShort: ['Yıl', 'Ay', 'Gün', 'Sa', 'Dak', 'Sn', ''],
        startText: 'Başla',
        stopText: 'Durdur',
        resetText: 'Sıfırla',
        lapText: 'Tur',
        hideText: 'Gizle',
        backText: 'Geri',
        undoText: 'Geri Al',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: '.'
    };
}());
(function() {
    mobiscroll.i18n.zh = {
        setText: '确定',
        cancelText: '取消',
        clearText: '明确',
        selectedText: '{count} 选',
        dateFormat: 'yy/mm/dd',
        dayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
        dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
        dayText: '日',
        hourText: '时',
        minuteText: '分',
        monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        monthNamesShort: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
        monthText: '月',
        secText: '秒',
        timeFormat: 'HH:ii',
        yearText: '年',
        nowText: '当前',
        pmText: '下午',
        amText: '上午',
        todayText: '今天',
        dateText: '日',
        timeText: '时间',
        calendarText: '日历',
        closeText: '关闭',
        fromText: '开始时间',
        toText: '结束时间',
        wholeText: '合计',
        fractionText: '分数',
        unitText: '单位',
        labels: ['年', '月', '日', '小时', '分钟', '秒', ''],
        labelsShort: ['年', '月', '日', '点', '分', '秒', ''],
        startText: '开始',
        stopText: '停止',
        resetText: '重置',
        lapText: '圈',
        hideText: '隐藏',
        backText: '背部',
        undoText: '复原',
        offText: '关闭',
        onText: '开启',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function(j, d, m) {
    var l, k, b = mobiscroll,
        a = b.$,
        i = b.platform,
        f = b.util,
        o = f.constrain,
        e = f.isString,
        g = f.getCoord,
        q = /(iphone|ipod)/i.test(navigator.userAgent) && i.majorVersion >= 7,
        p = i.name == 'ios' && i.majorVersion == 8,
        h = 'webkitAnimationEnd.mbsc animationend.mbsc',
        c = function() {},
        n = function(a) {
            a.preventDefault();
        };
    b.classes.Frame = function(aa, _, ac) {
        var S, x, a0, M, r, L, $, F, w, a3, C, z, t, v, y, s, W, P, D, E, A, H, G, Y, B, K, T, p, N, O, X, Q, R, i = this,
            u = a(aa),
            U = [],
            V = {};

        function ab(b) {
            if (z) {
                z.removeClass('mbsc-fr-btn-a');
            }
            z = a(this);
            if (!z.hasClass('mbsc-fr-btn-d') && !z.hasClass('mbsc-fr-btn-nhl')) {
                z.addClass('mbsc-fr-btn-a');
            }
            if (b.type === 'mousedown') {
                a(d).on('mouseup', I);
            } else if (b.type === 'pointerdown') {
                a(d).on('pointerup', I);
            }
        }

        function I(b) {
            if (z) {
                z.removeClass('mbsc-fr-btn-a');
                z = null;
            }
            if (b.type === 'mouseup') {
                a(d).off('mouseup', I);
            } else if (b.type === 'pointerup') {
                a(d).off('pointerup', I);
            }
        }

        function a4(a) {
            if (a.keyCode == 13) {
                i.select();
            } else if (a.keyCode == 27) {
                i.cancel();
            }
        }

        function a5(a) {
            if (!a) {
                Y.focus();
            }
            i.ariaMessage(p.ariaMessage);
        }

        function a6(e) {
            var d = l,
                c = p.focusOnClose;
            i._markupRemove();
            r.remove();
            if (s) {
                M.removeClass(P);
                if (G) {
                    x.css({
                        top: '',
                        left: ''
                    });
                    w.scrollLeft(N);
                    w.scrollTop(X);
                }
            }
            if (!e) {
                if (!d) {
                    d = u;
                }
                setTimeout(function() {
                    if (b.activeInstance) {
                        return;
                    }
                    if (c === m || c === true) {
                        k = true;
                        d[0].focus();
                    } else if (c) {
                        a(c)[0].focus();
                    }
                }, 200);
            }
            l = null;
            i._isVisible = false;
            W = false;
            v('onHide');
        }

        function a7(a) {
            clearTimeout(V[a.type]);
            V[a.type] = setTimeout(function() {
                var c, b = a.type == 'scroll';
                if (b && !O) {
                    return;
                }
                i.position(!b);
                if (a.type == 'orientationchange') {
                    B.style.display = 'none';
                    c = B.offsetHeight;
                    B.style.display = '';
                }
            }, 200);
        }

        function a8(a) {
            if (a.target.nodeType && !B.contains(a.target)) {
                B.focus();
            }
        }

        function a9() {
            if (a(d.activeElement).is('input,textarea')) {
                d.activeElement.blur();
            }
        }

        function J(a, b) {
            if (a) {
                a();
            }
            if (i.show() !== false) {
                l = b;
                setTimeout(function() {
                    k = false;
                }, 300);
            }
        }

        function a2() {
            i._fillValue();
            v('onSet', {
                valueText: i._value
            });
        }

        function a1() {
            v('onCancel', {
                valueText: i._value
            });
        }

        function Z() {
            i.setVal(null, true);
        }
        b.classes.Base.call(this, aa, _, true);
        i.position = function(S) {
            var q, N, C, G, h, J, K, L, M, I, P, c, f, t, g, k, z = {},
                j = 0,
                e = 0,
                l = 0,
                n = 0;
            if (T || !W) {
                return;
            }
            c = D.offsetHeight;
            f = D.offsetWidth;
            if (Q === f && R === c && S) {
                return;
            }
            if (i._isFullScreen || /top|bottom/.test(p.display)) {
                F.width(f);
            }
            if (v('onPosition', {
                    target: D,
                    windowWidth: f,
                    windowHeight: c
                }) === false || !s) {
                return;
            }
            a('.mbsc-comp', r).each(function() {
                var a = b.instances[this.id];
                if (a && a !== i && a.position) {
                    a.position();
                }
            });
            if (!i._isFullScreen && /center|bubble/.test(p.display)) {
                a('.mbsc-w-p', r).each(function() {
                    t = this.getBoundingClientRect().width;
                    n += t;
                    l = t > l ? t : l;
                });
                a3.css({
                    'width': n > f ? l : n,
                    'white-space': n > f ? '' : 'nowrap'
                });
            }
            E = B.offsetWidth;
            A = B.offsetHeight;
            i.scrollLock = O = A <= c && E <= f;
            if (H) {
                j = w.scrollLeft();
                e = w.scrollTop();
            }
            if (p.display == 'center') {
                k = Math.max(0, j + (f - E) / 2);
                g = Math.max(0, e + (c - A) / 2);
            } else if (p.display == 'bubble') {
                q = p.anchor === m ? u : a(p.anchor);
                K = a('.mbsc-fr-arr-i', r)[0];
                G = q.offset();
                h = G.top + (y ? e - x.offset().top : 0);
                J = G.left + (y ? j - x.offset().left : 0);
                N = q[0].offsetWidth;
                C = q[0].offsetHeight;
                L = K.offsetWidth;
                M = K.offsetHeight;
                k = o(J - (E - N) / 2, j + 8, j + f - E - 8);
                g = h - A - M / 2;
                if (g < e || h > e + c) {
                    F.removeClass('mbsc-fr-bubble-top').addClass('mbsc-fr-bubble-bottom');
                    g = h + C + M / 2;
                } else {
                    F.removeClass('mbsc-fr-bubble-bottom').addClass('mbsc-fr-bubble-top');
                }
                a('.mbsc-fr-arr', r).css({
                    left: o(J + N / 2 - (k + (E - L) / 2), 0, L)
                });
            } else {
                k = j;
                g = p.display == 'top' ? e : Math.max(0, e + c - A);
            }
            if (H) {
                I = Math.max(g + A, y ? x[0].scrollHeight : a(d).height());
                P = Math.max(k + E, y ? x[0].scrollWidth : a(d).width());
                $.css({
                    width: P,
                    height: I
                });
                if (p.scroll && p.display == 'bubble' && (g + A + 8 > e + c || h > e + c || h + C < e)) {
                    T = true;
                    setTimeout(function() {
                        T = false;
                    }, 300);
                    w.scrollTop(Math.min(h, g + A - c + 8, I - c));
                }
            }
            z.top = g;
            z.left = k;
            F.css(z);
            Q = f;
            R = c;
        };
        i.attachShow = function(f, d) {
            var c, b = a(f),
                e = b.prop('readonly');
            if (p.display !== 'inline') {
                if ((p.showOnFocus || p.showOnTap) && b.is('input,select')) {
                    b.prop('readonly', true).on('mousedown.mbsc', function(a) {
                        a.preventDefault();
                    }).on('focus.mbsc', function() {
                        if (i._isVisible) {
                            this.blur();
                        }
                    });
                    c = a('label[for="' + b.attr('id') + '"]');
                    if (!c.length) {
                        c = b.closest('label');
                    }
                }
                if (b.is('select')) {
                    return;
                }
                if (p.showOnFocus) {
                    b.on('focus.mbsc', function() {
                        if (!k) {
                            J(d, b);
                        }
                    });
                }
                if (p.showOnTap) {
                    b.on('keydown.mbsc', function(a) {
                        if (a.keyCode == 32 || a.keyCode == 13) {
                            a.preventDefault();
                            a.stopPropagation();
                            J(d, b);
                        }
                    });
                    i.tap(b, function() {
                        J(d, b);
                    });
                    if (c && c.length) {
                        i.tap(c, function() {
                            J(d, b);
                        });
                    }
                }
                U.push({
                    readOnly: e,
                    el: b,
                    lbl: c
                });
            }
        };
        i.select = function() {
            if (s) {
                i.hide(false, 'set', false, a2);
            } else {
                a2();
            }
        };
        i.cancel = function() {
            if (s) {
                i.hide(false, 'cancel', false, a1);
            } else {
                a1();
            }
        };
        i.clear = function() {
            i._clearValue();
            v('onClear');
            if (s && i._isVisible && !i.live) {
                i.hide(false, 'clear', false, Z);
            } else {
                Z();
            }
        };
        i.enable = function() {
            p.disabled = false;
            if (i._isInput) {
                u.prop('disabled', false);
            }
        };
        i.disable = function() {
            p.disabled = true;
            if (i._isInput) {
                u.prop('disabled', true);
            }
        };
        i.show = function(E, o) {
            var l, c;
            if (p.disabled || i._isVisible) {
                return;
            }
            i._readValue();
            if (v('onBeforeShow') === false) {
                return false;
            }
            t = p.animate;
            H = y || p.display == 'bubble';
            G = q && !H;
            l = C.length > 0;
            if (t !== false) {
                if (p.display == 'top') {
                    t = 'slidedown';
                } else if (p.display == 'bottom') {
                    t = 'slideup';
                } else if (p.display == 'center' || p.display == 'bubble') {
                    t = p.animate || 'pop';
                }
            }
            if (s) {
                P = 'mbsc-fr-lock' + (G ? ' mbsc-fr-lock-ios' : '') + (y ? ' mbsc-fr-lock-ctx' : '');
                X = w.scrollTop();
                N = w.scrollLeft();
                Q = 0;
                R = 0;
                if (G) {
                    M.scrollTop(0);
                    x.css({
                        top: -X + 'px',
                        left: -N + 'px'
                    });
                }
                M.addClass(P);
                a9();
                if (b.activeInstance) {
                    b.activeInstance.hide();
                }
                b.activeInstance = i;
            }
            c = '<div lang="' + p.lang + '" class="mbsc-fr mbsc-' + p.theme + (p.baseTheme ? ' mbsc-' + p.baseTheme : '') + ' mbsc-fr-' + p.display + ' ' + (p.cssClass || '') + ' ' + (p.compClass || '') + (i._isLiquid ? ' mbsc-fr-liq' : '') + (G ? ' mbsc-platform-ios' : '') + (l ? C.length >= 3 ? ' mbsc-fr-btn-block ' : '' : ' mbsc-fr-nobtn') + '">' + (s ? '<div class="mbsc-fr-persp"><div class="mbsc-fr-overlay"></div><div role="dialog" tabindex="-1" class="mbsc-fr-scroll">' : '') + '<div class="mbsc-fr-popup' + (p.rtl ? ' mbsc-rtl' : ' mbsc-ltr') + (p.headerText ? ' mbsc-fr-has-hdr' : '') + '">' + (p.display === 'bubble' ? '<div class="mbsc-fr-arr-w"><div class="mbsc-fr-arr-i"><div class="mbsc-fr-arr"></div></div></div>' : '') + '<div class="mbsc-fr-w">' + '<div aria-live="assertive" class="mbsc-fr-aria mbsc-fr-hdn"></div>' + (p.headerText ? '<div class="mbsc-fr-hdr">' + (e(p.headerText) ? p.headerText : '') + '</div>' : '') + '<div class="mbsc-fr-c">';
            c += i._generateContent();
            c += '</div>';
            if (l) {
                c += '<div class="mbsc-fr-btn-cont">';
                a.each(C, function(b, a) {
                    a = e(a) ? i.buttons[a] : a;
                    if (a.handler === 'set') {
                        a.parentClass = 'mbsc-fr-btn-s';
                    }
                    if (a.handler === 'cancel') {
                        a.parentClass = 'mbsc-fr-btn-c';
                    }
                    c += '<div' + (p.btnWidth ? ' style="width:' + 100 / C.length + '%"' : '') + ' class="mbsc-fr-btn-w ' + (a.parentClass || '') + '"><div tabindex="0" role="button" class="mbsc-fr-btn' + b + ' mbsc-fr-btn-e ' + (a.cssClass === m ? p.btnClass : a.cssClass) + (a.icon ? ' mbsc-ic mbsc-ic-' + a.icon : '') + '">' + (a.text || '') + '</div></div>';
                });
                c += '</div>';
            }
            c += '</div></div></div></div>' + (s ? '</div></div>' : '');
            r = a(c);
            $ = a('.mbsc-fr-persp', r);
            L = a('.mbsc-fr-scroll', r);
            a3 = a('.mbsc-fr-w', r);
            a0 = a('.mbsc-fr-hdr', r);
            F = a('.mbsc-fr-popup', r);
            S = a('.mbsc-fr-aria', r);
            D = r[0];
            Y = L[0];
            B = F[0];
            i._markup = r;
            i._header = a0;
            i._isVisible = true;
            K = 'orientationchange resize';
            i._markupReady(r);
            v('onMarkupReady', {
                target: D
            });
            if (s) {
                a(j).on('keydown', a4);
                if (p.scrollLock) {
                    r.on('touchmove mousewheel wheel', function(a) {
                        if (O) {
                            a.preventDefault();
                        }
                    });
                }
                if (p.focusTrap) {
                    w.on('focusin', a8);
                }
                if (p.closeOnOverlayTap) {
                    var k, d, z, A;
                    L.on('touchstart mousedown', function(a) {
                        if (!d && a.target == L[0]) {
                            d = true;
                            k = false;
                            z = g(a, 'X');
                            A = g(a, 'Y');
                        }
                    }).on('touchmove mousemove', function(a) {
                        if (d && !k && (Math.abs(g(a, 'X') - z) > 9 || Math.abs(g(a, 'Y') - A) > 9)) {
                            k = true;
                        }
                    }).on('touchcancel', function() {
                        d = false;
                    }).on('touchend touchcancel mouseup', function(a) {
                        if (d && !k) {
                            i.cancel();
                            if (a.type != 'mouseup') {
                                f.preventClick();
                            }
                        }
                        d = false;
                    });
                }
                if (H) {
                    K += ' scroll';
                }
            }
            setTimeout(function() {
                if (s) {
                    r.appendTo(x);
                } else if (u.is('div') && !i._hasContent) {
                    u.empty().append(r);
                } else {
                    r.insertAfter(u);
                }
                W = true;
                i._markupInserted(r);
                v('onMarkupInserted', {
                    target: D
                });
                r.on('selectstart mousedown', n).on('click', '.mbsc-fr-btn-e', n).on('keydown', '.mbsc-fr-btn-e', function(a) {
                    if (a.keyCode == 32) {
                        a.preventDefault();
                        a.stopPropagation();
                        this.click();
                    }
                }).on('keydown', function(b) {
                    if (b.keyCode == 32) {
                        b.preventDefault();
                    } else if (b.keyCode == 9 && s && p.focusTrap) {
                        var c = r.find('[tabindex="0"]').filter(function() {
                                return this.offsetWidth > 0 || this.offsetHeight > 0;
                            }),
                            f = c.index(a(':focus', r)),
                            d = c.length - 1,
                            e = 0;
                        if (b.shiftKey) {
                            d = 0;
                            e = -1;
                        }
                        if (f === d) {
                            c.eq(e)[0].focus();
                            b.preventDefault();
                        }
                    }
                }).on('touchstart mousedown pointerdown', '.mbsc-fr-btn-e', ab).on('touchend', '.mbsc-fr-btn-e', I);
                a('input,select,textarea', r).on('selectstart mousedown', function(a) {
                    a.stopPropagation();
                }).on('keydown', function(a) {
                    if (a.keyCode == 32) {
                        a.stopPropagation();
                    }
                });
                a.each(C, function(c, b) {
                    i.tap(a('.mbsc-fr-btn' + c, r), function(a) {
                        b = e(b) ? i.buttons[b] : b;
                        (e(b.handler) ? i.handlers[b.handler] : b.handler).call(this, a, i);
                    }, true);
                });
                i._attachEvents(r);
                i.position();
                w.on(K, a7);
                if (s) {
                    if (t && !E) {
                        r.addClass('mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-' + t).on(h, function() {
                            r.off(h).removeClass('mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-' + t).find('.mbsc-fr-popup').removeClass('mbsc-anim-' + t);
                            a5(o);
                        }).find('.mbsc-fr-popup').addClass('mbsc-anim-' + t);
                    } else {
                        a5(o);
                    }
                }
                v('onShow', {
                    target: D,
                    valueText: i._tempValue
                });
            }, G ? 100 : 0);
        };
        i.hide = function(c, d, e, f) {
            if (!i._isVisible || !e && !i._isValid && d == 'set' || !e && v('onBeforeClose', {
                    valueText: i._tempValue,
                    button: d
                }) === false) {
                return false;
            }
            if (r) {
                if (s && t && !c && !r.hasClass('mbsc-anim-trans')) {
                    r.addClass('mbsc-anim-out mbsc-anim-trans mbsc-anim-trans-' + t).on(h, function() {
                        r.off(h);
                        a6(c);
                    }).find('.mbsc-fr-popup').addClass('mbsc-anim-' + t);
                } else {
                    a6(c);
                }
                i._detachEvents(r);
                w.off(K, a7).off('focusin', a8);
            }
            if (s) {
                a9();
                a(j).off('keydown', a4);
                delete b.activeInstance;
            }
            if (f) {
                f();
            }
            v('onClose', {
                valueText: i._value
            });
        };
        i.ariaMessage = function(a) {
            S.html('');
            setTimeout(function() {
                S.html(a);
            }, 100);
        };
        i.isVisible = function() {
            return i._isVisible;
        };
        i.setVal = c;
        i.getVal = c;
        i._generateContent = c;
        i._attachEvents = c;
        i._detachEvents = c;
        i._readValue = c;
        i._clearValue = c;
        i._fillValue = c;
        i._markupReady = c;
        i._markupInserted = c;
        i._markupRemove = c;
        i._processSettings = c;
        i._presetLoad = function(a) {
            a.buttons = a.buttons || (a.display !== 'inline' ? ['set', 'cancel'] : []);
            a.headerText = a.headerText === m ? a.display !== 'inline' ? '{value}' : false : a.headerText;
        };
        i.destroy = function() {
            i.hide(true, false, true);
            a.each(U, function(b, a) {
                a.el.off('.mbsc').prop('readonly', a.readOnly);
                if (a.lbl) {
                    a.lbl.off('.mbsc');
                }
            });
            i._destroy();
        };
        i.init = function(b) {
            if (i._isVisible) {
                i.hide(true, false, true);
            }
            i._init(b);
            i._isLiquid = (p.layout || (/top|bottom/.test(p.display) ? 'liquid' : '')) === 'liquid';
            i._processSettings();
            u.off('.mbsc');
            C = p.buttons || [];
            s = p.display !== 'inline';
            y = p.context != 'body';
            i._window = w = a(y ? p.context : j);
            i._context = x = a(p.context);
            M = y ? x : a('body,html');
            i.live = true;
            a.each(C, function(b, a) {
                if (a == 'ok' || a == 'set' || a.handler == 'set') {
                    i.live = false;
                    return false;
                }
            });
            i.buttons.set = {
                text: p.setText,
                handler: 'set'
            };
            i.buttons.cancel = {
                text: i.live ? p.closeText : p.cancelText,
                handler: 'cancel'
            };
            i.buttons.clear = {
                text: p.clearText,
                handler: 'clear'
            };
            i._isInput = u.is('input');
            v('onInit');
            if (s) {
                i._readValue();
                if (!i._hasContent) {
                    i.attachShow(u);
                }
            } else {
                i.show();
            }
            u.on('change.mbsc', function() {
                if (!i._preventChange) {
                    i.setVal(u.val(), true, false);
                }
                i._preventChange = false;
            });
        };
        i.buttons = {};
        i.handlers = {
            set: i.select,
            cancel: i.cancel,
            clear: i.clear
        };
        i._value = null;
        i._isValid = true;
        i._isVisible = false;
        p = i.settings;
        v = i.trigger;
        if (!ac) {
            i.init(_);
        }
    };
    b.classes.Frame.prototype._defaults = {
        lang: 'en',
        setText: 'Set',
        selectedText: '{count} selected',
        closeText: 'Close',
        cancelText: 'Cancel',
        clearText: 'Clear',
        context: 'body',
        disabled: false,
        closeOnOverlayTap: true,
        showOnFocus: false,
        showOnTap: true,
        display: 'center',
        scroll: true,
        scrollLock: true,
        tap: true,
        btnClass: 'mbsc-fr-btn',
        btnWidth: true,
        focusTrap: true,
        focusOnClose: !p
    };
    b.themes.frame.mobiscroll = {
        rows: 5,
        showLabel: false,
        headerText: false,
        btnWidth: false,
        selectedLineBorder: 1,
        weekDays: 'min',
        checkIcon: 'ion-ios7-checkmark-empty',
        btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down5',
        btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up5',
        btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left5',
        btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right5'
    };
    a(j).on('focus', function() {
        if (l) {
            k = true;
        }
    });
}(window, document));
(function() {
    mobiscroll.themes.frame['android-holo'] = {
        dateDisplay: 'Mddyy',
        rows: 5,
        minWidth: 76,
        height: 36,
        showLabel: false,
        selectedLineBorder: 2,
        useShortLabels: true,
        icon: {
            filled: 'star3',
            empty: 'star'
        },
        btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down6',
        btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up6'
    };
}());
(function() {
    mobiscroll.themes.frame.ios = {
        display: 'bottom',
        dateDisplay: 'MMdyy',
        rows: 5,
        height: 34,
        minWidth: 55,
        scroll3d: true,
        headerText: false,
        showLabel: false,
        btnWidth: false,
        selectedLineBorder: 1,
        useShortLabels: true,
        deleteIcon: 'ios-backspace',
        checkIcon: 'ion-ios7-checkmark-empty',
        btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left5',
        btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right5',
        btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down5',
        btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up5'
    };
}());
(function() {
    var b = mobiscroll,
        a = b.$;
    b.themes.frame.jqm = {
        jqmBody: 'a',
        jqmBorder: 'a',
        jqmLine: 'b',
        jqmSet: 'b',
        jqmCancel: 'c',
        dateDisplay: 'Mddyy',
        disabledClass: 'ui-disabled',
        activeClass: 'ui-btn-active',
        activeTabInnerClass: 'ui-btn-active',
        btnCalPrevClass: '',
        btnCalNextClass: '',
        selectedLineBorder: 1,
        checkIcon: 'none ui-btn-icon-left ui-icon-check',
        onThemeLoad: function(d) {
            var a = d.settings,
                b = a.jqmBody || 'c',
                c = a.jqmEventBubble || 'a';
            a.dayClass = 'ui-body-a ui-body-' + b;
            a.innerDayClass = 'ui-state-default ui-btn ui-btn-up-' + b;
            a.calendarClass = 'ui-body-a ui-body-' + b;
            a.weekNrClass = 'ui-body-a ui-body-' + b;
            a.eventBubbleClass = 'ui-body-' + c;
        },
        onInit: function() {
            a(this).closest('.ui-field-contain').trigger('create');
        },
        onEventBubbleShow: function(b) {
            a('.mbsc-cal-event-list', b.eventList).attr('data-role', 'listview');
            a(b.eventList).page().trigger('create');
        },
        onMarkupInserted: function(d, e) {
            var c = e.settings,
                b = a(d.target);
            a('.mbsc-np-btn, .mbsc-cal-sc-m-cell .mbsc-cal-sc-cell-i', b).addClass('ui-btn');
            a('.mbsc-fr-btn-cont .mbsc-fr-btn, .mbsc-range-btn', b).addClass('ui-btn ui-mini ui-corner-all');
            a('.mbsc-cal-prev .mbsc-cal-btn-txt', b).addClass('ui-btn ui-icon-arrow-l ui-btn-icon-notext ui-shadow ui-corner-all');
            a('.mbsc-cal-next .mbsc-cal-btn-txt', b).addClass('ui-btn ui-icon-arrow-r ui-btn-icon-notext ui-shadow ui-corner-all');
            a('.mbsc-fr-popup', b).removeClass('dwbg').addClass('ui-selectmenu ui-overlay-shadow ui-corner-all ui-body-' + c.jqmBorder);
            a('.mbsc-fr-btn-s .mbsc-fr-btn', b).addClass('ui-btn-' + c.jqmSet);
            a('.mbsc-fr-hdr', b).addClass('ui-header ui-bar-inherit');
            a('.mbsc-fr-w', b).addClass('ui-corner-all ui-body-' + c.jqmBody);
            a('.mbsc-sc-btn', b).addClass('ui-btn ui-mini ui-corner-all ui-btn-icon-top');
            a('.mbsc-sc-btn-plus', b).addClass('ui-icon-carat-d');
            a('.mbsc-sc-btn-minus', b).addClass('ui-icon-carat-u');
            a('.mbsc-sc-whl-l', b).addClass('ui-body-' + c.jqmLine);
            a('.mbsc-cal-tabs', b).attr('data-role', 'navbar');
            a('.mbsc-cal-prev .mbsc-cal-btn-txt', b).attr('data-role', 'button').attr('data-icon', 'arrow-l').attr('data-iconpos', 'notext');
            a('.mbsc-cal-next .mbsc-cal-btn-txt', b).attr('data-role', 'button').attr('data-icon', 'arrow-r').attr('data-iconpos', 'notext');
            a('.mbsc-cal-events', b).attr('data-role', 'page');
            a('.mbsc-range-btn', b).attr('data-role', 'button').attr('data-mini', 'true');
            a('.mbsc-np-btn', b).attr('data-role', 'button').attr('data-corners', 'false');
            b.trigger('create');
        }
    };
}());
(function() {
    var b = mobiscroll,
        a = b.$,
        c = b.themes.frame,
        d = {
            minWidth: 76,
            height: 76,
            dateDisplay: 'mmMMddDDyy',
            headerText: false,
            showLabel: false,
            deleteIcon: 'backspace4',
            icon: {
                filled: 'star3',
                empty: 'star'
            },
            btnWidth: false,
            btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left2',
            btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right2',
            btnPlusClass: 'mbsc-ic mbsc-ic-plus',
            btnMinusClass: 'mbsc-ic mbsc-ic-minus',
            onMarkupInserted: function(g, h) {
                var b, d, f, e = a(g.target),
                    c = h.settings;

                function i(b) {
                    return a.isArray(c.readonly) ? c.readonly[b] : c.readonly;
                }
                a('.mbsc-sc-whl', e).on('touchstart mousedown wheel mousewheel', function(c) {
                    if (c.type === 'mousedown' && d || i(a(this).attr('data-index'))) {
                        return;
                    }
                    d = c.type === 'touchstart';
                    b = true;
                    f = a(this).hasClass('mbsc-sc-whl-wpa');
                    a('.mbsc-sc-whl', e).removeClass('mbsc-sc-whl-wpa');
                    a(this).addClass('mbsc-sc-whl-wpa');
                }).on('touchmove mousemove', function() {
                    b = false;
                }).on('touchend mouseup', function(c) {
                    if (b && f && a(c.target).closest('.mbsc-sc-itm').hasClass('mbsc-sc-itm-sel')) {
                        a(this).removeClass('mbsc-sc-whl-wpa');
                    }
                    if (c.type === 'mouseup') {
                        d = false;
                    }
                    b = false;
                });
            },
            onInit: function(c, b) {
                var a = b.buttons;
                a.set.icon = 'checkmark';
                a.cancel.icon = 'close';
                a.clear.icon = 'close';
                if (a.ok) {
                    a.ok.icon = 'checkmark';
                }
                if (a.close) {
                    a.close.icon = 'close';
                }
                if (a.now) {
                    a.now.icon = 'loop2';
                }
                if (a.toggle) {
                    a.toggle.icon = 'play3';
                }
                if (a.start) {
                    a.start.icon = 'play3';
                }
                if (a.stop) {
                    a.stop.icon = 'pause2';
                }
                if (a.reset) {
                    a.reset.icon = 'stop2';
                }
                if (a.lap) {
                    a.lap.icon = 'loop2';
                }
                if (a.hide) {
                    a.hide.icon = 'close';
                }
            }
        };
    c.wp = d;
}());
(function(h) {
    var e = mobiscroll,
        b = e.$,
        g = e.classes,
        a = e.util,
        c = a.constrain,
        l = a.jsPrefix,
        q = a.prefix,
        d = a.getCoord,
        k = a.getPosition,
        m = a.testTouch,
        f = a.isNumeric,
        n = a.isString,
        o = /(iphone|ipod|ipad)/i.test(navigator.userAgent),
        p = function() {},
        i = window.requestAnimationFrame || function(a) {
            a();
        },
        j = window.cancelAnimationFrame || p;
    g.ScrollView = function(I, a1, aa) {
        var y, a0, N, P, M, t, $, L, W, Z, a9, r, K, ab, A, E, D, O, F, J, T, G, H, a4, Q, u, v, x, a3, X, a2, _, B, Y, w, e, p = this,
            s, z = 0,
            R = 1,
            a = a1,
            C = b(I);

        function a6(c) {

            w('onStart');
            if (a.stopProp) {
                c.stopPropagation();
            }
            if (a.prevDef || c.type == 'mousedown') {
                c.preventDefault();
            }
            if (a.readonly || a.lock && F) {
                return;
            }
            if (m(c, this) && !O && mobiscroll.vKMaI) {
							
                if (y) {
                    y.removeClass('mbsc-btn-a');
                }
                K = false;
                if (!F) {
                    y = b(c.target).closest('.mbsc-btn-e', this);
                    if (y.length && !y.hasClass('mbsc-btn-d')) {
                        K = true;
                        a0 = setTimeout(function() {
                            y.addClass('mbsc-btn-a');
                        }, 100);
                    }
                }
                O = true;
                H = false;
                J = false;
                p.scrolled = F;
                X = d(c, 'X');
                a2 = d(c, 'Y');
                Z = ab = X;
                P = 0;
                M = 0;
                t = 0;
                a3 = new Date();
                x = +k(B, e) || 0;
                if (F) {
                    S(x, o ? 0 : 1);
                }
                if (c.type === 'mousedown') {
                    b(document).on('mousemove', V).on('mouseup', U);
                }
            }
        }

        function V(b) {
            if (O) {
                if (a.stopProp) {
                    b.stopPropagation();
                }
                Z = d(b, 'X');
                a9 = d(b, 'Y');
                P = Z - X;
                M = a9 - a2;
                t = e ? M : P;
                if (K && (Math.abs(M) > 5 || Math.abs(P) > 5)) {
                    clearTimeout(a0);
                    y.removeClass('mbsc-btn-a');
                    K = false;
                }
                if (p.scrolled || !J && Math.abs(t) > 5) {
                    if (!H) {
                        w('onGestureStart', r);
                    }
                    p.scrolled = H = true;
                    if (!G) {
                        G = true;
                        T = i(a8);
                    }
                }
                if (e || a.scrollLock) {
                	 b.preventDefault();
                } else {
                    if (p.scrolled) {
                        b.preventDefault();
                    } else if (Math.abs(M) > 7) {
                        J = true;
                        p.scrolled = true;
                        C.trigger('touchend');
                    }
                }
            }
        }

        function a8() {
            if (E) {
                t = c(t, -u * E, u * E);
            }
            S(c(x + t, D - W, A + W));
            G = false;
        }

        function U(e) {
            if (O) {
                var c, d = new Date() - a3;
                if (a.stopProp) {
                    e.stopPropagation();
                }
                j(T);
                G = false;
                if (!J && p.scrolled) {
                    if (a.momentum && d < 300) {
                        c = t / d;
                        t = Math.max(Math.abs(t), c * c / a.speedUnit) * (t < 0 ? -1 : 1);
                    }
                    a5(t);
                }
                if (K) {
                    clearTimeout(a0);
                    y.addClass('mbsc-btn-a');
                    setTimeout(function() {
                        y.removeClass('mbsc-btn-a');
                    }, 100);
                    if (!J && !p.scrolled) {
                        w('onBtnTap', {
                            target: y[0]
                        });
                    }
                }
                if (e.type == 'mouseup') {
                    b(document).off('mousemove', V).off('mouseup', U);
                }
                O = false;
            }
        }

        function a7(b) {
            b = b.originalEvent || b;
            t = e ? b.deltaY || b.wheelDelta || b.detail : b.deltaX;
            w('onStart');
            if (a.stopProp) {
                b.stopPropagation();
            }
            if (t) {
                b.preventDefault();
                if (a.readonly) {
                    return;
                }
                t = t < 0 ? 20 : -20;
                x = s;
                if (!H) {
                    r = {
                        posX: e ? 0 : s,
                        posY: e ? s : 0,
                        originX: e ? 0 : x,
                        originY: e ? x : 0,
                        direction: t > 0 ? e ? 270 : 360 : e ? 90 : 180
                    };
                    w('onGestureStart', r);
                }
                if (!G) {
                    G = true;
                    T = i(a8);
                }
                H = true;
                clearTimeout(a4);
                a4 = setTimeout(function() {
                    j(T);
                    G = false;
                    H = false;
                    a5(t);
                }, 200);
            }
        }

        function a5(f) {
            var b, g, d;
            if (E) {
                f = c(f, -u * E, u * E);
            }
            z = Math.round((x + f) / u);
            d = c(z * u, D, A);
            if (v) {
                if (f < 0) {
                    for (b = v.length - 1; b >= 0; b--) {
                        if (Math.abs(d) + N >= v[b].breakpoint) {
                            z = b;
                            R = 2;
                            d = v[b].snap2;
                            break;
                        }
                    }
                } else if (f >= 0) {
                    for (b = 0; b < v.length; b++) {
                        if (Math.abs(d) <= v[b].breakpoint) {
                            z = b;
                            R = 1;
                            d = v[b].snap1;
                            break;
                        }
                    }
                }
                d = c(d, D, A);
            }
            g = a.time || (s < D || s > A ? 1000 : Math.max(1000, Math.abs(d - s) * a.timeUnit));
            r.destinationX = e ? 0 : d;
            r.destinationY = e ? d : 0;
            r.duration = g;
            r.transitionTiming = L;
            w('onGestureEnd', r);
            S(d, g);
        }

        function S(b, c, i, h) {
            var f = b != s,
                g = c > 1,
                d = function() {
                    clearInterval(Q);
                    clearTimeout(Y);
                    F = false;
                    s = b;
                    r.posX = e ? 0 : b;
                    r.posY = e ? b : 0;
                    if (f) {
                        w('onMove', r);
                    }
                    if (g) {
                        w('onAnimationEnd', r);
                    }
                    if (h) {
                        h();
                    }
                };
            r = {
                posX: e ? 0 : s,
                posY: e ? s : 0,
                originX: e ? 0 : x,
                originY: e ? x : 0,
                direction: b - s > 0 ? e ? 270 : 360 : e ? 90 : 180
            };
            s = b;
            if (g) {
                r.destinationX = e ? 0 : b;
                r.destinationY = e ? b : 0;
                r.duration = c;
                r.transitionTiming = L;
                w('onAnimationStart', r);
            }
            _[l + 'Transition'] = c ? q + 'transform ' + Math.round(c) + 'ms ' + L : '';
            _[l + 'Transform'] = 'translate3d(' + (e ? '0,' + b + 'px,' : b + 'px,' + '0,') + '0)';
            if (!f && !F || !c || c <= 1) {
                d();
            } else if (c) {
                F = !i;
                clearInterval(Q);
                Q = setInterval(function() {
                    var a = +k(B, e) || 0;
                    r.posX = e ? 0 : a;
                    r.posY = e ? a : 0;
                    w('onMove', r);
                    if (Math.abs(a - b) < 2) {
                        d();
                    }
                }, 100);
                clearTimeout(Y);
                Y = setTimeout(function() {
                    d();
                }, c);
            }
            if (a.sync) {
                a.sync(b, c, L);
            }
        }
        g.Base.call(this, I, a1, true);
        p.scrolled = false;
        p.scroll = function(a, d, e, g) {
            if (!f(a)) {
                a = Math.ceil((b(a, I).length ? Math.round(B.offset()[$] - b(a, I).offset()[$]) : s) / u) * u;
            } else {
                a = Math.round(a / u) * u;
            }
            z = Math.round(a / u);
            x = s;
            S(c(a, D, A), d, e, g);
        };
        p.refresh = function(c) {
            var b;
            N = a.contSize === h ? e ? C.height() : C.width() : a.contSize;
            D = a.minScroll === h ? e ? N - B.height() : N - B.width() : a.minScroll;
            A = a.maxScroll === h ? 0 : a.maxScroll;
            v = null;
            if (!e && a.rtl) {
                b = A;
                A = -D;
                D = -b;
            }
            if (n(a.snap)) {
                v = [];
                B.find(a.snap).each(function() {
                    var a = e ? this.offsetTop : this.offsetLeft,
                        b = e ? this.offsetHeight : this.offsetWidth;
                    v.push({
                        breakpoint: a + b / 2,
                        snap1: -a,
                        snap2: N - a - b
                    });
                });
            }
            u = f(a.snap) ? a.snap : 1;
            E = a.snap ? a.maxSnapScroll : 0;
            L = a.easing;
            W = a.elastic ? f(a.snap) ? u : f(a.elastic) ? a.elastic : 0 : 0;
            if (s === h) {
                s = a.initialPos;
                z = Math.round(s / u);
            }
            if (!c) {
                p.scroll(a.snap ? v ? v[z]['snap' + R] : z * u : s);
            }
        };
        p.init = function(b) {
            p._init(b);
            e = a.axis == 'Y';
            $ = e ? 'top' : 'left';
            B = a.moveElement || C.children().eq(0);
            _ = B[0].style;
            p.refresh();
            C.on('touchstart mousedown', a6).on('touchmove', V).on('touchend touchcancel', U);
            if (a.mousewheel) {
                C.on('wheel mousewheel', a7);
            }
            if (I.addEventListener) {
                I.addEventListener('click', function(a) {
                    if (p.scrolled) {
                        p.scrolled = false;
                        a.stopPropagation();
                        a.preventDefault();
                    }
                }, true);
            }
        };
        p.destroy = function() {
            clearInterval(Q);
            C.off('touchstart mousedown', a6).off('touchmove', V).off('touchend touchcancel', U).off('wheel mousewheel', a7);
            p._destroy();
        };
        a = p.settings;
        w = p.trigger;
        if (!aa) {
            p.init(a1);
        }
    };
    g.ScrollView.prototype = {
        _class: 'scrollview',
        _defaults: {
            speedUnit: 0.0022,
            timeUnit: 3,
            initialPos: 0,
            axis: 'Y',
            easing: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
            stopProp: true,
            momentum: true,
            mousewheel: true,
            elastic: true
        }
    };
    e.presetShort('scrollview', 'ScrollView', false);
}());
(function(n, m, b) {
    var c = mobiscroll,
        a = c.$,
        e = a.extend,
        f = c.classes,
        g = c.platform,
        d = c.util,
        j = d.jsPrefix,
        i = d.prefix,
        h = d.getCoord,
        k = d.testTouch,
        l = g.name == 'wp' || g.name == 'android' || g.name == 'ios' && g.majorVersion < 8;
    c.presetShort('scroller', 'Scroller', false);
    f.Scroller = function(y, X, a7) {
        var O, D, u, r = 40,
            F = 1000,
            M, q, w, z, L, B, J, $, a1, p, o, G, A, n, s, x, v, N, g = this,
            I = a(y);

        function a3(b) {
            var c = a(this).attr('data-index');
            b.stopPropagation();
            if (b.type === 'mousedown') {
                b.preventDefault();
            }
            if (k(b, this) && !V(c)) {
                D = a(this).addClass('mbsc-sc-btn-a');
                $ = h(b, 'X');
                a1 = h(b, 'Y');
                B = true;
                J = false;
                setTimeout(function() {
                    _(c, D.attr('data-dir') == 'inc' ? 1 : -1);
                }, 100);
                if (b.type === 'mousedown') {
                    a(m).on('mousemove', Q).on('mouseup', R);
                }
            }
        }

        function Q(a) {
            if (Math.abs($ - h(a, 'X')) > 7 || Math.abs(a1 - h(a, 'Y')) > 7) {
                P(true);
            }
        }

        function R(b) {
            P();
            b.preventDefault();
            if (b.type === 'mouseup') {
                a(m).off('mousemove', Q).off('mouseup', R);
            }
        }

        function a6(b) {
            var e = a(this).attr('data-index'),
                c, d;
            if (b.keyCode == 38) {
                c = true;
                d = -1;
            } else if (b.keyCode == 40) {
                c = true;
                d = 1;
            } else if (b.keyCode == 32) {
                c = true;
                Z(e);
            }
            if (c) {
                b.stopPropagation();
                b.preventDefault();
                if (d && !B) {
                    B = true;
                    J = false;
                    _(e, d);
                }
            }
        }

        function a2() {
            P();
        }

        function U(a, b) {
            return (a._array ? a._map[b] : a.getIndex(b)) || 0;
        }

        function W(b, c) {
            var d = b.data;
            if (c >= b.min && c <= b.max) {
                return b._array ? b.circular ? a(d).get(c % b._length) : d[c] : a.isFunction(d) ? d(c) : '';
            }
        }

        function K(c) {
            return a.isPlainObject(c) ? c.value !== b ? c.value : c.display : c;
        }

        function a8(c) {
            var d = a.isPlainObject(c) ? c.display : c;
            return d === b ? '' : d;
        }

        function C(a, b) {
            return K(W(a, b));
        }

        function Z(h, k) {
            var a = v[h],
                f = k || a._$markup.find('.mbsc-sc-itm[data-val="' + p[h] + '"]'),
                i = +f.attr('data-index'),
                c = C(a, i),
                e = g._tempSelected[h],
                j = d.isNumeric(a.multiple) ? a.multiple : Infinity;
            if (a.multiple && !a._disabled[c]) {
                if (e[c] !== b) {
                    f.removeClass(w).removeAttr('aria-selected');
                    delete e[c];
                } else if (d.objectToArray(e).length < j) {
                    f.addClass(w).attr('aria-selected', 'true');
                    e[c] = c;
                }
                return true;
            }
        }

        function _(a, b) {
            if (!J) {
                a0(a, b);
            }
            if (B && mobiscroll.vKMaI) {
                clearInterval(L);
                L = setInterval(function() {
                    a0(a, b);
                }, n.delay);
            }
        }

        function P(a) {
            clearInterval(L);
            J = a;
            B = false;
            if (D) {
                D.removeClass('mbsc-sc-btn-a');
            }
        }

        function a0(b, c) {
            var a = v[b];
            T(a, b, a._current + c, F, c == 1 ? 1 : 2);
        }

        function V(b) {
            return a.isArray(n.readonly) ? n.readonly[b] : n.readonly;
        }

        function S(c, d, g) {
            var f = c._index - c._batch;
            c.data = c.data || [];
            c.key = c.key !== b ? c.key : d;
            c.label = c.label !== b ? c.label : d;
            c._map = {};
            c._array = a.isArray(c.data);
            if (c._array) {
                c._length = c.data.length;
                a.each(c.data, function(a, b) {
                    c._map[K(b)] = a;
                });
            }
            c.circular = n.circular === b ? c.circular === b ? c._array && c._length > n.rows : c.circular : a.isArray(n.circular) ? n.circular[d] : n.circular;
            c.min = c._array ? c.circular ? -Infinity : 0 : c.min === b ? -Infinity : c.min;
            c.max = c._array ? c.circular ? Infinity : c._length - 1 : c.max === b ? Infinity : c.max;
            c._nr = d;
            c._index = U(c, p[d]);
            c._disabled = {};
            c._batch = 0;
            c._current = c._index;
            c._first = c._index - r;
            c._last = c._index + r;
            c._offset = c._first;
            if (g) {
                c._offset -= c._margin / o + (c._index - f);
                c._margin += (c._index - f) * o;
            } else {
                c._margin = 0;
            }
            c._refresh = function(d) {
                var a = -(c.min - c._offset + (c.multiple && !q ? Math.floor(n.rows / 2) : 0)) * o,
                    b = Math.min(a, -(c.max - c._offset - (c.multiple && !q ? Math.floor(n.rows / 2) : 0)) * o);
                e(c._scroller.settings, {
                    minScroll: b,
                    maxScroll: a
                });
                c._scroller.refresh(d);
            };
            N[c.key] = c;
            return c;
        }

        function t(e, l, v, u, m) {
            var d, t, a, c, q, j, s, k, h = '',
                f = g._tempSelected[l],
                r = e._disabled || {};
            for (d = v; d <= u; d++) {
                a = W(e, d);
                q = a8(a);
                c = K(a);
                t = a && a.cssClass !== b ? a.cssClass : '';
                j = a && a.label !== b ? a.label : '';
                s = a && a.invalid;
                k = c !== b && c == p[l] && !e.multiple;
                h += '<div role="option" aria-selected="' + (f[c] ? true : false) + '" class="mbsc-sc-itm ' + (m ? 'mbsc-sc-itm-3d ' : '') + t + ' ' + (k ? 'mbsc-sc-itm-sel ' : '') + (f[c] ? w : '') + (c === b ? ' mbsc-sc-itm-ph' : ' mbsc-btn-e') + (s ? ' mbsc-sc-itm-inv-h mbsc-btn-d' : '') + (r[c] ? ' mbsc-sc-itm-inv mbsc-btn-d' : '') + '" data-index="' + d + '" data-val="' + c + '"' + (j ? ' aria-label="' + j + '"' : '') + (k ? ' aria-selected="true"' : '') + ' style="height:' + o + 'px;line-height:' + o + 'px;' + (m ? i + 'transform:rotateX(' + (e._offset - d) * M % 360 + 'deg) translateZ(' + o * n.rows / 2 + 'px);' : '') + '">' + (x > 1 ? '<div class="mbsc-sc-itm-ml" style="line-height:' + Math.round(o / x) + 'px;font-size:' + Math.round(o / x * 0.8) + 'px;">' : '') + q + (x > 1 ? '</div>' : '') + '</div>';
            }
            return h;
        }

        function a4(b) {
            var a = n.headerText;
            return a ? typeof a === 'function' ? a.call(y, b) : a.replace(/\{value\}/i, b) : '';
        }

        function a5(b, h, j) {
            var i = Math.round(-j / o) + b._offset,
                c = i - b._current,
                d = b._first,
                e = b._last,
                f = d + r - u + 1,
                g = e - r + u;
            if (c) {
                b._first += c;
                b._last += c;
                b._current = i;
                if (c > 0) {
                    b._$scroller.append(t(b, h, Math.max(e + 1, d + c), e + c));
                    a('.mbsc-sc-itm', b._$scroller).slice(0, Math.min(c, e - d + 1)).remove();
                    if (q) {
                        b._$3d.append(t(b, h, Math.max(g + 1, f + c), g + c, true));
                        a('.mbsc-sc-itm', b._$3d).slice(0, Math.min(c, g - f + 1)).attr('class', 'mbsc-sc-itm-del');
                    }
                } else if (c < 0) {
                    b._$scroller.prepend(t(b, h, d + c, Math.min(d - 1, e + c)));
                    a('.mbsc-sc-itm', b._$scroller).slice(Math.max(c, d - e - 1)).remove();
                    if (q) {
                        b._$3d.prepend(t(b, h, f + c, Math.min(f - 1, g + c), true));
                        a('.mbsc-sc-itm', b._$3d).slice(Math.max(c, f - g - 1)).attr('class', 'mbsc-sc-itm-del');
                    }
                }
                b._margin += c * o;
                b._$scroller.css('margin-top', b._margin + 'px');
            }
        }

        function Y(l, a, k, m) {
            var g, c = v[l],
                h = m || c._disabled,
                e = U(c, a),
                j = a,
                i = a,
                d = 0,
                f = 0;
            if (a === b) {
                a = C(c, e);
            }
            if (h[a]) {
                g = 0;
                while (e - d >= c.min && h[j] && g < 100) {
                    g++;
                    d++;
                    j = C(c, e - d);
                }
                g = 0;
                while (e + f < c.max && h[i] && g < 100) {
                    g++;
                    f++;
                    i = C(c, e + f);
                }
                if ((f < d && f && k !== 2 || !d || e - d < 0 || k == 1) && !h[i]) {
                    a = i;
                } else {
                    a = j;
                }
            }
            return a;
        }

        function E(m, e, k, f, l) {
            var h, i, j, c, d = g._isVisible;
            A = true;
            c = n.validate.call(y, {
                values: p.slice(0),
                index: e,
                direction: k
            }, g) || {};
            A = false;
            if (c.valid) {
                g._tempWheelArray = p = c.valid.slice(0);
            }
            s('onValidated');
            a.each(v, function(n, f) {
                if (d) {
                    f._$markup.find('.mbsc-sc-itm-inv').removeClass('mbsc-sc-itm-inv mbsc-btn-d');
                }
                f._disabled = {};
                if (c.disabled && c.disabled[n]) {
                    a.each(c.disabled[n], function(b, a) {
                        f._disabled[a] = true;
                        if (d) {
                            f._$markup.find('.mbsc-sc-itm[data-val="' + a + '"]').addClass('mbsc-sc-itm-inv mbsc-btn-d');
                        }
                    });
                }
                p[n] = f.multiple ? p[n] : Y(n, p[n], k);
                if (d) {
                    if (!f.multiple || e === b) {
                        f._$markup.find('.mbsc-sc-itm-sel').removeClass(w).removeAttr('aria-selected');
                    }
                    if (f.multiple) {
                        if (e === b) {
                            for (var q in g._tempSelected[n]) {
                                f._$markup.find('.mbsc-sc-itm[data-val="' + q + '"]').addClass(w).attr('aria-selected', 'true');
                            }
                        }
                    } else {
                        f._$markup.find('.mbsc-sc-itm[data-val="' + p[n] + '"]').addClass('mbsc-sc-itm-sel').attr('aria-selected', 'true');
                    }
                    i = U(f, p[n]);
                    h = i - f._index + f._batch;
                    if (Math.abs(h) > 2 * r + 1) {
                        j = h + (2 * r + 1) * (h > 0 ? -1 : 1);
                        f._offset += j;
                        f._margin -= j * o;
                        f._refresh();
                    }
                    f._index = i + f._batch;
                    f._scroller.scroll(-(i - f._offset + f._batch) * o, e === n || e === b ? m : F, l);
                }
            });
            g._tempValue = n.formatValue(p, g);
            if (d) {
                g._header.html(a4(g._tempValue));
            }
            if (g.live) {
                g._hasValue = f || g._hasValue;
                H(f, f, 0, true);
                if (f) {
                    s('onSet', {
                        valueText: g._value
                    });
                }
            }
            if (f) {
                s('onChange', {
                    valueText: g._tempValue
                });
            }
        }

        function T(a, d, e, f, g, h) {
            var c = C(a, e);
            if (c !== b) {
                p[d] = c;
                a._batch = a._array ? Math.floor(e / a._length) * a._length : 0;
                setTimeout(function() {
                    E(f, d, g, true, h);
                }, 10);
            }
        }

        function H(b, a, c, d, f) {
            if (!d) {
                E(c);
            } else {
                g._tempValue = n.formatValue(g._tempWheelArray, g);
            }
            if (!f) {
                g._wheelArray = p.slice(0);
                g._value = g._hasValue ? g._tempValue : null;
                g._selected = e(true, {}, g._tempSelected);
            }
            if (b) {
                if (g._isInput) {
                    I.val(g._hasValue ? g._tempValue : '');
                }
                s('onFill', {
                    valueText: g._hasValue ? g._tempValue : '',
                    change: a
                });
                if (a) {
                    g._preventChange = true;
                    I.trigger('change');
                }
            }
        }
        f.Frame.call(this, y, X, true);
        g.setVal = g._setVal = function(c, d, e, f, h) {
            g._hasValue = c !== null && c !== b;
            g._tempWheelArray = p = a.isArray(c) ? c.slice(0) : n.parseValue.call(y, c, g) || [];
            H(d, e === b ? d : e, h, false, f);
        };
        g.getVal = g._getVal = function(b) {
            var a = g._hasValue || b ? g[b ? '_tempValue' : '_value'] : null;
            return d.isNumeric(a) ? +a : a;
        };
        g.setArrayVal = g.setVal;
        g.getArrayVal = function(a) {
            return a ? g._tempWheelArray : g._wheelArray;
        };
        g.changeWheel = function(f, h, i) {
            var d, c;
            a.each(f, function(a, b) {
                c = N[a];
                d = c._nr;
                if (c) {
                    e(c, b);
                    S(c, d, true);
                    if (g._isVisible) {
                        if (q) {
                            c._$3d.html(t(c, d, c._first + r - u + 1, c._last - r + u, true));
                        }
                        c._$scroller.html(t(c, d, c._first, c._last)).css('margin-top', c._margin + 'px');
                        c._refresh(A);
                    }
                }
            });
            if (g._isVisible && !A) {
                g.position();
            }
            if (!A) {
                E(h, b, b, i);
            }
        };
        g.getValidValue = Y;
        g._generateContent = function() {
            var h, d = '',
                f = q ? i + 'transform: translateZ(' + (o * n.rows / 2 + 3) + 'px);' : '',
                j = '<div class="mbsc-sc-whl-l" style="' + f + 'height:' + o + 'px;margin-top:-' + (o / 2 + (n.selectedLineBorder || 0)) + 'px;"></div>',
                c = 0;
            a.each(n.wheels, function(k, i) {
                d += '<div class="mbsc-w-p mbsc-sc-whl-gr-c' + (n.showLabel ? ' mbsc-sc-lbl-v' : '') + '">' + j + '<div class="mbsc-sc-whl-gr' + (q ? ' mbsc-sc-whl-gr-3d' : '') + (z ? ' mbsc-sc-cp' : '') + '">';
                a.each(i, function(i, a) {
                    g._tempSelected[c] = e({}, g._selected[c]);
                    v[c] = S(a, c);
                    h = a.label !== b ? a.label : i;
                    d += '<div class="mbsc-sc-whl-w ' + (a.cssClass || '') + (a.multiple ? ' mbsc-sc-whl-multi' : '') + '" style="' + (n.width ? 'width:' + (n.width[c] || n.width) + 'px;' : (n.minWidth ? 'min-width:' + (n.minWidth[c] || n.minWidth) + 'px;' : '') + (n.maxWidth ? 'max-width:' + (n.maxWidth[c] || n.maxWidth) + 'px;' : '')) + '">' + '<div class="mbsc-sc-whl-o" style="' + f + '"></div>' + j + '<div tabindex="0" aria-live="off" aria-label="' + h + '"' + (a.multiple ? ' aria-multiselectable="true"' : '') + ' role="listbox" data-index="' + c + '" class="mbsc-sc-whl"' + ' style="' + 'height:' + n.rows * o * (q ? 1.1 : 1) + 'px;">' + (z ? '<div data-index="' + c + '" data-dir="inc" class="mbsc-sc-btn mbsc-sc-btn-plus ' + (n.btnPlusClass || '') + '" style="height:' + o + 'px;line-height:' + o + 'px;"></div>' + '<div data-index="' + c + '" data-dir="dec" class="mbsc-sc-btn mbsc-sc-btn-minus ' + (n.btnMinusClass || '') + '" style="height:' + o + 'px;line-height:' + o + 'px;"></div>' : '') + '<div class="mbsc-sc-lbl">' + h + '</div>' + '<div class="mbsc-sc-whl-c"' + ' style="height:' + G + 'px;margin-top:-' + (G / 2 + 1) + 'px;' + f + '">' + '<div class="mbsc-sc-whl-sc" style="top:' + (G - o) / 2 + 'px;">';
                    d += t(a, c, a._first, a._last) + '</div></div>';
                    if (q) {
                        d += '<div class="mbsc-sc-whl-3d" style="height:' + o + 'px;margin-top:-' + o / 2 + 'px;">';
                        d += t(a, c, a._first + r - u + 1, a._last - r + u, true);
                        d += '</div>';
                    }
                    d += '</div></div>';
                    c++;
                });
                d += '</div></div>';
            });
            return d;
        };
        g._attachEvents = function(b) {
            a('.mbsc-sc-btn', b).on('touchstart mousedown', a3).on('touchmove', Q).on('touchend touchcancel', R);
            a('.mbsc-sc-whl', b).on('keydown', a6).on('keyup', a2);
        };
        g._detachEvents = function(b) {
            a('.mbsc-sc-whl', b).mobiscroll('destroy');
        };
        g._markupReady = function(b) {
            O = b;
            a('.mbsc-sc-whl', O).each(function(d) {
                var h, e = a(this),
                    b = v[d],
                    f = -(b.min - b._offset + (b.multiple && !q ? Math.floor(n.rows / 2) : 0)) * o,
                    k = Math.min(f, -(b.max - b._offset - (b.multiple && !q ? Math.floor(n.rows / 2) : 0)) * o);
                b._$markup = e;
                b._$scroller = a('.mbsc-sc-whl-sc', this);
                b._$3d = a('.mbsc-sc-whl-3d', this);
                b._scroller = new c.classes.ScrollView(this, {
                    mousewheel: n.mousewheel,
                    moveElement: b._$scroller,
                    initialPos: (b._first - b._index) * o,
                    contSize: 0,
                    snap: o,
                    minScroll: k,
                    maxScroll: f,
                    maxSnapScroll: r,
                    prevDef: true,
                    stopProp: true,
                    timeUnit: 3,
                    easing: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
                    sync: function(c, a, d) {
                        if (q) {
                            b._$3d[0].style[j + 'Transition'] = a ? i + 'transform ' + Math.round(a) + 'ms ' + d : '';
                            b._$3d[0].style[j + 'Transform'] = 'rotateX(' + -c / o * M + 'deg)';
                        }
                    },
                    onStart: function(b, a) {
                        a.settings.readonly = V(d);
                    },
                    onGestureStart: function() {
                        e.addClass('mbsc-sc-whl-a mbsc-sc-whl-anim');
                        s('onWheelGestureStart', {
                            index: d
                        });
                    },
                    onGestureEnd: function(a) {
                        var c = a.direction == 90 ? 1 : 2,
                            e = a.duration,
                            f = a.destinationY;
                        h = Math.round(-f / o) + b._offset;
                        T(b, d, h, e, c);
                    },
                    onAnimationStart: function() {
                        e.addClass('mbsc-sc-whl-anim');
                    },
                    onAnimationEnd: function() {
                        e.removeClass('mbsc-sc-whl-a mbsc-sc-whl-anim');
                        s('onWheelAnimationEnd', {
                            index: d
                        });
                        b._$3d.find('.mbsc-sc-itm-del').remove();
                    },
                    onMove: function(a) {
                        a5(b, d, a.posY);
                    },
                    onBtnTap: function(f) {
                        var c = a(f.target),
                            e = +c.attr('data-index');
                        if (Z(d, c)) {
                            e = b._current;
                        }
                        if (s('onItemTap', {
                                target: c[0],
                                selected: c.hasClass('mbsc-itm-sel')
                            }) !== false) {
                            T(b, d, e, F, true, true);
                            if (g.live && !b.multiple && (n.setOnTap === true || n.setOnTap[d])) {
                                setTimeout(function() {
                                    g.select();
                                }, 200);
                            }
                        }
                    }
                });
            });
            E();
        };
        g._fillValue = function() {
            g._hasValue = true;
            H(true, true, 0, true);
        };
        g._clearValue = function() {
            a('.mbsc-sc-whl-multi .mbsc-sc-itm-sel', O).removeClass(w).removeAttr('aria-selected');
        };
        g._readValue = function() {
            var c = I.val() || '',
                b = 0;
            if (c !== '') {
                g._hasValue = true;
            }
            g._tempWheelArray = p = g._hasValue && g._wheelArray ? g._wheelArray.slice(0) : n.parseValue.call(y, c, g) || [];
            g._tempSelected = e(true, {}, g._selected);
            a.each(n.wheels, function(d, c) {
                a.each(c, function(c, a) {
                    v[b] = S(a, b);
                    b++;
                });
            });
            H(false, false, 0, true);
            s('onRead');
        };
        g._processSettings = function() {
            n = g.settings;
            n.cssClass = (n.cssClass || '') + ' mbsc-sc';
            s = g.trigger;
            z = n.showScrollArrows;
            q = n.scroll3d && !l && !z;
            o = n.height;
            G = q ? Math.round((o - (o * n.rows / 2 + 3) * 0.03) / 2) * 2 : o;
            x = n.multiline;
            w = 'mbsc-sc-itm-sel mbsc-ic mbsc-ic-' + n.checkIcon;
            v = [];
            N = {};
            u = Math.round(n.rows * 1.8);
            M = 360 / (u * 2);
            g._isLiquid = (n.layout || (/top|bottom/.test(n.display) && n.wheels.length == 1 ? 'liquid' : '')) === 'liquid';
            if (x > 1) {
                n.cssClass = (n.cssClass || '') + ' dw-ml';
            }
            if (z) {
                n.rows = Math.max(3, n.rows);
            }
        };
        g._getItemValue = K;
        g._tempSelected = {};
        g._selected = {};
        if (!a7) {
            g.init(X);
        }
    };
    f.Scroller.prototype = {
        _hasDef: true,
        _hasTheme: true,
        _hasLang: true,
        _hasPreset: true,
        _class: 'scroller',
        _defaults: e({}, f.Frame.prototype._defaults, {
            minWidth: 80,
            height: 40,
            rows: 3,
            multiline: 1,
            delay: 300,
            readonly: false,
            showLabel: true,
            setOnTap: false,
            wheels: [],
            preset: '',
            speedUnit: 0.0012,
            timeUnit: 0.08,
            validate: function() {},
            formatValue: function(a) {
                return a.join(' ');
            },
            parseValue: function(d, c) {
                var e = [],
                    f = [],
                    g = 0,
                    h, i;
                if (d !== null && d !== b) {
                    e = (d + '').split(' ');
                }
                a.each(c.settings.wheels, function(d, b) {
                    a.each(b, function(d, b) {
                        i = b.data;
                        h = c._getItemValue(i[0]);
                        a.each(i, function(b, a) {
                            if (e[g] == c._getItemValue(a)) {
                                h = c._getItemValue(a);
                                return false;
                            }
                        });
                        f.push(h);
                        g++;
                    });
                });
                return f;
            }
        })
    };
    c.themes.scroller = c.themes.frame;
}(window, document));
(function(d) {
    var a = mobiscroll,
        b = a.$;

    function c(c, d, e, b, f, g, h) {
        var a = new Date(c, d, e, b || 0, f || 0, g || 0, h || 0);
        if (a.getHours() == 23 && (b || 0) === 0) {
            a.setHours(a.getHours() + 2);
        }
        return a;
    }
    a.util.datetime = {
        defaults: {
            shortYearCutoff: '+10',
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            amText: 'am',
            pmText: 'pm',
            getYear: function(a) {
                return a.getFullYear();
            },
            getMonth: function(a) {
                return a.getMonth();
            },
            getDay: function(a) {
                return a.getDate();
            },
            getDate: c,
            getMaxDayOfMonth: function(a, b) {
                return 32 - new Date(a, b, 32, 12).getDate();
            },
            getWeekNumber: function(a) {
                a = new Date(a);
                a.setHours(0, 0, 0);
                a.setDate(a.getDate() + 4 - (a.getDay() || 7));
                var b = new Date(a.getFullYear(), 0, 1);
                return Math.ceil(((a - b) / 86400000 + 1) / 7);
            }
        },
        adjustedDate: c,
        formatDate: function(h, d, n) {
            if (!d) {
                return null;
            }
            var e = b.extend({}, a.util.datetime.defaults, n),
                i = function(b) {
                    var a = 0;
                    while (f + 1 < h.length && h.charAt(f + 1) == b) {
                        a++;
                        f++;
                    }
                    return a;
                },
                g = function(b, c, d) {
                    var a = '' + c;
                    if (i(b)) {
                        while (a.length < d) {
                            a = '0' + a;
                        }
                    }
                    return a;
                },
                m = function(b, a, c, d) {
                    return i(b) ? d[a] : c[a];
                },
                f, k, c = '',
                l = false;
            for (f = 0; f < h.length; f++) {
                if (l) {
                    if (h.charAt(f) == "'" && !i("'")) {
                        l = false;
                    } else {
                        c += h.charAt(f);
                    }
                } else {
                    switch (h.charAt(f)) {
                        case 'd':
                            c += g('d', e.getDay(d), 2);
                            break;
                        case 'D':
                            c += m('D', d.getDay(), e.dayNamesShort, e.dayNames);
                            break;
                        case 'o':
                            c += g('o', (d.getTime() - new Date(d.getFullYear(), 0, 0).getTime()) / 86400000, 3);
                            break;
                        case 'm':
                            c += g('m', e.getMonth(d) + 1, 2);
                            break;
                        case 'M':
                            c += m('M', e.getMonth(d), e.monthNamesShort, e.monthNames);
                            break;
                        case 'y':
                            k = e.getYear(d);
                            c += i('y') ? k : (k % 100 < 10 ? '0' : '') + k % 100;
                            break;
                        case 'h':
                            var j = d.getHours();
                            c += g('h', j > 12 ? j - 12 : j === 0 ? 12 : j, 2);
                            break;
                        case 'H':
                            c += g('H', d.getHours(), 2);
                            break;
                        case 'i':
                            c += g('i', d.getMinutes(), 2);
                            break;
                        case 's':
                            c += g('s', d.getSeconds(), 2);
                            break;
                        case 'a':
                            c += d.getHours() > 11 ? e.pmText : e.amText;
                            break;
                        case 'A':
                            c += d.getHours() > 11 ? e.pmText.toUpperCase() : e.amText.toUpperCase();
                            break;
                        case "'":
                            if (i("'")) {
                                c += "'";
                            } else {
                                l = true;
                            }
                            break;
                        default:
                            c += h.charAt(f);
                    }
                }
            }
            return c;
        },
        parseDate: function(l, f, y) {
            var c = b.extend({}, a.util.datetime.defaults, y),
                j = c.defaultValue && c.defaultValue.getTime ? c.defaultValue : new Date();
            if (!l || !f) {
                return j;
            }
            if (f.getTime) {
                return f;
            }
            f = typeof f == 'object' ? f.toString() : f + '';
            var r = c.shortYearCutoff,
                h = c.getYear(j),
                i = c.getMonth(j) + 1,
                k = c.getDay(j),
                u = -1,
                d = j.getHours(),
                x = j.getMinutes(),
                v = 0,
                m = -1,
                t = false,
                o = function(b) {
                    var a = g + 1 < l.length && l.charAt(g + 1) == b;
                    if (a) {
                        g++;
                    }
                    return a;
                },
                e = function(a) {
                    o(a);
                    var c = a == '@' ? 14 : a == '!' ? 20 : a == 'y' ? 4 : a == 'o' ? 3 : 2,
                        d = new RegExp('^\\d{1,' + c + '}'),
                        b = f.substr(n).match(d);
                    if (!b) {
                        return 0;
                    }
                    n += b[0].length;
                    return parseInt(b[0], 10);
                },
                q = function(c, d, e) {
                    var b = o(c) ? e : d,
                        a;
                    for (a = 0; a < b.length; a++) {
                        if (f.substr(n, b[a].length).toLowerCase() == b[a].toLowerCase()) {
                            n += b[a].length;
                            return a + 1;
                        }
                    }
                    return 0;
                },
                s = function() {
                    n++;
                },
                n = 0,
                g;
            for (g = 0; g < l.length; g++) {
                if (t) {
                    if (l.charAt(g) == "'" && !o("'")) {
                        t = false;
                    } else {
                        s();
                    }
                } else {
                    switch (l.charAt(g)) {
                        case 'd':
                            k = e('d');
                            break;
                        case 'D':
                            q('D', c.dayNamesShort, c.dayNames);
                            break;
                        case 'o':
                            u = e('o');
                            break;
                        case 'm':
                            i = e('m');
                            break;
                        case 'M':
                            i = q('M', c.monthNamesShort, c.monthNames);
                            break;
                        case 'y':
                            h = e('y');
                            break;
                        case 'H':
                            d = e('H');
                            break;
                        case 'h':
                            d = e('h');
                            break;
                        case 'i':
                            x = e('i');
                            break;
                        case 's':
                            v = e('s');
                            break;
                        case 'a':
                            m = q('a', [c.amText, c.pmText], [c.amText, c.pmText]) - 1;
                            break;
                        case 'A':
                            m = q('A', [c.amText, c.pmText], [c.amText, c.pmText]) - 1;
                            break;
                        case "'":
                            if (o("'")) {
                                s();
                            } else {
                                t = true;
                            }
                            break;
                        default:
                            s();
                    }
                }
            }
            if (h < 100) {
                h += new Date().getFullYear() - new Date().getFullYear() % 100 + (h <= (typeof r != 'string' ? r : new Date().getFullYear() % 100 + parseInt(r, 10)) ? 0 : -100);
            }
            if (u > -1) {
                i = 1;
                k = u;
                do {
                    var w = 32 - new Date(h, i - 1, 32, 12).getDate();
                    if (k <= w) {
                        break;
                    }
                    i++;
                    k -= w;
                } while (true);
            }
            d = m == -1 ? d : m && d < 12 ? d + 12 : !m && d == 12 ? 0 : d;
            var p = c.getDate(h, i - 1, k, d, x, v);
            if (c.getYear(p) != h || c.getMonth(p) + 1 != i || c.getDay(p) != k) {
                return j;
            }
            return p;
        }
    };
}());


(function(a) {
    var d = mobiscroll,
        b = d.$,
        c = d.util.datetime,
        e = c.adjustedDate,
        f = new Date(),
        g = {
            startYear: f.getFullYear() - 100,
            endYear: f.getFullYear() + 1,
            separator: ' ',
            dateFormat: 'mm/dd/yy',
            dateDisplay: 'MMddyy',
            timeFormat: 'h:ii A',
            dayText: 'Day',
            monthText: 'Month',
            yearText: 'Year',
            hourText: 'Hours',
            minuteText: 'Minutes',
            ampmText: '&nbsp;',
            secText: 'Seconds',
            nowText: 'Now',
            todayText: 'Today'
        },
        h = function(i) {
            function m(b, a, c, d) {
                return Math.min(d, Math.floor(b / a) * a + c);
            }

            function v(a) {
                return a < 10 ? '0' + a : a;
            }

            function a4(c) {
                var d, b, a, f = [];
                if (c) {
                    for (d = 0; d < c.length; d++) {
                        b = c[d];
                        if (b.start && b.start.getTime) {
                            a = new Date(b.start);
                            while (a <= b.end) {
                                f.push(e(a.getFullYear(), a.getMonth(), a.getDate()));
                                a.setDate(a.getDate() + 1);
                            }
                        } else {
                            f.push(b);
                        }
                    }
                    return f;
                }
                return c;
            }

            function X(a, b, c) {
                return Math.floor((c - b) / a) * a + b;
            }

            function ai(a) {
                return {
                    value: a,
                    display: (/yy/i.test(y) ? a : (a + '').substr(2, 2)) + (f.yearSuffix || '')
                };
            }

            function ad(a) {
                return a;
            }

            function ac(a) {
                return f.getYear(a);
            }

            function aa(a) {
                return f.getMonth(a);
            }

            function a9(a) {
                return f.getDay(a);
            }

            function a8(b) {
                var a = b.getHours();
                a = r && a >= 12 ? a - 12 : a;
                return m(a, u, C, U);
            }

            function a7(a) {
                return m(a.getMinutes(), q, x, V);
            }

            function al(a) {
                return m(a.getSeconds(), z, O, W);
            }

            function aj(a) {
                return a.getMilliseconds();
            }

            function ah(a) {
                return a.getHours() > 11 ? 1 : 0;
            }

            function M(a) {
                return a.getFullYear() + '-' + v(a.getMonth() + 1) + '-' + v(a.getDate());
            }

            function ae(a) {
                return m(Math.round((a.getTime() - new Date(a).setHours(0, 0, 0, 0)) / 1000), L, 0, 86400);
            }

            function p(e, b, d, f) {
                var c;
                if (h[b] !== a) {
                    c = +e[h[b]];
                    if (!isNaN(c)) {
                        return c;
                    }
                }
                if (d) {
                    return l[b](d);
                }
                if (D[b] !== a) {
                    return D[b];
                }
                return l[b](f);
            }

            function A(c) {
                var b, d = new Date(new Date().setHours(0, 0, 0, 0));
                if (c === null) {
                    return c;
                }
                if (h.dd !== a) {
                    b = c[h.dd].split('-');
                    b = new Date(b[0], b[1] - 1, b[2]);
                }
                if (h.tt !== a) {
                    b = b || d;
                    b = new Date(b.getTime() + c[h.tt] % 86400 * 1000);
                }
                var e = p(c, 'y', b, d),
                    g = p(c, 'm', b, d),
                    j = Math.min(p(c, 'd', b, d), f.getMaxDayOfMonth(e, g)),
                    i = p(c, 'h', b, d);
                return f.getDate(e, g, j, r && p(c, 'a', b, d) ? i + 12 : i, p(c, 'i', b, d), p(c, 's', b, d), p(c, 'u', b, d));
            }

            function F(b, g) {
                var c, d, e = ['y', 'm', 'd', 'a', 'h', 'i', 's', 'u', 'dd', 'tt'],
                    f = [];
                if (b === null || b === a) {
                    return b;
                }
                for (c = 0; c < e.length; c++) {
                    d = e[c];
                    if (h[d] !== a) {
                        f[h[d]] = l[d](b);
                    }
                    if (g) {
                        D[c] = l[d](b);
                    }
                }
                return f;
            }

            function Q(a, b) {
                return b ? Math.floor(new Date(a) / 8.64e7) : a.getMonth() + 12 * (a.getFullYear() - 1970);
            }

            function ak(b) {
                var a = /d/i.test(b);
                return {
                    label: '',
                    cssClass: 'mbsc-dt-whl-date',
                    min: Q(M(j), a),
                    max: Q(M(k), a),
                    data: function(e) {
                        var g = new Date(new Date().setHours(0, 0, 0, 0)),
                            d = a ? new Date(e * 8.64e7) : new Date(1970, e, 1);
                        if (a) {
                            d = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
                        }
                        return {
                            invalid: a && !B(d, true),
                            value: M(d),
                            display: g.getTime() == d.getTime() ? f.todayText : c.formatDate(b, d, f)
                        };
                    },
                    getIndex: function(b) {
                        return Q(b, a);
                    }
                };
            }

            function ab(d) {
                var a, b, g, e = [];
                if (/s/i.test(d)) {
                    b = z;
                } else if (/i/i.test(d)) {
                    b = q * 60;
                } else if (/h/i.test(d)) {
                    b = u * 3600;
                }
                L = o.tt = b;
                for (a = 0; a < 86400; a += b) {
                    g = new Date(new Date().setHours(0, 0, 0, 0) + a * 1000);
                    e.push({
                        value: a,
                        display: c.formatDate(d, g, f)
                    });
                }
                return {
                    label: '',
                    cssClass: 'mbsc-dt-whl-time',
                    data: e
                };
            }

            function a6() {
                var p, s, c, l, b, g, e, n, d = 0,
                    o = [],
                    m = [],
                    i = [];
                if (w.match(/date/i)) {
                    p = S.split(/\|/.test(S) ? '|' : '');
                    for (l = 0; l < p.length; l++) {
                        c = p[l];
                        g = 0;
                        if (c.length) {
                            if (/y/i.test(c)) {
                                g++;
                            }
                            if (/m/i.test(c)) {
                                g++;
                            }
                            if (/d/i.test(c)) {
                                g++;
                            }
                            if (g > 1 && h.dd === a) {
                                h.dd = d;
                                d++;
                                m.push(ak(c));
                                i = m;
                                a2 = true;
                            } else if (/y/i.test(c) && h.y === a) {
                                h.y = d;
                                d++;
                                m.push({
                                    cssClass: 'mbsc-dt-whl-y',
                                    label: f.yearText,
                                    min: f.getYear(j),
                                    max: f.getYear(k),
                                    data: ai,
                                    getIndex: ad
                                });
                            } else if (/m/i.test(c) && h.m === a) {
                                h.m = d;
                                e = [];
                                d++;
                                for (b = 0; b < 12; b++) {
                                    n = y.replace(/[dy]/gi, '').replace(/mm/, v(b + 1) + (f.monthSuffix || '')).replace(/m/, b + 1 + (f.monthSuffix || ''));
                                    e.push({
                                        value: b,
                                        display: /MM/.test(n) ? n.replace(/MM/, '<span class="mbsc-dt-month">' + f.monthNames[b] + '</span>') : n.replace(/M/, '<span class="mbsc-dt-month">' + f.monthNamesShort[b] + '</span>')
                                    });
                                }
                                m.push({
                                    cssClass: 'mbsc-dt-whl-m',
                                    label: f.monthText,
                                    data: e
                                });
                            } else if (/d/i.test(c) && h.d === a) {
                                h.d = d;
                                e = [];
                                d++;
                                for (b = 1; b < 32; b++) {
                                    e.push({
                                        value: b,
                                        display: (/dd/i.test(y) ? v(b) : b) + (f.daySuffix || '')
                                    });
                                }
                                m.push({
                                    cssClass: 'mbsc-dt-whl-d',
                                    label: f.dayText,
                                    data: e
                                });
                            }
                        }
                    }
                    o.push(m);
                }
                if (w.match(/time/i)) {

                    s = H.split(/\|/.test(H) ? '|' : '');
                    for (l = 0; l < s.length; l++) {
                        c = s[l];
                        g = 0;
                        if (c.length) {
                            if (/h/i.test(c)) {
                                g++;
                            }
                            if (/i/i.test(c)) {
                                g++;
                            }
                            if (/s/i.test(c)) {
                                g++;
                            }
                            if (/a/i.test(c)) {
                                g++;
                            }
                        }
                        if (g > 1 && h.tt === a) {
                            h.tt = d;
                            d++;
                            i.push(ab(c));
                        } else if (/h/i.test(c) && h.h === a) {
                            e = [];
                            h.h = d;
                            d++;
                            for (b = C; b < (r ? 12 : 24); b += u) {
                                e.push({
                                    value: b,
                                    display: r && b === 0 ? 12 : /hh/i.test(G) ? v(b) : b
                                });
                            }
                            i.push({
                                cssClass: 'mbsc-dt-whl-h',
                                label: f.hourText,
                                data: e
                            });
                        } else if (/i/i.test(c) && h.i === a) {
                            e = [];
                            h.i = d;
                            d++;
                            for (b = x; b < 60; b += q) {
                                e.push({
                                    value: b,
                                    display: /ii/i.test(G) ? v(b) : b
                                });
                            }
                            i.push({
                                cssClass: 'mbsc-dt-whl-i',
                                label: f.minuteText,
                                data: e
                            });
                        } else if (/s/i.test(c) && h.s === a) {
                            e = [];
                            h.s = d;
                            d++;
                            for (b = O; b < 60; b += z) {
                                e.push({
                                    value: b,
                                    display: /ss/i.test(G) ? v(b) : b
                                });
                            }
                            i.push({
                                cssClass: 'mbsc-dt-whl-s',
                                label: f.secText,
                                data: e
                            });
                        } else if (/a/i.test(c) && h.a === a) {
                            h.a = d;
                            d++;
                            i.push({
                                cssClass: 'mbsc-dt-whl-a',
                                label: f.ampmText,
                                data: /A/.test(c) ? [{
                                    value: 0,
                                    display: f.amText.toUpperCase()
                                }, {
                                    value: 1,
                                    display: f.pmText.toUpperCase()
                                }] : [{
                                    value: 0,
                                    display: f.amText
                                }, {
                                    value: 1,
                                    display: f.pmText
                                }]
                            });
                        }
                    }
                    if (i != m) {
                        o.push(i);
                    }
                }
                return o;
            }

            function ag(d) {
                var a, e, f, b = {};
                if (d.is('input')) {
                    switch (d.attr('type')) {
                        case 'date':
                            a = 'yy-mm-dd';
                            break;
                        case 'datetime':
                            a = 'yy-mm-ddTHH:ii:ssZ';
                            break;
                        case 'datetime-local':
                            a = 'yy-mm-ddTHH:ii:ss';
                            break;
                        case 'month':
                            a = 'yy-mm';
                            b.dateOrder = 'mmyy';
                            break;
                        case 'time':
                            a = 'HH:ii:ss';
                            break;
                    }
                    b.format = a;
                    e = d.attr('min');
                    f = d.attr('max');
                    if (e) {
                        b.min = c.parseDate(a, e);
                    }
                    if (f) {
                        b.max = c.parseDate(a, f);
                    }
                }
                return b;
            }

            function af(a, f) {
                var b, c, e = false,
                    d = false,
                    g = 0,
                    h = 0;
                j = A(F(j));
                k = A(F(k));
                if (B(a)) {
                    return a;
                }
                if (a < j) {
                    a = j;
                }
                if (a > k) {
                    a = k;
                }
                b = a;
                c = a;
                if (f !== 2) {
                    e = B(b);
                    while (!e && b < k) {
                        b = new Date(b.getTime() + 1000 * 60 * 60 * 24);
                        e = B(b);
                        g++;
                    }
                }
                if (f !== 1) {
                    d = B(c);
                    while (!d && c > j) {
                        c = new Date(c.getTime() - 1000 * 60 * 60 * 24);
                        d = B(c);
                        h++;
                    }
                }
                if (f === 1 && e) {
                    return b;
                }
                if (f === 2 && d) {
                    return c;
                }
                return h <= g && d ? c : b;
            }

            function B(a, b) {
                if (!b && a < j) {
                    return false;
                }
                if (!b && a > k) {
                    return false;
                }
                if (a3(a, J)) {
                    return true;
                }
                if (a3(a, I)) {
                    return false;
                }
                return true;
            }

            function a3(b, e) {
                var c, d, a;
                if (e) {
                    for (d = 0; d < e.length; d++) {
                        c = e[d];
                        a = c + '';
                        if (!c.start) {
                            if (c.getTime) {
                                if (b.getFullYear() == c.getFullYear() && b.getMonth() == c.getMonth() && b.getDate() == c.getDate()) {
                                    return true;
                                }
                            } else if (!a.match(/w/i)) {
                                a = a.split('/');
                                if (a[1]) {
                                    if (a[0] - 1 == b.getMonth() && a[1] == b.getDate()) {
                                        return true;
                                    }
                                } else if (a[0] == b.getDate()) {
                                    return true;
                                }
                            } else {
                                a = +a.replace('w', '');
                                if (a == b.getDay()) {
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            }

            function a0(h, l, i, k, j, e, g) {
                var b, d, c, a;
                if (h) {
                    for (d = 0; d < h.length; d++) {
                        b = h[d];
                        a = b + '';
                        if (!b.start) {
                            if (b.getTime) {
                                if (f.getYear(b) == l && f.getMonth(b) == i) {
                                    e[f.getDay(b)] = g;
                                }
                            } else if (!a.match(/w/i)) {
                                a = a.split('/');
                                if (a[1]) {
                                    if (a[0] - 1 == i) {
                                        e[a[1]] = g;
                                    }
                                } else {
                                    e[a[0]] = g;
                                }
                            } else {
                                a = +a.replace('w', '');
                                for (c = a - k; c < j; c += 7) {
                                    if (c >= 0) {
                                        e[c + 1] = g;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            function _(x, y, e, M, I, B, N, K) {
                var H, D, k, F, E, C, i, A, z, b, g, d, c, p, v, G, w, l, q, u, J = {},
                    j = f.getDate(M, I, B),
                    h = ['a', 'h', 'i', 's'];
                if (x) {
                    for (i = 0; i < x.length; i++) {
                        g = x[i];
                        if (g.start) {
                            g.apply = false;
                            k = g.d;
                            w = k + '';
                            l = w.split('/');
                            if (k && (k.getTime && M == f.getYear(k) && I == f.getMonth(k) && B == f.getDay(k) || !w.match(/w/i) && (l[1] && B == l[1] && I == l[0] - 1 || !l[1] && B == l[0]) || w.match(/w/i) && j.getDay() == +w.replace('w', ''))) {
                                g.apply = true;
                                J[j] = true;
                            }
                        }
                    }
                    for (i = 0; i < x.length; i++) {
                        g = x[i];
                        H = 0;
                        G = 0;
                        A = s[e];
                        z = n[e];
                        p = true;
                        v = true;
                        D = false;
                        if (g.start && (g.apply || !g.d && !J[j])) {
                            d = g.start.split(':');
                            c = g.end.split(':');
                            for (b = 0; b < 3; b++) {
                                if (d[b] === a) {
                                    d[b] = 0;
                                }
                                if (c[b] === a) {
                                    c[b] = 59;
                                }
                                d[b] = +d[b];
                                c[b] = +c[b];
                            }
                            if (e == 'tt') {
                                A = m(Math.round((new Date(j).setHours(d[0], d[1], d[2]) - new Date(j).setHours(0, 0, 0, 0)) / 1000), L, 0, 86400);
                                z = m(Math.round((new Date(j).setHours(c[0], c[1], c[2]) - new Date(j).setHours(0, 0, 0, 0)) / 1000), L, 0, 86400);
                            } else {
                                d.unshift(d[0] > 11 ? 1 : 0);
                                c.unshift(c[0] > 11 ? 1 : 0);
                                if (r) {
                                    if (d[1] >= 12) {
                                        d[1] = d[1] - 12;
                                    }
                                    if (c[1] >= 12) {
                                        c[1] = c[1] - 12;
                                    }
                                }
                                for (b = 0; b < y; b++) {
                                    if (t[b] !== a) {
                                        q = m(d[b], o[h[b]], s[h[b]], n[h[b]]);
                                        u = m(c[b], o[h[b]], s[h[b]], n[h[b]]);
                                        F = 0;
                                        E = 0;
                                        C = 0;
                                        if (r && b == 1) {
                                            F = d[0] ? 12 : 0;
                                            E = c[0] ? 12 : 0;
                                            C = t[0] ? 12 : 0;
                                        }
                                        if (!p) {
                                            q = 0;
                                        }
                                        if (!v) {
                                            u = n[h[b]];
                                        }
                                        if ((p || v) && (q + F < t[b] + C && t[b] + C < u + E)) {
                                            D = true;
                                        }
                                        if (t[b] != q) {
                                            p = false;
                                        }
                                        if (t[b] != u) {
                                            v = false;
                                        }
                                    }
                                }
                                if (!K) {
                                    for (b = y + 1; b < 4; b++) {
                                        if (d[b] > 0) {
                                            H = o[e];
                                        }
                                        if (c[b] < n[h[b]]) {
                                            G = o[e];
                                        }
                                    }
                                }
                                if (!D) {
                                    q = m(d[y], o[e], s[e], n[e]) + H;
                                    u = m(c[y], o[e], s[e], n[e]) - G;
                                    if (p) {
                                        A = q;
                                    }
                                    if (v) {
                                        z = u;
                                    }
                                }
                            }
                            if (p || v || D) {
                                for (b = A; b <= z; b += o[e]) {
                                    N[b] = !K;
                                }
                            }
                        }
                    }
                }
            }
            var L, a2, Y, h = {},
                D = {},
                t = [],
                P = ag(b(this)),
                $ = b.extend({}, i.settings),
                f = b.extend(i.settings, d.util.datetime.defaults, g, P, $),
                I = a4(f.invalid),
                J = a4(f.valid),
                w = f.preset,
                K = w == 'datetime' ? f.dateFormat + f.separator + f.timeFormat : w == 'time' ? f.timeFormat : f.dateFormat,
                T = P.format || K,
                S = f.dateWheels || f.dateFormat,
                H = f.timeWheels || f.timeFormat,
                y = f.dateWheels || f.dateDisplay,
                G = H,
                a1 = f.baseTheme || f.theme,
                j = f.min || e(f.startYear, 0, 1),
                k = f.max || e(f.endYear, 11, 31, 23, 59, 59),
                R = /time/i.test(w),
                r = /h/.test(G),
                Z = /D/.test(y),
                E = f.steps || {},
                u = E.hour || f.stepHour || 1,
                q = E.minute || f.stepMinute || 1,
                z = E.second || f.stepSecond || 1,
                N = E.zeroBased,
                C = N ? 0 : j.getHours() % u,
                x = N ? 0 : j.getMinutes() % q,
                O = N ? 0 : j.getSeconds() % z,
                U = X(u, C, r ? 11 : 23),
                V = X(q, x, 59),
                W = X(q, x, 59),
                s = {
                    y: j.getFullYear(),
                    m: 0,
                    d: 1,
                    h: C,
                    i: x,
                    s: O,
                    a: 0,
                    tt: 0
                },
                n = {
                    y: k.getFullYear(),
                    m: 11,
                    d: 31,
                    h: U,
                    i: V,
                    s: W,
                    a: 1,
                    tt: 86400
                },
                o = {
                    y: 1,
                    m: 1,
                    d: 1,
                    h: u,
                    i: q,
                    s: z,
                    a: 1,
                    tt: 1
                },
                a5 = {
                    'android-holo': 40,
                    bootstrap: 46,
                    ios: 50,
                    jqm: 46,
                    material: 46,
                    mobiscroll: 46,
                    wp: 50
                },
                l = {
                    y: ac,
                    m: aa,
                    d: a9,
                    h: a8,
                    i: a7,
                    s: al,
                    u: aj,
                    a: ah,
                    dd: M,
                    tt: ae
                };
            i.getDate = i.getVal = function(a) {
                return i._hasValue || a ? A(i.getArrayVal(a)) : null;
            };
            i.setDate = function(a, b, c, d, e) {
                i.setArrayVal(F(a), b, e, d, c);
            };
            Y = a6();
            i.format = K;
            i.order = h;
            i.handlers.now = function() {
                i.setDate(new Date(), i.live, 1000, true, true);
            };
            i.buttons.now = {
                text: f.nowText,
                handler: 'now'
            };
            return {
                minWidth: a2 && R ? a5[a1] : a,
                compClass: 'mbsc-dt',
                wheels: Y,
                headerText: f.headerText ? function() {
                    return c.formatDate(K, A(i.getArrayVal(true)), f);
                } : false,
                formatValue: function(a) {
                    return c.formatDate(T, A(a), f);
                },
                parseValue: function(a) {
                    if (!a) {
                        D = {};
                    }
                    return F(a ? c.parseDate(T, a, f) : f.defaultValue && f.defaultValue.getTime ? f.defaultValue : new Date(), !!a && !!a.getTime);
                },
                validate: function(C) {
                    var c, p, u, E, G = C.values,
                        x = C.index,
                        D = C.direction,
                        m = i.settings.wheels[0][h.d],
                        g = af(A(G), D),
                        z = F(g),
                        q = [],
                        B = {},
                        e = l.y(g),
                        d = l.m(g),
                        r = f.getMaxDayOfMonth(e, d),
                        v = true,
                        w = true;
                    b.each(['dd', 'y', 'm', 'd', 'tt', 'a', 'h', 'i', 's'], function(y, c) {
                        if (h[c] !== a) {
                            var m = s[c],
                                t = n[c],
                                i = l[c](g);
                            q[h[c]] = [];
                            if (v && j) {
                                m = l[c](j);
                            }
                            if (w && k) {
                                t = l[c](k);
                            }
                            if (c != 'y' && c != 'dd') {
                                for (p = s[c]; p <= n[c]; p += o[c]) {
                                    if (p < m || p > t) {
                                        q[h[c]].push(p);
                                    }
                                }
                            }
                            if (i < m) {
                                i = m;
                            }
                            if (i > t) {
                                i = t;
                            }
                            if (v) {
                                v = i == m;
                            }
                            if (w) {
                                w = i == t;
                            }
                            if (c == 'd') {
                                var x = f.getDate(e, d, 1).getDay(),
                                    u = {};
                                a0(I, e, d, x, r, u, 1);
                                a0(J, e, d, x, r, u, 0);
                                b.each(u, function(a, b) {
                                    if (b) {
                                        q[h[c]].push(a);
                                    }
                                });
                            }
                        }
                    });
                    if (R) {
                        b.each(['a', 'h', 'i', 's', 'tt'], function(j, c) {
                            var m = l[c](g),
                                k = l.d(g),
                                f = {};
                            if (h[c] !== a) {
                                _(I, j, c, e, d, k, f, 0);
                                _(J, j, c, e, d, k, f, 1);
                                b.each(f, function(a, b) {
                                    if (b) {
                                        q[h[c]].push(a);
                                    }
                                });
                                t[j] = i.getValidValue(h[c], m, D, f);
                            }
                        });
                    }
                    if (m && (m._length !== r || Z && (x === a || x === h.y || x === h.m))) {
                        B[h.d] = m;
                        m.data = [];
                        for (c = 1; c <= r; c++) {
                            E = f.getDate(e, d, c).getDay();
                            u = y.replace(/[my]/gi, '').replace(/dd/, (c < 10 ? '0' + c : c) + (f.daySuffix || '')).replace(/d/, c + (f.daySuffix || ''));
                            m.data.push({
                                value: c,
                                display: u.match(/DD/) ? u.replace(/DD/, '<span class="mbsc-dt-day">' + f.dayNames[E] + '</span>') : u.replace(/D/, '<span class="mbsc-dt-day">' + f.dayNamesShort[E] + '</span>')
                            });
                        }
                        i._tempWheelArray[h.d] = z[h.d];
                        i.changeWheel(B);
                    }
                    return {
                        disabled: q,
                        valid: z
                    };
                }
            };
        };
    b.each(['date', 'time', 'datetime'], function(b, a) {
        d.presets.scroller[a] = h;
    });
}());
(function() {
    mobiscroll.$.each(['date', 'time', 'datetime'], function(b, a) {
        mobiscroll.presetShort(a);
    });
}());
(function(a) {
    var c = mobiscroll,
        b = c.$,
        d = {
            invalid: [],
            showInput: true,
            inputClass: ''
        };
    c.presets.scroller.list = function(e) {
        var A = b.extend({}, e.settings),
            c = b.extend(e.settings, d, A),
            q = c.layout || (/top|bottom/.test(c.display) ? 'liquid' : ''),
            m = q == 'liquid',
            x = c.readonly,
            j = b(this),
            h, l, p = this.id + '_dummy',
            f = 0,
            o = 0,
            g, n = [],
            i = c.wheelArray || w(j),
            r = C(f),
            s = E(i),
            v = u(s, f);

        function G(c, d, e) {
            var a = 0,
                b = [];
            while (a < c) {
                b[a] = F(e, a, d);
                a++;
            }
            return b;
        }

        function F(f, g, h) {
            var a = 0,
                c, b = h,
                d = [];
            while (a < g) {
                var e = f[a];
                for (c in b) {
                    if (b[c].key == e) {
                        b = b[c].children;
                        break;
                    }
                }
                a++;
            }
            a = 0;
            while (a < b.length) {
                if (b[a].invalid) {
                    d.push(b[a].key);
                }
                a++;
            }
            return d;
        }

        function D(b, c) {
            var a = [];
            while (b) {
                a[--b] = true;
            }
            a[c] = false;
            return a;
        }

        function C(d) {
            var b = [],
                a;
            for (a = 0; a < d; a++) {
                b[a] = c.labels && c.labels[a] ? c.labels[a] : a;
            }
            return b;
        }

        function u(j, l, g) {
            var b = 0,
                c, h, f, e = [
                    []
                ],
                d = i;
            if (l) {
                for (c = 0; c < l; c++) {
                    if (m) {
                        e[0][c] = {};
                    } else {
                        e[c] = [{}];
                    }
                }
            }
            while (b < j.length) {
                if (m) {
                    e[0][b] = z(d, r[b]);
                } else {
                    e[b] = [z(d, r[b])];
                }
                c = 0;
                f = a;
                while (c < d.length && f === a) {
                    if (d[c].key == j[b] && (g !== a && b <= g || g === a)) {
                        f = c;
                    }
                    c++;
                }
                if (f !== a && d[f].children) {
                    b++;
                    d = d[f].children;
                } else if ((h = k(d)) && h.children) {
                    b++;
                    d = h.children;
                } else {
                    return e;
                }
            }
            return e;
        }

        function k(b, d) {
            if (!b) {
                return false;
            }
            var a = 0,
                c;
            while (a < b.length) {
                if (!(c = b[a++]).invalid) {
                    return d ? a - 1 : c;
                }
            }
            return false;
        }

        function z(b, d) {
            var c = {
                    data: [],
                    label: d
                },
                a = 0;
            while (a < b.length) {
                c.data.push({
                    value: b[a].key,
                    display: b[a].value
                });
                a++;
            }
            return c;
        }

        function y(a) {
            if (e._isVisible) {
                b('.mbsc-sc-whl-w', e._markup).css('display', '').slice(a).hide();
            }
        }

        function E(f) {
            var b = [],
                c = f,
                d, a = true,
                e = 0;
            while (a) {
                d = k(c);
                b[e++] = d.key;
                a = d.children;
                if (a) {
                    c = a;
                }
            }
            return b;
        }

        function t(f, l) {
            var j = [],
                c = i,
                d = 0,
                h = false,
                e, g, b;
            if (f[d] !== a && d <= l) {
                e = 0;
                g = f[d];
                b = a;
                while (e < c.length && b === a) {
                    if (c[e].key == f[d] && !c[e].invalid) {
                        b = e;
                    }
                    e++;
                }
            } else {
                b = k(c, true);
                g = c[b].key;
            }
            h = b !== a ? c[b].children : false;
            j[d] = g;
            while (h) {
                c = c[b].children;
                d++;
                h = false;
                b = a;
                if (f[d] !== a && d <= l) {
                    e = 0;
                    g = f[d];
                    b = a;
                    while (e < c.length && b === a) {
                        if (c[e].key == f[d] && !c[e].invalid) {
                            b = e;
                        }
                        e++;
                    }
                } else {
                    b = k(c, true);
                    b = b === false ? a : b;
                    g = c[b].key;
                }
                h = b !== a && k(c[b].children) ? c[b].children : false;
                j[d] = g;
            }
            return {
                lvl: d + 1,
                nVector: j
            };
        }

        function w(d) {
            var c = [];
            f = f > o++ ? f : o;
            d.children('li').each(function(k) {
                var d = b(this),
                    f = d.clone();
                f.children('ul,ol').remove();
                var i = e._processMarkup ? e._processMarkup(f) : f.html().replace(/^\s\s*/, '').replace(/\s\s*$/, ''),
                    j = d.attr('data-invalid') ? true : false,
                    g = {
                        key: d.attr('data-val') === a || d.attr('data-val') === null ? k : d.attr('data-val'),
                        value: i,
                        invalid: j,
                        children: null
                    },
                    h = d.children('ul,ol');
                if (h.length) {
                    g.children = w(h);
                }
                c.push(g);
            });
            o--;
            return c;
        }

        function B(c, i, f) {
            var a, b = (i || 0) + 1,
                g = [],
                d = {},
                h = {};
            d = u(c, null, i);
            for (a = 0; a < c.length; a++) {
                e._tempWheelArray[a] = c[a] = f.nVector[a] || 0;
            }
            while (b < f.lvl) {
                h[b] = m ? d[0][b] : d[b][0];
                g.push(b++);
            }
            y(f.lvl);
            n = c.slice(0);
            if (g.length) {
                l = true;
                e.changeWheel(h);
            }
        }
        b('#' + p).remove();
        if (c.showInput) {
            h = b('<input type="text" id="' + p + '" value="" class="' + c.inputClass + '" placeholder="' + (c.placeholder || '') + '" readonly />').insertBefore(j);
            c.anchor = h;
            e.attachShow(h);
        }
        if (!c.wheelArray) {
            j.hide();
        }
        return {
            wheels: v,
            layout: q,
            headerText: false,
            setOnTap: f == 1,
            formatValue: function(b) {
                if (g === a) {
                    g = t(b, b.length).lvl;
                }
                return b.slice(0, g).join(' ');
            },
            parseValue: function(a) {
                return a ? (a + '').split(' ') : (c.defaultValue || s).slice(0);
            },
            onBeforeShow: function() {
                var a = e.getArrayVal(true);
                n = a.slice(0);
                c.wheels = u(a, f, f);
                l = true;
            },
            onWheelGestureStart: function(a) {
                c.readonly = D(f, a.index);
            },
            onWheelAnimationEnd: function(f) {
                var a = f.index,
                    b = e.getArrayVal(true),
                    d = t(b, a);
                g = d.lvl;
                c.readonly = x;
                if (b[a] != n[a]) {
                    B(b, a, d);
                }
            },
            onFill: function(b) {
                g = a;
                if (h) {
                    h.val(b.valueText);
                }
            },
            validate: function(e) {
                var b = e.values,
                    d = e.index,
                    c = t(b, b.length);
                g = c.lvl;
                if (d === a) {
                    y(c.lvl);
                    if (!l) {
                        B(b, d, c);
                    }
                }
                l = false;
                return {
                    disabled: G(g, i, b)
                };
            },
            onDestroy: function() {
                if (h) {
                    h.remove();
                }
                j.show();
            }
        };
    };
}());
(function() {
    var a = mobiscroll,
        b = a.$,
        c = a.presets.scroller;
    a.presetShort('image');
    c.image = function(a) {
        if (a.settings.enhance) {
            a._processMarkup = function(a) {
                var c = a.attr('data-icon');
                a.children().each(function(c, a) {
                    a = b(a);
                    if (a.is('img')) {
                        b('<div class="mbsc-img-c"></div>').insertAfter(a).append(a.addClass('mbsc-img'));
                    } else if (a.is('p')) {
                        a.addClass('mbsc-img-txt');
                    }
                });
                if (c) {
                    a.prepend('<div class="mbsc-ic mbsc-ic-' + c + '"></div');
                }
                a.html('<div class="mbsc-img-w">' + a.html() + '</div>');
                return a.html();
            };
        }
        return c.list.call(this, a);
    };
}());
(function() {
    var a = mobiscroll,
        b = a.presets.scroller;
    b.treelist = b.list;
    a.presetShort('list');
    a.presetShort('treelist');
}());
(function(c) {
    var d = mobiscroll,
        a = d.$,
        b = d.util,
        e = b.isString,
        f = {
            inputClass: '',
            invalid: [],
            rtl: false,
            showInput: true,
            groupLabel: 'Groups',
            checkIcon: 'checkmark',
            dataText: 'text',
            dataValue: 'value',
            dataGroup: 'group',
            dataDisabled: 'disabled'
        };
    d.presetShort('select');
    d.presets.scroller.select = function(g) {
        var r, K, n, A, p, l, k, m, j, h, y, E = 1000,
            i = a(this),
            J = a.extend({}, g.settings),
            d = a.extend(g.settings, f, J),
            O = d.readonly,
            G = d.layout || (/top|bottom/.test(d.display) ? 'liquid' : ''),
            D = G == 'liquid',
            q = b.isNumeric(d.select) ? d.select : d.select == 'multiple' || i.prop('multiple'),
            x = this.id + '_dummy',
            C = a('label[for="' + this.id + '"]').attr('for', x),
            H = d.label !== c ? d.label : C.length ? C.text() : i.attr('name'),
            B = !!d.data,
            w = B ? !!d.group : a('optgroup', i).length,
            s = d.group,
            o = w && s && s.groupWheel !== false,
            u = w && s && o && s.clustered === true,
            I = w && (!s || s.header !== false && !u),
            v = i.val() || [],
            t = [];

        function L() {
            var f, g, b, n, e, k = 0,
                h = 0,
                l = {};
            j = {};
            p = {};
            m = [];
            A = [];
            t.length = 0;
            if (B) {
                a.each(d.data, function(i, a) {
                    n = a[d.dataText];
                    e = a[d.dataValue];
                    g = a[d.dataGroup];
                    b = {
                        value: e,
                        text: n,
                        index: i
                    };
                    j[e] = b;
                    m.push(b);
                    if (w) {
                        if (l[g] === c) {
                            f = {
                                text: g,
                                value: h,
                                options: [],
                                index: h
                            };
                            p[h] = f;
                            l[g] = h;
                            A.push(f);
                            h++;
                        } else {
                            f = p[l[g]];
                        }
                        if (u) {
                            b.index = f.options.length;
                        }
                        b.group = l[g];
                        f.options.push(b);
                    }
                    if (a[d.dataDisabled]) {
                        t.push(e);
                    }
                });
            } else {
                if (w) {
                    a('optgroup', i).each(function(c) {
                        p[c] = {
                            text: this.label,
                            value: c,
                            options: [],
                            index: c
                        };
                        A.push(p[c]);
                        a('option', this).each(function(a) {
                            b = {
                                value: this.value,
                                text: this.text,
                                index: u ? a : k++,
                                group: c
                            };
                            j[this.value] = b;
                            m.push(b);
                            p[c].options.push(b);
                            if (this.disabled) {
                                t.push(this.value);
                            }
                        });
                    });
                } else {
                    a('option', i).each(function(a) {
                        b = {
                            value: this.value,
                            text: this.text,
                            index: a
                        };
                        j[this.value] = b;
                        m.push(b);
                        if (this.disabled) {
                            t.push(this.value);
                        }
                    });
                }
            }
            if (m.length) {
                K = m[0].value;
            }
            if (I) {
                m = [];
                k = 0;
                a.each(p, function(c, d) {
                    e = '__group' + c;
                    b = {
                        text: d.text,
                        value: e,
                        group: c,
                        index: k++,
                        cssClass: 'mbsc-sel-gr'
                    };
                    j[e] = b;
                    m.push(b);
                    t.push(b.value);
                    a.each(d.options, function(b, a) {
                        a.index = k++;
                        m.push(a);
                    });
                });
            }
        }

        function M(b, d, e) {
            var a, c = [];
            for (a = 0; a < b.length; a++) {
                c.push({
                    value: b[a].value,
                    display: b[a].text,
                    cssClass: b[a].cssClass
                });
            }
            return {
                circular: false,
                multiple: d,
                data: c,
                label: e
            };
        }

        function N() {
            return M(A, false, d.groupLabel);
        }

        function F() {
            return M(u ? p[n].options : m, q, H);
        }

        function P() {
            var b, c, a = [
                []
            ];
            if (o) {
                b = N();
                if (D) {
                    a[0][l] = b;
                } else {
                    a[l] = [b];
                }
            }
            c = F();
            if (D) {
                a[0][h] = c;
            } else {
                a[h] = [c];
            }
            return a;
        }

        function z(b) {
            if (q) {
                if (b && e(b)) {
                    b = b.split(',');
                }
                if (a.isArray(b)) {
                    b = b[0];
                }
            }
            k = b === c || b === null || b === '' || !j[b] ? K : b;
            if (o) {
                n = j[k] ? j[k].group : null;
            }
        }

        function T(b, c) {
            var a = b ? g._tempWheelArray : g._hasValue ? g._wheelArray : null;
            return a ? d.group && c ? a : a[h] : null;
        }

        function S(d) {
            var a, b, c = [];
            if (q) {
                for (a in g._tempSelected[h]) {
                    c.push(j[a] ? j[a].text : '');
                }
                return c.join(', ');
            }
            b = d[h];
            return j[b] ? j[b].text : '';
        }

        function R() {
            var a = g.getVal(),
                b = g._tempValue;
            r.val(b);
            i.val(a);
        }

        function Q() {
            var a = {};
            a[h] = F();
            y = true;
            g.changeWheel(a);
        }
        g.setVal = function(a, d, f, c, i) {
            if (q) {
                if (a && e(a)) {
                    a = a.split(',');
                }
                g._tempSelected[h] = b.arrayToObject(a);
                if (!c) {
                    g._selected[h] = b.arrayToObject(a);
                }
                a = a ? a[0] : null;
            }
            g._setVal(a, d, f, c, i);
        };
        g.getVal = function(a, c) {
            if (q) {
                return b.objectToArray(a ? g._tempSelected[h] : g._selected[h]);
            }
            return T(a, c);
        };
        g.refresh = function() {
            var a = {};
            L();
            d.wheels = P();
            z(k);
            a[h] = F();
            g._tempWheelArray[h] = k;
            if (o) {
                a[l] = N();
                g._tempWheelArray[l] = n;
            }
            if (g._isVisible) {
                g.changeWheel(a, 0, true);
            }
        };
        if (!d.invalid.length) {
            d.invalid = t;
        }
        if (o) {
            l = 0;
            h = 1;
        } else {
            l = -1;
            h = 0;
        }
        if (q) {
            i.prop('multiple', true);
            g._selected[h] = {};
            if (v && e(v)) {
                v = v.split(',');
            }
            g._selected[h] = b.arrayToObject(v);
        }
        a('#' + x).remove();
        if (i.next().is('input.mbsc-control')) {
            r = i.off('.mbsc-form').next().removeAttr('tabindex');
        } else {
            r = a('<input type="text" id="' + x + '" class="mbsc-control mbsc-control-ev ' + d.inputClass + '" readonly />');
            if (d.showInput) {
                r.insertBefore(i);
            }
        }
        g.attachShow(r.attr('placeholder', d.placeholder || ''));
        i.addClass('mbsc-sel-hdn').attr('tabindex', -1);
        L();
        z(i.val());
        return {
            layout: G,
            headerText: false,
            anchor: r,
            compClass: 'mbsc-sel' + (o ? ' mbsc-sel-gr-whl' : '') + (q ? ' mbsc-sel-multi' : ''),
            setOnTap: o ? [false, true] : true,
            formatValue: S,
            parseValue: function(a) {
                z(a === c ? i.val() : a);
                return o ? [n, k] : [k];
            },
            validate: function(e) {
                var b = e.index,
                    a = [];
                a[h] = d.invalid;
                if (u && !y && b === c) {
                    Q();
                }
                y = false;
                return {
                    disabled: a
                };
            },
            onRead: R,
            onFill: R,
            onBeforeShow: function() {
                if (q && d.counter) {
                    d.headerText = function() {
                        var b = 0;
                        a.each(g._tempSelected[h], function() {
                            b++;
                        });
                        return (b > 1 ? d.selectedPluralText || d.selectedText : d.selectedText).replace(/{count}/, b);
                    };
                }
                z(i.val());
                g.settings.wheels = P();
                y = true;
            },
            onWheelGestureStart: function(a) {
                if (a.index == l) {
                    d.readonly = [false, true];
                }
            },
            onWheelAnimationEnd: function(b) {
                var a = g.getArrayVal(true);
                if (b.index == l) {
                    d.readonly = O;
                    if (a[l] != n) {
                        n = a[l];
                        k = p[n].options[0].value;
                        a[h] = k;
                        if (u) {
                            Q();
                        } else {
                            g.setArrayVal(a, false, false, true, E);
                        }
                    }
                } else if (b.index == h && a[h] != k) {
                    k = a[h];
                    if (o && j[k].group != n) {
                        n = j[k].group;
                        a[l] = n;
                        g.setArrayVal(a, false, false, true, E);
                    }
                }
            },
            onDestroy: function() {
                if (!r.hasClass('mbsc-control')) {
                    r.remove();
                }
                i.removeClass('mbsc-sel-hdn').removeAttr('tabindex');
            }
        };
    };
}());
(function(c) {
    var d = function() {},
        a = mobiscroll,
        b = a.$;
    a.util.addIcon = function(d, g) {
        var a = {},
            e = d.parent(),
            f = e.find('.mbsc-err-msg'),
            h = d.attr('data-icon-align') || 'left',
            c = d.attr('data-icon');
        b('<span class="mbsc-input-wrap"></span>').insertAfter(d).append(d);
        if (f) {
            e.find('.mbsc-input-wrap').append(f);
        }
        if (c) {
            if (c.indexOf('{') !== -1) {
                a = JSON.parse(c);
            } else {
                a[h] = c;
            }
        }
        if (c || g) {
            b.extend(a, g);
            e.addClass((a.right ? 'mbsc-ic-right ' : '') + (a.left ? ' mbsc-ic-left' : '')).find('.mbsc-input-wrap').append(a.left ? '<span class="mbsc-input-ic mbsc-left-ic mbsc-ic mbsc-ic-' + a.left + '"></span>' : '').append(a.right ? '<span class="mbsc-input-ic mbsc-right-ic mbsc-ic mbsc-ic-' + a.right + '"></span>' : '');
        }
    };
    a.classes.Progress = function(t, w, x) {
        var n, f, h, u, q, r, l, i, k, g, s, j, p, e = this;

        function v() {
            var a = m('value', i);
            if (a !== j) {
                o(a);
            }
        }

        function m(b, d) {
            var a = f.attr(b);
            return a === c || a === '' ? d : +a;
        }

        function o(a, g, b, d) {
            a = Math.min(k, Math.max(a, i));
            u.css('width', (a - i) * 100 / (k - i) + '%');
            if (b === c) {
                b = true;
            }
            if (d === c) {
                d = b;
            }
            if (a !== j || g) {
                e._display(a);
            }
            if (a !== j) {
                j = a;
                if (b) {
                    f.attr('value', j);
                }
                if (d) {
                    f.trigger('change');
                }
            }
        }
        a.classes.Base.call(this, t, w, true);
        e._onInit = d;
        e._onDestroy = d;
        e._display = function(a) {
            p = s && g.returnAffix ? s.replace(/\{value\}/, a).replace(/\{max\}/, k) : a;
            if (q) {
                q.html(p);
            }
            if (n) {
                n.html(p);
            }
        };
        e._attachChange = function() {
            f.on('change', v);
        };
        e.init = function(o) {
            var p, v, d, w;
            e._init(o);
            g = e.settings;
            f = b(t);
            w = f.parent().hasClass('mbsc-input-wrap');
            h = e._$parent = w ? h : f.parent();
            i = e._min = o.min === c ? m('min', g.min) : o.min;
            k = e._max = o.max === c ? m('max', g.max) : o.max;
            j = m('value', i);
            p = f.attr('data-val') || g.val;
            d = f.attr('data-step-labels');
            d = d ? JSON.parse(d) : g.stepLabels;
            s = f.attr('data-template') || (k == 100 && !g.template ? '{value}%' : g.template);
            if (!w) {
                if (e._wrap) {
                    a.util.addIcon(f);
                }
                h.find('.mbsc-input-wrap').append('<span class="mbsc-progress-cont"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-progress-bar"></span></span></span>');
                u = e._$progress = h.find('.mbsc-progress-bar');
                r = e._$track = h.find('.mbsc-progress-track');
            } else {
                if (p) {
                    n.remove();
                    h.removeClass('mbsc-progress-value-' + (p == 'right' ? 'right' : 'left'));
                }
                if (d) {
                    b('.mbsc-progress-step-label', r).remove();
                }
            }
            if (l) {
                h.removeClass(l);
            }
            l = e._css + ' mbsc-progress-w mbsc-control-w mbsc-' + g.theme + (g.baseTheme ? ' mbsc-' + g.baseTheme : '') + (g.rtl ? ' mbsc-rtl' : ' mbsc-ltr');
            h.addClass(l);
            f.attr('min', i).attr('max', k);
            if (p) {
                n = b('<span class="mbsc-progress-value"></span>');
                h.addClass('mbsc-progress-value-' + (p == 'right' ? 'right' : 'left')).find('.mbsc-input-wrap').append(n);
            }
            if (d) {
                for (v = 0; v < d.length; ++v) {
                    r.append('<span class="mbsc-progress-step-label" style="' + (g.rtl ? 'right' : 'left') + ': ' + (d[v] - i) * 100 / (k - i) + '%" >' + d[v] + '</span>');
                }
            }
            q = b(f.attr('data-target') || g.target);
            e._onInit(o);
            if (!w) {
                e._attachChange();
            }
            e.refresh();
            e.trigger('onInit');
        };
        e.refresh = function() {
            o(m('value', i), true, false);
        };
        e.destroy = function(a) {
            e._onDestroy();
            h.find('.mbsc-progress-cont').remove();
            h.removeClass(l).find('.mbsc-input-wrap').before(f).remove();
            f.removeClass('mbsc-control').off('change', v);
            if (!a) {
                e._destroy();
            }
        };
        e.getVal = function() {
            return j;
        };
        e.setVal = function(a, b, c) {
            o(a, true, b, c);
        };
        if (!x) {
            e.init(w);
        }
    };
    a.classes.Progress.prototype = {
        _class: 'progress',
        _css: 'mbsc-progress',
        _hasTheme: true,
        _hasLang: true,
        _wrap: true,
        _defaults: {
            min: 0,
            max: 100,
            returnAffix: true
        }
    };
    a.presetShort('progress', 'Progress');
}());
(function(e) {
    var f = function() {},
        b = mobiscroll,
        a = b.$,
        d = b.util,
        c = d.getCoord,
        g = d.testTouch;
    b.classes.Slider = function(K, a5, a6) {
        var j, M, T, s, R, n, y, U, q, w, I, Y, a2, J, z, V, r, A, B, Q, u, a3, p, k, x, t, l, m, H, G, X, P, C, L, i, h = this,
            O = new Date();

        function W(b) {
            if (g(b, this) && !w && !K.disabled) {
                if (m.stopProp) {
                    b.stopPropagation();
                }
                w = true;
                x = false;
                I = false;
                G = c(b, 'X');
                X = c(b, 'Y');
                z = G;
                q.removeClass('mbsc-progress-anim');
                M = t ? a('.mbsc-slider-handle', this) : s;
                T = M.parent().addClass('mbsc-active');
                r = +M.attr('data-index');
                L = q[0].offsetWidth;
                J = q[0].getBoundingClientRect().left;
                if (b.type === 'mousedown') {
                    b.preventDefault();
                    a(document).on('mousemove', D).on('mouseup', E);
                }
            }
        }

        function D(a) {
            if (w) {
                z = c(a, 'X');
                V = c(a, 'Y');
                Y = z - G;
                a2 = V - X;
                if (Math.abs(Y) > 5 || x) {
                    x = true;
                    if (Math.abs(O - new Date()) > 50) {
                        O = new Date();
                        a4(z, m.round, a3);
                    }
                }
                if (x) {
                    a.preventDefault();
                } else if (Math.abs(a2) > 7) {
                    S(a);
                }
            }
        }

        function E(a) {
            if (w) {
                a.preventDefault();
                if (!t) {
                    q.addClass('mbsc-progress-anim');
                }
                a4(z, true, true);
                if (!x && !I) {
                    d.preventClick();
                    h._onTap(i[r]);
                }
                S();
            }
        }

        function Z() {
            if (w) {
                S();
            }
        }

        function _() {
            var b = h._readValue(a(this)),
                c = +a(this).attr('data-index');
            if (b !== i[c]) {
                i[c] = b;
                v(b, c);
            }
        }

        function $(a) {
            a.stopPropagation();
        }

        function a0(a) {
            a.preventDefault();
        }

        function a1(c) {
            var b;
            if (!K.disabled) {
                switch (c.keyCode) {
                    case 38:
                    case 39:
                        b = 1;
                        break;
                    case 40:
                    case 37:
                        b = -1;
                        break;
                }
                if (b) {
                    c.preventDefault();
                    if (!C) {
                        r = +a(this).attr('data-index');
                        v(i[r] + l * b, r, true);
                        C = setInterval(function() {
                            v(i[r] + l * b, r, true);
                        }, 200);
                    }
                }
            }
        }

        function F(a) {
            a.preventDefault();
            clearInterval(C);
            C = null;
        }

        function S() {
            w = false;
            T.removeClass('mbsc-active');
            a(document).off('mousemove', D).off('mouseup', E);
        }

        function a4(b, c, d) {
            var a = c ? Math.min(Math.round(Math.max((b - J) * 100 / L, 0) / H / l) * l * 100 / (p - k), 100) : Math.max(0, Math.min((b - J) * 100 / L, 100));
            if (u) {
                a = 100 - a;
            }
            v(Math.round((k + a / H) * P) / P, r, d, a);
        }

        function o(a) {
            return (a - k) * 100 / (p - k);
        }

        function N(b, c) {
            var a = j.attr(b);
            return a === e || a === '' ? c : a === 'true';
        }

        function v(a, b, j, d, l, f) {
            var g = s.eq(b),
                c = g.parent();
            a = Math.min(p, Math.max(a, k));
            if (f === e) {
                f = j;
            }
            if (Q) {
                if (b === 0) {
                    a = Math.min(a, i[1]);
                    y.css({
                        width: o(i[1]) - o(a) + '%',
                        left: u ? 'auto' : o(a) + '%',
                        right: u ? o(a) + '%' : 'auto'
                    });
                } else {
                    a = Math.max(a, i[0]);
                    y.css({
                        width: o(a) - o(i[0]) + '%'
                    });
                }
            } else if (t || !A) {
                c.css({
                    left: u ? 'auto' : (d || o(a)) + '%',
                    right: u ? (d || o(a)) + '%' : 'auto'
                });
            } else {
                y.css('width', (d || o(a)) + '%');
            }
            if (B) {
                U.eq(b).html(a);
            }
            if (a > k) {
                c.removeClass('mbsc-slider-start');
            } else if (i[b] > k || l) {
                c.addClass('mbsc-slider-start');
            }
            if (!t && (i[b] != a || l)) {
                h._display(a);
            }
            if (j && i[b] != a) {
                I = true;
                i[b] = a;
                h._fillValue(a, b, f);
            }
            g.attr('aria-valuenow', a);
        }
        b.classes.Progress.call(this, K, a5, true);
        h._onTap = f;
        h.__onInit = f;
        h._readValue = function(a) {
            return +a.val();
        };
        h._fillValue = function(b, a, c) {
            j.eq(a).val(b);
            if (c) {
                j.eq(a).trigger('change');
            }
        };
        h._attachChange = function() {
            j.on(m.changeEvent, _);
        };
        h._onInit = function(d) {
            var b, c, f;
            if (n) {
                n.removeClass('mbsc-slider-has-tooltip');
                if (l != 1) {
                    a('.mbsc-slider-step', q).remove();
                }
            }
            h.__onInit();
            n = h._$parent;
            q = h._$track;
            y = h._$progress;
            j = n.find('input');
            m = h.settings;
            k = h._min;
            p = h._max;
            l = d.step === e ? +j.attr('step') || m.step : d.step;
            a3 = N('data-live', m.live);
            B = N('data-tooltip', m.tooltip);
            A = N('data-highlight', m.highlight) && j.length < 3;
            P = l % 1 !== 0 ? 100 / (+(l % 1).toFixed(2) * 100) : 1;
            H = 100 / (p - k) || 100;
            t = j.length > 1;
            Q = A && j.length == 2;
            u = m.rtl;
            i = [];
            if (B) {
                n.addClass('mbsc-slider-has-tooltip');
            }
            if (l != 1) {
                c = (p - k) / l;
                for (b = 0; b <= c; ++b) {
                    q.append('<span class="mbsc-slider-step" style="' + (u ? 'right' : 'left') + ':' + 100 / c * b + '%"></span>');
                }
            }
            if (s) {
                f = true;
                s.parent().remove();
            }
            j.each(function(b) {
                i[b] = h._readValue(a(this));
                a(this).attr('data-index', b).attr('min', k).attr('max', p).attr('step', l);
                if (m.handle) {
                    (A ? y : q).append('<span class="mbsc-slider-handle-cont' + (Q && !b ? ' mbsc-slider-handle-left' : '') + '">' + '<span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' + k + '" aria-valuemax="' + p + '" data-index="' + b + '"></span>' + (B ? '<span class="mbsc-slider-tooltip"></span>' : '') + '</span>');
                }
            });
            s = n.find('.mbsc-slider-handle');
            U = n.find('.mbsc-slider-tooltip');
            R = n.find(t ? '.mbsc-slider-handle-cont' : '.mbsc-progress-cont');
            s.on('keydown', a1).on('keyup', F).on('blur', F);
            R.on('touchstart mousedown', W).on('touchmove', D).on('touchend touchcancel', E).on('pointercancel', Z);
            if (!f) {
                j.on('click', $);
                n.on('click', a0);
            }
        };
        h._onDestroy = function() {
            n.off('click', a0);
            j.off(m.changeEvent, _).off('click', $);
            s.off('keydown', a1).off('keyup', F).off('blur', F);
            R.off('touchstart mousedown', W).off('touchmove', D).off('touchend', E).off('touchcancel pointercancel', Z);
        };
        h.refresh = function() {
            j.each(function(b) {
                v(h._readValue(a(this)), b, true, false, true, false);
            });
        };
        h.getVal = function() {
            return t ? i.slice(0) : i[0];
        };
        h.setVal = h._setVal = function(b, d, c) {
            if (!a.isArray(b)) {
                b = [b];
            }
            a.each(b, function(a, b) {
                v(b, a, true, false, true, c);
            });
        };
        if (!a6) {
            h.init(a5);
        }
    };
    b.classes.Slider.prototype = {
        _class: 'progress',
        _css: 'mbsc-progress mbsc-slider',
        _hasTheme: true,
        _hasLang: true,
        _wrap: true,
        _defaults: {
            changeEvent: 'change',
            stopProp: true,
            min: 0,
            max: 100,
            step: 1,
            live: true,
            highlight: true,
            handle: true,
            round: true,
            returnAffix: true
        }
    };
    b.presetShort('slider', 'Slider');
}());
(function(d) {
    var f, g = function() {},
        b = mobiscroll,
        a = b.$,
        e = b.util,
        c = e.getCoord,
        h = e.testTouch;
    b.classes.Form = function(q, r) {
        var d, n, m, k = '',
            i = a(q),
            j = this;

        function o(b) {
            var g = {},
                c = b[0],
                i = b.parent(),
                h = b.attr('data-password-toggle'),
                d = b.attr('data-icon-show') || 'eye',
                f = b.attr('data-icon-hide') || 'eye-blocked';
            if (h) {
                g.right = c.type == 'password' ? d : f;
            }
            e.addIcon(b, g);
            if (h) {
                j.tap(i.find('.mbsc-right-ic'), function() {
                    if (c.type == "text") {
                        c.type = "password";
                        a(this).addClass('mbsc-ic-' + d).removeClass('mbsc-ic-' + f);
                    } else {
                        c.type = "text";
                        a(this).removeClass('mbsc-ic-' + d).addClass('mbsc-ic-' + f);
                    }
                });
            }
        }

        function t() {
            var b = this;
            if (!a(b).hasClass('mbsc-textarea-scroll')) {
                var c = b.scrollHeight - b.offsetHeight,
                    d = b.offsetHeight + c;
                b.scrollTop = 0;
                b.style.height = d + 'px';
            }
        }

        function s(b) {
            var c, d, e;
            if (b.offsetHeight) {
                b.style.height = '';
                e = b.scrollHeight - b.offsetHeight;
                c = b.offsetHeight + (e > 0 ? e : 0);
                d = Math.round(c / 24);
                if (d > 10) {
                    b.scrollTop = c;
                    c = 240 + (c - d * 24);
                    a(b).addClass('mbsc-textarea-scroll');
                } else {
                    a(b).removeClass('mbsc-textarea-scroll');
                }
                if (c) {
                    b.style.height = c + 'px';
                }
            }
        }

        function p() {
            clearTimeout(n);
            n = setTimeout(function() {
                a('textarea.mbsc-control', i).each(function() {
                    s(this);
                });
            }, 100);
        }

        function l(a) {
            return !!(a.id && b.instances[a.id]);
        }
        b.classes.Base.call(this, q, r, true);
        j.refresh = function(g) {
            a('input,select,textarea,progress,button', i).each(function() {
                function A() {
                    a('input', r).val(p.selectedIndex != -1 ? p.options[p.selectedIndex].text : '');
                }
                var w, y, u, C, B, p = this,
                    k = a(p),
                    r = k.parent(),
                    x = k.attr('data-role'),
                    q = k.attr('type') || p.nodeName.toLowerCase();
                if (k.attr('data-enhance') != 'false' && mobiscroll.vKMaI) {
                    if (/(switch|range|segmented|stepper)/.test(x)) {
                        q = x;
                    }
                    if (k.hasClass('mbsc-control')) {
                        if (/(switch|range|progress)/.test(q) && l(p) && !g) {
                            b.instances[p.id].option({
                                theme: d.theme,
                                lang: d.lang,
                                onText: d.onText,
                                offText: d.offText,
                                stopProp: d.stopProp
                            });
                        }
                    } else {
                        if (q != 'button' && q != 'submit' && q != 'segmented') {
                            r.find('label').addClass('mbsc-label');
                            r.contents().filter(function() {
                                return this.nodeType == 3 && this.nodeValue && /\S/.test(this.nodeValue);
                            }).each(function() {
                                a('<span class="mbsc-label"></span>').insertAfter(this).append(this);
                            });
                        }
                        k.addClass('mbsc-control');
                        switch (q) {
                            case 'button':
                            case 'submit':
                                y = k.attr('data-icon');
                                k.addClass('mbsc-btn');
                                if (y) {
                                    k.prepend('<span class="mbsc-btn-ic mbsc-ic mbsc-ic-' + y + '"></span>');
                                    if (k.text() === "") {
                                        k.addClass('mbsc-btn-icon-only');
                                    }
                                }
                                break;
                            case 'switch':
                                if (!l(p)) {
                                    new b.classes.Switch(p, {
                                        theme: d.theme,
                                        lang: d.lang,
                                        rtl: d.rtl,
                                        onText: d.onText,
                                        offText: d.offText,
                                        stopProp: d.stopProp
                                    });
                                }
                                break;
                            case 'checkbox':
                                r.prepend(k).addClass('mbsc-checkbox mbsc-control-w');
                                k.after('<span class="mbsc-checkbox-box"></span>');
                                break;
                            case 'range':
                                if (!r.hasClass('mbsc-slider') && !l(p)) {
                                    new b.classes.Slider(p, {
                                        theme: d.theme,
                                        lang: d.lang,
                                        rtl: d.rtl,
                                        stopProp: d.stopProp
                                    });
                                }
                                break;
                            case 'progress':
                                if (!l(p)) {
                                    new b.classes.Progress(p, {
                                        theme: d.theme,
                                        lang: d.lang,
                                        rtl: d.rtl
                                    });
                                }
                                break;
                            case 'radio':
                                r.addClass('mbsc-radio mbsc-control-w');
                                k.after('<span class="mbsc-radio-box"><span></span></span>');
                                break;
                            case 'select':
                            case 'select-one':
                            case 'select-multiple':
                                if (k.prev().is('input.mbsc-control')) {
                                    w = k.prev();
                                } else {
                                    w = a('<input tabindex="-1" type="text" class="mbsc-control mbsc-control-ev" readonly>');
                                }
                                o(k);
                                r.addClass('mbsc-input mbsc-select mbsc-control-w');
                                k.after(w);
                                w.after('<span class="mbsc-select-ic mbsc-ic mbsc-ic-arrow-down5"></span>');
                                break;
                            case 'textarea':
                                o(k);
                                r.addClass('mbsc-input mbsc-textarea mbsc-control-w');
                                break;
                            case 'segmented':
                                var v, z;
                                if (!k.parent().hasClass('mbsc-segmented-item')) {
                                    z = a('<div class="mbsc-segmented"></div>');
                                    r.after(z);
                                    a('input[name="' + k.attr('name') + '"]', i).each(function(c, b) {
                                        v = a(b).parent().addClass('mbsc-segmented-item');
                                        a('<span class="mbsc-segmented-content">' + (a(b).attr('data-icon') ? ' <span class="mbsc-ic mbsc-ic-' + a(b).attr('data-icon') + '"></span> ' : '') + '</span>').append(v.contents()).appendTo(v);
                                        v.prepend(b);
                                        z.append(v);
                                    });
                                }
                                break;
                            case 'stepper':
                                if (!l(p)) {
                                    new b.classes.Stepper(p, {
                                        form: j
                                    });
                                }
                                break;
                            case 'hidden':
                                break;
                            default:
                                o(k);
                                r.addClass('mbsc-input mbsc-control-w');
                                break;
                        }
                    }
                    if (!k.hasClass('mbsc-control-ev')) {
                        if (/select/.test(q) && !k.hasClass('mbsc-comp')) {
                            k.on('change.mbsc-form', A);
                            A();
                        }
                        if (q == 'textarea') {
                            k.on('keydown.mbsc-form input.mbsc-form', function() {
                                clearTimeout(n);
                                n = setTimeout(function() {
                                    s(p);
                                }, 100);
                            }).on('scroll.mbsc-form', t);
                        }
                        k.addClass('mbsc-control-ev').on('touchstart.mbsc-form mousedown.mbsc-form', function(b) {
                            if (h(b, this)) {
                                C = c(b, 'X');
                                B = c(b, 'Y');
                                if (f) {
                                    f.removeClass('mbsc-active');
                                }
                                if (!p.disabled) {
                                    u = true;
                                    f = a(this);
                                    a(this).addClass('mbsc-active');
                                    m('onControlActivate', {
                                        target: this,
                                        domEvent: b
                                    });
                                }
                            }
                        }).on('touchmove.mbsc-form mousemove.mbsc-form', function(a) {
                            if (u && Math.abs(c(a, 'X') - C) > 9 || Math.abs(c(a, 'Y') - B) > 9) {
                                k.removeClass('mbsc-active');
                                m('onControlDeactivate', {
                                    target: k[0],
                                    domEvent: a
                                });
                                u = false;
                            }
                        }).on('touchend.mbsc-form touchcancel.mbsc-form mouseleave.mbsc-form mouseup.mbsc-form', function(a) {
                            if (u && a.type == 'touchend' && !p.readOnly) {
                                p.focus();
                                if (/(button|submit|checkbox|switch|radio)/.test(q)) {
                                    a.preventDefault();
                                }
                                if (!/select/.test(q)) {
                                    var b = (a.originalEvent || a).changedTouches[0],
                                        c = document.createEvent('MouseEvents');
                                    c.initMouseEvent('click', true, true, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, false, false, false, false, 0, null);
                                    c.tap = true;
                                    p.dispatchEvent(c);
                                    e.preventClick();
                                }
                            }
                            if (u) {
                                setTimeout(function() {
                                    k.removeClass('mbsc-active');
                                    m('onControlDeactivate', {
                                        target: k[0],
                                        domEvent: a
                                    });
                                }, 100);
                            }
                            u = false;
                            f = null;
                        });
                    }
                }
            });
            if (!g) {
                p();
            }
        };
        j.init = function(c) {
            j._init(c);
            if (!b.themes.form[d.theme]) {
                d.theme = 'mobiscroll';
            }
            if (!i.hasClass('mbsc-form')) {
                i.on('touchstart', g).show();
                a(window).on('resize orientationchange', p);
            }
            if (k) {
                i.removeClass(k);
            }
            k = 'mbsc-form mbsc-' + d.theme + (d.baseTheme ? ' mbsc-' + d.baseTheme : '') + (d.rtl ? ' mbsc-rtl' : ' mbsc-ltr');
            i.addClass(k);
            j.refresh();
            j.trigger('onInit');
        };
        j.destroy = function() {
            i.removeClass(k).off('touchstart', g);
            a(window).off('resize orientationchange', p);
            a('.mbsc-control', i).off('.mbsc-form').removeClass('mbsc-control-ev');
            j._destroy();
            a('.mbsc-progress progress', i).mobiscroll('destroy');
            a('.mbsc-slider input', i).mobiscroll('destroy');
            a('.mbsc-stepper input', i).mobiscroll('destroy');
            a('.mbsc-switch input', i).mobiscroll('destroy');
        };
        d = j.settings;
        m = j.trigger;
        j.init(r);
    };
    b.classes.Form.prototype = {
        _hasDef: true,
        _hasTheme: true,
        _hasLang: true,
        _class: 'form',
        _defaults: {
            tap: true,
            stopProp: true,
            lang: 'en'
        }
    };
    b.themes.form.mobiscroll = {};
    b.presetShort('form', 'Form');
    b.classes.Stepper = function(n, y) {
        var o, x, B, C, l, u, P, G, A, L, N, p, j, k, g, r, K, F, e, i = this,
            f = a(n),
            t, m, z = e,
            q = y.form;

        function H(b) {
            if (b.keyCode == 32) {
                b.preventDefault();
                if (!l && !n.disabled) {
                    o = a(this).addClass('mbsc-active');
                    O(b);
                }
            }
        }

        function I(a) {
            if (l) {
                a.preventDefault();
                E(true);
            }
        }

        function J(b) {
            if (h(b, this) && !n.disabled) {
                o = a(this).addClass('mbsc-active').trigger('focus');
                if (q) {
                    q.trigger('onControlActivate', {
                        target: o[0],
                        domEvent: b
                    });
                }
                O(b);
                if (b.type === 'mousedown') {
                    a(document).on('mousemove', w).on('mouseup', v);
                }
            }
        }

        function v(b) {
            if (l) {
                b.preventDefault();
                E(true, b);
                if (b.type === 'mouseup') {
                    a(document).off('mousemove', w).off('mouseup', v);
                }
            }
        }

        function w(a) {
            if (l) {
                L = c(a, 'X');
                N = c(a, 'Y');
                P = L - K;
                G = N - F;
                if (Math.abs(P) > 7 || Math.abs(G) > 7) {
                    E();
                }
            }
        }

        function M() {
            var b;
            if (!n.disabled) {
                b = parseFloat(a(this).val());
                s(isNaN(b) ? e : b);
            }
        }

        function s(c, a, b) {
            z = e;
            if (a === d) {
                a = true;
            }
            if (b === d) {
                b = a;
            }
            if (c !== d) {
                e = Math.min(j, Math.max(Math.round(c / g) * g, k));
            } else {
                e = Math.min(j, Math.max(e + (o.hasClass('mbsc-stepper-minus') ? -g : g), k));
            }
            u = true;
            C.removeClass('mbsc-step-disabled');
            if (a) {
                f.val(e);
            }
            if (e == k) {
                B.addClass('mbsc-step-disabled');
            } else if (e == j) {
                x.addClass('mbsc-step-disabled');
            }
            if (e !== z && b) {
                f.trigger('change');
            }
        }

        function O(a) {
            if (!l) {
                l = true;
                u = false;
                K = c(a, 'X');
                F = c(a, 'Y');
                clearInterval(p);
                clearTimeout(p);
                p = setTimeout(function() {
                    s();
                    p = setInterval(function() {
                        s();
                    }, 150);
                }, 300);
            }
        }

        function E(a, b) {
            clearInterval(p);
            clearTimeout(p);
            if (!u && a) {
                s();
            }
            l = false;
            u = false;
            o.removeClass('mbsc-active');
            if (q) {
                setTimeout(function() {
                    q.trigger('onControlDeactivate', {
                        target: o[0],
                        domEvent: b
                    });
                }, 100);
            }
        }

        function D(b, c) {
            var a = f.attr(b);
            return a === d || a === '' ? c : +a;
        }
        b.classes.Base.call(this, n, y, true);
        i.getVal = function() {
            var a = parseFloat(f.val());
            a = isNaN(a) ? e : a;
            return Math.min(j, Math.max(Math.round(a / g) * g, k));
        };
        i.setVal = function(a, b, c) {
            a = parseFloat(a);
            s(isNaN(a) ? e : a, b, c);
        };
        i.init = function(b) {
            t = f.parent().hasClass('mbsc-stepper');
            m = t ? f.closest('.mbsc-stepper-cont') : f.parent();
            i._init(b);
            r = i.settings;
            k = b.min === d ? D('min', r.min) : b.min;
            j = b.max === d ? D('max', r.max) : b.max;
            g = b.step === d ? D('step', r.step) : b.step;
            A = f.attr('data-val') || r.val;
            e = Math.min(j, Math.max(Math.round(+n.value / g) * g || 0, k));
            if (!t) {
                m.addClass('mbsc-stepper-cont mbsc-control-w').append('<span class="mbsc-segmented mbsc-stepper"></span>').find('.mbsc-stepper').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-minus ' + (e == k ? 'mbsc-step-disabled' : '') + '"  tabindex="0"><span class="mbsc-segmented-content"><span class="mbsc-ic mbsc-ic-minus"></span></span></span>').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-plus ' + (e == j ? 'mbsc-step-disabled' : '') + '"  tabindex="0"><span class="mbsc-segmented-content"> <span class="mbsc-ic mbsc-ic-plus"></span> </span></span>').prepend(f);
            }
            B = a('.mbsc-stepper-minus', m);
            x = a('.mbsc-stepper-plus', m);
            if (!t) {
                if (A == 'left') {
                    m.addClass('mbsc-stepper-val-left');
                    f.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>');
                } else if (A == 'right') {
                    m.addClass('mbsc-stepper-val-right');
                    x.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>');
                } else {
                    B.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content mbsc-stepper-val"></span></span>');
                }
            }
            f.val(e).attr('data-role', 'stepper').attr('min', k).attr('max', j).attr('step', g).on('change', M);
            C = a('.mbsc-stepper-control', m).on('keydown', H).on('keyup', I).on('mousedown touchstart', J).on('touchmove', w).on('touchend touchcancel', v);
            f.addClass('mbsc-stepper-ready mbsc-control');
        };
        i.destroy = function() {
            f.removeClass('mbsc-control').off('change', M);
            C.off('keydown', H).off('keyup', I).off('mousedown touchstart', J).off('touchmove', w).off('touchend touchcancel', v);
            i._destroy();
        };
        i.init(y);
    };
    b.classes.Stepper.prototype = {
        _class: 'stepper',
        _defaults: {
            min: 0,
            max: 100,
            step: 1
        }
    };
    b.presetShort('stepper', 'Stepper');
    b.classes.Switch = function(f, e) {
        var d, g, h, c = this;
        e = e || {};
        a.extend(e, {
            changeEvent: 'click',
            min: 0,
            max: 1,
            step: 1,
            live: false,
            round: false,
            handle: false,
            highlight: false
        });
        b.classes.Slider.call(this, f, e, true);
        c._readValue = function() {
            return f.checked ? 1 : 0;
        };
        c._fillValue = function(a, c, b) {
            d.prop('checked', !!a);
            if (b) {
                d.trigger('change');
            }
        };
        c._onTap = function(a) {
            c._setVal(a ? 0 : 1);
        };
        c.__onInit = function() {
            h = c.settings;
            d = a(f);
            g = d.parent();
            g.find('.mbsc-switch-track').remove();
            g.prepend(d);
            d.attr('data-role', 'switch').after('<span class="mbsc-progress-cont mbsc-switch-track">' + '<span class="mbsc-progress-track mbsc-progress-anim">' + '<span class="mbsc-slider-handle-cont">' + '<span class="mbsc-slider-handle mbsc-switch-handle" data-index="0">' + '<span class="mbsc-switch-txt-off">' + h.offText + '</span>' + '<span class="mbsc-switch-txt-on">' + h.onText + '</span>' + '</span></span></span></span>');
            c._$track = g.find('.mbsc-progress-track');
        };
        c.getVal = function() {
            return f.checked;
        };
        c.setVal = function(a, b, d) {
            c._setVal(a ? 1 : 0, b, d);
        };
        c.init(e);
    };
    b.classes.Switch.prototype = {
        _class: 'switch',
        _css: 'mbsc-switch',
        _hasTheme: true,
        _hasLang: true,
        _defaults: {
            stopProp: true,
            offText: 'Off',
            onText: 'On'
        }
    };
    b.presetShort('switch', 'Switch');
    a(function() {
        a('[mbsc-enhance]').each(function() {
            a(this).mobiscroll().form();
        });
        a(document).on('mbsc-enhance', function(b, c) {
            if (a(b.target).is('[mbsc-enhance]')) {
                a(b.target).mobiscroll().form(c);
            } else {
                a('[mbsc-enhance]', b.target).each(function() {
                    a(this).mobiscroll().form(c);
                });
            }
        });
        a(document).on('mbsc-refresh', function(b) {
            if (a(b.target).is('[mbsc-enhance]')) {
                a(b.target).mobiscroll('refresh');
            } else {
                a('[mbsc-enhance]', b.target).each(function() {
                    a(this).mobiscroll('refresh');
                });
            }
        });
    });
}());
(function() {
    mobiscroll.themes.form['android-holo'] = {};
}());
(function() {
    mobiscroll.themes.form.ios = {};
}());
(function() {
    var a = mobiscroll.$;
    mobiscroll.themes.form.material = {
        onControlActivate: function(d) {
            var c, b = a(d.target);
            if (b[0].type == 'button' || b[0].type == 'submit') {
                c = b;
            }
            if (b.attr('data-role') == 'segmented') {
                c = b.next();
            }
            if (b.hasClass('mbsc-stepper-control') && !b.hasClass('mbsc-step-disabled')) {
                c = b.find('.mbsc-segmented-content');
            }
            if (c) {
                mobiscroll.themes.material.addRipple(c, d.domEvent);
            }
        },
        onControlDeactivate: function() {
            mobiscroll.themes.material.removeRipple();
        }
    };
}());
(function() {
    mobiscroll.themes.form.wp = {};
}());
(function() {
    var b = mobiscroll,
        a = b.$;
    b.themes.frame.bootstrap = {
        dateDisplay: 'Mddyy',
        disabledClass: 'disabled',
        activeClass: 'btn-primary',
        activeTabClass: 'active',
        todayClass: 'text-primary',
        btnCalPrevClass: '',
        btnCalNextClass: '',
        onMarkupInserted: function(c) {
            var b = a(c.target);
            a('.mbsc-fr-popup', b).addClass('popover');
            a('.mbsc-fr-w', b).addClass('popover-content');
            a('.mbsc-fr-hdr', b).addClass('popover-title');
            a('.mbsc-fr-arr-i', b).addClass('popover');
            a('.mbsc-fr-arr', b).addClass('arrow');
            a('.mbsc-fr-btn', b).addClass('btn btn-default');
            a('.mbsc-fr-btn-s .mbsc-fr-btn', b).removeClass('btn-default').addClass('btn btn-primary');
            a('.mbsc-sc-btn-plus', b).addClass('glyphicon glyphicon-chevron-down');
            a('.mbsc-sc-btn-minus', b).addClass('glyphicon glyphicon-chevron-up');
            a('.mbsc-cal-next .mbsc-cal-btn-txt', b).prepend('<i class="glyphicon glyphicon-chevron-right"></i>');
            a('.mbsc-cal-prev .mbsc-cal-btn-txt', b).prepend('<i class="glyphicon glyphicon-chevron-left"></i>');
            a('.mbsc-cal-tabs ul', b).addClass('nav nav-tabs');
            a('.mbsc-cal-sc-c', b).addClass('popover');
            a('.mbsc-cal-week-nrs-c', b).addClass('popover');
            a('.mbsc-cal-events', b).addClass('popover');
            a('.mbsc-cal-events-arr', b).addClass('arrow');
            a('.mbsc-range-btn', b).addClass('btn btn-sm btn-small btn-default');
            a('.mbsc-np-btn', b).addClass('btn btn-default');
        },
        onPosition: function(b) {
            setTimeout(function() {
                a('.mbsc-fr-bubble-top, .mbsc-fr-bubble-top .mbsc-fr-arr-i', b.target).removeClass('bottom').addClass('top');
                a('.mbsc-fr-bubble-bottom, .mbsc-fr-bubble-bottom .mbsc-fr-arr-i', b.target).removeClass('top').addClass('bottom');
            }, 10);
        },
        onEventBubbleShow: function(c) {
            var b = a(c.eventList);
            a('.mbsc-cal-event-list', b).addClass('list-group');
            a('.mbsc-cal-event', b).addClass('list-group-item');
            setTimeout(function() {
                if (b.hasClass('mbsc-cal-events-b')) {
                    b.removeClass('top').addClass('bottom');
                } else {
                    b.removeClass('bottom').addClass('top');
                }
            }, 10);
        }
    };
}());
(function() {
    var b = mobiscroll,
        a = b.$;
    b.themes.frame.material = {
        showLabel: false,
        headerText: false,
        btnWidth: false,
        selectedLineBorder: 2,
        weekDays: 'min',
        deleteIcon: 'material-backspace',
        icon: {
            filled: 'material-star',
            empty: 'material-star-outline'
        },
        checkIcon: 'material-check',
        btnPlusClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-down',
        btnMinusClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-up',
        btnCalPrevClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-left',
        btnCalNextClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-right',
        onMarkupReady: function(c) {
            b.themes.material.initRipple(a(c.target), '.mbsc-fr-btn-e', 'mbsc-fr-btn-d', 'mbsc-fr-btn-nhl');
        },
        onEventBubbleShow: function(e) {
            var b = a(e.eventList),
                c = a(e.target).closest('.mbsc-cal-row').index() < 2,
                d = a('.mbsc-cal-event-color', b).eq(c ? 0 : -1).css('background-color');
            a('.mbsc-cal-events-arr', b).css('border-color', c ? 'transparent transparent ' + d + ' transparent' : d + 'transparent transparent transparent');
        }
    };
}());
(function(c) {
    var b = mobiscroll,
        a = b.$,
        f = b.util,
        g = f.isNumeric,
        e = function() {},
        d = b.classes;
    d.Numpad = function(m, B, D) {
        var l, o, r, j, e, p, h, y, x, k, s, n = a(m),
            b = this,
            v = [],
            f = [],
            i = {},
            w = {},
            t = {
                48: 0,
                49: 1,
                50: 2,
                51: 3,
                52: 4,
                53: 5,
                54: 6,
                55: 7,
                56: 8,
                57: 9,
                96: 0,
                97: 1,
                98: 2,
                99: 3,
                100: 4,
                101: 5,
                102: 6,
                103: 7,
                104: 8,
                105: 9
            };

        function q(f) {
            var c, d = e.validate.call(m, {
                    values: h.slice(0),
                    variables: i
                }, b) || [],
                g = d && d.disabled || [];
            b._isValid = d.invalid ? false : true;
            b._tempValue = e.formatValue.call(m, h.slice(0), i, b);
            j = h.length;
            y = d.length || k;
            if (b._isVisible && mobiscroll.vKMaI) {
                a('.mbsc-np-ph', l).each(function(b) {
                    a(this).html(e.fill == 'ltr' ? b >= j ? r : p || h[b] : b >= k - y ? b + j < k ? r : p || h[b + j - k] : '');
                });
                a('.mbsc-np-cph', l).each(function() {
                    a(this).html(i[a(this).attr('data-var')] || a(this).attr('data-ph'));
                });
                if (j === k) {
                    for (c = 0; c <= 9; c++) {
                        g.push(c);
                    }
                }
                a('.mbsc-np-btn', l).removeClass(o);
                for (c = 0; c < g.length; c++) {
                    a('.mbsc-np-btn[data-val="' + g[c] + '"]', l).addClass(o);
                }
                if (b._isValid) {
                    a('.mbsc-fr-btn-s .mbsc-fr-btn', l).removeClass(o);
                } else {
                    a('.mbsc-fr-btn-s .mbsc-fr-btn', l).addClass(o);
                }
                if (b.live) {
                    b._hasValue = f || b._hasValue;
                    u(f, false, f);
                    if (f) {
                        x('onSet', {
                            valueText: b._value
                        });
                    }
                }
            }
        }

        function u(d, e, c, g) {
            if (e) {
                q();
            }
            if (!g) {
                s = h.slice(0);
                w = a.extend({}, i);
                v = f.slice(0);
                b._value = b._hasValue ? b._tempValue : null;
            }
            if (d) {
                if (b._isInput) {
                    n.val(b._hasValue && b._isValid ? b._value : '');
                }
                x('onFill', {
                    valueText: b._hasValue ? b._tempValue : '',
                    change: c
                });
                if (c) {
                    b._preventChange = true;
                    n.trigger('change');
                }
            }
        }

        function C(e) {
            var a, c, b = e || [],
                d = [];
            f = [];
            i = {};
            for (a = 0; a < b.length; a++) {
                if (/:/.test(b[a])) {
                    c = b[a].split(':');
                    i[c[0]] = c[1];
                    f.push(c[0]);
                } else {
                    d.push(b[a]);
                    f.push('digit');
                }
            }
            return d;
        }

        function z(a, b) {
            if (!j && !b && !e.allowLeadingZero || a.hasClass('mbsc-fr-btn-d') || a.hasClass('mbsc-np-btn-empty')) {
                return;
            }
            if (j < k) {
                f.push('digit');
                h.push(b);
                q(true);
            }
        }

        function E(e, b) {
            var a, c, d = e.attr('data-var');
            if (!e.hasClass('mbsc-fr-btn-d')) {
                if (d) {
                    c = d.split(':');
                    f.push(c[0]);
                    i[c[0]] = c[1];
                }
                if (b.length + j <= y) {
                    for (a = 0; a < b.length; ++a) {
                        f.push('digit');
                        h.push(g(b[a]) ? +b[a] : b[a]);
                    }
                }
                q(true);
            }
        }

        function A() {
            var b, c, a = f.pop();
            if (j || a !== 'digit') {
                if (a !== 'digit' && i[a]) {
                    delete i[a];
                    c = f.slice(0);
                    f = [];
                    for (b = 0; b < c.length; b++) {
                        if (c[b] !== a) {
                            f.push(c[b]);
                        }
                    }
                } else {
                    h.pop();
                }
                q(true);
            }
        }
        d.Frame.call(this, m, B, true);
        b.setVal = b._setVal = function(d, f, g, i) {
            b._hasValue = d !== null && d !== c;
            h = C(a.isArray(d) ? d.slice(0) : e.parseValue.call(m, d, b));
            u(f, true, g === c ? f : g, i);
        };
        b.getVal = b._getVal = function(a) {
            return b._hasValue || a ? b[a ? '_tempValue' : '_value'] : null;
        };
        b.setArrayVal = b.setVal;
        b.getArrayVal = function(a) {
            return a ? h.slice(0) : b._hasValue ? s.slice(0) : null;
        };
        b._readValue = function() {
            var a = n.val() || '';
            if (a !== '') {
                b._hasValue = true;
            }
            if (p) {
                i = {};
                f = [];
                h = [];
            } else {
                i = b._hasValue ? w : {};
                f = b._hasValue ? v : [];
                h = b._hasValue && s ? s.slice(0) : C(e.parseValue.call(m, a, b));
                u(false, true);
            }
        };
        b._fillValue = function() {
            b._hasValue = true;
            u(true, false, true);
        };
        b._generateContent = function() {
            var g, h, d, c = 1,
                f = '',
                a = '';
            a += '<div class="mbsc-np-hdr"><div role="button" tabindex="0" aria-label="' + e.deleteText + '" class="mbsc-np-del mbsc-fr-btn-e mbsc-ic mbsc-ic-' + e.deleteIcon + '"></div><div class="mbsc-np-dsp">';
            f = e.template.replace(/d/g, '<span class="mbsc-np-ph">' + r + '</span>').replace(/&#100;/g, 'd');
            f = f.replace(/{([a-zA-Z0-9]*)\:?([a-zA-Z0-9\-\_]*)}/g, '<span class="mbsc-np-cph" data-var="$1" data-ph="$2">$2</span>');
            a += f;
            a += '</div></div>';
            a += '<div class="mbsc-np-tbl-c mbsc-w-p"><div class="mbsc-np-tbl">';
            for (g = 0; g < 4; g++) {
                a += '<div class="mbsc-np-row">';
                for (h = 0; h < 3; h++) {
                    d = c;
                    if (c == 10 || c == 12) {
                        d = '';
                    } else if (c == 11) {
                        d = 0;
                    }
                    if (d === '') {
                        if (c == 10 && e.leftKey) {
                            a += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (e.leftKey.variable ? 'data-var="' + e.leftKey.variable + '"' : '') + ' data-val="' + (e.leftKey.value || '') + '" >' + e.leftKey.text + '</div>';
                        } else if (c == 12 && e.rightKey) {
                            a += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (e.rightKey.variable ? 'data-var="' + e.rightKey.variable + '"' : '') + ' data-val="' + (e.rightKey.value || '') + '" >' + e.rightKey.text + '</div>';
                        } else {
                            a += '<div class="mbsc-np-btn mbsc-np-btn-empty"></div>';
                        }
                    } else {
                        a += '<div tabindex="0" role="button" class="mbsc-np-btn mbsc-fr-btn-e" data-val="' + d + '">' + d + '</div>';
                    }
                    c++;
                }
                a += '</div>';
            }
            a += '</div></div>';
            return a;
        };
        b._markupReady = function() {
            l = b._markup;
            q();
        };
        b._attachEvents = function(d) {
            d.on('keydown', function(b) {
                if (t[b.keyCode] !== c) {
                    z(a('.mbsc-np-btn[data-val="' + t[b.keyCode] + '"]'), t[b.keyCode]);
                } else if (b.keyCode == 8) {
                    b.preventDefault();
                    A();
                }
            });
            b.tap(a('.mbsc-np-btn', d), function() {
                var b = a(this);
                if (b.hasClass('mbsc-np-btn-custom')) {
                    E(b, b.attr('data-val'));
                } else {
                    z(b, +b.attr('data-val'));
                }
            }, c, 30);
            b.tap(a('.mbsc-np-del', d), A, c, 30);
        };
        b._processSettings = function() {
            e = b.settings;
            e.headerText = (e.headerText || '').replace('{value}', '');
            e.cssClass = (e.cssClass || '') + ' mbsc-np';
            e.template = e.template.replace(/\\d/, '&#100;');
            r = e.placeholder;
            k = (e.template.match(/d/g) || []).length;
            o = 'mbsc-fr-btn-d ' + (e.disabledClass || '');
            p = e.mask;
            x = b.trigger;
            if (p && n.is('input')) {
                n.attr('type', 'password');
            }
        };
        b._indexOf = function(b, c) {
            var a;
            for (a = 0; a < b.length; ++a) {
                if (b[a].toString() === c.toString()) {
                    return a;
                }
            }
            return -1;
        };
        if (!D) {
            b.init(B);
        }
    };
    d.Numpad.prototype = {
        _hasDef: true,
        _hasTheme: true,
        _hasLang: true,
        _hasPreset: true,
        _class: 'numpad',
        _defaults: a.extend({}, d.Frame.prototype._defaults, {
            template: 'dd.dd',
            placeholder: '0',
            deleteIcon: 'backspace',
            allowLeadingZero: false,
            fill: 'rtl',
            deleteText: 'Delete',
            decimalSeparator: '.',
            thousandsSeparator: ',',
            validate: e,
            parseValue: e,
            formatValue: function(j, l, k) {
                var c, e = 1,
                    h = k.settings,
                    i = h.placeholder,
                    f = h.template,
                    g = j.length,
                    d = f.length,
                    b = '';
                for (c = 0; c < d; c++) {
                    if (f[d - c - 1] == 'd') {
                        if (e <= g) {
                            b = j[g - e] + b;
                        } else {
                            b = i + b;
                        }
                        e++;
                    } else {
                        b = f[d - c - 1] + b;
                    }
                }
                a.each(l, function(a, c) {
                    b = b.replace('{' + a + '}', c);
                });
                return a('<div>' + b + '</div>').text();
            }
        })
    };
    b.themes.numpad = b.themes.frame;
    b.presetShort('numpad', 'Numpad', false);
}());
(function() {
    var a = mobiscroll,
        b = a.$,
        c = a.presets.numpad,
        d = {
            min: 0,
            max: 99.99,
            scale: 2,
            prefix: '',
            suffix: '',
            returnAffix: false
        };
    c.decimal = function(e) {
        function f(e) {
            var b, d = e.slice(0),
                a = 0;
            while (d.length) {
                a = a * 10 + d.shift();
            }
            for (b = 0; b < c.scale; b++) {
                a /= 10;
            }
            return a;
        }

        function g(b) {
            var a = f(b).toFixed(c.scale).replace('.', c.decimalSeparator).replace(/\B(?=(\d{3})+(?!\d))/g, c.thousandsSeparator);
            return a;
        }
        var h = b.extend({}, e.settings),
            c = b.extend(e.settings, d, h);
        e.getVal = function(c) {
            var b = e._getVal(c);
            return a.util.isNumeric(b) ? +b : b;
        };
        return {
            template: c.prefix.replace(/d/g, '\\d') + Array((Math.floor(c.max) + '').length + 1).join('d') + (c.scale ? '.' + Array(c.scale + 1).join('d') : '') + c.suffix.replace(/d/g, '\\d'),
            parseValue: function(f) {
                var b, a, d = f || c.defaultValue,
                    e = [];
                if (d) {
                    d = d + '';
                    a = d.match(/\d+\.?\d*/g);
                    if (a) {
                        a = (+a[0]).toFixed(c.scale);
                        for (b = 0; b < a.length; b++) {
                            if (a[b] != '.') {
                                if (+a[b]) {
                                    e.push(+a[b]);
                                } else if (e.length) {
                                    e.push(0);
                                }
                            }
                        }
                    }
                }
                return e;
            },
            formatValue: function(b) {
                var a = g(b);
                return c.returnAffix ? c.prefix + a + c.suffix : a;
            },
            validate: function(j) {
                var a = j.values,
                    i = g(a),
                    d = f(a),
                    h = [];
                if (!a.length && !c.allowLeadingZero) {
                    h.push(0);
                }
                if (e.isVisible()) {
                    b('.mbsc-np-dsp', e._markup).html(c.prefix + i + c.suffix);
                }
                return {
                    disabled: h,
                    invalid: d > c.max || d < c.min || (c.invalid ? e._indexOf(c.invalid, d) != -1 : false)
                };
            }
        };
    };
}());
(function() {
    function c(d) {
        var a = 0,
            b = 1,
            c = 0;
        while (d.length) {
            if (a > 3) {
                b = 60 * 60;
            } else if (a > 1) {
                b = 60;
            }
            c = c + d.pop() * b * (a % 2 ? 10 : 1);
            a++;
        }
        return c;
    }
    var b = mobiscroll,
        a = b.$,
        e = b.presets.numpad,
        d = ['h', 'm', 's'],
        f = {
            min: 0,
            max: 362439,
            defaultValue: 0,
            hourTextShort: 'h',
            minuteTextShort: 'm',
            secTextShort: 's'
        };
    e.timespan = function(g) {
        var k = a.extend({}, g.settings),
            e = a.extend(g.settings, f, k),
            i = {
                h: e.hourTextShort.replace(/d/g, '\\d'),
                m: e.minuteTextShort.replace(/d/g, '\\d'),
                s: e.secTextShort.replace(/d/g, '\\d')
            },
            h = 'd<span class="mbsc-np-sup mbsc-np-time">' + i.s + '</span>';

        function j(f) {
            var c, b = '',
                e = 60 * 60;
            a(d).each(function(d, a) {
                c = Math.floor(f / e);
                f -= c * e;
                e /= 60;
                if (c > 0 || a == 's' && !b) {
                    b = b + (b ? ' ' : '') + c + i[a];
                }
            });
            return b;
        }
        if (e.max > 9) {
            h = 'd' + h;
        }
        if (e.max > 99) {
            h = '<span class="mbsc-np-ts-m">' + (e.max > 639 ? 'd' : '') + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + i.m + '</span>' + h;
        }
        if (e.max > 6039) {
            h = '<span class="mbsc-np-ts-h">' + (e.max > 38439 ? 'd' : '') + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + i.h + '</span>' + h;
        }
        g.setVal = function(a, c, d, e) {
            if (b.util.isNumeric(a)) {
                a = j(a);
            }
            return g._setVal(a, c, d, e);
        };
        g.getVal = function(a) {
            return g._hasValue || a ? c(g.getArrayVal(a)) : null;
        };
        return {
            template: h,
            parseValue: function(g) {
                var c, f = g || j(e.defaultValue),
                    b = [];
                if (f) {
                    a(d).each(function(d, a) {
                        c = new RegExp('(\\d+)' + i[a], 'gi').exec(f);
                        if (c) {
                            c = +c[1];
                            if (c > 9) {
                                b.push(Math.floor(c / 10));
                                b.push(c % 10);
                            } else {
                                if (b.length) {
                                    b.push(0);
                                }
                                if (c || b.length) {
                                    b.push(c);
                                }
                            }
                        } else if (b.length) {
                            b.push(0);
                            b.push(0);
                        }
                    });
                }
                return b;
            },
            formatValue: function(a) {
                return j(c(a));
            },
            validate: function(f) {
                var b = f.values,
                    a = c(b.slice(0)),
                    d = [];
                if (!b.length) {
                    d.push(0);
                }
                return {
                    disabled: d,
                    invalid: a > e.max || a < e.min || (e.invalid ? g._indexOf(e.invalid, +a) != -1 : false)
                };
            }
        };
    };
}());
(function() {
    var b = mobiscroll,
        a = b.$,
        c = b.presets.numpad,
        d = {
            timeFormat: 'hh:ii A',
            amText: 'am',
            pmText: 'pm'
        };
    c.time = function(o) {
        var p = a.extend({}, o.settings),
            b = a.extend(o.settings, d, p),
            j = b.timeFormat.split(':'),
            c = b.timeFormat.match(/a/i),
            m = c ? c[0] == 'a' ? b.amText : b.amText.toUpperCase() : '',
            l = c ? c[0] == 'a' ? b.pmText : b.pmText.toUpperCase() : '',
            n = 0,
            e = b.min ? '' + b.min.getHours() : '',
            f = b.max ? '' + b.max.getHours() : '',
            k = b.min ? '' + (b.min.getMinutes() < 10 ? '0' + b.min.getMinutes() : b.min.getMinutes()) : '',
            g = b.max ? '' + (b.max.getMinutes() < 10 ? '0' + b.max.getMinutes() : b.max.getMinutes()) : '',
            i = b.min ? '' + (b.min.getSeconds() < 10 ? '0' + b.min.getSeconds() : b.min.getSeconds()) : '',
            h = b.max ? '' + (b.max.getSeconds() < 10 ? '0' + b.max.getSeconds() : b.max.getSeconds()) : '';
        b.min ? b.min.setFullYear(2014, 7, 20) : '';
        b.max ? b.max.setFullYear(2014, 7, 20) : '';

        function q(c, e) {
            var b, d = '';
            for (b = 0; b < c.length; ++b) {
                d += c[b] + (b % 2 == (c.length % 2 == 1 ? 0 : 1) && b != c.length - 1 ? ':' : '');
            }
            a.each(e, function(b, a) {
                d += ' ' + a;
            });
            return d;
        }

        function r(d) {
            var a, o, m, s, t, w, p, q, u, v, l = [],
                r = 2 * j.length;
            n = r;
            if (!d.length) {
                if (c) {
                    l.push(0);
                    l.push(b.leftKey.value);
                }
                l.push(b.rightKey.value);
            }
            if (!c && (r - d.length < 2 || d[0] != 1 && (d[0] > 2 || d[1] > 3) && r - d.length <= 2)) {
                l.push('30');
                l.push('00');
            }
            if ((c ? d[0] > 1 || d[1] > 2 : d[0] != 1 && (d[0] > 2 || d[1] > 3)) && d[0]) {
                d.unshift(0);
                n = r - 1;
            }
            if (d.length == r) {
                for (a = 0; a <= 9; ++a) {
                    l.push(a);
                }
            } else if (d.length == 1 && c && d[0] == 1 || d.length && d.length % 2 === 0 || !c && d[0] == 2 && d[1] > 3 && d.length % 2 == 1) {
                for (a = 6; a <= 9; ++a) {
                    l.push(a);
                }
            }
            u = d[1] !== undefined ? '' + d[0] + d[1] : '';
            v = +g == +(d[3] !== undefined ? '' + d[2] + d[3] : '');
            if (b.invalid) {
                for (a = 0; a < b.invalid.length; ++a) {
                    w = b.invalid[a].getHours();
                    p = b.invalid[a].getMinutes();
                    q = b.invalid[a].getSeconds();
                    if (w == +u) {
                        if (j.length == 2 && (p < 10 ? 0 : +('' + p)[0]) == +d[2]) {
                            l.push(p < 10 ? p : +('' + p)[1]);
                            break;
                        } else if ((q < 10 ? 0 : +('' + q)[0]) == +d[4]) {
                            l.push(q < 10 ? q : +('' + q)[1]);
                            break;
                        }
                    }
                }
            }
            if (b.min || b.max) {
                o = +e == +u;
                m = +f == +u;
                t = m && v;
                s = o && v;
                if (d.length === 0) {
                    for (a = c ? 2 : e > 19 ? e[0] : 3; a <= (e[0] == 1 ? 9 : e[0] - 1); ++a) {
                        l.push(a);
                    }
                    if (e >= 10) {
                        l.push(0);
                        if (e[0] == 2) {
                            for (a = 3; a <= 9; ++a) {
                                l.push(a);
                            }
                        }
                    }
                    if (f && f < 10 || e && e >= 10) {
                        for (a = f && f < 10 ? +f[0] + 1 : 0; a < (e && e >= 10 ? e[0] : 10); ++a) {
                            l.push(a);
                        }
                    }
                }
                if (d.length == 1) {
                    if (d[0] === 0) {
                        for (a = 0; a < e[0]; ++a) {
                            l.push(a);
                        }
                    }
                    if (e && (d[0] !== 0 && (c ? d[0] == 1 : d[0] == 2))) {
                        for (a = c ? 3 : 4; a <= 9; ++a) {
                            l.push(a);
                        }
                    }
                    if (d[0] == e[0]) {
                        for (a = 0; a < e[1]; ++a) {
                            l.push(a);
                        }
                    }
                    if (d[0] == f[0] && !c) {
                        for (a = +f[1] + 1; a <= 9; ++a) {
                            l.push(a);
                        }
                    }
                }
                if (d.length == 2 && (o || m)) {
                    for (a = m ? +g[0] + 1 : 0; a < (o ? +k[0] : 10); ++a) {
                        l.push(a);
                    }
                }
                if (d.length == 3 && (m && d[2] == g[0] || o && d[2] == k[0])) {
                    for (a = m && d[2] == g[0] ? +g[1] + 1 : 0; a < (o && d[2] == k[0] ? +k[1] : 10); ++a) {
                        l.push(a);
                    }
                }
                if (d.length == 4 && (s || t)) {
                    for (a = t ? +h[0] + 1 : 0; a < (s ? +i[0] : 10); ++a) {
                        l.push(a);
                    }
                }
                if (d.length == 5 && (s && d[4] == i[0] || t && d[4] == h[0])) {
                    for (a = t && d[4] == h[0] ? +h[1] + 1 : 0; a < (s && d[4] == i[0] ? +i[1] : 10); ++a) {
                        l.push(a);
                    }
                }
            }
            return l;
        }
        return {
            placeholder: '-',
            allowLeadingZero: true,
            template: (j.length == 3 ? 'dd:dd:dd' : j.length == 2 ? 'dd:dd' : 'dd') + (c ? '<span class="mbsc-np-sup">{ampm:--}</span>' : ''),
            leftKey: c ? {
                text: m,
                variable: 'ampm:' + m,
                value: '00'
            } : {
                text: ':00',
                value: '00'
            },
            rightKey: c ? {
                text: l,
                variable: 'ampm:' + l,
                value: '00'
            } : {
                text: ':30',
                value: '30'
            },
            parseValue: function(g) {
                var d, e, a = g || b.defaultValue,
                    f = [];
                if (a) {
                    a = a + '';
                    e = a.match(/\d/g);
                    if (e) {
                        for (d = 0; d < e.length; d++) {
                            f.push(+e[d]);
                        }
                    }
                    if (c) {
                        f.push('ampm:' + (a.match(new RegExp(b.pmText, 'gi')) ? l : m));
                    }
                }
                return f;
            },
            formatValue: function(a, b) {
                return q(a, b);
            },
            validate: function(f) {
                var a = f.values,
                    g = f.variables,
                    e = q(a, g),
                    d = a.length >= 3 ? new Date(2014, 7, 20, '' + a[0] + (a.length % 2 === 0 ? a[1] : ''), '' + a[a.length % 2 === 0 ? 2 : 1] + a[a.length % 2 === 0 ? 3 : 2]) : '';
                return {
                    disabled: r(a),
                    length: n,
                    invalid: (c ? !new RegExp('^(0?[1-9]|1[012])(:[0-5]\\d)?(:[0-5][0-9])' + ' (?:' + b.amText + '|' + b.pmText + ')$', 'i').test(e) : !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(e)) || (b.invalid ? o._indexOf(b.invalid, d) != -1 : false) || !((b.min ? b.min <= d : true) && (b.max ? d <= b.max : true))
                };
            }
        };
    };
}());
(function() {
    var a = mobiscroll,
        b = a.$,
        c = a.presets.numpad,
        d = {
            dateOrder: 'mdy',
            dateFormat: 'mm/dd/yy',
            delimiter: '/'
        };
    c.date = function(q) {
        var e, f, h, p, k = [],
            s = b.extend({}, q.settings),
            c = b.extend(q.settings, a.util.datetime.defaults, d, s),
            g = c.dateOrder,
            l = c.min ? '' + (c.getMonth(c.min) + 1) : 0,
            m = c.max ? '' + (c.getMonth(c.max) + 1) : 0,
            n = c.min ? '' + c.getDay(c.min) : 0,
            o = c.max ? '' + c.getDay(c.max) : 0,
            j = c.min ? '' + c.getYear(c.min) : 0,
            i = c.max ? '' + c.getYear(c.max) : 0;
        g = g.replace(/y+/gi, 'yyyy');
        g = g.replace(/m+/gi, 'mm');
        g = g.replace(/d+/gi, 'dd');
        e = g.toUpperCase().indexOf('Y');
        f = g.toUpperCase().indexOf('M');
        h = g.toUpperCase().indexOf('D');
        g = '';
        k.push({
            val: e,
            n: 'yyyy'
        }, {
            val: f,
            n: 'mm'
        }, {
            val: h,
            n: 'dd'
        });
        k.sort(function(a, b) {
            return a.val - b.val;
        });
        b.each(k, function(b, a) {
            g += a.n;
        });
        e = g.indexOf('y');
        f = g.indexOf('m');
        h = g.indexOf('d');
        g = '';
        for (p = 0; p < 8; ++p) {
            g += 'd';
            if (p + 1 == e || p + 1 == f || p + 1 == h) {
                g += c.delimiter;
            }
        }

        function t(a) {
            return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0;
        }

        function u(b) {
            var a, g, v, q, r, d = [],
                k = b[e + 3] !== undefined ? '' + b[e] + b[e + 1] + b[e + 2] + b[e + 3] : '',
                p = b[f + 1] !== undefined ? '' + b[f] + b[f + 1] : '',
                s = b[h + 1] !== undefined ? '' + b[h] + b[h + 1] : '',
                x = '' + c.getMaxDayOfMonth(k || 2012, p - 1 || 0),
                w = j === k && +l === +p,
                u = i === k && +m === +p;
            if (c.invalid) {
                for (a = 0; a < c.invalid.length; ++a) {
                    v = c.getYear(c.invalid[a]);
                    q = c.getMonth(c.invalid[a]);
                    r = c.getDay(c.invalid[a]);
                    if (v == +k && q + 1 == +p) {
                        if ((r < 10 ? 0 : +('' + r)[0]) == +b[h]) {
                            d.push(r < 10 ? r : +('' + r)[1]);
                            break;
                        }
                    }
                    if (q + 1 == +p && r == +s) {
                        if (('' + v).substring(0, 3) == '' + b[e] + b[e + 1] + b[e + 2]) {
                            d.push(('' + v)[3]);
                            break;
                        }
                    }
                    if (v == +k && r == +s) {
                        if ((q < 10 ? 0 : +('' + (q + 1))[0]) == +b[f]) {
                            d.push(q < 10 ? q : +('' + (q + 1))[1]);
                            break;
                        }
                    }
                }
            }
            if (s == '31' && (b.length == f || b.length == f + 1)) {
                if (b[f] != 1) {
                    d.push(2, 4, 6, 9, 11);
                } else {
                    d.push(1);
                }
            }
            if (s == '30' && b[f] === 0 && b.length <= f + 1) {
                d.push(2);
            }
            if (b.length == f) {
                for (a = i === k && +m < 10 ? 1 : 2; a <= 9; ++a) {
                    d.push(a);
                }
                if (j === k && +l >= 10) {
                    d.push(0);
                }
            }
            if (b.length == f + 1) {
                if (b[f] == 1) {
                    for (a = i === k ? +m[1] + 1 : 3; a <= 9; ++a) {
                        d.push(a);
                    }
                    if (j == k) {
                        for (a = 0; a < +l[1]; ++a) {
                            d.push(a);
                        }
                    }
                }
                if (b[f] === 0) {
                    d.push(0);
                    if (i === k || j === k) {
                        for (a = i === k ? +s > +o ? +m : +m + 1 : 0; a <= (j === k ? +s < +n ? +l - 1 : +l - 1 : 9); ++a) {
                            d.push(a);
                        }
                    }
                }
            }
            if (b.length == h) {
                for (a = u ? (+o > 10 ? +o[0] : 0) + 1 : +x[0] + 1; a <= 9; ++a) {
                    d.push(a);
                }
                if (w) {
                    for (a = 0; a < (+n < 10 ? 0 : n[0]); ++a) {
                        d.push(a);
                    }
                }
            }
            if (b.length == h + 1) {
                if (b[h] >= 3 || p == '02') {
                    for (a = +x[1] + 1; a <= 9; ++a) {
                        d.push(a);
                    }
                }
                if (u && +o[0] == b[h]) {
                    for (a = +o[1] + 1; a <= 9; ++a) {
                        d.push(a);
                    }
                }
                if (w && n[0] == b[h]) {
                    for (a = 0; a < +n[1]; ++a) {
                        d.push(a);
                    }
                }
                if (b[h] === 0) {
                    d.push(0);
                    if (u || w) {
                        for (a = u ? +o + 1 : 1; a <= (w ? +n - 1 : 9); ++a) {
                            d.push(a);
                        }
                    }
                }
            }
            if (b[e + 2] !== undefined && p == '02' && s == '29') {
                for (g = +('' + b[e] + b[e + 1] + b[e + 2] + 0); g <= +('' + b[e] + b[e + 1] + b[e + 2] + 9); ++g) {
                    d.push(!t(g) ? g % 10 : '');
                }
            }
            if (b.length == e) {
                if (c.min) {
                    for (a = 0; a < +j[0]; ++a) {
                        d.push(a);
                    }
                }
                if (c.max) {
                    for (a = +i[0] + 1; a <= 9; ++a) {
                        d.push(a);
                    }
                }
                d.push(0);
            }
            if (c.min || c.max) {
                for (g = 1; g < 4; ++g) {
                    if (b.length == e + g) {
                        if (b[e + g - 1] == +j[g - 1] && (g == 3 ? b[e + g - 2] == +j[g - 2] : true)) {
                            for (a = 0; a < +j[g] + (g == 3 && b[f + 1] && +l > +p ? 1 : 0); ++a) {
                                d.push(a);
                            }
                        }
                        if (b[e + g - 1] == +i[g - 1] && (g == 3 ? b[e + g - 2] == +i[g - 2] : true)) {
                            for (a = +i[g] + (g == 3 && +m < +p ? 0 : 1); a <= 9; ++a) {
                                d.push(a);
                            }
                        }
                    }
                }
            }
            return d;
        }

        function r(a) {
            return new Date(+('' + a[e] + a[e + 1] + a[e + 2] + a[e + 3]), +('' + a[f] + a[f + 1]) - 1, +('' + a[h] + a[h + 1]));
        }
        q.getVal = function(a) {
            return q._hasValue || a ? r(q.getArrayVal(a)) : null;
        };
        return {
            placeholder: '-',
            fill: 'ltr',
            allowLeadingZero: true,
            template: g,
            parseValue: function(g) {
                var e, b = [],
                    f = g || c.defaultValue,
                    d = a.util.datetime.parseDate(c.dateFormat, f, c);
                if (f) {
                    for (e = 0; e < k.length; ++e) {
                        if (/m/i.test(k[e].n)) {
                            b = b.concat(((c.getMonth(d) < 9 ? '0' : '') + (c.getMonth(d) + 1)).split(''));
                        } else if (/d/i.test(k[e].n)) {
                            b = b.concat(((c.getDay(d) < 10 ? '0' : '') + c.getDay(d)).split(''));
                        } else {
                            b = b.concat((c.getYear(d) + '').split(''));
                        }
                    }
                }
                return b;
            },
            formatValue: function(b) {
                return a.util.datetime.formatDate(c.dateFormat, r(b), c);
            },
            validate: function(d) {
                var b = d.values,
                    a = r(b);
                return {
                    disabled: u(b),
                    invalid: !(a != 'Invalid Date' && (c.min ? c.min <= a : true) && (c.max ? a <= c.max : true)) || (c.invalid ? q._indexOf(c.invalid, a) != -1 : false)
                };
            }
        };
    };
}());
(function(i, e, b) {
        var c = k = mobiscroll,
            a = c.$,
            f = c.presets.scroller,
            d = c.util,
            o = d.datetime.adjustedDate,
            E = d.jsPrefix,
            s = d.testTouch,
            m = d.getCoord,
            j = {
                controls: ["calendar"],
                firstDay: 0,
                weekDays: "short",
                maxMonthWidth: 170,
                months: 1,
                preMonths: 1,
                highlight: !0,
                outerMonthChange: !0,
                quickNav: !0,
                yearChange: !0,
                todayClass: "mbsc-cal-today",
                btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left6",
                btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right6",
                dateText: "Date",
                timeText: "Time",
                calendarText: "Calendar",
                todayText: "Today",
                prevMonthText: "Previous Month",
                nextMonthText: "Next Month",
                prevYearText: "Previous Year",
                nextYearText: "Next Year"
            };
        f.calbase = function(g) {
            function i(b) {
                var c;
                $a = a(this);
                Eb = !1;
                "keydown" != b.type ? (kb = m(b, "X"), Ob = m(b, "Y"), c = s(b, this)) : c = 32 === b.keyCode;
                if (!Ya && c && !$a.hasClass("mbsc-fr-btn-d") && (Ya = !0, setTimeout(t,
                        100), "mousedown" == b.type)) a(e).on("mousemove", A).on("mouseup", u)
            }

            function A(a) {
                if (7 < Math.abs(kb - m(a, "X")) || 7 < Math.abs(Ob - m(a, "Y"))) Ya = !1, $a.removeClass("mbsc-fr-btn-a")
            }

            function u(b) {
                "touchend" == b.type && b.preventDefault();
                $a && !Eb && t();
                Ya = !1;
                "mouseup" == b.type && a(e).off("mousemove", A).off("mouseup", u)
            }

            function t() {
                Eb = !0;
                $a.hasClass("mbsc-cal-prev-m") ? M() : $a.hasClass("mbsc-cal-next-m") ? x() : $a.hasClass("mbsc-cal-prev-y") ? U($a) : $a.hasClass("mbsc-cal-next-y") && ga($a)
            }

            function v(b, c, d) {
                var g, f, e, i, h = {},
                    j = ta + nb;
                b && a.each(b, function(a, b) {
                    g = b.d || b.start || b;
                    f = g + "";
                    if (b.start && b.end)
                        for (i = new Date(b.start); i <= b.end;) e = o(i.getFullYear(), i.getMonth(), i.getDate()), h[e] = h[e] || [], h[e].push(b), i.setDate(i.getDate() + 1);
                    else if (g.getTime) e = o(g.getFullYear(), g.getMonth(), g.getDate()), h[e] = h[e] || [], h[e].push(b);
                    else if (f.match(/w/i)) {
                        var n = +f.replace("w", ""),
                            q = 0,
                            m = y.getDate(c, d - ta - sa, 1).getDay();
                        1 < y.firstDay - m + 1 && (q = 7);
                        for (Z = 0; Z < 5 * Na; Z++) e = y.getDate(c, d - ta - sa, 7 * Z - q - m + 1 + n), h[e] = h[e] || [], h[e].push(b)
                    } else if (f =
                        f.split("/"), f[1]) 11 <= d + j && (e = y.getDate(c + 1, f[0] - 1, f[1]), h[e] = h[e] || [], h[e].push(b)), 1 >= d - j && (e = y.getDate(c - 1, f[0] - 1, f[1]), h[e] = h[e] || [], h[e].push(b)), e = y.getDate(c, f[0] - 1, f[1]), h[e] = h[e] || [], h[e].push(b);
                    else
                        for (Z = 0; Z < Na; Z++) e = y.getDate(c, d - ta - sa + Z, f[0]), y.getDay(e) == f[0] && (h[e] = h[e] || [], h[e].push(b))
                });
                return h
            }

            function h(a, b) {
                La = v(y.invalid, a, b);
                Mb = v(y.valid, a, b);
                g.onGenMonth(a, b)
            }

            function D(a, b, c, d, g, f, e) {
                var h = '<div class="mbsc-cal-h mbsc-cal-sc-c mbsc-cal-' + a + "-c " + (y.calendarClass || "") + '"><div class="mbsc-cal-sc"><div class="mbsc-cal-sc-p"><div class="mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-row">';
                for (B = 1; B <= b; B++) h = 12 >= B || B > c ? h + '<div class="mbsc-cal-sc-m-cell mbsc-cal-sc-cell mbsc-cal-sc-empty"><div class="mbsc-cal-sc-cell-i">&nbsp;</div></div>' : h + ('<div tabindex="0" role="button"' + (f ? ' aria-label="' + f[B - 13] + '"' : "") + ' class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-cal-sc-m-cell mbsc-cal-sc-cell mbsc-cal-' + a + '-s" data-val=' + (d + B - 13) + '><div class="mbsc-cal-sc-cell-i mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-cell">' + (e ? e[B - 13] : d + B - 13 + g) + "</div></div></div>"), B < b && (0 === B % 12 ? h += '</div></div></div><div class="mbsc-cal-sc-p" style="' +
                    (Ma ? "top" : za ? "right" : "left") + ":" + 100 * Math.round(B / 12) + '%"><div class="mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-row">' : 0 === B % 3 && (h += '</div><div class="mbsc-cal-sc-row">'));
                return h + "</div></div></div></div></div>"
            }

            function p(c, d) {
                var f, e, h, i, j, n, q, m, s, r, l, p, C, L, k = 1,
                    B = 0;
                f = y.getDate(c, d, 1);
                var V = y.getYear(f),
                    F = y.getMonth(f),
                    w = null === y.defaultValue && !g._hasValue ? null : g.getDate(!0),
                    u = y.getDate(V, F, 1).getDay(),
                    t = '<div class="mbsc-cal-table">',
                    z = '<div class="mbsc-cal-week-nr-c">';
                1 < y.firstDay - u + 1 && (B = 7);
                for (L = 0; 42 > L; L++) C = L + y.firstDay - B, f = y.getDate(V, F, C - u + 1), e = f.getFullYear(), h = f.getMonth(), i = f.getDate(), j = y.getMonth(f), n = y.getDay(f), p = y.getMaxDayOfMonth(e, h), q = e + "-" + h + "-" + i, h = a.extend({
                    valid: f < o(ib.getFullYear(), ib.getMonth(), ib.getDate()) || f > ob ? !1 : La[f] === b || Mb[f] !== b,
                    selected: w && w.getFullYear() === e && w.getMonth() === h && w.getDate() === i
                }, g.getDayProps(f, w)), m = h.valid, s = h.selected, e = h.cssClass, r = (new Date(f)).setHours(12, 0, 0, 0) === (new Date).setHours(12, 0, 0, 0), l = j !== F, Rb[q] = h, 0 === L % 7 && (t += (L ? "</div>" :
                    "") + '<div class="mbsc-cal-row' + (y.highlight && w && 0 <= w - f && 6048E5 > w - f ? " mbsc-cal-week-hl" : "") + '">'), Ja && 1 == f.getDay() && ("month" == Ja && l && 1 < k ? k = 1 == i ? 1 : 2 : "year" == Ja && (k = y.getWeekNumber(f)), z += '<div class="mbsc-cal-week-nr"><div class="mbsc-cal-week-nr-i">' + k + "</div></div>", k++), t += '<div role="button" tabindex="-1" aria-label="' + (r ? y.todayText + ", " : "") + y.dayNames[f.getDay()] + ", " + y.monthNames[j] + " " + n + " " + (h.ariaLabel ? ", " + h.ariaLabel : "") + '"' + (l && !xb ? ' aria-hidden="true"' : "") + (s ? ' aria-selected="true"' :
                    "") + (m ? "" : ' aria-disabled="true"') + ' data-day="' + C % 7 + '" data-full="' + q + '"class="mbsc-cal-day ' + (y.dayClass || "") + (s ? " mbsc-cal-day-sel" : "") + (r ? " " + y.todayClass : "") + (e ? " " + e : "") + (1 == n ? " mbsc-cal-day-first" : "") + (n == p ? " mbsc-cal-day-last" : "") + (l ? " mbsc-cal-day-diff" : "") + (m ? " mbsc-cal-day-v mbsc-fr-btn-e mbsc-fr-btn-nhl" : " mbsc-cal-day-inv") + '"><div class="mbsc-cal-day-i ' + (s ? db : "") + " " + (y.innerDayClass || "") + '"><div class="mbsc-cal-day-fg">' + n + "</div>" + (h.markup || "") + '<div class="mbsc-cal-day-frame"></div></div></div>';
                return t + ("</div></div>" + z + "</div>")
            }

            function l(b, c, d) {
                var f = y.getDate(b, c, 1),
                    g = y.getYear(f),
                    f = y.getMonth(f),
                    e = g + pb;
                if (cb) {
                    hb && hb.removeClass("mbsc-cal-sc-sel").removeAttr("aria-selected").find(".mbsc-cal-sc-cell-i").removeClass(db);
                    Ua && Ua.removeClass("mbsc-cal-sc-sel").removeAttr("aria-selected").find(".mbsc-cal-sc-cell-i").removeClass(db);
                    hb = a('.mbsc-cal-year-s[data-val="' + g + '"]', O).addClass("mbsc-cal-sc-sel").attr("aria-selected", "true");
                    Ua = a('.mbsc-cal-month-s[data-val="' + f + '"]', O).addClass("mbsc-cal-sc-sel").attr("aria-selected",
                        "true");
                    hb.find(".mbsc-cal-sc-cell-i").addClass(db);
                    Ua.find(".mbsc-cal-sc-cell-i").addClass(db);
                    bb && bb.scroll(hb, d);
                    a(".mbsc-cal-month-s", O).removeClass("mbsc-fr-btn-d");
                    if (g === ha)
                        for (B = 0; B < Aa; B++) a('.mbsc-cal-month-s[data-val="' + B + '"]', O).addClass("mbsc-fr-btn-d");
                    if (g === Va)
                        for (B = Ra + 1; 12 >= B; B++) a('.mbsc-cal-month-s[data-val="' + B + '"]', O).addClass("mbsc-fr-btn-d")
                }
                1 == ma.length && ma.attr("aria-label", g).html(e);
                for (B = 0; B < ja; ++B) f = y.getDate(b, c - sa + B, 1), g = y.getYear(f), f = y.getMonth(f), e = g + pb, a(na[B]).attr("aria-label",
                    y.monthNames[f] + (Ga ? "" : " " + g)).html((!Ga && Qa < F ? e + " " : "") + K[f] + (!Ga && Qa > F ? " " + e : "")), 1 < ma.length && a(ma[B]).html(e);
                y.getDate(b, c - sa - 1, 1) < Sa ? G(a(".mbsc-cal-prev-m", O)) : Q(a(".mbsc-cal-prev-m", O));
                y.getDate(b, c + ja - sa, 1) > wa ? G(a(".mbsc-cal-next-m", O)) : Q(a(".mbsc-cal-next-m", O));
                y.getDate(b, c, 1).getFullYear() <= Sa.getFullYear() ? G(a(".mbsc-cal-prev-y", O)) : Q(a(".mbsc-cal-prev-y", O));
                y.getDate(b, c, 1).getFullYear() >= wa.getFullYear() ? G(a(".mbsc-cal-next-y", O)) : Q(a(".mbsc-cal-next-y", O))
            }

            function Q(a) {
                a.removeClass(ab).find(".mbsc-cal-btn-txt").removeAttr("aria-disabled")
            }

            function G(a) {
                a.addClass(ab).find(".mbsc-cal-btn-txt").attr("aria-disabled", "true")
            }

            function J(b, c) {
                if (ia && ("calendar" === Ca || c)) {
                    var d, f, e = y.getDate(oa, ra, 1),
                        h = Math.abs(12 * (y.getYear(b) - y.getYear(e)) + y.getMonth(b) - y.getMonth(e));
                    g.needsSlide && h && (oa = y.getYear(b), ra = y.getMonth(b), b > e ? (f = h > ta - sa + ja - 1, ra -= f ? 0 : h - ta, d = "next") : b < e && (f = h > ta + sa, ra += f ? 0 : h - ta, d = "prev"), q(oa, ra, d, Math.min(h, ta), f, !0));
                    c || (jb = b, g.trigger("onDayHighlight", {
                        date: b
                    }), y.highlight && (a(".mbsc-cal-day-sel .mbsc-cal-day-i", pa).removeClass(db),
                        a(".mbsc-cal-day-sel", pa).removeClass("mbsc-cal-day-sel").removeAttr("aria-selected"), a(".mbsc-cal-week-hl", pa).removeClass("mbsc-cal-week-hl"), (null !== y.defaultValue || g._hasValue) && a('.mbsc-cal-day[data-full="' + b.getFullYear() + "-" + b.getMonth() + "-" + b.getDate() + '"]', pa).addClass("mbsc-cal-day-sel").attr("aria-selected", "true").find(".mbsc-cal-day-i").addClass(db).closest(".mbsc-cal-row").addClass("mbsc-cal-week-hl")));
                    g.needsSlide = !0
                }
            }

            function C(a, c, d) {
                d || g.trigger("onMonthLoading", {
                    year: a,
                    month: c
                });
                h(a, c);
                for (B = 0; B < Na; B++) va[B].html(p(a, c - sa - ta + B));
                w();
                tb = b;
                g.trigger("onMonthLoaded", {
                    year: a,
                    month: c
                })
            }

            function n(b, c, d) {
                var f = ta,
                    g = ta;
                if (d) {
                    for (; g && y.getDate(b, c + f + ja - sa - 1, 1) > wa;) g--;
                    for (; f && y.getDate(b, c - g - sa, 1) < Sa;) f--
                }
                a.extend(ka.settings, {
                    contSize: ja * Y,
                    snap: Y,
                    minScroll: S - (za ? f : g) * Y,
                    maxScroll: S + (za ? g : f) * Y
                });
                ka.refresh()
            }

            function w() {
                Ja && Ia.html(a(".mbsc-cal-week-nr-c", va[ta]).html());
                a(".mbsc-cal-slide-a .mbsc-cal-day", qa).attr("tabindex", 0)
            }

            function q(c, d, f, e, i, j, o) {
                c && sb.push({
                    y: c,
                    m: d,
                    dir: f,
                    slideNr: e,
                    load: i,
                    active: j,
                    callback: o
                });
                if (!Pa) {
                    var m = sb.shift(),
                        c = m.y,
                        d = m.m,
                        f = "next" === m.dir,
                        e = m.slideNr,
                        i = m.load,
                        j = m.active,
                        o = m.callback || Jb,
                        m = y.getDate(c, d, 1),
                        c = y.getYear(m),
                        d = y.getMonth(m);
                    Pa = !0;
                    g.changing = !0;
                    g.trigger("onMonthChange", {
                        year: c,
                        month: d
                    });
                    g.trigger("onMonthLoading", {
                        year: c,
                        month: d
                    });
                    h(c, d);
                    if (i)
                        for (B = 0; B < ja; B++) va[f ? Na - ja + B : B].html(p(c, d - sa + B));
                    j && zb.addClass("mbsc-cal-slide-a");
                    setTimeout(function() {
                        g.ariaMessage(y.monthNames[d] + " " + c);
                        l(c, d, 200);
                        S = f ? S - Y * e * ua : S + Y * e * ua;
                        ka.scroll(S,
                            j ? 200 : 0, !1,
                            function() {
                                var h;
                                if (va.length) {
                                    zb.removeClass("mbsc-cal-slide-a").attr("aria-hidden", "true");
                                    if (f) {
                                        h = va.splice(0, e);
                                        for (B = 0; B < e; B++) {
                                            va.push(h[B]);
                                            z(va[va.length - 1], +va[va.length - 2].attr("data-curr") + 100 * ua)
                                        }
                                    } else {
                                        h = va.splice(Na - e, e);
                                        for (B = e - 1; B >= 0; B--) {
                                            va.unshift(h[B]);
                                            z(va[0], +va[1].attr("data-curr") - 100 * ua)
                                        }
                                    }
                                    for (B = 0; B < e; B++) {
                                        va[f ? Na - e + B : B].html(p(c, d - sa - ta + B + (f ? Na - e : 0)));
                                        i && va[f ? B : Na - e + B].html(p(c, d - sa - ta + B + (f ? 0 : Na - e)))
                                    }
                                    for (B = 0; B < ja; B++) va[ta + B].addClass("mbsc-cal-slide-a").removeAttr("aria-hidden");
                                    n(c, d, true);
                                    Pa = false
                                }
                                if (sb.length) setTimeout(function() {
                                    q()
                                }, 10);
                                else {
                                    oa = c;
                                    ra = d;
                                    g.changing = false;
                                    a(".mbsc-cal-day", qa).attr("tabindex", -1);
                                    w();
                                    tb !== b ? C(c, d, tb) : g.trigger("onMonthLoaded", {
                                        year: c,
                                        month: d
                                    });
                                    o()
                                }
                            })
                    }, 10)
                }
            }

            function N() {
                var b = a(this),
                    c = g.live,
                    d = g.getDate(!0),
                    f = b.attr("data-full"),
                    e = f.split("-"),
                    e = o(e[0], e[1], e[2]),
                    d = o(e.getFullYear(), e.getMonth(), e.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()),
                    h = b.hasClass("mbsc-cal-day-sel");
                if ((xb || !b.hasClass("mbsc-cal-day-diff")) && !1 !== g.trigger("onDayChange",
                        a.extend(Rb[f], {
                            date: d,
                            target: this,
                            selected: h
                        }))) g.needsSlide = !1, I = !0, g.setDate(d, c, 0.2, !c, !0), y.outerMonthChange && (Ya = !0, e < y.getDate(oa, ra - sa, 1) ? M() : e > y.getDate(oa, ra - sa + ja, 0) && x(), Ya = !1), g.live && g.trigger("onSet", {
                    valueText: g._value
                })
            }

            function z(a, b) {
                a.attr("data-curr", b);
                a[0].style[E + "Transform"] = "translate3d(" + (Ma ? "0," + b + "%," : b + "%,0,") + "0)"
            }

            function H(a) {
                g.isVisible() && ia && (g.changing ? tb = a : C(oa, ra, a))
            }

            function x() {
                Ya && y.getDate(oa, ra + ja - sa, 1) <= wa && k.running && q(oa, ++ra, "next", 1, !1, !0, x)
            }

            function M() {
                Ya &&
                    y.getDate(oa, ra - sa - 1, 1) >= Sa && k.running && q(oa, --ra, "prev", 1, !1, !0, M)
            }

            function ga(a) {
                Ya && y.getDate(oa, ra, 1) <= y.getDate(y.getYear(wa) - 1, y.getMonth(wa) - nb, 1) && k.running ? q(++oa, ra, "next", ta, !0, !0, function() {
                    ga(a)
                }) : Ya && !a.hasClass("mbsc-fr-btn-d") && k.running && q(y.getYear(wa), y.getMonth(wa) - nb, "next", ta, !0, !0)
            }

            function U(a) {
                Ya && y.getDate(oa, ra, 1) >= y.getDate(y.getYear(Sa) + 1, y.getMonth(Sa) + sa, 1) && k.running ? q(--oa, ra, "prev", ta, !0, !0, function() {
                    U(a)
                }) : Ya && !a.hasClass("mbsc-fr-btn-d") && k.running && q(y.getYear(Sa),
                    y.getMonth(Sa) + sa, "prev", ta, !0, !0)
            }

            function T(a, b) {
                a.hasClass("mbsc-cal-v") || (a.addClass("mbsc-cal-v" + (b ? "" : " mbsc-cal-p-in")).removeClass("mbsc-cal-p-out mbsc-cal-h"), g.trigger("onSelectShow"))
            }

            function L(a, b) {
                a.hasClass("mbsc-cal-v") && a.removeClass("mbsc-cal-v mbsc-cal-p-in").addClass("mbsc-cal-h" + (b ? "" : " mbsc-cal-p-out"))
            }

            function X(a, b) {
                (b || a).hasClass("mbsc-cal-v") ? L(a) : T(a)
            }

            function aa() {
                a(this).removeClass("mbsc-cal-p-out mbsc-cal-p-in")
            }
            var V, B, Z, la, ea, O, da, pa, qa, Y, S, I, ia, R, xa, Ia, P, fa, K, ka,
                W, na, F, ma, Qa, ha, Va, Aa, Ra, Sa, wa, ib, ob, jb, oa, ra, Ab, mb, Mb, La, Wa, Ca, Pa, kb, Ob, $a, Eb, Ya, ja, Na, nb, sa, tb, xb, bb, hb, Ua, Pb = this,
                zb = [],
                va = [],
                sb = [],
                Da = {},
                Rb = {},
                Jb = function() {},
                Qb = a.extend({}, g.settings),
                y = a.extend(g.settings, j, Qb),
                yb = "full" == y.weekDays ? "" : "min" == y.weekDays ? "Min" : "Short",
                Ja = y.weekCounter,
                Ha = y.layout || (/top|bottom/.test(y.display) ? "liquid" : ""),
                Ta = "liquid" == Ha && "bubble" !== y.display,
                ba = "center" == y.display,
                za = y.rtl,
                ua = za ? -1 : 1,
                Db = Ta ? null : y.calendarWidth,
                Ma = "vertical" == y.calendarScroll,
                cb = y.quickNav,
                ta = y.preMonths,
                Ga = y.yearChange,
                eb = y.controls.join(","),
                fb = (!0 === y.tabs || !1 !== y.tabs && Ta) && 1 < y.controls.length,
                ub = !fb && y.tabs === b && !Ta && 1 < y.controls.length,
                pb = y.yearSuffix || "",
                db = y.activeClass || "",
                Cb = "mbsc-cal-tab-sel " + (y.activeTabClass || ""),
                vb = y.activeTabInnerClass || "",
                ab = "mbsc-fr-btn-d " + (y.disabledClass || ""),
                ya = "",
                Fa = "";
            eb.match(/calendar/) ? ia = !0 : cb = !1;
            eb.match(/date/) && (Da.date = 1);
            eb.match(/time/) && (Da.time = 1);
            ia && Da.date && (fb = !0, ub = !1);
            y.layout = Ha;
            y.preset = (Da.date || ia ? "date" : "") + (Da.time ? "time" :
                "");
            if ("inline" == y.display) a(this).closest('[data-role="page"]').on("pageshow", function() {
                g.position()
            });
            g.changing = !1;
            g.needsSlide = !0;
            g.getDayProps = Jb;
            g.onGenMonth = Jb;
            g.prepareObj = v;
            g.refresh = function() {
                H(false)
            };
            g.redraw = function() {
                H(true)
            };
            g.navigate = function(a, b) {
                var c, d, f = g.isVisible();
                if (b && f) J(a, true);
                else {
                    c = y.getYear(a);
                    d = y.getMonth(a);
                    if (f && (c != oa || d != ra)) {
                        g.trigger("onMonthChange", {
                            year: c,
                            month: d
                        });
                        l(c, d);
                        C(c, d);
                        n(a.getFullYear(), a.getMonth(), true)
                    }
                    oa = c;
                    ra = d
                }
            };
            g.showMonthView = function() {
                if (cb &&
                    !fa) {
                    L(Fa, true);
                    L(ya, true);
                    T(P, true);
                    fa = true
                }
            };
            g.changeTab = function(b) {
                if (g._isVisible && Da[b] && Ca != b) {
                    Ca = b;
                    a(".mbsc-cal-pnl", O).removeClass("mbsc-cal-p-in").addClass("mbsc-cal-pnl-h");
                    a(".mbsc-cal-tab", O).removeClass(Cb).removeAttr("aria-selected").find(".mbsc-cal-tab-i").removeClass(vb);
                    a('.mbsc-cal-tab[data-control="' + b + '"]', O).addClass(Cb).attr("aria-selected", "true").find(".mbsc-cal-tab-i").addClass(vb);
                    Da[Ca].removeClass("mbsc-cal-pnl-h").addClass("mbsc-cal-p-in");
                    if (Ca == "calendar") {
                        V = g.getDate(true);
                        (V.getFullYear() !== jb.getFullYear() || V.getMonth() !== jb.getMonth() || V.getDate() !== jb.getDate()) && J(V)
                    }
                    g.showMonthView();
                    g.trigger("onTabChange", {
                        tab: Ca
                    })
                }
            };
            la = f.datetime.call(this, g);
            F = y.dateFormat.search(/m/i);
            Qa = y.dateFormat.search(/y/i);
            a.extend(la, {
                ariaMessage: y.calendarText,
                onMarkupReady: function(f) {
                    var e, h = "";
                    O = a(f.target);
                    da = y.display == "inline" ? a(this).is("div") ? a(this) : a(this).parent() : g._window;
                    jb = g.getDate(true);
                    if (!oa) {
                        oa = y.getYear(jb);
                        ra = y.getMonth(jb)
                    }
                    S = 0;
                    xa = true;
                    Pa = false;
                    K = y.monthNames;
                    Ca = "calendar";
                    if (y.min) {
                        Sa = o(y.min.getFullYear(), y.min.getMonth(), 1);
                        ib = y.min
                    } else ib = Sa = o(y.startYear, 0, 1);
                    if (y.max) {
                        wa = o(y.max.getFullYear(), y.max.getMonth(), 1);
                        ob = y.max
                    } else ob = wa = o(y.endYear, 11, 31, 23, 59, 59);
                    O.addClass("mbsc-calendar");
                    ea = a(".mbsc-fr-popup", O);
                    Wa = a(".mbsc-fr-c", O);
                    Da.date ? Da.date = a(".mbsc-sc-whl-gr-c", O).eq(0) : ia && a(".mbsc-sc-whl-gr-c", O).eq(0).addClass("mbsc-cal-hdn");
                    if (Da.time) Da.time = a(".mbsc-sc-whl-gr-c", O).eq(1);
                    if (ia) {
                        ja = y.months == "auto" ? Math.max(1, Math.min(3, Math.floor((Db ||
                            da[0].innerWidth || da.innerWidth()) / 280))) : y.months;
                        Na = ja + 2 * ta;
                        nb = Math.floor(ja / 2);
                        sa = Math.round(ja / 2) - 1;
                        xb = y.showOuterDays === b ? ja < 2 : y.showOuterDays;
                        Ma = Ma && ja < 2;
                        f = '<div class="mbsc-cal-btnw"><div class="' + (za ? "mbsc-cal-next-m" : "mbsc-cal-prev-m") + ' mbsc-cal-prev mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (y.btnCalPrevClass || "") + '" aria-label="' + y.prevMonthText + '"></div></div>';
                        for (B = 0; B < ja; ++B) f = f + ('<div class="mbsc-cal-btnw-m" style="width: ' +
                            100 / ja + '%"><span role="button" class="mbsc-cal-month"></span></div>');
                        f = f + ('<div class="' + (za ? "mbsc-cal-prev-m" : "mbsc-cal-next-m") + ' mbsc-cal-next mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (y.btnCalNextClass || "") + '" aria-label="' + y.nextMonthText + '"></div></div></div>');
                        Ga && (h = '<div class="mbsc-cal-btnw"><div class="' + (za ? "mbsc-cal-next-y" : "mbsc-cal-prev-y") + ' mbsc-cal-prev mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' +
                            (y.btnCalPrevClass || "") + '" aria-label="' + y.prevYearText + '"></div></div><span role="button" class="mbsc-cal-year"></span><div class="' + (za ? "mbsc-cal-prev-y" : "mbsc-cal-next-y") + ' mbsc-cal-next mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (y.btnCalNextClass || "") + '" aria-label="' + y.nextYearText + '"></div></div></div>');
                        if (cb) {
                            ha = y.getYear(Sa);
                            Va = y.getYear(wa);
                            Aa = y.getMonth(Sa);
                            Ra = y.getMonth(wa);
                            mb = Math.ceil((Va - ha + 1) / 12) + 2;
                            ya = D("month", 36, 24, 0, "", y.monthNames,
                                y.monthNamesShort);
                            Fa = D("year", mb * 12, Va - ha + 13, ha, pb)
                        }
                        R = '<div class="mbsc-w-p mbsc-cal-c"><div class="mbsc-cal mbsc-cal-hl-now' + (ja > 1 ? " mbsc-cal-multi " : "") + (Ja ? " mbsc-cal-weeks " : "") + (Ma ? " mbsc-cal-vertical" : "") + (xb ? "" : " mbsc-cal-hide-diff ") + (y.calendarClass || "") + '"><div class="mbsc-cal-header"><div class="mbsc-cal-btnc ' + (Ga ? "mbsc-cal-btnc-ym" : "mbsc-cal-btnc-m") + '">' + (Qa < F || ja > 1 ? h + f : f + h) + '</div></div><div class="mbsc-cal-body"><div class="mbsc-cal-m-c mbsc-cal-v"><div class="mbsc-cal-days-c">';
                        for (Z = 0; Z < ja; ++Z) {
                            R = R + ('<div aria-hidden="true" class="mbsc-cal-days" style="width: ' + 100 / ja + '%"><table cellpadding="0" cellspacing="0"><tr>');
                            for (B = 0; B < 7; B++) R = R + ("<th>" + y["dayNames" + yb][(B + y.firstDay) % 7] + "</th>");
                            R = R + "</tr></table></div>"
                        }
                        R = R + ('</div><div class="mbsc-cal-week-nrs-c ' + (y.weekNrClass || "") + '"><div class="mbsc-cal-week-nrs"></div></div><div class="mbsc-cal-anim-c ' + (y.calendarClass || "") + '"><div class="mbsc-cal-anim">');
                        for (B = 0; B < ja + 2 * ta; B++) R = R + '<div class="mbsc-cal-slide" aria-hidden="true"></div>';
                        R = R + ("</div></div></div>" + ya + Fa + "</div></div></div>");
                        Da.calendar = a(R)
                    }
                    a.each(y.controls, function(b, c) {
                        Da[c] = a('<div class="mbsc-cal-pnl" id="' + (Pb.id + "_dw_pnl_" + b) + '"></div>').append(a('<div class="mbsc-cal-pnl-i"></div>').append(Da[c])).appendTo(Wa)
                    });
                    e = '<div class="mbsc-cal-tabs"><ul role="tablist">';
                    a.each(y.controls, function(a, b) {
                        Da[b] && (e = e + ('<li role="tab" aria-controls="' + (Pb.id + "_dw_pnl_" + a) + '" class="mbsc-cal-tab ' + (a ? "" : Cb) + '" data-control="' + b + '"><a href="#" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-cal-tab-i ' +
                            (!a ? vb : "") + '">' + y[b + "Text"] + "</a></li>"))
                    });
                    e = e + "</ul></div>";
                    Wa.before(e);
                    pa = a(".mbsc-cal-anim-c", O);
                    qa = a(".mbsc-cal-anim", pa);
                    Ia = a(".mbsc-cal-week-nrs", O);
                    if (ia) {
                        fa = true;
                        zb = a(".mbsc-cal-slide", qa).each(function(b, c) {
                            va.push(a(c))
                        });
                        zb.slice(ta, ta + ja).addClass("mbsc-cal-slide-a").removeAttr("aria-hidden");
                        for (B = 0; B < Na; B++) z(va[B], 100 * (B - ta) * ua);
                        C(oa, ra);
                        ka = new c.classes.ScrollView(pa[0], {
                            axis: Ma ? "Y" : "X",
                            easing: "",
                            contSize: 0,
                            snap: 1,
                            maxSnapScroll: ta,
                            moveElement: qa,
                            mousewheel: y.mousewheel,
                            time: 200,
                            lock: true,
                            stopProp: false,
                            onAnimationEnd: function(a) {
                                (a = Math.round(((Ma ? a.posY : a.posX) - S) / Y) * ua) && q(oa, ra - a, a > 0 ? "prev" : "next", a > 0 ? a : -a)
                            }
                        })
                    }
                    na = a(".mbsc-cal-month", O);
                    ma = a(".mbsc-cal-year", O);
                    P = a(".mbsc-cal-m-c", O);
                    if (cb) {
                        P.on("webkitAnimationEnd animationend", aa);
                        ya = a(".mbsc-cal-month-c", O).on("webkitAnimationEnd animationend", aa);
                        Fa = a(".mbsc-cal-year-c", O).on("webkitAnimationEnd animationend", aa);
                        a(".mbsc-cal-sc-p", O);
                        Ab = {
                            axis: Ma ? "Y" : "X",
                            contSize: 0,
                            snap: 1,
                            maxSnapScroll: 1,
                            rtl: y.rtl,
                            mousewheel: y.mousewheel,
                            time: 200
                        };
                        bb = new c.classes.ScrollView(Fa[0], Ab);
                        W = new c.classes.ScrollView(ya[0], Ab)
                    }
                    Ta ? O.addClass("mbsc-cal-liq") : a(".mbsc-cal", O).width(Db || 280 * ja);
                    y.calendarHeight && a(".mbsc-cal-anim-c", O).height(y.calendarHeight);
                    g.tap(pa, function(b) {
                        b = a(b.target);
                        if (!Pa && !ka.scrolled && y.readonly !== true) {
                            b = b.closest(".mbsc-cal-day", this);
                            b.hasClass("mbsc-cal-day-v") && N.call(b[0])
                        }
                    });
                    a(".mbsc-cal-btn", O).on("touchstart mousedown keydown", i).on("touchmove", A).on("touchend touchcancel keyup", u);
                    a(".mbsc-cal-tab",
                        O).on("touchstart click", function(b) {
                        s(b, this) && k.running && g.changeTab(a(this).attr("data-control"))
                    });
                    if (cb) {
                        g.tap(a(".mbsc-cal-month", O), function() {
                            if (!Fa.hasClass("mbsc-cal-v")) {
                                X(P);
                                fa = P.hasClass("mbsc-cal-v")
                            }
                            X(ya);
                            L(Fa)
                        });
                        g.tap(a(".mbsc-cal-year", O), function() {
                            Fa.hasClass("mbsc-cal-v") || bb.scroll(hb);
                            if (!ya.hasClass("mbsc-cal-v")) {
                                X(P);
                                fa = P.hasClass("mbsc-cal-v")
                            }
                            X(Fa);
                            L(ya)
                        });
                        g.tap(a(".mbsc-cal-month-s", O), function() {
                            !W.scrolled && !a(this).hasClass("mbsc-fr-btn-d") && g.navigate(y.getDate(oa,
                                a(this).attr("data-val"), 1))
                        });
                        g.tap(a(".mbsc-cal-year-s", O), function() {
                            if (!bb.scrolled) {
                                V = y.getDate(a(this).attr("data-val"), ra, 1);
                                g.navigate(new Date(d.constrain(V, Sa, wa)))
                            }
                        });
                        g.tap(Fa, function() {
                            if (!bb.scrolled) {
                                L(Fa);
                                T(P);
                                fa = true
                            }
                        });
                        g.tap(ya, function() {
                            if (!W.scrolled) {
                                L(ya);
                                T(P);
                                fa = true
                            }
                        })
                    }
                },
                onShow: function() {
                    ia && l(oa, ra)
                },
                onPosition: function(b) {
                    var c, d, f, e = 0,
                        h = 0,
                        i = 0,
                        j = b.windowHeight;
                    if (Ta) {
                        ba && pa.height("");
                        Wa.height("");
                        qa.width("")
                    }
                    Y && (f = Y);
                    ia && (Y = Math.round(Math.round(pa[0][Ma ? "offsetHeight" :
                        "offsetWidth"
                    ]) / ja));
                    if (Y) {
                        O.removeClass("mbsc-cal-m mbsc-cal-l");
                        Y > 1024 ? O.addClass("mbsc-cal-l") : Y > 640 && O.addClass("mbsc-cal-m")
                    }
                    if (fb && (xa || Ta) || ub) {
                        a(".mbsc-cal-pnl", O).removeClass("mbsc-cal-pnl-h");
                        a.each(Da, function(a, b) {
                            c = b[0].offsetWidth;
                            e = Math.max(e, c);
                            h = Math.max(h, b[0].offsetHeight);
                            i = i + c
                        });
                        if (fb || ub && i > (da[0].innerWidth || da.innerWidth())) {
                            d = true;
                            Ca = a(".mbsc-cal-tabs .mbsc-cal-tab-sel", O).attr("data-control");
                            ea.addClass("mbsc-cal-tabbed")
                        } else {
                            Ca = "calendar";
                            h = e = "";
                            ea.removeClass("mbsc-cal-tabbed");
                            Wa.css({
                                width: "",
                                height: ""
                            })
                        }
                    }
                    if (Ta && ba && ia) {
                        g._isFullScreen = true;
                        d && Wa.height(Da.calendar[0].offsetHeight);
                        b = ea[0].offsetHeight;
                        j >= b && pa.height(j - b + pa[0].offsetHeight);
                        h = Math.max(h, Da.calendar[0].offsetHeight)
                    }
                    if (d) {
                        Wa.css({
                            width: Ta ? "" : e,
                            height: h
                        });
                        ia && (Y = Math.round(Math.round(pa[0][Ma ? "offsetHeight" : "offsetWidth"]) / ja))
                    }
                    if (Y) {
                        qa[Ma ? "height" : "width"](Y);
                        if (Y !== f) {
                            if (Ga) {
                                K = y.maxMonthWidth > a(".mbsc-cal-btnw-m", O).width() ? y.monthNamesShort : y.monthNames;
                                for (B = 0; B < ja; ++B) a(na[B]).text(K[y.getMonth(y.getDate(oa,
                                    ra - sa + B, 1))])
                            }
                            if (cb) {
                                b = Fa[0][Ma ? "offsetHeight" : "offsetWidth"];
                                a.extend(bb.settings, {
                                    contSize: b,
                                    snap: b,
                                    minScroll: (2 - mb) * b,
                                    maxScroll: -b
                                });
                                a.extend(W.settings, {
                                    contSize: b,
                                    snap: b,
                                    minScroll: -b,
                                    maxScroll: -b
                                });
                                bb.refresh();
                                W.refresh();
                                Fa.hasClass("mbsc-cal-v") && bb.scroll(hb)
                            }
                            if (Ta && !xa && f) {
                                b = S / f;
                                S = b * Y
                            }
                            n(oa, ra, !f)
                        }
                    } else Y = f;
                    if (d) {
                        a(".mbsc-cal-pnl", O).addClass("mbsc-cal-pnl-h");
                        Da[Ca].removeClass("mbsc-cal-pnl-h")
                    }
                    g.trigger("onCalResize");
                    xa = false
                },
                onHide: function() {
                    sb = [];
                    va = [];
                    ra = oa = Ca = null;
                    Pa = true;
                    Y = 0;
                    ka &&
                        ka.destroy();
                    if (cb && bb && W) {
                        bb.destroy();
                        W.destroy()
                    }
                },
                onValidated: function(a) {
                    var b, c, d;
                    c = g.getDate(true);
                    if (I) b = "calendar";
                    else
                        for (d in g.order) d && g.order[d] === a && (b = /[mdy]/.test(d) ? "date" : "time");
                    g.trigger("onSetDate", {
                        date: c,
                        control: b
                    });
                    J(c);
                    I = false
                }
            });
            return la
        }
    })(window, document);
(function(j, k, e) {
    var d = mobiscroll,
        a = d.$,
        b = a.extend,
        c = d.util,
        f = c.datetime,
        h = f.adjustedDate,
        g = d.presets.scroller,
        i = {};
    d.presetShort('calendar');
    g.calendar = function(l) {
        function C(b) {
            if (b) {
                if (u[b]) {
                    return u[b];
                }
                var c = a('<div style="background-color:' + b + ';"></div>').appendTo('body'),
                    f = j.getComputedStyle ? getComputedStyle(c[0]) : c[0].style,
                    d = f.backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, '').split(','),
                    g = d[0] * 0.299 + d[1] * 0.587 + d[2] * 0.114,
                    e = g > 130 ? '#000' : '#fff';
                c.remove();
                u[b] = e;
                return e;
            }
        }

        function o(a) {
            return h(a.getFullYear(), a.getMonth(), a.getDate());
        }

        function B(a) {
            k = {};
            if (a && a.length) {
                for (n = 0; n < a.length; n++) {
                    k[o(a[n])] = a[n];
                }
            }
        }

        function q() {
            l.refresh();
        }
        var r, s, A, n, v, z, t, u = {},
            y = b({}, l.settings),
            d = b(l.settings, i, y),
            x = d.activeClass || '',
            m = d.select == 'multiple' || d.select > 1 || d.selectType == 'week',
            w = c.isNumeric(d.select) ? d.select : Infinity,
            p = !!d.events,
            k = {};
        t = g.calbase.call(this, l);
        r = b({}, t);
        A = d.firstSelectDay === e ? d.firstDay : d.firstSelectDay;
        if (m && d.defaultValue && d.defaultValue.length) {
            for (n = 0; n < d.defaultValue.length; n++) {
                k[o(d.defaultValue[n])] = d.defaultValue[n];
            }
        }
        l.onGenMonth = function(a, b) {
            v = l.prepareObj(d.events || d.marked, a, b);
        };
        l.getDayProps = function(i) {
            var c, j = m ? k[i] !== e : e,
                b = v[i] ? v[i] : false,
                d = b && b[0] && b[0].text,
                h = b && b[0] && b[0].color,
                l = p && d ? C(h) : '',
                f = '',
                g = '';
            if (b) {
                for (c = 0; c < b.length; c++) {
                    if (b[c].icon) {
                        f += '<span class="mbsc-ic mbsc-ic-' + b[c].icon + '"' + (b[c].text ? '' : b[c].color ? ' style="color:' + b[c].color + ';"' : '') + '></span>\n';
                    }
                }
                g = '<div class="mbsc-cal-day-m"><div class="mbsc-cal-day-m-t">';
                for (c = 0; c < b.length; c++) {
                    g += '<div class="mbsc-cal-day-m-c"' + (b[c].color ? ' style="background:' + b[c].color + ';"' : '') + '></div>';
                }
                g += '</div></div>';
            }
            return {
                marked: b,
                selected: j,
                cssClass: b ? 'mbsc-cal-day-marked' : '',
                ariaLabel: p ? d : '',
                markup: p && d ? '<div class="mbsc-cal-day-txt-c"><div class="mbsc-cal-day-txt" title="' + a('<div>' + d + '</div>').text() + '"' + (h ? ' style="background:' + h + ';color:' + l + ';text-shadow:none;"' : '') + '>' + f + d + '</div></div>' : p && f ? '<div class="mbsc-cal-day-ic-c">' + f + '</div>' : b ? g : ''
            };
        };
        l.addValue = function(a) {
            k[o(a)] = a;
            q();
        };
        l.removeValue = function(a) {
            delete k[o(a)];
            q();
        };
        l.setVal = function(a, b, c, d, e) {
            if (m) {
                B(a);
                a = a ? a[0] : null;
            }
            l._setVal(a, b, c, d, e);
            q();
        };
        l.getVal = function(a) {
            if (m) {
                return c.objectToArray(k);
            }
            return l.getDate(a);
        };
        b(t, {
            highlight: !m,
            outerMonthChange: !m,
            parseValue: function(a) {
                var b, c;
                if (m && a && typeof a === 'string') {
                    k = {};
                    a = a.split(',');
                    for (b = 0; b < a.length; b++) {
                        c = f.parseDate(l.format, a[b].replace(/^\s+|\s+$/g, ''), d);
                        k[o(c)] = c;
                    }
                    a = a[0];
                }
                if (m && d.defaultValue && d.defaultValue.length) {
                    d.defaultValue = d.defaultValue[0];
                }
                return r.parseValue.call(this, a);
            },
            formatValue: function(c) {
                var b, a = [];
                if (m) {
                    for (b in k) {
                        a.push(f.formatDate(l.format, k[b], d));
                    }
                    return a.join(', ');
                }
                return r.formatValue.call(this, c);
            },
            onClear: function() {
                if (m) {
                    k = {};
                    l.refresh();
                }
            },
            onBeforeShow: function() {
                if (d.setOnDayTap === e && (!d.buttons || !d.buttons.length)) {
                    d.setOnDayTap = true;
                }
                if (d.setOnDayTap && d.display != 'inline') {
                    d.outerMonthChange = false;
                }
                if (d.counter && m) {
                    d.headerText = function() {
                        var b = 0,
                            c = d.selectType == 'week' ? 7 : 1;
                        a.each(k, function() {
                            b++;
                        });
                        b = Math.round(b / c);
                        return (b > 1 ? d.selectedPluralText || d.selectedText : d.selectedText).replace(/{count}/, b);
                    };
                }
            },
            onMarkupReady: function(c) {
                r.onMarkupReady.call(this, c);
                s = a(c.target);
                if (m) {
                    a('.mbsc-fr-hdr', s).attr('aria-live', 'off');
                    z = b({}, k);
                }
                if (p) {
                    a('.mbsc-cal', s).addClass('mbsc-cal-ev');
                }
            },
            onDayChange: function(i) {
                var j = i.date,
                    b = o(j),
                    r = a(i.target),
                    n = i.selected;
                if (m) {
                    if (d.selectType == 'week') {
                        var f, g, e = b.getDay() - A;
                        e = e < 0 ? 7 + e : e;
                        if (d.select != 'multiple') {
                            k = {};
                        }
                        for (f = 0; f < 7; f++) {
                            g = h(b.getFullYear(), b.getMonth(), b.getDate() - e + f);
                            if (n) {
                                delete k[g];
                            } else if (c.objectToArray(k).length / 7 < w) {
                                k[g] = g;
                            }
                        }
                        q();
                    } else {
                        var p = a('.mbsc-cal .mbsc-cal-day[data-full="' + r.attr('data-full') + '"]', s);
                        if (n) {
                            p.removeClass('mbsc-cal-day-sel').removeAttr('aria-selected').find('.mbsc-cal-day-i').removeClass(x);
                            delete k[b];
                        } else if (c.objectToArray(k).length < w) {
                            p.addClass('mbsc-cal-day-sel').attr('aria-selected', 'true').find('.mbsc-cal-day-i').addClass(x);
                            k[b] = b;
                        }
                    }
                }
                if (d.setOnDayTap && d.select != 'multiple' && d.display != 'inline') {
                    l.needsSlide = false;
                    l.setDate(j);
                    l.select();
                    return false;
                }
            },
            onCancel: function() {
                if (!l.live && m) {
                    k = b({}, z);
                }
            }
        });
        return t;
    };
}(window, document));
(function(j, k, f) {
    var c = mobiscroll,
        a = c.$,
        b = a.extend,
        h = c.util,
        d = h.datetime,
        g = d.adjustedDate,
        e = c.presets.scroller,
        i = {
            labelsShort: ['Yrs', 'Mths', 'Days', 'Hrs', 'Mins', 'Secs'],
            eventText: 'event',
            eventsText: 'events'
        };
    c.presetShort('eventcalendar');
    e.eventcalendar = function(h) {
        function J(b) {
            if (b) {
                if (x[b]) {
                    return x[b];
                }
                var c = a('<div style="background-color:' + b + ';"></div>').appendTo('body'),
                    f = j.getComputedStyle ? getComputedStyle(c[0]) : c[0].style,
                    d = f.backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, '').split(','),
                    g = d[0] * 0.299 + d[1] * 0.587 + d[2] * 0.114,
                    e = g > 130 ? '#000' : '#fff';
                c.remove();
                x[b] = e;
                return e;
            }
        }

        function K(g) {
            var a = k.labelsShort,
                c = Math.abs(g) / 1000,
                d = c / 60,
                e = d / 60,
                b = e / 24,
                f = b / 365;
            return c < 45 && Math.round(c) + ' ' + a[5].toLowerCase() || d < 45 && Math.round(d) + ' ' + a[4].toLowerCase() || e < 24 && Math.round(e) + ' ' + a[3].toLowerCase() || b < 30 && Math.round(b) + ' ' + a[2].toLowerCase() || b < 365 && Math.round(b / 30) + ' ' + a[1].toLowerCase() || Math.round(f) + ' ' + a[0].toLowerCase();
        }

        function E(a) {
            return a.sort(function(a, b) {
                var c = a.d || a.start,
                    d = b.d || b.start,
                    e = !c.getTime ? 0 : a.start && a.end && a.start.toDateString() !== a.end.toDateString() ? 1 : c.getTime(),
                    f = !d.getTime ? 0 : b.start && b.end && b.start.toDateString() !== b.end.toDateString() ? 1 : d.getTime();
                return e - f;
            });
        }

        function F(b) {
            var e, f = a('.mbsc-cal-c', o)[0].offsetHeight,
                g = b[0].offsetHeight,
                h = b[0].offsetWidth,
                d = b.offset().top - a('.mbsc-cal-c', o).offset().top,
                c = b.closest('.mbsc-cal-row').index() < 2;
            e = l.addClass('mbsc-cal-events-t').css({
                top: c ? d + g : '0',
                bottom: c ? '0' : f - d
            }).addClass('mbsc-cal-events-v').height();
            l.css(c ? 'bottom' : 'top', 'auto').removeClass('mbsc-cal-events-t');
            w.css('max-height', e);
            r.refresh();
            r.scroll(0);
            if (c) {
                l.addClass('mbsc-cal-events-b');
            } else {
                l.removeClass('mbsc-cal-events-b');
            }
            a('.mbsc-cal-events-arr', l).css('left', b.offset().left - l.offset().left + h / 2);
        }

        function I(o, m) {
            var b = q[o];
            if (b) {
                var g, e, j, c, i, p, f = '<ul class="mbsc-cal-event-list">';
                M = 0;
                n = m;
                m.addClass(D).find('.mbsc-cal-day-i').addClass(C);
                if (m.hasClass(v)) {
                    m.attr('data-hl', 'true').removeClass(v);
                }
                E(b);
                a.each(b, function(b, a) {
                    c = a.d || a.start;
                    i = a.start && a.end && a.start.toDateString() !== a.end.toDateString();
                    j = a.color;
                    p = J(j);
                    g = '';
                    e = '';
                    if (c.getTime) {
                        g = d.formatDate((i ? 'MM d yy ' : '') + k.timeFormat, c);
                    }
                    if (a.end) {
                        e = d.formatDate((i ? 'MM d yy ' : '') + k.timeFormat, a.end);
                    }
                    f += '<li role="button" aria-label="' + a.text + (g ? ', ' + k.fromText + ' ' + g : '') + (e ? ', ' + k.toText + ' ' + e : '') + '" class="mbsc-cal-event">' + '<div class="mbsc-cal-event-color" style="' + (j ? 'background:' + j + ';' : '') + '"></div>' + '<div class="mbsc-cal-event-text">' + (c.getTime && !i ? '<div class="mbsc-cal-event-time">' + d.formatDate(k.timeFormat, c) + '</div>' : '') + a.text + '</div>' + (a.start && a.end ? '<div class="mbsc-cal-event-dur">' + K(a.end - a.start) + '</div>' : '') + '</li>';
                });
                f += '</ul>';
                B.html(f);
                h.trigger('onEventBubbleShow', {
                    target: n[0],
                    eventList: l[0]
                });
                F(n);
                h.tap(a('.mbsc-cal-event', B), function(c) {
                    if (!r.scrolled) {
                        h.trigger('onEventSelect', {
                            domEvent: c,
                            event: b[a(this).index()],
                            date: o
                        });
                    }
                });
                y = true;
            }
        }

        function t() {
            if (l) {
                l.removeClass('mbsc-cal-events-v');
            }
            if (n) {
                n.removeClass(D).find('.mbsc-cal-day-i').removeClass(C);
                if (n.attr('data-hl')) {
                    n.removeAttr('data-hl').addClass(v);
                }
            }
            y = false;
        }

        function A() {
            t();
            h.redraw();
        }

        function L(a) {
            return g(a.getFullYear(), a.getMonth(), a.getDate());
        }
        var H, o, l, n, q, r, w, B, y, M, z, s, x = {},
            G = b({}, h.settings),
            k = b(h.settings, i, G),
            D = 'mbsc-cal-day-sel mbsc-cal-day-ev',
            v = 'mbsc-cal-day-hl',
            C = k.activeClass || '',
            p = k.showEventCount,
            u = 0,
            m = b(true, [], k.data);
        z = e.calbase.call(this, h);
        H = b({}, z);
        a.each(m, function(b, a) {
            if (a._id === f) {
                a._id = u++;
            }
        });
        h.onGenMonth = function(a, b) {
            q = h.prepareObj(m, a, b);
        };
        h.getDayProps = function(g) {
            var c, b = q[g] ? q[g] : false,
                d = b ? q[g].length + ' ' + (q[g].length > 1 ? k.eventsText : k.eventText) : 0,
                h = b && b[0] && b[0].color,
                i = p && d ? J(h) : '',
                e = '',
                f = '';
            if (b) {
                for (c = 0; c < b.length; c++) {
                    if (b[c].icon) {
                        e += '<span class="mbsc-ic mbsc-ic-' + b[c].icon + '"' + (b[c].text ? '' : b[c].color ? ' style="color:' + b[c].color + ';"' : '') + '></span>\n';
                    }
                }
                f = '<div class="mbsc-cal-day-m"><div class="mbsc-cal-day-m-t">';
                for (c = 0; c < b.length; c++) {
                    f += '<div class="mbsc-cal-day-m-c"' + (b[c].color ? ' style="background:' + b[c].color + ';"' : '') + '></div>';
                }
                f += '</div></div>';
            }
            return {
                marked: b,
                selected: false,
                cssClass: b ? 'mbsc-cal-day-marked' : '',
                ariaLabel: p ? d : '',
                markup: p && d ? '<div class="mbsc-cal-day-txt-c"><div class="mbsc-cal-day-txt" title="' + a('<div>' + d + '</div>').text() + '"' + (h ? ' style="background:' + h + ';color:' + i + ';text-shadow:none;"' : '') + '>' + e + d + '</div></div>' : p && e ? '<div class="mbsc-cal-day-ic-c">' + e + '</div>' : b ? f : ''
            };
        };
        h.addEvent = function(c) {
            var d = [];
            c = b(true, [], a.isArray(c) ? c : [c]);
            a.each(c, function(b, a) {
                if (a._id === f) {
                    a._id = u++;
                }
                m.push(a);
                d.push(a._id);
            });
            A();
            return d;
        };
        h.removeEvent = function(b) {
            b = a.isArray(b) ? b : [b];
            a.each(b, function(c, b) {
                a.each(m, function(a, c) {
                    if (c._id === b) {
                        m.splice(a, 1);
                        return false;
                    }
                });
            });
            A();
        };
        h.getEvents = function(a) {
            var c;
            if (a) {
                a.setHours(0, 0, 0, 0);
                c = h.prepareObj(m, a.getFullYear(), a.getMonth());
                return c[a] ? E(c[a]) : [];
            }
            return b(true, [], m);
        };
        h.setEvents = function(d) {
            var c = [];
            m = b(true, [], d);
            a.each(m, function(b, a) {
                if (a._id === f) {
                    a._id = u++;
                }
                c.push(a._id);
            });
            A();
            return c;
        };
        b(z, {
            highlight: false,
            outerMonthChange: false,
            headerText: false,
            buttons: k.display !== 'inline' ? ['cancel'] : k.buttons,
            onMarkupReady: function(b) {
                H.onMarkupReady.call(this, b);
                o = a(b.target);
                if (p) {
                    a('.mbsc-cal', o).addClass('mbsc-cal-ev');
                }
                o.addClass('mbsc-cal-em');
                l = a('<div class="mbsc-cal-events ' + (k.eventBubbleClass || '') + '"><div class="mbsc-cal-events-arr"></div><div class="mbsc-cal-events-i"><div class="mbsc-cal-events-sc"></div></div></div>').appendTo(a('.mbsc-cal-c', o));
                w = a('.mbsc-cal-events-i', l);
                B = a('.mbsc-cal-events-sc', l);
                r = new c.classes.ScrollView(w[0]);
                y = false;
                h.tap(w, function() {
                    if (!r.scrolled) {
                        t();
                    }
                });
            },
            onMonthChange: function() {
                t();
            },
            onSelectShow: function() {
                t();
            },
            onMonthLoaded: function() {
                if (s) {
                    I(s.d, a('.mbsc-cal-day-v[data-full="' + s.full + '"]:not(.mbsc-cal-day-diff)', o));
                    s = false;
                }
            },
            onDayChange: function(d) {
                var e = d.date,
                    c = L(e),
                    b = a(d.target);
                t();
                if (!b.hasClass('mbsc-cal-day-ev')) {
                    setTimeout(function() {
                        if (h.changing) {
                            s = {
                                d: c,
                                full: b.attr('data-full')
                            };
                        } else {
                            I(c, b);
                        }
                    }, 10);
                }
                return false;
            },
            onCalResize: function() {
                if (y) {
                    F(n);
                }
            }
        });
        return z;
    };
}(window, document));
(function(l) {
    function k(c) {
        var b = [Math.round(c.r).toString(16), Math.round(c.g).toString(16), Math.round(c.b).toString(16)];

        a.each(b, function(c, a) {
            if (a.length == 1) {
                b[c] = '0' + a;
            }
        });
        return '#' + b.join('');
    }

    function i(a) {
        a = parseInt(a.indexOf('#') > -1 ? a.substring(1) : a, 16);
        return {
            r: a >> 16,
            g: (a & 0x00FF00) >> 8,
            b: a & 0x0000FF
        };
    }

    function d(j) {
        var d, e, f, c = j.h,
            i = j.s * 255 / 100,
            h = j.v * 255 / 100;
        if (i === 0) {
            d = e = f = h;
        } else {
            var b = h,
                a = (255 - i) * h / 255,
                g = (b - a) * (c % 60) / 60;
            if (c == 360) {
                c = 0;
            }
            if (c < 60) {
                d = b;
                f = a;
                e = a + g;
            } else if (c < 120) {
                e = b;
                f = a;
                d = b - g;
            } else if (c < 180) {
                e = b;
                d = a;
                f = a + g;
            } else if (c < 240) {
                f = b;
                d = a;
                e = b - g;
            } else if (c < 300) {
                f = b;
                e = a;
                d = a + g;
            } else if (c < 360) {
                d = b;
                e = a;
                f = b - g;
            } else {
                d = e = f = 0;
            }
        }
        return {
            r: d,
            g: e,
            b: f
        };
    }

    function e(a) {
        var b = 0,
            e, f, g = Math.min(a.r, a.g, a.b),
            c = Math.max(a.r, a.g, a.b),
            d = c - g;
        f = c;
        e = c ? 255 * d / c : 0;
        if (e) {
            if (a.r == c) {
                b = (a.g - a.b) / d;
            } else if (a.g == c) {
                b = 2 + (a.b - a.r) / d;
            } else {
                b = 4 + (a.r - a.g) / d;
            }
        } else {
            b = -1;
        }
        b *= 60;
        if (b < 0) {
            b += 360;
        }
        e *= 100 / 255;
        f *= 100 / 255;
        return {
            h: b,
            s: e,
            v: f
        };
    }

    function b(a) {
        return k(d(a));
    }

    function h(a) {
        return e(i(a));
    }
    var c = mobiscroll,
        a = c.$,
        f = c.util.prefix,
        g = c.presets.scroller,
        j = {
            preview: true,
            previewText: true,
            label: 'Color',
            refineLabel: 'Refine',
            step: 10,
            nr: 10,
            format: 'hex',
            hueText: 'Hue',
            saturationText: 'Saturation',
            valueText: 'Value'
        };
    c.presetShort('color');
    g.color = function(i) {
        function y(b, a) {
            return Math.floor(b / a) * a;
        }

        function g(a) {
            return isNaN(+a) ? 0 : +a;
        }

        function u(a) {
            if (k == 'hsv') {
                return a.join(',');
            } else if (k == 'rgb') {
                var c = d({
                    h: a[0],
                    s: a[1],
                    v: a[2]
                });
                return Math.round(c.r) + ',' + Math.round(c.g) + ',' + Math.round(c.b);
            }
            return b({
                h: a[0],
                s: a[1],
                v: a[2]
            });
        }

        function v(c, a, b) {
            c[0].style.backgroundImage = f + (f == '-webkit-' ? 'gradient(linear,left top,left bottom,from(' + a + '),to(' + b + '))' : 'linear-gradient(' + a + ',' + b + ')');
        }

        function n(f, g) {
            var c = i._tempWheelArray;
            if (g !== 1 && g !== 2) {
                v(a('.mbsc-sc-whl-sc', f).eq(1), b({
                    h: c[0],
                    s: 0,
                    v: 100
                }), b({
                    h: c[0],
                    s: 100,
                    v: 100
                }));
            }
            if (g !== 2) {
                v(a('.mbsc-sc-whl-sc', f).eq(2), b({
                    h: c[0],
                    s: c[1],
                    v: 0
                }), b({
                    h: c[0],
                    s: c[1],
                    v: 100
                }));
            }
            if (l) {
                var e = d({
                        h: c[0],
                        s: c[1],
                        v: c[2]
                    }),
                    h = e.r * 0.299 + e.g * 0.587 + e.b * 0.114;
                a('.mbsc-color-preview', f).attr('style', 'background:' + b({
                    h: c[0],
                    s: c[1],
                    v: c[2]
                }) + ';color:' + (h > 130 ? '#000' : '#fff')).text(w ? u(c) : '');
            }
        }

        function x() {
            var a = 0,
                c = {
                    data: [],
                    label: o
                },
                d = {
                    circular: false,
                    data: [],
                    label: q
                },
                e = {
                    circular: false,
                    data: [],
                    label: r
                };
            for (; a < 360; a += 3) {
                c.data.push({
                    value: a,
                    label: a,
                    display: '<div class="mbsc-color-itm" style="background:' + b({
                        h: a,
                        s: 100,
                        v: 100
                    }) + '"><div class="mbsc-color-itm-a"></div></div>'
                });
            }
            for (a = 0; a < 101; a += 1) {
                d.data.push({
                    value: a,
                    label: a,
                    display: '<div class="mbsc-color-itm"><div class="mbsc-color-itm-a"></div></div>'
                });
                e.data.push({
                    value: a,
                    label: a,
                    display: '<div class="mbsc-color-itm"><div class="mbsc-color-itm-a"></div></div>'
                });
            }
            return [
                [c, d, e]
            ];
        }
        var p, m = a.extend({}, i.settings),
            c = a.extend(i.settings, j, m),
            s = a.isArray(c.colors) ? c.colors : [c.colors],
            t = c.defaultValue || s[0],
            k = c.format,
            l = c.preview,
            w = c.previewText,
            o = c.hueText,
            q = c.saturationText,
            r = c.valueText;
        p = x();
        return {
            minWidth: 70,
            height: 15,
            rows: 13,
            speedUnit: 0.006,
            timeUnit: 0.05,
            showLabel: true,
            scroll3d: false,
            wheels: p,
            compClass: 'mbsc-color',
            parseValue: function(a) {
                var c, b;
                a = a || t;
                if (a) {
                    if (k == 'hsv') {
                        a = a.split(',');
                        b = {
                            h: g(a[0]),
                            s: g(a[1]),
                            v: g(a[2])
                        };
                    } else if (k == 'rgb') {
                        c = a.split(',');
                        b = e({
                            r: g(c[0]),
                            g: g(c[1]),
                            b: g(c[2])
                        });
                    } else {
                        a = a.replace('#', '');
                        if (a.length == 3) {
                            a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2];
                        }
                        b = h(a);
                    }
                    return [y(Math.round(b.h), 3), Math.round(b.s), Math.round(b.v)];
                }
                return [0, 100, 100];
            },
            formatValue: u,
            onBeforeShow: function() {
                if (l) {
                    c.headerText = false;
                }
            },
            onMarkupReady: function(c) {
                var b = a(c.target);
                if (l) {
                    b.find('.mbsc-sc-whl-gr-c').before('<div class="mbsc-color-preview"></div>');
                }
                n(b);
            },
            validate: function(a) {
                if (i._isVisible) {
                    n(i._markup, a.index);
                }
            }
        };
    };
    c.util.color = {
        hsv2hex: b,
        hsv2rgb: d,
        rgb2hsv: e,
        rgb2hex: k,
        hex2rgb: i,
        hex2hsv: h
    };
}());
(function(n, h, f) {
    var e, g = mobiscroll,
        a = g.$,
        t = a.extend,
        k = g.classes,
        c = g.util,
        l = c.prefix,
        d = c.jsPrefix,
        b = c.getCoord,
        q = c.testTouch,
        o = c.vibrate,
        j = 1,
        i = function() {},
        r = n.requestAnimationFrame || function(a) {
            a();
        },
        s = n.cancelAnimationFrame || i,
        m = 'webkitAnimationEnd animationend',
        p = 'transparent';
    k.ListView = function(bB, bH) {
        var R, ak, ac, E, aM, bx, bw, x, M, K, aJ, at, bA, I, a3, bD, aq, bs, J, a2, P, T, a6, bq, b8, bj, bh, A, as, aw, U, bp, aR, W, bt, bm, $, aY, aG, bk, bI, aV, b9, al, N, z, ae, u, D, w, b6, bQ, aA, az, aP, L, Y, a0, b0, b1, aL, aH, bC, ba, Q, H, Z, a1, aD, bg, aB, v, ab, a7, b3, b5, ar, bJ, bM, ax, au, S, V, aS, bu, aT, aF, av, y, af, ay, aQ, B, aa, ai, b7, g = this,
            G = bB,
            C = a(G),
            X = 0,
            a4 = 0,
            F = 0,
            ap = {},
            aE = {},
            O = {};

        function bF() {
            aD = false;
            aL = false;
            E = 0;
            bJ = 0;
            bM = new Date();
            ae = K.width();
            bA = am(K);
            w = bA.index(u);
            D = u[0].offsetHeight;
            F = u[0].offsetTop;
            y = af[u.attr('data-type') || 'defaults'];
            ar = y.stages;
        }

        function bP(c) {
            var f;
            if (c.type === 'touchstart') {
                aH = true;
                clearTimeout(bC);
            }
            if (q(c, this) && !R && !X && !e && !aN && mobiscroll.vKMaI) {
                R = true;
                aM = true;
                ax = b(c, 'X');
                au = b(c, 'Y');
                J = 0;
                a2 = 0;
                u = a(this);
                f = u;
                bF();
                aT = v.onItemTap || y.tap || u.hasClass('mbsc-lv-parent') || u.hasClass('mbsc-lv-back');
                bQ = C.offset().top;
                b6 = u.offset().top;
                if (aT) {
                    ac = setTimeout(function() {
                        f.addClass('mbsc-lv-item-active');
                        A('onItemActivate', {
                            target: f[0],
                            domEvent: c
                        });
                    }, 120);
                }
                if (g.sortable && !u.hasClass('mbsc-lv-back')) {
                    if (!g.sortable.group) {
                        b0 = u.nextUntil('.mbsc-lv-gr-title').filter('.mbsc-lv-item');
                        ba = u.prevUntil('.mbsc-lv-gr-title').filter('.mbsc-lv-item');
                    }
                    az = (!g.sortable.group ? ba.length ? ba.eq(-1) : u : K.children('li').eq(0))[0].offsetTop - F;
                    aA = (!g.sortable.group ? b0.length ? b0.eq(-1) : u : K.children('li').eq(-1))[0].offsetTop - F;
                    if (g.sortable.handle) {
                        if (a(c.target).hasClass('mbsc-lv-handle')) {
                            clearTimeout(ac);
                            if (d === 'Moz') {
                                c.preventDefault();
                                aX();
                            } else {
                                av = setTimeout(function() {
                                    aX();
                                }, 100);
                            }
                        }
                    } else {
                        av = setTimeout(function() {
                            as.appendTo(u);
                            as[0].style[d + 'Animation'] = 'mbsc-lv-fill ' + (v.sortDelay - 100) + 'ms linear';
                            clearTimeout(b8);
                            clearTimeout(ac);
                            aM = false;
                            av = setTimeout(function() {
                                as[0].style[d + 'Animation'] = '';
                                aX();
                            }, v.sortDelay - 80);
                        }, 80);
                    }
                }
                if (c.type == 'mousedown') {
                    a(h).on('mousemove', aU).on('mouseup', ao);
                }
            }
        }

        function aU(c) {
            var d = false,
                e = true;
            if (R) {
                bj = b(c, 'X');
                bh = b(c, 'Y');
                J = bj - ax;
                a2 = bh - au;
                clearTimeout(b8);
                if (!a6 && !V && !ab && !u.hasClass('mbsc-lv-back')) {
                    if (Math.abs(a2) > 10) {
                        ab = true;
                        c.type = c.type == 'mousemove' ? 'mouseup' : 'touchend';
                        ao(c);
                        clearTimeout(ac);
                    } else if (Math.abs(J) > 7) {
                        bL();
                    } else {
                        if (c.type === 'touchmove') {
                            b8 = setTimeout(function() {
                                c.type = 'touchend';
                                ao(c);
                            }, 300);
                        }
                    }
                }
                if (V) {
                    c.preventDefault();
                    E = J / ae * 100;
                    aW();
                } else if (a6) {
                    c.preventDefault();
                    var i, f = B.scrollTop(),
                        a = Math.max(az, Math.min(a2 + ai, aA)),
                        h = W ? b6 - b7 + f - ai : b6;
                    if (aa + f < h + a + D) {
                        B.scrollTop(h + a - aa + D);
                        i = true;
                    } else if (h + a < f) {
                        B.scrollTop(h + a);
                        i = true;
                    }
                    if (i) {
                        ai += B.scrollTop() - f;
                    }
                    if (Y) {
                        if (g.sortable.multiLevel && L.hasClass('mbsc-lv-parent')) {
                            if (F + D / 4 + a > Y) {
                                d = true;
                            } else if (F + D - D / 4 + a > Y) {
                                P = L.addClass('mbsc-lv-item-hl');
                                e = false;
                            }
                        } else if (F + D / 2 + a > Y) {
                            if (L.hasClass('mbsc-lv-back')) {
                                if (g.sortable.multiLevel) {
                                    T = L.addClass('mbsc-lv-item-hl');
                                    e = false;
                                }
                            } else {
                                d = true;
                            }
                        }
                        if (d) {
                            Q.insertAfter(L);
                            H = L;
                            L = aO(L, 'next');
                            Z = Y;
                            Y = L.length && L[0].offsetTop;
                            M++;
                        }
                    }
                    if (!d && Z) {
                        if (g.sortable.multiLevel && H.hasClass('mbsc-lv-parent')) {
                            if (F + D - D / 4 + a < Z) {
                                d = true;
                            } else if (F + D / 4 + a < Z) {
                                P = H.addClass('mbsc-lv-item-hl');
                                e = false;
                            }
                        } else if (F + D / 2 + a < Z) {
                            if (H.hasClass('mbsc-lv-back')) {
                                if (g.sortable.multiLevel) {
                                    T = H.addClass('mbsc-lv-item-hl');
                                    e = false;
                                }
                            } else {
                                d = true;
                            }
                        }
                        if (d) {
                            Q.insertBefore(H);
                            L = H;
                            H = aO(H, 'prev');
                            Y = Z;
                            Z = H.length && H[0].offsetTop + H[0].offsetHeight;
                            M--;
                        }
                    }
                    if (e) {
                        if (P) {
                            P.removeClass('mbsc-lv-item-hl');
                            P = false;
                        }
                        if (T) {
                            T.removeClass('mbsc-lv-item-hl');
                            T = false;
                        }
                    }
                    if (d) {
                        A('onSortChange', [u, M]);
                    }
                    br(u, a);
                    A('onSort', [u, M]);
                } else if (Math.abs(J) > 5 || Math.abs(a2) > 5) {
                    b2();
                }
            }
        }

        function ao(e) {
            var f, b, d, i, j = u;
            if (R) {
                R = false;
                b2();
                if (e.type == 'mouseup') {
                    a(h).off('mousemove', aU).off('mouseup', ao);
                }
                if (!ab) {
                    bC = setTimeout(function() {
                        aH = false;
                    }, 300);
                }
                if (V || ab || a6) {
                    aL = true;
                }
                if (V) {
                    bf();
                } else if (a6) {
                    d = K;
                    if (P) {
                        a9(u.detach());
                        b = O[P.attr('data-ref')];
                        M = am(b.child).length;
                        P.removeClass('mbsc-lv-item-hl');
                        if (v.navigateOnDrop) {
                            bc(P, function() {
                                g.add(null, u, null, null, P, true);
                                aj(u);
                                an(u, w, d, true);
                            });
                        } else {
                            g.add(null, u, null, null, P, true);
                            an(u, w, d, true);
                        }
                    } else if (T) {
                        a9(u.detach());
                        b = O[T.attr('data-back')];
                        M = am(b.parent).index(b.item) + 1;
                        T.removeClass('mbsc-lv-item-hl');
                        if (v.navigateOnDrop) {
                            bc(T, function() {
                                g.add(null, u, M, null, K, true);
                                aj(u);
                                an(u, w, d, true);
                            });
                        } else {
                            g.add(null, u, M, null, b.parent, true);
                            an(u, w, d, true);
                        }
                    } else {
                        f = Q[0].offsetTop - F;
                        br(u, f, Math.abs(f - Math.max(az, Math.min(a2 + ai, aA))) * 6, function() {
                            a9(u);
                            u.insertBefore(Q);
                            an(u, w, d, M !== w);
                        });
                    }
                    a6 = false;
                } else if (!ab && Math.abs(J) < 5 && Math.abs(a2) < 5) {
                    if (y.tap) {
                        i = y.tap.call(G, {
                            target: u,
                            index: w,
                            domEvent: e
                        }, g);
                    }
                    if (aT) {
                        if (e.type === 'touchend') {
                            c.preventClick();
                        }
                        u.addClass('mbsc-lv-item-active');
                        A('onItemActivate', {
                            target: u[0],
                            domEvent: e
                        });
                    }
                    i = A('onItemTap', {
                        target: u[0],
                        index: w,
                        domEvent: e
                    });
                    if (i !== false) {
                        bc(u);
                    }
                }
                clearTimeout(ac);
                setTimeout(function() {
                    j.removeClass('mbsc-lv-item-active');
                    A('onItemDeactivate', {
                        target: j[0]
                    });
                }, 100);
                ab = false;
                I = null;
            }
        }

        function bL() {
            V = a8(y.swipe, {
                target: u[0],
                index: w,
                direction: J > 0 ? 'right' : 'left'
            });
            if (V) {
                b2();
                clearTimeout(ac);
                if (y.actions) {
                    ak = bG(y, J);
                    aP.html(y.icons).show().children().css('width', ak + '%');
                    N.hide();
                    a('.mbsc-lv-ic-m', z).removeClass('mbsc-lv-ic-disabled');
                    a(y.leftMenu).each(bl);
                    a(y.rightMenu).each(bl);
                } else {
                    N.show();
                    aP.hide();
                    a3 = y.start + (J > 0 ? 0 : 1);
                    a1 = ar[a3 - 1];
                    a0 = ar[a3];
                }
                u.addClass('mbsc-lv-item-swiping').removeClass('mbsc-lv-item-active');
                aF.css('line-height', D + 'px');
                z.css({
                    top: F,
                    height: D,
                    backgroundColor: bE(J)
                }).addClass('mbsc-lv-stage-c-v').appendTo(K.parent());
                if (v.iconSlide) {
                    u.append(N);
                }
                A('onSlideStart', {
                    target: u[0],
                    index: w
                });
            }
        }

        function aW() {
            var a = false;
            if (!aB) {
                if (y.actions) {
                    z.attr('class', 'mbsc-lv-stage-c-v mbsc-lv-stage-c mbsc-lv-' + (E < 0 ? 'right' : 'left'));
                } else {
                    if (a1 && E <= a1.percent) {
                        a3--;
                        a0 = a1;
                        a1 = ar[a3];
                        a = true;
                    } else if (a0 && E >= a0.percent) {
                        a3++;
                        a1 = a0;
                        a0 = ar[a3];
                        a = true;
                    }
                    if (a) {
                        I = E > 0 ? a1 : a0;
                        if (I) {
                            aK(I, v.iconSlide);
                            A('onStageChange', {
                                target: u[0],
                                index: w,
                                stage: I
                            });
                        }
                    }
                }
                if (!a7) {
                    aB = true;
                    bg = r(bo);
                }
            }
        }

        function bf(b) {
            var f, g, d, c = false,
                i = true;
            s(bg);
            aB = false;
            if (!a7) {
                bo();
            }
            if (y.actions) {
                if (Math.abs(E) > 10 && ak) {
                    ah(u, E < 0 ? -ak : ak, 200);
                    c = true;
                    e = true;
                    bx = u;
                    bw = w;
                    a(h).on('touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf', function(a) {
                        a.preventDefault();
                        aI(u, true, b);
                    });
                }
            } else if (E) {
                if (v.quickSwipe && !a7) {
                    d = new Date() - bM;
                    f = d < 300 && J < -50;
                    g = d < 300 && J > 50;
                    if (f) {
                        aD = true;
                        I = y.left;
                        aK(I, v.iconSlide);
                    } else if (g) {
                        aD = true;
                        I = y.right;
                        aK(I, v.iconSlide);
                    }
                }
                if (I && I.action) {
                    bs = a8(I.disabled, {
                        target: u[0],
                        index: w
                    });
                    if (!bs) {
                        c = true;
                        e = a7 || a8(I.confirm, {
                            target: u[0],
                            index: w
                        });
                        if (e) {
                            ah(u, (E < 0 ? -1 : 1) * N[0].offsetWidth * 100 / ae, 200, true);
                            bn(I, u, w, false, b);
                        } else {
                            a$(I, u, w, b);
                        }
                    }
                }
            }
            if (!c) {
                aI(u, i, b);
            }
            V = false;
        }

        function aX() {
            a6 = true;
            P = false;
            T = false;
            ai = 0;
            M = w;
            if (v.vibrate) {
                o();
            }
            L = aO(u, 'next');
            Y = L.length && L[0].offsetTop;
            H = aO(u, 'prev');
            Z = H.length && H[0].offsetTop + H[0].offsetHeight;
            Q.height(D).insertAfter(u);
            u.css({
                top: F
            }).addClass('mbsc-lv-item-dragging').removeClass('mbsc-lv-item-active').appendTo(bq);
            A('onSortStart', {
                target: u[0],
                index: M
            });
        }

        function an(a, b, c, d) {
            a.removeClass('mbsc-lv-item-dragging');
            Q.remove();
            A('onSortEnd', {
                target: a[0],
                index: M
            });
            if (v.vibrate) {
                o();
            }
            if (d) {
                g.addUndoAction(function(d) {
                    g.move(a, b, null, d, c, true);
                }, true);
                A('onSortUpdate', {
                    target: a[0],
                    index: M
                });
            }
        }

        function bi() {
            if (!aH) {
                clearTimeout(bI);
                if (e) {
                    a(h).trigger('touchstart');
                }
                if (aY) {
                    g.close($, aG);
                    aY = false;
                    $ = null;
                }
            }
        }

        function aZ() {
            clearTimeout(bD);
            bD = setTimeout(function() {
                aa = B[0].innerHeight || B.innerHeight();
                b7 = W ? B.offset().top : 0;
                if (R) {
                    F = u[0].offsetTop;
                    D = u[0].offsetHeight;
                    z.css({
                        top: F,
                        height: D
                    });
                }
            }, 200);
        }

        function bO() {
            if (a6 || !R) {
                var d, e = B.scrollTop(),
                    c = C.offset().top,
                    f = C[0].offsetHeight,
                    b = W ? B.offset().top : e;
                a('.mbsc-lv-gr-title', C).each(function(e, c) {
                    if (a(c).offset().top < b) {
                        d = c;
                    }
                });
                if (c < b && c + f > b) {
                    U.show().empty().append(a(d).clone());
                } else {
                    U.hide();
                }
            }
        }

        function bl(c, b) {
            if (a8(b.disabled, {
                    target: u[0],
                    index: w
                })) {
                a('.mbsc-ic-' + b.icon, z).addClass('mbsc-lv-ic-disabled');
            }
        }

        function a$(c, b, d, h) {
            var e, f = {
                icon: 'undo2',
                text: v.undoText,
                color: '#b1b1b1',
                action: function() {
                    g.undo();
                }
            };
            if (c.undo) {
                g.startActionTrack();
                if (a.isFunction(c.undo)) {
                    g.addUndoAction(function() {
                        c.undo.call(G, b, g, d);
                    });
                }
                ay = b.attr('data-ref');
            }
            e = c.action.call(G, {
                target: b[0],
                index: d
            }, g);
            if (c.undo) {
                g.endActionTrack();
                if (e !== false) {
                    ah(b, +b.attr('data-pos') < 0 ? -100 : 100, 200);
                }
                Q.height(D).insertAfter(b);
                b.css('top', F).addClass('mbsc-lv-item-undo');
                aP.hide();
                N.show();
                z.append(N);
                aK(f);
                bn(f, b, d, true, h);
            } else {
                aI(b, e, h);
            }
        }

        function bn(k, d, l, f, g) {
            var i, j;
            e = true;
            a(h).off('.mbsc-lv-conf').on('touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf', function(a) {
                a.preventDefault();
                if (f) {
                    bv(d);
                }
                aI(d, true, g);
            });
            if (!aq) {
                N.off('.mbsc-lv-conf').on('touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf', function(a) {
                    a.stopPropagation();
                    i = b(a, 'X');
                    j = b(a, 'Y');
                }).on('touchend.mbsc-lv-conf mouseup.mbsc-lv-conf', function(a) {
                    a.preventDefault();
                    if (a.type === 'touchend') {
                        c.preventClick();
                    }
                    if (Math.abs(b(a, 'X') - i) < 10 && Math.abs(b(a, 'Y') - j) < 10) {
                        a$(k, d, l, g);
                        if (f) {
                            aQ = null;
                            bv(d);
                        }
                    }
                });
            }
        }

        function bo() {
            ah(u, bJ + J * 100 / ae);
            aB = false;
        }

        function aI(b, d, c) {
            a(h).off('.mbsc-lv-conf');
            N.off('.mbsc-lv-conf');
            if (d !== false) {
                ah(b, 0, b.attr('data-pos') !== '0' ? 200 : 0, false, function() {
                    b4(b, c);
                    a9(b);
                });
            } else {
                b4(b, c);
            }
            e = false;
        }

        function ah(b, a, c, f, e) {
            a = Math.max(V == 'right' ? 0 : -100, Math.min(a, V == 'left' ? 0 : 100));
            S = b[0].style;
            b.attr('data-pos', a);
            S[d + 'Transform'] = 'translate3d(' + (f ? ae * a / 100 + 'px' : a + '%') + ',0,0)';
            S[d + 'Transition'] = l + 'transform ' + (c || 0) + 'ms';
            if (e) {
                X++;
                setTimeout(function() {
                    e();
                    X--;
                }, c);
            }
            E = a;
        }

        function br(e, a, b, c) {
            a = Math.max(az, Math.min(a, aA));
            S = e[0].style;
            S[d + 'Transform'] = 'translate3d(0,' + a + 'px,0)';
            S[d + 'Transition'] = l + 'transform ' + (b || 0) + 'ms ease-out';
            if (c) {
                X++;
                setTimeout(function() {
                    c();
                    X--;
                }, b);
            }
        }

        function b2() {
            clearTimeout(av);
            if (!aM && g.sortable) {
                aM = true;
                as.remove();
            }
        }

        function aK(a, c) {
            var b = a8(a.text, {
                target: u[0],
                index: w
            }) || '';
            if (a8(a.disabled, {
                    target: u[0],
                    index: w
                })) {
                z.addClass('mbsc-lv-ic-disabled');
            } else {
                z.removeClass('mbsc-lv-ic-disabled');
            }
            z.css('background-color', a.color || (a.percent === 0 ? bE(E) : p));
            N.attr('class', 'mbsc-lv-ic-c mbsc-lv-ic-' + (c ? 'move-' : '') + (E < 0 ? 'right' : 'left'));
            al.attr('class', ' mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-' + (a.icon || 'none'));
            aF.attr('class', 'mbsc-lv-ic-text' + (a.icon ? '' : ' mbsc-lv-ic-text-only') + (b ? '' : ' mbsc-lv-ic-only')).html(b || '&nbsp;');
            if (v.animateIcons) {
                if (aD) {
                    al.addClass('mbsc-lv-ic-v');
                } else {
                    setTimeout(function() {
                        al.addClass('mbsc-lv-ic-a');
                    }, 10);
                }
            }
        }

        function b4(a, b) {
            if (!R) {
                al.attr('class', 'mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none');
                z.attr('style', '').removeClass('mbsc-lv-stage-c-v');
                aF.html('');
            }
            z.removeClass('mbsc-lv-left mbsc-lv-right');
            if (a) {
                A('onSlideEnd', {
                    target: a[0],
                    index: w
                });
                if (b) {
                    b();
                }
            }
        }

        function bv(a) {
            a.css('top', '').removeClass('mbsc-lv-item-undo');
            if (aQ) {
                g.animate(Q, 'collapse', function() {
                    Q.remove();
                });
            } else {
                Q.remove();
            }
            b4();
            ay = null;
            aQ = null;
        }

        function a9(a) {
            S = a[0].style;
            S[d + 'Transform'] = '';
            S[d + 'Transition'] = '';
            S.top = '';
            a.removeClass('mbsc-lv-item-swiping');
        }

        function a8(b, c) {
            return a.isFunction(b) ? b.call(this, c, g) : b;
        }

        function by(b) {
            var c;
            if (!b.attr('data-ref')) {
                c = j++;
                b.attr('data-ref', c);
                O[c] = {
                    item: b,
                    child: b.children('ul,ol'),
                    parent: b.parent(),
                    ref: b.parent()[0] === G ? null : b.parent().parent().attr('data-ref')
                };
            }
            b.addClass('mbsc-lv-item');
            if (g.sortable.handle && b.attr('data-role') != 'list-divider' && !b.children('.mbsc-lv-handle-c').length) {
                b.append(bt);
            }
            if (v.enhance && !b.hasClass('mbsc-lv-item-enhanced')) {
                var d = b.attr('data-icon'),
                    e = b.find('img').eq(0).addClass('mbsc-lv-img');
                if (e.is(':first-child')) {
                    b.addClass('mbsc-lv-img-' + (v.rtl ? 'right' : 'left'));
                } else if (e.length) {
                    b.addClass('mbsc-lv-img-' + (v.rtl ? 'left' : 'right'));
                }
                b.addClass('mbsc-lv-item-enhanced').children().each(function(c, b) {
                    b = a(b);
                    if (b.is('p, h1, h2, h3, h4, h5, h6')) {
                        b.addClass('mbsc-lv-txt');
                    }
                });
                if (d) {
                    b.addClass('mbsc-lv-item-ic-' + (b.attr('data-icon-align') || (v.rtl ? 'right' : 'left'))).append('<div class="mbsc-lv-item-ic mbsc-ic mbsc-ic-' + d + '"></div');
                }
            }
        }

        function bz(b) {
            a('li', b).not('.mbsc-lv-item').each(function() {
                by(a(this));
            });
            a('li[data-role="list-divider"]', b).removeClass('mbsc-lv-item').addClass('mbsc-lv-gr-title');
            a('ul,ol', b).not('.mbsc-lv').addClass('mbsc-lv').prepend(aV).parent().addClass('mbsc-lv-parent').prepend(b9);
            a('.mbsc-lv-back', b).each(function() {
                a(this).attr('data-back', a(this).parent().parent().attr('data-ref'));
            });
        }

        function am(a) {
            return a.children('li').not('.mbsc-lv-back').not('.mbsc-lv-removed').not('.mbsc-lv-ph');
        }

        function ag(b) {
            if (typeof b !== 'object') {
                b = a('li[data-id="' + b + '"]', x);
            }
            return a(b);
        }

        function bN(c) {
            var b = 0,
                a = O[c.attr('data-ref')];
            while (a.ref) {
                b++;
                a = O[a.ref];
            }
            return b;
        }

        function aO(a, b) {
            a = a[b]();
            while (a.length && (!a.hasClass('mbsc-lv-item') || a.hasClass('mbsc-lv-ph') || a.hasClass('mbsc-lv-item-dragging'))) {
                if (!g.sortable.group && a.hasClass('mbsc-lv-gr-title')) {
                    return false;
                }
                a = a[b]();
            }
            return a;
        }

        function bE(a) {
            return (a > 0 ? y.right : y.left).color || p;
        }

        function _(a) {
            return c.isNumeric(a) ? a + '' : 0;
        }

        function bG(a, b) {
            return +(b < 0 ? _((a.actionsWidth || 0).right) || _(a.actionsWidth) || _(v.actionsWidth.right) || _(v.actionsWidth) : _((a.actionsWidth || 0).left) || _(a.actionsWidth) || _(v.actionsWidth.left) || _(v.actionsWidth));
        }

        function aj(c, e) {
            if (c) {
                var b = B.scrollTop(),
                    d = c.is('.mbsc-lv-item') ? c[0].offsetHeight : 0,
                    a = c.offset().top + (W ? b - b7 : 0);
                if (e) {
                    if (a < b || a > b + aa) {
                        B.scrollTop(a);
                    }
                } else {
                    if (a < b) {
                        B.scrollTop(a);
                    } else if (a + d > b + aa) {
                        B.scrollTop(a + d - aa / 2);
                    }
                }
            }
        }

        function bb(e, a, b, c, f) {
            var g = a.parent(),
                d = a.prev();
            c = c || i;
            if (d[0] === N[0]) {
                d = N.prev();
            }
            if (K[0] !== a[0]) {
                A('onNavStart', {
                    level: a4,
                    direction: e,
                    list: a[0]
                });
                b3.prepend(a.addClass('mbsc-lv-v mbsc-lv-sl-new'));
                aj(x);
                bK(b3, 'mbsc-lv-sl-' + e, function() {
                    K.removeClass('mbsc-lv-sl-curr');
                    a.removeClass('mbsc-lv-sl-new').addClass('mbsc-lv-sl-curr');
                    if (aJ && aJ.length) {
                        K.removeClass('mbsc-lv-v').insertAfter(aJ);
                    } else {
                        at.append(K.removeClass('mbsc-lv-v'));
                    }
                    aJ = d;
                    at = g;
                    K = a;
                    aj(b, f);
                    c.call(G, b);
                    A('onNavEnd', {
                        level: a4,
                        direction: e,
                        list: a[0]
                    });
                });
            } else {
                aj(b, f);
                c.call(G, b);
            }
        }

        function bc(a, b) {
            if (!X) {
                if (a.hasClass('mbsc-lv-parent')) {
                    a4++;
                    bb('r', O[a.attr('data-ref')].child, null, b);
                } else if (a.hasClass('mbsc-lv-back')) {
                    a4--;
                    bb('l', O[a.attr('data-back')].parent, O[a.attr('data-back')].item, b);
                }
            }
        }

        function bK(a, c, b) {
            var e;

            function d() {
                clearTimeout(e);
                X--;
                a.off(m, d).removeClass(c);
                b.call(G, a);
            }
            b = b || i;
            if (v.animation && c !== 'mbsc-lv-item-none') {
                X++;
                a.on(m, d).addClass(c);
                e = setTimeout(d, 500);
            } else {
                b.call(G, a);
            }
        }

        function bd(a, b) {
            var c, d = a.attr('data-ref');
            c = aE[d] = aE[d] || [];
            if (b) {
                c.push(b);
            }
            if (a.attr('data-action')) {
                return;
            }
            b = c.shift();
            a.attr('data-action', 1);
            b(function() {
                a.removeAttr('data-action');
                if (c.length) {
                    bd(a);
                } else {
                    delete aE[d];
                }
            });
        }

        function be(c, e, g) {
            var d, b;
            if (c && c.length) {
                d = 100 / (c.length + 2);
                a.each(c, function(h, a) {
                    if (a.key === f) {
                        a.key = b5++;
                    }
                    if (a.percent === f) {
                        a.percent = e * d * (h + 1);
                        if (g) {
                            b = t({}, a);
                            b.key = b5++;
                            b.percent = -d * (h + 1);
                            c.push(b);
                            ap[b.key] = b;
                        }
                    }
                    ap[a.key] = a;
                });
            }
        }
        k.Base.call(this, bB, bH, true);
        g.animate = function(a, b, c) {
            bK(a, 'mbsc-lv-item-' + b, c);
        };
        g.add = function(y, s, h, p, w, l) {
            var r, m, q, u, k, o, n = '',
                c = w === f ? C : ag(w),
                d = c,
                b = typeof s !== 'object' ? a('<li data-ref="' + j++ + '" data-id="' + y + '">' + s + '</li>') : s,
                t = b.attr('data-pos') < 0 ? 'left' : 'right',
                e = b.attr('data-ref');
            p = p || i;
            if (!e) {
                e = j++;
                b.addClass('mbsc-lv-item').attr('data-ref', e);
            }
            by(b);
            if (!l) {
                g.addUndoAction(function(a) {
                    if (u) {
                        g.navigate(c, function() {
                            d.remove();
                            c.removeClass('mbsc-lv-parent').children('.mbsc-lv-arr').remove();
                            k.child = c.children('ul,ol');
                            g.remove(b, null, a, true);
                        });
                    } else {
                        g.remove(b, null, a, true);
                    }
                }, true);
            }
            bd(b, function(i) {
                a9(b.css('top', '').removeClass('mbsc-lv-item-undo'));
                if (c.is('li')) {
                    o = c.attr('data-ref');
                    if (!c.children('ul,ol').length) {
                        u = true;
                        c.append('<ul></ul>');
                    }
                } else {
                    o = c.children('.mbsc-lv-back').attr('data-back');
                }
                k = O[o];
                if (k) {
                    if (!k.child.length) {
                        c.addClass('mbsc-lv-parent').prepend(b9);
                        d = c.children('ul,ol').prepend(aV).addClass('mbsc-lv');
                        k.child = d;
                        a('.mbsc-lv-back', c).attr('data-back', o);
                    } else {
                        d = k.child;
                    }
                }
                O[e] = {
                    item: b,
                    child: b.children('ul,ol'),
                    parent: d,
                    ref: o
                };
                q = am(d);
                m = q.length;
                if (h === f || h === null) {
                    h = m;
                }
                if (l) {
                    n = 'mbsc-lv-item-new-' + (l ? t : '');
                }
                bz(b.addClass(n));
                if (h !== false) {
                    if (!m) {
                        r = a('.mbsc-lv-back', d);
                        if (r.length) {
                            b.insertAfter(r);
                        } else {
                            d.append(b);
                        }
                    } else if (h < m) {
                        b.insertBefore(q.eq(h));
                    } else {
                        b.insertAfter(q.eq(m - 1));
                    }
                }
                if (d.hasClass('mbsc-lv-v')) {
                    g.animate(b.height(b[0].offsetHeight), l && ay === e ? 'none' : 'expand', function(a) {
                        g.animate(a.height(''), l ? 'add-' + t : 'pop-in', function(a) {
                            p.call(G, a.removeClass(n));
                            i();
                        });
                    });
                } else {
                    p.call(G, b.removeClass(n));
                    i();
                }
                x.trigger('mbsc-enhance', [{
                    theme: v.theme,
                    lang: v.lang
                }]);
                A('onItemAdd', {
                    target: b[0]
                });
            });
        };
        g.swipe = function(a, d, b, e, g) {
            a = ag(a);
            u = a;
            aq = e;
            a7 = true;
            R = true;
            b = b === f ? 300 : b;
            J = d > 0 ? 1 : -1;
            bF();
            bL();
            ah(a, d, b);
            clearTimeout(bu);
            clearInterval(aS);
            aS = setInterval(function() {
                E = c.getPosition(a) / ae * 100;
                aW();
            }, 10);
            bu = setTimeout(function() {
                clearInterval(aS);
                E = d;
                aW();
                bf(g);
                aq = false;
                a7 = false;
                R = false;
            }, b);
        };
        g.openStage = function(b, a, c, d) {
            if (ap[a]) {
                g.swipe(b, ap[a].percent, c, d);
            }
        };
        g.openActions = function(a, c, d, e) {
            a = ag(a);
            var b = bG(af[a.attr('data-type') || 'defaults'], c == 'left' ? -1 : 1);
            g.swipe(a, c == 'left' ? -b : b, d, e);
        };
        g.close = function(a, b) {
            g.swipe(a, 0, b);
        };
        g.remove = function(a, d, b, e) {
            var f, c;
            b = b || i;
            a = ag(a);
            if (a.length) {
                c = a.parent();
                f = am(c).index(a);
                if (!e) {
                    if (a.attr('data-ref') === ay) {
                        aQ = true;
                    }
                    g.addUndoAction(function(b) {
                        g.add(null, a, f, b, c, true);
                    }, true);
                }
                bd(a, function(f) {
                    d = d || a.attr('data-pos') < 0 ? 'left' : 'right';
                    if (c.hasClass('mbsc-lv-v')) {
                        g.animate(a.addClass('mbsc-lv-removed'), e ? 'pop-out' : 'remove-' + d, function(a) {
                            g.animate(a.height(a[0].offsetHeight), 'collapse', function(a) {
                                a9(a.height('').removeClass('mbsc-lv-removed'));
                                if (b.call(G, a) !== false) {
                                    a.remove();
                                }
                                f();
                            });
                        });
                    } else {
                        if (b.call(G, a) !== false) {
                            a.remove();
                        }
                        f();
                    }
                    A('onItemRemove', {
                        target: a[0]
                    });
                });
            }
        };
        g.move = function(a, c, d, e, f, b) {
            a = ag(a);
            if (!b) {
                g.startActionTrack();
            }
            z.append(N);
            g.remove(a, d, null, b);
            g.add(null, a, c, e, f, b);
            if (!b) {
                g.endActionTrack();
            }
        };
        g.navigate = function(a, d) {
            var b, c;
            a = ag(a);
            b = O[a.attr('data-ref')];
            c = bN(a);
            if (b) {
                bb(c >= a4 ? 'r' : 'l', b.parent, a, d, true);
                a4 = c;
            }
        };
        g.init = function(q) {
            var m, o, h, p = C.find('ul,ol').length ? 'left' : 'right',
                d = 0,
                i = '',
                k = '',
                l = '';
            g._init(q);
            h = v.sort || v.sortable;
            if (h === 'group') {
                h = {
                    group: false,
                    multiLevel: true
                };
            }
            if (h === true) {
                h = {
                    group: true,
                    multiLevel: true,
                    handle: v.sortHandle
                };
            }
            if (h && h.handle === f) {
                h.handle = v.sortHandle;
            }
            g.sortable = h || false;
            m = 'mbsc-lv-cont mbsc-lv-' + v.theme + (v.rtl ? ' mbsc-lv-rtl' : '') + (v.baseTheme ? ' mbsc-lv-' + v.baseTheme : '') + (v.animateIcons ? ' mbsc-lv-ic-anim' : '') + (v.striped ? ' mbsc-lv-alt-row ' : '') + (v.fixedHeader ? ' mbsc-lv-has-fixed-header ' : '');
            if (!x) {
                i += '<div class="mbsc-lv-multi-c"></div>';
                i += '<div class="mbsc-lv-ic-c"><div class="mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"></div><div class="mbsc-lv-ic-text"></div></div>';
                C.addClass('mbsc-lv mbsc-lv-v mbsc-lv-root').show();
                z = a('<div class="mbsc-lv-stage-c">' + i + '</div>');
                N = a('.mbsc-lv-ic-c', z);
                aP = a('.mbsc-lv-multi-c', z);
                al = a('.mbsc-lv-ic-s', z);
                aF = a('.mbsc-lv-ic-text', z);
                Q = a('<li class="mbsc-lv-item mbsc-lv-ph"></li>');
                as = a('<div class="mbsc-lv-fill-item"></div>');
                x = a('<div class="' + m + '"><ul class="mbsc-lv mbsc-lv-dummy"></ul><div class="mbsc-lv-sl-c"></div></div>');
                W = v.context !== 'body';
                B = a(W ? v.context : n);
                bq = a('.mbsc-lv-dummy', x);
                x.insertAfter(C);
                B.on('orientationchange resize', aZ);
                aZ();
                x.on('touchstart mousedown', '.mbsc-lv-item', bP).on('touchmove', '.mbsc-lv-item', aU).on('touchend touchcancel', '.mbsc-lv-item', ao);
                if (G.addEventListener) {
                    G.addEventListener('click', function(a) {
                        if (aL) {
                            a.stopPropagation();
                            a.preventDefault();
                            aL = false;
                        }
                    }, true);
                }
                x.on('touchstart mousedown', '.mbsc-lv-ic-m', function(a) {
                    if (!aq) {
                        a.stopPropagation();
                        a.preventDefault();
                    }
                    ax = b(a, 'X');
                    au = b(a, 'Y');
                }).on('touchend mouseup', '.mbsc-lv-ic-m', function(d) {
                    if (!aq) {
                        if (d.type === 'touchend') {
                            c.preventClick();
                        }
                        if (e && !a(this).hasClass('mbsc-lv-ic-disabled') && Math.abs(b(d, 'X') - ax) < 10 && Math.abs(b(d, 'Y') - au) < 10) {
                            a$((E < 0 ? y.rightMenu : y.leftMenu)[a(this).index()], bx, bw);
                        }
                    }
                });
                b3 = a('.mbsc-lv-sl-c', x).append(C.addClass('mbsc-lv-sl-curr')).attr('data-ref', j++);
                K = C;
                at = x;
            } else {
                x.attr('class', m);
                if (g.sortable.handle) {
                    a('.mbsc-lv-handle-c', C).remove();
                }
                a('li:not(.mbsc-lv-back)', C).removeClass('mbsc-lv-item');
            }
            aV = '<li class="mbsc-lv-item mbsc-lv-back">' + v.backText + '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + v.leftArrowClass + '"></div></li>';
            b9 = '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + v.rightArrowClass + '"></div>';
            if (g.sortable.handle) {
                aR = g.sortable.handle === true ? p : g.sortable.handle;
                bt = '<div class="mbsc-lv-handle-c mbsc-lv-item-h-' + aR + ' mbsc-lv-handle"><div class="' + v.handleClass + ' mbsc-lv-handle-bar-c mbsc-lv-handle">' + v.handleMarkup + '</div></div>';
                x.addClass('mbsc-lv-handle-' + aR);
            }
            bz(C);
            b5 = 0;
            af = v.itemGroups || {};
            af.defaults = {
                swipeleft: v.swipeleft,
                swiperight: v.swiperight,
                stages: v.stages,
                actions: v.actions,
                actionsWidth: v.actionsWidth
            };
            a.each(af, function(c, b) {
                b.swipe = b.swipe !== f ? b.swipe : v.swipe;
                b.stages = b.stages || [];
                be(b.stages, 1, true);
                be(b.stages.left, 1);
                be(b.stages.right, -1);
                if (b.stages.left || b.stages.right) {
                    b.stages = [].concat(b.stages.left || [], b.stages.right || []);
                }
                aw = false;
                if (!b.stages.length) {
                    if (b.swipeleft) {
                        b.stages.push({
                            percent: -30,
                            action: b.swipeleft
                        });
                    }
                    if (b.swiperight) {
                        b.stages.push({
                            percent: 30,
                            action: b.swiperight
                        });
                    }
                }
                a.each(b.stages, function(b, a) {
                    if (a.percent === 0) {
                        aw = true;
                        return false;
                    }
                });
                if (!aw) {
                    b.stages.push({
                        percent: 0
                    });
                }
                b.stages.sort(function(a, b) {
                    return a.percent - b.percent;
                });
                a.each(b.stages, function(a, c) {
                    if (c.percent === 0) {
                        b.start = a;
                        return false;
                    }
                });
                if (aw) {
                    b.left = b.right = b.stages[b.start];
                } else {
                    b.left = b.stages[b.start - 1] || {};
                    b.right = b.stages[b.start + 1] || {};
                }
                if (b.actions) {
                    b.leftMenu = b.actions.left || b.actions;
                    b.rightMenu = b.actions.right || b.leftMenu;
                    k = '';
                    l = '';
                    for (d = 0; d < b.leftMenu.length; d++) {
                        k += '<div ' + (b.leftMenu[d].color ? 'style="background-color: ' + b.leftMenu[d].color + '"' : '') + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + b.leftMenu[d].icon + '">' + (b.leftMenu[d].text || '') + '</div>';
                    }
                    for (d = 0; d < b.rightMenu.length; ++d) {
                        l += '<div ' + (b.rightMenu[d].color ? 'style="background-color: ' + b.rightMenu[d].color + '"' : '') + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + b.rightMenu[d].icon + '">' + (b.rightMenu[d].text || '') + '</div>';
                    }
                    if (b.actions.left) {
                        b.swipe = b.actions.right ? b.swipe : 'right';
                    }
                    if (b.actions.right) {
                        b.swipe = b.actions.left ? b.swipe : 'left';
                    }
                    b.icons = '<div class="mbsc-lv-multi mbsc-lv-multi-ic-left">' + k + '</div><div class="mbsc-lv-multi mbsc-lv-multi-ic-right">' + l + '</div>';
                }
            });
            if (v.fixedHeader) {
                o = 'mbsc-lv-fixed-header' + (W ? ' mbsc-lv-fixed-header-ctx mbsc-lv-' + v.theme + (v.baseTheme ? ' mbsc-lv-' + v.baseTheme : '') : '');
                if (!U) {
                    U = a('<div class="' + o + '"></div>');
                    if (W) {
                        B.before(U);
                    } else {
                        x.prepend(U);
                    }
                    b1 = c.throttle(bO, 200);
                    B.on('scroll touchmove', b1);
                } else {
                    U.attr('class', o);
                }
            }
            if (v.hover) {
                if (!aG) {
                    x.on('mouseover.mbsc-lv', '.mbsc-lv-item', function() {
                        if (!$ || $[0] != this) {
                            bi();
                            $ = a(this);
                            if (af[$.attr('data-type') || 'defaults'].actions) {
                                bI = setTimeout(function() {
                                    if (!aH) {
                                        aY = true;
                                        g.openActions($, bm, aG, false);
                                    } else {
                                        $ = null;
                                    }
                                }, bk);
                            }
                        }
                    }).on('mouseleave.mbsc-lv', bi);
                }
                aG = v.hover.time || 200;
                bk = v.hover.timeout || 200;
                bm = v.hover.direction || v.hover || 'right';
            }
            if (C.is('[mbsc-enhance]')) {
                bp = true;
                C.removeAttr('mbsc-enhance');
                x.attr('mbsc-enhance', '');
            }
            x.trigger('mbsc-enhance', [{
                theme: v.theme,
                lang: v.lang
            }]);
            A('onInit');
        };
        g.destroy = function() {
            at.append(K);
            if (W && U) {
                U.remove();
            }
            if (bp) {
                C.attr('mbsc-enhance', '');
            }
            x.find('.mbsc-lv-txt,.mbsc-lv-img').removeClass('mbsc-lv-txt mbsc-lv-img');
            x.find('ul,ol').removeClass('mbsc-lv mbsc-lv-v mbsc-lv-root mbsc-lv-sl-curr').find('li').removeClass('mbsc-lv-gr-title mbsc-lv-item mbsc-lv-item-enhanced mbsc-lv-parent mbsc-lv-img-left mbsc-lv-img-right mbsc-lv-item-ic-left mbsc-lv-item-ic-right').removeAttr('data-ref');
            a('.mbsc-lv-back,.mbsc-lv-handle-c,.mbsc-lv-arr,.mbsc-lv-item-ic', x).remove();
            C.insertAfter(x);
            x.remove();
            z.remove();
            B.off('scroll touchmove', b1).off('orientationchange resize', aZ);
            g._destroy();
        };
        var aN, a_ = [],
            a5 = [],
            aC = [],
            ad = 0;
        g.startActionTrack = function() {
            if (!ad) {
                aC = [];
            }
            ad++;
        };
        g.endActionTrack = function() {
            ad--;
            if (!ad) {
                a5.push(aC);
            }
        };
        g.addUndoAction = function(b, c) {
            var a = {
                action: b,
                async: c
            };
            if (ad) {
                aC.push(a);
            } else {
                a5.push([a]);
                if (a5.length > v.undoLimit) {
                    a5.shift();
                }
            }
        };
        g.undo = function() {
            var a, b, c;

            function d() {
                if (b < 0) {
                    aN = false;
                    e();
                } else {
                    a = c[b];
                    b--;
                    if (a.async) {
                        a.action(d);
                    } else {
                        a.action();
                        d();
                    }
                }
            }

            function e() {
                c = a_.shift();
                if (c) {
                    aN = true;
                    b = c.length - 1;
                    d();
                }
            }
            if (a5.length) {
                a_.push(a5.pop());
            }
            if (!aN) {
                e();
            }
        };
        v = g.settings;
        A = g.trigger;
        g.init(bH);
    };
    k.ListView.prototype = {
        _class: 'listview',
        _hasDef: true,
        _hasTheme: true,
        _hasLang: true,
        _defaults: {
            context: 'body',
            actionsWidth: 90,
            sortDelay: 250,
            undoLimit: 10,
            swipe: true,
            quickSwipe: true,
            animateIcons: true,
            animation: true,
            revert: true,
            vibrate: true,
            handleClass: '',
            handleMarkup: '<div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div>',
            leftArrowClass: 'mbsc-ic-arrow-left4',
            rightArrowClass: 'mbsc-ic-arrow-right4',
            backText: 'Back',
            undoText: 'Undo',
            stages: []
        }
    };
    g.themes.listview.mobiscroll = {
        leftArrowClass: 'mbsc-ic-arrow-left5',
        rightArrowClass: 'mbsc-ic-arrow-right5'
    };
    g.presetShort('listview', 'ListView');
}(window, document));
(function() {
    mobiscroll.themes.listview.ios = {
        leftArrowClass: 'mbsc-ic-ion-ios7-arrow-back',
        rightArrowClass: 'mbsc-ic-ion-ios7-arrow-forward'
    };
}());
(function() {
    mobiscroll.themes.listview.jqm = {
        handleClass: 'ui-btn ui-icon-bars ui-btn-up-c ui-btn-icon-notext ui-icon-shadow ui-corner-all ui-btn-corner-all',
        handleMarkup: '<span class="ui-btn-inner mbsc-lv-handle"><span class="ui-icon ui-icon-bars ui-icon-shadow mbsc-lv-handle">&nbsp;</span></span>',
        leftArrowClass: 'ui-btn-icon-left ui-icon-carat-l',
        rightArrowClass: 'ui-btn-icon-right ui-icon-carat-r',
        onInit: function() {
            $(this).closest('.mbsc-lv-cont').addClass($(this).data('inset') ? 'mbsc-lv-jqm-inset' : '').find('.mbsc-lv-dummy, .mbsc-lv-fixed-header').addClass('ui-listview');
            $('ul,ol', this).listview('refresh');
        },
        onItemAdd: function(b) {
            var a = $(b.target).parent();
            if (a.hasClass('ui-listview')) {
                a.listview('refresh');
            } else {
                a.listview();
            }
        },
        onSortUpdate: function(a) {
            $(a.target).parent().listview('refresh');
        }
    };
}());
(function() {
    var a = mobiscroll,
        b = a.$;
    a.themes.listview.material = {
        leftArrowClass: 'mbsc-ic-material-keyboard-arrow-left',
        rightArrowClass: 'mbsc-ic-material-keyboard-arrow-right',
        onItemActivate: function(c) {
            a.themes.material.addRipple(b(c.target), c.domEvent);
        },
        onItemDeactivate: function() {
            a.themes.material.removeRipple();
        },
        onSlideStart: function(a) {
            b('.mbsc-ripple', a.target).remove();
        },
        onSortStart: function(a) {
            b('.mbsc-ripple', a.target).remove();
        }
    };
}());
(function(f, g, d) {
    var b = mobiscroll,
        a = b.$,
        e = a.extend,
        c = b.classes;
    c.MenuStrip = function(D, I) {
        var m, k, y, B, j, H, G, n, q, F, E, p, s, o, x, g, t, l, v = 1000,
            h = this,
            i = a(D);

        function z(a) {
            clearTimeout(E);
            E = setTimeout(function() {
                C(a.type !== 'load');
            }, 200);
        }

        function w(b, c) {
            if (!b.length) {
                return;
            }
            var g = b.offset().left,
                e = b[0].offsetLeft,
                f = b[0].offsetWidth,
                h = k.offset().left;
            m = b;
            if (c === d) {
                c = !q;
            }
            if (p && c) {
                if (q) {
                    if (b.attr('data-selected')) {
                        u(b);
                    } else {
                        A(b);
                    }
                } else {
                    u(a('.mbsc-ms-item-sel', i));
                    A(b);
                }
            }
            if (x == 'a') {
                if (g < h) {
                    o.scroll(-e, v, true);
                } else if (g + f > h + j) {
                    o.scroll(j - e - f, v, true);
                }
            } else {
                o.scroll(j / 2 - e - f / 2, v, true);
            }
            if (c) {
                l('onItemTap', {
                    target: b[0]
                });
            }
        }

        function A(a) {
            a.addClass(s).attr('data-selected', 'true').attr('aria-selected', 'true');
        }

        function u(a) {
            a.removeClass(s).removeAttr('data-selected').removeAttr('aria-selected');
        }

        function r(b) {
            if (typeof b !== 'object') {
                b = i.children('[data-id="' + b + '"]');
            }
            return a(b);
        }

        function J() {
            l('onMarkupInit');
            i.children().each(function(j) {
                var f, c, b = a(this),
                    d = p && b.attr('data-selected') == 'true',
                    i = b.attr('data-disabled') == 'true',
                    e = b.attr('data-icon');
                if (j === 0) {
                    y = b;
                }
                if (p && !q && d) {
                    m = b;
                }
                if (b.children().length !== 1) {
                    a('<span></span>').append(b.contents()).appendTo(b);
                }
                c = b.children().eq(0);
                if (e) {
                    H = true;
                }
                if (c.hasClass('mbsc-ms-item-i')) {
                    return;
                }
                if (c.html()) {
                    G = true;
                }
                f = a('<span class="mbsc-ms-item-i-t"><span class="mbsc-ms-item-i-c"></span></span>');
                f.find('.mbsc-ms-item-i-c').append(c.contents());
                c.addClass('mbsc-ms-item-i' + (e ? ' mbsc-ms-ic mbsc-ic mbsc-ic-' + e : '')).append(f);
                b.attr('data-role', 'button').attr('aria-selected', d ? 'true' : null).attr('aria-disabled', i ? 'true' : null).addClass('mbsc-ms-item mbsc-btn-e ' + (g.itemClass || '') + (d ? s : '') + (i ? ' mbsc-btn-d ' + (g.disabledClass || '') : ''));
            });
            if (H) {
                k.addClass('mbsc-ms-icons');
            }
            if (G) {
                k.addClass('mbsc-ms-txt');
            }
        }

        function C(d, f) {
            var a = g.itemWidth,
                c = g.layout;
            h.contWidth = j = k.width();
            if (d && F === j || !j) {
                return;
            }
            F = j;
            if (b.util.isNumeric(c)) {
                n = j ? j / c : a;
                if (n < a) {
                    c = 'liquid';
                }
            }
            if (a) {
                if (c == 'liquid') {
                    n = j ? j / Math.min(Math.floor(j / a), i.children().length) : a;
                } else if (c == 'fixed') {
                    n = a;
                }
            }
            if (n) {
                i.children().css('width', n + 'px');
            }
            i.contents().filter(function() {
                return this.nodeType == 3 && !/\S/.test(this.nodeValue);
            }).remove();
            h.totalWidth = t = i.width();
            e(o.settings, {
                contSize: j,
                maxSnapScroll: g.paging ? 1 : false,
                maxScroll: 0,
                minScroll: t > j ? j - t : 0,
                snap: g.paging ? j : g.snap ? n || '.mbsc-ms-item' : false,
                elastic: t > j ? n || j : false
            });
            o.refresh(f);
        }
        c.Base.call(this, D, I, true);
        h.navigate = function(a, b) {
            w(r(a), b);
        };
        h.next = function(b) {
            var a = m ? m.next() : y;
            if (a.length) {
                m = a;
                w(m, b);
            }
        };
        h.prev = function(b) {
            var a = m ? m.prev() : y;
            if (a.length) {
                m = a;
                w(m, b);
            }
        };
        h.select = function(b) {
            if (!q) {
                u(a('.mbsc-ms-item-sel', i));
            }
            A(r(b));
        };
        h.deselect = function(a) {
            u(r(a));
        };
        h.enable = function(a) {
            r(a).removeClass('mbsc-btn-d').removeAttr('data-disabled').removeAttr('aria-disabled');
        };
        h.disable = function(a) {
            r(a).addClass('mbsc-btn-d').attr('data-disabled', 'true').attr('aria-disabled', 'true');
        };
        h.refresh = h.position = function(a) {
            i.height('');
            J();
            C(false, a);
            i.height(i.height());
        };
        h.init = function(e) {
            var c;
            h._init(e);
            B = a(g.context == 'body' ? f : g.context);
            if (g.type == 'tabs') {
                g.select = g.select || 'single';
                g.variant = g.variant || 'b';
            } else if (g.type == 'options') {
                g.select = g.select || 'multiple';
                g.variant = g.variant || 'a';
            } else if (g.type == 'menu') {
                g.select = g.select || 'off';
                g.variant = g.variant || 'a';
            }
            if (g.itemWidth && g.snap === d) {
                g.snap = true;
            }
            x = g.variant;
            p = g.select != 'off';
            q = g.select == 'multiple';
            s = ' mbsc-ms-item-sel ' + (g.activeClass || '');
            c = 'mbsc-ms-c' + ' mbsc-ms-' + x + ' mbsc-ms-' + g.display + ' mbsc-' + g.theme + ' ' + (g.baseTheme ? ' mbsc-' + g.baseTheme : '') + ' ' + (g.cssClass || '') + ' ' + (g.wrapperClass || '') + (g.rtl ? ' mbsc-ms-rtl' : ' mbsc-ms-ltr') + (g.itemWidth ? ' mbsc-ms-hasw' : '') + (g.context == 'body' ? '' : ' mbsc-ms-ctx') + (p ? '' : ' mbsc-ms-nosel');
            if (!k) {
                k = a('<div class="' + c + '"><div class="mbsc-ms-sc"></div></div>').insertAfter(i);
                k.find('.mbsc-ms-sc').append(i);
                o = new b.classes.ScrollView(k[0], {
                    axis: 'X',
                    contSize: 0,
                    maxScroll: 0,
                    maxSnapScroll: 1,
                    minScroll: 0,
                    snap: 1,
                    elastic: 1,
                    rtl: g.rtl,
                    mousewheel: g.mousewheel,
                    onBtnTap: function(b) {
                        w(a(b.target), true);
                    },
                    onGestureStart: function(a) {
                        l('onGestureStart', a);
                    },
                    onGestureEnd: function(a) {
                        l('onGestureEnd', a);
                    },
                    onMove: function(a) {
                        l('onMove', a);
                    },
                    onAnimationStart: function(a) {
                        l('onAnimationStart', a);
                    },
                    onAnimationEnd: function(a) {
                        l('onAnimationEnd', a);
                    }
                });
            } else {
                i.height('');
                k.attr('class', c);
            }
            i.css('display', '').addClass('mbsc-ms ' + (g.groupClass || ''));
            J();
            l('onMarkupReady', {
                target: k[0]
            });
            i.height(i.height());
            C();
            k.find('img').on('load', z);
            B.on('orientationchange resize', z);
            l('onInit');
        };
        h.destroy = function() {
            B.off('orientationchange resize', z);
            i.height('').insertAfter(k).find('.mbsc-ms-item').width('');
            k.remove();
            o.destroy();
            h._destroy();
        };
        g = h.settings;
        l = h.trigger;
        h.init(I);
    };
    c.MenuStrip.prototype = {
        _class: 'menustrip',
        _hasDef: true,
        _hasTheme: true,
        _defaults: {
            context: 'body',
            type: 'options',
            display: 'inline',
            layout: 'liquid'
        }
    };
    b.presetShort('menustrip', 'MenuStrip');
}(window, document));
(function() {
    mobiscroll.themes.menustrip['android-holo'] = {};
}());
(function() {
    mobiscroll.themes.menustrip.bootstrap = {
        wrapperClass: 'popover panel panel-default',
        groupClass: 'btn-group',
        activeClass: 'btn-primary',
        disabledClass: 'disabled',
        itemClass: 'btn btn-default'
    };
}());
(function() {
    mobiscroll.themes.menustrip.ios = {};
}());
(function() {
    var a = mobiscroll.$,
        b = a.mobile && a.mobile.version && a.mobile.version.match(/1\.4/);
    mobiscroll.themes.menustrip.jqm = {
        activeClass: 'ui-btn-active',
        disabledClass: 'ui-state-disabled',
        onThemeLoad: function(d) {
            var a = d.settings,
                c = a.jqmSwatch || (b ? 'a' : 'c');
            a.itemClass = 'ui-btn ui-btn-up-' + c;
            a.wrapperClass = 'ui-bar-' + c;
        }
    };
}());
(function() {
    var a = mobiscroll.$;
    mobiscroll.themes.menustrip.material = {
        onInit: function() {
            mobiscroll.themes.material.initRipple(a(this), '.mbsc-ms-item', 'mbsc-btn-d', 'mbsc-btn-nhl');
        },
        onMarkupInit: function() {
            a('.mbsc-ripple', this).remove();
        }
    };
}());
(function() {
    mobiscroll.themes.menustrip.wp = {};
}());
(function(b) {
    var c = mobiscroll,
        a = c.$,
        d = {
            batch: 50,
            min: 0,
            max: 100,
            defaultUnit: '',
            units: null,
            unitNames: null,
            invalid: [],
            sign: false,
            step: 0.05,
            scale: 2,
            convert: function(a) {
                return a;
            },
            signText: '&nbsp;',
            wholeText: 'Whole',
            fractionText: 'Fraction',
            unitText: 'Unit'
        };
    c.presets.scroller.measurement = function(u) {
        var V = a.extend({}, u.settings),
            c = a.extend(u.settings, d, V),
            D = {},
            z = [
                []
            ],
            q = {},
            w = {},
            C = {},
            J = [],
            f = c.sign,
            m = c.units && c.units.length,
            t = m ? c.defaultUnit || c.units[0] : '',
            B = [],
            g = c.step < 1,
            j = c.step > 1 ? c.step : 1,
            I = g ? Math.max(c.scale, (c.step + '').split('.')[1].length) : 1,
            y = Math.pow(10, I),
            p = Math.round(g ? c.step * y : c.step),
            S, h, v, Q = -1,
            s, i, A, o, n, k, r, O, L, F = 0,
            G = 0,
            H, e, l = 0;

        function U(a) {
            return Math.max(k, Math.min(r, g ? a < 0 ? Math.ceil(a) : Math.floor(a) : M(Math.round(a - F), p) + F));
        }

        function K(a) {
            return g ? M((Math.abs(a) - Math.abs(U(a))) * y - G, p) + G : 0;
        }

        function E(a) {
            var b = U(a),
                c = K(a),
                d = a < 0 ? '-' : '+';
            if (c >= y) {
                if (a < 0) {
                    b--;
                } else {
                    b++;
                }
                c = 0;
            }
            return [d, b, c];
        }

        function R(a) {
            var b = +a[i],
                c = g ? a[s] / y * (b < 0 ? -1 : 1) : 0;
            return (f && a[0] == '-' ? -1 : 1) * (b + c);
        }

        function M(b, a) {
            return Math.round(b / a) * a;
        }

        function W(a, b) {
            a = a + '';
            while (a.length < b) {
                a = '0' + a;
            }
            return a;
        }

        function x(a, b, d) {
            if (b === d || !c.convert) {
                return a;
            }
            return c.convert.call(this, a, b, d);
        }

        function P(a, b, c) {
            a = a > c ? c : a;
            a = a < b ? b : a;
            return a;
        }

        function N(d) {
            var a, b;
            o = x(c.min, t, d);
            n = x(c.max, t, d);
            if (g) {
                k = o < 0 ? Math.ceil(o) : Math.floor(o);
                r = n < 0 ? Math.ceil(n) : Math.floor(n);
                O = K(o);
                L = K(n);
            } else {
                k = Math.round(o);
                r = Math.round(n);
                r = k + Math.floor((r - k) / p) * p;
                F = k % p;
            }
            a = k;
            b = r;
            if (f) {
                b = Math.abs(a) > Math.abs(b) ? Math.abs(a) : Math.abs(b);
                a = a < 0 ? 0 : a;
            }
            w.min = a < 0 ? Math.ceil(a / j) : Math.floor(a / j);
            w.max = b < 0 ? Math.ceil(b / j) : Math.floor(b / j);
        }

        function T(a) {
            return R(a).toFixed(g ? I : 0) + (m ? ' ' + B[a[A]] : '');
        }
        u.setVal = function(b, c, d, e, f) {
            u._setVal(a.isArray(b) ? T(b) : b, c, d, e, f);
        };
        if (c.units) {
            for (e = 0; e < c.units.length; ++e) {
                H = c.units[e];
                B.push(c.unitNames ? c.unitNames[H] || H : H);
            }
        }
        if (f) {
            f = false;
            if (m) {
                for (e = 0; e < c.units.length; e++) {
                    if (x(c.min, t, c.units[e]) < 0) {
                        f = true;
                    }
                }
            } else {
                f = c.min < 0;
            }
        }
        if (f) {
            z[0].push({
                data: ['-', '+'],
                label: c.signText
            });
            Q = l++;
        }
        w = {
            label: c.wholeText,
            data: function(a) {
                return k % j + a * j;
            },
            getIndex: function(a) {
                return Math.round((a - k % j) / j);
            }
        };
        z[0].push(w);
        i = l++;
        N(t);
        if (g) {
            z[0].push(C);
            C.data = [];
            C.label = c.fractionText;
            for (e = G; e < y; e += p) {
                J.push(e);
                C.data.push({
                    value: e,
                    display: '.' + W(e, I)
                });
            }
            s = l++;
            S = Math.ceil(100 / p);
            if (c.invalid && c.invalid.length) {
                a.each(c.invalid, function(c, b) {
                    var a = b > 0 ? Math.floor(b) : Math.ceil(b);
                    if (a === 0) {
                        a = b <= 0 ? -0.001 : 0.001;
                    }
                    q[a] = (q[a] || 0) + 1;
                    if (b === 0) {
                        a = 0.001;
                        q[a] = (q[a] || 0) + 1;
                    }
                });
                a.each(q, function(a, b) {
                    if (b < S) {
                        delete q[a];
                    } else {
                        q[a] = a;
                    }
                });
            }
        }
        if (m) {
            D = {
                data: [],
                label: c.unitText,
                circular: false
            };
            for (e = 0; e < c.units.length; e++) {
                D.data.push({
                    value: e,
                    display: B[e]
                });
            }
            z[0].push(D);
        }
        A = l;
        return {
            wheels: z,
            minWidth: f && g ? 70 : 80,
            showLabel: false,
            formatValue: T,
            parseValue: function(l) {
                var q = (typeof l === 'number' ? l + '' : l) || c.defaultValue,
                    p = (q + '').split(' '),
                    d = +p[0],
                    j = [],
                    e, b = '';
                if (m) {
                    b = a.inArray(p[1], B);
                    b = b == -1 ? a.inArray(t, c.units) : b;
                    b = b == -1 ? 0 : b;
                }
                v = m ? c.units[b] : '';
                N(v);
                d = isNaN(d) ? 0 : d;
                d = P(d, o, n);
                e = E(d);
                e[1] = P(e[1], k, r);
                h = d;
                if (f) {
                    j[0] = e[0];
                    e[1] = Math.abs(e[1]);
                }
                j[i] = e[1];
                if (g) {
                    j[s] = e[2];
                }
                if (m) {
                    j[A] = b;
                }
                return j;
            },
            onCancel: function() {
                h = b;
            },
            validate: function(H) {
                var C, e, K, D, G, d = H.values,
                    B = H.index,
                    S = H.direction,
                    F = {},
                    y = [],
                    I = {},
                    z = m ? c.units[d[A]] : '';
                if (f && B === 0) {
                    h = Math.abs(h) * (d[0] == '-' ? -1 : 1);
                }
                if (B === i || B === s && g || h === b || B === b) {
                    h = R(d);
                    v = z;
                }
                if (m && (B === A && v !== z) || B === b) {
                    N(z);
                    h = x(h, v, z);
                    v = z;
                    e = E(h);
                    if (B !== b) {
                        I[i] = w;
                        u.changeWheel(I);
                    }
                    if (f) {
                        d[0] = e[0];
                    }
                }
                y[i] = [];
                if (f) {
                    y[0] = [];
                    if (o > 0) {
                        y[0].push('-');
                        d[0] = '+';
                    }
                    if (n < 0) {
                        y[0].push('+');
                        d[0] = '-';
                    }
                    G = Math.abs(d[0] == '-' ? k : r);
                    for (l = G + j; l < G + 20 * j; l += j) {
                        y[i].push(l);
                        F[l] = true;
                    }
                }
                h = P(h, o, n);
                e = E(h);
                K = f ? Math.abs(e[1]) : e[1];
                C = f ? d[0] == '-' : h < 0;
                d[i] = K;
                if (C) {
                    e[0] = '-';
                }
                if (g) {
                    d[s] = e[2];
                }
                a.each(g ? q : c.invalid, function(b, a) {
                    if (f && C) {
                        if (a <= 0) {
                            a = Math.abs(a);
                        } else {
                            return;
                        }
                    }
                    a = M(x(a, t, z), g ? 1 : p);
                    F[a] = true;
                    y[i].push(a);
                });
                d[i] = u.getValidValue(i, K, S, F);
                e[1] = d[i] * (f && C ? -1 : 1);
                if (g) {
                    y[s] = [];
                    var Q = f ? d[0] + d[1] : (h < 0 ? '-' : '+') + Math.abs(e[1]),
                        U = (o < 0 ? '-' : '+') + Math.abs(k),
                        T = (n < 0 ? '-' : '+') + Math.abs(r);
                    if (Q === U) {
                        a(J).each(function(b, a) {
                            if (C ? a > O : a < O) {
                                y[s].push(a);
                            }
                        });
                    }
                    if (Q === T) {
                        a(J).each(function(b, a) {
                            if (C ? a < L : a > L) {
                                y[s].push(a);
                            }
                        });
                    }
                    a.each(c.invalid, function(b, a) {
                        D = E(x(a, t, z));
                        if ((e[0] === D[0] || e[1] === 0 && D[1] === 0 && D[2] === 0) && e[1] === D[1]) {
                            y[s].push(D[2]);
                        }
                    });
                }
                return {
                    disabled: y,
                    valid: d
                };
            }
        };
    };
    c.presetShort('measurement');
}());
(function() {
    var a = mobiscroll,
        b = a.$,
        c = a.presets.scroller,
        e = {
            min: 0,
            max: 100,
            defaultUnit: 'km',
            units: ['m', 'km', 'in', 'ft', 'yd', 'mi']
        },
        d = {
            mm: 0.001,
            cm: 0.01,
            dm: 0.1,
            m: 1,
            dam: 10,
            hm: 100,
            km: 1000,
            'in': 0.0254,
            ft: 0.3048,
            yd: 0.9144,
            ch: 20.1168,
            fur: 201.168,
            mi: 1609.344,
            lea: 4828.032
        };
    a.presetShort('distance');
    c.distance = function(a) {
        var f = b.extend({}, e, a.settings);
        b.extend(a.settings, f, {
            sign: false,
            convert: function(a, b, c) {
                return a * d[b] / d[c];
            }
        });
        return c.measurement.call(this, a);
    };
}());
(function() {
    var a = mobiscroll,
        b = a.$,
        c = a.presets.scroller,
        e = {
            min: 0,
            max: 100,
            defaultUnit: 'N',
            units: ['N', 'kp', 'lbf', 'pdl']
        },
        d = {
            N: 1,
            kp: 9.80665,
            lbf: 4.448222,
            pdl: 0.138255
        };
    a.presetShort('force');
    c.force = function(a) {
        var f = b.extend({}, e, a.settings);
        b.extend(a.settings, f, {
            sign: false,
            convert: function(a, b, c) {
                return a * d[b] / d[c];
            }
        });
        return c.measurement.call(this, a);
    };
}());
(function() {
    var a = mobiscroll,
        b = a.$,
        c = a.presets.scroller,
        e = {
            min: 0,
            max: 1000,
            defaultUnit: 'kg',
            units: ['g', 'kg', 'oz', 'lb'],
            unitNames: {
                tlong: 't (long)',
                tshort: 't (short)'
            }
        },
        d = {
            mg: 0.001,
            cg: 0.01,
            dg: 0.1,
            g: 1,
            dag: 10,
            hg: 100,
            kg: 1000,
            t: 1000000,
            drc: 1.7718452,
            oz: 28.3495,
            lb: 453.59237,
            st: 6350.29318,
            qtr: 12700.58636,
            cwt: 50802.34544,
            tlong: 1016046.9088,
            tshort: 907184.74
        };
    a.presetShort('mass');
    c.mass = function(a) {
        var f = b.extend({}, e, a.settings);
        b.extend(a.settings, f, {
            sign: false,
            convert: function(a, b, c) {
                return a * d[b] / d[c];
            }
        });
        return c.measurement.call(this, a);
    };
}());
(function() {
    var a = mobiscroll,
        b = a.$,
        c = a.presets.scroller,
        e = {
            min: 0,
            max: 100,
            defaultUnit: 'kph',
            units: ['kph', 'mph', 'mps', 'fps', 'knot'],
            unitNames: {
                kph: 'km/h',
                mph: 'mi/h',
                mps: 'm/s',
                fps: 'ft/s',
                knot: 'knot'
            }
        },
        d = {
            kph: 1,
            mph: 1.60934,
            mps: 3.6,
            fps: 1.09728,
            knot: 1.852
        };
    a.presetShort('speed');
    c.speed = function(a) {
        var f = b.extend({}, e, a.settings);
        b.extend(a.settings, f, {
            sign: false,
            convert: function(a, b, c) {
                return a * d[b] / d[c];
            }
        });
        return c.measurement.call(this, a);
    };
}());
(function() {
    var a = mobiscroll,
        b = a.$,
        c = a.presets.scroller,
        d = {
            min: -20,
            max: 40,
            defaultUnit: 'c',
            units: ['c', 'k', 'f', 'r'],
            unitNames: {
                c: '°C',
                k: 'K',
                f: '°F',
                r: '°R'
            }
        },
        e = {
            c2k: function(a) {
                return a + 273.15;
            },
            c2f: function(a) {
                return a * 9 / 5 + 32;
            },
            c2r: function(a) {
                return (a + 273.15) * 9 / 5;
            },
            k2c: function(a) {
                return a - 273.15;
            },
            k2f: function(a) {
                return a * 9 / 5 - 459.67;
            },
            k2r: function(a) {
                return a * 9 / 5;
            },
            f2c: function(a) {
                return (a - 32) * 5 / 9;
            },
            f2k: function(a) {
                return (a + 459.67) * 5 / 9;
            },
            f2r: function(a) {
                return a + 459.67;
            },
            r2c: function(a) {
                return (a - 491.67) * 5 / 9;
            },
            r2k: function(a) {
                return a * 5 / 9;
            },
            r2f: function(a) {
                return a - 459.67;
            }
        };
    a.presetShort('temperature');
    c.temperature = function(a) {
        var f = b.extend({}, d, a.settings);
        b.extend(a.settings, f, {
            sign: true,
            convert: function(a, b, c) {
                return e[b + '2' + c](a);
            }
        });
        return c.measurement.call(this, a);
    };
}());
(function() {
    var a = mobiscroll,
        b = a.presets.scroller;
    b.number = b.measurement;
    a.presetShort('number');
}());
(function(d) {
    var c = mobiscroll,
        a = c.$,
        e = c.presets.scroller,
        b = c.util.datetime,
        f = c.util,
        g = f.testTouch,
        h = {
            autoCorrect: true,
            showSelector: true,
            minRange: 1,
            rangeTap: true,
            fromText: 'Start',
            toText: 'End'
        };
    c.presetShort('range');
    e.range = function(f) {
        function H(a, b) {
            if (a) {
                a.setFullYear(b.getFullYear());
                a.setMonth(b.getMonth());
                a.setDate(b.getDate());
            }
        }

        function N(b) {
            f._startDate = o = k;
            f._endDate = p = j;
            if (c.startInput) {
                a(c.startInput).val(r);
                if (b) {
                    a(c.startInput).trigger('change');
                }
            }
            if (c.endInput) {
                a(c.endInput).val(q);
                if (b) {
                    a(c.endInput).trigger('change');
                }
            }
        }

        function C(b, d) {
            var a = true;
            if (b && k && j) {
                if (j - k > c.maxRange - 1) {
                    if (i) {
                        k = new Date(j - c.maxRange + 1);
                    } else {
                        j = new Date(+k + c.maxRange - 1);
                    }
                }
                if (j - k < c.minRange - 1) {
                    if (i) {
                        k = new Date(j - c.minRange + 1);
                    } else {
                        j = new Date(+k + c.minRange - 1);
                    }
                }
            }
            if (!k || !j) {
                a = false;
            }
            if (d) {
                M();
            }
            return a;
        }

        function O() {
            return k && j ? Math.max(1, Math.round((new Date(j).setHours(0, 0, 0, 0) - new Date(k).setHours(0, 0, 0, 0)) / 86400000) + 1) : 0;
        }

        function L(a) {
            a.addClass('mbsc-range-btn-sel').attr('aria-checked', 'true').find('.mbsc-range-btn').addClass(x);
        }

        function E() {
            if (D && l) {
                a('.mbsc-range-btn-c', l).removeClass('mbsc-range-btn-sel').removeAttr('aria-checked').find('.mbsc-range-btn', l).removeClass(x);
                L(a('.mbsc-range-btn-c', l).eq(i));
            }
        }

        function M() {
            var d, h, e, o, f, g = 0,
                p = m || !i ? ' mbsc-cal-day-hl mbsc-cal-sel-start' : ' mbsc-cal-sel-start',
                s = m || i ? ' mbsc-cal-day-hl mbsc-cal-sel-end' : ' mbsc-cal-sel-end';
            r = k ? b.formatDate(n, k, c) : '';
            q = j ? b.formatDate(n, j, c) : '';
            if (l) {
                a('.mbsc-range-btn-v-start', l).html(r || '&nbsp;');
                a('.mbsc-range-btn-v-end', l).html(q || '&nbsp;');
                d = k ? new Date(k) : null;
                e = j ? new Date(j) : null;
                if (!d && e) {
                    d = new Date(e);
                }
                if (!e && d) {
                    e = new Date(d);
                }
                f = i ? e : d;
                a('.mbsc-cal-table .mbsc-cal-day-sel .mbsc-cal-day-i', l).removeClass(x);
                a('.mbsc-cal-table .mbsc-cal-day-hl', l).removeClass(z);
                a('.mbsc-cal-table .mbsc-cal-day-sel', l).removeClass('mbsc-cal-day-sel mbsc-cal-sel-start mbsc-cal-sel-end').removeAttr('aria-selected');
                if (d && e) {
                    h = d.setHours(0, 0, 0, 0);
                    o = e.setHours(0, 0, 0, 0);
                    while (e >= d && g < 84) {
                        a('.mbsc-cal-day[data-full="' + f.getFullYear() + '-' + f.getMonth() + '-' + f.getDate() + '"]', l).addClass('mbsc-cal-day-sel' + (f.getTime() === h ? p : '') + (f.getTime() === o ? s : '')).attr('aria-selected', 'true').find('.mbsc-cal-day-i ').addClass(x);
                        f.setDate(f.getDate() + (i ? -1 : 1));
                        g++;
                    }
                }
            }
        }
        var w, l, u, n, A, t, v, r, q, k, j, I, J, G, D, o = f._startDate,
            p = f._endDate,
            i = 0,
            y = new Date(),
            K = a.extend({}, f.settings),
            c = a.extend(f.settings, h, K),
            B = c.anchor,
            m = c.rangeTap,
            x = c.activeClass || '',
            F = 'mbsc-fr-btn-d ' + (c.disabledClass || ''),
            z = 'mbsc-cal-day-hl',
            s = c.defaultValue === null ? [] : c.defaultValue || [new Date(y.setHours(0, 0, 0, 0)), new Date(y.getFullYear(), y.getMonth(), y.getDate() + 6, 23, 59, 59, 999)];
        if (m) {
            c.tabs = true;
        }
        A = e.calbase.call(this, f);
        w = a.extend({}, A);
        n = f.format;
        I = c.controls.join('') === 'time';
        D = c.controls.length == 1 && c.controls[0] == 'calendar' ? c.showSelector : true;
        if (c.startInput) {
            J = a(c.startInput).prop('readonly');
            f.attachShow(a(c.startInput).prop('readonly', true), function() {
                i = 0;
                c.anchor = B || a(c.startInput);
            });
        }
        if (c.endInput) {
            G = a(c.endInput).prop('readonly');
            f.attachShow(a(c.endInput).prop('readonly', true), function() {
                i = 1;
                c.anchor = B || a(c.endInput);
            });
        }
        f.setVal = function(g, l, m, h, s) {
            var a = g || [],
                e = g;
            if (a[0] === d || a[0] === null || a[0].getTime) {
                v = true;
                k = a[0] || null;
                r = k ? b.formatDate(n, k, c) : '';
                if (!i) {
                    e = w.parseValue(r, f);
                }
            }
            if (a[1] === d || a[1] === null || a[1].getTime) {
                v = true;
                j = a[1] || null;
                q = j ? b.formatDate(n, j, c) : '';
                if (i) {
                    e = w.parseValue(q, f);
                }
            }
            if (!h) {
                f._startDate = o = k;
                f._endDate = p = j;
            }
            f._setVal(e, l, m, h, s);
        };
        f.getVal = function(a) {
            return a ? [k, j] : f._hasValue ? [o, p] : null;
        };
        f.getDayProps = function(b) {
            var a = k ? new Date(k.getFullYear(), k.getMonth(), k.getDate()) : null,
                c = j ? new Date(j.getFullYear(), j.getMonth(), j.getDate()) : null;
            return {
                selected: a && c && b >= a && b <= j,
                cssClass: ((m || !i) && a && a.getTime() === b.getTime() || (m || i) && c && c.getTime() === b.getTime() ? z : '') + (a && a.getTime() === b.getTime() ? ' mbsc-cal-sel-start' : '') + (c && c.getTime() === b.getTime() ? ' mbsc-cal-sel-end' : '')
            };
        };
        f.setActiveDate = function(c) {
            var b;
            i = c == 'start' ? 0 : 1;
            b = c == 'start' ? k : j;
            if (f.isVisible()) {
                E();
                if (!m) {
                    a('.mbsc-cal-table .mbsc-cal-day-hl', l).removeClass(z);
                    if (b) {
                        a('.mbsc-cal-day[data-full="' + b.getFullYear() + '-' + b.getMonth() + '-' + b.getDate() + '"]', l).addClass(z);
                    }
                }
                if (b) {
                    t = true;
                    f.setDate(b, false, 1000, true);
                }
            }
        };
        f.getValue = f.getVal;
        a.extend(A, {
            highlight: false,
            outerMonthChange: false,
            formatValue: function() {
                return r + (c.endInput ? '' : q ? ' - ' + q : '');
            },
            parseValue: function(e) {
                var d = e ? e.split(' - ') : [];
                c.defaultValue = s[1];
                if (c.endInput) {
                    p = a(c.endInput).val() ? b.parseDate(n, a(c.endInput).val(), c) : s[1];
                } else {
                    p = d[1] ? b.parseDate(n, d[1], c) : s[1];
                }
                c.defaultValue = s[0];
                if (c.startInput) {
                    o = a(c.startInput).val() ? b.parseDate(n, a(c.startInput).val(), c) : s[0];
                } else {
                    o = d[0] ? b.parseDate(n, d[0], c) : s[0];
                }
                c.defaultValue = s[i];
                r = o ? b.formatDate(n, o, c) : '';
                q = p ? b.formatDate(n, p, c) : '';
                f._startDate = o;
                f._endDate = p;
                return w.parseValue(i ? q : r, f);
            },
            onFill: function(a) {
                N(a.change);
            },
            onBeforeClose: function(a) {
                if (a.button === 'set' && !C(true, true)) {
                    f.setActiveDate(i ? 'start' : 'end');
                    return false;
                }
            },
            onHide: function() {
                w.onHide.call(f);
                i = 0;
                l = null;
                c.anchor = B;
            },
            onClear: function() {
                if (m) {
                    i = 0;
                }
            },
            onBeforeShow: function() {
                c.headerText = false;
                k = o;
                j = p;
                if (c.counter) {
                    c.headerText = function() {
                        var a = O();
                        return (a > 1 ? c.selectedPluralText || c.selectedText : c.selectedText).replace(/{count}/, a);
                    };
                }
                v = true;
            },
            onMarkupReady: function(b) {
                var d;
                l = a(b.target);
                if (k) {
                    t = true;
                    f.setDate(k, false, 0, true);
                    k = f.getDate(true);
                }
                if (j) {
                    t = true;
                    f.setDate(j, false, 0, true);
                    j = f.getDate(true);
                }
                if (i && j || !i && k) {
                    t = true;
                    f.setDate(i ? j : k, false, 0, true);
                }
                w.onMarkupReady.call(this, b);
                l.addClass('mbsc-range');
                if (D) {
                    d = '<div class="mbsc-range-btn-t" role="radiogroup">' + '<div class="mbsc-range-btn-c mbsc-range-btn-start"><div role="radio" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + c.fromText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-start">' + (r || '&nbsp;') + '</div></div></div>' + '<div class="mbsc-range-btn-c mbsc-range-btn-end"><div role="radio" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + c.toText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-end">' + (q || '&nbsp;') + '</div></div></div>' + '</div>';
                    a('.mbsc-cal-tabs', l).before(d);
                    E();
                }
                a('.mbsc-range-btn-c', l).on('touchstart click', function(b) {
                    if (g(b, this)) {
                        f.showMonthView();
                        f.setActiveDate(a(this).index() ? 'end' : 'start');
                    }
                });
            },
            onDayChange: function(a) {
                a.active = i ? 'end' : 'start';
                u = true;
            },
            onSetDate: function(g) {
                var b = g.date,
                    e = f.order;
                if (!t) {
                    if (e.h === d) {
                        b.setHours(i ? 23 : 0);
                    }
                    if (e.i === d) {
                        b.setMinutes(i ? 59 : 0);
                    }
                    if (e.s === d) {
                        b.setSeconds(i ? 59 : 0);
                    }
                    b.setMilliseconds(i ? 999 : 0);
                    if (!v || u) {
                        if (m && u) {
                            if (i == 1 && b < k) {
                                i = 0;
                            }
                            if (i) {
                                b.setHours(23, 59, 59, 999);
                            } else {
                                b.setHours(0, 0, 0, 0);
                            }
                        }
                        if (i) {
                            j = new Date(b);
                        } else {
                            k = new Date(b);
                        }
                        if (I) {
                            H(k, b);
                            H(j, b);
                        }
                        if (m && u && !i) {
                            j = null;
                        }
                    }
                }
                f._isValid = C(v || u || c.autoCorrect, !t);
                g.active = i ? 'end' : 'start';
                if (!t && m) {
                    if (u) {
                        i = i ? 0 : 1;
                    }
                    E();
                }
                if (f.isVisible()) {
                    if (f._isValid) {
                        a('.mbsc-fr-btn-s .mbsc-fr-btn', f._markup).removeClass(F);
                    } else {
                        a('.mbsc-fr-btn-s .mbsc-fr-btn', f._markup).addClass(F);
                    }
                }
                u = false;
                v = false;
                t = false;
            },
            onTabChange: function(a) {
                if (a.tab != 'calendar') {
                    f.setDate(i ? j : k, false, 1000, true);
                }
                C(true, true);
            },
            onDestroy: function() {
                a(c.startInput).prop('readonly', J);
                a(c.endInput).prop('readonly', G);
            }
        });
        return A;
    };
}());
(function(c) {
    var b = mobiscroll,
        a = b.$,
        d = {
            inputClass: '',
            values: 5,
            order: 'desc',
            style: 'icon',
            invalid: [],
            icon: {
                filled: 'star3',
                empty: 'star3'
            }
        };
    b.presetShort('rating');
    b.presets.scroller.rating = function(l) {
        var z = a.extend({}, l.settings),
            e = a.extend(l.settings, d, z),
            h = a(this),
            s = this.id + '_dummy',
            w = a('label[for="' + this.id + '"]').attr('for', s),
            A = e.label !== c ? e.label : w.length ? w.text() : h.attr('name'),
            p = e.defaultValue,
            v = [
                []
            ],
            x = {
                data: [],
                label: A,
                circular: false
            },
            n = {},
            g = [],
            i, r = false,
            f, k, o, t, u, y, j, q, B, m = e.style === 'grade' ? 'circle' : 'icon';
        if (h.is('select')) {
            e.values = {};
            a('option', h).each(function() {
                e.values[a(this).val()] = a(this).text();
            });
            a('#' + s).remove();
        }
        if (a.isArray(e.values)) {
            for (f = 0; f < e.values.length; f++) {
                j = +e.values[f];
                if (isNaN(j)) {
                    j = f + 1;
                    r = true;
                }
                g.push({
                    order: j,
                    key: e.values[f],
                    value: e.values[f]
                });
            }
        } else if (a.isPlainObject(e.values)) {
            f = 1;
            r = true;
            for (q in e.values) {
                j = +q;
                if (isNaN(j)) {
                    j = f;
                }
                g.push({
                    order: j,
                    key: q,
                    value: e.values[q]
                });
                f++;
            }
        } else {
            for (f = 1; f <= e.values; f++) {
                g.push({
                    order: f,
                    key: f,
                    value: f
                });
            }
        }
        if (e.showText === c && r) {
            e.showText = true;
        }
        if (e.icon.empty === c) {
            e.icon.empty = e.icon.filled;
        }
        g.sort(function(a, b) {
            return e.order == 'desc' ? b.order - a.order : a.order - b.order;
        });
        B = e.order == 'desc' ? g[0].order : g[g.length - 1].order;
        for (f = 0; f < g.length; f++) {
            y = g[f].order;
            t = g[f].key;
            u = g[f].value;
            o = '';
            for (k = 1; k < y + 1; k++) {
                o += '<span class="mbsc-rating-' + m + (m === 'circle' ? '' : ' mbsc-ic mbsc-ic-' + e.icon.filled) + ' ">' + (m == 'circle' ? k : ' ') + '</span>';
            }
            for (k = y + 1; k <= B; k++) {
                o += '<span class="mbsc-rating-' + m + (m === 'circle' ? ' mbsc-rating-circle-unf' : ' mbsc-ic mbsc-ic-' + (e.icon.empty ? e.icon.empty + ' mbsc-rating-icon-unf' : '') + (e.icon.empty === e.icon.filled ? ' mbsc-rating-icon-same' : '')) + '"></span>';
            }
            if (p === c) {
                p = t;
            }
            o += e.showText ? '<span class="mbsc-rating-txt">' + u + '</span>' : '';
            x.data.push({
                value: t,
                display: o,
                label: u
            });
            n[t] = u;
        }
        if (h.is('select')) {
            i = a('<input type="text" id="' + s + '" value="' + n[h.val()] + '" class="' + e.inputClass + '" placeholder="' + (e.placeholder || '') + '" readonly />').insertBefore(h);
        }
        v[0].push(x);
        if (i) {
            l.attachShow(i);
        }
        if (h.is('select')) {
            h.hide().closest('.ui-field-contain').trigger('create');
        }
        l.getVal = function(c) {
            var a = l._hasValue ? l[c ? '_tempWheelArray' : '_wheelArray'][0] : null;
            return b.util.isNumeric(a) ? +a : a;
        };
        return {
            anchor: i,
            wheels: v,
            headerText: false,
            compClass: 'mbsc-rating',
            setOnTap: true,
            formatValue: function(a) {
                return n[a[0]];
            },
            parseValue: function(b) {
                var a;
                for (a in n) {
                    if (i && a == b || !i && n[a] == b) {
                        return [a];
                    }
                }
                return [p];
            },
            validate: function() {
                return {
                    disabled: [e.invalid]
                };
            },
            onFill: function(a) {
                if (i) {
                    i.val(a.valueText);
                    h.val(l._tempWheelArray[0]);
                }
            },
            onDestroy: function() {
                if (i) {
                    i.remove();
                }
                h.show();
            }
        };
    };
}());
(function(c) {
    var b = mobiscroll,
        a = b.$,
        d = {
            autostart: false,
            step: 1,
            useShortLabels: false,
            labels: ['Years', 'Months', 'Days', 'Hours', 'Minutes', 'Seconds', ''],
            labelsShort: ['Yrs', 'Mths', 'Days', 'Hrs', 'Mins', 'Secs', ''],
            startText: 'Start',
            stopText: 'Stop',
            resetText: 'Reset',
            lapText: 'Lap',
            hideText: 'Hide'
        };
    b.presetShort('timer');
    b.presets.scroller.timer = function(b) {
        function I(a) {
            return new Date(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds());
        }

        function N(n) {
            var b = {};
            if (C && i[m].index > i.days.index) {
                var f, e, o, g, h = new Date(),
                    c = k ? h : l,
                    d = k ? l : h;
                d = I(d);
                c = I(c);
                b.years = c.getFullYear() - d.getFullYear();
                b.months = c.getMonth() - d.getMonth();
                b.days = c.getDate() - d.getDate();
                b.hours = c.getHours() - d.getHours();
                b.minutes = c.getMinutes() - d.getMinutes();
                b.seconds = c.getSeconds() - d.getSeconds();
                b.fract = (c.getMilliseconds() - d.getMilliseconds()) / 10;
                for (f = j.length; f > 0; f--) {
                    e = j[f - 1];
                    o = i[e];
                    g = j[a.inArray(e, j) - 1];
                    if (i[g] && b[e] < 0) {
                        b[g]--;
                        b[e] += g == 'months' ? 32 - new Date(c.getFullYear(), c.getMonth(), 32).getDate() : o.until + 1;
                    }
                }
                if (m == 'months') {
                    b.months += b.years * 12;
                    delete b.years;
                }
            } else {
                a(j).each(function(c, a) {
                    if (i[a].index <= i[m].index) {
                        b[a] = Math.floor(n / i[a].limit);
                        n -= b[a] * i[a].limit;
                    }
                });
            }
            return b;
        }

        function M(d) {
            var e = 1,
                b = i[d],
                c = b.wheel,
                f = b.prefix,
                h = 0,
                k = b.until,
                g = i[j[a.inArray(d, j) - 1]];
            if (b.index <= i[m].index && (!g || g.limit > x)) {
                if (!p[d]) {
                    H[0].push(c);
                }
                p[d] = 1;
                c.data = [];
                c.label = b.label || '';
                c.cssClass = 'mbsc-timer-whl-' + d;
                if (x >= b.limit) {
                    e = Math.max(Math.round(x / b.limit), 1);
                    v = e * b.limit;
                }
                if (d == m) {
                    c.min = 0;
                    c.data = function(a) {
                        return {
                            value: a,
                            display: K(a, f, b.label)
                        };
                    };
                    c.getIndex = function(a) {
                        return a;
                    };
                } else {
                    for (y = h; y <= k; y += e) {
                        c.data.push({
                            value: y,
                            display: K(y, f, b.label)
                        });
                    }
                }
            }
        }

        function K(a, b, c) {
            return (b || '') + (a < 10 ? '0' : '') + a + '<span class="mbsc-timer-lbl">' + c + '</span>';
        }

        function r(e) {
            var b = [],
                c, d = N(e);
            a(j).each(function(e, a) {
                if (p[a]) {
                    c = Math.max(Math.round(x / i[a].limit), 1);
                    b.push(Math.round(d[a] / c) * c);
                }
            });
            return b;
        }

        function G(a) {
            if (C) {
                g = l - new Date();
                if (g < 0) {
                    g *= -1;
                    k = true;
                } else {
                    k = false;
                }
                f = 0;
                t = true;
            } else if (l !== c) {
                t = false;
                g = l * 1000;
                k = e.mode != 'countdown';
                if (a) {
                    f = 0;
                }
            } else {
                g = 0;
                k = e.mode != 'countdown';
                t = k;
                if (a) {
                    f = 0;
                }
            }
        }

        function F() {
            if (n) {
                a('.mbsc-fr-w', h).addClass('mbsc-timer-running mbsc-timer-locked');
                a('.mbsc-timer-btn-toggle-c > div', h).text(e.stopText);
                if (b.buttons.start.icon) {
                    a('.mbsc-timer-btn-toggle-c > div', h).removeClass('mbsc-ic-' + b.buttons.start.icon);
                }
                if (b.buttons.stop.icon) {
                    a('.mbsc-timer-btn-toggle-c > div', h).addClass('mbsc-ic-' + b.buttons.stop.icon);
                }
                if (e.mode == 'stopwatch') {
                    a('.mbsc-timer-btn-resetlap-c > div', h).text(e.lapText);
                    if (b.buttons.reset.icon) {
                        a('.mbsc-timer-btn-resetlap-c > div', h).removeClass('mbsc-ic-' + b.buttons.reset.icon);
                    }
                    if (b.buttons.lap.icon) {
                        a('.mbsc-timer-btn-resetlap-c > div', h).addClass('mbsc-ic-' + b.buttons.lap.icon);
                    }
                }
            } else {
                a('.mbsc-fr-w', h).removeClass('mbsc-timer-running');
                a('.mbsc-timer-btn-toggle-c > div', h).text(e.startText);
                if (b.buttons.start.icon) {
                    a('.mbsc-timer-btn-toggle-c > div', h).addClass('mbsc-ic-' + b.buttons.start.icon);
                }
                if (b.buttons.stop.icon) {
                    a('.mbsc-timer-btn-toggle-c > div', h).removeClass('mbsc-ic-' + b.buttons.stop.icon);
                }
                if (e.mode == 'stopwatch') {
                    a('.mbsc-timer-btn-resetlap-c > div', h).text(e.resetText);
                    if (b.buttons.reset.icon) {
                        a('.mbsc-timer-btn-resetlap-c > div', h).addClass('mbsc-ic-' + b.buttons.reset.icon);
                    }
                    if (b.buttons.lap.icon) {
                        a('.mbsc-timer-btn-resetlap-c > div', h).removeClass('mbsc-ic-' + b.buttons.lap.icon);
                    }
                }
            }
        }
        var y, D, v, s, u, w, g, f, k, h, L, J = a.extend({}, b.settings),
            e = a.extend(b.settings, d, J),
            o = e.useShortLabels ? e.labelsShort : e.labels,
            E = ['toggle', 'resetlap'],
            j = ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'fract'],
            i = {
                'years': {
                    index: 6,
                    until: 10,
                    limit: 1000 * 60 * 60 * 24 * 365,
                    label: o[0],
                    wheel: {}
                },
                'months': {
                    index: 5,
                    until: 11,
                    limit: 1000 * 60 * 60 * 24 * 30,
                    label: o[1],
                    wheel: {}
                },
                'days': {
                    index: 4,
                    until: 31,
                    limit: 1000 * 60 * 60 * 24,
                    label: o[2],
                    wheel: {}
                },
                'hours': {
                    index: 3,
                    until: 23,
                    limit: 1000 * 60 * 60,
                    label: o[3],
                    wheel: {}
                },
                'minutes': {
                    index: 2,
                    until: 59,
                    limit: 1000 * 60,
                    label: o[4],
                    wheel: {}
                },
                'seconds': {
                    index: 1,
                    until: 59,
                    limit: 1000,
                    label: o[5],
                    wheel: {}
                },
                'fract': {
                    index: 0,
                    until: 99,
                    limit: 10,
                    label: o[6],
                    prefix: '.',
                    wheel: {}
                }
            },
            p = {},
            A = [],
            B = 0,
            n = false,
            q = true,
            t = false,
            x = Math.max(10, e.step * 1000),
            m = e.maxWheel,
            z = e.mode == 'stopwatch' || C,
            l = e.targetTime,
            C = l && l.getTime !== c,
            H = [
                []
            ];
        b.start = function() {
            if (q) {
                b.reset();
            }
            if (!n) {
                G();
                if (!t && f >= g) {
                    return;
                }
                n = true;
                q = false;
                u = new Date();
                s = f;
                e.readonly = true;
                b.setVal(r(k ? f : g - f), true, true, false, 100);
                D = setInterval(function() {
                    f = new Date() - u + s;
                    b.setVal(r(k ? f : g - f), true, true, false, Math.min(100, v - 10));
                    if (!t && f + v >= g) {
                        clearInterval(D);
                        setTimeout(function() {
                            b.stop();
                            f = g;
                            b.setVal(r(k ? f : 0), true, true, false, 100);
                            b.trigger('onFinish', {
                                time: g
                            });
                            q = true;
                        }, g - f);
                    }
                }, v);
                F();
                b.trigger('onStart');
            }
        };
        b.stop = function() {
            if (n) {
                n = false;
                clearInterval(D);
                f = new Date() - u + s;
                F();
                b.trigger('onStop', {
                    ellapsed: f
                });
            }
        };
        b.toggle = function() {
            if (n) {
                b.stop();
            } else {
                b.start();
            }
        };
        b.reset = function() {
            b.stop();
            f = 0;
            A = [];
            B = 0;
            b.setVal(r(k ? 0 : g), true, true, false, 100);
            b.settings.readonly = z;
            q = true;
            if (!z) {
                a('.mbsc-fr-w', h).removeClass('mbsc-timer-locked');
            }
            b.trigger('onReset');
        };
        b.lap = function() {
            if (n) {
                w = new Date() - u + s;
                L = w - B;
                B = w;
                A.push(w);
                b.trigger('onLap', {
                    ellapsed: w,
                    lap: L,
                    laps: A
                });
            }
        };
        b.resetlap = function() {
            if (n && e.mode == 'stopwatch') {
                b.lap();
            } else {
                b.reset();
            }
        };
        b.getTime = function() {
            return g;
        };
        b.setTime = function(a) {
            l = a / 1000;
            g = a;
        };
        b.getElapsedTime = b.getEllapsedTime = function() {
            return n ? new Date() - u + s : 0;
        };
        b.setElapsedTime = b.setEllapsedTime = function(a, c) {
            if (!q) {
                s = f = a;
                u = new Date();
                b.setVal(r(k ? f : g - f), true, c, false, 100);
            }
        };
        G(true);
        if (!m && !g) {
            m = 'minutes';
        }
        if (e.display !== 'inline') {
            E.push('hide');
        }
        if (!m) {
            a(j).each(function(b, a) {
                if (!m && g >= i[a].limit) {
                    m = a;
                    return false;
                }
            });
        }
        a(j).each(function(b, a) {
            M(a);
        });
        v = Math.max(87, v);
        if (e.autostart) {
            setTimeout(function() {
                b.start();
            }, 0);
        }
        b.handlers.toggle = b.toggle;
        b.handlers.start = b.start;
        b.handlers.stop = b.stop;
        b.handlers.resetlap = b.resetlap;
        b.handlers.reset = b.reset;
        b.handlers.lap = b.lap;
        b.buttons.toggle = {
            parentClass: 'mbsc-timer-btn-toggle-c',
            text: e.startText,
            handler: 'toggle'
        };
        b.buttons.start = {
            text: e.startText,
            handler: 'start'
        };
        b.buttons.stop = {
            text: e.stopText,
            handler: 'stop'
        };
        b.buttons.reset = {
            text: e.resetText,
            handler: 'reset'
        };
        b.buttons.lap = {
            text: e.lapText,
            handler: 'lap'
        };
        b.buttons.resetlap = {
            parentClass: 'mbsc-timer-btn-resetlap-c',
            text: e.resetText,
            handler: 'resetlap'
        };
        b.buttons.hide = {
            parentClass: 'mbsc-timer-btn-hide-c',
            text: e.hideText,
            handler: 'cancel'
        };
        return {
            wheels: H,
            headerText: false,
            readonly: z,
            buttons: E,
            mode: 'countdown',
            compClass: 'mbsc-timer',
            parseValue: function() {
                return r(k ? 0 : g);
            },
            formatValue: function(d) {
                var c = '',
                    b = 0;
                a(j).each(function(e, a) {
                    if (a == 'fract') {
                        return;
                    }
                    if (p[a]) {
                        c += d[b] + (a == 'seconds' && p.fract ? '.' + d[b + 1] : '') + ' ' + o[e] + ' ';
                        b++;
                    }
                });
                return c;
            },
            validate: function(d) {
                var e = d.values,
                    f = d.index,
                    b = 0;
                if (q && f !== c) {
                    l = 0;
                    a(j).each(function(c, a) {
                        if (p[a]) {
                            l += i[a].limit * e[b];
                            b++;
                        }
                    });
                    l /= 1000;
                    G(true);
                }
            },
            onBeforeShow: function() {
                e.showLabel = true;

            },
            onMarkupReady: function(b) {
                h = a(b.target);
                F();
                if (z) {
                    a('.mbsc-fr-w', h).addClass('mbsc-timer-locked');
                }
            },
            onPosition: function(b) {
                a('.mbsc-fr-w', b.target).css('min-width', 0).css('min-width', a('.mbsc-fr-btn-cont', b.target)[0].offsetWidth);
            },
            onDestroy: function() {
                clearInterval(D);
            }
        };
    };
}());
(function(d) {
    var b = mobiscroll,
        a = b.$,
        c = {
            wheelOrder: 'hhiiss',
            useShortLabels: false,
            min: 0,
            max: Infinity,
            labels: ['Years', 'Months', 'Days', 'Hours', 'Minutes', 'Seconds'],
            labelsShort: ['Yrs', 'Mths', 'Days', 'Hrs', 'Mins', 'Secs']
        };
    b.presetShort('timespan');
    b.presets.scroller.timespan = function(i) {
        function o(c) {
            var b = {};
            a(p).each(function(d, a) {
                b[a] = j[a] ? Math.floor(c / f[a].limit) : 0;
                c -= b[a] * f[a].limit;
            });
            return b;
        }

        function A(c) {
            var d = false,
                e = s[j[c] - 1] || 1,
                b = f[c],
                g = b.label,
                a = b.wheel;
            a.data = [];
            a.label = b.label;
            if (q.match(new RegExp(b.re + b.re, 'i'))) {
                d = true;
            }
            if (c == l) {
                a.min = n[c];
                a.max = m[c];
                a.data = function(a) {
                    return {
                        value: a,
                        display: w(a * e, d, g)
                    };
                };
                a.getIndex = function(a) {
                    return Math.round(a / e);
                };
            } else {
                for (k = 0; k <= b.until; k += e) {
                    a.data.push({
                        value: k,
                        display: w(k, d, g)
                    });
                }
            }
        }

        function w(a, b, c) {
            return (a < 10 && b ? '0' : '') + a + '<span class="mbsc-ts-lbl">' + c + '</span>';
        }

        function y(c) {
            var d = 0,
                b = 0;
            a.each(g, function(a, e) {
                if (!isNaN(+c[d])) {
                    b += f[e.v].limit * c[a];
                }
            });
            return b;
        }

        function z(b, a) {
            return Math.floor(b / a) * a;
        }
        var k, r, x, n, m, u = a.extend({}, i.settings),
            e = a.extend(i.settings, c, u),
            q = e.wheelOrder,
            h = e.useShortLabels ? e.labelsShort : e.labels,
            p = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
            f = {
                'years': {
                    ord: 0,
                    index: 6,
                    until: 10,
                    limit: 1000 * 60 * 60 * 24 * 365,
                    label: h[0],
                    re: 'y',
                    wheel: {}
                },
                'months': {
                    ord: 1,
                    index: 5,
                    until: 11,
                    limit: 1000 * 60 * 60 * 24 * 30,
                    label: h[1],
                    re: 'm',
                    wheel: {}
                },
                'days': {
                    ord: 2,
                    index: 4,
                    until: 31,
                    limit: 1000 * 60 * 60 * 24,
                    label: h[2],
                    re: 'd',
                    wheel: {}
                },
                'hours': {
                    ord: 3,
                    index: 3,
                    until: 23,
                    limit: 1000 * 60 * 60,
                    label: h[3],
                    re: 'h',
                    wheel: {}
                },
                'minutes': {
                    ord: 4,
                    index: 2,
                    until: 59,
                    limit: 1000 * 60,
                    label: h[4],
                    re: 'i',
                    wheel: {}
                },
                'seconds': {
                    ord: 5,
                    index: 1,
                    until: 59,
                    limit: 1000,
                    label: h[5],
                    re: 's',
                    wheel: {}
                }
            },
            g = [],
            s = e.steps || [],
            j = {},
            l = 'seconds',
            v = e.defaultValue || Math.max(e.min, Math.min(0, e.max)),
            t = [
                []
            ];
        a(p).each(function(b, a) {
            r = q.search(new RegExp(f[a].re, 'i'));
            if (r > -1) {
                g.push({
                    o: r,
                    v: a
                });
                if (f[a].index > f[l].index) {
                    l = a;
                }
            }
        });
        g.sort(function(a, b) {
            return a.o > b.o ? 1 : -1;
        });
        a.each(g, function(b, a) {
            j[a.v] = b + 1;
            t[0].push(f[a.v].wheel);
        });
        n = o(e.min);
        m = o(e.max);
        a.each(g, function(b, a) {
            A(a.v);
        });
        i.getVal = function(a, b) {
            return b ? i._getVal(a) : i._hasValue || a ? y(i.getArrayVal(a)) : null;
        };
        return {
            showLabel: true,
            wheels: t,
            compClass: 'mbsc-ts',
            parseValue: function(d) {
                var c = [],
                    h;
                if (b.util.isNumeric(d) || !d) {
                    x = o(d || v);
                    a.each(g, function(b, a) {
                        c.push(x[a.v]);
                    });
                } else {
                    a.each(g, function(b, a) {
                        h = new RegExp('(\\d+)\\s?(' + e.labels[f[a.v].ord] + '|' + e.labelsShort[f[a.v].ord] + ')', 'gi').exec(d);
                        c.push(h ? h[1] : 0);
                    });
                }
                a(c).each(function(a, b) {
                    c[a] = z(b, s[a] || 1);
                });
                return c;
            },
            formatValue: function(c) {
                var b = '';
                a.each(g, function(a, d) {
                    b += +c[a] ? c[a] + ' ' + f[d.v].label + ' ' : '';
                });
                return b ? b.replace(/\s+$/g, '') : 0;
            },
            validate: function(t) {
                var r, b, c, e, q = t.values,
                    s = t.direction,
                    k = [],
                    h = true,
                    g = true;
                a(p).each(function(t, p) {
                    if (j[p] !== d) {
                        c = j[p] - 1;
                        k[c] = [];
                        e = {};
                        if (p != l) {
                            if (h) {
                                for (b = m[p] + 1; b <= f[p].until; b++) {
                                    e[b] = true;
                                }
                            }
                            if (g) {
                                for (b = 0; b < n[p]; b++) {
                                    e[b] = true;
                                }
                            }
                        }
                        q[c] = i.getValidValue(c, q[c], s, e);
                        r = o(y(q));
                        h = h && r[p] == m[p];
                        g = g && r[p] == n[p];
                        a.each(e, function(a) {
                            k[c].push(a);
                        });
                    }
                });
                return {
                    disabled: k
                };
            }
        };
    };
}());
(function(d) {
    var b = mobiscroll,
        a = b.$,
        c = b.classes;
    c.Widget = function(h, i, k) {
        function j(b) {
            a('.mbsc-fr-c', b);
            if (!a('.mbsc-fr-c', b).hasClass('mbsc-wdg-c') && mobiscroll.vKMaI) {
                a('.mbsc-fr-c', b).addClass('mbsc-wdg-c').append(e.show());
                if (!a('.mbsc-w-p', b).length) {
                    a('.mbsc-fr-c', b).addClass('mbsc-w-p');
                }
            }
        }
        var b, f, g, e = a(h),
            d = this;
        c.Frame.call(this, h, i, true);
        d._generateContent = function() {
            return '';
        };
        d._markupReady = function(a) {
            if (b.display != 'inline') {
                j(a);
            }
        };
        d._markupInserted = function(a) {
            if (b.display == 'inline') {
                j(a);
            }
            a.trigger('mbsc-enhance', [{
                theme: b.theme,
                lang: b.lang
            }]);
        };
        d._markupRemove = function() {
            e.hide();
            if (f) {
                f.prepend(e);
            } else {
                g.after(e);
            }
        };
        d._processSettings = function() {
            b = d.settings;
            d.buttons.close = {
                text: b.closeText,
                handler: 'cancel'
            };
            d.buttons.ok = {
                text: b.okText,
                handler: 'set'
            };
            b.buttons = b.buttons || (b.display == 'inline' ? [] : ['ok']);
            b.cssClass = (b.cssClass || '') + ' mbsc-wdg';
            if (!f && !g) {
                g = e.prev();
                if (!g.length) {
                    f = e.parent();
                }
            }
            e.hide();
        };
        if (!k) {
            d.init(i);
        }
    };
    c.Widget.prototype = {
        _hasDef: true,
        _hasTheme: true,
        _hasContent: true,
        _class: 'widget',
        _defaults: a.extend({}, c.Frame.prototype._defaults, {
            okText: 'OK'
        })
    };
    b.themes.widget = b.themes.frame;
    b.presetShort('widget', 'Widget', false);
}());
(function() {
    var a, c, d = mobiscroll,
        f = d.$,
        g = d.util,
        h = g.testTouch,
        b = g.getCoord;

    function i(g, l) {
        var h = b(l, 'X', true),
            i = b(l, 'Y', true),
            a = g.offset(),
            j = h - a.left,
            k = i - a.top,
            m = Math.max(j, g[0].offsetWidth - j),
            n = Math.max(k, g[0].offsetHeight - k),
            d = 2 * Math.sqrt(Math.pow(m, 2) + Math.pow(n, 2));
        e(c);
        c = f('<span class="mbsc-ripple"></span>').css({
            width: d,
            height: d,
            top: i - a.top - d / 2,
            left: h - a.left - d / 2
        }).appendTo(g);
        setTimeout(function() {
            c.addClass('mbsc-ripple-scaled mbsc-ripple-visible');
        }, 10);
    }

    function e(a) {
        setTimeout(function() {
            if (a) {
                a.removeClass('mbsc-ripple-visible');
                setTimeout(function() {
                    a.remove();
                }, 2000);
            }
        }, 100);
    }
    d.themes.material = {
        addRipple: i,
        removeRipple: function() {
            e(c);
        },
        initRipple: function(k, d, l, m) {
            var g, j;
            k.off('.mbsc-ripple').on('touchstart.mbsc-ripple mousedown.mbsc-ripple', d, function(c) {
                if (h(c, this)) {
                    g = b(c, 'X');
                    j = b(c, 'Y');
                    a = f(this);
                    if (!a.hasClass(l) && !a.hasClass(m)) {
                        i(a, c);
                    } else {
                        a = null;
                    }
                }
            }).on('touchmove.mbsc-ripple mousemove.mbsc-ripple', d, function(d) {
                if (a && Math.abs(b(d, 'X') - g) > 9 || Math.abs(b(d, 'Y') - j) > 9) {
                    e(c);
                    a = null;
                }
            }).on('touchend.mbsc-ripple touchcancel.mbsc-ripple mouseleave.mbsc-ripple mouseup.mbsc-ripple', d, function() {
                if (a) {
                    setTimeout(function() {
                        e(c);
                    }, 100);
                    a = null;
                }
            });
        }
    };
}());
(function() {
    mobiscroll.themes.frame['ios-dark'] = {
        baseTheme: 'ios',
        display: 'bottom',
        dateOrder: 'MMdyy',
        rows: 5,
        height: 34,
        minWidth: 55,
        scroll3d: true,
        headerText: false,
        showLabel: false,
        btnWidth: false,
        selectedLineBorder: 1,
        useShortLabels: true,
        deleteIcon: 'ios-backspace',
        checkIcon: 'ion-ios7-checkmark-empty',
        btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left5',
        btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right5',
        btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down5',
        btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up5'
    };
    mobiscroll.themes.listview['ios-dark'] = {
        baseTheme: 'ios'
    };
    mobiscroll.themes.menustrip['ios-dark'] = {
        baseTheme: 'ios'
    };
    mobiscroll.themes.form['ios-dark'] = {
        baseTheme: 'ios'
    };
    mobiscroll.themes.progress['ios-dark'] = {
        baseTheme: 'ios'
    };
}());
(function() {
    var a = mobiscroll.$;
    mobiscroll.themes.frame['material-dark'] = {
        baseTheme: 'material',
        showLabel: false,
        headerText: false,
        btnWidth: false,
        selectedLineBorder: 2,
        dateOrder: 'MMddyy',
        weekDays: 'min',
        deleteIcon: 'material-backspace',
        icon: {
            filled: 'material-star',
            empty: 'material-star-outline'
        },
        checkIcon: 'material-check',
        btnPlusClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-down',
        btnMinusClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-up',
        btnCalPrevClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-left',
        btnCalNextClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-right',
        onMarkupReady: function(b) {
            mobiscroll.themes.material.initRipple(a(b.target), '.mbsc-fr-btn-e', 'mbsc-fr-btn-d', 'mbsc-fr-btn-nhl');
        },
        onEventBubbleShow: function(e) {
            var b = a(e.eventList),
                c = a(e.target).closest('.mbsc-cal-row').index() < 2,
                d = a('.mbsc-cal-event-color', b).eq(c ? 0 : -1).css('background-color');
            a('.mbsc-cal-events-arr', b).css('border-color', c ? 'transparent transparent ' + d + ' transparent' : d + 'transparent transparent transparent');
        }
    };
    mobiscroll.themes.listview['material-dark'] = {
        baseTheme: 'material',
        onItemActivate: function(b) {
            mobiscroll.themes.material.addRipple(a(b.target), b.domEvent);
        },
        onItemDeactivate: function() {
            mobiscroll.themes.material.removeRipple();
        },
        onSlideStart: function(b) {
            a('.mbsc-ripple', b.target).remove();
        },
        onSortStart: function(b) {
            a('.mbsc-ripple', b.target).remove();
        }
    };
    mobiscroll.themes.menustrip['material-dark'] = {
        baseTheme: 'material',
        onInit: function() {
            mobiscroll.themes.material.initRipple(a(this), '.mbsc-ms-item', 'mbsc-btn-d', 'mbsc-btn-nhl');
        }
    };
    mobiscroll.themes.form['material-dark'] = {
        baseTheme: 'material',
        onControlActivate: function(d) {
            var c, b = a(d.target);
            if (b[0].type == 'button' || b[0].type == 'submit') {
                c = b;
            }
            if (b.attr('data-role') == 'segmented') {
                c = b.next();
            }
            if (b.hasClass('mbsc-stepper-control') && !b.hasClass('mbsc-step-disabled')) {
                c = b.find('.mbsc-segmented-content');
            }
            if (c) {
                mobiscroll.themes.material.addRipple(c, d.domEvent);
            }
        },
        onControlDeactivate: function() {
            mobiscroll.themes.material.removeRipple();
        }
    };
    mobiscroll.themes.progress['material-dark'] = {
        baseTheme: 'material'
    };
}());
(function() {
    mobiscroll.themes.frame['android-holo-light'] = {
        baseTheme: 'android-holo',
        dateOrder: 'Mddyy',
        rows: 5,
        minWidth: 76,
        height: 36,
        showLabel: false,
        selectedLineBorder: 2,
        useShortLabels: true,
        icon: {
            filled: 'star3',
            empty: 'star'
        },
        btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down6',
        btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up6'
    };
    mobiscroll.themes.listview['android-holo-light'] = {
        baseTheme: 'android-holo'
    };
    mobiscroll.themes.menustrip['android-holo-light'] = {
        baseTheme: 'android-holo'
    };
    mobiscroll.themes.form['android-holo-light'] = {
        baseTheme: 'android-holo'
    };
    mobiscroll.themes.progress['android-holo-light'] = {
        baseTheme: 'android-holo'
    };
}());
(function() {
    var a = mobiscroll.$;
    mobiscroll.themes.frame['wp-light'] = {
        baseTheme: 'wp',
        minWidth: 76,
        height: 76,
        dateDisplay: 'mmMMddDDyy',
        headerText: false,
        showLabel: false,
        deleteIcon: 'backspace4',
        icon: {
            filled: 'star3',
            empty: 'star'
        },
        btnWidth: false,
        btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left2',
        btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right2',
        btnPlusClass: 'mbsc-ic mbsc-ic-plus',
        btnMinusClass: 'mbsc-ic mbsc-ic-minus',
        onMarkupInserted: function(g, h) {
            var b, d, f, e = g.target,
                c = h.settings;

            function i(b) {
                return a.isArray(c.readonly) ? c.readonly[b] : c.readonly;
            }
            a('.mbsc-sc-whl', e).on('touchstart mousedown wheel mousewheel', function(c) {
                if (c.type === 'mousedown' && d || i(a(this).attr('data-index'))) {
                    return;
                }
                d = c.type === 'touchstart';
                b = true;
                f = a(this).hasClass('mbsc-sc-whl-wpa');
                a('.mbsc-sc-whl', e).removeClass('mbsc-sc-whl-wpa');
                a(this).addClass('mbsc-sc-whl-wpa');
            }).on('touchmove mousemove', function() {
                b = false;
            }).on('touchend mouseup', function(c) {
                if (b && f && a(c.target).closest('.mbsc-sc-itm').hasClass('mbsc-sc-itm-sel')) {
                    a(this).removeClass('mbsc-sc-whl-wpa');
                }
                if (c.type === 'mouseup') {
                    d = false;
                }
                b = false;
            });
        },
        onInit: function(c, b) {
            var a = b.buttons;
            a.set.icon = 'checkmark';
            a.cancel.icon = 'close';
            a.clear.icon = 'close';
            if (a.ok) {
                a.ok.icon = 'checkmark';
            }
            if (a.close) {
                a.close.icon = 'close';
            }
            if (a.now) {
                a.now.icon = 'loop2';
            }
            if (a.toggle) {
                a.toggle.icon = 'play3';
            }
            if (a.start) {
                a.start.icon = 'play3';
            }
            if (a.stop) {
                a.stop.icon = 'pause2';
            }
            if (a.reset) {
                a.reset.icon = 'stop2';
            }
            if (a.lap) {
                a.lap.icon = 'loop2';
            }
            if (a.hide) {
                a.hide.icon = 'close';
            }
        }
    };
    mobiscroll.themes.listview['wp-light'] = {
        baseTheme: 'wp'
    };
    mobiscroll.themes.menustrip['wp-light'] = {
        baseTheme: 'wp'
    };
    mobiscroll.themes.form['wp-light'] = {
        baseTheme: 'wp'
    };
    mobiscroll.themes.progress['wp-light'] = {
        baseTheme: 'wp'
    };
}());
(function() {
    mobiscroll.themes.frame['mobiscroll-dark'] = {
        baseTheme: 'mobiscroll',
        rows: 5,
        showLabel: false,
        headerText: false,
        btnWidth: false,
        selectedLineBorder: 1,
        dateOrder: 'MMddyy',
        weekDays: 'min',
        checkIcon: 'ion-ios7-checkmark-empty',
        btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down5',
        btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up5',
        btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left5',
        btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right5'
    };
    mobiscroll.themes.listview['mobiscroll-dark'] = {
        baseTheme: 'mobiscroll'
    };
    mobiscroll.themes.menustrip['mobiscroll-dark'] = {
        baseTheme: 'mobiscroll'
    };
    mobiscroll.themes.form['mobiscroll-dark'] = {
        baseTheme: 'mobiscroll'
    };
    mobiscroll.themes.progress['mobiscroll-dark'] = {
        baseTheme: 'mobiscroll'
    };
}());
(function() {
    var b, e, a = mobiscroll,
        c = a.platform,
        f = a.themes,
        d = a.$;
    if (c.name == 'android') {
        b = c.majorVersion >= 5 ? 'material' : 'android-holo';
    } else if (c.name == 'ios') {
        b = 'ios';
    } else if (c.name == 'wp') {
        b = 'wp';
    }
    d.each(f, function(f, c) {
        d.each(c, function(c, d) {
            if (d.baseTheme == b && c != 'android-holo-light' && c != 'material-dark' && c != 'wp-light' && c != 'ios-dark') {
                a.autoTheme = c;
                e = true;
                return false;
            } else if (c == b) {
                a.autoTheme = c;
            }
        });
        if (e) {
            return false;
        }
    });
}());
var angular = angular || {
        module: function() {
            return this;
        },
        directive: function() {
            return this;
        },
        animation: function() {
            return this;
        }
    },
    mobiscroll = mobiscroll || {};
mobiscroll.ng = {};
(function() {
    var a = mobiscroll.$,
        b = mobiscroll.instances;
    mobiscroll.ng = {
        getDDO: function(f, g, h, b, c, d, e, i) {
            c = c || mobiscroll.ng.read;
            b = b || mobiscroll.ng.render;
            d = d || mobiscroll.ng.parse;
            e = e || mobiscroll.ng.format;
            return {
                restrict: 'A',
                require: '?ngModel',
                priority: angular.version && angular.version.major == 1 && angular.version.minor == 2 ? 1 : undefined,
                link: function(l, n, k, m) {
                    var j = a(n[0]);
                    mobiscroll.ng.addWatch(f, l, m, j, k, g, b, c, d, e);
                    j.mobiscroll(angular.extend(mobiscroll.ng.getOpt(l, k, g, m, i, j), h || {}));
                    if (k.mobiscrollInstance) {
                        f(k.mobiscrollInstance).assign(l, j.mobiscroll('getInst'));
                    }
                }
            };
        },
        getOpt: function(b, c, f, g, d, h) {
            var a = b.$eval(c.mobiscrollOptions || '{}'),
                e = d ? h.closest('[mbsc-form-opt]') : null;
            if (d) {
                a = angular.extend({}, mobiscroll.ng.formOptions[e.attr('id')] || {}, a);
            }
            if (g) {
                angular.extend(a, b.$eval(c[f] || '{}'));
            }
            return a;
        },
        read: function(h, d, e, i, f, g, j) {
            var a, c = b[e.attr('id')];
            if (c) {
                a = j(e, c.getVal());
                if (g) {
                    g.$setViewValue(a);
                } else if (f[d]) {
                    h(f[d]).assign(i, a);
                }
            }
        },
        render: function(d, c) {
            var a = b[d.attr('id')];
            if (a && !angular.equals(a.getVal(), c)) {
                a.setVal(c, true, false);
            }
        },
        parse: function(c) {
            var b = a(c[0]).mobiscroll('getVal');
            return a.isArray(b) && !b.length ? null : b;
        },
        format: function(c, b) {
            return a.isArray(b) && !b.length ? null : b;
        },
        addWatch: function(f, b, a, c, i, g, h, e, j, d) {
            h = h || mobiscroll.ng.render;
            e = e || mobiscroll.ng.read;
            j = j || mobiscroll.ng.parse;
            d = d || mobiscroll.ng.format;
            if (a) {
                a.$render = function() {};
                a.$parsers.unshift(function(a) {
                    return j(c, a);
                });
                a.$formatters.push(function(a) {
                    return d(c, a);
                });
            }
            b.$watch(function() {
                return a ? a.$modelValue : f(i[g])(b);
            }, function(a) {
                h(c, a);
            }, true);
            c.on('change', function() {
                if (!b.$$phase) {
                    b.$apply(function() {
                        e(f, g, c, b, i, a, d);
                    });
                } else {
                    e(f, g, c, b, i, a, d);
                }
            });
        },
        formOptions: {}
    };
    angular.module('mobiscroll-scroller', []).directive('mobiscrollScroller', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollScroller');
    }]);
}());
(function() {
    angular.module('mobiscroll-calendar', []).directive('mobiscrollCalendar', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollCalendar', {
            preset: 'calendar'
        });
    }]);
}());
(function() {
    angular.module('mobiscroll-color', []).directive('mobiscrollColor', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollColor', {
            preset: 'color'
        });
    }]);
}());
(function() {
    angular.module('mobiscroll-datetime', []).directive('mobiscrollDatetime', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollDatetime', {
            preset: 'datetime'
        });
    }]).directive('mobiscrollDate', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollDate', {
            preset: 'date'
        });
    }]).directive('mobiscrollTime', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollTime', {
            preset: 'time'
        });
    }]);
}());
(function() {
    var a = mobiscroll.$;
    angular.module('mobiscroll-eventcalendar', []).directive('mobiscrollEventcalendar', ['$parse', function(b) {
        return {
            restrict: 'A',
            link: function(c, g, d) {
                var f = a(g[0]);
                var e = f.mobiscroll(angular.extend({}, c.$eval(d.mobiscrollEventcalendar || '{}'), {
                    preset: 'eventcalendar',
                    data: []
                })).mobiscroll('getInst');
                if (d.mobiscrollInstance) {
                    b(d.mobiscrollInstance).assign(c, e);
                }
                c.$watch(function() {
                    return b(d.mobiscrollData)(c);
                }, function(a) {
                    if (a !== undefined && !angular.equals(e.getEvents(), a)) {
                        e.setEvents(a);
                    }
                }, true);
            }
        };
    }]);
}());
(function() {
    var a = +new Date(),
        b = mobiscroll.$;
    angular.module('mobiscroll-form', []).directive('mobiscrollForm', ['$parse', function(c) {
        return {
            restrict: 'A',
            compile: function() {
                return {
                    pre: function(f, d, e) {
                        var c = mobiscroll.ng.getOpt(f, e, 'mobiscrollForm', true),
                            b = e.id;
                        if (!b) {
                            b = 'mbsc-form-' + a++;
                            d.attr('id', b);
                        }
                        d.attr('mbsc-form-opt', '');
                        mobiscroll.ng.formOptions[b] = {
                            theme: c.theme,
                            lang: c.lang
                        };
                    },
                    post: function(d, f, e) {
                        var a = b(f[0]);
                        a.mobiscroll().form(mobiscroll.ng.getOpt(d, e, 'mobiscrollForm', true));
                        if (e.mobiscrollInstance) {
                            c(e.mobiscrollInstance).assign(d, a.mobiscroll('getInst'));
                        }
                        d.$on('mbscFormRefresh', function() {
                            a.mobiscroll('refresh');
                        });
                    }
                };
            }
        };
    }]).directive('mobiscrollSwitch', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollSwitch', {
            component: 'Switch'
        }, undefined, undefined, undefined, undefined, true);
    }]).directive('mobiscrollStepper', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollStepper', {
            component: 'Stepper'
        });
    }]);
}());
(function() {
    var b = mobiscroll.$,
        a = 'mobiscrollImage',
        c = ['ng-repeat', 'ng:repeat', 'data-ng-repeat', 'x-ng-repeat', 'ng_repeat'];
    angular.module('mobiscroll-image', []).directive('mobiscrollRepeatRender', function() {
        return function(a) {
            a.$emit('mbscRepeatRender');
        };
    }).directive(a, ['$parse', function(d) {
        var e = mobiscroll.ng.getDDO(d, a, {
            preset: 'image'
        });
        e.link = undefined;
        e.compile = function(h) {
            var f, g = b(h[0]),
                e;
            g.find('li').each(function() {
                for (e = 0; e < c.length; e++) {
                    if (b(this).attr(c[e])) {
                        f = true;
                        return false;
                    }
                }
            });
            if (f) {
                g.children().attr('mobiscroll-repeat-render', '');
            }
            return function(g, k, e, i) {
                var j, c = b(k[0]),
                    h = mobiscroll.ng.getOpt(g, e, a, i);
                mobiscroll.ng.addWatch(d, g, i, c, e, a);
                if (f) {
                    g.$on('mbscRepeatRender', function() {
                        clearTimeout(j);
                        j = setTimeout(function() {
                            c.mobiscroll().image(h);
                            if (e.mobiscrollInstance) {
                                d(e.mobiscrollInstance).assign(g, c.mobiscroll('getInst'));
                            }
                        }, 1);
                    });
                } else if (c.children().length) {
                    c.mobiscroll().image(h);
                    if (e.mobiscrollInstance) {
                        d(e.mobiscrollInstance).assign(g, c.mobiscroll('getInst'));
                    }
                }
            };
        };
        return e;
    }]);
}());
(function() {
    var b = mobiscroll.$,
        a = 'mobiscrollList',
        c = ['ng-repeat', 'ng:repeat', 'data-ng-repeat', 'x-ng-repeat', 'ng_repeat'];
    angular.module('mobiscroll-list', []).directive('mobiscrollRepeatRender', function() {
        return function(a) {
            a.$emit('mbscRepeatRender');
        };
    }).directive(a, ['$parse', function(d) {
        var e = mobiscroll.ng.getDDO(d, a, {
            preset: 'list'
        });
        e.link = undefined;
        e.compile = function(h) {
            var f, g = b(h[0]),
                e;
            g.find('li').each(function() {
                for (e = 0; e < c.length; e++) {
                    if (b(this).attr(c[e])) {
                        f = true;
                        return false;
                    }
                }
            });
            if (f) {
                g.children().attr('mobiscroll-repeat-render', '');
            }
            return function(g, k, e, i) {
                var j, c = b(k[0]),
                    h = mobiscroll.ng.getOpt(g, e, a, i);
                mobiscroll.ng.addWatch(d, g, i, c, e, a);
                if (f) {
                    g.$on('mbscRepeatRender', function() {
                        clearTimeout(j);
                        j = setTimeout(function() {
                            c.mobiscroll().treelist(h);
                            if (e.mobiscrollInstance) {
                                d(e.mobiscrollInstance).assign(g, c.mobiscroll('getInst'));
                            }
                        }, 1);
                    });
                } else if (c.children().length) {
                    c.mobiscroll().treelist(h);
                    if (e.mobiscrollInstance) {
                        d(e.mobiscrollInstance).assign(g, c.mobiscroll('getInst'));
                    }
                }
            };
        };
        return e;
    }]);
}());
(function() {
    var b, a = mobiscroll.$,
        f = +new Date(),
        c = [],
        d = {},
        e = {};

    function g(b, d, e) {
        var c;
        b = a(a.parseHTML ? a.parseHTML(b) : b);
        if (b.length == 1 && b.is('li') || a(b[0]).is('li')) {
            c = b.clone();
            a(c[0]).attr('ng-repeat-start', 'item in ' + d);
            a(c).filter('li').eq(-1).attr('ng-repeat-end', '').attr('mobiscroll-listview-item', e);
        } else {
            c = a('<li></li>').append(b.clone());
            c.attr('ng-repeat', 'item in ' + d).attr('mobiscroll-listview-item', e);
        }
        return c;
    }

    function h(b) {
        var a, c = 0;
        if (!b) {
            return c;
        }
        for (a = 0; a < b.length; a++) {
            c++;
            if (b[a].children && b[a].children.length) {
                c += h(b[a].children);
            }
        }
        return c;
    }
    try {
        b = angular.module('ngAnimate');
    } catch (a) {}
    if (b) {
        c.push('ngAnimate');
    }
    angular.module('mobiscroll-listview', c).directive('mobiscrollListviewItem', ['$compile', '$timeout', function(c, b) {
        return {
            link: function(l, n, m) {
                var i, h, f = a(n[0]),
                    e = f.parent('ul'),
                    k = m.mobiscrollListviewItem,
                    g = d[k],
                    j = f.parents('.mbsc-lv-cont').length;
                g.nodesLeft--;
                if (e && (j || g.nodesLeft === 0)) {
                    if (!j) {
                        l.$emit('mbscLvLastItemAdded', g.rootNode);
                    } else {
                        i = e.children('li').not('.mbsc-lv-back').index(f);
                        f.addClass('mbsc-lv-item').hide();
                        if (e.hasClass('mbsc-lv-root')) {
                            b(function() {
                                e.mobiscroll('add', null, f.show(), i, undefined, e);
                            });
                        } else {
                            b(function() {
                                e.prepend(e.children('.mbsc-lv-back'));
                                h = e.parent('li');
                                a(g.rootNode).mobiscroll('add', null, f.show(), i, undefined, h.length ? h : e);
                            });
                        }
                    }
                }
                f.append(c('<div style="display:none;"><ul><li mobiscroll-listview-hitem="' + k + '" ng-repeat="item in item.children"></li></ul></div>')(l)[0]);
            }
        };
    }]).directive('mobiscrollListviewHitem', ['$compile', '$timeout', function(b) {
        return {
            link: function(f, j, k) {
                var h = a(j[0]),
                    c = h.parent(),
                    i = c.parent().hasClass('mbsc-lv-ng-init'),
                    d = k.mobiscrollListviewHitem;
                if (c.children('li').not('.mbsc-lv-back').length <= 1 && !i) {
                    c.parent().addClass('mbsc-lv-ng-init').parent().append(b(a('<ul></ul>').append(g(e[d], 'item.children', d)))(f.$parent)[0]);
                }
                f.$on('$destroy', function() {
                    if (c) {
                        if (!c.children('li').length) {
                            c = c.parent().parent().children('ul');
                            c.remove();
                        }
                    }
                });
            }
        };
    }]).directive('mobiscrollListview', ['$compile', '$parse', '$timeout', function(b, i, c) {
        return {
            restrict: 'A',
            require: '?ngModel',
            compile: function(l) {
                var k, i = f++,
                    j = l.html().replace(/(mbsc-ng-)|(ms-ng-)/g, 'ng-').trim();
                return function(l, q, f, r) {
                    var p, n, m = a(q[0]);
                    if (r || f.mobiscrollData) {
                        p = l.$eval(f.mobiscrollListview || '{}');
                        n = f.mobiscrollData || f.ngModel;
                    } else {
                        p = l.$eval(f.mobiscrollOptions || '{}');
                        n = f.mobiscrollListview;
                    }
                    var o = h(l.$eval(n));
                    d[i] = {
                        rootNode: m,
                        allNodes: o,
                        nodesLeft: o
                    };
                    e[i] = j;
                    k = a('<div></div>').append(g(j, n, i));
                    m.empty().append(a(b(k)(l)[0]).contents());
                    l.$on('mbscLvLastItemAdded', function(b, a) {
                        if (m[0] == a[0]) {
                            c(function() {
                                m.mobiscroll().listview(p);
                                if (f.mobiscrollInstance) {
                                    l[f.mobiscrollInstance] = m.mobiscroll('getInst');
                                }
                            });
                        }
                    });
                    if (o === 0) {
                        l.$emit('mbscLvLastItemAdded', m);
                    }
                };
            }
        };
    }]);
    if (b) {
        angular.module('mobiscroll-listview').animation('.mbsc-lv-item', function() {
            return {
                leave: function(c, d) {
                    var b = a(c[0]);
                    b.closest('.mbsc-lv-cont').find('.mbsc-lv-root').mobiscroll('remove', b, 'right', d);
                }
            };
        });
    }
}());
(function() {
    angular.module('mobiscroll-measurement', []).directive('mobiscrollTemperature', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollTemperature', {
            preset: 'temperature'
        });
    }]).directive('mobiscrollSpeed', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollSpeed', {
            preset: 'speed'
        });
    }]).directive('mobiscrollMass', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollMass', {
            preset: 'mass'
        });
    }]).directive('mobiscrollForce', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollForce', {
            preset: 'force'
        });
    }]).directive('mobiscrollDistance', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollDistance', {
            preset: 'distance'
        });
    }]);
}());
(function() {
    var a = mobiscroll.$,
        b = 'mobiscrollMenustrip',
        c = ['ng-repeat', 'ng:repeat', 'data-ng-repeat', 'x-ng-repeat', 'ng_repeat'];
    angular.module('mobiscroll-menustrip', []).directive('mobiscrollRepeatRender', function() {
        return function(a) {
            a.$emit('mbscRepeatRender');
        };
    }).directive(b, ['$parse', '$timeout', function(d, f) {
        var e = mobiscroll.ng.getDDO(d, b, {
            component: 'MenuStrip'
        }, function() {}, function() {});
        e.compile = function(i) {
            var g, e, h = a(i[0]);
            h.find('li').each(function() {
                for (e = 0; e < c.length; e++) {
                    if (a(this).attr(c[e])) {
                        g = true;
                        return false;
                    }
                }
            });
            if (g) {
                h.children().attr('mobiscroll-repeat-render', '');
            }
            return function(h, k, e) {
                var j, c = a(k[0]),
                    i = h.$eval(e[b] || '{}');
                if (g) {
                    h.$on('mbscRepeatRender', function() {
                        clearTimeout(j);
                        j = setTimeout(function() {
                            c.mobiscroll().menustrip(i);
                            if (e.mobiscrollInstance) {
                                var a = d(e.mobiscrollInstance).assign;
                                a(h, c.mobiscroll('getInst'));
                            }
                        }, 1);
                    });
                } else if (c.children().length) {
                    f(function() {
                        c.mobiscroll().menustrip(i);
                        if (e.mobiscrollInstance) {
                            var a = d(e.mobiscrollInstance).assign;
                            a(h, c.mobiscroll('getInst'));
                        }
                    });
                }
            };
        };
        return e;
    }]);
}());
(function() {
    angular.module('mobiscroll-number', []).directive('mobiscrollNumber', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollNumber', {
            preset: 'number'
        });
    }]);
}());
(function() {
    angular.module('mobiscroll-numpad', []).directive('mobiscrollNumpad', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollNumpad', {
            component: 'Numpad'
        });
    }]);
}());
(function() {
    angular.module('mobiscroll-progress', []).directive('mobiscrollProgress', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollProgress', {
            component: 'Progress'
        }, undefined, undefined, undefined, undefined, true);
    }]);
}());
(function() {
    angular.module('mobiscroll-range', []).directive('mobiscrollRange', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollRange', {
            preset: 'range'
        });
    }]);
}());
(function() {
    angular.module('mobiscroll-rating', []).directive('mobiscrollRating', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollRating', {
            preset: 'rating'
        });
    }]);
}());
(function() {
    var b = ['ng-repeat', 'ng:repeat', 'data-ng-repeat', 'x-ng-repeat', 'ng_repeat'],
        a = mobiscroll.$;
    angular.module('mobiscroll-select', []).directive('mobiscrollSelectOption', function() {
        return {
            link: function(b, d, e) {
                var c = a(d[0]).closest('select');
                b.$watch(e.ngValue, function() {
                    b.$emit('mbscSelectRefresh', c);
                });
                b.$on('$destroy', function() {
                    b.$emit('mbscSelectRefresh', c);
                });
            }
        };
    }).directive('mobiscrollSelect', ['$parse', function(c) {
        var d = mobiscroll.ng.getDDO(c, 'mobiscrollSelect', {
            preset: 'select'
        });
        d.link = undefined;
        d.compile = function(g) {
            var e, d, f = a(g[0]);
            f.find('option').each(function() {
                for (d = 0; d < b.length; d++) {
                    if (a(this).attr(b[d])) {
                        a(this).attr('mobiscroll-select-option', '');
                        e = true;
                        return false;
                    }
                }
            });
            return function(d, j, b, g) {
                var h = mobiscroll.ng.getOpt(d, b, 'mobiscrollSelect', g),
                    f = a(j[0]),
                    i;
                if (b.mobiscrollData) {
                    angular.extend(h, {
                        data: d.$eval(b.mobiscrollData) || []
                    });
                    d.$watchCollection(b.mobiscrollData, function() {
                        var a = f.mobiscroll('getInst'),
                            c = d.$eval(b.mobiscrollData);
                        if (!angular.equals(a.settings.data, c)) {
                            a.settings.data = c;
                            a.refresh();
                        }
                    });
                }
                mobiscroll.ng.addWatch(c, d, g, f, b, 'mobiscrollSelect');
                if (e) {
                    d.$on('mbscSelectRefresh', function(e, a) {
                        if (f[0] == a[0]) {
                            clearTimeout(i);
                            i = setTimeout(function() {
                                f.mobiscroll().select(h);
                                mobiscroll.ng.render(f, g ? g.$modelValue : c(b.mobiscrollSelect)(d));
                                if (b.mobiscrollInstance) {
                                    c(b.mobiscrollInstance).assign(d, f.mobiscroll('getInst'));
                                }
                            }, 10);
                        }
                    });
                } else {
                    f.mobiscroll().select(h);
                    if (b.mobiscrollInstance) {
                        c(b.mobiscrollInstance).assign(d, f.mobiscroll('getInst'));
                    }
                }
            };
        };
        return d;
    }]);
}());
(function() {
    angular.module('mobiscroll-slider', []).directive('mobiscrollSlider', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollSlider', {
            component: 'Slider'
        }, undefined, undefined, undefined, undefined, true);
    }]);
}());
(function() {
    var a = mobiscroll.$;
    angular.module('mobiscroll-timer', []).directive('mobiscrollTimer', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollTimer', {
            preset: 'timer'
        }, c, b, d);
    }]);

    function b(d, e, f, g, h, c) {
        var b = a(f[0]);
        if (c) {
            c.$setViewValue(b.mobiscroll('getEllapsedTime'));
        } else {
            d(h[e]).assign(g, b.mobiscroll('getEllapsedTime'));
        }
    }

    function c(c, d) {
        var b = a(c[0]);
        b.mobiscroll('setEllapsedTime', d, false).val(b.mobiscroll('getInst')._value);
    }

    function d(b) {
        return a(b[0]).mobiscroll('getEllapsedTime');
    }
}());
(function() {
    angular.module('mobiscroll-timespan', []).directive('mobiscrollTimespan', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollTimespan', {
            preset: 'timespan'
        });
    }]);
}());
(function() {
    angular.module('mobiscroll-widget', []).directive('mobiscrollWidget', ['$parse', function(a) {
        return mobiscroll.ng.getDDO(a, 'mobiscrollWidget', {
            component: 'Widget'
        });
    }]);
}());
