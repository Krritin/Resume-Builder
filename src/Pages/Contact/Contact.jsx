import { Box, chakra, Flex, useColorModeValue } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

export default function Contact() {
    useEffect(() => {
        // Load the Visme script
        const script = document.createElement('script');
        script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up script when component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Contact Us - Resume Builder</title>
                <meta name="description" content="Contact the Resume Builder team for questions, support, or feedback about our resume creation tools." />
                <meta name="keywords" content="resume builder, contact us, support, questions, feedback" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Contact Us - Resume Builder" />
                <meta property="og:description" content="Contact the Resume Builder team for questions, support, or feedback about our resume creation tools." />
                <meta property="og:url" content="https://quick-resume.netlify.app/contact" />
                <meta property="og:type" content="website" />
            </Helmet>
            <Flex
                textAlign={'center'}
                pt={10}
                justifyContent={'center'}
                direction={'column'}
                width={'full'}>
                <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
                    <chakra.h1
                        py={5}
                        fontSize={48}
                        fontFamily={'Work Sans'}
                        fontWeight={'bold'}
                        color={useColorModeValue('gray.700', 'gray.50')}>
                        Contact Us
                    </chakra.h1>
                    <chakra.h2
                        margin={'auto'}
                        width={'60%'}
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        color={useColorModeValue('gray.500', 'gray.400')}
                        mb={10}>
                        Get in touch with our team
                    </chakra.h2>
                </Box>
                
                <Box width={{ base: '90%', md: '80%', lg: '70%' }} mx="auto" mb={20}>
                    {/* Visme Contact Form */}
                    <div 
                        
                        className="visme_d" 
                        data-title="Contact Form" 
                        data-url="76jx34rz-contact-form" 
                        data-domain="forms" 
                        data-full-page="false" 
                        data-min-height="500px" 
                        data-form-id="124049">
                    </div>
                </Box>
            </Flex>
        </>
    );
} 