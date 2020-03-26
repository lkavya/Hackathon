/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
//Library function
function Queue(){var a=[],b=0;this.getLength=function(){return a.length-b};this.isEmpty=function(){return 0==a.length};this.enqueue=function(b){a.push(b)};this.dequeue=function(){if(0!=a.length){var c=a[b];2*++b>=a.length&&(a=a.slice(b),b=0);return c}};this.peek=function(){return 0<a.length?a[b]:void 0}};
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
   // console.error(AdjList);
 

}
for (let i = 0; i < E; i++) {
    const EI = parseInt(readline()); // the index of a gateway node
    
}

function bfs(startingNode) 
{ 

	// create a visited array 
	var visited = []; 
	for (var i = 0; i < N; i++) 
		visited[i] = false; 

	// Create an object for queue 
	var q = new Queue(); 

	// add the starting node to the queue 
	visited[startingNode] = true; 
	q.enqueue(startingNode); 

	// loop until queue is element 
	while (!q.isEmpty()) { 
		// get the element from the queue 
		var getQueueElement = q.dequeue(); 

		// passing the current vertex to callback funtion 
	

		// get the adjacent list for current vertex 
		var get_List = AdjList.get(getQueueElement); 
        var  str='';
		// loop through the list and add the element to the 
		// queue if it is not processed yet 
		for (var i in get_List) { 
			var neigh = get_List[i]; 

			if (!visited[neigh]) { 
				visited[neigh] = true; 
				q.enqueue(neigh); 
				str=getQueueElement+' '+neigh;
				 console.error('here :'+str);
			} 
		} 
	} 
} 
	var visited = []; 
	for (var i = 0; i < N; i++) 
		visited[i] = false; 
		}
while (true) {
 
    const SI = parseInt(readline());
     console.error('SI:'+SI);
   // The index of the node on which the Skynet agent is positioned this turn

   var get_List = AdjList.get(SI); 
       
		for (var i in get_List) { 
			var neigh = get_List[i]; 

			if (!visited[neigh]) { 
				visited[neigh] = true; 
			console.log(SI,neigh);
			} 
		} 
	
   
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // Example: 0 1 are the indices of the nodes you wish to sever the link between
    console.log(str);
}