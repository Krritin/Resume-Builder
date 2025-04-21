import { Flex, Container, Heading, Stack, Text, Button, Box } from '@chakra-ui/react';
import './introduction.css';
import { useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import ThemeTemplateData from '../../db/ThemeTemplateData';
import { Helmet } from 'react-helmet';

export default function Introduction() {
    const { selectBtn, setSelectBtn, setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);

    const handleSelectTemplate = () => {
        setSelectBtn(!selectBtn)
    }

    const showTheme = (e) => {
        setShowComponent(!showComponent)
        setCurrentTheme(e.target.id)
    }


    return (
        <div className="intro-container">

            <Container my={{ base: 1.5, md: 16 }} justifyContent={'center'} flexDirection={{ base: 'column', md: 'column', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'}>
                <Stack
                    width={{ base: '95%', md: '80%' }}
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 1.5, md: 10, sm: '14' }}>

                    {
                        selectBtn
                            ?
                            <>
                                <Heading
                                    fontWeight={600}
                                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                    lineHeight={'110%'}>
                                    Your resume in three{' '}
                                    <Text as={'span'} color={'#38B2AC'}>
                                        easy {' '}
                                    </Text>
                                    steps
                                </Heading>

                                <Text color={'gray.500'} maxW={'3xl'}>
                                    Resume builder tools that assemble well-formatted resume. Through a resume builder, you can create a professional-looking resume in a few easy steps. This resume builder offer different template options, so you can select the template that best fits your needs and style.
                                </Text>

                                <Flex _dark={{ color: 'gray.50' }} textAlign={'start'} flexDirection={'column'} w={'full'}>
                                    <Box className='Bullet_Points'>
                                        <Button>1</Button>
                                        <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                            Select a template from our collection.
                                        </Text>
                                    </Box>
                                    <Box className='Bullet_Points'>
                                        <Button>2</Button>
                                        <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                            Build you resume using our easy to use resume builder.
                                        </Text>
                                    </Box>
                                    <Box className='Bullet_Points'>
                                        <Button>3</Button>
                                        <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                            Download your resume.
                                        </Text>
                                    </Box>
                                </Flex>
                                
                                <Button
                                    onClick={handleSelectTemplate}
                                    rounded={'full'}
                                    px={6}
                                    mt={4}
                                    size={'lg'}
                                    colorScheme={'teal'}
                                    bg={'#38B2AC'}
                                    _hover={{ bg: '#319795' }}>
                                    Select Template
                                </Button>
                            </>
                            :
                            <Heading
                                m={'1.5'}
                                textAlign={'center'}
                                fontWeight={600}
                                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                lineHeight={'110%'}>
                                Select a {' '}
                                <Text as={'span'} color={'#38B2AC'}>
                                    Template {' '}
                                </Text>
                                from the list
                            </Heading>
                    }
                </Stack>

                {
                    !selectBtn &&
                    <Box maxW={{ base: '100%', md: '80%' }} className="templatesList">
                        {
                            ThemeTemplateData.map((item, index) => {
                                return <div key={index} className="template" onClick={showTheme}>
                                    <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
                                </div>
                            })
                        }
                    </Box>
                }
            </Container>
        </div>
    );
}
