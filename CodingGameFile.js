/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
const L = parseInt(inputs[1]); // the number of links
const E = parseInt(inputs[2]); // the number of exit gateways

var AdjList = new Map();
    for (let i = 0; i < L; i++) {
        var inputs = readline().split(' ');
        const N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
        const N2 = parseInt(inputs[1]);
        AdjList.set(N1, N2)
    }
   
    for (let i = 0; i < E; i++) {
    const EI = parseInt(readline()); // the index of a gateway node
    }


	var visited = []; 
	//initialy no node visited
	for (var i = 0; i < N; i++) {
		visited[i] = false; 
	}

    while (true) {
 
    const SI = parseInt(readline());
   // The index of the node on which the Skynet agent is positioned this turn
   
    //get list of adjacent nodes
    var get_List = AdjList.get(SI); 
     
     //loop thruogh map to visit adjacent node
	for (var node in get_List) { 
	 var neigh = get_List[node]; 
	    if (!visited[neigh]) { 
	    	visited[neigh] = true; 
		    console.log(node+' '+neigh);
	    } 
	} 
 
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    // Example: 0 1 are the indices of the nodes you wish to sever the link between
  
}