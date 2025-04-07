class SimpleMap {
    constructor() { this._items = []; }

    set(k, v) { this._items.push([k, v]); }

    get(k) {
        let kv = this._items.find(kv => k === kv[0]);
        return kv ? kv[1] : undefined;
    }

    has(k) {
        return this._items.find(kv => k === k[0]);
    }

    delete(k) {
        let i = this._items.findIndex(kv => k === kv[0]);
        if (i !== -1) this._items.splice(i, 1);
    }

    keys() { return this._items.map(kv => kv[0]); }
    values() { return this._items.map(kv => kv[1]); }
    entries() { return this._items; }
}

function hash(key) {
    return Array.from(key).reduce(
        (accum, char) => accum + char.charCodeAt(), 0
    );
}

function hash2(key, arrayLen) {
    hash = Array.from(key).reduce(
        (accum, char) => accum + char.charCodeAt(), 0
    );
    return hash % arrayLen;
}

function hash3(key, arrayLen) {
    const H_PRIME = 31;
    hash = Array.from(key).reduce(
        (accum, char) => accum * H_PRIME + char.charCodeAt(), 0
    );
    return hash % arrayLen;
}

class HashMap {
    constructor() { this._items = []; }

    set(k, v) {
        const hashedKey = hash3(k, 100);
        this._items[hashedKey] = v;
    }

    get(k) {
        const hashedKey = hash3(k, 100);
        return this._items[hashedKey];
    }
}