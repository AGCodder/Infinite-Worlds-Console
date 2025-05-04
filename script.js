document.getElementById("generate-game").addEventListener("click", function() {
    const plot = document.getElementById("plot-input").value;
    const selectedTags = Array.from(document.querySelectorAll('.tags-container .tag.selected'))
                               .map(tag => tag.textContent);
  
    document.getElementById("preview-plot").textContent = plot;
    document.getElementById("preview-tags").textContent = "Tags: " + selectedTags.join(', ');
  
    // Optionally, set a default game title or generate one dynamically.
    document.getElementById("preview-title").textContent = "Generated Game Title";
  });
  