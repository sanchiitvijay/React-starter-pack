import React from 'react'
import CH from '../components/Home/Core/ReverseEngineering/CH'

const RevEng3 = () => {
  const code=`
#include<bits/stdc++.h>
using namespace std;

string encryptedKey = "secINFO";
string checker = "";
string info = "For more info contact your college's cyber security club";
int swapper[] = {24, 21, 12, 14, 6, 3, 25, 5, 15, 2, 17, 10, 20, 19, 23, 4, 13, 22, 1, 11, 0, 7, 16, 8, 9, 18};

string hasher(string encFlag)
{
	for(int i = 0; i < encFlag.size(); i++)
	{
		encFlag[i] = 'a' + swapper[encFlag[i] - 'a'];
	}

	return encFlag;
}

string decode(string encFlag)
{
	encFlag = hasher(encFlag);

	for(int i = 0; i < encFlag.size(); i++)
	{
		int temp = encFlag[i] - 'a';
		encFlag[i] = 'a' + (2*temp)%26;
	}

	reverse(encFlag.begin(), encFlag.end());

	encFlag = hasher(encFlag);

	for(int i = 0; i < encFlag.size(); i++)
	{
		int temp = encFlag[i] - 'a';
		encFlag[i] = 'a' + (temp + swapper[temp])%26;
	}

	return encFlag;
}

void checkerSetter()
{
	checker.push_back(info[35]);
	checker.push_back(info[31]);
	checker.push_back(info[19]);
	checker.push_back(info[24]);
	checker.push_back(info[41]);
	checker.push_back(info[9]);
	checker.push_back(info[20]);
}
    
int main()
{
	string secretString = "";
	char temp;
	cout<<"Hello there, Are you here to get some information about cyber security?"<<endl;
	cout<<endl;

	cout<<"Enter y for yes and n for no :";	

	cin>>temp;

	if(temp == 'n')
	{
		cout<<endl;
		cout<<"Awww, that's sad, no worries meet you another time"<<endl;
		exit(0);
	}
	secretString.push_back(temp);
	
	cout<<endl;
	cout<<endl;
	
	cout<<"OH cool, Here is some information about it"<<endl;

	cout<<endl;
	
	cout<<"Cybersecurity is a critical aspect of modern digital life, encompassing a range of practices and technologies designed to protect systems, networks, and data from cyber threats. As our dependence on digital platforms increases, the importance of securing these systems from malicious activities such as hacking, phishing, and data breaches becomes paramount. Cybersecurity aims to ensure the confidentiality, integrity, and availability of information."<<endl;

	cout<<endl;
	cout<<"Do you more some more info?"<<endl;
	cout<<endl;
	
	cout<<"Enter y for yes and n for no :";
	
	cin>>temp;

	if(temp == 'n')
	{
		cout<<endl;
		cout<<"OH, that's a bummer, no worries meet you another time"<<endl;
		exit(0);
	}
	secretString.push_back(temp);

	cout<<endl;
	cout<<endl;
	cout<<"cool, you are a curious fellow"<<endl;
	
	cout<<endl;
	cout<<endl;
	
	cout<<"Threat Landscape"<<endl;

	cout<<endl;
	
	cout<<"The cyber threat landscape is continuously evolving, with cybercriminals employing increasingly sophisticated techniques to exploit vulnerabilities. Common threats include malware, ransomware, and social engineering attacks. Malware, such as viruses and trojans, can damage or disable systems, while ransomware encrypts data, demanding payment for its release. Social engineering exploits human psychology to trick individuals into divulging sensitive information."<<endl;
	
	cout<<endl;
	cout<<endl;
	
	cout<<"Do you wish to know about the Protective measures"<<endl;
	cout<<endl;
	
	cout<<"Enter y for yes and n for no :";
	
	cin>>temp;

	if(temp == 'n')
	{
		cout<<endl;
		cout<<"Well, I was just getting into it, no worries meet you another time"<<endl;
		exit(0);
	}
	secretString.push_back(temp);

	cout<<endl;
	cout<<endl;
	
	cout<<"Protective Measures"<<endl;

	cout<<endl;
	cout<<"Effective cybersecurity involves implementing a multi-layered approach. This includes using firewalls and antivirus software, conducting regular system updates, and employing encryption to protect data. Additionally, organizations should develop comprehensive security policies and procedures, and ensure that employees are trained to recognize and respond to potential threats. Regularly updating and patching systems can also mitigate vulnerabilities."<<endl;
	
	cout<<endl;
	cout<<endl;
	
	cout<<"Can I please tell you about the Role of Ethical Hacking"<<endl;
	cout<<endl;
	
	cout<<"Enter y for yes and n for no :";
	
	cin>>temp;

	if(temp == 'n')
	{
		cout<<endl;
		cout<<"But that's the coolest part, no worries meet you another time"<<endl;
		exit(0);
	}
	secretString.push_back(temp);
	cout<<endl;
	cout<<endl;

	cout<<"cool then"<<endl;
	cout<<endl;
	cout<<endl;

	cout<<"Role of Ethical Hacking"<<endl;
	cout<<endl;

	cout<<"Ethical hacking, also known as penetration testing, plays a crucial role in cybersecurity. Ethical hackers use the same techniques as malicious hackers to identify and address security weaknesses before they can be exploited. By simulating cyberattacks, ethical hackers help organizations understand their security posture and improve their defenses, ensuring that vulnerabilities are addressed proactively."<<endl;

	cout<<endl;
	cout<<endl;
	cout<<"Also do you want to know about Importance of incident response"<<endl;
	
	cout<<endl;
	cout<<"Enter y for yes and n for no :";
	
	cin>>temp;

	if(temp == 'n')
	{
		cout<<endl;
		cout<<"Hmmm, that was some cool info, no worries meet you another time"<<endl;
		exit(0);
	}
	secretString.push_back(temp);
	
	cout<<endl;
	cout<<endl;
	cout<<"sure then, here we go"<<endl;
	cout<<endl;
	cout<<endl;
	
	cout<<"Importance of Incident Response"<<endl;
	cout<<endl;
	
	cout<<"Despite the best preventive measures, cyber incidents can still occur. Having a robust incident response plan is essential for minimizing the impact of a cyberattack. An effective incident response plan includes identifying and containing the threat, eradicating the cause, recovering affected systems, and analyzing the incident to prevent future occurrences. Organizations should regularly test and update their incident response plans to remain prepared."<<endl;

	cout<<endl;
	cout<<endl;
	
	cout<<"Should I end it with Future Trends in Cybersecurity"<<endl;
	cout<<endl;
	
	cout<<"Enter y for yes and n for no :";
	
	cin>>temp;

	if(temp == 'n')
	{
		cout<<endl;
		cout<<"I really think you should konw that, no worries meet you another time"<<endl;
		exit(0);
	}
	secretString.push_back(temp);
	

	cout<<endl;
	cout<<endl;
	cout<<"Future Trends in Cybersecurity"<<endl;
	cout<<endl;
	
	cout<<"The future of cybersecurity will likely see the integration of advanced technologies such as artificial intelligence and machine learning to enhance threat detection and response. As the Internet of Things (IoT) expands, securing interconnected devices will become increasingly important. Additionally, with the growing reliance on cloud services, ensuring the security of data stored and processed in the cloud will be a key focus area. Staying ahead of emerging threats will require continuous innovation and adaptation."<<endl;

	cout<<endl;
	cout<<endl;
	cout<<"Phewwww, that was enjoyable, sorry I got a little carried over"<<endl;
	cout<<endl;
	cout<<"Enter y for yes and n for no :";
	
	cin>>temp;

	if(temp == 'n')
	{
		cout<<endl;
		cout<<"Yah Yah, I don't have anything more anyway, meet you next time"<<endl;
		exit(0);
	}
	secretString.push_back(temp);

	cout<<endl;
	cout<<endl;
	cout<<"What dude, I don't have any more information"<<endl;
	cout<<endl;
	cout<<endl;
	cout<<info<<endl;
	checkerSetter();
	if(secretString == checker)
	{
		cout<<endl;
		cout<<"fine you are smart here is your flag secuRIT{";
		cout<<decode(encryptedKey);
		cout<<"}"<<endl;
		cout<<endl;
	}

	cout<<"Well then meet you next time"<<endl;
	return 0;
}


    `;

    const hints=[
        "Upon examining the C++ file, users will notice that their responses are being saved. This should prompt them to try characters other than 'y' or 'n'.",
        "The last line of the conversation provides a major hint to the key.",
        "Users can deduce the key by checking the index of each character in the sequence used to form it."
    ]
  return (
    <div className='
    overflow-y-auto h-screen
   
    '>
        <CH part={3} h={hints} code={code}/>






    </div>
  )
}

export default RevEng3