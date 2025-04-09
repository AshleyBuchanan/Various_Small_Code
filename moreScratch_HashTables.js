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

class PersonNode {
    constructor(name) {
        this.name = name;
        this.adjacent = new Set();
    }
}

class FriendGraph {
    constructor() {
        this.nodes = new Set();
    }
    addPerson(node) {
        this.nodes.add(node);
    }
    addPeople(peopleList) {
        for (let node of peopleList) {
            this.addPerson(node);
        }
    }
    setFriends(person1, person2) {
        person1.adjacent.add(person2);
        person2.adjacent.add(person1);
    }
    areConnectedBFS(person1, person2) {
        let toVisitQueue = [person1];
        let seen = new Set(toVisitQueue);

        while (toVisitQueue.length) {
            let currentPerson = toVisitQueue.shift();
            console.log(`BFS > ${currentPerson.name}`);
            if (currentPerson === person2) return true;
            for (let neighbor of currentPerson.adjacent) {
                if (!seen.has(neighbor)) {
                    toVisitQueue.push(neighbor);
                    seen.add(neighbor);
                }
            }
        }
        return false;
    }
    areConnectedDFS(person1, person2) {
        let toVisitStack = [person1];
        let seen = new Set(toVisitStack);

        while (toVisitStack.length) {
            let currentPerson = toVisitStack.pop();
            console.log(`DFS > ${currentPerson.name}`);
            if (currentPerson === person2) return true;
            for (let neighbor of currentPerson.adjacent) {
                if (!seen.has(neighbor)) {
                    toVisitStack.push(neighbor);
                    seen.add(neighbor);
                }
            }
        }
        return false;
    }
    areConnectedRecursive(person1, person2, seen = new Set([person1])) {
        //DFS
        if (person1 === person2) return true;
        for (let neighbor of person1.adjacent) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                if (this.areConnectedRecursive(neighbor, person2, seen)) {
                    return true;
                }
            }
        }
        return false;
    }
}

const homer = new PersonNode('Homer');
const marge = new PersonNode('Marge');
const maggie = new PersonNode('Maggie');
const lisa = new PersonNode('Lisa');
const grampa = new PersonNode('Grampa');

const friends = new FriendGraph();
friends.addPeople([homer, marge, maggie, lisa, grampa]);
friends.setFriends(homer, marge);
friends.setFriends(homer, maggie);
friends.setFriends(homer, lisa);
friends.setFriends(marge, maggie);
friends.setFriends(maggie, lisa);
friends.setFriends(lisa, grampa);

const moe = new PersonNode('Moe');
const barney = new PersonNode('Barney');
const lenny = new PersonNode('Lenny');
friends.addPeople([moe, barney, lenny]);
friends.setFriends(moe, barney);
friends.setFriends(barney, lenny);
