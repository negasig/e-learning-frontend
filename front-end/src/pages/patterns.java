package pages;
public class patterns {
    public static void main(String args[]){
        printPattern(5);
    }
    public static void printPattern(int n)
    {
        int i, j;
        // outer loop to handle number of rows
        for (i = 1; i <=n; i++) {
            // inner loop to handle number of columns
            for (j = 1; j <= i; j++) {
                // printing column values upto the row
                // value.
                System.out.print(j + " ");
            }
 
            // print new line for each row
            System.out.println();
        }
    }
/*   *
    ***
   *****
  *******
 *********
***********
 *********
  *******
   *****
    ***
     * */
}

