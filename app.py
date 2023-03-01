from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

# define API key
# api_key = 'e1cb7be9dce4da99c401e736a03080a2'

@app.route('/')
def home():
    # company = input("Enter the company\n")
    # years = input("Enter number of years(Maximum 5 years)\n")


    # balance_sheet = requests.get(f'https://financialmodelingprep.com/api/v3/balance-sheet-statement/{company}?period=yearly&limit={years}&apikey={api_key}')
    # balance_sheet = (balance_sheet.json())
    # print(balance_sheet)

    return render_template('mywebsite.html')

# @app.route('/results', methods=['POST'])
# def results():
#     # get user input
#     company = request.form['company']
#     period = request.form['period']
#     years = request.form['years']

#     # send request to API
#     balance_sheet = requests.get(f'https://financialmodelingprep.com/api/v3/balance-sheet-statement/{company}?period={period}limit={years}&apikey={api_key}')
#     balance_sheet = balance_sheet.json()

#     # return response
#     return jsonify(balance_sheet)

if __name__ == '__main__':
    app.run(debug=True)
