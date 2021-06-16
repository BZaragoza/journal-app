/**
 * @jest-environment jsdom
 */


import fs from 'fs';
import path from 'path';
import cloudinary from 'cloudinary'

import { uploadFile } from '../../helpers/uploadFile'

cloudinary.config({ 
  cloud_name: 'deug2zwdz', 
  api_key: '256523915427281', 
  api_secret: 'MotA6yTrU-Kh-eO6r1smsoEfvk4' 
});


describe('Tests on uploadFile function', () => {

  test('should load a file and return a URL', async (  ) => {

    const res = fs.readFileSync(path.resolve(__dirname, '../../image.png'))
    const file = new File([res], 'pic.png');
    const url = await uploadFile( file )

    expect( typeof(url) ).toBe('string');

    // Delete image using Cloudinary API
    // Get image's id from url and send it to delete that image.
    const segments = url.split('/');
    const imageId = segments[ segments.length - 1 ].replace('.png', '');

    await cloudinary.v2.api.delete_resources( imageId, {}, () => { });

  });
  
  test('should return an error because it\'s not file', async () => {

    const file = new File([], 'pic.png');
    const url = await uploadFile( file )

    expect( url ).toBe( null );

  })
  
  
})
