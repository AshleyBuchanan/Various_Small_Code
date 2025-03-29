console.log('%cmoreScratch_TREES.js', 'color:black; background-color:rgb(64,255,64); padding:0 150px 0 150px;')

class Node {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
    //depth first
    findDFS(val) {
        const toVisitStack = [this];
        while (toVisitStack.length) {
            const current = toVisitStack.pop();
            if (current.val === val) {
                return current;
            }
            for (let child of current.children) {
                toVisitStack.push(child);
            }
        }
    }
    //breadth first
    findBFS(val) {
        const toVisitQueue = [this];
        while (toVisitQueue.length) {
            let current = toVisitQueue.shift();
            if (current.val === val) {
                return current;
            }
            for (let child of current.children) {
                toVisitQueue.push(child);
            }
        }
    }
}

class Tree {
    constructor(root) {
        this.root = root;
    }
    findInTreeDFS(val) {
        return this.root.findDFS(val);
    }
    findInTreeBFS(val) {
        return this.root.findBFS(val);
    }
}

class binTree {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class quadTree {
    constructor(val, N = null, E = null, S = null, W = null) {
        this.val = val;
        this.N = N;
        this.E = E;
        this.S = S;
        this.W = W;
    }
}





let amy = new Node('amy',
    [
        new Node('bob',
            [
                new Node('carol',
                    [
                        new Node('daniel',
                            [
                                new Node('edward'),
                                new Node('eric')
                            ]
                        ),
                        new Node('derrick')
                    ]
                )
            ]
        ),
        new Node('barb',
            [
                new Node('carlos'),
                new Node('connie',
                    [
                        new Node('darlene'),
                        new Node('david',
                            [
                                new Node('ellen'),
                                new Node('erica')
                            ]
                        )
                    ]
                )
            ]
        ),
        new Node('consuela 4'),
        new Node('barry',
            [
                new Node('consuela')
            ]
        )
    ]
);
console.log(amy);


let htmlNode = new Node('html',
    [
        new Node('head', [new Node('title')]),
        new Node('body', [new Node('h1')])
    ]);

console.log(htmlNode);


