import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EventHandlerService {
  // data: any;
  // constructor(private _http: HttpClient) {}
  // private _url = ' http://localhost:3000/users';
  // getData() {
  //   return this._http.get(this._url);
  // }

  userDetails = [
    {
      name: 'ertyrtre',
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://media.istockphoto.com/vectors/vector-businessman-black-silhouette-isolated-vector-id610003972?k=20&m=610003972&s=612x612&w=0&h=-Nftbu4sDVavoJTq5REPpPpV-kXH9hXXE3xg_D3ViKE=',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'gfjfg',
      id: 2,
      title: 'reprehenderit est deserunt velit ipsam',
      url: 'https://us.123rf.com/450wm/apoev/apoev1903/apoev190300026/124671058-person-gray-photo-placeholder-man-in-a-costume-on-gray-background.jpg?ver=6',
      thumbnailUrl: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'xgnfgxh',
      id: 3,
      title: 'officia porro iure quia iusto qui ipsa ut modi',
      url: 'https://us.123rf.com/450wm/apoev/apoev1904/apoev190400012/124108711-person-gray-photo-placeholder-woman-in-costume-on-white-background.jpg?ver=6',
      thumbnailUrl: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'ghjdghj',
      id: 4,
      title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
      url: 'https://us.123rf.com/450wm/apoev/apoev1903/apoev190300028/124671059-person-gray-photo-placeholder-man-in-t-shirt-on-gray-background.jpg?ver=6',
      thumbnailUrl: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'vfbfghsfh',
      id: 5,
      title: 'natus nisi omnis corporis facere molestiae rerum in',
      url: 'https://media.istockphoto.com/vectors/man-silhouette-profile-picture-vector-id526947869?k=20&m=526947869&s=612x612&w=0&h=j528SMpxB1AOCNs-WUcuQjvNRVuO-0PO1djfq-Rq6dE=',
      thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
    },
    {
      name: 'dzftgdfg',
      id: 6,
      title: 'accusamus ea aliquid et amet sequi nemo',
      url: 'https://media.istockphoto.com/vectors/female-avatar-profile-picture-on-white-background-vector-id1164822176?k=20&m=1164822176&s=612x612&w=0&h=x2nxPIFrJZPw9RhrdOAIkXf542bLKa-RDsVMpvEvj3E=',
      thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
    },
    {
      name: 'hjkljkl',
      id: 7,
      title: 'officia delectus consequatur vero aut veniam explicabo molestias',
      url: 'https://media.istockphoto.com/vectors/vector-businessman-black-silhouette-isolated-vector-id610003972?k=20&m=610003972&s=612x612&w=0&h=-Nftbu4sDVavoJTq5REPpPpV-kXH9hXXE3xg_D3ViKE=',
      thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
    },
    {
      name: 'hjkfhkh',
      id: 8,
      title: 'aut porro officiis laborum odit ea laudantium corporis',
      url: 'https://us.123rf.com/450wm/apoev/apoev1902/apoev190200082/125259956-person-gray-photo-placeholder-woman-in-shirt-on-white-background.jpg?ver=6',
      thumbnailUrl: 'https://via.placeholder.com/150/54176f',
    },
    {
      name: 'fghfh',
      id: 9,
      title: 'qui eius qui autem sed',
      url: 'https://us.123rf.com/450wm/apoev/apoev1904/apoev190400012/124108711-person-gray-photo-placeholder-woman-in-costume-on-white-background.jpg?ver=6',
      thumbnailUrl: 'https://via.placeholder.com/150/51aa97',
    },
  ];

  getData() {
    return of(this.userDetails);
  }
}