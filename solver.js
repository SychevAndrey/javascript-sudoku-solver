let sudoku = [  [5, 3, 0, 0, 7, 0, 0, 0, 0,],
                [6, 0, 0, 1, 9, 5, 0, 0, 0 ],
                [0 ,9, 8, 0, 0, 0, 0, 6, 0 ],
                [8, 0, 0, 0, 6, 0, 0, 0, 3 ],
                [4, 0, 0, 8, 0, 3, 0, 0, 1 ],
                [7, 0, 0, 0, 2, 0, 0, 0, 6 ],
                [0, 6, 0, 0, 0, 0, 2, 8, 0 ],
                [0, 0, 0, 4, 1, 9, 0, 0, 5 ],
                [0, 0, 0, 0, 8, 0, 0, 7, 9 ]    ];

const printSudoku = (sudoku) => {
    document.write('<p></p>');
    sudoku.forEach(row => {
        document.write('<p style="font-size: 24px; margin-block-start: 0; margin-block-end: 0">');
        row.forEach(number => {
            document.write(number + " ");
        })
        document.writeln('</p>');
    });
}

printSudoku(sudoku);

const possibleNumber = (x, y, n) => {
    for (let i = 0; i < 9; i++) {
        if (sudoku[y][i] == n) return false;
    }
    for (let i = 0; i < 9; i++) {
        if (sudoku[i][x] == n) return false;
    }
    let x0 = (Math.floor(x/3)*3);
    let y0 = (Math.floor(y/3)*3);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (sudoku[y0 + i][x0 + j] == n) return false;
        }
    }
    return true;
}

const solveSudoku = () => {
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            if (sudoku[y][x] == 0) {
                for (let n = 1; n < 10; n++) {
                    if (possibleNumber(x, y, n)) {
                        sudoku[y][x] = n;
                        solveSudoku();
                        sudoku[y][x] = 0;
                    };
                }
                return;    
            }
        }
    }
    printSudoku(sudoku);
}
solveSudoku();
