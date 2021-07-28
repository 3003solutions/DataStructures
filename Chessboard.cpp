#include<iostream>

using namespace std;               //chessboard pattern

int main() {
	int size = 8;
	
	for(int i=0; i<size; i++) {    // in this code, we are running two loops, one to control rows and another to columns.
		for(int j=0; j<size; j++) {
			if((i+j)%2 == 0)      // When both i+j are even, then we substitute W otherwise we print a B
				cout<<"W";
			else
				cout<<"B";
		}
		cout<<"\n";
	}
	return 0;
}
