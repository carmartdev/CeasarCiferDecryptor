#include "ccd.h"

int ch;

int main(){
  scanf("%d", ch);
  decode();
  return 0;
}
char *decrypted[256];
bool decode(){
  for (int shift = 1; shift <= 25; shift++){
    for (int i = 0; i < len(ch); i++){
      printf("%s", (ch - shift) % 26);
    }
  }
}
