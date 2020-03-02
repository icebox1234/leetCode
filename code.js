class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function createTree(arr) {
    if (arr.length <= 0) {
        return null;
    }
    if (arr.length === 1) {
        return new TreeNode(arr[0]);
    }
    return createTreeFn(arr, 0);
}

function createTreeFn(arr, rootIndex) {
    debugger
    let node = new TreeNode(arr[rootIndex]);
    if (arr[2 * rootIndex + 1]) {
        node.left = createTreeFn(arr, 2 * rootIndex + 1)
    }
    if (arr[2 * rootIndex + 2]) {
        node.right = createTreeFn(arr, 2 * rootIndex + 2);
    }
    return node;
}

let mirrorTree = function (root) {
    if (root === null) {
        return null;
    }
    [root.left, root.right] = [root.right, root.left];
    mirrorTree(root.left);
    mirrorTree(root.right);
    return root
};

function main() {
    console.log(createTree([4, 2, 7, 1, 3, 6, 9]));
    // document.querySelector('#testCode').innerHTML = mirrorTree('#testCode');
}