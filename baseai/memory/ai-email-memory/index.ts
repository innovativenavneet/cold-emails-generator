import {MemoryI} from '@baseai/core';

const memoryAiEmailMemory = (): MemoryI => ({
	name: 'ai-email-memory',
	description: "Contains my resume",
	git: {
		enabled: true,
		include: ['**/*'],
		gitignore: true,
		deployedAt: '',
		embeddedAt: ''
	}
});

export default memoryAiEmailMemory;