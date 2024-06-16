import Image from "next/image";

export default function Home() {
  return (
    <div>
      test('testing a POST route with a payload', async () => {
        let product = {
          name: 'book3'
        };
        const res = await request
        .post('/products')
        .send(product);
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ id: 3, ...product});
      
        const newRes = await request.get('/products');
        let products = [
        {
          id: 1,
          name: 'book'
        },
        {
          id: 2,
          name: 'book2'
        },
        {
          id: 3,
          name: 'book3',
        }
       ];
        expect(newRes.body).toEqual(products);
      });
    </div>
  );
}
