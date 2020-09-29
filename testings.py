class Solution:
def numIslands(self, grid: List[List[str]]) -> int:
    if len(grid) == 0:
        return 0
    width, height = len(grid[0]), len(grid)
    visited = [[False] * width for x in range(height)]
