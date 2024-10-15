#include <stdio.h>
#include <stdlib.h>

// exercice 1

int puissance(void) {
    int num, i;

    printf("Entrez un chiffre positif: ");
    scanf("%d", &num);
    if (num < 0) {
        printf("Veuillez entrer un chiffre positif.\n");
        return 1;
    }
    printf("Table de multiplication de %d:\n", num);
    for (i = 1; i <= 10; ++i) {
        printf("%d x %d = %d\n", num, i, num * i);
    }
    return 0;
}

// exercice 2


int ex_2(int n) {
    if (n <= 0) {
        printf("Veuillez entrer un nombre positif.\n");
        return 0;
    }
    int *tr = (int *)malloc(n * sizeof(int));
    if (tr == NULL) {
        printf("L'allocation de mémoire a échoué.\n");
        return 0;
    }
    return 1;
}

// exercice 3

int Hanoi_recursif(int n){
}

// exercice 4
int absolu(int a) {
    printf("Adresse de a: %p\n", (void*)&a);
    if (a < 0) {
        return -a;
    } else {
        return a;
    }
}




int main(void) {
    printf("Exercice 1\n");
    printf("%d\n", puissance());
    printf("Exercice 2\n");
    printf("%d\n", ex_2(54));
    printf("Exercice 4\n");
    int i = -20;
    printf("%d\n", absolu(i));
    return 0;
}

