import json
import requests
import unittest


class TestAltaDeIntereses(unittest.TestCase):

    def test_agregarUnInteresValidoDebeDarUnStatusCodeDe201(self):
        port = 5000
        interest = {
            "interest": {
                "category": "music/band",
                "value": "radiohead"
            }
        }
        head = {'content-type': 'application/json'}
        request = requests.post('http://localhost:'+ str(port) +'/interests',data = json.dumps(interest), headers = head)
        self.assertEqual(request.status_code, 201);



    def test_alAgregarUnInteresConFormatoIncorrectoDeberiaDarError(self):
        port = 5000
        interest = {
            "interest": {
                "category": "music/band",
                }
        }
        head = {'content-type': 'application/json'}
        request = requests.post('http://localhost:'+ str(port) +'/interests',data = json.dumps(interest), headers = head)
        self.assertEqual(request.status_code, 400)
        self.assertEqual(request.text,'Formato de interes invalido')






if __name__ == '__main__':
    unittest.main()
