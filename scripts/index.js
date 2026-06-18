const facetCards = document.querySelectorAll('.facet-card');
const facetCardClasses = ["facet-card-content-upper-right", "facet-card-content-upper-left"];
const facetCardClassesRight = ["facet-card-content-right-left", "facet-card-content-right-right"];


facetCards.forEach(card => {
    
    if(card.id == "oppression" || card.id == "autonomy"){
        
        for(let i = 0; i < card.children.length; i++){
            
            card.children[i].classList.remove(facetCardClasses[0], facetCardClasses[1]);
            card.children[i].classList.add(facetCardClassesRight[i]);
            
        }
        
    }
    
})


